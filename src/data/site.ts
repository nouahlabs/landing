import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Nouah Labs",
  tagline: "We build digital products that matter.",
  description:
    "A modern digital product studio that builds mobile apps and websites for startups, businesses, and founders.",
  url: "https://nouahlabs.com",
  email: "hello@nouahlabs.com",
  social: {
    twitter: "https://twitter.com/nouahlabs",
    linkedin: "https://linkedin.com/company/nouahlabs",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
