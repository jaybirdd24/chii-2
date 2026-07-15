#!/usr/bin/env bash
#
# deploy.sh — pull the latest code and redeploy the Next.js site on the Pi.
#
# Runs ON THE RASPBERRY PI. Safe to re-run any time. It:
#   1. Fetches and hard-resets the local checkout to origin/<branch>
#   2. Installs deps only if package-lock.json changed
#   3. Builds the production bundle  (if this fails, the running site is untouched)
#   4. Restarts the systemd service and health-checks it
#
# Usage:
#   ./deploy.sh              # deploy origin/main
#   BRANCH=booking ./deploy.sh
#
# First-time setup expected (see the deploy plan):
#   - Node 20/22 LTS installed
#   - next.config.ts has output: "standalone"
#   - a systemd unit named "$SERVICE" running the standalone server:
#       ExecStart=/usr/bin/node server.js
#       WorkingDirectory=<repo>/.next/standalone
#       Environment=NODE_ENV=production PORT=3000 HOSTNAME=127.0.0.1
#   - this repo cloned at the location of this script

set -euo pipefail

# ---- Config (override via env) --------------------------------------------
BRANCH="${BRANCH:-main}"          # git branch to deploy
SERVICE="${SERVICE:-chii2}"       # systemd service name
PORT="${PORT:-3000}"              # port the app listens on
# ---------------------------------------------------------------------------

# Always operate from the repo this script lives in.
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

log() { printf '\033[1;32m[deploy %(%H:%M:%S)T]\033[0m %s\n' -1 "$*"; }
die() { printf '\033[1;31m[deploy]\033[0m %s\n' "$*" >&2; exit 1; }

command -v git  >/dev/null || die "git not found"
command -v npm  >/dev/null || die "npm not found"

# ---- 1. Update the checkout -----------------------------------------------
log "Fetching origin/$BRANCH ..."
LOCK_BEFORE="$(git hash-object package-lock.json 2>/dev/null || echo none)"

git fetch --prune origin "$BRANCH"
# Hard reset so the deploy box always exactly matches the remote branch.
# (Discards any local edits on the Pi — this box should not be edited directly.)
git reset --hard "origin/$BRANCH"
git rev-parse --short HEAD | xargs -I{} log "Now at commit {}"

LOCK_AFTER="$(git hash-object package-lock.json 2>/dev/null || echo none)"

# ---- 2. Dependencies (only when the lockfile changed) ---------------------
if [[ "$LOCK_BEFORE" != "$LOCK_AFTER" || ! -d node_modules ]]; then
  log "Lockfile changed (or node_modules missing) — running npm ci ..."
  npm ci
else
  log "Dependencies unchanged — skipping npm ci."
fi

# ---- 3. Build (before touching the running service) -----------------------
log "Building production bundle (standalone) ..."
# If the 4GB Pi ever OOMs during build, uncomment the next line:
# export NODE_OPTIONS="--max-old-space-size=2048"
npm run build
log "Build succeeded."

# ---- 3b. Stage static assets into the standalone bundle -------------------
# `output: "standalone"` produces .next/standalone/server.js but does NOT
# copy static assets — the server 404s CSS/JS/images without this step.
[[ -d .next/standalone ]] || die "No .next/standalone — is output:\"standalone\" set in next.config.ts?"
log "Copying static assets into the standalone bundle ..."
cp -r .next/static ".next/standalone/.next/static"
if [[ -d public ]]; then
  cp -r public ".next/standalone/public"
fi

# ---- 4. Restart + health check --------------------------------------------
log "Restarting service '$SERVICE' ..."
sudo systemctl restart "$SERVICE"

log "Waiting for http://localhost:$PORT ..."
for i in $(seq 1 30); do
  if curl -fsS -o /dev/null "http://localhost:$PORT"; then
    log "Site is up. ✅  Deploy complete."
    exit 0
  fi
  sleep 1
done

# Health check failed — surface logs and fail loudly.
die "Service did not respond on port $PORT after 30s. Check: sudo journalctl -u $SERVICE -n 50"
