import Image from "next/image";
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
    <section className="relative overflow-hidden bg-page px-3 pt-24 text-text transition-colors duration-300 sm:px-5">
      <div className="relative mx-auto w-full max-w-[88rem]">
        <div className="studio-panel hairline-grid relative overflow-hidden rounded-[1.5rem] px-5 py-12 sm:px-10 lg:min-h-[720px] lg:px-14 lg:py-16 xl:px-16">
          <div className="absolute inset-x-8 top-32 hidden h-px bg-border md:block" />
          <div className="absolute inset-x-8 bottom-36 hidden h-px bg-border md:block" />

          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] xl:gap-16">
            <div className="max-w-[58rem]">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-text text-card">
                    <span className="h-4 w-2 rounded-full bg-card" />
                    <span className="ml-1 h-4 w-2 rounded-full bg-card" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold leading-tight">
                      {t.hero.eyebrow}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {t.hero.capabilities.join(" / ")}
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="mt-12 max-w-[58rem] text-balance font-display text-5xl font-semibold leading-[0.94] text-text sm:text-6xl md:text-7xl lg:text-[6.25rem] xl:text-[7rem]">
                  {t.hero.title}
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 max-w-3xl border-t border-border pt-6">
                  <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
                    {t.hero.body}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Button href={localizedPath("/contact", locale)}>
                    {t.common.startProject}
                  </Button>
                  <Button
                    variant="ghost"
                    href={localizedPath("/work", locale)}
                    className="underline decoration-border underline-offset-4"
                  >
                    {t.common.viewWork}
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border pt-6">
                  <div className="flex -space-x-2">
                    <span className="h-9 w-9 rounded-full border-2 border-panel bg-accent" />
                    <span className="h-9 w-9 rounded-full border-2 border-panel bg-success" />
                    <span className="h-9 w-9 rounded-full border-2 border-panel bg-text" />
                  </div>
                  <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
                    {t.hero.productSystems}
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.1}>
              <div className="relative mx-auto mt-4 w-full max-w-[620px] lg:mt-28 lg:max-w-none xl:mt-24">
                <div className="relative ml-auto aspect-[0.78] max-h-[560px] overflow-hidden rounded-[1.5rem] bg-card shadow-2xl shadow-black/10 lg:w-[82%]">
                  <Image
                    src="/assets/studio/product-ui.webp"
                    alt="Mobile product interface being reviewed"
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/12" />
                </div>

                <div className="glass-panel absolute right-0 top-8 hidden w-44 rounded-[1.25rem] p-5 md:block">
                  <p className="text-xs uppercase text-text-secondary">
                    {t.hero.currentBuild}
                  </p>
                  <p className="mt-6 font-display text-4xl font-semibold leading-none">
                    03
                  </p>
                  <p className="mt-2 text-sm leading-tight text-text-secondary">
                    {t.hero.pillars.join(", ")}
                  </p>
                </div>

                <div className="glass-panel absolute left-2 top-36 hidden w-64 rounded-full px-5 py-4 md:flex md:items-center md:gap-3 xl:left-0 xl:w-72">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success text-card">
                    1
                  </span>
                  <span className="text-sm font-medium text-text">
                    {t.hero.pillars[0]} / {t.hero.pillars[1]}
                  </span>
                </div>

                <div className="glass-panel absolute -bottom-5 right-4 w-[min(22rem,90vw)] rounded-[1.25rem] p-4 sm:right-10">
                  <div className="grid grid-cols-[6rem_1fr] gap-4">
                    <div className="relative overflow-hidden rounded-lg bg-card-muted">
                      <Image
                        src="/assets/studio/mobile-build.webp"
                        alt="Mobile build workspace"
                        width={220}
                        height={180}
                        className="h-full min-h-24 w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-sm text-text-secondary">Hirelify</p>
                      <p className="font-display text-2xl font-semibold leading-tight">
                        {t.hero.currentBuild}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {t.hero.pillars.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-text-secondary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
