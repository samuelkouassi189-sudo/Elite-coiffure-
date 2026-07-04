import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, ZoomIn, X, Download } from "lucide-react";
import { SectionHeading, GoldOrnament } from "./shared";
import { CONTACT, FEMME_MENU, HOMME_MENU, type MenuSection } from "../data/site";

const bookLink = (name: string, price: string) =>
  `${CONTACT.whatsapp.split("?")[0]}?text=${encodeURIComponent(`Bonjour Élite Coiffure, je souhaite réserver : ${name} (${price} FCFA).`)}`;

function CatalogueLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-noir/95 p-4 backdrop-blur-2xl"
      onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <motion.img src={src} alt={alt} initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="my-auto max-h-none w-auto max-w-full rounded-xl border-2 border-gold/30 shadow-[0_0_120px_rgba(212,168,67,0.25)] md:max-w-3xl"
        onClick={(e) => e.stopPropagation()} />
      <button className="fixed right-5 top-5 rounded-full border border-gold/40 bg-noir/80 p-3 text-gold backdrop-blur transition hover:bg-gold hover:text-noir"
        onClick={onClose} aria-label="Fermer"><X size={20} /></button>
      <a href={src} download onClick={(e) => e.stopPropagation()}
        className="btn-gold fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em]">
        <Download size={14} /> Télécharger le catalogue
      </a>
    </motion.div>
  );
}

function CataloguePoster({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
        <motion.button onClick={() => setOpen(true)} whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 240, damping: 20 }}
          className="group relative block w-full overflow-hidden rounded-2xl border-2 border-gold/20 shadow-[0_30px_100px_-40px_rgba(212,168,67,0.3)] focus:outline-none focus:ring-2 focus:ring-gold/50"
          aria-label={`Agrandir : ${alt}`}>
          <img src={src} alt={alt} loading="lazy" decoding="async" className="img-zoom w-full" />
          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/10 to-transparent transition-transform duration-[1.4s] group-hover:translate-x-full" />
          <div className="absolute inset-0 flex items-center justify-center bg-noir/0 transition-colors duration-500 group-hover:bg-noir/35">
            <span className="flex translate-y-4 items-center gap-2 rounded-full border border-gold/40 bg-noir/60 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.3em] text-gold opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <ZoomIn size={14} /> Voir en plein écran
            </span>
          </div>
          {/* Coins dorés */}
          <div className="pointer-events-none absolute left-3 top-3 h-8 w-8 border-l-2 border-t-2 border-gold/40" />
          <div className="pointer-events-none absolute right-3 top-3 h-8 w-8 border-r-2 border-t-2 border-gold/40" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-8 w-8 border-b-2 border-l-2 border-gold/40" />
          <div className="pointer-events-none absolute bottom-3 right-3 h-8 w-8 border-b-2 border-r-2 border-gold/40" />
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {open && <CatalogueLightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function PriceMenu({ menu }: { menu: MenuSection[] }) {
  return (
    <div className="space-y-6">
      {menu.map((section, si) => (
        <motion.div key={section.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay: si * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border border-gold/15 bg-gradient-to-br from-gold/[0.04] to-transparent p-6 md:p-8"
          style={{ backdropFilter: "blur(30px)" }}>
          {/* Ligne dorée en haut */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="mb-5 flex items-center gap-4">
            <h3 className="gold-text-static font-display text-xl font-semibold uppercase tracking-[0.18em] md:text-2xl">{section.title}</h3>
            <span className="gold-line flex-1" />
          </div>
          <ul className="space-y-3">
            {section.items.map((item) => (
              <li key={item.name} className="group/item flex items-baseline gap-3 text-sm">
                <span className="font-light text-cream/85 transition-colors group-hover/item:text-gold">{item.name}</span>
                <span className="flex-1 border-b border-dotted border-gold/20 transition-colors group-hover/item:border-gold/50" />
                <span className="gold-text-static font-display text-base font-semibold">{item.price} FCFA</span>
                <a href={bookLink(item.name, item.price)} target="_blank" rel="noreferrer" aria-label={`Réserver ${item.name}`}
                  className="ml-1 flex items-center gap-1 rounded-full border border-gold/30 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-gold opacity-60 transition-all hover:bg-gold hover:text-noir hover:opacity-100">
                  <CalendarCheck size={10} /> Réserver
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export function CatalogueFemme() {
  return (
    <section id="femme" className="relative py-28 md:py-40">
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[140px]" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Catalogue Femme" title="Révélez Votre Beauté, Affirmez Votre Style"
          subtitle="Découvrez notre catalogue officiel — lissages, tissages & poses, nattes & tresses, coiffures spéciales." />
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <CataloguePoster src="/images/catalogue-femme.jpg" alt="Catalogue Coiffures Femme — Élite Coiffure" />
            <p className="mt-5 text-center text-[10px] font-light uppercase tracking-[0.4em] text-mist/50">Cliquez pour agrandir</p>
          </div>
          <PriceMenu menu={FEMME_MENU} />
        </div>
        <div className="mt-16"><GoldOrnament />
          <p className="mt-6 text-center font-display text-xl italic text-gold/80">Élite Coiffure, l'art de sublimer chaque femme. ♥</p>
        </div>
      </div>
    </section>
  );
}

export function CatalogueHomme() {
  return (
    <section id="homme" className="relative bg-carbon/60 py-28 md:py-40">
      <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[140px]" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Catalogue Homme" title="Style. Précision. Confiance."
          subtitle="Affirmez votre personnalité avec une coupe qui vous ressemble — notre catalogue officiel homme & barbier." />
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1"><PriceMenu menu={HOMME_MENU} /></div>
          <div className="order-1 lg:order-2 lg:sticky lg:top-28">
            <CataloguePoster src="/images/catalogue-homme.jpg" alt="Catalogue Coiffures Homme — Élite Coiffure" />
            <p className="mt-5 text-center text-[10px] font-light uppercase tracking-[0.4em] text-mist/50">Cliquez pour agrandir</p>
          </div>
        </div>
        <div className="mt-16"><GoldOrnament />
          <p className="mt-6 text-center font-display text-xl italic text-gold/80">Élite Coiffure, l'art de sublimer l'homme. ✂</p>
        </div>
      </div>
    </section>
  );
}
