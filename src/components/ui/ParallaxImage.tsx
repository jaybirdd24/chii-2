"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { PARALLAX } from "@/lib/animation-config";

interface ParallaxImageProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxImage({
  children,
  speed = PARALLAX.medium,
  className,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: () => speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [prefersReduced, speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
