"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";
import {
  GraduationCap,
  Globe2,
  Sparkles,
  Wrench,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

const categoryIcon: Record<string, LucideIcon> = {
  "Education Platform": GraduationCap,
  "Enterprise Website": Globe2,
  "Custom Web Application": Wrench,
  "E-commerce Platform": ShoppingCart,
  "LMS Platform": GraduationCap,
};

export function ProjectCover({ project, index }: { project: Project; index: number }) {
  const Icon = categoryIcon[project.category] ?? Sparkles;
  const [from, to] = project.gradient;

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink-700 sm:aspect-[16/11]"
      style={{
        background: `linear-gradient(135deg, ${from}33, ${to})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-8 -top-8 h-40 w-40 rounded-full blur-3xl"
        style={{ background: `${from}55` }}
      />

      <span
        className="absolute -bottom-6 -left-2 select-none font-mono text-[7rem] font-bold leading-none opacity-[0.14] sm:text-[9rem]"
        style={{ color: from }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/20 text-white backdrop-blur-sm"
      >
        <Icon size={18} />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm">
          {project.category}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
          {project.year}
        </span>
      </div>
    </div>
  );
}
