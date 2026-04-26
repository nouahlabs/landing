import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getServices, getSiteSettings } from "@/sanity/lib/queries";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const settings = await getSiteSettings(locale);
  const services = await getServices(locale);

  return (
    <div lang={locale} className="min-h-screen bg-page">
      <Header
        locale={locale}
        settings={settings}
        labels={{
          startProject: dictionary.common.startProject,
          light: dictionary.common.light,
          dark: dictionary.common.dark,
          themeToggle: dictionary.common.themeToggle,
        }}
      />
      <main className="min-h-screen overflow-hidden bg-page">
        {children}
      </main>
      <Footer
        locale={locale}
        settings={settings}
        labels={{
          services: dictionary.metadata.servicesTitle,
          contact: dictionary.metadata.contactTitle,
          allRightsReserved: dictionary.common.allRightsReserved,
          footerNote: dictionary.common.footerNote,
          serviceLinks: services.slice(0, 4).map((service) => service.title),
          language: dictionary.common.language,
        }}
      />
    </div>
  );
}
