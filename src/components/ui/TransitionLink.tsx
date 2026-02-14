"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition, type ComponentProps, type MouseEvent } from "react";

type TransitionLinkProps = ComponentProps<typeof Link>;

function shouldInterceptClick(
  e: MouseEvent<HTMLAnchorElement>,
  href: string
): boolean {
  // Don't intercept modifier-key clicks (new tab, etc.)
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return false;

  // Don't intercept non-left clicks
  if (e.button !== 0) return false;

  // Don't intercept external URLs, tel:, mailto:, hash-only
  const hrefStr = typeof href === "string" ? href : "";
  if (/^(https?:\/\/|tel:|mailto:|#)/.test(hrefStr)) return false;

  // Don't intercept if browser doesn't support View Transitions
  if (!document.startViewTransition) return false;

  return true;
}

export function TransitionLink({ href, onClick, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call any existing onClick handler first (e.g. MobileMenu's onClose)
    onClick?.(e);

    const url = typeof href === "string" ? href : href.pathname ?? "/";

    if (!shouldInterceptClick(e, url)) return;

    e.preventDefault();

    document.startViewTransition(() => {
      startTransition(() => {
        router.push(url);
      });
    });
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
