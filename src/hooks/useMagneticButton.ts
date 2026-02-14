"use client";

import { useRef, useCallback, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function useMagneticButton() {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = !window.matchMedia("(pointer: fine)").matches;
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReduced || isTouch.current) return;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(el, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
    [prefersReduced]
  );

  const onMouseLeave = useCallback(() => {
    if (prefersReduced || isTouch.current) return;
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [prefersReduced]);

  return { ref, onMouseMove, onMouseLeave };
}
