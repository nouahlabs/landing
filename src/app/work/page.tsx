import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of mobile apps, websites, and digital products built for startups and businesses.",
};

export default function WorkPage() {
  return (
    <>
      <Section className="pt-36">
        <Container>
          <FadeIn>
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Portfolio
            </span>
            <Heading level="h1" className="mt-3">
              Our Work
            </Heading>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">
              A selection of products we&apos;ve designed and built for startups,
              businesses, and founders.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <StaggerChildren
            staggerDelay={0.1}
            className="grid grid-cols-1 gap-10 md:grid-cols-2"
          >
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </Section>
    </>
  );
}
