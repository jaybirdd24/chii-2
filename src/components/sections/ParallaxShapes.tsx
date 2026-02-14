"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ParallaxShapes() {
  const shape1 = useRef<HTMLDivElement>(null);
  const shape2 = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (shape1.current) {
        gsap.to(shape1.current, {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: shape1.current.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (shape2.current) {
        gsap.to(shape2.current, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: shape2.current.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <>
      <div
        ref={shape1}
        className="absolute top-10 right-4 w-48 h-48 md:top-20 md:right-10 md:w-72 md:h-72 bg-sage-200 rounded-full blur-3xl opacity-30 will-change-transform"
      />
      <div
        ref={shape2}
        className="absolute bottom-10 left-4 w-64 h-64 md:bottom-20 md:left-10 md:w-96 md:h-96 bg-sage-100 rounded-full blur-3xl opacity-40 will-change-transform"
      />
    </>
  );
}
