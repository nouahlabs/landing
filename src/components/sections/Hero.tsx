import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark pt-28 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 right-0 top-24 h-px bg-accent-light" />
        <div className="absolute bottom-24 left-0 right-0 h-px bg-white/10" />
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/10" />
        <div className="absolute right-[14%] top-0 h-full w-px bg-white/10" />
      </div>

      <Container className="relative">
        <div className="grid min-h-[78vh] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <span className="inline-flex rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-accent-light">
                App development studio
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Mobile apps and web products built with restraint.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/68 md:text-xl">
                Nouah Labs helps founders and teams turn focused ideas into
                launch-ready apps, websites, and digital systems that feel
                deliberate from the first screen.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/contact">Start a Project</Button>
                <Button
                  variant="secondary"
                  href="/work"
                  className="border-white/20 bg-white/5 text-white hover:border-accent-light hover:bg-white hover:text-dark"
                >
                  View Work
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25}>
            <div className="relative">
              <div className="grid gap-3">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-accent-light">
                      Current Build
                    </span>
                    <span className="text-xs text-white/45">Hirelify</span>
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
                    <div className="mx-auto h-56 w-28 rounded-lg border border-white/15 bg-gradient-to-b from-accent/40 to-white/[0.03] p-3">
                      <div className="h-4 rounded-sm bg-white/35" />
                      <div className="mt-4 h-20 rounded-sm bg-white/10" />
                      <div className="mt-4 space-y-2">
                        <div className="h-2 rounded-full bg-white/30" />
                        <div className="h-2 w-2/3 rounded-full bg-white/15" />
                        <div className="h-8 rounded-md bg-accent/70" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-display text-3xl font-semibold tracking-tight">
                        Product systems for focused launches.
                      </p>
                      <div className="mt-6 grid grid-cols-3 gap-2">
                        {["Design", "Build", "Ship"].map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-white/10 bg-white/5 px-3 py-3 text-center text-xs text-white/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-sm text-white/60">
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    Strategy
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    Interface
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    Launch
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
