import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/motion/TextReveal";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-18">
      <Container>
        <div className="mx-auto max-w-4xl py-24 lg:py-32">
          <FadeIn delay={0.1}>
            <span className="inline-block rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-text-secondary">
              Digital Product Studio
            </span>
          </FadeIn>

          <h1 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta)]">
            <TextReveal text="We build digital products that matter." />
          </h1>

          <FadeIn delay={0.5}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
              Nouah Labs is a modern studio that designs and builds mobile apps,
              websites, and web applications for startups, businesses, and
              founders.
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Start a Project</Button>
              <Button variant="secondary" href="/work">
                View Our Work
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
