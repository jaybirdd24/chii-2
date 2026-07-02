"use client";

import { useEffect, useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_NAMESPACE = "chii-booking";
const CAL_BASE_URL = "https://cal.com";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CalType = any;

const calUiConfig = {
  theme: "auto" as const,
  cssVarsPerTheme: {
    light: {
      "cal-brand": "#87A06F",
      "cal-text": "#2D3028",
      "cal-text-emphasis": "#2D3028",
      "cal-border-emphasis": "#D1D9CA",
      "cal-text-subtle": "#5A5D55",
      "cal-border-subtle": "#E8EBE4",
      "cal-border-booker": "#E8EBE4",
      "cal-bg": "#FFFDF9",
      "cal-bg-emphasis": "#F4F6F2",
    },
    dark: {
      "cal-brand": "#A3BA8F",
      "cal-text": "#d4d0cc",
      "cal-text-emphasis": "#e8e5e1",
      "cal-border-emphasis": "#3a4536",
      "cal-text-subtle": "#8a857e",
      "cal-border-subtle": "#2e3529",
      "cal-border-booker": "#2e3529",
      "cal-bg": "#1c2118",
      "cal-bg-emphasis": "#252d21",
    },
  },
  hideEventTypeDetails: false,
};

interface CalBookingButtonProps {
  calLink?: string;
  children?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}

export function CalBookingButton({
  calLink,
  children = "Book Online",
  size = "lg",
  className,
}: CalBookingButtonProps) {
  const link = calLink ?? process.env.NEXT_PUBLIC_CAL_LINK ?? "";
  const bookingUrl = `${CAL_BASE_URL}/${link}`;

  useEffect(() => {
    // Kick off embed script load and configure UI
    // Don't cache the return value — the namespace function gets replaced
    // by the real implementation once the embed script loads
    getCalApi({ namespace: CAL_NAMESPACE }).then((cal: CalType) => {
      cal("ui", calUiConfig);
    });
  }, []);

  const handleClick = useCallback(() => {
    // Always read window.Cal.ns[namespace] fresh — caching it causes a stale
    // reference after the embed script replaces the initial queue function
    const w = window as CalType;
    const calRoot: CalType = w.Cal;
    const cal: CalType = calRoot?.ns?.[CAL_NAMESPACE] ?? calRoot;
    const isEmbedReady = Boolean(calRoot?.version);

    if (!link) return;

    if (cal && isEmbedReady) {
      try {
        cal("modal", {
          calLink: link,
          config: { layout: "month_view" },
        });
        return;
      } catch {
        // fall through to direct navigation
      }
    }

    window.open(bookingUrl, "_blank", "noopener,noreferrer");
  }, [bookingUrl, link]);

  const sizeClasses = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";

  return (
    <button
      type="button"
      onClick={handleClick}
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
    </button>
  );
}
