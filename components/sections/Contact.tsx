import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { siteConfig, socialLinks } from "@/data/config";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

const iconMap = { Github: GithubIcon, Linkedin: LinkedinIcon, Mail, MessageCircle };

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-28 sm:py-36">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze-600/20 blur-[160px]"
      />
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-bronze-400">
            <span className="h-px w-6 bg-bronze-500/60" aria-hidden />
            Get In Touch
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Have an idea worth building?
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-400 sm:text-lg">
            Let&rsquo;s turn your idea into a reliable, scalable digital product.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="#contact-form">
              Start a Conversation <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href={`mailto:${siteConfig.email}`} variant="secondary" external>
              Email Me
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div id="contact-form" className="mx-auto mt-16 max-w-md scroll-mt-32">
            <div className="glass-panel rounded-3xl p-8 text-left">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze-400">
                Direct Contact
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block text-lg font-medium text-foreground transition-colors hover:text-bronze-200"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-ink-400 transition-colors hover:text-bronze-200"
                >
                  {siteConfig.phone} · WhatsApp
                </a>
                <p className="text-sm text-ink-500">{siteConfig.location}</p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-ink-800 pt-6">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition-all hover:border-bronze-500/40 hover:text-bronze-300"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
