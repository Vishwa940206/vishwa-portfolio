import type { SecurityPractice } from "@/types";

export const securityPractices: SecurityPractice[] = [
  {
    title: "VAPT Remediation",
    description:
      "Reading vulnerability assessment and penetration testing findings and turning them into concrete, verified fixes — not just checked boxes.",
    icon: "ShieldAlert",
  },
  {
    title: "Secure Authentication",
    description:
      "Session handling, access control, and credential storage built to hold up against real attack attempts, not just pass a demo.",
    icon: "KeyRound",
  },
  {
    title: "API Security",
    description:
      "Rate limiting, input validation, and namespace-explicit endpoints so third-party and internal APIs aren't the weak point.",
    icon: "Lock",
  },
  {
    title: "Server Configuration",
    description:
      "Hardened server and deployment configuration — from headers to permissions — so the infrastructure isn't left on defaults.",
    icon: "ServerCog",
  },
  {
    title: "WordPress Security",
    description:
      "Plugin auditing, compatibility testing, and hardening for the platform behind a large share of the world's websites — and its attack surface.",
    icon: "ShieldCheck",
  },
  {
    title: "Secure Deployment",
    description:
      "Staged rollouts, environment separation, and monitoring that catches problems before users do.",
    icon: "GitBranch",
  },
];
