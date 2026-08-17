import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { navLinks, siteConfig, socialLinks } from "@/data/config";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

const iconMap = { Github: GithubIcon, Linkedin: LinkedinIcon, Mail, MessageCircle };

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="#home" className="text-lg font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm text-ink-400">{siteConfig.role}</p>
            <div className="mt-6 flex items-center gap-3">
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

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 transition-colors hover:text-bronze-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Designed &amp; built by {siteConfig.shortName} — Next.js, Tailwind CSS, Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
