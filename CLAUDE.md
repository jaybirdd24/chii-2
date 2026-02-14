# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `/chii-wellness/`:

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Run production server
```

## Architecture

### Tech Stack
- Next.js 16 with App Router (server components by default)
- React 19
- Tailwind CSS 4 (configured via `@theme inline` in globals.css)
- TypeScript with strict mode

### Directory Structure
```
chii-wellness/src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                 # Atomic components (Button, Card, Container, SectionHeading)
│   ├── layout/             # Site structure (Header, Footer, Navigation, MobileMenu)
│   ├── sections/           # Page sections (Hero, ServiceDetail, etc.)
│   └── shared/             # Shared components (Logo)
└── lib/
    ├── utils.ts            # cn() helper (clsx + tailwind-merge)
    ├── content.ts          # Site copy and navigation data
    └── services.ts         # Service definitions with getServiceBySlug()
```

### Component Patterns
- Client components marked with `"use client"` (Header, MobileMenu)
- UI components support variants via `cn()` utility
- Static content lives in `lib/content.ts` and `lib/services.ts`

### Design System
Colors defined as CSS variables in `globals.css`:
- **Sage greens**: `--sage-50` through `--sage-700` (primary: #87A06F)
- **Cream**: `--cream-50` through `--cream-400` (background: #FFF8F0)
- **Text**: `--text-primary` (#2D3028), `--text-secondary`, `--text-muted`

Typography:
- Headings: Cormorant Garamond (`font-heading` class)
- Body: DM Sans (`font-body` class)
