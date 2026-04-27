import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  label: string;
}

function ProductPreview({ title, label }: { title: string; label: string }) {
  return (
    <div className="relative h-full min-h-64 overflow-hidden bg-dark-surface text-white">
      <Image
        src="/assets/studio/mobile-build.webp"
        alt={`${title} product workspace`}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover opacity-[0.88] transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5">
        <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs uppercase text-white backdrop-blur-md">
          {label}
        </span>
        <p className="mt-3 max-w-xs font-display text-3xl font-semibold leading-tight">
          {title}
        </p>
      </div>
    </div>
  );
}

export function ProjectCard({ project, locale, label }: ProjectCardProps) {
  const primaryImage = project.images?.[0] ?? project.thumbnail;

  return (
    <Link
      href={localizedPath(`/work/${project.slug}`, locale)}
      className="group block"
    >
      <article className="overflow-hidden rounded-xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-xl hover:shadow-black/10">
        <div className="relative aspect-[16/10] overflow-hidden bg-dark-surface">
          {primaryImage ? (
            <Image
              src={primaryImage}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <ProductPreview title={project.title} label={label} />
          )}
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{project.category}</Badge>
            <span className="text-xs font-medium text-text-tertiary">
              {project.year}
            </span>
            {project.status && (
              <span className="text-xs font-medium text-accent-foreground">
                {project.status}
              </span>
            )}
          </div>
          <div className="mt-4 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-semibold leading-tight text-text transition-colors group-hover:text-accent-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {project.subtitle}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="mt-1 text-lg text-accent-foreground transition-transform group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </div>
          {project.technologies.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-card-muted px-3 py-1 text-xs text-text-secondary"
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
