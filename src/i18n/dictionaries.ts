import type { Locale } from "./config";

export const dictionaries = {
  en: {
    common: {
      startProject: "Start a Project",
      viewWork: "View Work",
      seeWork: "See Work",
      exploreServices: "Explore services",
      email: "Email",
      social: "Social",
      responseTime: "Response Time",
      light: "Light",
      dark: "Dark",
      themeToggle: "Toggle color theme",
      language: "Language",
      backToWork: "Back to work",
      visitProduct: "Visit product",
      productUrlPending:
        "The public product URL will be added here once DNS and deployment are configured.",
      allRightsReserved: "All rights reserved.",
      footerNote: "Independent product studio for focused teams.",
    },
    metadata: {
      homeTitle: "Nouah Labs - Digital Product Studio",
      titleTemplate: "%s | Nouah Labs",
      description:
        "A modern digital product studio that builds mobile apps and websites for startups, businesses, and founders.",
      aboutTitle: "About",
      aboutDescription:
        "Learn about Nouah Labs - a modern digital product studio building apps and websites for startups and businesses.",
      workTitle: "Our Work",
      workDescription:
        "Explore our portfolio of mobile apps, websites, and digital products built for startups and businesses.",
      servicesTitle: "Services",
      servicesDescription:
        "End-to-end digital product development services - from mobile apps and websites to MVPs and product design.",
      contactTitle: "Contact",
      contactDescription:
        "Get in touch with Nouah Labs to discuss your next mobile app, website, or digital product project.",
    },
    hero: {
      eyebrow: "App development studio",
      title: "Mobile apps and web products built with restraint.",
      body:
        "Nouah Labs helps founders and teams turn focused ideas into launch-ready apps, websites, and digital systems that feel deliberate from the first screen.",
      currentBuild: "Current Build",
      productSystems: "Product systems for focused launches.",
      pillars: ["Design", "Build", "Ship"],
      capabilities: ["Strategy", "Interface", "Launch"],
    },
    featured: {
      eyebrow: "Selected Work",
      title: "Real products under the Nouah Labs umbrella.",
      viewAll: "View all work",
    },
    servicesHome: {
      eyebrow: "What We Do",
      title: "Design, build, and prepare products for launch.",
      body:
        "We keep the scope practical, the interface sharp, and the build path clear enough to move from concept to production without unnecessary theater.",
    },
    whyUs: {
      eyebrow: "Why Nouah Labs",
      title: "Built for teams that care about the product, not just the page.",
      reasons: [
        {
          title: "Product before decoration",
          description:
            "We start with the workflow, the user, and the launch path before deciding what the interface should look like.",
        },
        {
          title: "Modern without noise",
          description:
            "The design language is polished, but the app still feels useful, direct, and easy to maintain.",
        },
        {
          title: "Small team, clear ownership",
          description:
            "You work with the people shaping the product instead of passing decisions through layers of handoff.",
        },
        {
          title: "Launch-minded engineering",
          description:
            "We build with deployment, performance, content workflows, and iteration in mind from the first pass.",
        },
      ],
    },
    process: {
      eyebrow: "How We Work",
      title: "A practical path from first conversation to live product.",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Clear collaboration, useful products.",
    },
    cta: {
      eyebrow: "Start here",
      title:
        "Bring a focused product idea. We will help shape the path to launch.",
    },
    workPage: {
      eyebrow: "Portfolio",
      title: "Product work from Nouah Labs.",
      body:
        "Explore the products we are shaping and building. Each item opens a detail page first, and live product links appear only after their domains are configured.",
      productLaunch: "Product Launch",
      overview: "Overview",
      productFocus: "Product Focus",
      focusItems: ["CV flow", "Application prep", "Mobile-first UX"],
      platform: "Platform",
      technologies: "Technologies",
      fallbackPlatform: "Digital product",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Practical product services for apps, websites, and launches.",
      body:
        "We shape the product, design the interface, build the system, and prepare it for the realities of launch and iteration.",
      included: "What's included",
      readyTitle: "Ready to get started?",
      readyBody:
        "Tell us about your project and we'll get back to you within 24 hours with a plan.",
    },
    aboutPage: {
      eyebrow: "About Us",
      title: "A small studio for focused product work.",
      paragraphs: [
        "Nouah Labs works with founders, startups, and operating teams to design and build mobile apps, websites, and web applications that can move from idea to production without losing clarity.",
        "The studio is intentionally lean: product thinking, interface design, engineering, content workflow, and launch readiness stay connected instead of being treated as separate phases.",
      ],
      philosophyEyebrow: "Our Philosophy",
      philosophyTitle: "What we stand for",
      values: [
        {
          title: "Design with intention",
          description:
            "Every pixel serves a purpose. We don't add things for decoration - we design with clarity and function in mind.",
        },
        {
          title: "Build with quality",
          description:
            "Clean code, solid architecture, and attention to detail. We build products that last and scale.",
        },
        {
          title: "Ship with speed",
          description:
            "We respect deadlines and move fast. Our lean process means less overhead and more output.",
        },
        {
          title: "Think like a partner",
          description:
            "We don't just take orders - we challenge assumptions, ask questions, and help you build the right thing.",
        },
      ],
      audienceEyebrow: "Who We Work With",
      audienceTitle: "Built for builders",
      audienceBody:
        "We work best with people who care about the products they're building. Whether you're a first-time founder with an idea or an established business looking to modernize, we bring the same level of dedication and craft.",
      talkButton: "Let's Talk",
      audiences: [
        {
          title: "Startups & Founders",
          description:
            "MVPs, product strategy, and rapid iteration to find product-market fit.",
        },
        {
          title: "Small & Medium Businesses",
          description:
            "Custom apps, websites, and tools that help you grow and operate better.",
        },
        {
          title: "Product Teams",
          description:
            "Design and development support for teams that need extra capacity or expertise.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Get in Touch",
      title: "Tell us what you are building.",
      body:
        "Share the product, timeline, and rough scope. The form goes through Formspree once your endpoint is configured.",
      response: "We typically respond within 24 hours on business days.",
    },
    contactForm: {
      subject: "New Nouah Labs project lead",
      name: "Name",
      namePlaceholder: "Your name",
      company: "Company",
      companyPlaceholder: "Your company name",
      projectType: "Project Type",
      selectType: "Select a type",
      budget: "Budget Range",
      selectBudget: "Select a range",
      message: "Project Description",
      messagePlaceholder:
        "Tell us what you are building, who it is for, and what you want to launch.",
      sending: "Sending...",
      send: "Send Message",
      setupError:
        "Formspree is not configured yet. Add NEXT_PUBLIC_FORMSPREE_FORM_ID or NEXT_PUBLIC_FORMSPREE_ENDPOINT.",
      rejectedError: "Formspree rejected the submission.",
      success: "Thanks. Your message was sent and we will reply soon.",
      failure:
        "The message could not be sent. Please email hello@nouahlabs.com directly.",
      projectTypes: [
        "Mobile App",
        "Website",
        "Web Application",
        "MVP / Product Development",
        "Design Only",
        "Other",
      ],
      budgets: [
        "Under $5,000",
        "$5,000 - $15,000",
        "$15,000 - $50,000",
        "$50,000+",
        "Not sure yet",
      ],
    },
    notFound: {
      code: "404",
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      action: "Go Home",
    },
    studio: {
      eyebrow: "CMS Setup",
      title: "Sanity is ready to connect.",
      body:
        "Add your Sanity project ID and dataset to the environment variables, then redeploy or restart the dev server to open the embedded Studio.",
    },
  },
  fr: {
    common: {
      startProject: "Demarrer un projet",
      viewWork: "Voir nos projets",
      seeWork: "Voir les projets",
      exploreServices: "Explorer les services",
      email: "E-mail",
      social: "Reseaux",
      responseTime: "Delai de reponse",
      light: "Clair",
      dark: "Sombre",
      themeToggle: "Changer le theme",
      language: "Langue",
      backToWork: "Retour aux projets",
      visitProduct: "Voir le produit",
      productUrlPending:
        "L'URL publique du produit sera ajoutee ici une fois le DNS et le deploiement configures.",
      allRightsReserved: "Tous droits reserves.",
      footerNote: "Studio produit independant pour equipes ciblees.",
    },
    metadata: {
      homeTitle: "Nouah Labs - Studio de produits numeriques",
      titleTemplate: "%s | Nouah Labs",
      description:
        "Un studio moderne de produits numeriques qui cree des applications mobiles et des sites web pour startups, entreprises et fondateurs.",
      aboutTitle: "A propos",
      aboutDescription:
        "Decouvrez Nouah Labs - un studio moderne qui cree des applications et sites web pour startups et entreprises.",
      workTitle: "Nos projets",
      workDescription:
        "Explorez notre portfolio d'applications mobiles, sites web et produits numeriques pour startups et entreprises.",
      servicesTitle: "Services",
      servicesDescription:
        "Services complets de developpement produit - applications mobiles, sites web, MVP et design produit.",
      contactTitle: "Contact",
      contactDescription:
        "Contactez Nouah Labs pour discuter de votre application mobile, site web ou produit numerique.",
    },
    hero: {
      eyebrow: "Studio de developpement",
      title: "Applications mobiles et produits web construits avec retenue.",
      body:
        "Nouah Labs aide les fondateurs et les equipes a transformer des idees ciblees en applications, sites web et systemes numeriques prets a lancer.",
      currentBuild: "Projet en cours",
      productSystems: "Systemes produit pour lancements cibles.",
      pillars: ["Concevoir", "Construire", "Lancer"],
      capabilities: ["Strategie", "Interface", "Lancement"],
    },
    featured: {
      eyebrow: "Selection",
      title: "Des produits reels sous l'ombrelle Nouah Labs.",
      viewAll: "Voir tous les projets",
    },
    servicesHome: {
      eyebrow: "Ce que nous faisons",
      title: "Concevoir, construire et preparer des produits au lancement.",
      body:
        "Nous gardons un perimetre pratique, une interface precise et un chemin de construction clair pour passer du concept a la production.",
    },
    whyUs: {
      eyebrow: "Pourquoi Nouah Labs",
      title: "Pour les equipes qui se soucient du produit, pas seulement de la page.",
      reasons: [
        {
          title: "Le produit avant la decoration",
          description:
            "Nous commencons par le flux, l'utilisateur et le chemin de lancement avant de definir l'interface.",
        },
        {
          title: "Moderne sans bruit",
          description:
            "Le langage visuel est soigne, mais l'application reste utile, directe et facile a maintenir.",
        },
        {
          title: "Petite equipe, responsabilite claire",
          description:
            "Vous travaillez avec les personnes qui faconnent le produit, sans couches inutiles de validation.",
        },
        {
          title: "Ingenierie orientee lancement",
          description:
            "Nous construisons avec le deploiement, la performance, le contenu et l'iteration en tete.",
        },
      ],
    },
    process: {
      eyebrow: "Notre methode",
      title: "Un chemin pratique du premier echange au produit en ligne.",
    },
    testimonials: {
      eyebrow: "Temoignages",
      title: "Collaboration claire, produits utiles.",
    },
    cta: {
      eyebrow: "Commencer ici",
      title:
        "Apportez une idee produit ciblee. Nous aiderons a tracer le chemin vers le lancement.",
    },
    workPage: {
      eyebrow: "Portfolio",
      title: "Produits realises par Nouah Labs.",
      body:
        "Explorez les produits que nous concevons et construisons. Chaque element ouvre d'abord une page detail, puis les liens publics apparaissent apres configuration.",
      productLaunch: "Lancement produit",
      overview: "Apercu",
      productFocus: "Priorites produit",
      focusItems: ["Flux CV", "Preparation des candidatures", "UX mobile d'abord"],
      platform: "Plateforme",
      technologies: "Technologies",
      fallbackPlatform: "Produit numerique",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Services pratiques pour applications, sites web et lancements.",
      body:
        "Nous cadrons le produit, concevons l'interface, construisons le systeme et le preparons aux realites du lancement.",
      included: "Inclus",
      readyTitle: "Pret a commencer ?",
      readyBody:
        "Parlez-nous de votre projet et nous reviendrons vers vous sous 24 heures avec un plan.",
    },
    aboutPage: {
      eyebrow: "A propos",
      title: "Un petit studio pour du travail produit cible.",
      paragraphs: [
        "Nouah Labs travaille avec des fondateurs, startups et equipes operationnelles pour concevoir et construire des applications mobiles, sites web et applications web sans perdre la clarte.",
        "Le studio reste volontairement leger : reflexion produit, interface, ingenierie, contenu et lancement avancent ensemble.",
      ],
      philosophyEyebrow: "Notre philosophie",
      philosophyTitle: "Ce que nous defendons",
      values: [
        {
          title: "Concevoir avec intention",
          description:
            "Chaque pixel sert un objectif. Nous dessinons avec clarte et fonction, pas pour decorer.",
        },
        {
          title: "Construire avec qualite",
          description:
            "Code propre, architecture solide et attention au detail pour des produits durables.",
        },
        {
          title: "Livrer vite",
          description:
            "Nous respectons les delais et reduisons les lourdeurs pour produire plus vite.",
        },
        {
          title: "Penser comme un partenaire",
          description:
            "Nous ne faisons pas qu'executer : nous questionnons, clarifions et aidons a construire le bon produit.",
        },
      ],
      audienceEyebrow: "Avec qui nous travaillons",
      audienceTitle: "Pour les equipes qui construisent",
      audienceBody:
        "Nous travaillons mieux avec les personnes qui tiennent a leur produit, qu'il s'agisse d'une premiere idee ou d'une entreprise qui veut se moderniser.",
      talkButton: "Discutons",
      audiences: [
        {
          title: "Startups & fondateurs",
          description:
            "MVP, strategie produit et iterations rapides vers l'adequation marche.",
        },
        {
          title: "PME",
          description:
            "Applications, sites et outils sur mesure pour mieux grandir et fonctionner.",
        },
        {
          title: "Equipes produit",
          description:
            "Renfort design et developpement pour gagner en capacite ou expertise.",
        },
      ],
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Dites-nous ce que vous construisez.",
      body:
        "Partagez le produit, le calendrier et le perimetre. Le formulaire passe par Formspree une fois l'endpoint configure.",
      response: "Nous repondons generalement sous 24 heures les jours ouvres.",
    },
    contactForm: {
      subject: "Nouveau prospect Nouah Labs",
      name: "Nom",
      namePlaceholder: "Votre nom",
      company: "Entreprise",
      companyPlaceholder: "Nom de votre entreprise",
      projectType: "Type de projet",
      selectType: "Choisir un type",
      budget: "Budget",
      selectBudget: "Choisir une fourchette",
      message: "Description du projet",
      messagePlaceholder:
        "Dites-nous ce que vous construisez, pour qui, et ce que vous voulez lancer.",
      sending: "Envoi...",
      send: "Envoyer",
      setupError:
        "Formspree n'est pas encore configure. Ajoutez NEXT_PUBLIC_FORMSPREE_FORM_ID ou NEXT_PUBLIC_FORMSPREE_ENDPOINT.",
      rejectedError: "Formspree a refuse l'envoi.",
      success: "Merci. Votre message a ete envoye et nous repondrons bientot.",
      failure:
        "Le message n'a pas pu etre envoye. Ecrivez directement a hello@nouahlabs.com.",
      projectTypes: [
        "Application mobile",
        "Site web",
        "Application web",
        "MVP / developpement produit",
        "Design uniquement",
        "Autre",
      ],
      budgets: [
        "Moins de 5 000 $",
        "5 000 $ - 15 000 $",
        "15 000 $ - 50 000 $",
        "50 000 $+",
        "Pas encore defini",
      ],
    },
    notFound: {
      code: "404",
      title: "Page introuvable",
      body: "La page recherchee n'existe pas ou a ete deplacee.",
      action: "Accueil",
    },
    studio: {
      eyebrow: "Configuration CMS",
      title: "Sanity est pret a etre connecte.",
      body:
        "Ajoutez l'identifiant du projet Sanity et le dataset aux variables d'environnement, puis redeployez ou redemarrez le serveur.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
