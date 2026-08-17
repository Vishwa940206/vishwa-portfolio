import {
  Users,
  GraduationCap,
  CheckCircle2,
  Network,
  CalendarClock,
  MessagesSquare,
  Wrench,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { leadershipPillars } from "@/data/leadership";

const iconMap: Record<string, LucideIcon> = {
  Users,
  GraduationCap,
  CheckCircle2,
  Network,
  CalendarClock,
  MessagesSquare,
  Wrench,
  Rocket,
  ShieldCheck,
};

export function Leadership() {
  return (
    <section className="relative bg-ink-900/30 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Technical Leadership"
              title="Builder and leader — not one instead of the other."
            />
            <p className="mt-6 text-pretty text-base leading-relaxed text-ink-400 sm:text-lg">
              As a Development Manager, my job isn&rsquo;t just to write code — it&rsquo;s to make
              sure the right code gets written, by the right people, on time. That means staying
              close enough to the stack to make real architecture calls, while owning the planning
              and communication that keeps a team moving in the same direction.
            </p>
          </div>

          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {leadershipPillars.map((pillar) => {
              const Icon = iconMap[pillar.icon] ?? Users;
              return (
                <StaggerItem key={pillar.title}>
                  <div className="group flex h-full gap-4 rounded-2xl border border-ink-700 bg-ink-950/50 p-5 transition-colors hover:border-bronze-500/25">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-bronze-500/20 bg-bronze-500/[0.06] text-bronze-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={17} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{pillar.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-400">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
