"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // iOS/Android already have native momentum scrolling. Lenis intercepts
    // touchstart/touchmove and calls preventDefault(), which prevents touch
    // events from converting to click events — breaking all buttons on iOS.
    const isTouchDevice = window.matchMedia("(any-pointer: coarse)").matches;

    if (prefersReduced || isTouchDevice) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as unknown as gsap.TickerCallback);
    };
  }, [prefersReduced]);

  return <>{children}</>;
}
