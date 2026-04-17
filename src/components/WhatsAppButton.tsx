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
      className="fixed bottom-6 right-6 z-50 bg-wolf-green text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-pulse-green hover:bg-wolf-green-accent hover:text-wolf-green-cta-text transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}
