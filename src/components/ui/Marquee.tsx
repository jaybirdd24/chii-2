"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export function Marquee({ items, speed = 40, className }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container || prefersReduced) return;

    // Measure width of one set of items
    const firstSet = track.querySelector(".marquee-set") as HTMLElement;
    if (!firstSet) return;
    const setWidth = firstSet.offsetWidth;

    const tween = gsap.to(track, {
      x: -setWidth,
      duration: setWidth / speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % setWidth),
      },
    });

    tweenRef.current = tween;

    // Pause tween when marquee is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tween.play();
        } else {
          tween.pause();
        }
      },
      { threshold: 0 }
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      tween.kill();
    };
  }, [prefersReduced, speed, items]);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.play();

  const separator = " \u00B7 ";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`overflow-hidden py-8 lg:py-12 bg-sage-50 ${className ?? ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {[0, 1, 2].map((setIndex) => (
          <div key={setIndex} className="marquee-set flex shrink-0">
            {items.map((item, i) => (
              <span key={`${setIndex}-${i}`} className="flex items-center">
                <span
                  className={`font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl px-3 sm:px-4 ${
                    i % 2 === 0
                      ? "text-sage-600"
                      : "text-transparent [-webkit-text-stroke:1px_var(--sage-400)]"
                  }`}
                >
                  {item}
                </span>
                <span className="text-sage-300 text-2xl px-2">{separator}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
