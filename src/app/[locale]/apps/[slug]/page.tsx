import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { getComplianceCopy } from "@/data/compliance-copy";
import { isLocale, locales, localizedPath, type Locale } from "@/i18n/config";
import { getAppProductBySlug, getAppProducts } from "@/sanity/lib/queries";

interface AppPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const apps = await getAppProducts();

  return locales.flatMap((locale) =>
    apps.map((app) => ({ locale, slug: app.slug }))
  );
}

export async function generateMetadata({
  params,
}: AppPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const app = await getAppProductBySlug(slug, localeParam);

  return {
    title: app?.name,
    description: app?.description,
  };
}

function LinkList({
  links,
}: {
  links: Array<{ label: string; href?: string }>;
}) {
  return (
    <div className="grid gap-3">
      {links.map((link) =>
        link.href ? (
          <a
            key={link.label}
            href={link.href}
            className="rounded-lg border border-border bg-card-muted px-4 py-3 text-sm font-medium text-text transition-colors hover:border-text"
          >
            {link.label}
          </a>
        ) : null
      )}
    </div>
  );
}

export default async function AppPage({ params }: AppPageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const app = await getAppProductBySlug(slug, locale);

  if (!app) {
    notFound();
  }

  const copy = getComplianceCopy(locale);
  const storeLinks = [
    { label: "App Store", href: app.appStoreUrl },
    { label: "Google Play", href: app.playStoreUrl },
  ].filter((link) => link.href);

  return (
    <Section className="pt-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <Badge>{copy.app.eyebrow}</Badge>
            <Heading level="h1" className="mt-6 text-text">
              {app.name}
            </Heading>
            <p className="mt-4 text-xl text-text-secondary">{app.tagline}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">
              {app.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {app.platforms.map((platform) => (
                <Badge key={platform}>{platform}</Badge>
              ))}
              <Badge>{app.status}</Badge>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-5">
                <p className="text-sm font-semibold uppercase text-text-tertiary">
                  {copy.app.platform}
                </p>
                <p className="mt-3 text-text-secondary">
                  {app.platforms.join(", ")}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <p className="text-sm font-semibold uppercase text-text-tertiary">
                  {copy.app.status}
                </p>
                <p className="mt-3 text-text-secondary">{app.status}</p>
              </div>
            </div>

            <div className="mt-10 rounded-lg border border-border bg-card p-6">
              <Heading level="h3" className="text-text">
                {copy.app.oauth}
              </Heading>
              <p className="mt-4 text-sm font-semibold uppercase text-text-tertiary">
                {copy.app.redirectUrls}
              </p>
              <div className="mt-3 grid gap-2">
                {app.oauthRedirectUrls.map((url) => (
                  <code
                    key={url}
                    className="rounded-md bg-card-muted px-3 py-2 text-sm text-text-secondary"
                  >
                    {url}
                  </code>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold uppercase text-text-tertiary">
                {copy.app.authorizedDomains}
              </p>
              <p className="mt-3 leading-7 text-text-secondary">
                {app.authorizedDomainNotes}
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <Heading level="h3" className="text-text">
                {copy.app.complianceLinks}
              </Heading>
              <div className="mt-5">
                <LinkList
                  links={[
                    { label: copy.app.privacy, href: app.privacyUrl },
                    { label: copy.app.terms, href: app.termsUrl },
                    { label: copy.app.support, href: app.supportUrl },
                    { label: copy.app.accountDeletion, href: app.deletionUrl },
                    { label: copy.app.report, href: app.reportUrl },
                  ]}
                />
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <Heading level="h3" className="text-text">
                {copy.app.storeLinks}
              </Heading>
              {storeLinks.length ? (
                <div className="mt-5">
                  <LinkList links={storeLinks} />
                </div>
              ) : (
                <p className="mt-4 text-sm leading-6 text-text-secondary">
                  {copy.app.noStoreLinks}
                </p>
              )}
            </div>

            <div className="rounded-lg border border-border bg-card-muted p-6">
              <p className="text-sm leading-6 text-text-secondary">
                {copy.app.consoleNote}{" "}
                <code className="rounded bg-card px-1.5 py-1 text-text">
                  /en/legal/privacy
                </code>
                .
              </p>
              <Button
                href={localizedPath("/support", locale)}
                variant="secondary"
                className="mt-5 w-full"
              >
                {copy.app.support}
              </Button>
            </div>

            <Link
              href={localizedPath("/work", locale)}
              className="block text-sm font-medium text-text-secondary underline-offset-4 hover:text-text hover:underline"
            >
              {copy.app.backToWork}
            </Link>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
