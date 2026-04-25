import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const reasons = [
  {
    title: "Modern, polished design",
    description:
      "Every product we build looks and feels premium. We don't cut corners on design — it's at the core of everything we do.",
  },
  {
    title: "Fast execution",
    description:
      "We move quickly without sacrificing quality. Our lean process means your product gets to market faster.",
  },
  {
    title: "Strong product thinking",
    description:
      "We don't just build what's asked — we help you think through the product to make sure it solves the right problem.",
  },
  {
    title: "Quality-first approach",
    description:
      "From code architecture to pixel-perfect design, we hold ourselves to high standards on every project.",
  },
  {
    title: "Mobile and web expertise",
    description:
      "We're fluent in both mobile and web, so we can recommend the right platform and build it exceptionally well.",
  },
];

export function WhyUs() {
  return (
    <Section className="bg-dark text-white">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-accent-light">
                Why Nouah Labs
              </span>
              <Heading level="h2" className="mt-3 text-white">
                We build with intention
              </Heading>
              <p className="mt-4 text-lg leading-relaxed text-neutral-400">
                Every project we take on gets the same level of care and
                attention. Here&apos;s what makes us different.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren staggerDelay={0.1} className="flex flex-col gap-8">
            {reasons.map((reason, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-accent-light">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold font-[family-name:var(--font-plus-jakarta)] text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}
