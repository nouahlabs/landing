"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { localizedPath, type Locale } from "@/i18n/config";
import type { SiteConfig } from "@/types";
import { cn } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
  settings: SiteConfig;
  labels: {
    startProject: string;
    light: string;
    dark: string;
    themeToggle: string;
  };
}

export function Header({ locale, settings, labels }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const homePath = localizedPath("/", locale);
  const onHomeTop =
    (pathname === homePath || pathname === `${homePath}/`) && !scrolled;

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
            : "border-b border-border/60 bg-background/78 backdrop-blur-md",
          "text-text"
        )}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Logo
            href={homePath}
            accentClassName={onHomeTop ? "text-accent-foreground" : undefined}
          />

          <nav className="hidden items-center gap-8 md:flex">
            {settings.nav.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(item.href, locale)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  "text-text-secondary hover:text-text"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={localizedPath("/contact", locale)}
              className="rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-dark transition-colors hover:bg-accent-light"
            >
              {labels.startProject}
            </Link>
            <ThemeToggle
              labels={{
                light: labels.light,
                dark: labels.dark,
                toggle: labels.themeToggle,
              }}
            />
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              "flex flex-col gap-1.5 rounded-full border p-2.5 md:hidden",
              "border-border bg-white"
            )}
            aria-label="Open menu"
          >
            <span
              className="block h-0.5 w-5 bg-text"
            />
            <span
              className="block h-0.5 w-5 bg-text"
            />
            <span
              className="block h-0.5 w-3.5 bg-text"
            />
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        locale={locale}
        settings={settings}
        labels={labels}
      />
    </>
  );
}
