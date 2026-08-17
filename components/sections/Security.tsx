"use client";

import { motion } from "framer-motion";
import {
  ShieldAlert,
  KeyRound,
  Lock,
  ServerCog,
  ShieldCheck,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { securityPractices } from "@/data/security";

const iconMap: Record<string, LucideIcon> = {
  ShieldAlert,
  KeyRound,
  Lock,
  ServerCog,
  ShieldCheck,
  GitBranch,
};

export function Security() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 sm:py-36">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      <motion.div
        aria-hidden
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-bronze-500/[0.05] to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            eyebrow="Security"
            title="Built With Security in Mind."
            description="VAPT findings translated into verified fixes, authentication that holds, and deployments that don't leave the door open."
            className="max-w-xl"
          />
          <div className="flex items-center gap-3 rounded-2xl border border-bronze-500/20 bg-bronze-500/[0.05] px-5 py-4 font-mono text-xs text-bronze-200">
            <ShieldCheck size={18} className="text-bronze-400" />
            <span>Security reviewed &amp; hardened before every launch</span>
          </div>
        </div>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityPractices.map((practice) => {
            const Icon = iconMap[practice.icon] ?? ShieldCheck;
            return (
              <StaggerItem key={practice.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/50 p-5">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-bronze-500/20 bg-bronze-500/[0.06] text-bronze-300">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{practice.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400">{practice.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
