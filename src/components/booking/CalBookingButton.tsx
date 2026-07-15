import type { ReactNode } from "react";
import { siteContent } from "@/lib/content";

interface CalBookingButtonProps {
  children?: ReactNode;
  size?: "md" | "lg";
  className?: string;
}

export function CalBookingButton({
  children = "Book Online",
  size = "lg",
  className,
}: CalBookingButtonProps) {
  const sizeClasses = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";

  return (
    <a
      href={siteContent.booking.calUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center font-medium rounded-md",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2",
        "relative overflow-hidden",
        "bg-sage-500 text-white hover:bg-sage-600 active:bg-sage-700 btn-fill-hover",
        sizeClasses,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}
