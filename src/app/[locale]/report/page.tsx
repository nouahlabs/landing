import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComplianceRequestPage } from "@/components/legal/ComplianceRequestPage";
import { getComplianceCopy } from "@/data/compliance-copy";
import { isLocale, type Locale } from "@/i18n/config";
import {
  getAppProducts,
  getLegalPageByType,
  getSiteSettings,
} from "@/sanity/lib/queries";

interface ReportPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ReportPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const copy = getComplianceCopy(localeParam);

  return {
    title: copy.report.title,
    description: copy.report.body,
  };
}

export default async function ReportPage({ params }: ReportPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const copy = getComplianceCopy(locale);
  const [settings, apps, policy] = await Promise.all([
    getSiteSettings(locale),
    getAppProducts(locale),
    getLegalPageByType("report-policy", locale),
  ]);

  return (
    <ComplianceRequestPage
      eyebrow={copy.report.eyebrow}
      title={copy.report.title}
      body={copy.report.body}
      policy={policy}
      apps={apps}
      settings={settings}
      emailFallback={copy.support.emailFallback}
      form={{
        kind: "report",
        subject: copy.report.subject,
        endpoint: settings.formEndpoints?.report,
        categories: copy.report.categories,
        categoryLabel: copy.report.categoryLabel,
        labels: copy.form,
      }}
    />
  );
}
