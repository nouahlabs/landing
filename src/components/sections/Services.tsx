import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              What We Do
            </span>
            <Heading level="h2" className="mt-3">
              End-to-end product development
            </Heading>
            <p className="mt-4 text-text-secondary">
              From concept to launch, we handle every stage of building a
              digital product.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.1}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Button variant="secondary" href="/services">
              Learn More About Our Services
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
