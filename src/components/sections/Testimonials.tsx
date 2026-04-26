import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { getTestimonials } from "@/sanity/lib/queries";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface TestimonialsProps {
  locale: Locale;
  t: Dictionary;
}

export async function Testimonials({ locale, t }: TestimonialsProps) {
  const testimonials = await getTestimonials(locale);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <Section className="bg-panel-soft">
      <Container>
        <FadeIn>
          <div className="max-w-2xl border-t border-border pt-10">
            <span className="text-sm font-semibold uppercase text-accent-foreground">
              {t.testimonials.eyebrow}
            </span>
            <Heading level="h2" className="mt-3">
              {t.testimonials.title}
            </Heading>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.1}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <figure className="h-full rounded-lg border border-border bg-card p-6">
                <blockquote className="text-sm leading-relaxed text-text-secondary">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-semibold text-text">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-text-tertiary">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
