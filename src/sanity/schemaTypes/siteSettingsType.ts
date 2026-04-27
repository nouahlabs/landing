import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Site Name",
      type: "string",
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
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "Website URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "supportEmail",
      title: "Support Email",
      type: "string",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "developerName",
      title: "App Store Developer Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "twitter", title: "Twitter / X", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
        defineField({ name: "github", title: "GitHub", type: "url" }),
        defineField({ name: "dribbble", title: "Dribbble", type: "url" }),
      ],
    }),
    defineField({
      name: "nav",
      title: "Navigation",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "href",
              title: "Href",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "legalLinks",
      title: "Legal and Support Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "href",
              title: "Href",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "formEndpoints",
      title: "Formspree Endpoints",
      type: "object",
      description:
        "Optional public Formspree endpoints for specific compliance forms.",
      fields: [
        defineField({ name: "contact", title: "Contact", type: "url" }),
        defineField({ name: "support", title: "Support", type: "url" }),
        defineField({
          name: "accountDeletion",
          title: "Account Deletion",
          type: "url",
        }),
        defineField({ name: "report", title: "Report", type: "url" }),
      ],
    }),
  ],
});
