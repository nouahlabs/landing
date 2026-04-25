# Nouah Labs

Next.js 16 site for Nouah Labs, wired for Sanity CMS, Formspree contact
submissions, and Vercel deployment.

## Local Development

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The site has safe local fallbacks, so it can run before Sanity and Formspree are
configured.

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://nouahlabs.com
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_formspree_form_id
```

You can use `NEXT_PUBLIC_FORMSPREE_ENDPOINT` instead of
`NEXT_PUBLIC_FORMSPREE_FORM_ID` if you prefer storing the full Formspree URL.

## Sanity CMS

The embedded Studio lives at `/studio`.

1. Create a free Sanity project.
2. Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.
3. In Sanity project settings, add CORS origins for local and production:
   `http://localhost:3000`, `http://localhost:3001`, and
   `https://nouahlabs.com`.
4. Create content for `Site Settings`, `Project`, `Service`, `Testimonial`,
   and `Process Step`.

Work cards open internal detail pages such as `/work/hirelify`. The
`externalUrl` field is optional and should only be filled after the product
domain or subdomain is live.

## Formspree

Create a Formspree form and add its ID or endpoint to Vercel and `.env.local`.
The contact form will show a setup error if no Formspree env var is present.

## Vercel

Vercel should use:

- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Framework: Next.js

Set the same environment variables for Production and Preview deployments.

For product apps, keep each app as a separate Vercel project. Assign a product
subdomain only after the DNS record and Vercel domain are configured:

- `nouahlabs.com` for the studio website
- `hirelify.nouahlabs.com` for Hirelify, once DNS is live
- `anotherapp.nouahlabs.com` for another product

If the number of product subdomains grows, move DNS to Vercel nameservers and
configure wildcard subdomains.
