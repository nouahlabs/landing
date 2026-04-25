import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/data/site";
import { getSiteSettings } from "@/sanity/lib/queries";

export async function Footer() {
  const settings = await getSiteSettings();
  const social = settings.social ?? siteConfig.social;

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
              {settings.description}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-text">
              Studio
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-text">
              Services
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {["Mobile apps", "Web products", "Websites", "MVP builds"].map(
                (label) => (
                  <Link
                    key={label}
                    href="/services"
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                )
              )}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-text">
              Contact
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${settings.email}`}
                className="text-sm text-text-secondary transition-colors hover:text-accent"
              >
                {settings.email}
              </a>
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  Twitter / X
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-sm text-text-tertiary md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {settings.name}. All rights
            reserved.
          </p>
          <p>Independent product studio for focused teams.</p>
        </div>
      </div>
    </footer>
  );
}
