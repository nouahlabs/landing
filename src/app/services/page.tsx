import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { getServices } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end digital product development services — from mobile apps and websites to MVPs and product design.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <Section className="pt-36">
        <Container>
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Services
            </span>
            <Heading level="h1" className="mt-3">
              Practical product services for apps, websites, and launches.
            </Heading>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">
              We shape the product, design the interface, build the system, and
              prepare it for the realities of launch and iteration.
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
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
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
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-tertiary">
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
            <div className="border-y border-border py-14 text-center">
              <Heading level="h2">
                Ready to get started?
              </Heading>
              <p className="mx-auto mt-4 max-w-xl text-text-secondary">
                Tell us about your project and we&apos;ll get back to you within
                24 hours with a plan.
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
