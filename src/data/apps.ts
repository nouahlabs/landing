import type { AppProduct } from "@/types";

export const appProducts: AppProduct[] = [
  {
    name: "Hirelify",
    slug: "hirelify",
    tagline: "A focused mobile app for better job applications.",
    description:
      "Hirelify helps job seekers organize application materials, improve CV readiness, and move from preparation to application with less friction.",
    platforms: ["iOS", "Android"],
    status: "In development",
    marketingUrl: "https://nouahlabs.com/en/apps/hirelify",
    supportUrl: "https://nouahlabs.com/en/support",
    privacyUrl: "https://nouahlabs.com/en/legal/privacy",
    termsUrl: "https://nouahlabs.com/en/legal/terms",
    deletionUrl: "https://nouahlabs.com/en/account-deletion",
    reportUrl: "https://nouahlabs.com/en/report",
    oauthRedirectUrls: ["https://nouahlabs.com/en/apps/hirelify"],
    authorizedDomainNotes:
      "Use nouahlabs.com as the authorized domain. Store and OAuth console URLs should use explicit /en/ paths.",
    reviewerNotes:
      "Public store URLs and demo credentials should be added before review if the app requires authentication.",
  },
];

export const frenchAppProducts: AppProduct[] = [
  {
    ...appProducts[0],
    tagline: "Une application mobile ciblee pour de meilleures candidatures.",
    description:
      "Hirelify aide les candidats a organiser leurs dossiers, ameliorer leur CV et passer de la preparation a la candidature avec moins de friction.",
    platforms: ["iOS", "Android"],
    status: "En developpement",
    authorizedDomainNotes:
      "Utilisez nouahlabs.com comme domaine autorise. Les consoles doivent utiliser les chemins explicites /en/ pour les URLs canoniques.",
  },
];
