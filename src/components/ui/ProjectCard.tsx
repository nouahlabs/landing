import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

function ProductPreview({ title }: { title: string }) {
  return (
    <div className="relative flex h-full min-h-64 items-center justify-center overflow-hidden bg-dark-surface p-6 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-accent-light/50" />
      <div className="w-full max-w-md rounded-lg border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/20">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-light" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="text-xs text-white/45">nouahlabs.com</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-md border border-white/10 bg-black/20 p-3">
            <div className="mx-auto h-36 max-w-20 rounded-md border border-white/15 bg-gradient-to-b from-accent/50 to-white/5 p-2">
              <div className="h-3 rounded-sm bg-white/35" />
              <div className="mt-3 h-12 rounded-sm bg-white/10" />
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 rounded-full bg-white/30" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.18em] text-accent-light">
              Product Launch
            </span>
            <p className="mt-3 font-display text-2xl font-semibold tracking-tight">
              {title}
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <span className="h-10 rounded-md bg-white/10" />
              <span className="h-10 rounded-md bg-white/10" />
              <span className="h-10 rounded-md bg-accent/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article className="overflow-hidden rounded-lg border border-border bg-white transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
        <div className="relative aspect-[16/10] overflow-hidden bg-dark-surface">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <ProductPreview title={project.title} />
          )}
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{project.category}</Badge>
            <span className="text-xs font-medium text-text-tertiary">
              {project.year}
            </span>
            {project.status && (
              <span className="text-xs font-medium text-accent">
                {project.status}
              </span>
            )}
          </div>
          <div className="mt-4 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {project.subtitle}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="mt-1 text-lg text-accent transition-transform group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </div>
          {project.technologies.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-surface px-2.5 py-1 text-xs text-text-secondary"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
