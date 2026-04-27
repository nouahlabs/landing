# Nouah Labs

Next.js 16 site for Nouah Labs, wired for Sanity CMS, Formspree contact
submissions, and Vercel deployment.

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site has safe local fallbacks, so it can run before Sanity and Formspree are
configured.

The public site is served with locale-prefixed routes:

- English: `/en`
- French: `/fr`

Unprefixed public routes redirect to English. The theme toggle stores the
visitor preference in `localStorage`.

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://nouahlabs.com
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
# Optional aliases if Sanity/Vercel Marketplace provides these names:
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=production
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_formspree_form_id
```

You can use `NEXT_PUBLIC_FORMSPREE_ENDPOINT` instead of
`NEXT_PUBLIC_FORMSPREE_FORM_ID` if you prefer storing the full Formspree URL.

## Sanity CMS

The embedded Studio lives at `/studio`.

1. Create a free Sanity project.
2. Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to
   `.env.local` and Vercel. If the Vercel Marketplace gives you
   `SANITY_PROJECT_ID` and `SANITY_DATASET`, those are supported too.
3. In Sanity project settings, add CORS origins for local and production:
   `http://localhost:3000`, `http://localhost:3001`, and
   `https://nouahlabs.com`.
4. Create content for `Site Settings`, `Project`, `Service`, `Testimonial`,
   and `Process Step`.

Useful commands:

```bash
npm run sanity:login
npm run sanity:manage
npm run sanity:dev
npm run sanity:register:prod
npm run sanity:schemas:deploy
```

Use `/studio` through the Next.js app for normal editing. `npm run sanity:dev`
is available when you want to run Sanity Studio directly from the Sanity CLI.

If `https://www.nouahlabs.com/studio` shows **"Connect this studio to your
project"**, the production Studio host is not registered yet.

Run:

```bash
npm run sanity:register:prod
npm run sanity:schemas:deploy
```

The token/account used for these commands must include the
`sanity.project.deployStudio` grant (for example an administrator/developer
account, or a token with the "Deploy Studio (Token only)" role).

Work cards open internal detail pages such as `/work/hirelify`. The
`externalUrl` field is optional and should only be filled after the product
domain or subdomain is live.

For project media, upload up to 5 images in the `Project Images` field. The
first image is used as the primary image for project cards and the work detail
hero; the full set appears as the project gallery on the detail page.

## Formspree

Create a Formspree form and add its ID or endpoint to Vercel and `.env.local`.
The contact form will show a setup error if no Formspree env var is present.

## Vercel

Vercel should use:

- Install command: `npm ci`
- Build command: `npm run build`
- Framework: Next.js

Set the same environment variables for Production and Preview deployments.

For product apps, keep each app as a separate Vercel project. Assign a product
subdomain only after the DNS record and Vercel domain are configured:

- `nouahlabs.com` for the studio website
- `hirelify.nouahlabs.com` for Hirelify, once DNS is live
- `anotherapp.nouahlabs.com` for another product

If the number of product subdomains grows, move DNS to Vercel nameservers and
configure wildcard subdomains.
