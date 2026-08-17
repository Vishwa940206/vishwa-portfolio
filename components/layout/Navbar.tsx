"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5",
            scrolled
              ? "border-bronze-500/15 bg-ink-950/80 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)]"
              : "border-transparent bg-transparent"
          )}
        >
          <Link
            href="#home"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-bronze-300 to-bronze-600 text-xs font-bold text-ink-950">
              VR
            </span>
            <span className="hidden sm:inline">{siteConfig.shortName}</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-ink-400 transition-colors hover:text-bronze-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <MagneticButton href="#contact" variant="secondary" className="!px-5 !py-2.5 !text-xs">
              Let&rsquo;s Talk
            </MagneticButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink-950/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-bronze-300 to-bronze-600 text-xs font-bold text-ink-950">
                VR
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-foreground"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink-700 py-4 text-3xl font-semibold tracking-tight text-foreground transition-colors hover:text-bronze-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-8 pb-10">
              <MagneticButton href="#contact" onClick={() => setOpen(false)} className="w-full">
                Let&rsquo;s Talk
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
