import { motion } from "framer-motion";

const TEXT = "ÉLITE COIFFURE  —  L'EXCELLENCE AU SERVICE DE VOTRE BEAUTÉ  —  ";

export default function LuxuryMarquee() {
  return (
    <div className="overflow-hidden border-y border-gold/10 bg-noir/40 py-4 backdrop-blur-sm">
      <motion.div className="flex whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="mx-8 font-display text-[11px] font-light uppercase tracking-[0.5em] text-gold/25">
            {TEXT}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
