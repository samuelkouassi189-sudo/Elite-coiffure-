import { useRef } from "react";
import { Scissors, Crown, Gem, Flame, Palette, HandHeart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "./shared";

const SERVICES = [
  { icon: Crown, title: "Coiffures Femme", desc: "Lissages miroir, tissages invisibles, braids couture et chignons d'exception. Des produits de prestige pour des résultats qui subliment.", stat: "200+", statLabel: "clientes" },
  { icon: Scissors, title: "Barbier Gentleman", desc: "Dégradés au millimètre, rasage à l'ancienne à la serviette chaude et sculpture de barbe signature.", stat: "150+", statLabel: "coupes/mois" },
  { icon: Gem, title: "Poses Premium", desc: "Perruques, closures et frontals posés avec un rendu naturel absolu. Sélection de mèches haut de gamme.", stat: "100%", statLabel: "naturel" },
  { icon: Flame, title: "Soins Capillaires", desc: "Rituels kératine, bains d'huiles précieuses et diagnostics personnalisés. Une fibre régénérée.", stat: "15+", statLabel: "soins" },
  { icon: Palette, title: "Colorations & Design", desc: "Décolorations maîtrisées, highlights lumineux et traçages artistiques. Affirmez votre style.", stat: "50+", statLabel: "nuances" },
  { icon: HandHeart, title: "Expérience Sur-Mesure", desc: "Accueil privilégié, ponctualité, hygiène irréprochable et conseils d'experts à chaque visite.", stat: "5★", statLabel: "note" },
];

function ServiceCard({ s, index }: { s: typeof SERVICES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-gold/10 bg-gradient-to-b from-gold/[0.03] to-transparent p-8 md:p-10"
      style={{ backdropFilter: "blur(20px)" }}
    >
      {/* Reflet */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/10 to-transparent transition-transform duration-[1.5s] group-hover:translate-x-full" />
      {/* Bordure dorée au survol */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-gold/0 transition-all duration-700 group-hover:border-gold/30" />

      <span className="absolute right-6 top-6 font-display text-6xl font-light text-gold/8 transition-colors duration-500 group-hover:text-gold/15">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-2xl border border-gold/20 bg-gold/5 p-4 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold/15 group-hover:shadow-[0_0_50px_rgba(212,168,67,0.35)]">
          <s.icon size={26} strokeWidth={1.2} />
        </div>
        <h3 className="font-display text-2xl font-medium text-cream md:text-3xl">{s.title}</h3>
        <p className="mt-3 text-sm font-light leading-relaxed text-mist/85">{s.desc}</p>
        <div className="mt-6 flex items-baseline gap-2 border-t border-gold/10 pt-5">
          <span className="gold-text font-display text-2xl font-semibold">{s.stat}</span>
          <span className="text-[10px] font-light uppercase tracking-[0.25em] text-mist/60">{s.statLabel}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Nos Prestations"
          title="L'Art de Sublimer Chaque Détail"
          subtitle="Un savoir-faire d'exception, des gestes précis et des produits d'exigence internationale."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
