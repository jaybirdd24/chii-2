"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE, DURATION, STAGGER, SCROLL_TRIGGER } from "@/lib/animation-config";

interface GSAPStaggerGridProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
}

export function GSAPStaggerGrid({
  children,
  className,
  stagger = STAGGER.default,
  y = 40,
}: GSAPStaggerGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.children;
    if (!items.length) return;

    if (prefersReduced) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: DURATION.default,
        stagger,
        ease: EASE.default,
        scrollTrigger: {
          trigger: el,
          start: SCROLL_TRIGGER.start,
          toggleActions: SCROLL_TRIGGER.toggleActions,
        },
      });
    });

    return () => ctx.revert();
  }, [prefersReduced, stagger, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
