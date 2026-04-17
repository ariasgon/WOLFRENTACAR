import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Clock3,
  Headset,
  CreditCard,
  MapPin,
  ArrowRight,
  Plane,
  Building2,
  Star,
} from "lucide-react";
import FleetCarousel from "@/components/FleetCarousel";
import BookingWidget from "@/components/BookingWidget";
import { vehicles } from "@/lib/vehicles";
import { locations } from "@/lib/locations";

const benefits = [
  {
    Icon: ShieldCheck,
    num: "01",
    title: "Seguro incluido",
    body: "Todo riesgo en cada reserva. Sin cargos ocultos, sin sorpresas en la entrega.",
  },
  {
    Icon: Clock3,
    num: "02",
    title: "Entrega rápida",
    body: "Recogida ágil en aeropuertos y puntos clave de 6 ciudades del país.",
  },
  {
    Icon: Headset,
    num: "03",
    title: "Atención 24h",
    body: "Soporte humano por WhatsApp todos los días. Hablas con una persona, no un bot.",
  },
  {
    Icon: CreditCard,
    num: "04",
    title: "Tarifas claras",
    body: "Precios transparentes. Pagas cuando recibes el vehículo, no antes.",
  },
];

const cityBlurbs: Record<string, string> = {
  bogota: "El Dorado · Zona Norte",
  medellin: "J. M. Córdova · El Poblado",
  cali: "Alfonso Bonilla Aragón",
  cartagena: "Rafael Núñez · Bocagrande",
  barranquilla: "Ernesto Cortissoz",
  pereira: "Matecaña · Centro",
};

export default function HomePage() {
  return (
    <>
      {/* ================================================================
           HERO — editorial motorsport poster
         ================================================================ */}
      <section className="relative bg-wolf-dark overflow-hidden bg-noise">
        {/* Atmospheric gradient mesh */}
        <div className="absolute inset-0 pointer-events-none opacity-80">
          <div className="absolute top-[-15%] right-[-10%] w-[60%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(213,0,38,0.35)_0%,transparent_60%)]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[55%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(33,118,174,0.28)_0%,transparent_60%)]" />
        </div>

        {/* Grid backdrop */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />

        {/* Faint giant wordmark behind content */}
        <span
          aria-hidden="true"
          className="absolute -left-[4%] top-[12%] font-display font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(200px, 28vw, 480px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(233,230,223,0.06)",
          }}
        >
          WOLF
        </span>

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 pt-14 md:pt-20 pb-10">
          {/* Top meta line */}
          <div className="flex items-center justify-between mb-10 text-[10px] font-display font-bold tracking-[0.28em] uppercase text-wolf-on-dark/60">
            <span className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-wolf-red animate-blink" />
              Edición 2026
            </span>
            <span className="hidden md:inline">Rent · Drive · Repeat</span>
            <span className="hidden md:inline">CO · 57 / 302 / 8491534</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* LEFT — headline */}
            <div className="lg:col-span-8 animate-fade-in-up">
              <div className="kicker mb-6">Alquiler de vehículos en Colombia</div>
              <h1 className="display-xl text-white">
                <span className="block">Toma</span>
                <span className="block outline-text text-white">el volante,</span>
                <span className="block">
                  manada <span className="text-wolf-red">Wolf</span>.
                </span>
              </h1>

              <div className="mt-7 grid sm:grid-cols-[auto_1fr] gap-6 items-start">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[42px] text-wolf-red font-bold leading-none">
                    /01
                  </span>
                  <div className="h-10 w-px bg-white/20" />
                </div>
                <p className="text-wolf-on-dark/80 text-base md:text-lg leading-relaxed max-w-xl">
                  Flota moderna, seguro incluido y atención personalizada en las principales
                  ciudades del país. Reserva en minutos, paga al recibir.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/reservar" className="btn-primary">
                  Reservar ahora
                  <ArrowRight size={16} />
                </Link>
                <Link href="/flota" className="btn-outline-light">
                  Explorar flota
                </Link>
              </div>

              {/* Spec readout row */}
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                {[
                  { k: "Ciudades", v: "06" },
                  { k: "Categorías", v: "08" },
                  { k: "WhatsApp", v: "24h" },
                ].map((s, i) => (
                  <div
                    key={s.k}
                    className={`border-t border-white/15 pt-3 animate-fade-in-up stagger-${i + 3}`}
                  >
                    <p className="eyebrow text-wolf-on-dark/50">{s.k}</p>
                    <p className="font-display font-bold text-white text-2xl md:text-3xl mt-1">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Logo plate / category teaser */}
            <div className="lg:col-span-4 relative animate-fade-in-up stagger-3">
              <div className="relative aspect-square lg:aspect-auto lg:h-[520px] bg-wolf-graphite border border-wolf-hairline corner-brackets overflow-hidden">
                {/* Diagonal stripe overlay */}
                <div className="absolute -top-10 -right-16 rotate-[18deg] pointer-events-none opacity-90">
                  <div className="h-8 w-[420px] bg-wolf-red mb-2" />
                  <div className="h-4 w-[300px] bg-wolf-blue" />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between p-5 border-b border-wolf-hairline">
                    <span className="eyebrow text-wolf-red">W-01 / Ficha</span>
                    <span className="font-mono text-[11px] text-wolf-on-dark/60">
                      COP · 2026
                    </span>
                  </div>

                  <div className="flex-1 flex items-center justify-center p-8 relative">
                    <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
                    <div className="relative w-full max-w-[260px] aspect-square bg-white flex items-center justify-center">
                      <Image
                        src="/wolf-logo.svg"
                        alt="Wolf Rent a Car"
                        width={220}
                        height={240}
                        priority
                        className="w-[76%] h-auto"
                      />
                    </div>
                  </div>

                  <div className="p-5 border-t border-wolf-hairline grid grid-cols-2 gap-4">
                    <div>
                      <p className="eyebrow text-wolf-on-dark/50">Desde</p>
                      <p className="font-display font-black text-white text-[26px] leading-none mt-1">
                        $115K
                      </p>
                      <p className="font-mono text-[10px] text-wolf-on-dark/50 uppercase mt-1">
                        / día · COP
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow text-wolf-on-dark/50">Flota</p>
                      <p className="font-display font-black text-white text-[26px] leading-none mt-1">
                        08
                      </p>
                      <p className="font-mono text-[10px] text-wolf-on-dark/50 uppercase mt-1">
                        categorías activas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking widget — anchored to bottom of hero */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-3 font-display text-[10px] tracking-[0.28em] uppercase text-wolf-on-dark/70">
              <span className="h-px flex-1 bg-white/15" />
              <span>Inicia tu cotización</span>
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <BookingWidget variant="dark" />
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="relative bg-wolf-red overflow-hidden border-y border-wolf-red-deep">
          <div className="ticker-strip flex w-max animate-marquee py-2.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="mx-8 font-display font-bold text-[11px] tracking-[0.32em] uppercase text-white/95 inline-flex items-center gap-5"
              >
                Bogotá
                <span className="w-1 h-1 rounded-full bg-white/50" />
                Medellín
                <span className="w-1 h-1 rounded-full bg-white/50" />
                Cali
                <span className="w-1 h-1 rounded-full bg-white/50" />
                Cartagena
                <span className="w-1 h-1 rounded-full bg-white/50" />
                Barranquilla
                <span className="w-1 h-1 rounded-full bg-white/50" />
                Pereira
                <span className="w-1 h-1 rounded-full bg-white/50" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
           FLEET — editorial
         ================================================================ */}
      <section className="relative bg-wolf-bone py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="kicker mb-4">La manada · Flota 2026</div>
              <h2 className="display-lg text-wolf-dark">
                Elige tu <span className="text-wolf-red">bestia</span>.
              </h2>
              <p className="text-wolf-text-muted text-base max-w-lg mt-3">
                Ocho categorías, desde compactos urbanos hasta SUVs premium y vans
                para equipos. Todas listas para rodar.
              </p>
            </div>
            <Link href="/flota" className="btn-ghost self-start md:self-end">
              Ver flota completa
              <ArrowRight size={14} />
            </Link>
          </div>

          <FleetCarousel vehicles={vehicles} />
        </div>
      </section>

      {/* ================================================================
           WHY WOLF — numbered benefits, asymmetric grid
         ================================================================ */}
      <section className="relative bg-wolf-dark text-white py-16 md:py-24 overflow-hidden bg-noise">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(213,0,38,0.25)_0%,transparent_60%)]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <div className="kicker kicker-light mb-4">Por qué Wolf</div>
              <h2 className="display-lg text-white">
                Sin letra chica.<br />
                <span className="text-wolf-red">Solo carretera.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="text-wolf-on-dark/80 text-base md:text-lg leading-relaxed max-w-xl">
                Somos Wolf Renta Car SAS — un equipo colombiano enfocado en un solo objetivo:
                entregarte un vehículo listo, limpio y seguro, cuando lo necesitas.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-wolf-hairline">
            {benefits.map(({ Icon, num, title, body }, i) => (
              <div
                key={title}
                className={`group relative p-7 md:p-8 border-b border-r border-wolf-hairline last:border-r-0 hover:bg-white/[0.04] transition-colors animate-fade-in-up stagger-${i + 1}`}
              >
                <span className="font-display font-black text-wolf-red/30 text-[80px] leading-none absolute top-4 right-5 group-hover:text-wolf-red/60 transition-colors">
                  {num}
                </span>
                <Icon
                  size={26}
                  strokeWidth={1.6}
                  className="text-wolf-red mb-5 relative z-10"
                />
                <h3 className="text-white font-display font-bold text-lg uppercase tracking-tight mb-2 relative z-10">
                  {title}
                </h3>
                <p className="text-wolf-on-dark/70 text-sm leading-relaxed relative z-10">
                  {body}
                </p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-wolf-red group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
           CITIES — editorial list
         ================================================================ */}
      <section className="relative bg-wolf-bone py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-5">
              <div className="kicker mb-4">Red nacional · 06 ciudades</div>
              <h2 className="display-lg text-wolf-dark">
                Dondequiera que<br/>vayas, <span className="text-wolf-red">rodamos</span>.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="text-wolf-text-muted text-base max-w-xl">
                Recogida y devolución en aeropuertos y puntos estratégicos de Bogotá, Medellín,
                Cali, Cartagena, Barranquilla y Pereira.
              </p>
            </div>
          </div>

          <ul className="border-t border-wolf-dark/80">
            {locations.map((loc, i) => (
              <li
                key={loc.id}
                className="border-b border-wolf-dark/15 group"
              >
                <Link
                  href={`/ubicaciones#${loc.id}`}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 sm:py-7 hover:bg-wolf-dark hover:text-white hover:px-6 transition-all duration-300 animate-fade-in-up stagger-${Math.min(i + 1, 6)}`}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono font-bold text-[12px] text-wolf-red w-10 shrink-0 tracking-wider">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight text-wolf-dark group-hover:text-white transition-colors">
                        {loc.city}
                      </h3>
                      <p className="text-[12px] text-wolf-text-muted font-mono uppercase tracking-wider mt-1 group-hover:text-wolf-on-dark/70 transition-colors">
                        {cityBlurbs[loc.id] ?? loc.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="hidden md:flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-wolf-text-muted group-hover:text-wolf-on-dark/70 transition-colors">
                      <Plane size={14} className="text-wolf-blue" />
                      Entrega en aeropuerto
                    </span>
                    <span className="flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.2em] text-wolf-red group-hover:text-white transition-colors">
                      Ver agencia
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================================================
           TESTIMONIAL / TRUST STRIP
         ================================================================ */}
      <section className="relative bg-wolf-dark text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#D50026"
                    strokeWidth={0}
                    className="text-wolf-red"
                  />
                ))}
                <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-wolf-on-dark/70">
                  Confianza nacional
                </span>
              </div>
              <blockquote className="font-display font-black text-3xl md:text-5xl leading-[1.05] text-white uppercase tracking-tight">
                <span className="text-wolf-red">"</span>
                Lo reservé por WhatsApp, me lo entregaron en El Dorado. Cero vueltas, cero sorpresas.
                <span className="text-wolf-red">"</span>
              </blockquote>
              <p className="mt-5 font-mono text-[12px] uppercase tracking-widest text-wolf-on-dark/70">
                Cliente · Bogotá · 2026
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { n: "500+", l: "Viajes completados" },
                { n: "100%", l: "Seguro incluido" },
                { n: "24h", l: "WhatsApp activo" },
                { n: "06", l: "Ciudades · 08 flota" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className={`border border-wolf-hairline p-5 animate-fade-in-up stagger-${i + 1}`}
                >
                  <p className="font-display font-black text-white text-4xl leading-none">
                    {s.n}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-wolf-on-dark/60 mt-3">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
           CTA — final
         ================================================================ */}
      <section className="relative bg-wolf-red text-white py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #000 0 2px, transparent 2px 16px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="kicker" style={{ color: "#fff" }}>
                <span className="bg-white/30 w-7 h-[2px]" />
                Próxima parada · Tu ciudad
              </div>
              <h2 className="display-lg text-white mt-4">
                Tu carro ya está listo.<br/>
                <span className="outline-text text-white">Solo falta tu fecha.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link href="/reservar" className="btn-secondary">
                Reservar ahora
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/573028491534?text=Hola%2C%20quiero%20información%20sobre%20alquiler%20de%20vehículos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                <Building2 size={16} />
                Plan corporativo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
