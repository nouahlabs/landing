import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "hirelify",
    title: "Hirelify",
    subtitle: "A focused mobile app for stronger job applications.",
    description:
      "Hirelify helps job seekers shape clearer CVs, organize application materials, and move from preparation to submission with less friction.",
    category: "Mobile App",
    year: "2026",
    platform: "iOS and Android",
    status: "In development",
    technologies: ["Expo", "React Native", "TypeScript"],
    featured: true,
    sortOrder: 1,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
