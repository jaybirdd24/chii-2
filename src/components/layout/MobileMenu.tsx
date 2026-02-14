"use client";

import { cn } from "@/lib/utils";
import { TransitionLink as Link } from "@/components/ui/TransitionLink";
import { usePathname } from "next/navigation";
import { X, ChevronDown, Phone } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { navigation, siteContent } from "@/lib/content";
import { Logo } from "@/components/shared/Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  // Focus trap and Escape key
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button when menu opens
    closeButtonRef.current?.focus();

    const panel = panelRef.current;
    if (!panel) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClose();
      }
    },
    [onClose]
  );

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        onKeyDown={handleOverlayKeyDown}
        role="button"
        tabIndex={-1}
        aria-label="Close menu"
      />

      {/* Menu Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-sm bg-cream-50 z-50 lg:hidden",
          "transform transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Logo />
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {/* Call Us CTA */}
          <a
            href={siteContent.contact.phoneLink}
            className="flex items-center justify-center gap-2 mx-2 sm:mx-4 mb-4 px-4 py-3 rounded-md bg-sage-500 text-white font-medium hover:bg-sage-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Us — {siteContent.contact.phone}
          </a>

          {navigation.map((item) => (
            <div key={item.name} className="border-b border-border last:border-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    aria-expanded={openSubmenu === item.name}
                    aria-label={`${item.name} submenu`}
                    className={cn(
                      "flex items-center justify-between w-full py-4 text-lg font-medium",
                      isActive(item.href)
                        ? "text-sage-600"
                        : "text-text-primary"
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform",
                        openSubmenu === item.name && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Submenu */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openSubmenu === item.name ? "max-h-96 pb-2" : "max-h-0"
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={onClose}
                        className={cn(
                          "block py-2 pl-4 text-base transition-colors",
                          isActive(child.href)
                            ? "text-sage-600"
                            : "text-text-secondary hover:text-text-primary"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block py-4 text-lg font-medium transition-colors",
                    isActive(item.href)
                      ? "text-sage-600"
                      : "text-text-primary hover:text-sage-600"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
