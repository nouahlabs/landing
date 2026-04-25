import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <Section className="bg-surface">
      <Container>
        <FadeIn>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Selected Work
              </span>
              <Heading level="h2" className="mt-3">
                Products we&apos;ve built
              </Heading>
            </div>
            <Button variant="ghost" href="/work" className="hidden md:inline-flex">
              View all &rarr;
            </Button>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.15}
          className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2"
        >
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center md:hidden">
            <Button variant="secondary" href="/work">
              View All Projects
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
