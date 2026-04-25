import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getProjects } from "@/sanity/lib/queries";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";

interface WorkPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const t = getDictionary(localeParam);

  return {
    title: t.metadata.workTitle,
    description: t.metadata.workDescription,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const t = getDictionary(locale);
  const projects = await getProjects(locale);

  return (
    <>
      <Section className="pt-36">
        <Container>
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground">
              {t.workPage.eyebrow}
            </span>
            <Heading level="h1" className="mt-3">
              {t.workPage.title}
            </Heading>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">
              {t.workPage.body}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <StaggerChildren
            staggerDelay={0.1}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard
                  project={project}
                  locale={locale}
                  label={t.workPage.productLaunch}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </Section>
    </>
  );
}
