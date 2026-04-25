import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const t = getDictionary(localeParam);

  return {
    title: t.metadata.contactTitle,
    description: t.metadata.contactDescription,
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const t = getDictionary(locale);

  return (
    <>
      <Section className="pt-36">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                {t.contactPage.eyebrow}
              </span>
              <Heading level="h1" className="mt-3">
                {t.contactPage.title}
              </Heading>
              <p className="mt-4 text-lg text-text-secondary">
                {t.contactPage.body}
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-20">
            <div className="lg:col-span-3">
              <FadeIn>
                <ContactForm t={t} />
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-tertiary">
                      {t.common.email}
                    </h3>
                    <a
                      href="mailto:hello@nouahlabs.com"
                      className="mt-2 block text-text-secondary transition-colors hover:text-accent-foreground"
                    >
                      hello@nouahlabs.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-tertiary">
                      {t.common.social}
                    </h3>
                    <div className="mt-2 flex flex-col gap-2">
                      <a
                        href="https://twitter.com/nouahlabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary transition-colors hover:text-accent-foreground"
                      >
                        Twitter / X
                      </a>
                      <a
                        href="https://linkedin.com/company/nouahlabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary transition-colors hover:text-accent-foreground"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-tertiary">
                      {t.common.responseTime}
                    </h3>
                    <p className="mt-2 text-text-secondary">
                      {t.contactPage.response}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
