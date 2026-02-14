"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE, DURATION } from "@/lib/animation-config";

interface HeroAnimatedProps {
  children: ReactNode;
}

export function HeroAnimated({ children }: HeroAnimatedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    const tagline = el.querySelector("[data-gsap-hero-tagline]");
    const words = el.querySelectorAll("[data-gsap-hero-word]");
    const sub = el.querySelector("[data-gsap-hero-sub]");
    const cta = el.querySelector("[data-gsap-hero-cta]");
    const scroll = el.querySelector("[data-gsap-hero-scroll]");

    // Set initial states
    const allElements = [tagline, ...Array.from(words), sub, cta, scroll].filter(Boolean);
    gsap.set(allElements, { opacity: 0, y: 20 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      if (tagline) {
        tl.to(tagline, {
          opacity: 1,
          y: 0,
          duration: DURATION.fast,
          ease: EASE.default,
        });
      }

      if (words.length) {
        tl.to(words, {
          opacity: 1,
          y: 0,
          duration: DURATION.hero,
          stagger: 0.08,
          ease: EASE.default,
        }, "-=0.2");
      }

      if (sub) {
        tl.to(sub, {
          opacity: 1,
          y: 0,
          duration: DURATION.default,
          ease: EASE.default,
        }, "-=0.4");
      }

      if (cta) {
        tl.to(cta, {
          opacity: 1,
          y: 0,
          duration: DURATION.default,
          ease: EASE.default,
        }, "-=0.3");
      }

      if (scroll) {
        tl.to(scroll, {
          opacity: 1,
          y: 0,
          duration: DURATION.fast,
          ease: EASE.default,
        }, "-=0.2");
      }
    });

    return () => ctx.revert();
  }, [prefersReduced]);

  return <div ref={ref}>{children}</div>;
}
