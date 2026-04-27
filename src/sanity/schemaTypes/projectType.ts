import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
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
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "externalUrl",
      title: "Product URL",
      type: "url",
      validation: (rule) =>
        rule.uri({ scheme: ["https"], allowRelative: false }),
      description:
        "Optional. Add this only after the product domain or subdomain is live.",
    }),
    defineField({
      name: "images",
      title: "Project Images",
      type: "array",
      description:
        "Upload up to 5 images. The first image is used as the primary image in cards and the project hero.",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (rule) => rule.max(5),
    }),
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      initialValue: 10,
    }),
  ],
});
