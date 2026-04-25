import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "mobile-app",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile apps that users love to use.",
    longDescription:
      "We design and develop mobile applications for iOS and Android that combine beautiful interfaces with robust, scalable architecture. Whether you need a consumer app, an internal tool, or a companion to your existing product, we deliver experiences that feel natural and perform flawlessly.",
    icon: "smartphone",
    features: [
      "iOS and Android development",
      "Cross-platform with React Native or Flutter",
      "Intuitive user interfaces",
      "Offline-first architecture",
      "Push notifications and real-time features",
      "App Store submission and optimization",
    ],
  },
  {
    id: "website",
    title: "Website Design & Development",
    shortDescription:
      "Premium websites that make a strong first impression and drive results.",
    longDescription:
      "Your website is often the first thing people see. We build fast, beautiful, and conversion-focused websites that tell your story and turn visitors into customers. Every site is custom-designed, responsive, and built on modern technology for speed and reliability.",
    icon: "globe",
    features: [
      "Custom design from scratch",
      "Responsive across all devices",
      "SEO-optimized for discoverability",
      "Fast loading and high performance",
      "Content management integration",
      "Analytics and conversion tracking",
    ],
  },
  {
    id: "web-app",
    title: "Web Application Development",
    shortDescription:
      "Powerful web apps that handle complex workflows with elegance.",
    longDescription:
      "From SaaS platforms to internal tools, we build web applications that scale with your business. We focus on clean architecture, intuitive interfaces, and reliable performance so your team and your users can focus on what matters.",
    icon: "layout",
    features: [
      "Full-stack development",
      "Scalable cloud architecture",
      "Real-time data and collaboration",
      "Role-based access control",
      "API design and integration",
      "Automated testing and CI/CD",
    ],
  },
  {
    id: "mvp",
    title: "MVP & Product Development",
    shortDescription:
      "From idea to launch — fast. We help you validate and ship your product.",
    longDescription:
      "Have an idea but need to move fast? We help startups and founders turn concepts into shipped products. Our MVP process is designed to get your product into users' hands quickly, gather feedback, and iterate toward product-market fit without wasting time or budget.",
    icon: "rocket",
    features: [
      "Product strategy and planning",
      "Rapid prototyping",
      "Lean MVP development",
      "User testing and validation",
      "Iterative improvement",
      "Launch strategy and support",
    ],
  },
  {
    id: "design",
    title: "Product Design",
    shortDescription:
      "Thoughtful design that balances aesthetics with usability.",
    longDescription:
      "Great products start with great design. Our design process goes beyond making things look good — we focus on understanding user needs, simplifying complex workflows, and creating interfaces that feel effortless. Every design decision is intentional and backed by clear thinking.",
    icon: "palette",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Design systems and components",
      "Usability testing",
      "Interaction and motion design",
    ],
  },
  {
    id: "dashboard",
    title: "Admin Dashboards",
    shortDescription:
      "Clean, functional dashboards that give you control over your data.",
    longDescription:
      "We build admin dashboards and internal tools that make managing your business easier. From analytics and reporting to user management and content operations, our dashboards are designed to be powerful without being overwhelming.",
    icon: "bar-chart",
    features: [
      "Data visualization and reporting",
      "User and role management",
      "Content management",
      "Activity logging and audit trails",
      "Customizable widgets and views",
      "Export and integration capabilities",
    ],
  },
];
