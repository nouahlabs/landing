import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getServices } from "@/sanity/lib/queries";

export async function Services() {
  const services = await getServices();

  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                What We Do
              </span>
              <Heading level="h2" className="mt-3">
                Design, build, and prepare products for launch.
              </Heading>
            </div>
            <p className="text-text-secondary md:text-lg">
              We keep the scope practical, the interface sharp, and the build
              path clear enough to move from concept to production without
              unnecessary theater.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.08}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.25}>
          <div className="mt-10">
            <Button variant="secondary" href="/services">
              Explore services
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
