import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nouah Labs to discuss your next mobile app, website, or digital product project.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-36">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Get in Touch
              </span>
              <Heading level="h1" className="mt-3">
                Let&apos;s build something together
              </Heading>
              <p className="mt-4 text-lg text-text-secondary">
                Have a project in mind? Fill out the form below and
                we&apos;ll get back to you within 24 hours.
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
                <ContactForm />
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@nouahlabs.com"
                      className="mt-2 block text-text-secondary transition-colors hover:text-accent"
                    >
                      hello@nouahlabs.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                      Social
                    </h3>
                    <div className="mt-2 flex flex-col gap-2">
                      <a
                        href="https://twitter.com/nouahlabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary transition-colors hover:text-accent"
                      >
                        Twitter / X
                      </a>
                      <a
                        href="https://linkedin.com/company/nouahlabs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary transition-colors hover:text-accent"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                      Response Time
                    </h3>
                    <p className="mt-2 text-text-secondary">
                      We typically respond within 24 hours on business days.
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
