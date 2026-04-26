import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getFeaturedProjects } from "@/sanity/lib/queries";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface FeaturedProjectsProps {
  locale: Locale;
  t: Dictionary;
}

export async function FeaturedProjects({ locale, t }: FeaturedProjectsProps) {
  const featured = await getFeaturedProjects(locale);

  return (
    <Section className="bg-page">
      <Container>
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 border-t border-border pt-10 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase text-accent-foreground">
                {t.featured.eyebrow}
              </span>
              <Heading level="h2" className="mt-3 max-w-2xl">
                {t.featured.title}
              </Heading>
            </div>
            <Button
              variant="secondary"
              href={localizedPath("/work", locale)}
              className="w-fit"
            >
              {t.featured.viewAll}
            </Button>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.12}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {featured.map((project) => (
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
  );
}
