import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import type { Dictionary } from "@/i18n/dictionaries";

interface WhyUsProps {
  t: Dictionary;
}

export function WhyUs({ t }: WhyUsProps) {
  return (
    <Section className="bg-dark text-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <FadeIn>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
                {t.whyUs.eyebrow}
              </span>
              <Heading level="h2" className="mt-3 text-white">
                {t.whyUs.title}
              </Heading>
            </div>
          </FadeIn>

          <StaggerChildren
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2"
          >
            {t.whyUs.reasons.map((reason, index) => (
              <StaggerItem key={reason.title}>
                <div className="h-full bg-dark p-6">
                  <span className="text-sm font-semibold text-accent-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/58">
                    {reason.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}
