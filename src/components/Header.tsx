"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";

const navLinks = [
  { href: "/flota", label: "Categorías de vehículos" },
  { href: "/ubicaciones", label: "Red de agencias" },
  { href: "/ofertas", label: "Ofertas" },
  { href: "/fidelidad", label: "Fidelidad" },
  { href: "/empresas", label: "Para empresas" },
  { href: "/dudas", label: "Dudas" },
];

const WHATSAPP_URL =
  "https://wa.me/573028491534?text=Hola%2C%20quiero%20información%20sobre%20alquiler%20de%20vehículos";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Country bar (Localiza-style) */}
      <div className="bg-white text-xs text-wolf-text">
        <div className="max-w-[1170px] mx-auto px-4 py-1 flex items-center justify-end">
          <span className="text-wolf-green font-semibold uppercase tracking-wider">
            Colombia
          </span>
        </div>
      </div>

      {/* Green navbar panel — contained, not full-bleed */}
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="bg-wolf-green">
          {/* Top row: logo / nav / login */}
          <nav className="px-6 py-4 flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center shrink-0" aria-label="Wolf Rent a Car">
              <Image
                src="/wolf-logo-white.svg"
                alt="Wolf Rent a Car"
                width={120}
                height={40}
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-[12px] font-semibold uppercase tracking-wide hover:text-wolf-green-accent transition-colors px-1 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href="tel:+573028491534"
                className="text-white text-[12px] font-semibold uppercase tracking-wide flex items-center gap-2 hover:text-wolf-green-accent transition-colors"
              >
                <Phone size={16} className="text-wolf-green-accent" />
                <span className="leading-tight">
                  <span className="block opacity-80 text-[10px]">LLAMAR</span>
                  <span className="block">302 849 1534</span>
                </span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[12px] font-semibold uppercase tracking-wide flex items-center gap-2 hover:text-wolf-green-accent transition-colors"
              >
                <MessageCircle size={16} className="text-wolf-green-accent" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </nav>

          {/* Booking widget row (sits inside the same green panel like Localiza) */}
          <div className="px-4 md:px-6 pb-5">
            <p className="text-white text-xl md:hidden font-bold mb-3">Nueva reserva</p>
            <BookingWidget />
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-wolf-green border-t border-white/10">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white text-sm font-semibold uppercase tracking-wide py-3 border-b border-white/10 hover:text-wolf-green-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a href="tel:+573028491534" className="btn-secondary w-full bg-white">
                <Phone size={18} />
                Llamar 302 849 1534
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
