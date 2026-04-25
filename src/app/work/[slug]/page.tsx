import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { projects, getProjectBySlug } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-36">
        <Container>
          <FadeIn>
            <Link
              href="/work"
              className="mb-8 inline-flex items-center text-sm text-text-secondary transition-colors hover:text-text"
            >
              &larr; Back to Work
            </Link>
            <div className="flex items-center gap-3">
              <Badge>{project.category}</Badge>
              <span className="text-sm text-text-tertiary">{project.year}</span>
            </div>
            <Heading level="h1" className="mt-4">
              {project.title}
            </Heading>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">
              {project.subtitle}
            </p>
          </FadeIn>

          {/* Hero image */}
          <FadeIn delay={0.2}>
            <div className="mt-12 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-300" />
          </FadeIn>
        </Container>
      </Section>

      {/* Overview */}
      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeIn>
                <Heading level="h3">Overview</Heading>
                <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
                  {project.longDescription.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="mt-12">
                  <Heading level="h3">The Problem</Heading>
                  <p className="mt-3 text-text-secondary leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="mt-12">
                  <Heading level="h3">The Solution</Heading>
                  <p className="mt-3 text-text-secondary leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-12">
                  <Heading level="h3">Key Features</Heading>
                  <ul className="mt-4 space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                    Client
                  </h4>
                  <p className="mt-2 font-medium">{project.client}</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                    Technologies
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                    Outcome
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {project.outcome}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="flex flex-col gap-3 pt-4">
                  {project.liveUrl && (
                    <Button href={project.liveUrl} className="w-full justify-center">
                      Visit Website
                    </Button>
                  )}
                  {project.appStoreUrl && (
                    <Button
                      variant="secondary"
                      href={project.appStoreUrl}
                      className="w-full justify-center"
                    >
                      App Store
                    </Button>
                  )}
                  {project.playStoreUrl && (
                    <Button
                      variant="secondary"
                      href={project.playStoreUrl}
                      className="w-full justify-center"
                    >
                      Google Play
                    </Button>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      {project.images.length > 0 && (
        <Section className="pt-0">
          <Container>
            <FadeIn>
              <Heading level="h3">Gallery</Heading>
            </FadeIn>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.images.map((image, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-300" />
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <Section className="bg-surface">
          <Container>
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xl leading-relaxed text-text-secondary md:text-2xl">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold">{project.testimonial.author}</p>
                  <p className="text-sm text-text-tertiary">
                    {project.testimonial.role}
                  </p>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <Heading level="h2">Want to build something similar?</Heading>
              <p className="mt-4 text-text-secondary">
                We&apos;d love to hear about your project. Get in touch and
                let&apos;s discuss how we can help.
              </p>
              <div className="mt-8">
                <Button href="/contact">Start a Project</Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
