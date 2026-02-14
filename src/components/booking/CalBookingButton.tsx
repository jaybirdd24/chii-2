"use client";

import { useRef, useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_NAMESPACE = "chii-booking";

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
  const calReadyRef = useRef(false);

  const initCal = useCallback(async () => {
    if (calReadyRef.current) return;
    calReadyRef.current = true;

    const cal = await getCalApi({ namespace: CAL_NAMESPACE });
    cal("ui", {
      theme: "auto",
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
    });
  }, []);

  const sizeClasses = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";

  return (
    <button
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={link}
      data-cal-config='{"layout":"month_view"}'
      onClick={initCal}
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
