export const apiVersion = "2026-04-25";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  "";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_DATASET ||
  "production";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nouahlabs.com";

export const isSanityConfigured = Boolean(projectId && dataset);
