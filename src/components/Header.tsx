"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/flota", label: "Flota" },
  { href: "/ubicaciones", label: "Dónde estamos" },
  { href: "/ofertas", label: "Ofertas" },
  { href: "/empresas", label: "Empresas" },
  { href: "/fidelidad", label: "Fidelidad" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/573028491534?text=Hola%2C%20quiero%20información%20sobre%20alquiler%20de%20vehículos";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top status strip */}
      <div className="bg-wolf-ink text-wolf-on-dark text-[10px] font-display font-semibold tracking-[0.22em] uppercase border-b border-wolf-hairline">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-wolf-red animate-blink" />
            <span className="hidden sm:inline">Hola · Lun – Sáb 8:00 AM – 6:00 PM</span>
            <span className="sm:hidden">Hola, estamos abiertos</span>
          </div>
          <a
            href="tel:+573028491534"
            className="hidden md:flex items-center gap-2 hover:text-wolf-red-glow transition-colors"
          >
            <Phone size={11} />
            302 849 1534
          </a>
          <div className="flex items-center gap-4 text-[9px]">
            <span className="hidden lg:inline">Seguro incluido</span>
            <span className="w-1 h-1 rounded-full bg-wolf-blue hidden lg:inline" />
            <span className="hidden lg:inline">WhatsApp siempre</span>
          </div>
        </div>
      </div>

      {/* Main nav band */}
      <div className="bg-wolf-dark border-b border-wolf-hairline">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <nav className="h-[76px] flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center shrink-0 group relative"
              aria-label="Wolf Rent a Car"
            >
              <div className="relative">
                <Image
                  src="/wolf-logo-white.svg"
                  alt="Wolf Rent a Car"
                  width={140}
                  height={48}
                  priority
                  className="h-11 lg:h-12 w-auto transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute -right-2 -top-1 w-1.5 h-1.5 bg-wolf-red rounded-full animate-blink" />
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-0 h-full">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 xl:px-4 h-full flex items-center text-white/80 hover:text-white text-[11px] font-display font-bold uppercase tracking-[0.14em] transition-colors group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-x-3 xl:inset-x-4 bottom-5 h-[2px] bg-wolf-red scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                  {i < navLinks.length - 1 && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-4 bg-white/10" />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2 shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary h-11 px-4 xl:px-5 text-[11px]"
              >
                <MessageCircle size={14} />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
              <Link
                href="/reservar"
                className="btn-secondary h-11 px-4 xl:px-5 text-[11px]"
              >
                Reservar
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 border border-white/15"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </div>

      {/* Thin red accent stripe */}
      <div className="h-[3px] bg-wolf-red" />

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-wolf-ink border-b border-wolf-hairline">
          <div className="px-4 py-4 space-y-0">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between text-white font-display text-sm font-bold uppercase tracking-[0.18em] py-4 border-b border-wolf-hairline hover:text-wolf-red transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-wolf-red w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </span>
                <span className="text-wolf-red">→</span>
              </Link>
            ))}
            <div className="pt-5 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a href="tel:+573028491534" className="btn-outline-light w-full">
                <Phone size={16} />
                302 849 1534
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
