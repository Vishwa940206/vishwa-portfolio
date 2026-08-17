export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  summary: string;
  description: string;
  role: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  year: string;
  featured?: boolean;
  status: "Live" | "Delivered" | "Architecture & Planning";
  gradient: [string, string];
};

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  technologies: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  points: string[];
};

export type LeadershipPillar = {
  title: string;
  description: string;
  icon: string;
};

export type SecurityPractice = {
  title: string;
  description: string;
  icon: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  position: string;
  company: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type NavLink = {
  label: string;
  href: string;
};
