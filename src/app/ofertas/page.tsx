import Link from "next/link";
import { Tag, Calendar, Percent, Sparkles } from "lucide-react";

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
  },
  {
    title: "Bienvenido al alquiler",
    body: "Usa el código BIENVENIDO10 en tu primer alquiler con Wolf y ahorra 10%.",
    badge: "10% DTO",
    Icon: Percent,
    cta: "Reserva con código",
  },
  {
    title: "Quédate más, paga menos",
    body: "Reserva 3 días o más y recibe descuento automático en tu confirmación.",
    badge: "Más es Menos",
    Icon: Tag,
    cta: "Simular reserva",
  },
  {
    title: "Plan corporativo",
    body: "Plan a la medida para empresas: facturación electrónica, gestión y soporte.",
    badge: "Empresas",
    Icon: Sparkles,
    cta: "Solicitar propuesta",
  },
];

export default function OfertasPage() {
  return (
    <>
      <section className="bg-white border-b border-wolf-border/60">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          <p className="text-xs text-wolf-text-card uppercase tracking-wider">
            Inicio · Ofertas
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-wolf-green mt-2">Ofertas</h1>
          <p className="text-wolf-text text-sm mt-2 max-w-2xl">
            Aprovecha nuestras promociones vigentes en alquiler de vehículos en toda Colombia.
          </p>
        </div>
      </section>

      <section className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-10 grid sm:grid-cols-2 gap-6">
          {promos.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-wolf-border overflow-hidden flex flex-col text-white"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #01602A 0%, #003827 100%)",
              }}
            >
              <div className="p-6 flex-1">
                <span className="inline-flex items-center gap-1 bg-wolf-green-accent text-wolf-green-cta-text text-[11px] font-bold uppercase px-2.5 py-1 rounded">
                  {p.badge}
                </span>
                <div className="flex items-start gap-3 mt-4">
                  <p.Icon size={28} className="text-wolf-green-accent shrink-0" />
                  <div>
                    <h2 className="text-xl font-bold">{p.title}</h2>
                    <p className="text-white/85 text-sm mt-2">{p.body}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link
                  href="/reservar"
                  className="btn-primary w-full"
                >
                  {p.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-wolf-green mb-3">
            ¿Quieres una oferta personalizada?
          </h2>
          <p className="text-wolf-text mb-6">
            Escríbenos por WhatsApp y te armamos un plan a la medida.
          </p>
          <a
            href="https://wa.me/573028491534?text=Hola%2C%20quiero%20una%20oferta%20personalizada"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
