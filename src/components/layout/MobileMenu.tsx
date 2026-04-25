"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { localizedPath, type Locale } from "@/i18n/config";
import type { SiteConfig } from "@/types";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  settings: SiteConfig;
  labels: {
    startProject: string;
    light: string;
    dark: string;
    themeToggle: string;
  };
}

export function MobileMenu({
  open,
  onClose,
  locale,
  settings,
  labels,
}: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-dark/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 right-0 top-0 z-50 w-80 rounded-l-2xl border-l border-border bg-white p-8 shadow-2xl shadow-dark/10"
          >
            <div className="flex items-center justify-between">
              <Logo href={localizedPath("/", locale)} />
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xl leading-none text-text-secondary hover:bg-lavender/45 hover:text-text"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-6">
              {settings.nav.map((item) => (
                <Link
                  key={item.href}
                  href={localizedPath(item.href, locale)}
                  onClick={onClose}
                  className="font-display text-lg font-medium text-text transition-colors hover:text-accent-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href={localizedPath("/contact", locale)}
              onClick={onClose}
              className="mt-10 block rounded-full bg-accent px-6 py-3 text-center font-display text-sm font-semibold text-dark transition-colors hover:bg-accent-light"
            >
              {labels.startProject}
            </Link>

            <div className="mt-6 flex flex-wrap gap-3">
              <ThemeToggle
                labels={{
                  light: labels.light,
                  dark: labels.dark,
                  toggle: labels.themeToggle,
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
