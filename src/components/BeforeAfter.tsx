import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { SectionHeading } from "./shared";
import { BEFORE_AFTER } from "../data/site";

function Comparator({ before, after, label, caption }: { before: string; after: string; label: string; caption: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const move = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, p)));
  };

  return (
    <div>
      <div ref={ref}
        className="group relative aspect-[4/5] cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border-2 border-gold/15 sm:aspect-[4/4.4]"
        onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
        onPointerDown={(e) => move(e.clientX)}
        role="slider" aria-label={`Comparateur ${label}`} aria-valuenow={Math.round(pos)} aria-valuemin={0} aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 5)); if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 5)); }}>
        <img src={after} alt={`${label} — après`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <img src={before} alt={`${label} — avant`} loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
        <div className="absolute inset-y-0 z-10 w-px bg-gradient-to-b from-transparent via-gold to-transparent shadow-[0_0_25px_rgba(212,168,67,0.9)]"
          style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold/60 bg-noir/80 text-gold shadow-[0_0_40px_rgba(212,168,67,0.5)] backdrop-blur-md">
            <MoveHorizontal size={18} />
          </span>
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-noir/70 px-3.5 py-1.5 text-[9px] uppercase tracking-[0.3em] text-cream/80 backdrop-blur-md">Avant</span>
        <span className="absolute right-4 top-4 rounded-full border border-gold/30 bg-noir/70 px-3.5 py-1.5 text-[9px] uppercase tracking-[0.3em] text-gold backdrop-blur-md">Après</span>
      </div>
      <p className="mt-5 text-center font-display text-xl italic text-cream/90">{label}</p>
      <p className="mt-1 text-center text-xs font-light tracking-wide text-mist/60">{caption}</p>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="avant-apres" className="relative bg-carbon/60 py-28 md:py-40">
      <div className="absolute left-1/2 top-0 h-60 w-[500px] -translate-x-1/2 rounded-full bg-gold/4 blur-[100px]" aria-hidden />
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading eyebrow="Avant / Après" title="La Métamorphose Élite"
          subtitle="Faites glisser le curseur doré et découvrez la puissance d'une transformation signée Élite Coiffure." />
        <div className="grid gap-12 md:grid-cols-2">
          {BEFORE_AFTER.map((b, i) => (
            <motion.div key={b.label} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}>
              <Comparator {...b} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
