/* ============ Vidéo d'ambiance fixe derrière tout le site ============ */
/* Pour utiliser votre propre vidéo : placez-la dans public/videos/
   et remplacez l'URL ci-dessous par "/videos/votre-video.mp4" */

/* Femme noire en salon — série cottonbro studio */
const BG_VIDEO = "https://videos.pexels.com/video-files/7761104/7761104-uhd_4096_2160_25fps.mp4";
const BG_POSTER =
  "https://images.pexels.com/videos/7761104/pexels-photo-7761104.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200";

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden>
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={BG_POSTER}
      >
        <source src={BG_VIDEO} type="video/mp4" />
      </video>
      {/* Voile sombre luxueux — garantit la lisibilité du contenu */}
      <div className="absolute inset-0 bg-noir/88" />
      {/* Vignettage doré très subtil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,11,0.75)_90%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-noir/60 via-transparent to-noir/70" />
    </div>
  );
}
