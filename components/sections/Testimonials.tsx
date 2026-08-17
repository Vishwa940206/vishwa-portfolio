"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused]);

  const current = testimonials[index];

  return (
    <section className="relative bg-ink-950 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading eyebrow="Testimonials" title="What it's like to work together." align="center" />

        <div
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="glass-panel relative min-h-[280px] rounded-3xl p-8 sm:min-h-[240px] sm:p-12">
            <Quote className="mx-auto text-bronze-500/40" size={32} />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <p className="mt-6 text-pretty text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-bronze-200">{current.name}</p>
                  <p className="text-xs text-ink-500">
                    {current.position} · {current.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition-colors hover:border-bronze-500/40 hover:text-bronze-200"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name + i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-bronze-400" : "w-1.5 bg-ink-700"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition-colors hover:border-bronze-500/40 hover:text-bronze-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
