"use client";

import { cn } from "@/lib/utils";
import { TransitionLink as Link } from "@/components/ui/TransitionLink";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { navigation } from "@/lib/content";

export function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, itemName: string, hasChildren: boolean) => {
      if (!hasChildren) return;

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpenDropdown(openDropdown === itemName ? null : itemName);
      } else if (e.key === "Escape") {
        setOpenDropdown(null);
      } else if (e.key === "ArrowDown" && openDropdown === itemName) {
        e.preventDefault();
        const firstLink = dropdownRef.current?.querySelector("a");
        firstLink?.focus();
      }
    },
    [openDropdown]
  );

  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
      }
    },
    []
  );

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => item.children && setOpenDropdown(item.name)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.children ? (
            <>
              <button
                aria-expanded={openDropdown === item.name}
                aria-haspopup="true"
                aria-label={`${item.name} menu`}
                onKeyDown={(e) => handleKeyDown(e, item.name, true)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors nav-link-underline",
                  isActive(item.href)
                    ? "text-sage-600"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {item.name}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    openDropdown === item.name && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown */}
              {openDropdown === item.name && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 pt-2 animate-slide-down"
                  onKeyDown={handleDropdownKeyDown}
                >
                  <div
                    role="menu"
                    className="bg-surface rounded-lg shadow-lg py-2 min-w-48 border border-border"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        role="menuitem"
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          isActive(child.href)
                            ? "text-sage-600 bg-sage-50"
                            : "text-text-secondary hover:text-text-primary hover:bg-cream-100"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors nav-link-underline",
                isActive(item.href)
                  ? "text-sage-600"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
