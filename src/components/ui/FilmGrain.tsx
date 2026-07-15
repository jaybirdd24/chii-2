"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FilmGrain() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  // iOS Safari compositor bug: position:fixed + SVG feTurbulence filter ignores
  // pointer-events:none for touch input despite working in Chrome. Use
  // any-pointer:coarse to also catch iPads with Magic Keyboard (pointer:fine
  // primary but still has a touchscreen). Grain is imperceptible at opacity 0.03.
  if (typeof window !== "undefined" && window.matchMedia("(any-pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      inert
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9998,
        opacity: 0.03,
      }}
    >
      <svg width="100%" height="100%" style={{ pointerEvents: "none" }}>
        <filter id="film-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain)" />
      </svg>
    </div>
  );
}
