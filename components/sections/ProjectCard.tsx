"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { ProjectCover } from "./ProjectCover";
import { cn } from "@/lib/utils";

const statusStyles: Record<Project["status"], string> = {
  Live: "text-bronze-300 border-bronze-500/30 bg-bronze-500/[0.06]",
  Delivered: "text-ink-300 border-ink-600 bg-ink-800/60",
  "Architecture & Planning": "text-ink-400 border-ink-700 bg-ink-900/60",
  "In Progress": "text-bronze-200 border-bronze-400/40 bg-bronze-500/[0.08]",
};

export function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const reverse = featured && index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group rounded-3xl border border-ink-700 bg-ink-900/40 p-4 transition-colors hover:border-bronze-500/25 sm:p-5",
        featured && "lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 lg:p-6"
      )}
    >
      <div className={cn(featured && reverse && "lg:order-2")}>
        <motion.div whileHover={{ scale: 1.015 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
          <ProjectCover project={project} index={index} />
        </motion.div>
      </div>

      <div className={cn("flex flex-col", featured ? "mt-6 lg:mt-0" : "mt-5")}>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em]",
              statusStyles[project.status]
            )}
          >
            {project.status === "In Progress" && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bronze-300 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-bronze-300" />
              </span>
            )}
            {project.status}
          </span>
          <span className="text-xs text-ink-500">{project.industry}</span>
        </div>

        <h3 className={cn("mt-3 font-semibold tracking-tight text-foreground", featured ? "text-2xl sm:text-3xl" : "text-xl")}>
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-ink-400 sm:text-[15px]">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink-700 px-2.5 py-1 text-[11px] text-ink-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-bronze-300 transition-colors hover:text-bronze-200"
        >
          {open ? "Hide case study" : "View case study"}
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={15} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4 border-t border-ink-800 pt-4">
                <p className="text-sm leading-relaxed text-ink-400">{project.description}</p>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze-400">
                    Key Functionality
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-ink-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bronze-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-ink-500">Role: {project.role}</p>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-bronze-300 hover:text-bronze-200"
                  >
                    Visit live project <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
