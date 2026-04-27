import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Nouah Labs",
  tagline: "Mobile apps and websites with product discipline.",
  description:
    "Nouah Labs is a focused app development studio for founders and teams that need thoughtful mobile apps, web products, and launch-ready digital systems.",
  url: "https://nouahlabs.com",
  email: "hello@nouahlabs.com",
  supportEmail: "support@nouahlabs.com",
  developerName: "Nouah Labs",
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
  legalLinks: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "UGC Policy", href: "/legal/ugc-policy" },
    { label: "Support", href: "/support" },
    { label: "Account Deletion", href: "/account-deletion" },
    { label: "Report", href: "/report" },
  ],
  formEndpoints: {},
};
