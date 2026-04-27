import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComplianceRequestPage } from "@/components/legal/ComplianceRequestPage";
import { getComplianceCopy } from "@/data/compliance-copy";
import { isLocale, type Locale } from "@/i18n/config";
import { getAppProducts, getSiteSettings } from "@/sanity/lib/queries";

interface SupportPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: SupportPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const copy = getComplianceCopy(localeParam);

  return {
    title: copy.support.title,
    description: copy.support.body,
  };
}

export default async function SupportPage({ params }: SupportPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const copy = getComplianceCopy(locale);
  const [settings, apps] = await Promise.all([
    getSiteSettings(locale),
    getAppProducts(locale),
  ]);

  return (
    <ComplianceRequestPage
      eyebrow={copy.support.eyebrow}
      title={copy.support.title}
      body={copy.support.body}
      apps={apps}
      settings={settings}
      emailFallback={copy.support.emailFallback}
      form={{
        kind: "support",
        subject: copy.support.subject,
        endpoint: settings.formEndpoints?.support,
        categories: copy.support.categories,
        categoryLabel: copy.support.categoryLabel,
        labels: copy.form,
      }}
    />
  );
}
