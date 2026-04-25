import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface HeroProps {
  locale: Locale;
  t: Dictionary;
}

export function Hero({ locale, t }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-28 text-text transition-colors duration-300">
      <div className="absolute inset-0 opacity-45">
        <div className="absolute left-0 right-0 top-24 h-px bg-accent-light" />
        <div className="absolute bottom-24 left-0 right-0 h-px bg-border/60" />
        <div className="absolute left-[8%] top-0 h-full w-px bg-border/50" />
        <div className="absolute right-[14%] top-0 h-full w-px bg-border/50" />
      </div>

      <Container className="relative">
        <div className="grid min-h-[78vh] items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <span className="inline-flex rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-accent-foreground">
                {t.hero.eyebrow}
              </span>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                {t.hero.title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
                {t.hero.body}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href={localizedPath("/contact", locale)}>
                  {t.common.startProject}
                </Button>
                <Button
                  variant="secondary"
                  href={localizedPath("/work", locale)}
                >
                  {t.common.viewWork}
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.25}>
            <div className="relative">
              <div className="grid gap-3">
                <div className="rounded-2xl border border-border bg-white p-4 shadow-xl shadow-accent/10">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-accent-foreground">
                      {t.hero.currentBuild}
                    </span>
                    <span className="text-xs text-text-tertiary">Hirelify</span>
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
                    <div className="mx-auto h-56 w-28 rounded-2xl border border-border bg-gradient-to-b from-maya-blue/50 to-lavender/40 p-3">
                      <div className="h-4 rounded-full bg-white/60" />
                      <div className="mt-4 h-20 rounded-xl bg-white/35" />
                      <div className="mt-4 space-y-2">
                        <div className="h-2 rounded-full bg-text-tertiary/35" />
                        <div className="h-2 w-2/3 rounded-full bg-text-tertiary/25" />
                        <div className="h-8 rounded-full bg-accent/70" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="font-display text-3xl font-semibold tracking-tight">
                        {t.hero.productSystems}
                      </p>
                      <div className="mt-6 grid grid-cols-3 gap-2">
                        {t.hero.pillars.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border bg-surface px-3 py-3 text-center text-xs text-text-secondary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-sm text-text-secondary">
                  {t.hero.capabilities.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border bg-white p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
