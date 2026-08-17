import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/config";

export function Stats() {
  return (
    <section className="relative border-y border-ink-800 bg-ink-900/30 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:px-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center lg:text-left">
            <AnimatedCounter
              value={stat.value}
              className="block text-4xl font-semibold tracking-tight text-gradient-bronze sm:text-5xl"
            />
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-ink-400 sm:text-sm">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
