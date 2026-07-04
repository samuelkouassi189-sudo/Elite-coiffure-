import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./shared";
import { FAQ_ITEMS } from "../data/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-carbon/60 py-28 md:py-40">
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-gold/4 blur-[140px]" aria-hidden />
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="Questions Fréquentes" title="Tout Ce Que Vous Devez Savoir" />
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={item.q} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${isOpen ? "border-gold/30 shadow-[0_0_50px_rgba(212,168,67,0.1)]" : "border-gold/10"}`}
                style={{ backdropFilter: "blur(30px)", background: "linear-gradient(to bottom, rgba(212,168,67,0.04), transparent)" }}>
                {isOpen && <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />}
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left md:px-9">
                  <span className={`font-display text-lg font-medium transition-colors duration-300 md:text-xl ${isOpen ? "gold-text-static" : "text-cream"}`}>
                    {item.q}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="shrink-0 rounded-full border border-gold/35 p-2 text-gold">
                    <Plus size={15} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                      <p className="px-7 pb-7 text-sm font-light leading-[1.8] text-mist/75 md:px-9">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
