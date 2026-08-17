"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import type { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.45);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const styles = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 whitespace-nowrap",
    variant === "primary" &&
      "bg-gradient-to-b from-bronze-300 to-bronze-500 text-ink-950 shadow-[0_0_0_1px_rgba(233,195,147,0.4),0_18px_40px_-14px_rgba(184,118,58,0.7)] hover:shadow-[0_0_0_1px_rgba(233,195,147,0.6),0_22px_50px_-14px_rgba(184,118,58,0.9)]",
    variant === "secondary" &&
      "glass-panel text-bronze-100 hover:border-bronze-400/40 hover:text-bronze-50",
    variant === "ghost" &&
      "text-ink-400 hover:text-bronze-200",
    className
  );

  const content = (
    <motion.span
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={styles}
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
      return (
        <a
          href={href}
          onClick={onClick}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}
