import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getProjects } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of mobile apps, websites, and digital products built for startups and businesses.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <>
      <Section className="pt-36">
        <Container>
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Portfolio
            </span>
            <Heading level="h1" className="mt-3">
              Product work from Nouah Labs.
            </Heading>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">
              Explore the products we are shaping and building. Each item opens
              a detail page first, and live product links appear only after
              their domains are configured.
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
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </Section>
    </>
  );
}
