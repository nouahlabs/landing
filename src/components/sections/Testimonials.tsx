import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section className="bg-surface">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Testimonials
            </span>
            <Heading level="h2" className="mt-3">
              What our clients say
            </Heading>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.15}
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <div className="rounded-2xl border border-border bg-white p-8">
                <p className="text-sm leading-relaxed text-text-secondary">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-text">
                    {t.author}
                  </p>
                  <p className="text-xs text-text-tertiary">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
