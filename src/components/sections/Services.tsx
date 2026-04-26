import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getServices } from "@/sanity/lib/queries";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface ServicesProps {
  locale: Locale;
  t: Dictionary;
}

export async function Services({ locale, t }: ServicesProps) {
  const services = await getServices(locale);

  return (
    <Section className="bg-panel-soft">
      <Container>
        <FadeIn>
          <div className="grid gap-6 border-t border-border pt-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase text-accent-foreground">
                {t.servicesHome.eyebrow}
              </span>
              <Heading level="h2" className="mt-3">
                {t.servicesHome.title}
              </Heading>
            </div>
            <p className="text-text-secondary md:text-lg">
              {t.servicesHome.body}
            </p>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.08}
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.25}>
          <div className="mt-10">
            <Button variant="secondary" href={localizedPath("/services", locale)}>
              {t.common.exploreServices}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
