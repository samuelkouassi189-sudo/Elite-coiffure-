import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "../data/site";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Discuter sur WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.12, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="wa-pulse fixed bottom-7 right-7 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] p-4 text-white shadow-[0_15px_40px_-8px_rgba(37,211,102,0.6)]"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-gold" />
      </span>
    </motion.a>
  );
}
