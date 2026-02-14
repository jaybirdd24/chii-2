// Shared animation constants for GSAP animations

export const EASE = {
  default: "power3.out",
  smooth: "power2.out",
  elastic: "elastic.out(1, 0.3)",
  bounce: "back.out(1.7)",
} as const;

export const DURATION = {
  fast: 0.4,
  default: 0.8,
  slow: 1.2,
  hero: 0.8,
} as const;

export const STAGGER = {
  fast: 0.06,
  default: 0.1,
  slow: 0.15,
} as const;

export const SCROLL_TRIGGER = {
  start: "top 85%",
  end: "top 20%",
  toggleActions: "play none none none",
} as const;

export const PARALLAX = {
  slow: 0.12,
  medium: 0.2,
  fast: 0.3,
} as const;
