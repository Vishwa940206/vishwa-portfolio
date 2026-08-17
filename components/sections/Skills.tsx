"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  ShoppingBag,
  Cloud,
  Plug,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  cms: ShoppingBag,
  cloud: Cloud,
  integrations: Plug,
  security: ShieldCheck,
};

export function Skills() {
  return (
    <section id="skills" className="relative bg-ink-950 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="A full-stack toolkit, sharpened by real delivery."
          description="Not a percentage bar in sight — every category below has shipped in production, on real client work."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.id] ?? Code2;
            return (
              <StaggerItem key={category.id}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-ink-700 bg-gradient-to-b from-ink-900/80 to-ink-900/20 p-6"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-bronze-600/0 blur-3xl transition-all duration-500 group-hover:bg-bronze-600/25"
                  />

                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-bronze-500/25 bg-bronze-500/[0.07] text-bronze-300">
                    <Icon size={19} />
                  </div>

                  <h3 className="relative mt-5 text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-ink-400">
                    {category.description}
                  </p>

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-ink-700 bg-ink-950/60 px-3 py-1 text-xs text-ink-400 transition-colors group-hover:border-bronze-500/20 group-hover:text-bronze-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
