import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";
import { CONTACT } from "../data/site";

const LINKS = [
  { label: "Prestations", href: "#services" },
  { label: "Femme", href: "#femme" },
  { label: "Homme", href: "#homme" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-gold/10 bg-noir/80 py-2.5 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#accueil" className="flex items-center gap-3.5" aria-label="Élite Coiffure — Accueil">
          <div className="relative">
            <img src="/images/logo.png" alt="" className="relative z-10 h-11 w-11 rounded-full object-cover ring-[1px] ring-gold/50 md:h-13 md:w-13" />
            <div className="absolute inset-0 rounded-full bg-gold/25 blur-lg" />
          </div>
          <div className="leading-none">
            <span className="gold-text font-display text-xl font-semibold tracking-[0.2em] md:text-2xl">ÉLITE</span>
            <span className="mt-1 block text-[8px] font-light uppercase tracking-[0.55em] text-cream/55">Coiffure</span>
          </div>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigation principale">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}
              className="group relative text-[12px] font-light uppercase tracking-[0.25em] text-cream/70 transition-colors duration-300 hover:text-gold">
              {l.label}
              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer"
            className="btn-gold flex items-center gap-2 rounded-full px-7 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em]">
            <CalendarCheck size={14} strokeWidth={1.5} /> Rendez-vous
          </a>
        </nav>

        <button onClick={() => setOpen(!open)}
          className="rounded-full border border-gold/30 p-2.5 text-gold transition hover:border-gold/60 hover:bg-gold/10 lg:hidden"
          aria-label={open ? "Fermer" : "Menu"}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-gold/10 bg-noir/90 backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col gap-1 px-6 py-8">
              {LINKS.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  initial={{ x: -25, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-gold/8 py-3.5 text-sm uppercase tracking-[0.3em] text-cream/75 transition hover:text-gold">
                  {l.label}
                </motion.a>
              ))}
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer"
                className="btn-gold mt-5 rounded-full px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.2em]">
                Prendre rendez-vous
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
