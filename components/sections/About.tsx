import { GraduationCap, Award, Sparkles, Bot } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { aboutParagraphs, certifications, education, focusAreas } from "@/data/about";

export function About() {
  return (
    <section id="about" className="relative bg-ink-950 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading eyebrow="About" title="Builder first. Leader by necessity." />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p
                  className={
                    i === 0
                      ? "text-pretty text-xl font-medium leading-relaxed text-foreground sm:text-2xl"
                      : "mt-6 text-pretty text-base leading-relaxed text-ink-400 sm:text-lg"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-bronze-500/25 bg-bronze-500/[0.06] px-4 py-1.5 text-xs font-medium text-bronze-200">
                  <Sparkles size={13} /> Founder, Lumora Labs
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-bronze-500/25 bg-bronze-500/[0.06] px-4 py-1.5 text-xs font-medium text-bronze-200">
                  <Bot size={13} /> Building with AI — MortgageGPT
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-700 px-4 py-1.5 text-xs font-medium text-ink-400">
                  Formerly Development Manager, Hype Insight Global
                </span>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="glass-panel rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-bronze-300">
                    <GraduationCap size={16} />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Education</span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">{education.degree}</p>
                  <p className="mt-1 text-sm text-ink-400">{education.institution}</p>
                  <p className="mt-1 text-xs text-ink-500">{education.period}</p>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="glass-panel rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-bronze-300">
                    <Award size={16} />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Certifications</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {certifications.map((c) => (
                      <li key={c.name} className="text-sm text-ink-400">
                        <span className="text-foreground">{c.name}</span>
                        {c.issuer && <span className="block text-xs text-ink-500">{c.issuer}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {focusAreas.map((area) => (
              <StaggerItem key={area.label}>
                <div className="group relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/60 p-5 transition-colors hover:border-bronze-500/30">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-bronze-600/0 blur-2xl transition-colors group-hover:bg-bronze-600/20" />
                  <p className="relative text-sm font-semibold text-foreground">{area.label}</p>
                  <p className="relative mt-1.5 text-sm text-ink-400">{area.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
