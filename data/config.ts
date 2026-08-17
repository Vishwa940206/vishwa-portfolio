import type { NavLink, SocialLink, StatItem } from "@/types";

export const siteConfig = {
  name: "Vishwa Ranthilina",
  shortName: "Vishwa",
  role: "Development Manager · Full-Stack Developer",
  tagline: "Building Digital Experiences That Actually Work.",
  description:
    "Development Manager & Full-Stack Web Developer focused on building scalable web applications, e-commerce platforms, integrations, and secure digital experiences.",
  url: "https://vishwaranthilina.com",
  email: "ranthilinavishwa@gmail.com",
  phone: "+94 77 602 2098",
  whatsapp: "https://wa.me/94776022098",
  location: "Peliyagoda, Sri Lanka",
  availability: "Available for selected projects",
  keywords: [
    "Vishwa Ranthilina",
    "Development Manager",
    "Full Stack Developer",
    "Web Developer",
    "Laravel Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Web Application Development",
    "Sri Lanka Software Engineer",
  ],
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Vishwa940206", icon: "Github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vishwa-jayathilaka-43b03a143/",
    icon: "Linkedin",
  },
  { label: "Email", href: `mailto:${"ranthilinavishwa@gmail.com"}`, icon: "Mail" },
  { label: "WhatsApp", href: "https://wa.me/94776022098", icon: "MessageCircle" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Edit these totals as your real numbers change.
export const stats: StatItem[] = [
  { value: "20+", label: "Projects Delivered" },
  { value: "15+", label: "Websites & Applications" },
  { value: "10+", label: "Integrations Shipped" },
  { value: "7+", label: "Years in Development" },
];
