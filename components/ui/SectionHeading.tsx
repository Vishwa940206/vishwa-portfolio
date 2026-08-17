import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto", "max-w-2xl", className)}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-bronze-400">
          <span className="h-px w-6 bg-bronze-500/60" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
