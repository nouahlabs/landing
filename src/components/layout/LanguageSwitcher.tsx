"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localizedPath, stripLocale, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  className?: string;
  compact?: boolean;
}

export function LanguageSwitcher({
  locale,
  label,
  className,
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const pathWithoutLocale = stripLocale(pathname);

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-border bg-white p-1",
        compact && "p-0.5",
        className
      )}
      aria-label={label}
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={localizedPath(pathWithoutLocale, item)}
          className={cn(
            "rounded-full text-xs font-semibold uppercase transition-colors",
            compact ? "px-2 py-1" : "px-3 py-1.5",
            item === locale
              ? "bg-accent text-dark"
              : "text-text-secondary hover:bg-lavender/45 hover:text-text"
          )}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
