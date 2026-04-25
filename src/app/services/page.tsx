import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end digital product development services — from mobile apps and websites to MVPs and product design.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-36">
        <Container>
          <FadeIn>
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Services
            </span>
            <Heading level="h1" className="mt-3">
              What we can build for you
            </Heading>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">
              We offer a complete range of digital product services, from
              initial concept through design, development, and launch.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {services.map((service, i) => (
        <Section
          key={service.id}
          className={i % 2 === 1 ? "bg-surface pt-0" : "pt-0"}
        >
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <div>
                  <span className="text-sm font-medium uppercase tracking-wider text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Heading level="h2" className="mt-2">
                    {service.title}
                  </Heading>
                  <p className="mt-4 text-text-secondary leading-relaxed">
                    {service.longDescription}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                    What&apos;s included
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature) => (
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
          </Container>
        </Section>
      ))}

      <Section>
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl rounded-3xl bg-dark px-8 py-16 text-center lg:px-16">
              <Heading level="h2" className="text-white">
                Ready to get started?
              </Heading>
              <p className="mx-auto mt-4 max-w-xl text-neutral-400">
                Tell us about your project and we&apos;ll get back to you within
                24 hours with a plan.
              </p>
              <div className="mt-8">
                <Button
                  href="/contact"
                  className="bg-accent text-white hover:bg-accent-light"
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
