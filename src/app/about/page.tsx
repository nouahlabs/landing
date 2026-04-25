import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nouah Labs — a modern digital product studio building apps and websites for startups and businesses.",
};

const values = [
  {
    title: "Design with intention",
    description:
      "Every pixel serves a purpose. We don't add things for decoration — we design with clarity and function in mind.",
  },
  {
    title: "Build with quality",
    description:
      "Clean code, solid architecture, and attention to detail. We build products that last and scale.",
  },
  {
    title: "Ship with speed",
    description:
      "We respect deadlines and move fast. Our lean process means less overhead and more output.",
  },
  {
    title: "Think like a partner",
    description:
      "We don't just take orders — we challenge assumptions, ask questions, and help you build the right thing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-36">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                About Us
              </span>
              <Heading level="h1" className="mt-3">
                We build digital products that people actually want to use.
              </Heading>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Nouah Labs is a digital product studio that works with startups,
                businesses, and founders to design and build mobile apps,
                websites, and web applications. We focus on creating products
                that are well-designed, thoughtfully built, and genuinely useful.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                We believe the best digital products come from a combination of
                strong design, solid engineering, and clear product thinking.
                That&apos;s what we bring to every project.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Our Philosophy
              </span>
              <Heading level="h2" className="mt-3">
                What we stand for
              </Heading>
            </div>
          </FadeIn>

          <StaggerChildren
            staggerDelay={0.1}
            className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="rounded-2xl border border-border bg-white p-8">
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-plus-jakarta)]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div>
                <span className="text-sm font-medium uppercase tracking-wider text-accent">
                  Who We Work With
                </span>
                <Heading level="h2" className="mt-3">
                  Built for builders
                </Heading>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  We work best with people who care about the products they&apos;re
                  building. Whether you&apos;re a first-time founder with an idea or
                  an established business looking to modernize, we bring the same
                  level of dedication and craft.
                </p>
                <div className="mt-8">
                  <Button href="/contact">Let&apos;s Talk</Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <div className="rounded-2xl bg-surface p-6">
                  <h3 className="font-semibold font-[family-name:var(--font-plus-jakarta)]">
                    Startups & Founders
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    MVPs, product strategy, and rapid iteration to find
                    product-market fit.
                  </p>
                </div>
                <div className="rounded-2xl bg-surface p-6">
                  <h3 className="font-semibold font-[family-name:var(--font-plus-jakarta)]">
                    Small & Medium Businesses
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Custom apps, websites, and tools that help you grow and
                    operate better.
                  </p>
                </div>
                <div className="rounded-2xl bg-surface p-6">
                  <h3 className="font-semibold font-[family-name:var(--font-plus-jakarta)]">
                    Product Teams
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Design and development support for teams that need extra
                    capacity or expertise.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
