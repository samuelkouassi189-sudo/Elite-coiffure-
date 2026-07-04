import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./shared";
import { TESTIMONIALS } from "../data/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIndex((i) => (i + 1) % TESTIMONIALS.length); }, 7000);
    return () => clearInterval(t);
  }, [index]);

  const go = (d: number) => { setDir(d); setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length); };
  const t = TESTIMONIALS[index];

  return (
    <section id="avis" className="relative overflow-hidden py-28 md:py-40">
      <div className="glow absolute right-10 top-10 h-80 w-80 rounded-full bg-gold/8 blur-[120px]" aria-hidden />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/4 blur-[150px]" aria-hidden />
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading eyebrow="Témoignages" title="Ils Nous Font Confiance"
          subtitle="La plus belle des récompenses : la fidélité et le sourire de nos clients." />

        <div className="relative">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure key={index} custom={dir}
              initial={{ opacity: 0, x: dir * 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -dir * 100, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-b from-gold/[0.05] to-transparent px-8 py-16 text-center md:px-20"
              style={{ backdropFilter: "blur(30px)" }}>
              {/* Ligne dorée en haut */}
              <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <Quote className="mx-auto mb-8 text-gold/50" size={40} aria-hidden />
              <div className="mb-6 flex justify-center gap-1.5 text-gold" aria-label={`${t.rating} étoiles`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.08 }}>
                    <Star size={16} fill="currentColor" />
                  </motion.div>
                ))}
              </div>
              <blockquote className="font-display text-xl font-light italic leading-[1.8] text-cream/95 md:text-2xl lg:text-[1.7rem]">
                « {t.text} »
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-deep via-gold to-gold-light font-display text-xl font-semibold text-noir shadow-[0_0_40px_rgba(212,168,67,0.35)]">
                  {t.name.charAt(0)}
                </span>
                <span className="text-left">
                  <span className="block text-sm font-medium tracking-wide text-cream">{t.name}</span>
                  <span className="block text-xs font-light text-mist/80">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <button onClick={() => go(-1)} aria-label="Précédent"
            className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/30 bg-noir/70 p-3.5 text-gold backdrop-blur transition hover:bg-gold hover:text-noir md:-left-16">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => go(1)} aria-label="Suivant"
            className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full border border-gold/30 bg-noir/70 p-3.5 text-gold backdrop-blur transition hover:bg-gold hover:text-noir md:-right-16">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }} aria-label={`Témoignage ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-gold" : "w-2.5 bg-gold/20 hover:bg-gold/45"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
