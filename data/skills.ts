import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces that feel fast, considered, and easy to use.",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "AngularJS",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server logic and APIs built to hold up under real usage.",
    items: ["PHP", "Laravel", "Node.js", "Python", "FastAPI", "REST APIs"],
  },
  {
    id: "cms",
    title: "CMS & E-commerce",
    description: "Content and commerce platforms shipped for real clients.",
    items: ["WordPress", "Elementor", "WooCommerce", "Joomla", "Wix", "Webflow"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Getting code from a repo to production, reliably.",
    items: ["AWS", "Vercel", "Hostinger", "Git", "GitHub", "CI/CD"],
  },
  {
    id: "integrations",
    title: "Integrations & AI",
    description: "Connecting products to the tools that run a business — including AI.",
    items: [
      "OpenAI & LLM APIs",
      "AI Chatbots",
      "Prompt Engineering",
      "Payment Gateways",
      "WhatsApp Business API",
      "Third-Party APIs",
      "CRM Integrations",
    ],
  },
  {
    id: "security",
    title: "Security",
    description: "Shipping software that's built to withstand real-world abuse.",
    items: [
      "VAPT Remediation",
      "Website Hardening",
      "Authentication",
      "API Security",
      "Secure Deployment",
    ],
  },
];

export const languageProficiency = [
  { name: "C", type: "language" },
  { name: "C++", type: "language" },
  { name: "C#", type: "language" },
  { name: "Java", type: "language" },
];
