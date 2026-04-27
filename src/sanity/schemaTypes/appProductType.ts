import { defineField, defineType } from "sanity";

export const appProductType = defineType({
  name: "appProduct",
  title: "App Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "App Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "platforms",
      title: "Platforms",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "marketingUrl", title: "Marketing URL", type: "url" }),
    defineField({ name: "supportUrl", title: "Support URL", type: "url" }),
    defineField({ name: "privacyUrl", title: "Privacy URL", type: "url" }),
    defineField({ name: "termsUrl", title: "Terms URL", type: "url" }),
    defineField({
      name: "deletionUrl",
      title: "Account Deletion URL",
      type: "url",
    }),
    defineField({ name: "reportUrl", title: "Report URL", type: "url" }),
    defineField({
      name: "oauthRedirectUrls",
      title: "OAuth Redirect URLs",
      type: "array",
      of: [{ type: "url" }],
    }),
    defineField({
      name: "authorizedDomainNotes",
      title: "Authorized Domain Notes",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "android",
      title: "Android App Links",
      type: "object",
      fields: [
        defineField({
          name: "packageName",
          title: "Package Name",
          type: "string",
        }),
        defineField({
          name: "sha256CertFingerprints",
          title: "SHA-256 Certificate Fingerprints",
          type: "array",
          of: [{ type: "string" }],
          description:
            "Use the Play App Signing fingerprint for production releases.",
        }),
      ],
    }),
    defineField({
      name: "ios",
      title: "Apple Associated Domains",
      type: "object",
      fields: [
        defineField({ name: "teamId", title: "Team ID", type: "string" }),
        defineField({ name: "bundleId", title: "Bundle ID", type: "string" }),
        defineField({
          name: "paths",
          title: "Universal Link Paths",
          type: "array",
          of: [{ type: "string" }],
          initialValue: ["*"],
        }),
      ],
    }),
    defineField({ name: "appStoreUrl", title: "App Store URL", type: "url" }),
    defineField({ name: "playStoreUrl", title: "Play Store URL", type: "url" }),
    defineField({
      name: "reviewerNotes",
      title: "Reviewer Notes",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "demoCredentials",
      title: "Demo Credentials",
      type: "text",
      rows: 3,
      description:
        "Optional internal reference for store review. Avoid storing secrets unless access is restricted appropriately.",
    }),
  ],
});
