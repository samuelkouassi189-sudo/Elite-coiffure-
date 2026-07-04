import { Scissors } from "lucide-react";
import { CONTACT } from "../data/site";
import { GoldOrnament, InstagramIcon, FacebookIcon, TikTokIcon } from "./shared";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-carbon/70">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <img src="/images/logo.png" alt="" className="relative z-10 h-16 w-16 rounded-full object-cover ring-[1.5px] ring-gold/40" />
                <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl" />
              </div>
              <div>
                <span className="gold-text font-display text-2xl font-semibold tracking-[0.2em]">ÉLITE</span>
                <span className="block text-[9px] uppercase tracking-[0.55em] text-cream/50">Coiffure</span>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-mist/75">
              L'art de sublimer chaque femme, l'art de sublimer l'homme. Une maison d'excellence dédiée à votre beauté.
            </p>
            <div className="mt-7 flex gap-3">
              {[
                { icon: InstagramIcon, href: CONTACT.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: CONTACT.facebook, label: "Facebook" },
                { icon: TikTokIcon, href: CONTACT.tiktok, label: "TikTok" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="rounded-full border border-gold/25 p-2.5 text-gold transition hover:bg-gold hover:text-noir">
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Liens">
            <h3 className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-gold">Navigation</h3>
            <ul className="grid grid-cols-2 gap-3 text-sm font-light text-cream/65">
              {[
                ["Accueil", "#accueil"], ["Prestations", "#services"], ["Catalogue Femme", "#femme"],
                ["Catalogue Homme", "#homme"], ["Galerie", "#galerie"], ["Avant / Après", "#avant-apres"],
                ["Avis clients", "#avis"], ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}><a href={href} className="transition-colors duration-300 hover:text-gold">{label}</a></li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-gold">Nous trouver</h3>
            <p className="text-sm font-light text-cream/65">{CONTACT.address}</p>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="mt-3 block font-display text-2xl text-cream transition hover:text-gold">
              {CONTACT.phoneDisplay}
            </a>
            <div className="mt-6 space-y-2 text-xs font-light text-mist/60">
              {CONTACT.hours.map((h) => (
                <p key={h.days} className="flex justify-between gap-6">
                  <span>{h.days}</span><span className="gold-text-static">{h.time}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="my-12"><GoldOrnament /></div>

        <p className="flex flex-col items-center justify-center gap-2 text-center text-[10px] font-light uppercase tracking-[0.35em] text-mist/45 sm:flex-row">
          <Scissors size={11} className="text-gold/50" />
          © {new Date().getFullYear()} Élite Coiffure — L'art de sublimer chaque femme & chaque homme
          <Scissors size={11} className="text-gold/50" />
        </p>
      </div>
    </footer>
  );
}
