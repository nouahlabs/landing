import type { ProcessStep, Project, Service, SiteConfig, Testimonial } from "@/types";
import { processSteps as fallbackProcessSteps } from "@/data/process";
import {
  getProjectBySlug as getFallbackProjectBySlug,
  projects as fallbackProjects,
} from "@/data/projects";
import { services as fallbackServices } from "@/data/services";
import { siteConfig as fallbackSiteConfig } from "@/data/site";
import { testimonials as fallbackTestimonials } from "@/data/testimonials";
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

export async function getSiteSettings(): Promise<SiteConfig> {
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

export async function getProjects(): Promise<Project[]> {
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

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return (
    projects.find((project) => project.slug === slug) ??
    getFallbackProjectBySlug(slug)
  );
}

export async function getServices(): Promise<Service[]> {
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

export async function getTestimonials(): Promise<Testimonial[]> {
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

export async function getProcessSteps(): Promise<ProcessStep[]> {
  return fetchSanity<ProcessStep[]>(
    `*[_type == "processStep"] | order(step asc) {
      step,
      title,
      description
    }`,
    fallbackProcessSteps
  );
}
