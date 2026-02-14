"use client";

import { cn } from "@/lib/utils";
import { TransitionLink as Link } from "@/components/ui/TransitionLink";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-heading text-2xl md:text-3xl tracking-tight",
        variant === "default" ? "text-text-primary" : "text-cream-50",
        className
      )}
    >
      Chii
    </Link>
  );
}
