import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, localizedPath, type Locale } from "@/i18n/config";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const t = getDictionary(localeParam);

  return {
    title: t.metadata.aboutTitle,
    description: t.metadata.aboutDescription,
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const t = getDictionary(locale);

  return (
    <>
      <Section className="bg-page pt-32">
        <Container>
          <FadeIn>
            <div className="studio-panel grid overflow-hidden rounded-[1.5rem] lg:grid-cols-[1fr_0.9fr]">
              <div className="p-6 sm:p-10 lg:p-12">
                <span className="text-sm font-semibold uppercase text-accent-foreground">
                  {t.aboutPage.eyebrow}
                </span>
                <Heading level="h1" className="mt-3">
                  {t.aboutPage.title}
                </Heading>
                {t.aboutPage.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-lg leading-relaxed text-text-secondary first:mt-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="relative min-h-80 border-t border-border lg:border-l lg:border-t-0">
                <Image
                  src="/assets/studio/workspace-detail.webp"
                  alt="Focused product studio workspace"
                  fill
                  priority
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-panel-soft">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase text-accent-foreground">
                {t.aboutPage.philosophyEyebrow}
              </span>
              <Heading level="h2" className="mt-3">
                {t.aboutPage.philosophyTitle}
              </Heading>
            </div>
          </FadeIn>

          <StaggerChildren
            staggerDelay={0.1}
            className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {t.aboutPage.values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="h-full rounded-lg border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </Section>

      <Section className="bg-page">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div>
                <span className="text-sm font-semibold uppercase text-accent-foreground">
                  {t.aboutPage.audienceEyebrow}
                </span>
                <Heading level="h2" className="mt-3">
                  {t.aboutPage.audienceTitle}
                </Heading>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {t.aboutPage.audienceBody}
                </p>
                <div className="mt-8">
                  <Button href={localizedPath("/contact", locale)}>
                    {t.aboutPage.talkButton}
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-6">
                {t.aboutPage.audiences.map((audience) => (
                  <div
                    key={audience.title}
                    className="rounded-lg border border-border bg-card-muted p-6"
                  >
                    <h3 className="font-display font-semibold">
                      {audience.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {audience.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
