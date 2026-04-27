import type { ComponentProps } from "react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { ComplianceForm } from "@/components/forms/ComplianceForm";
import type { AppProduct, LegalPage, SiteConfig } from "@/types";

interface ComplianceRequestPageProps {
  eyebrow: string;
  title: string;
  body: string;
  policy?: LegalPage;
  apps: AppProduct[];
  settings: SiteConfig;
  form: {
    kind: "support" | "accountDeletion" | "report";
    subject: string;
    endpoint?: string;
    categories?: string[];
    categoryLabel?: string;
    labels: ComponentProps<typeof ComplianceForm>["labels"];
  };
  emailFallback?: string;
}

export function ComplianceRequestPage({
  eyebrow,
  title,
  body,
  policy,
  apps,
  settings,
  form,
  emailFallback,
}: ComplianceRequestPageProps) {
  const supportEmail = settings.supportEmail || settings.email;

  return (
    <Section className="pt-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge>{eyebrow}</Badge>
            <Heading level="h1" className="mt-6 text-text">
              {title}
            </Heading>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              {body}
            </p>
            {emailFallback && (
              <p className="mt-6 text-sm leading-6 text-text-secondary">
                {emailFallback}{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="font-medium text-text underline-offset-4 hover:underline"
                >
                  {supportEmail}
                </a>
                .
              </p>
            )}

            {policy && (
              <div className="mt-10 space-y-4">
                {policy.sections.slice(0, 3).map((section) => (
                  <article
                    key={section.heading}
                    className="rounded-lg border border-border bg-card p-5"
                  >
                    <Heading level="h4" className="text-text">
                      {section.heading}
                    </Heading>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">
                      {section.body}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm shadow-dark/5">
            <ComplianceForm
              kind={form.kind}
              subject={form.subject}
              endpoint={form.endpoint}
              apps={apps}
              categories={form.categories}
              categoryLabel={form.categoryLabel}
              labels={form.labels}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
