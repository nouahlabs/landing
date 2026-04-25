import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const reasons = [
  {
    title: "Product before decoration",
    description:
      "We start with the workflow, the user, and the launch path before deciding what the interface should look like.",
  },
  {
    title: "Modern without noise",
    description:
      "The design language is polished, but the app still feels useful, direct, and easy to maintain.",
  },
  {
    title: "Small team, clear ownership",
    description:
      "You work with the people shaping the product instead of passing decisions through layers of handoff.",
  },
  {
    title: "Launch-minded engineering",
    description:
      "We build with deployment, performance, content workflows, and iteration in mind from the first pass.",
  },
];

export function WhyUs() {
  return (
    <Section className="bg-dark text-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <FadeIn>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
                Why Nouah Labs
              </span>
              <Heading level="h2" className="mt-3 text-white">
                Built for teams that care about the product, not just the page.
              </Heading>
            </div>
          </FadeIn>

          <StaggerChildren
            staggerDelay={0.08}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2"
          >
            {reasons.map((reason, index) => (
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
