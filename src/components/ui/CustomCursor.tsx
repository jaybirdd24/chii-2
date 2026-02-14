"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || prefersReduced) return;

    // Only show on pointer:fine (non-touch) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("custom-cursor-active");
    dot.style.display = "block";
    ring.style.display = "block";

    // Dot follows immediately, ring trails behind
    const dotX = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power2" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power2" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onEnterInteractive = () => {
      gsap.to(dot, { scale: 0, duration: 0.25, ease: "power2.out" });
      gsap.to(ring, { scale: 1.8, borderWidth: 1.5, duration: 0.3, ease: "power2.out" });
    };

    const onLeaveInteractive = () => {
      gsap.to(dot, { scale: 1, duration: 0.25, ease: "power2.out" });
      gsap.to(ring, { scale: 1, borderWidth: 1.5, duration: 0.3, ease: "power2.out" });
    };

    const onMouseLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };

    const onMouseEnterWindow = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    // Event delegation — handles dynamic elements without MutationObserver
    const interactiveSelector = 'a, button, [role="button"], input, textarea, select';
    let isOverInteractive = false;

    const onOverDelegate = (e: Event) => {
      const target = (e.target as Element).closest(interactiveSelector);
      if (target && !isOverInteractive) {
        isOverInteractive = true;
        onEnterInteractive();
      }
    };

    const onOutDelegate = (e: Event) => {
      const me = e as MouseEvent;
      const related = me.relatedTarget as Element | null;
      if (isOverInteractive && (!related || !related.closest(interactiveSelector))) {
        isOverInteractive = false;
        onLeaveInteractive();
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);
    document.body.addEventListener("mouseover", onOverDelegate);
    document.body.addEventListener("mouseout", onOutDelegate);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      document.body.removeEventListener("mouseover", onOverDelegate);
      document.body.removeEventListener("mouseout", onOutDelegate);
    };
  }, [prefersReduced]);

  const shared = {
    display: "none" as const,
    position: "fixed" as const,
    top: 0,
    left: 0,
    borderRadius: "50%",
    pointerEvents: "none" as const,
    zIndex: 9999,
    transform: "translate(-50%, -50%)",
  };

  return (
    <>
      {/* Small solid dot */}
      <div
        ref={dotRef}
        style={{
          ...shared,
          width: 6,
          height: 6,
          backgroundColor: "var(--sage-600)",
        }}
      />
      {/* Larger trailing ring */}
      <div
        ref={ringRef}
        style={{
          ...shared,
          width: 36,
          height: 36,
          border: "1.5px solid var(--sage-400)",
          backgroundColor: "transparent",
        }}
      />
    </>
  );
}
