import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the business goals, the users, the constraints, and the real problem underneath the request — before any design or code.",
    points: [
      "Stakeholder and requirements interviews",
      "Technical and business constraint mapping",
      "Success metrics defined up front",
    ],
  },
  {
    step: "02",
    title: "Design",
    description:
      "Turn requirements into an architecture, a UX flow, and a technical approach that will still hold up after six months of real usage.",
    points: [
      "System architecture and data modelling",
      "UX flows and interface design",
      "Technology and integration selection",
    ],
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop, integrate, and test in short, reviewable cycles — with performance and security treated as requirements, not cleanup work.",
    points: [
      "Iterative development with code review",
      "Third-party and API integrations",
      "Performance profiling and optimization",
    ],
  },
  {
    step: "04",
    title: "Launch & Improve",
    description:
      "Deploy with confidence, monitor what actually happens in production, and keep improving the product after go-live.",
    points: [
      "Staged deployment and monitoring",
      "Security review and hardening",
      "Ongoing maintenance and iteration",
    ],
  },
];
