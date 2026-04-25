import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getProcessSteps } from "@/sanity/lib/queries";

export async function Process() {
  const processSteps = await getProcessSteps();

  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              How We Work
            </span>
            <Heading level="h2" className="mt-3">
              A practical path from first conversation to live product.
            </Heading>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.1}
          className="mt-12 grid grid-cols-1 border-y border-border md:grid-cols-4"
        >
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="h-full border-b border-border py-8 md:border-b-0 md:border-r md:px-6 md:last:border-r-0">
                <span className="font-display text-sm font-semibold text-accent">
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
