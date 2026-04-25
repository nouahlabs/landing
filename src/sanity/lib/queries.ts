import type { ProcessStep, Project, Service, SiteConfig, Testimonial } from "@/types";
import { defaultLocale, type Locale } from "@/i18n/config";
import {
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
      social,
      nav
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
  };
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
