"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TextRevealOnScrollProps {
  text: string;
  className?: string;
}

export function TextRevealOnScroll({ text, className }: TextRevealOnScrollProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    const words = el.querySelectorAll(".reveal-word");
    if (!words.length) return;

    gsap.set(words, { opacity: 0.12 });

    const ctx = gsap.context(() => {
      gsap.to(words, {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [prefersReduced, text]);

  return (
    <p ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="reveal-word inline-block mr-[0.3em]">
          {word}
        </span>
      ))}
    </p>
  );
}
