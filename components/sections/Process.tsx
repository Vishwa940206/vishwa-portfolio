import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section className="relative bg-ink-950 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="How I Work"
          title="A repeatable process, not a lucky guess."
          description="Every project — client or product — moves through the same four stages, so quality doesn't depend on how busy the week is."
        />

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-ink-700 to-transparent lg:block"
          />
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div className="group relative h-full rounded-2xl border border-ink-700 bg-ink-900/40 p-6 transition-colors hover:border-bronze-500/25">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-semibold text-bronze-500/40 transition-colors group-hover:text-bronze-400">
                    {step.step}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-bronze-500/50 transition-transform duration-300 group-hover:scale-150" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{step.description}</p>
                <ul className="mt-4 space-y-1.5 border-t border-ink-800 pt-4">
                  {step.points.map((point) => (
                    <li key={point} className="text-xs text-ink-500">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
