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
    <section className="bg-page py-20 text-text lg:py-24">
      <Container>
        <FadeIn>
          <div className="studio-panel flex flex-col justify-between gap-8 rounded-[1.5rem] px-6 py-10 md:flex-row md:items-center lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase text-accent-foreground">
                {t.cta.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">
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
