import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { localizedPath, type Locale } from "@/i18n/config";
import type { LegalPage } from "@/types";

interface LegalPageViewProps {
  page: LegalPage;
  locale: Locale;
  labels: {
    eyebrow: string;
    effective: string;
    contact: string;
    canonicalNote: string;
    support: string;
    accountDeletion: string;
    report: string;
  };
}

export function LegalPageView({ page, locale, labels }: LegalPageViewProps) {
  return (
    <Section className="pt-36">
      <Container className="max-w-5xl">
        <div className="max-w-3xl">
          <Badge>{labels.eyebrow}</Badge>
          <Heading level="h1" className="mt-6 text-text">
            {page.title}
          </Heading>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            {page.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-text-tertiary">
            <span>
              {labels.effective}: {page.effectiveDate}
            </span>
            {page.contactEmail && (
              <a
                href={`mailto:${page.contactEmail}`}
                className="text-text-secondary underline-offset-4 hover:text-text hover:underline"
              >
                {labels.contact}: {page.contactEmail}
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 grid gap-5">
          {page.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-lg border border-border bg-card p-6"
            >
              <Heading level="h3" className="text-text">
                {section.heading}
              </Heading>
              <p className="mt-4 leading-7 text-text-secondary">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-border bg-card-muted p-5 text-sm leading-6 text-text-secondary">
          <p>{labels.canonicalNote}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={localizedPath("/support", locale)}
              className="font-medium text-text underline-offset-4 hover:underline"
            >
              {labels.support}
            </Link>
            <Link
              href={localizedPath("/account-deletion", locale)}
              className="font-medium text-text underline-offset-4 hover:underline"
            >
              {labels.accountDeletion}
            </Link>
            <Link
              href={localizedPath("/report", locale)}
              className="font-medium text-text underline-offset-4 hover:underline"
            >
              {labels.report}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
