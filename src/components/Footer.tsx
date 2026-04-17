import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle, MapPin, Clock, ArrowUpRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/573028491534?text=Hola%2C%20quiero%20información%20sobre%20alquiler%20de%20vehículos";

const pickupPoints = [
  { label: "Aeropuerto El Dorado", href: "/ubicaciones#bogota" },
  { label: "Zona norte · Chicó", href: "/ubicaciones#bogota" },
  { label: "Usaquén · Santa Bárbara", href: "/ubicaciones#bogota" },
];

const nav = [
  { href: "/flota", label: "Flota" },
  { href: "/reservar", label: "Reservar" },
  { href: "/ubicaciones", label: "Dónde estamos" },
  { href: "/ofertas", label: "Ofertas" },
  { href: "/empresas", label: "Empresas" },
  { href: "/fidelidad", label: "Fidelidad" },
  { href: "/dudas", label: "Preguntas frecuentes" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Footer() {
  return (
    <footer className="relative bg-wolf-ink text-wolf-on-dark mt-0">
      {/* Marquee slogan ticker */}
      <div className="relative bg-wolf-red overflow-hidden border-y border-wolf-red-deep">
        <div className="ticker-strip flex w-max animate-marquee py-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 font-display font-semibold text-[13px] tracking-[0.28em] uppercase text-white/95 inline-flex items-center gap-6"
            >
              Hola, soy Wolf
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
              Alquiler de carros en Bogotá
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
              Seguro incluido siempre
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
              Escríbenos 24h
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </span>
          ))}
        </div>
      </div>

      {/* Large editorial brand section */}
      <div className="relative border-b border-wolf-hairline">
        <div
          className="absolute inset-0 bg-grid opacity-60 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/wolf-logo-white.svg"
                  alt="Wolf Rent a Car"
                  width={140}
                  height={48}
                  className="h-14 w-auto"
                />
                <span className="font-display text-[10px] tracking-[0.22em] uppercase text-wolf-red border-l border-wolf-hairline pl-4">
                  Hecho en Colombia
                </span>
              </div>

              <p className="font-display text-[26px] md:text-[28px] leading-[1.08] font-bold text-white mb-3 tracking-tight">
                Te cuadramos el carro.<br/>
                Tú <span className="text-wolf-red">haces la ruta</span>.
              </p>
              <p className="text-wolf-on-dark/70 text-sm max-w-md leading-relaxed mb-6">
                Wolf Renta Car SAS — un equipo colombiano que alquila carros en Bogotá sin
                complicaciones, con alguien del otro lado del WhatsApp cuando escribes.
              </p>

              <div className="flex gap-0 border border-wolf-hairline w-max">
                <a
                  href="https://www.instagram.com/wolfrentacarcol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 flex items-center justify-center text-wolf-on-dark hover:bg-wolf-red hover:text-white transition-colors border-r border-wolf-hairline"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/p/Wolf-Rent-a-Car-Colombia-100069930636889/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 flex items-center justify-center text-wolf-on-dark hover:bg-wolf-blue hover:text-white transition-colors border-r border-wolf-hairline"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="h-11 px-4 flex items-center gap-2 bg-wolf-red text-white hover:bg-wolf-red-deep transition-colors font-display text-[11px] uppercase tracking-[0.18em]"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Nav */}
            <div className="lg:col-span-3">
              <h3 className="kicker kicker-light mb-5">Navegación</h3>
              <ul className="space-y-0 border-t border-wolf-hairline">
                {nav.map((l) => (
                  <li key={l.href} className="border-b border-wolf-hairline">
                    <Link
                      href={l.href}
                      className="flex items-center justify-between py-2.5 text-sm text-wolf-on-dark/80 hover:text-white hover:pl-2 transition-all group"
                    >
                      <span>{l.label}</span>
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-wolf-red transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pickup points */}
            <div className="lg:col-span-2">
              <h3 className="kicker kicker-light mb-5">Dónde entregamos</h3>
              <ul className="space-y-2.5 text-sm">
                {pickupPoints.map((p) => (
                  <li key={p.label}>
                    <Link
                      href={p.href}
                      className="flex items-center gap-2 text-wolf-on-dark/80 hover:text-white transition-colors"
                    >
                      <MapPin size={13} className="text-wolf-blue" />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-wolf-on-dark/50 text-[11px] mt-3">
                Bogotá · Próximamente en más ciudades.
              </p>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
              <h3 className="kicker kicker-light mb-5">Contacto</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <p className="eyebrow text-wolf-on-dark/50 mb-1">Teléfono</p>
                  <a
                    href="tel:+573028491534"
                    className="font-mono text-white hover:text-wolf-red transition-colors flex items-center gap-1.5"
                  >
                    <Phone size={13} className="text-wolf-red" />
                    +57 302 849 1534
                  </a>
                </li>
                <li>
                  <p className="eyebrow text-wolf-on-dark/50 mb-1">Email</p>
                  <a
                    href="mailto:info@wolfrentacarcol.com"
                    className="text-white hover:text-wolf-blue transition-colors flex items-center gap-1.5 break-all"
                  >
                    <Mail size={13} className="text-wolf-blue shrink-0" />
                    info@wolfrentacarcol.com
                  </a>
                </li>
                <li>
                  <p className="eyebrow text-wolf-on-dark/50 mb-1">Horario</p>
                  <span className="text-white flex items-center gap-1.5">
                    <Clock size={13} className="text-wolf-on-dark/60" />
                    Lun – Sáb · 08:00 – 18:00
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Giant brand wordmark row */}
      <div className="border-b border-wolf-hairline overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-6 flex items-center gap-6">
          <span
            className="font-display font-black text-transparent leading-none select-none whitespace-nowrap"
            style={{
              fontSize: "clamp(80px, 14vw, 200px)",
              WebkitTextStroke: "1px rgba(233, 230, 223, 0.12)",
            }}
            aria-hidden="true"
          >
            WOLF · WOLF · WOLF
          </span>
        </div>
      </div>

      {/* Legal strip */}
      <div className="bg-wolf-dark text-wolf-on-dark/60">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] font-mono tracking-wider uppercase">
          <p>
            © {new Date().getFullYear()} <span className="text-white">Wolf Renta Car SAS</span>. Todos los derechos reservados.
          </p>
          <p className="text-center md:text-right">
            Dir. Comercial · Wolfart Bohórquez Peña ·{" "}
            <a href="https://wolfrentacarcol.com" className="text-white hover:text-wolf-red transition-colors">
              wolfrentacarcol.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
