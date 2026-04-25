import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { getProjectBySlug, getProjects } from "@/sanity/lib/queries";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, localizedPath, locales, type Locale } from "@/i18n/config";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const params = await Promise.all(
    locales.map(async (locale) => {
      const projects = await getProjects(locale);
      return projects.map((project) => ({ locale, slug: project.slug }));
    })
  );

  return params.flat();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const project = await getProjectBySlug(slug, localeParam);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const t = getDictionary(locale);
  const project = await getProjectBySlug(slug, locale);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section className="pt-36">
        <Container>
          <FadeIn>
            <Link
              href={localizedPath("/work", locale)}
              className="inline-flex text-sm font-medium text-text-secondary transition-colors hover:text-accent-foreground"
            >
              &larr; {t.common.backToWork}
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <Badge>{project.category}</Badge>
              <span className="text-sm text-text-tertiary">{project.year}</span>
              {project.status && (
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-dark">
                  {project.status}
                </span>
              )}
            </div>

            <Heading level="h1" className="mt-5 max-w-4xl">
              {project.title}
            </Heading>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
              {project.subtitle}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <FadeIn>
              <div className="rounded-[2rem] border border-border bg-white p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                  {t.workPage.overview}
                </p>
                <p className="mt-5 text-lg leading-relaxed text-text-secondary">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 rounded-[2rem] border border-border bg-surface p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                  {t.workPage.productFocus}
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {t.workPage.focusItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border bg-white p-4 text-sm font-medium text-text-secondary"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <aside className="rounded-[2rem] border border-border bg-white p-6">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-tertiary">
                    {t.workPage.platform}
                  </h2>
                  <p className="mt-2 font-medium text-text">
                    {project.platform ?? t.workPage.fallbackPlatform}
                  </p>
                </div>

                <div className="mt-8">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-tertiary">
                    {t.workPage.technologies}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  {project.externalUrl ? (
                    <Button href={project.externalUrl} className="w-full">
                      {t.common.visitProduct}
                    </Button>
                  ) : (
                    <p className="rounded-2xl bg-surface p-4 text-sm leading-relaxed text-text-secondary">
                      {t.common.productUrlPending}
                    </p>
                  )}
                </div>
              </aside>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
