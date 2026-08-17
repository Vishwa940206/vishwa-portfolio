import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative bg-ink-950 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Featured Work"
          title="Real problems, real platforms, real delivery."
          description="A selection of the platforms, plugins, and pages I've architected, built, or rescued — spanning EdTech, e-commerce, and internal tools."
        />

        <div className="mt-16 space-y-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} featured />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={featured.length + i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
