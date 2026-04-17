import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Clock3,
  Headset,
  CreditCard,
  ArrowRight,
  Plane,
  Building2,
  MapPin,
  Star,
} from "lucide-react";
import FleetCarousel from "@/components/FleetCarousel";
import BookingWidget from "@/components/BookingWidget";
import { vehicles } from "@/lib/vehicles";

const benefits = [
  {
    Icon: ShieldCheck,
    num: "01",
    title: "Seguro en todos los carros",
    body: "Cada reserva va con seguro todo riesgo. No te preocupes por rayones ni imprevistos.",
  },
  {
    Icon: Clock3,
    num: "02",
    title: "Te esperamos en el aeropuerto",
    body: "Te entregamos el carro donde tú nos digas: aeropuerto, hotel u oficina. Sin filas.",
  },
  {
    Icon: Headset,
    num: "03",
    title: "Una persona, no un bot",
    body: "Escríbenos por WhatsApp cualquier día. Del otro lado siempre hay alguien del equipo.",
  },
  {
    Icon: CreditCard,
    num: "04",
    title: "Sin sorpresas al final",
    body: "Lo que cotizamos es lo que pagas. Sin costos escondidos, sin letra chica.",
  },
];

const pickupPoints = [
  {
    tag: "Aeropuerto",
    title: "El Dorado · BOG",
    body: "Te esperamos apenas aterrizas. Nos envías el número de vuelo y cuadramos la entrega en la puerta.",
    Icon: Plane,
  },
  {
    tag: "Zona norte",
    title: "Chicó · Usaquén · Santa Bárbara",
    body: "Recogida o devolución en tu hotel, oficina o dirección. Coordinamos horario por WhatsApp.",
    Icon: MapPin,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-wolf-dark overflow-hidden bg-noise">
        <div className="absolute inset-0 pointer-events-none opacity-80">
          <div className="absolute top-[-15%] right-[-10%] w-[60%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(213,0,38,0.30)_0%,transparent_60%)]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[55%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(33,118,174,0.24)_0%,transparent_60%)]" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.1] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />

        <span
          aria-hidden="true"
          className="absolute -left-[4%] top-[14%] font-display font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(200px, 26vw, 440px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(233,230,223,0.06)",
          }}
        >
          Wolf
        </span>

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 pt-14 md:pt-20 pb-10">
          <div className="flex items-center justify-between mb-10 text-[10px] font-display font-semibold tracking-[0.28em] uppercase text-wolf-on-dark/60">
            <span className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-wolf-red animate-blink" />
              Bogotá · El Dorado · Zona norte
            </span>
            <span className="hidden md:inline">Hola, ¿a dónde vamos?</span>
            <span className="hidden md:inline">+57 302 849 1534</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 animate-fade-in-up">
              <div className="kicker mb-5">Alquilar un carro en Colombia</div>
              <h1 className="display-xl text-white">
                <span className="block">Cuéntanos a</span>
                <span className="block">dónde vas,</span>
                <span className="block">
                  nosotros <span className="text-wolf-red">te llevamos</span>.
                </span>
              </h1>

              <div className="mt-7 grid sm:grid-cols-[auto_1fr] gap-5 items-start">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[40px] text-wolf-red font-bold leading-none">
                    /01
                  </span>
                  <div className="h-10 w-px bg-white/20" />
                </div>
                <p className="text-wolf-on-dark/80 text-base md:text-lg leading-relaxed max-w-xl">
                  Alquilamos carros en Bogotá sin complicaciones. Tú eliges el carro y la ruta —
                  nosotros ponemos el resto:{" "}
                  <span className="text-white">seguro incluido, sin letra chica</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/reservar" className="btn-primary">
                  Reservar mi carro
                  <ArrowRight size={16} />
                </Link>
                <Link href="/flota" className="btn-outline-light">
                  Ver la flota
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                {[
                  { k: "Punto base", v: "BOG" },
                  { k: "Carros disponibles", v: "08" },
                  { k: "Soporte WhatsApp", v: "24h" },
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

            <div className="lg:col-span-4 relative animate-fade-in-up stagger-3">
              <div className="relative aspect-square lg:aspect-auto lg:h-[520px] bg-wolf-graphite border border-wolf-hairline corner-brackets overflow-hidden">
                <div className="absolute -top-10 -right-16 rotate-[18deg] pointer-events-none opacity-90">
                  <div className="h-8 w-[420px] bg-wolf-red mb-2" />
                  <div className="h-4 w-[300px] bg-wolf-blue" />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between p-5 border-b border-wolf-hairline">
                    <span className="eyebrow text-wolf-red">Hola, somos Wolf</span>
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
                      <p className="font-display font-extrabold text-white text-[26px] leading-none mt-1">
                        $115K
                      </p>
                      <p className="font-mono text-[10px] text-wolf-on-dark/50 uppercase mt-1">
                        por día · COP
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow text-wolf-on-dark/50">Flota</p>
                      <p className="font-display font-extrabold text-white text-[26px] leading-none mt-1">
                        08
                      </p>
                      <p className="font-mono text-[10px] text-wolf-on-dark/50 uppercase mt-1">
                        carros para escoger
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-3 mb-3 font-display text-[10px] tracking-[0.28em] uppercase text-wolf-on-dark/70">
              <span className="h-px flex-1 bg-white/15" />
              <span>Dinos fecha y ciudad</span>
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <BookingWidget variant="dark" />
          </div>
        </div>

        <div className="relative bg-wolf-red overflow-hidden border-y border-wolf-red-deep">
          <div className="ticker-strip flex w-max animate-marquee py-2.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="mx-8 font-display font-semibold text-[11px] tracking-[0.32em] uppercase text-white/95 inline-flex items-center gap-5"
              >
                Bogotá
                <span className="w-1 h-1 rounded-full bg-white/50" />
                El Dorado
                <span className="w-1 h-1 rounded-full bg-white/50" />
                Zona Norte
                <span className="w-1 h-1 rounded-full bg-white/50" />
                Seguro incluido
                <span className="w-1 h-1 rounded-full bg-white/50" />
                WhatsApp 24h
                <span className="w-1 h-1 rounded-full bg-white/50" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="relative bg-wolf-bone py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="kicker mb-4">Nuestra flota</div>
              <h2 className="display-lg text-wolf-dark">
                Encuentra el carro que <span className="text-wolf-red">cuadra contigo</span>.
              </h2>
              <p className="text-wolf-text-muted text-base max-w-lg mt-3">
                Ocho carros pensados para distintos planes — desde un sedán urbano hasta una
                SUV 4×4 o una van para 15. Todos con mantenimiento al día.
              </p>
            </div>
            <Link href="/flota" className="btn-ghost self-start md:self-end">
              Ver todos
              <ArrowRight size={14} />
            </Link>
          </div>

          <FleetCarousel vehicles={vehicles} />
        </div>
      </section>

      {/* WHY WOLF */}
      <section className="relative bg-wolf-dark text-white py-16 md:py-24 overflow-hidden bg-noise">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(213,0,38,0.25)_0%,transparent_60%)]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <div className="kicker kicker-light mb-4">Por qué Wolf</div>
              <h2 className="display-lg text-white">
                Te lo ponemos <span className="text-wolf-red">fácil</span>.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="text-wolf-on-dark/80 text-base md:text-lg leading-relaxed max-w-xl">
                Somos Wolf Renta Car SAS. Un equipo colombiano que hace una sola cosa:
                entregarte un carro listo, limpio y seguro, cuando lo necesitas.
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
                <h3 className="text-white font-display font-bold text-lg tracking-tight mb-2 relative z-10">
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

      {/* PICKUP POINTS — Bogotá only */}
      <section className="relative bg-wolf-bone py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-5">
              <div className="kicker mb-4">Dónde te entregamos</div>
              <h2 className="display-lg text-wolf-dark">
                Estamos en <span className="text-wolf-red">Bogotá</span>.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="text-wolf-text-muted text-base max-w-xl">
                Por ahora operamos en Bogotá. Te recogemos en el Dorado, en la zona norte o donde
                tú nos digas dentro de la ciudad. Dinos hora y lugar y nos cuadramos.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {pickupPoints.map((p, i) => (
              <article
                key={p.title}
                className={`group bg-white border border-wolf-border p-6 md:p-8 flex items-start gap-5 hover:border-wolf-red transition-colors animate-fade-in-up stagger-${i + 1}`}
              >
                <span className="font-mono font-bold text-[12px] text-wolf-red shrink-0 tracking-wider pt-1">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p.Icon size={18} className="text-wolf-blue" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-wolf-text-muted">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-wolf-dark tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-wolf-text-muted text-sm mt-2">{p.body}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-wolf-text-muted text-sm mt-8">
            Próximamente en más ciudades. ¿Nos quieres en otra? Escríbenos y te avisamos.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
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
                  Lo que dicen nuestros clientes
                </span>
              </div>
              <blockquote className="font-display font-bold text-3xl md:text-5xl leading-[1.1] text-white tracking-tight">
                <span className="text-wolf-red">“</span>
                Lo pedí por WhatsApp y me lo llevaron al Dorado. Cero vueltas,
                cero sorpresas — me ahorraron el día.
                <span className="text-wolf-red">”</span>
              </blockquote>
              <p className="mt-5 font-mono text-[12px] uppercase tracking-widest text-wolf-on-dark/70">
                Laura · Bogotá · 2026
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { n: "500+", l: "Viajes completados" },
                { n: "100%", l: "Seguro incluido" },
                { n: "24h", l: "WhatsApp activo" },
                { n: "08", l: "Carros en flota" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className={`border border-wolf-hairline p-5 animate-fade-in-up stagger-${i + 1}`}
                >
                  <p className="font-display font-extrabold text-white text-4xl leading-none">
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

      {/* CTA */}
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
                ¿Sales esta semana?
              </div>
              <h2 className="display-lg text-white mt-4">
                Cuéntanos cuándo sales,<br/>
                <span className="outline-text text-white">te cuadramos el carro.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link href="/reservar" className="btn-secondary">
                Reservar mi carro
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/573028491534?text=Hola%2C%20quiero%20información%20sobre%20alquiler%20de%20vehículos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                <Building2 size={16} />
                Planes corporativos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
