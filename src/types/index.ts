export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  externalUrl?: string;
  images?: string[];
  thumbnail?: string;
  platform?: string;
  status?: string;
  technologies: string[];
  featured: boolean;
  sortOrder?: number;
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

export type LegalPageType =
  | "privacy"
  | "terms"
  | "ugc-policy"
  | "account-deletion"
  | "report-policy";

export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalPage {
  type: LegalPageType;
  title: string;
  slug: string;
  effectiveDate: string;
  summary: string;
  sections: LegalSection[];
  relatedApps?: string[];
  contactEmail?: string;
}

export interface AndroidAppLink {
  packageName: string;
  sha256CertFingerprints: string[];
}

export interface IosAssociatedDomain {
  teamId: string;
  bundleId: string;
  paths: string[];
}

export interface AppProduct {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  platforms: string[];
  status: string;
  marketingUrl: string;
  supportUrl: string;
  privacyUrl: string;
  termsUrl: string;
  deletionUrl: string;
  reportUrl: string;
  oauthRedirectUrls: string[];
  authorizedDomainNotes: string;
  ios?: IosAssociatedDomain;
  android?: AndroidAppLink;
  appStoreUrl?: string;
  playStoreUrl?: string;
  reviewerNotes?: string;
  demoCredentials?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  supportEmail: string;
  developerName: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    dribbble?: string;
  };
  nav: NavItem[];
  legalLinks: NavItem[];
  formEndpoints?: {
    contact?: string;
    support?: string;
    accountDeletion?: string;
    report?: string;
  };
}
