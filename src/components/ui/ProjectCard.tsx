import Link from "next/link";
import { Badge } from "./Badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="overflow-hidden rounded-2xl bg-surface">
        <div className="aspect-[16/10] bg-gradient-to-br from-neutral-200 to-neutral-300 transition-transform duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="mt-5">
        <div className="flex items-center gap-3">
          <Badge>{project.category}</Badge>
          <span className="text-xs text-text-tertiary">{project.year}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold font-[family-name:var(--font-plus-jakarta)] text-text transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
          {project.subtitle}
        </p>
      </div>
    </Link>
  );
}
