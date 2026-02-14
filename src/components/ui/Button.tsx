"use client";

import { cn } from "@/lib/utils";
import { TransitionLink as Link } from "@/components/ui/TransitionLink";
import { useMagneticButton } from "@/hooks/useMagneticButton";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantClasses = {
  primary:
    "bg-sage-500 text-white hover:bg-sage-600 active:bg-sage-700 btn-fill-hover",
  secondary:
    "bg-cream-300 text-text-primary hover:bg-cream-400 active:bg-cream-400",
  outline:
    "border-2 border-sage-400 text-sage-600 hover:bg-sage-50 active:bg-sage-100",
  ghost:
    "text-sage-600 hover:bg-sage-50 active:bg-sage-100",
};

const sizeClasses = {
  sm: "px-4 py-2.5 text-sm min-h-[44px]",
  md: "px-6 py-3 text-base min-h-[44px]",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const { ref: magneticRef, onMouseMove, onMouseLeave } = useMagneticButton();
  const isPrimary = variant === "primary";

  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium rounded-md",
    "transition-all duration-300 ease-out",
    "hover:-translate-y-0.5 active:translate-y-0",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
    "relative overflow-hidden",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const inner = <span className="relative z-10">{children}</span>;

  if (href) {
    const link = (
      <Link href={href} className={baseClasses}>
        {inner}
      </Link>
    );

    if (isPrimary) {
      return (
        <span
          ref={magneticRef as React.RefObject<HTMLSpanElement>}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="inline-block"
        >
          {link}
        </span>
      );
    }

    return link;
  }

  if (isPrimary) {
    return (
      <span
        ref={magneticRef as React.RefObject<HTMLSpanElement>}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="inline-block"
      >
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={baseClasses}
        >
          {inner}
        </button>
      </span>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {inner}
    </button>
  );
}
