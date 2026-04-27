import type {
  AppProduct,
  LegalPage,
  LegalPageType,
  ProcessStep,
  Project,
  Service,
  SiteConfig,
  Testimonial,
} from "@/types";
import { defaultLocale, type Locale } from "@/i18n/config";
import {
  getLocalAppProductBySlug,
  getLocalAppProducts,
  getLocalLegalPageByType,
  getLocalLegalPages,
  getLocalProcessSteps,
  getLocalProjectBySlug,
  getLocalProjects,
  getLocalServices,
  getLocalSiteConfig,
  getLocalTestimonials,
} from "@/i18n/content";
import { isSanityConfigured, sanityClient } from "./client";

const revalidate = 120;

async function fetchSanity<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured) {
    return fallback;
  }

  try {
    const data = await sanityClient.fetch<T>(query, {}, { next: { revalidate } });
    if (Array.isArray(data) && data.length === 0) {
      return fallback;
    }
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getSiteSettings(
  locale: Locale = defaultLocale
): Promise<SiteConfig> {
  const fallbackSiteConfig = getLocalSiteConfig(locale);

  if (locale !== defaultLocale) {
    return fallbackSiteConfig;
  }

  const settings = await fetchSanity<SiteConfig>(
    `*[_type == "siteSettings"][0]{
      name,
      tagline,
      description,
      url,
      email,
      supportEmail,
      developerName,
      social,
      nav,
      legalLinks,
      formEndpoints
    }`,
    fallbackSiteConfig
  );

  return {
    ...fallbackSiteConfig,
    ...settings,
    social: {
      ...fallbackSiteConfig.social,
      ...(settings.social ?? {}),
    },
    nav: settings.nav?.length ? settings.nav : fallbackSiteConfig.nav,
    legalLinks: settings.legalLinks?.length
      ? settings.legalLinks
      : fallbackSiteConfig.legalLinks,
    formEndpoints: {
      ...fallbackSiteConfig.formEndpoints,
      ...(settings.formEndpoints ?? {}),
    },
  };
}

export async function getLegalPages(
  locale: Locale = defaultLocale
): Promise<LegalPage[]> {
  const fallbackPages = getLocalLegalPages(locale);

  if (locale !== defaultLocale) {
    return fallbackPages;
  }

  return fetchSanity<LegalPage[]>(
    `*[_type == "legalPage"] | order(type asc) {
      type,
      title,
      "slug": slug.current,
      effectiveDate,
      summary,
      "sections": coalesce(sections[]{ heading, body }, []),
      "relatedApps": coalesce(relatedApps, []),
      contactEmail
    }`,
    fallbackPages
  );
}

export async function getLegalPageByType(
  type: LegalPageType,
  locale: Locale = defaultLocale
): Promise<LegalPage | undefined> {
  const pages = await getLegalPages(locale);
  return (
    pages.find((page) => page.type === type) ??
    getLocalLegalPageByType(type, locale)
  );
}

export async function getAppProducts(
  locale: Locale = defaultLocale
): Promise<AppProduct[]> {
  const fallbackApps = getLocalAppProducts(locale);

  if (locale !== defaultLocale) {
    return fallbackApps;
  }

  return fetchSanity<AppProduct[]>(
    `*[_type == "appProduct"] | order(name asc) {
      name,
      "slug": slug.current,
      tagline,
      description,
      "platforms": coalesce(platforms, []),
      status,
      marketingUrl,
      supportUrl,
      privacyUrl,
      termsUrl,
      deletionUrl,
      reportUrl,
      "oauthRedirectUrls": coalesce(oauthRedirectUrls, []),
      authorizedDomainNotes,
      android,
      ios,
      appStoreUrl,
      playStoreUrl,
      reviewerNotes,
      demoCredentials
    }`,
    fallbackApps
  );
}

export async function getAppProductBySlug(
  slug: string,
  locale: Locale = defaultLocale
): Promise<AppProduct | undefined> {
  const apps = await getAppProducts(locale);
  return (
    apps.find((app) => app.slug === slug) ??
    getLocalAppProductBySlug(slug, locale)
  );
}

export async function getProjects(
  locale: Locale = defaultLocale
): Promise<Project[]> {
  const fallbackProjects = getLocalProjects(locale);

  if (locale !== defaultLocale) {
    return fallbackProjects;
  }

  return fetchSanity<Project[]>(
    `*[_type == "project"] | order(sortOrder asc, year desc, title asc) {
      "slug": slug.current,
      title,
      subtitle,
      description,
      category,
      year,
      externalUrl,
      "images": coalesce(images[].asset->url, []),
      "thumbnail": thumbnail.asset->url,
      platform,
      status,
      "technologies": coalesce(technologies, []),
      featured,
      sortOrder
    }`,
    fallbackProjects
  );
}

export async function getFeaturedProjects(
  locale: Locale = defaultLocale
): Promise<Project[]> {
  const projects = await getProjects(locale);
  return projects.filter((project) => project.featured);
}

export async function getProjectBySlug(
  slug: string,
  locale: Locale = defaultLocale
): Promise<Project | undefined> {
  const projects = await getProjects(locale);
  return (
    projects.find((project) => project.slug === slug) ??
    getLocalProjectBySlug(slug, locale)
  );
}

export async function getServices(
  locale: Locale = defaultLocale
): Promise<Service[]> {
  const fallbackServices = getLocalServices(locale);

  if (locale !== defaultLocale) {
    return fallbackServices;
  }

  return fetchSanity<Service[]>(
    `*[_type == "service"] | order(sortOrder asc, title asc) {
      id,
      title,
      shortDescription,
      longDescription,
      icon,
      "features": coalesce(features, [])
    }`,
    fallbackServices
  );
}

export async function getTestimonials(
  locale: Locale = defaultLocale
): Promise<Testimonial[]> {
  const fallbackTestimonials = getLocalTestimonials(locale);

  if (locale !== defaultLocale) {
    return fallbackTestimonials;
  }

  return fetchSanity<Testimonial[]>(
    `*[_type == "testimonial"] | order(sortOrder asc, author asc) {
      id,
      quote,
      author,
      role,
      company
    }`,
    fallbackTestimonials
  );
}

export async function getProcessSteps(
  locale: Locale = defaultLocale
): Promise<ProcessStep[]> {
  const fallbackProcessSteps = getLocalProcessSteps(locale);

  if (locale !== defaultLocale) {
    return fallbackProcessSteps;
  }

  return fetchSanity<ProcessStep[]>(
    `*[_type == "processStep"] | order(step asc) {
      step,
      title,
      description
    }`,
    fallbackProcessSteps
  );
}
