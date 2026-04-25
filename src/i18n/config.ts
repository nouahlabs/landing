export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(path: string, locale: Locale) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/");
  if (isLocale(segments[1])) {
    const withoutLocale = `/${segments.slice(2).join("/")}`;
    return withoutLocale === "/" ? "/" : withoutLocale.replace(/\/$/, "");
  }
  return pathname || "/";
}
