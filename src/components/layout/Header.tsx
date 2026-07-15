"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, Phone } from "lucide-react";
import { siteContent } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/shared/Logo";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sage-500 focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-8 left-0 right-0 z-30 transition-all duration-300 backdrop-blur-md",
          isScrolled
            ? "bg-cream-50/70 shadow-sm py-3"
            : "bg-cream-50/30 py-5"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <Navigation />
              <a
                href={siteContent.contact.phoneLink}
                className="inline-flex items-center gap-1.5 ml-2 px-4 py-[9px] text-sm font-medium rounded-lg border border-sage-300 text-sage-700 bg-transparent hover:bg-sage-600 hover:text-white hover:border-sage-600 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                {siteContent.contact.phone}
              </a>
              <a
                href={siteContent.booking.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-[18px] py-[10px] text-sm font-medium rounded-lg bg-sage-600 text-white hover:bg-sage-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Book Online
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
