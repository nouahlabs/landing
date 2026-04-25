import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "finflow",
    title: "FinFlow",
    subtitle: "Smart financial tracking for modern businesses",
    description:
      "A mobile banking app that helps small businesses track expenses, manage invoices, and forecast cash flow with intelligent automation.",
    longDescription:
      "FinFlow was built for small business owners who were tired of juggling spreadsheets and multiple banking apps. We designed a unified financial dashboard that brings together expense tracking, invoicing, and cash flow forecasting into one clean, intuitive interface.\n\nThe app uses machine learning to categorize transactions automatically and predict upcoming expenses, giving business owners a clear picture of their financial health at any moment.",
    client: "FinFlow Inc.",
    category: "Mobile App",
    year: "2025",
    thumbnail: "/images/projects/finflow-thumb.jpg",
    images: [
      "/images/projects/finflow-1.jpg",
      "/images/projects/finflow-2.jpg",
      "/images/projects/finflow-3.jpg",
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    features: [
      "Automated expense categorization",
      "Real-time cash flow forecasting",
      "Invoice generation and tracking",
      "Multi-currency support",
      "Bank-grade security",
    ],
    problem:
      "Small business owners were spending hours each week managing finances across multiple tools, leading to errors and missed opportunities.",
    solution:
      "We built an all-in-one financial management app that automates the tedious work and presents insights in a clear, actionable format.",
    outcome:
      "Users report saving an average of 6 hours per week on financial management, with a 40% reduction in late invoice payments.",
    liveUrl: "https://finflow.app",
    featured: true,
    testimonial: {
      quote:
        "Nouah Labs delivered a product that exceeded our expectations. The design is clean, the performance is excellent, and our users love it.",
      author: "Sarah Chen",
      role: "CEO, FinFlow Inc.",
    },
  },
  {
    slug: "buildspace",
    title: "BuildSpace",
    subtitle: "Where construction meets technology",
    description:
      "A project management platform for construction teams that streamlines scheduling, resource allocation, and real-time site communication.",
    longDescription:
      "BuildSpace addresses the chaotic nature of construction project management. We replaced scattered WhatsApp groups, email chains, and paper schedules with a single, powerful platform.\n\nThe app provides real-time progress tracking, automated scheduling conflicts detection, and instant communication between site teams and project managers.",
    client: "BuildSpace Co.",
    category: "Web App",
    year: "2025",
    thumbnail: "/images/projects/buildspace-thumb.jpg",
    images: [
      "/images/projects/buildspace-1.jpg",
      "/images/projects/buildspace-2.jpg",
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: [
      "Real-time project tracking",
      "Automated scheduling",
      "Resource allocation dashboard",
      "Site photo documentation",
      "Team communication hub",
    ],
    problem:
      "Construction teams were losing time and money due to miscommunication and inefficient project tracking across disconnected tools.",
    solution:
      "We created a centralized platform that connects everyone involved in a construction project, from site workers to project managers to clients.",
    outcome:
      "Project delivery times improved by 25%, and communication-related delays dropped by 60% in the first quarter of use.",
    liveUrl: "https://buildspace.io",
    featured: true,
  },
  {
    slug: "mealprep",
    title: "MealPrep",
    subtitle: "Healthy eating made effortless",
    description:
      "A meal planning and grocery delivery app that uses AI to create personalized weekly meal plans based on dietary preferences and health goals.",
    longDescription:
      "MealPrep takes the guesswork out of healthy eating. Users set their dietary preferences, health goals, and budget, and the app generates a complete weekly meal plan with recipes, grocery lists, and optional delivery integration.\n\nThe AI learns from user feedback over time, continuously improving its recommendations to match individual tastes and nutritional needs.",
    client: "MealPrep Health",
    category: "Mobile App",
    year: "2024",
    thumbnail: "/images/projects/mealprep-thumb.jpg",
    images: [
      "/images/projects/mealprep-1.jpg",
      "/images/projects/mealprep-2.jpg",
    ],
    technologies: ["Flutter", "Python", "TensorFlow", "Firebase"],
    features: [
      "AI-powered meal recommendations",
      "Automated grocery lists",
      "Dietary restriction support",
      "Calorie and macro tracking",
      "Grocery delivery integration",
    ],
    problem:
      "People want to eat healthier but find meal planning time-consuming and overwhelming, especially with specific dietary requirements.",
    solution:
      "We built an intelligent meal planning assistant that handles the complexity of nutrition planning while keeping the user experience simple and enjoyable.",
    outcome:
      "The app reached 50,000 active users within 3 months of launch, with an average weekly engagement rate of 78%.",
    appStoreUrl: "https://apps.apple.com/mealprep",
    playStoreUrl: "https://play.google.com/mealprep",
    featured: true,
  },
  {
    slug: "nova-ecommerce",
    title: "Nova Commerce",
    subtitle: "Premium e-commerce, reimagined",
    description:
      "A high-performance e-commerce platform built for a luxury fashion brand, featuring immersive product showcases and a seamless checkout experience.",
    longDescription:
      "Nova Commerce was designed for a luxury fashion brand that needed an online presence matching the quality of their physical stores. Every pixel was crafted to convey premium quality.\n\nThe platform features high-resolution product imagery, smooth transitions between collections, and a checkout flow optimized for conversion without feeling pushy.",
    client: "Nova Fashion",
    category: "Website",
    year: "2024",
    thumbnail: "/images/projects/nova-thumb.jpg",
    images: [
      "/images/projects/nova-1.jpg",
      "/images/projects/nova-2.jpg",
      "/images/projects/nova-3.jpg",
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Vercel"],
    features: [
      "Immersive product showcases",
      "High-performance image loading",
      "Seamless checkout flow",
      "Collection-based navigation",
      "Responsive across all devices",
    ],
    problem:
      "The brand's existing e-commerce site was slow, visually dated, and had a checkout abandonment rate of over 70%.",
    solution:
      "We rebuilt the entire storefront with a focus on speed, visual quality, and a frictionless checkout experience that matches the brand's luxury positioning.",
    outcome:
      "Checkout abandonment dropped to 35%, average session duration increased by 2.5x, and online sales grew 120% in the first quarter.",
    liveUrl: "https://novafashion.com",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
