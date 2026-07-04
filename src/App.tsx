import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { CatalogueFemme, CatalogueHomme } from "./components/Catalogue";
import Gallery from "./components/Gallery";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import BackgroundVideo from "./components/BackgroundVideo";
import LuxuryMarquee from "./components/LuxuryMarquee";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href") || "");
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -70 });
      }
    };
    document.addEventListener("click", onClick);

    const parallax = gsap.utils.toArray<HTMLElement>(".glow").map((el) =>
      gsap.to(el, {
        y: -80,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1.5 },
      })
    );

    return () => {
      document.removeEventListener("click", onClick);
      parallax.forEach((t) => t.scrollTrigger?.kill());
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen text-cream">
      {/* Grain cinématographique */}
      <div className="film-grain" aria-hidden />

      {/* Vidéo d'ambiance */}
      <BackgroundVideo />

      <Navbar />
      <main>
        <Hero />
        <div className="section-divider mx-auto max-w-5xl" />
        <Services />
        <LuxuryMarquee />
        <CatalogueFemme />
        <CatalogueHomme />
        <LuxuryMarquee />
        <Gallery />
        <BeforeAfter />
        <LuxuryMarquee />
        <Testimonials />
        <Faq />
        <LuxuryMarquee />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
