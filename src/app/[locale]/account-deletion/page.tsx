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

interface AccountDeletionPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AccountDeletionPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const copy = getComplianceCopy(localeParam);

  return {
    title: copy.deletion.title,
    description: copy.deletion.body,
  };
}

export default async function AccountDeletionPage({
  params,
}: AccountDeletionPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const copy = getComplianceCopy(locale);
  const [settings, apps, policy] = await Promise.all([
    getSiteSettings(locale),
    getAppProducts(locale),
    getLegalPageByType("account-deletion", locale),
  ]);

  return (
    <ComplianceRequestPage
      eyebrow={copy.deletion.eyebrow}
      title={copy.deletion.title}
      body={copy.deletion.body}
      policy={policy}
      apps={apps}
      settings={settings}
      emailFallback={copy.support.emailFallback}
      form={{
        kind: "accountDeletion",
        subject: copy.deletion.subject,
        endpoint: settings.formEndpoints?.accountDeletion,
        labels: copy.form,
      }}
    />
  );
}
