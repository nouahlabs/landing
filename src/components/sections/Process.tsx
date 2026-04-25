import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              How We Work
            </span>
            <Heading level="h2" className="mt-3">
              A clear process, every time
            </Heading>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.15}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="relative">
                <span className="text-5xl font-bold text-surface font-[family-name:var(--font-plus-jakarta)]">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold font-[family-name:var(--font-plus-jakarta)]">
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
