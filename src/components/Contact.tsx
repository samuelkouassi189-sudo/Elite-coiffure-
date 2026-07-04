import { useState } from "react";
import { Phone, MapPin, Clock, Navigation, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading, InstagramIcon, FacebookIcon, TikTokIcon } from "./shared";
import { CONTACT } from "../data/site";

const inputCls = "w-full rounded-xl border border-gold/15 bg-noir/50 px-5 py-4 text-sm font-light text-cream placeholder:text-mist/35 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-noir/70 focus:shadow-[0_0_30px_rgba(212,168,67,0.12)]";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Bonjour Élite Coiffure,%0A%0AJe suis ${data.get("name")}%0APrestation souhaitée : ${data.get("service")}%0A%0A${data.get("message")}`;
    window.open(`${CONTACT.whatsapp.split("?")[0]}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="glow absolute left-0 top-20 h-96 w-96 rounded-full bg-gold/6 blur-[140px]" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Contact & Localisation" title="Réservez Votre Moment d'Exception"
          subtitle="Notre équipe vous répond en moins de 30 minutes. Votre beauté, notre expertise." />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3">
            <form onSubmit={submit} className="relative overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-b from-gold/[0.04] to-transparent p-8 md:p-10"
              style={{ backdropFilter: "blur(30px)" }}>
              <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <h3 className="font-display text-2xl font-medium text-cream md:text-3xl">Demande de rendez-vous</h3>
              <p className="mt-2 text-xs font-light text-mist/60">Remplissez ce formulaire — votre demande s'ouvrira directement dans WhatsApp.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-gold/70">Nom complet</label>
                  <input id="name" name="name" required placeholder="Votre nom" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-gold/70">Prestation</label>
                  <select id="service" name="service" className={inputCls} defaultValue="Coiffure Femme">
                    <option>Coiffure Femme</option><option>Lissage / Soin</option><option>Tissage / Pose</option>
                    <option>Nattes / Tresses</option><option>Coupe / Dégradé Homme</option><option>Barbe / Rasage</option>
                    <option>Coloration / Design</option><option>Coiffure Mariée / Événement</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-gold/70">Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Date et heure souhaitées, précisions…" className={inputCls} />
                </div>
              </div>
              <button type="submit"
                className="btn-gold mt-8 flex w-full items-center justify-center gap-2 rounded-full px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] sm:w-auto">
                {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
                {sent ? "Demande envoyée sur WhatsApp" : "Envoyer via WhatsApp"}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col gap-6 lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-b from-gold/[0.04] to-transparent p-8"
              style={{ backdropFilter: "blur(30px)" }}>
              <div className="absolute left-1/4 right-1/4 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <ul className="space-y-6 text-sm font-light">
                <li className="flex items-start gap-4">
                  <span className="rounded-xl bg-gold/10 p-3 text-gold"><Phone size={17} /></span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.35em] text-mist/60">WhatsApp / Téléphone</span>
                    <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="mt-1 block font-display text-xl text-cream transition hover:text-gold">{CONTACT.phoneDisplay}</a>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="rounded-xl bg-gold/10 p-3 text-gold"><MapPin size={17} /></span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.35em] text-mist/60">Adresse</span>
                    <span className="mt-1 block text-cream/85">{CONTACT.address}</span>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="rounded-xl bg-gold/10 p-3 text-gold"><Clock size={17} /></span>
                  <span className="flex-1">
                    <span className="block text-[10px] uppercase tracking-[0.35em] text-mist/60">Horaires</span>
                    <span className="mt-2 block space-y-2">
                      {CONTACT.hours.map((h) => (
                        <span key={h.days} className="flex justify-between gap-4 text-cream/80">
                          <span>{h.days}</span><span className="gold-text-static font-display">{h.time}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <a href={CONTACT.maps} target="_blank" rel="noreferrer"
                  className="btn-gold flex items-center justify-center gap-2 rounded-full px-4 py-3.5 text-[11px] font-semibold uppercase tracking-[0.15em]">
                  <Navigation size={13} /> Itinéraire
                </a>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer"
                  className="btn-ghost flex items-center justify-center gap-2 rounded-full px-4 py-3.5 text-[11px] uppercase tracking-[0.15em]">
                  <MessageCircle size={13} /> WhatsApp
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center gap-5 border-t border-gold/10 pt-7">
                {[
                  { icon: InstagramIcon, href: CONTACT.instagram, label: "Instagram" },
                  { icon: FacebookIcon, href: CONTACT.facebook, label: "Facebook" },
                  { icon: TikTokIcon, href: CONTACT.tiktok, label: "TikTok" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className="rounded-full border border-gold/25 p-3.5 text-gold transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-noir hover:shadow-[0_10px_35px_-6px_rgba(212,168,67,0.5)]">
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-3xl border border-gold/10">
              <iframe title="Localisation" src="https://www.google.com/maps?q=Cocody%20Riviera%20Abidjan&output=embed"
                className="h-full min-h-[220px] w-full grayscale-[50%] contrast-[1.05] opacity-85"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
