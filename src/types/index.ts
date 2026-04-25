export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  client: string;
  category: string;
  year: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  outcome: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  featured: boolean;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    dribbble?: string;
  };
  nav: NavItem[];
}
