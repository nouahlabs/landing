import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getFeaturedProjects } from "@/sanity/lib/queries";

export async function FeaturedProjects() {
  const featured = await getFeaturedProjects();

  return (
    <Section className="bg-surface">
      <Container>
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Selected Work
              </span>
              <Heading level="h2" className="mt-3 max-w-2xl">
                Real products under the Nouah Labs umbrella.
              </Heading>
            </div>
            <Button variant="secondary" href="/work" className="w-fit">
              View all work
            </Button>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.12}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
