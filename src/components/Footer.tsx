import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, HelpCircle, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/573028491534?text=Hola%2C%20quiero%20información%20sobre%20alquiler%20de%20vehículos";

export default function Footer() {
  return (
    <footer>
      {/* Band 1: dark slate top — 4 columns */}
      <div className="bg-wolf-footer-mid text-white">
        <div className="max-w-[1170px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-wolf-green-accent font-bold text-[20px] uppercase tracking-wide mb-4">
              Institucional
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/nosotros" className="text-white hover:text-wolf-green-accent transition-colors">Acerca de Wolf</Link></li>
              <li><Link href="/nosotros#mision" className="text-white hover:text-wolf-green-accent transition-colors">Misión y Visión</Link></li>
              <li><Link href="/nosotros#valores" className="text-white hover:text-wolf-green-accent transition-colors">Nuestros Valores</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-wolf-green-accent font-bold text-[20px] uppercase tracking-wide mb-4">
              Negocios
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/empresas" className="text-white hover:text-wolf-green-accent transition-colors">Para Empresas</Link></li>
              <li><Link href="/ofertas" className="text-white hover:text-wolf-green-accent transition-colors">Ofertas</Link></li>
              <li><Link href="/fidelidad" className="text-white hover:text-wolf-green-accent transition-colors">Fidelidad</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-wolf-green-accent font-bold text-[20px] uppercase tracking-wide mb-4">
              Para Ti
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mis-reservas" className="text-white hover:text-wolf-green-accent transition-colors">Mis reservas</Link></li>
              <li><Link href="/flota" className="text-white hover:text-wolf-green-accent transition-colors">Categorías de vehículos</Link></li>
              <li><Link href="/ubicaciones" className="text-white hover:text-wolf-green-accent transition-colors">Red de agencias</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-wolf-green-accent font-bold text-[20px] uppercase tracking-wide mb-4">
              Contactos
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-wolf-green-accent flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-wolf-green-cta-text" />
                </span>
                <a href="mailto:info@wolfrentacarcol.com" className="text-white hover:text-wolf-green-accent transition-colors">
                  Envía tu mensaje
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-wolf-green-accent flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-wolf-green-cta-text" />
                </span>
                <a href="tel:+573028491534" className="text-white hover:text-wolf-green-accent transition-colors">
                  Central de reservas - +57 302 849 1534
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-wolf-green-accent flex items-center justify-center shrink-0">
                  <MessageCircle size={14} className="text-wolf-green-cta-text" />
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-wolf-green-accent transition-colors"
                >
                  Atención al cliente 24h (WhatsApp) - +57 302 849 1534
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-wolf-green-accent flex items-center justify-center shrink-0">
                  <HelpCircle size={14} className="text-wolf-green-cta-text" />
                </span>
                <Link href="/dudas" className="text-white hover:text-wolf-green-accent transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Band 2: light gray middle — social and contact CTA */}
      <div className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-wolf-text font-semibold text-base">
            ¿Listo para tu próximo viaje? Escríbenos por WhatsApp y reserva en minutos.
          </p>
          <div className="flex items-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <p className="text-sm text-wolf-text">
              <span className="block uppercase text-[11px] tracking-wider opacity-70">Síguenos</span>
              <span className="flex gap-3 mt-1">
                <a
                  href="https://www.instagram.com/wolfrentacarcol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-wolf-green flex items-center justify-center hover:bg-wolf-green-accent transition-colors group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="group-hover:fill-wolf-green-cta-text">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/p/Wolf-Rent-a-Car-Colombia-100069930636889/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-wolf-green flex items-center justify-center hover:bg-wolf-green-accent transition-colors group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="group-hover:fill-wolf-green-cta-text">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Band 3: deep green base — logo, secondary nav, agencies, fine print */}
      <div className="bg-wolf-green text-white">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
            <Image src="/wolf-logo-white.svg" alt="Wolf Rent a Car" width={120} height={40} />
            <span className="text-wolf-green-accent font-semibold text-sm uppercase">Colombia</span>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-6">
            <li><Link href="/" className="hover:text-wolf-green-accent transition-colors">Alquiler de Carros</Link></li>
            <li className="opacity-50">|</li>
            <li><Link href="/flota" className="hover:text-wolf-green-accent transition-colors">Categorías de Carros</Link></li>
            <li className="opacity-50">|</li>
            <li><Link href="/ofertas" className="hover:text-wolf-green-accent transition-colors">Ofertas</Link></li>
          </ul>

          <div className="mb-6">
            <p className="flex items-center gap-2 text-sm font-semibold mb-3">
              <MapPin size={18} className="text-wolf-green-accent" />
              Red de agencias
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-sm opacity-90">
              {["Bogotá", "Medellín", "Cali", "Cartagena", "Barranquilla", "Pereira"].map((city) => (
                <li key={city}>
                  <Link href={`/ubicaciones#${city.toLowerCase()}`} className="hover:text-wolf-green-accent transition-colors">
                    Alquiler en {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/15 pt-6 text-xs text-white/80 space-y-2">
            <p>
              Wolf Rent a Car, marca operada por Wolf Renta Car SAS. Director Comercial: Wolfart Bohórquez Peña.
            </p>
            <p>
              Datos de contacto: +57 302 849 1534 · info@wolfrentacarcol.com · wolfrentacarcol.com
            </p>
            <p>Atención: Lun – Sáb, 8:00 AM – 6:00 PM. Servicio WhatsApp 24h.</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-white/70">
              <li><Link href="/dudas" className="hover:text-wolf-green-accent">Preguntas frecuentes</Link></li>
              <li>|</li>
              <li><Link href="/contacto" className="hover:text-wolf-green-accent">Contacto</Link></li>
              <li>|</li>
              <li><Link href="/nosotros" className="hover:text-wolf-green-accent">Sobre nosotros</Link></li>
            </ul>
            <p className="pt-3">© {new Date().getFullYear()} Wolf Renta Car SAS. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
