import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, CalendarCheck, Sparkles } from "lucide-react";
import { CONTACT, HERO_VIDEO } from "../data/site";

const TITLE = "ÉLITE COIFFURE";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section id="accueil" ref={ref} className="relative flex h-svh min-h-[750px] items-center justify-center overflow-hidden">
      {/* Vidéo */}
      <motion.div style={{ y: yVideo, scale: scaleVideo }} className="absolute inset-0">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={HERO_VIDEO.poster} aria-hidden>
          <source src={HERO_VIDEO.hd} type="video/mp4" />
          <source src={HERO_VIDEO.uhd} type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir/75 via-noir/50 to-noir" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.75)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-noir/50 via-transparent to-noir/50" />

      {/* Halos dorés multiples */}
      <div className="glow absolute -left-48 top-1/5 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[160px]" aria-hidden />
      <div className="glow absolute -right-48 bottom-1/4 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[160px]" style={{ animationDelay: "4s" }} aria-hidden />
      <div className="glow absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/6 blur-[120px]" style={{ animationDelay: "2s" }} aria-hidden />

      {/* Particules */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} className="particle" style={{
            left: `${(i * 4.5 + 2) % 100}%`,
            width: `${2 + (i % 5) * 2}px`, height: `${2 + (i % 5) * 2}px`,
            animationDuration: `${10 + (i % 7) * 4}s`, animationDelay: `${i * 0.7}s`,
            opacity: 0.5 + (i % 4) * 0.12,
          }} />
        ))}
      </div>

      {/* Cadre doré décoratif */}
      <div className="pointer-events-none absolute inset-8 rounded-2xl border border-gold/10 md:inset-12" aria-hidden />
      <div className="pointer-events-none absolute inset-10 rounded-xl border border-gold/5 md:inset-14" aria-hidden />

      {/* Coins dorés */}
      <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l border-t border-gold/30 md:left-10 md:top-10" aria-hidden />
      <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 border-r border-t border-gold/30 md:right-10 md:top-10" aria-hidden />
      <div className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 border-b border-l border-gold/30 md:bottom-10 md:left-10" aria-hidden />
      <div className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 border-b border-r border-gold/30 md:bottom-10 md:right-10" aria-hidden />

      {/* Lignes verticales dorées */}
      <div className="absolute left-10 top-1/2 hidden h-40 -translate-y-1/2 lg:block" aria-hidden>
        <div className="gold-line-v h-full" />
      </div>
      <div className="absolute right-10 top-1/2 hidden h-40 -translate-y-1/2 lg:block" aria-hidden>
        <div className="gold-line-v h-full" />
      </div>

      {/* Contenu */}
      <motion.div style={{ opacity, y: titleY }} className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Logo avec halo doré */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex justify-center"
        >
          <div className="relative">
            <img src="/images/logo.png" alt="Élite Coiffure" className="relative z-10 h-28 w-28 rounded-full object-cover ring-[2px] ring-gold/50 shadow-[0_0_100px_rgba(212,168,67,0.4)] md:h-36 md:w-36" />
            <div className="absolute inset-0 rounded-full bg-gold/25 blur-2xl" />
            <div className="absolute -inset-4 rounded-full border border-gold/20" />
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mb-7 flex items-center justify-center gap-4"
        >
          <span className="gold-line w-12 md:w-20" />
          <span className="flex items-center gap-2.5 text-[10px] font-light uppercase tracking-[0.55em] text-gold">
            <Sparkles size={12} />
            Salon de prestige — Coiffure & Barbier
            <Sparkles size={12} />
          </span>
          <span className="gold-line w-12 md:w-20" />
        </motion.div>

        {/* Titre */}
        <h1 className="gold-text font-display text-6xl font-semibold leading-[0.85] tracking-[0.12em] sm:text-8xl md:text-9xl lg:text-[11rem]" aria-label={TITLE}>
          {TITLE.split("").map((ch, i) => (
            <motion.span key={i} aria-hidden className="inline-block"
              initial={{ opacity: 0, y: 90, rotateX: 60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.8 + i * 0.05, duration: 1, ease: [0.22, 1, 0.36, 1] }}>
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </h1>

        {/* Ligne dorée sous le titre */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="gold-line mx-auto mt-8 w-32"
        />

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.2 }}
          className="mx-auto mt-7 max-w-xl font-display text-xl font-light italic leading-relaxed text-cream/80 md:text-3xl"
        >
          L'Excellence au Service de Votre Beauté
        </motion.p>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer"
            className="btn-gold flex w-full items-center justify-center gap-2.5 rounded-full px-12 py-5 text-[12px] font-semibold uppercase tracking-[0.22em] sm:w-auto">
            <CalendarCheck size={16} strokeWidth={1.5} /> Prendre rendez-vous
          </a>
          <a href="#services"
            className="btn-ghost flex w-full items-center justify-center rounded-full px-12 py-5 text-[12px] font-light uppercase tracking-[0.22em] sm:w-auto">
            Découvrir nos prestations
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a href="#services" aria-label="Défiler"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] font-light uppercase tracking-[0.5em] text-gold/60">Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
            <ChevronDown size={22} className="text-gold/60" />
          </motion.div>
        </div>
      </motion.a>
    </section>
  );
}
