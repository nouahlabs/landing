import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/legal/LegalPageView";
import { getComplianceCopy } from "@/data/compliance-copy";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getLegalPageByType } from "@/sanity/lib/queries";
import type { LegalPageType } from "@/types";

const legalSlugToType: Record<string, LegalPageType> = {
  privacy: "privacy",
  terms: "terms",
  "ugc-policy": "ugc-policy",
};

interface LegalPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(legalSlugToType).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam) || !legalSlugToType[slug]) {
    return {};
  }

  const page = await getLegalPageByType(legalSlugToType[slug], localeParam);

  return {
    title: page?.title,
    description: page?.summary,
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const type = legalSlugToType[slug];

  if (!type) {
    notFound();
  }

  const page = await getLegalPageByType(type, locale);

  if (!page) {
    notFound();
  }

  const copy = getComplianceCopy(locale);

  return <LegalPageView page={page} locale={locale} labels={copy.legal} />;
}
