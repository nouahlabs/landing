"use client";

import { useEffect, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

interface ThemeToggleProps {
  labels: {
    light: string;
    dark: string;
    toggle: string;
  };
  className?: string;
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle({ labels, className }: ThemeToggleProps) {
  const theme = useSyncExternalStore<Theme>(
    (callback) => {
      window.addEventListener("storage", callback);
      window.addEventListener("themechange", callback);
      return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener("themechange", callback);
      };
    },
    getStoredTheme,
    () => "light" as Theme
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text transition-colors hover:bg-card-muted",
        className
      )}
      suppressHydrationWarning
      aria-label={labels.toggle}
      title={theme === "dark" ? labels.dark : labels.light}
    >
      {theme === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.8A8.6 8.6 0 1 1 11.2 3a6.8 6.8 0 0 0 9.8 9.8Z" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}
