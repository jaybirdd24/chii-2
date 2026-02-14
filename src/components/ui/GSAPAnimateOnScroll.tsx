"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE, DURATION, SCROLL_TRIGGER } from "@/lib/animation-config";

interface GSAPAnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export function GSAPAnimateOnScroll({
  children,
  className,
  delay = 0,
  duration = DURATION.default,
  y = 30,
}: GSAPAnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        delay: delay / 1000,
        ease: EASE.default,
        scrollTrigger: {
          trigger: el,
          start: SCROLL_TRIGGER.start,
          toggleActions: SCROLL_TRIGGER.toggleActions,
        },
      });
    });

    return () => ctx.revert();
  }, [prefersReduced, delay, duration, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
