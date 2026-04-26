"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  const homePath = localizedPath("/", locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 px-3 pt-3 transition-all duration-300 sm:px-5",
          "text-text"
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-18 max-w-[88rem] items-center justify-between rounded-full border px-5 backdrop-blur-xl transition-all duration-300 lg:px-6",
            scrolled
              ? "border-border bg-card/88 shadow-lg shadow-dark/5"
              : "border-border bg-card/72 shadow-sm shadow-dark/5"
          )}
        >
          <Logo href={homePath} />

          <nav className="hidden items-center gap-2 md:flex">
            {settings.nav.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(item.href, locale)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  "text-text-secondary hover:bg-card-muted hover:text-text"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="hidden items-center gap-3 md:flex">
            <Link
              href={localizedPath("/contact", locale)}
              className="rounded-full border border-text bg-text px-5 py-2.5 font-display text-sm font-semibold text-card transition-all hover:-translate-y-0.5 hover:bg-text-secondary"
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
              "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border md:hidden",
              "border-border bg-card"
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
