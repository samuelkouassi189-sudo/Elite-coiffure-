import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { SectionHeading } from "./shared";
import { GALLERY } from "../data/site";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const next = useCallback(() => setActive((a) => (a === null ? null : (a + 1) % GALLERY.length)), []);
  const prev = useCallback(() => setActive((a) => (a === null ? null : (a - 1 + GALLERY.length) % GALLERY.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active, next, prev]);

  return (
    <section id="galerie" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Galerie" title="Nos Créations en Lumière"
          subtitle="Chaque réalisation est une signature. Explorez l'univers Élite Coiffure." />

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {GALLERY.map((g, i) => (
            <motion.button key={g.src} initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-xl border border-gold/10 focus:outline-none focus:ring-2 focus:ring-gold/50"
              aria-label={`Agrandir : ${g.alt}`}>
              <img src={g.src} alt={g.alt} loading="lazy" decoding="async"
                className={`img-zoom w-full object-cover ${g.tall ? "aspect-[3/4]" : "aspect-square"}`} />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-noir/90 via-noir/10 to-transparent p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="max-w-[75%] text-left font-display text-sm italic text-cream/90">{g.alt}</span>
                <span className="rounded-full border border-gold/40 bg-gold/15 p-2.5 text-gold backdrop-blur-sm">
                  <Expand size={13} />
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/8 to-transparent transition-transform duration-[1.2s] group-hover:translate-x-full" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-noir/96 backdrop-blur-2xl"
            onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label="Visionneuse">
            <motion.img key={active} src={GALLERY[active].src} alt={GALLERY[active].alt}
              initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[85vh] max-w-[92vw] rounded-xl border-2 border-gold/20 object-contain shadow-[0_0_120px_rgba(212,168,67,0.2)]"
              onClick={(e) => e.stopPropagation()} />
            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 text-center font-display text-lg italic text-cream/80">
              {GALLERY[active].alt}
            </p>
            <button className="absolute right-5 top-5 rounded-full border border-gold/40 bg-noir/80 p-3 text-gold backdrop-blur transition hover:bg-gold hover:text-noir"
              onClick={() => setActive(null)} aria-label="Fermer"><X size={20} /></button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-gold/40 bg-noir/80 p-3 text-gold backdrop-blur transition hover:bg-gold hover:text-noir md:left-8"
              onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Précédent"><ChevronLeft size={20} /></button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-gold/40 bg-noir/80 p-3 text-gold backdrop-blur transition hover:bg-gold hover:text-noir md:right-8"
              onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Suivant"><ChevronRight size={20} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
