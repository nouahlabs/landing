import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function CallToAction() {
  return (
    <section className="bg-dark py-20 text-white lg:py-24">
      <Container>
        <FadeIn>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
                Start here
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Bring a focused product idea. We will help shape the path to
                launch.
              </h2>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href="/contact">Start a Project</Button>
              <Button
                variant="secondary"
                href="/work"
                className="border-white/20 bg-white/5 text-white hover:bg-white hover:text-dark"
              >
                See Work
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
