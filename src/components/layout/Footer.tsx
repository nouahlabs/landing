import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              A modern digital product studio building mobile apps and websites
              for startups, businesses, and founders.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text">
              Navigation
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text">
              Services
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              <Link href="/services" className="text-sm text-text-secondary transition-colors hover:text-text">
                Mobile Apps
              </Link>
              <Link href="/services" className="text-sm text-text-secondary transition-colors hover:text-text">
                Websites
              </Link>
              <Link href="/services" className="text-sm text-text-secondary transition-colors hover:text-text">
                Web Applications
              </Link>
              <Link href="/services" className="text-sm text-text-secondary transition-colors hover:text-text">
                MVP Development
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text">
              Contact
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-text-secondary transition-colors hover:text-text"
              >
                {siteConfig.email}
              </a>
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-text"
                >
                  Twitter / X
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-text"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-text-tertiary">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-tertiary">
            Designed and built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
