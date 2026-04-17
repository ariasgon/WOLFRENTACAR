import Link from "next/link";
import { Tag, Calendar, Percent, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Ofertas | Wolf Rent a Car Colombia",
  description: "Promociones y ofertas activas en Wolf Rent a Car Colombia.",
};

const promos = [
  {
    title: "Tarifas mensuales",
    body: "Asegura tu movilidad con planes mensuales que se ajustan a tu necesidad.",
    badge: "Renta mensual",
    Icon: Calendar,
    cta: "Conoce más",
    code: "M-01",
    accent: "red",
  },
  {
    title: "Bienvenido al alquiler",
    body: "Usa el código BIENVENIDO10 en tu primer alquiler con Wolf y ahorra 10%.",
    badge: "10% DTO",
    Icon: Percent,
    cta: "Reserva con código",
    code: "W-02",
    accent: "blue",
  },
  {
    title: "Quédate más, paga menos",
    body: "Reserva 3 días o más y recibe descuento automático en tu confirmación.",
    badge: "Más es Menos",
    Icon: Tag,
    cta: "Simular reserva",
    code: "L-03",
    accent: "red",
  },
  {
    title: "Plan corporativo",
    body: "Plan a la medida para empresas: facturación electrónica, gestión y soporte.",
    badge: "Empresas",
    Icon: Sparkles,
    cta: "Solicitar propuesta",
    code: "C-04",
    accent: "blue",
  },
];

export default function OfertasPage() {
  return (
    <>
      <section className="relative bg-wolf-dark text-white overflow-hidden bg-noise">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[radial-gradient(circle,rgba(213,0,38,0.3)_0%,transparent_60%)]" />
        </div>
        <span
          aria-hidden="true"
          className="absolute -left-4 bottom-[-40%] font-display font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(180px, 22vw, 340px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(233,230,223,0.06)",
          }}
        >
          OFERTAS
        </span>
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6 text-[10px] font-display font-bold tracking-[0.22em] uppercase text-wolf-on-dark/60">
            <Link href="/" className="hover:text-wolf-red transition-colors">
              Inicio
            </Link>
            <span>·</span>
            <span>Ofertas</span>
          </div>
          <div className="kicker mb-5">Ofertas activas</div>
          <h1 className="display-xl text-white">
            Ahorra un poco, <span className="text-wolf-red">viaja más</span>.
          </h1>
          <p className="text-wolf-on-dark/80 text-base md:text-lg max-w-xl mt-6">
            Aprovecha nuestras promociones vigentes en alquiler de vehículos en toda Colombia.
          </p>
        </div>
      </section>

      <section className="bg-wolf-bone py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-5">
          {promos.map((p, i) => (
            <article
              key={p.title}
              className={`group relative card-dark p-8 animate-fade-in-up stagger-${i + 1} overflow-hidden`}
            >
              <div
                className={`absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none ${
                  p.accent === "red" ? "bg-wolf-red" : "bg-wolf-blue"
                }`}
              />
              <div className="relative flex items-start justify-between mb-6">
                <span
                  className={`inline-flex items-center font-display font-bold text-[10px] uppercase tracking-[0.22em] px-3 py-1.5 ${
                    p.accent === "red" ? "bg-wolf-red text-white" : "bg-wolf-blue text-white"
                  }`}
                >
                  {p.badge}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-wolf-on-dark/50 uppercase">
                  {p.code}
                </span>
              </div>
              <p.Icon size={36} strokeWidth={1.5} className="text-wolf-red mb-5 relative" />
              <h2 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-3 relative">
                {p.title}
              </h2>
              <p className="text-wolf-on-dark/70 text-sm leading-relaxed mb-8 relative">{p.body}</p>
              <Link href="/reservar" className="btn-primary w-full relative">
                {p.cta}
                <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-wolf-red text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid md:grid-cols-2 items-center gap-8">
          <div>
            <div className="kicker" style={{ color: "#fff" }}>
              <span className="bg-white/30 w-7 h-[2px]" />
              Oferta a medida
            </div>
            <h2 className="display-lg text-white mt-3">
              ¿Buscas algo<br/>
              <span className="outline-text text-white">más específico?</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white/90 text-sm mb-2">
              Escríbenos por WhatsApp y te armamos un plan a la medida.
            </p>
            <a
              href="https://wa.me/573028491534?text=Hola%2C%20quiero%20una%20oferta%20personalizada"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Hablar por WhatsApp
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
