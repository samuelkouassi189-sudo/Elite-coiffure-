/* ================= Données du site Élite Coiffure ================= */

export const CONTACT = {
  phoneDisplay: "05 02 35 41 76",
  whatsapp: "https://wa.me/225502354176?text=Bonjour%20%C3%89lite%20Coiffure%2C%20je%20souhaite%20prendre%20rendez-vous.",
  maps: "https://www.google.com/maps/search/?api=1&query=%C3%89lite+Coiffure+Abidjan",
  address: "Cocody Riviera, Abidjan — Côte d'Ivoire",
  instagram: "https://instagram.com/elite_coiffure",
  facebook: "https://facebook.com/EliteCoiffure",
  tiktok: "https://tiktok.com/@elite_coiffure",
  hours: [
    { days: "Lundi — Vendredi", time: "09h00 – 20h00" },
    { days: "Samedi", time: "08h30 – 21h00" },
    { days: "Dimanche", time: "10h00 – 18h00" },
  ],
};

const px = (id: number, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=${Math.round(
    (w * 4) / 3
  )}&w=${w}`;

/* ============ Menus tarifaires — prix exacts des catalogues fournis ============ */
export interface MenuSection {
  title: string;
  items: { name: string; price: string }[];
}

export const FEMME_MENU: MenuSection[] = [
  {
    title: "Lissages",
    items: [
      { name: "Lissage Brésilien", price: "25.000" },
      { name: "Lissage Indien", price: "30.000" },
      { name: "Lissage Tanin", price: "35.000" },
      { name: "Lissage Japonais", price: "40.000" },
    ],
  },
  {
    title: "Tissages & Poses",
    items: [
      { name: "Tissage Naturel", price: "20.000" },
      { name: "Tissage Bouclé", price: "22.000" },
      { name: "Pose Closure", price: "25.000" },
      { name: "Pose Frontal", price: "30.000" },
    ],
  },
  {
    title: "Nattes & Tresses",
    items: [
      { name: "Nattes Collées", price: "15.000" },
      { name: "Box Braids", price: "20.000" },
      { name: "Knotless Braids", price: "25.000" },
      { name: "Boho Braids", price: "30.000" },
    ],
  },
  {
    title: "Coiffures Spéciales",
    items: [
      { name: "Chignon Bas", price: "20.000" },
      { name: "Chignon Flou", price: "25.000" },
      { name: "Queue de Cheval", price: "15.000" },
      { name: "Wavy Glamour", price: "25.000" },
    ],
  },
];

export const HOMME_MENU: MenuSection[] = [
  {
    title: "Coupes & Dégradés",
    items: [
      { name: "Dégradé Bas", price: "5.000" },
      { name: "Dégradé Moyen", price: "6.000" },
      { name: "Dégradé Haut", price: "7.000" },
      { name: "Dégradé Américain", price: "8.000" },
      { name: "Coupe Militaire", price: "4.000" },
    ],
  },
  {
    title: "Styles & Textures",
    items: [
      { name: "Waves 360°", price: "6.000" },
      { name: "Afro Naturel", price: "6.000" },
      { name: "Sponge Curls", price: "6.000" },
      { name: "Twists / Dreads", price: "10.000" },
      { name: "Curly Top", price: "7.000" },
    ],
  },
  {
    title: "Barbe & Entretien",
    items: [
      { name: "Taille de Barbe", price: "3.000" },
      { name: "Contour Barbe", price: "3.000" },
      { name: "Barbe Complète", price: "5.000" },
      { name: "Rasage à l'Ancienne", price: "6.000" },
      { name: "Barbe + Contour", price: "5.000" },
    ],
  },
  {
    title: "Options & Couleurs",
    items: [
      { name: "Décoloration", price: "10.000" },
      { name: "Mèches / Highlights", price: "12.000" },
      { name: "Coloration Complète", price: "15.000" },
      { name: "Design / Traçage", price: "3.000" },
      { name: "Design Premium", price: "5.000" },
    ],
  },
];

export const GALLERY: { src: string; alt: string; tall?: boolean }[] = [
  { src: px(6606916), alt: "Locs élégantes — sourire client", tall: true },
  { src: px(19140178), alt: "Dégradé de précision au salon" },
  { src: px(7500796), alt: "Tresses et maquillage glamour", tall: true },
  { src: px(7697386), alt: "Espace barbier premium" },
  { src: px(31001167), alt: "Coiffure artistique dorée", tall: true },
  { src: px(34384310), alt: "Chignon de mariée en préparation" },
  { src: px(7078204), alt: "Nattes colorées sur-mesure", tall: true },
  { src: px(11757359), alt: "Lissage soyeux longue durée" },
  { src: px(18657555), alt: "Brillance naturelle sublimée", tall: true },
  { src: px(4625630), alt: "Rituel barbier à l'ancienne" },
];

export const BEFORE_AFTER = [
  {
    label: "Transformation Femme",
    before: px(34384310, 1000),
    after: px(6960735, 1000),
    caption: "Chignon de préparation → Box braids couture & bijoux dorés",
  },
  {
    label: "Transformation Homme",
    before: px(7697386, 1000),
    after: px(7447127, 1000),
    caption: "Avant la séance → Dégradé net, barbe sculptée au rasoir",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aïcha K.",
    role: "Cliente fidèle — Knotless Braids",
    text: "Une expérience digne d'un palace. L'accueil, la précision, la douceur… mes braids n'ont jamais été aussi parfaites. Élite Coiffure porte très bien son nom.",
    rating: 5,
  },
  {
    name: "Jean-Marc D.",
    role: "Client — Dégradé Américain",
    text: "Le niveau de détail est bluffant. Chaque contour est tracé au millimètre, la serviette chaude, le soin barbe… Je ne confie plus ma coupe à personne d'autre.",
    rating: 5,
  },
  {
    name: "Mariam T.",
    role: "Cliente — Lissage Brésilien",
    text: "Des produits haut de gamme, un résultat miroir qui tient des semaines. On sent immédiatement l'exigence et le professionnalisme de l'équipe.",
    rating: 5,
  },
  {
    name: "Serge B.",
    role: "Client — Rasage à l'Ancienne",
    text: "Un rituel hors du temps. Ambiance feutrée, gestes précis, finition impeccable. C'est bien plus qu'un salon, c'est une maison d'excellence.",
    rating: 5,
  },
  {
    name: "Nadia O.",
    role: "Cliente — Pose Closure",
    text: "La pose est invisible, le rendu naturel et luxueux. J'ai reçu des compliments toute la semaine. Merci pour ce travail d'orfèvre !",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    q: "Comment prendre rendez-vous ?",
    a: "Le plus simple est de nous écrire sur WhatsApp au 01 01 76 78 57. Vous pouvez également utiliser le formulaire de contact ou passer directement au salon. Nous confirmons chaque rendez-vous sous 30 minutes pendant nos horaires d'ouverture.",
  },
  {
    q: "Quels produits utilisez-vous ?",
    a: "Exclusivement des gammes professionnelles haut de gamme, sélectionnées pour leur efficacité et leur respect du cheveu : soins kératine, huiles précieuses et colorations sans ammoniaque sur demande.",
  },
  {
    q: "Combien de temps dure une pose de braids ?",
    a: "Selon la longueur et la densité choisies, comptez entre 3 et 6 heures. Nous travaillons à deux coiffeuses sur les poses longues afin de réduire votre temps d'attente, dans un confort absolu.",
  },
  {
    q: "Le matériel est-il stérilisé ?",
    a: "Oui. L'hygiène est l'un de nos engagements fondamentaux : matériel stérilisé après chaque client, serviettes à usage individuel et postes désinfectés en continu.",
  },
  {
    q: "Puis-je venir avec mes propres mèches ou ma perruque ?",
    a: "Bien sûr. Nous posons vos mèches, closures, frontals et perruques avec le même niveau d'exigence. Nous proposons aussi une sélection premium directement au salon.",
  },
  {
    q: "Proposez-vous des prestations pour les mariées ?",
    a: "Oui, nous créons des coiffures d'exception pour mariages et événements : essai préalable, chignons couture, wavy glamour et accessoirisation sur-mesure. Réservation conseillée 2 semaines à l'avance.",
  },
];

/* Tressage entre femmes noires — Yaroslav Shuraev */
export const HERO_VIDEO = {
  hd: "https://videos.pexels.com/video-files/5084221/5084221-uhd_4096_2160_24fps.mp4",
  uhd: "https://videos.pexels.com/video-files/5084221/5084221-uhd_4096_2160_24fps.mp4",
  poster:
    "https://images.pexels.com/videos/5084221/african-american-girl-african-american-women-african-girl-athletic-girl-5084221.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
};
