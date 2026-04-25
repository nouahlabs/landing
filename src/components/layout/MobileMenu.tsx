"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";
import { siteConfig } from "@/data/site";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
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
            className="fixed inset-0 z-50 bg-black/40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white p-8"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={onClose}
                className="text-2xl leading-none text-text-secondary hover:text-text"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-6">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="text-lg font-medium text-text transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={onClose}
              className="mt-10 block rounded-full bg-dark px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-dark/90"
            >
              Start a Project
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
