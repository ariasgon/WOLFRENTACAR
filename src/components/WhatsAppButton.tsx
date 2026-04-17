"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/573028491534?text=Hola%2C%20quiero%20información%20sobre%20alquiler%20de%20vehículos";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute -top-2 -right-2 z-10 bg-wolf-blue text-white font-display text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5">
        24h
      </span>
      <span className="relative flex items-center gap-3 bg-wolf-red text-white pl-4 pr-5 py-3 font-display font-bold text-[11px] tracking-[0.16em] uppercase animate-pulse-red hover:bg-wolf-ink transition-colors">
        <MessageCircle size={20} strokeWidth={2.2} />
        <span className="hidden sm:inline">WhatsApp</span>
      </span>
    </a>
  );
}
