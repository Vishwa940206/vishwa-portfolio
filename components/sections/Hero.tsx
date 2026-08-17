"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/config";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticleField } from "@/components/ui/ParticleField";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

const iconMap = { Github: GithubIcon, Linkedin: LinkedinIcon, Mail };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950 pt-32 pb-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_65%_55%_at_50%_20%,black,transparent)]" />
      <div className="absolute inset-0">
        <ParticleField className="h-full w-full opacity-70" />
      </div>
      <div
        aria-hidden
        className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-bronze-600/25 blur-[160px]"
      />
      <div
        aria-hidden
        className="absolute bottom-[-15%] right-[-10%] h-[420px] w-[420px] rounded-full bg-bronze-800/25 blur-[140px]"
      />
      <div className="absolute inset-0 bg-noise mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-6xl px-6 sm:px-8"
      >
        <motion.div variants={item} className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bronze-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-bronze-400" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-bronze-300">
            {siteConfig.availability}
          </span>
        </motion.div>

        <motion.p variants={item} className="mt-8 font-mono text-sm uppercase tracking-[0.3em] text-ink-400">
          {siteConfig.name}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
        >
          Building Digital{" "}
          <span className="text-gradient-bronze">Experiences</span> That Actually Work.
        </motion.h1>

        <motion.p variants={item} className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-ink-400 sm:text-lg">
          {siteConfig.description}
        </motion.p>

        <motion.div variants={item} className="mt-4 text-sm font-medium text-bronze-200">
          {siteConfig.role}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton href="#work">
            View My Work <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Let&rsquo;s Talk <ArrowUpRight size={16} />
          </MagneticButton>
        </motion.div>

        <motion.div variants={item} className="mt-14 flex items-center gap-5">
          {socialLinks
            .filter((l) => l.icon !== "MessageCircle")
            .map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-bronze-200"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 transition-colors group-hover:border-bronze-500/40">
                    <Icon size={15} />
                  </span>
                  <span className="hidden sm:inline">{link.label}</span>
                </a>
              );
            })}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-ink-600 p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-bronze-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
