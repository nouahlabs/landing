import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import type { Project } from "@/types";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <Section>
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
  );
}
