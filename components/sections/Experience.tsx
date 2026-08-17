"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience, priorCareer } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative bg-ink-950 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Career Path"
          title="Seven years, one steady climb."
          description="From intern to Development Manager — each role building the technical and leadership range for the next."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-bronze-500/60 via-ink-700 to-transparent sm:left-[19px]"
          />

          <ol className="space-y-10">
            {experience.map((role, i) => (
              <motion.li
                key={role.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 sm:pl-14"
              >
                <span
                  className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border sm:h-10 sm:w-10 ${
                    role.current
                      ? "border-bronze-400 bg-bronze-500/15"
                      : "border-ink-700 bg-ink-900"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${role.current ? "bg-bronze-300" : "bg-ink-500"}`}
                  />
                  {role.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bronze-400/30" />
                  )}
                </span>

                <div className="rounded-2xl border border-ink-700 bg-ink-900/40 p-5 transition-colors hover:border-bronze-500/20 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">{role.role}</h3>
                    {role.current && (
                      <span className="rounded-full border border-bronze-500/30 bg-bronze-500/[0.06] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-bronze-300">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-medium text-bronze-200">
                    {role.company}
                    {role.location ? ` — ${role.location}` : ""}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-ink-500">{role.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400">{role.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {role.achievements.map((a) => (
                      <li key={a} className="flex gap-2.5 text-sm text-ink-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bronze-500/70" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink-700 px-2.5 py-1 text-[11px] text-ink-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}

            <motion.li
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10 sm:pl-14"
            >
              <span className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-ink-800 bg-ink-950 sm:h-10 sm:w-10">
                <span className="h-2 w-2 rounded-full bg-ink-600" />
              </span>
              <div className="rounded-2xl border border-dashed border-ink-800 p-5 sm:p-6">
                <h3 className="text-base font-medium text-ink-400">{priorCareer.role}</h3>
                <p className="mt-1 text-sm text-ink-500">{priorCareer.company}</p>
                <p className="mt-0.5 font-mono text-xs text-ink-600">{priorCareer.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{priorCareer.summary}</p>
              </div>
            </motion.li>
          </ol>
        </div>
      </div>
    </section>
  );
}
