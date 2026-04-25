import { processSteps } from "@/data/process";
import { projects, getProjectBySlug as getEnglishProjectBySlug } from "@/data/projects";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import type { Locale } from "./config";
import type { ProcessStep, Project, Service, SiteConfig, Testimonial } from "@/types";

const frenchSiteConfig: SiteConfig = {
  ...siteConfig,
  tagline: "Applications mobiles et sites web avec discipline produit.",
  description:
    "Nouah Labs est un studio de developpement cible pour fondateurs et equipes qui ont besoin d'applications, de produits web et de systemes numeriques prets a lancer.",
  nav: [
    { label: "Projets", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "A propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

const frenchProjects: Project[] = [
  {
    slug: "hirelify",
    title: "Hirelify",
    subtitle: "Une application mobile ciblee pour renforcer les candidatures.",
    description:
      "Hirelify aide les candidats a clarifier leurs CV, organiser leurs documents et passer de la preparation a l'envoi avec moins de friction.",
    category: "Application mobile",
    year: "2026",
    platform: "iOS et Android",
    status: "En developpement",
    technologies: ["Expo", "React Native", "TypeScript"],
    featured: true,
    sortOrder: 1,
  },
];

const frenchServices: Service[] = [
  {
    id: "mobile-app",
    title: "Developpement d'applications mobiles",
    shortDescription:
      "Applications natives et multiplateformes que les utilisateurs aiment utiliser.",
    longDescription:
      "Nous concevons et developpons des applications iOS et Android qui combinent interfaces soignees et architecture robuste. Produit grand public, outil interne ou extension d'un service existant : nous livrons des experiences naturelles et performantes.",
    icon: "smartphone",
    features: [
      "Developpement iOS et Android",
      "Multiplateforme avec React Native ou Flutter",
      "Interfaces intuitives",
      "Architecture offline-first",
      "Notifications push et temps reel",
      "Soumission App Store et optimisation",
    ],
  },
  {
    id: "website",
    title: "Design et developpement de sites web",
    shortDescription:
      "Sites premium qui font une bonne premiere impression et generent des resultats.",
    longDescription:
      "Votre site est souvent le premier point de contact. Nous construisons des sites rapides, beaux et orientes conversion qui racontent votre histoire et transforment les visiteurs en clients.",
    icon: "globe",
    features: [
      "Design sur mesure",
      "Responsive sur tous les appareils",
      "SEO pour la decouvrabilite",
      "Chargement rapide",
      "Integration de gestion de contenu",
      "Analytics et suivi de conversion",
    ],
  },
  {
    id: "web-app",
    title: "Developpement d'applications web",
    shortDescription:
      "Applications web puissantes pour gerer des workflows complexes avec elegance.",
    longDescription:
      "Plateformes SaaS ou outils internes, nous construisons des applications web qui evoluent avec votre activite, avec une architecture claire et une interface fiable.",
    icon: "layout",
    features: [
      "Developpement full-stack",
      "Architecture cloud scalable",
      "Donnees temps reel et collaboration",
      "Controle d'acces par roles",
      "Design et integration d'API",
      "Tests automatises et CI/CD",
    ],
  },
  {
    id: "mvp",
    title: "MVP et developpement produit",
    shortDescription:
      "De l'idee au lancement, rapidement. Nous aidons a valider et livrer.",
    longDescription:
      "Vous avez une idee et devez avancer vite ? Nous aidons les startups et fondateurs a transformer des concepts en produits livres, puis a iterer avec de vrais retours utilisateurs.",
    icon: "rocket",
    features: [
      "Strategie produit et cadrage",
      "Prototypage rapide",
      "Developpement MVP lean",
      "Tests utilisateurs et validation",
      "Amelioration iterative",
      "Strategie de lancement",
    ],
  },
  {
    id: "design",
    title: "Design produit",
    shortDescription:
      "Design reflechi qui equilibre esthetique et utilisabilite.",
    longDescription:
      "Les bons produits commencent par un bon design. Nous comprenons les besoins utilisateurs, simplifions les workflows et creons des interfaces qui semblent evidentes.",
    icon: "palette",
    features: [
      "Recherche utilisateur et personas",
      "Wireframes et prototypes",
      "Design visuel et marque",
      "Design systems et composants",
      "Tests d'utilisabilite",
      "Interactions et motion design",
    ],
  },
  {
    id: "dashboard",
    title: "Tableaux de bord admin",
    shortDescription:
      "Tableaux de bord propres et fonctionnels pour piloter vos donnees.",
    longDescription:
      "Nous construisons des tableaux de bord et outils internes qui simplifient la gestion : analytics, reporting, utilisateurs, contenu et operations.",
    icon: "bar-chart",
    features: [
      "Visualisation et reporting",
      "Gestion des utilisateurs et roles",
      "Gestion de contenu",
      "Journalisation et audit",
      "Widgets et vues sur mesure",
      "Exports et integrations",
    ],
  },
];

const frenchProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Decouverte",
    description:
      "Nous commencons par comprendre vos objectifs, vos utilisateurs et votre marche afin de resoudre le bon probleme.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Nous creons wireframes, prototypes et design visuel avant d'ecrire le code, pour que chaque ecran ait un role clair.",
  },
  {
    step: 3,
    title: "Construction",
    description:
      "Nos ingenieurs transforment le design en code propre et scalable, par cycles courts avec une communication continue.",
  },
  {
    step: 4,
    title: "Lancement",
    description:
      "Nous gerons tests, optimisation et deploiement pour un lancement fluide, puis restons disponibles pour iterer.",
  },
];

export function getLocalSiteConfig(locale: Locale): SiteConfig {
  return locale === "fr" ? frenchSiteConfig : siteConfig;
}

export function getLocalProjects(locale: Locale): Project[] {
  return locale === "fr" ? frenchProjects : projects;
}

export function getLocalFeaturedProjects(locale: Locale): Project[] {
  return getLocalProjects(locale).filter((project) => project.featured);
}

export function getLocalProjectBySlug(
  slug: string,
  locale: Locale
): Project | undefined {
  return locale === "fr"
    ? frenchProjects.find((project) => project.slug === slug)
    : getEnglishProjectBySlug(slug);
}

export function getLocalServices(locale: Locale): Service[] {
  return locale === "fr" ? frenchServices : services;
}

export function getLocalTestimonials(locale: Locale): Testimonial[] {
  void locale;
  return testimonials;
}

export function getLocalProcessSteps(locale: Locale): ProcessStep[] {
  return locale === "fr" ? frenchProcessSteps : processSteps;
}
