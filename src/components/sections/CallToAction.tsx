import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { localizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface CallToActionProps {
  locale: Locale;
  t: Dictionary;
}

export function CallToAction({ locale, t }: CallToActionProps) {
  return (
    <section className="bg-dark py-20 text-white lg:py-24">
      <Container>
        <FadeIn>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-light">
                {t.cta.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                {t.cta.title}
              </h2>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button href={localizedPath("/contact", locale)}>
                {t.common.startProject}
              </Button>
              <Button
                variant="secondary"
                href={localizedPath("/work", locale)}
                className="border-white/20 bg-white/5 text-white hover:bg-white hover:text-dark"
              >
                {t.common.seeWork}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
