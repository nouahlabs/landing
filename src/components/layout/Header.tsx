"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const onDarkHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/90 shadow-sm backdrop-blur-md"
            : "bg-transparent",
          onDarkHero ? "text-white" : "text-text"
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Logo accentClassName={onDarkHero ? "text-accent-light" : undefined} />

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  onDarkHero
                    ? "text-white/72 hover:text-white"
                    : "text-text-secondary hover:text-text"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-md bg-accent px-4 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-dark"
            >
              Start a Project
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              "flex flex-col gap-1.5 rounded-md border p-2 md:hidden",
              onDarkHero
                ? "border-white/20 bg-white/10"
                : "border-border bg-white"
            )}
            aria-label="Open menu"
          >
            <span
              className={cn("block h-0.5 w-5", onDarkHero ? "bg-white" : "bg-dark")}
            />
            <span
              className={cn("block h-0.5 w-5", onDarkHero ? "bg-white" : "bg-dark")}
            />
            <span
              className={cn(
                "block h-0.5 w-3.5",
                onDarkHero ? "bg-white" : "bg-dark"
              )}
            />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
