import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 40, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="gold-line w-14 md:w-24" />
          <span className="gold-text-static text-[10px] font-medium uppercase tracking-[0.5em]">{eyebrow}</span>
          <span className="gold-line w-14 md:w-24" />
        </div>
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl font-medium leading-[1.1] text-cream md:text-6xl lg:text-7xl">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-light leading-relaxed text-mist/80">{subtitle}</motion.p>
      )}
    </div>
  );
}

export function GoldOrnament() {
  return (
    <div className="flex items-center justify-center gap-4 text-gold/40" aria-hidden>
      <span className="gold-line w-16 md:w-28" />
      <div className="flex gap-1.5">
        <span className="h-1.5 w-1.5 rotate-45 bg-gold/50" />
        <span className="h-2 w-2 rotate-45 bg-gold" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold/50" />
      </div>
      <span className="gold-line w-16 md:w-28" />
    </div>
  );
}

/* Icônes sociales */
const svgProps = { width: 17, height: 17, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function InstagramIcon({ size = 17 }: { size?: number }) {
  return <svg {...svgProps} width={size} height={size} aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
}
export function FacebookIcon({ size = 17 }: { size?: number }) {
  return <svg {...svgProps} width={size} height={size} aria-hidden><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
export function TikTokIcon({ size = 17 }: { size?: number }) {
  return <svg {...svgProps} width={size} height={size} aria-hidden><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>;
}
