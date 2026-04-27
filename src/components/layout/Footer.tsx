import Link from "next/link";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { localizedPath, type Locale } from "@/i18n/config";
import type { SiteConfig } from "@/types";

interface FooterProps {
  locale: Locale;
  settings: SiteConfig;
  labels: {
    services: string;
    contact: string;
    allRightsReserved: string;
    footerNote: string;
    serviceLinks: string[];
    language: string;
    legal: string;
  };
}

export function Footer({ locale, settings, labels }: FooterProps) {
  const social = settings.social;

  return (
    <footer className="bg-page">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo href={localizedPath("/", locale)} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
              {settings.description}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase text-text">
              Studio
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {settings.nav.map((item) => (
                <Link
                  key={item.href}
                  href={localizedPath(item.href, locale)}
                  className="text-sm text-text-secondary transition-colors hover:text-text"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase text-text">
              {labels.services}
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {labels.serviceLinks.map((label) => (
                  <Link
                    key={label}
                    href={localizedPath("/services", locale)}
                    className="text-sm text-text-secondary transition-colors hover:text-text"
                  >
                    {label}
                  </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase text-text">
              {labels.contact}
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${settings.email}`}
                className="text-sm text-text-secondary transition-colors hover:text-text"
              >
                {settings.email}
              </a>
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-text"
                >
                  Twitter / X
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-text"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase text-text">
              {labels.legal}
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {settings.legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={localizedPath(item.href, locale)}
                  className="text-sm text-text-secondary transition-colors hover:text-text"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-sm text-text-tertiary md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} {settings.name}.{" "}
            {labels.allRightsReserved}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <p>{labels.footerNote}</p>
            <LanguageSwitcher
              locale={locale}
              label={labels.language}
              compact
              className="shrink-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
