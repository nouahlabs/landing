import type { Metadata } from "next";
import Image from "next/image";
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
      <Section className="bg-page pt-32">
        <Container>
          <FadeIn>
            <div className="studio-panel grid overflow-hidden rounded-[1.5rem] lg:grid-cols-[1fr_0.86fr]">
              <div className="p-6 sm:p-10 lg:p-12">
                <span className="text-sm font-semibold uppercase text-accent-foreground">
                  {t.contactPage.eyebrow}
                </span>
                <Heading level="h1" className="mt-3">
                  {t.contactPage.title}
                </Heading>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
                  {t.contactPage.body}
                </p>
              </div>
              <div className="relative min-h-72 border-t border-border lg:border-l lg:border-t-0">
                <Image
                  src="/assets/studio/dark-developer.webp"
                  alt="Developer workspace for product delivery"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-page pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-10 border-t border-border pt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
                  <ContactForm t={t} />
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <div className="rounded-lg border border-border bg-card-muted p-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase text-text-tertiary">
                      {t.common.email}
                    </h3>
                    <a
                      href="mailto:hello@nouahlabs.com"
                      className="mt-2 block text-text-secondary transition-colors hover:text-text"
                    >
                      hello@nouahlabs.com
                    </a>
                  </div>

                  <div className="mt-8 border-t border-border pt-8">
                    <h3 className="text-sm font-semibold uppercase text-text-tertiary">
                      {t.common.social}
                    </h3>
                    <div className="mt-2 flex flex-col gap-2">
                      <a
                        href="https://twitter.com/nouahlabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary transition-colors hover:text-text"
                      >
                        Twitter / X
                      </a>
                      <a
                        href="https://linkedin.com/company/nouahlabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary transition-colors hover:text-text"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border pt-8">
                    <h3 className="text-sm font-semibold uppercase text-text-tertiary">
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
