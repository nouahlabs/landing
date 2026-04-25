import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { getProjectBySlug, getProjects } from "@/sanity/lib/queries";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section className="pt-36">
        <Container>
          <FadeIn>
            <Link
              href="/work"
              className="inline-flex text-sm font-medium text-text-secondary transition-colors hover:text-accent"
            >
              &larr; Back to work
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <Badge>{project.category}</Badge>
              <span className="text-sm text-text-tertiary">{project.year}</span>
              {project.status && (
                <span className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                  {project.status}
                </span>
              )}
            </div>

            <Heading level="h1" className="mt-5 max-w-4xl">
              {project.title}
            </Heading>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
              {project.subtitle}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <FadeIn>
              <div className="rounded-lg border border-border bg-white p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Overview
                </p>
                <p className="mt-5 text-lg leading-relaxed text-text-secondary">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 rounded-lg border border-border bg-surface p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  Product Focus
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {["CV flow", "Application prep", "Mobile-first UX"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-md border border-border bg-white p-4 text-sm font-medium text-text-secondary"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <aside className="rounded-lg border border-border bg-white p-6">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-tertiary">
                    Platform
                  </h2>
                  <p className="mt-2 font-medium text-text">
                    {project.platform ?? "Digital product"}
                  </p>
                </div>

                <div className="mt-8">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-tertiary">
                    Technologies
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  {project.externalUrl ? (
                    <Button href={project.externalUrl} className="w-full">
                      Visit product
                    </Button>
                  ) : (
                    <p className="rounded-md bg-surface p-4 text-sm leading-relaxed text-text-secondary">
                      The public product URL will be added here once DNS and
                      deployment are configured.
                    </p>
                  )}
                </div>
              </aside>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
