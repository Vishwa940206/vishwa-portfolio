import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "inspire-college-management-platform",
    title: "Inspire — College Management Platform",
    category: "Education Platform",
    industry: "EdTech",
    summary:
      "Full technical architecture for a college management platform — RBAC and AI chatbot integration scoped in before a line of feature code was written.",
    description:
      "Led architecture planning for a full college management platform, producing a complete technical architecture document. Scoped role-based access control and AI chatbot integration into the platform design from the outset, so the build phase inherits a system that's secure and extensible by default.",
    role: "Lead Architect",
    technologies: ["FastAPI", "Next.js 14", "RBAC", "System Architecture"],
    highlights: [
      "Complete technical architecture documentation for the full platform",
      "Role-based access control design across multiple user types",
      "AI chatbot integration scoped into the platform from the ground up",
    ],
    status: "Architecture & Planning",
    year: "2024",
    featured: true,
    gradient: ["#B8763A", "#241609"],
  },
  {
    slug: "monash-future-series",
    title: "The Monash Future Series",
    category: "Enterprise Website",
    industry: "Education · Recruitment Marketing",
    summary:
      "A self-contained recruitment landing page for Monash University pathway events across Australia and Malaysia, wired into live WordPress registration.",
    description:
      "Built a self-contained promotional landing page for Universal College Lanka's Monash University pathway recruitment events in Australia and Malaysia, integrated into WordPress with live registration forms. Delivered a tabbed Monash College program listing plus supporting brand-system components as part of ongoing UCL web development.",
    role: "Full-Stack Developer",
    technologies: ["WordPress", "JavaScript", "CSS3", "Form Integrations"],
    highlights: [
      "Live registration forms wired directly into WordPress",
      "Tabbed program listing spanning multiple Monash College pathways",
      "Reusable brand-system components: staff message cards, thank-you page, login overlay",
    ],
    status: "Delivered",
    year: "2023",
    featured: true,
    gradient: ["#DCA467", "#3D2513"],
  },
  {
    slug: "lumora-labs",
    title: "Lumora Labs — Studio Website",
    category: "Enterprise Website",
    industry: "Technology · Own Venture",
    summary:
      "A dark, terminal-aesthetic site for the studio I co-founded — canvas circuit animation, mouse-reactive parallax, and full technical SEO.",
    description:
      "Designed and built a dark, terminal-aesthetic single-page site for Lumora Labs, the studio I co-founded, featuring a canvas-based circuit animation, mouse-reactive parallax, and a technology marquee. Shipped with full SEO metadata and structured data for search visibility.",
    role: "Co-Founder & Developer",
    technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API", "SEO"],
    highlights: [
      "Custom canvas circuit-board animation engine built from scratch",
      "Mouse-reactive parallax with no UI framework overhead",
      "Full structured data and SEO metadata implementation",
    ],
    status: "Live",
    year: "2024",
    featured: true,
    gradient: ["#CC8A4A", "#131110"],
  },
  {
    slug: "ai-wp-optimizer",
    title: "AI WP Optimizer",
    category: "Custom Web Application",
    industry: "SaaS · Developer Tools",
    summary:
      "Diagnosed and fixed blocking HTTP requests and a broken REST namespace inside a custom WordPress optimization plugin.",
    description:
      "Diagnosed and fixed blocking loopback HTTP requests and a broken REST API namespace inside a custom WordPress optimization plugin. Resolved the issues with transient caching, namespace-explicit API paths, and cache-busting version control — turning an unreliable plugin into a stable one.",
    role: "Plugin Engineer",
    technologies: ["PHP", "JavaScript", "WordPress REST API", "Transient Caching"],
    highlights: [
      "Fixed blocking loopback HTTP requests slowing every page load",
      "Repaired a broken REST API namespace",
      "Added cache-busting version control to prevent stale asset delivery",
    ],
    status: "Delivered",
    year: "2023",
    gradient: ["#9C5F2E", "#1C1917"],
  },
  {
    slug: "fxe-trading-academy",
    title: "FXE Trading Academy — Sales Pages",
    category: "E-commerce Platform",
    industry: "FinTech Education",
    summary:
      "Multiple high-conversion course sales pages built from screenshots and copy docs, with offer logic, countdowns, and coupon handling.",
    description:
      "Built and redesigned multiple course sales pages — Day Trading Masterclass, Ultimate Trading Masterclass, Market Masters Club — from screenshots and copy docs into responsive, on-brand HTML builds. Handled offer logic, countdown timers, coupon codes, and rapid layout iteration based on direct client feedback.",
    role: "Frontend Developer",
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"],
    highlights: [
      "Three full sales pages taken from static designs to responsive HTML",
      "Custom offer logic with countdown timers and coupon codes",
      "Rapid iteration cycles driven by direct client feedback",
    ],
    status: "Live",
    year: "2022",
    gradient: ["#E9C393", "#5A371C"],
  },
  {
    slug: "thinkuni",
    title: "ThinkUni — University Management Platform",
    category: "LMS Platform",
    industry: "EdTech",
    summary:
      "Architecture for a unified hub consolidating a CMS, WhatsApp chatbot backend, and LMS with RBAC across five user roles.",
    description:
      "Explored and defined the architecture for a PHP-based university management platform consolidating a CMS, a WhatsApp chatbot backend, and an LMS into a single hub — with role-based access control spanning five distinct user roles.",
    role: "Solutions Architect",
    technologies: ["PHP", "RBAC", "WhatsApp Business API", "System Design"],
    highlights: [
      "Unified architecture across CMS, LMS, and chatbot systems",
      "RBAC design spanning five distinct user roles",
      "WhatsApp chatbot backend scoped directly into the platform",
    ],
    status: "Architecture & Planning",
    year: "2024",
    gradient: ["#B87333", "#241609"],
  },
];
