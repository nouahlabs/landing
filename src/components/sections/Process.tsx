import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getProcessSteps } from "@/sanity/lib/queries";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface ProcessProps {
  locale: Locale;
  t: Dictionary;
}

export async function Process({ locale, t }: ProcessProps) {
  const processSteps = await getProcessSteps(locale);

  return (
    <Section className="bg-page">
      <Container>
        <FadeIn>
          <div className="max-w-2xl border-t border-border pt-10">
            <span className="text-sm font-semibold uppercase text-accent-foreground">
              {t.process.eyebrow}
            </span>
            <Heading level="h2" className="mt-3">
              {t.process.title}
            </Heading>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.1}
          className="mt-12 grid grid-cols-1 overflow-hidden rounded-lg border border-border bg-card md:grid-cols-4"
        >
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="h-full border-b border-border p-6 md:border-b-0 md:border-r md:last:border-r-0">
                <span className="font-display text-sm font-semibold text-accent-foreground">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
