import Link from "next/link";
import {
  Map,
  Briefcase,
  ShieldCheck,
  Clock,
  Headset,
  CreditCard,
} from "lucide-react";
import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/lib/vehicles";

const tipsBars = [
  {
    icon: Map,
    title: "¿Hacia dónde quieres viajar?",
    body: "Conoce nuestros destinos y nuestras 6 ciudades de operación.",
    href: "/ubicaciones",
    cta: "tips de viaje",
  },
  {
    icon: Briefcase,
    title: "Conoce las ventajas de alquilar",
    body: "un vehículo para tu empresa con planes corporativos a la medida.",
    href: "/empresas",
    cta: "tu empresa",
  },
];

const benefits = [
  { icon: ShieldCheck, title: "Seguro incluido", body: "Todos los vehículos con seguro todo riesgo." },
  { icon: Clock, title: "Entrega rápida", body: "Recogida ágil en aeropuertos y puntos clave." },
  { icon: Headset, title: "Atención 24h", body: "Soporte por WhatsApp todos los días." },
  { icon: CreditCard, title: "Tarifas claras", body: "Precios transparentes, sin cargos ocultos." },
];

const destinations = [
  { name: "Cartagena", body: "La ciudad heroica, mar Caribe y centro histórico." },
  { name: "Eje Cafetero", body: "Paisaje cultural cafetero, montañas y café." },
  { name: "Medellín", body: "Ciudad de la eterna primavera, comida y cultura." },
  { name: "Santa Marta", body: "Sierra Nevada, playa y Tayrona." },
];

export default function HomePage() {
  const fleet = vehicles.slice(0, 8);

  return (
    <>
      {/* Hero band — sits flush below the green Header panel like Localiza */}
      <section className="relative bg-wolf-green overflow-hidden">
        {/* Decorative spheres */}
        <span className="absolute -left-10 top-12 w-40 h-40 rounded-full bg-wolf-green-accent/30 blur-2xl" />
        <span className="absolute right-1/3 top-4 w-24 h-24 rounded-full bg-wolf-green-accent/40 blur-xl" />
        <span className="absolute right-10 bottom-10 w-28 h-28 rounded-full bg-wolf-green-accent/40 blur-xl" />

        <div className="relative max-w-[1170px] mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: stacked pill headline like Localiza */}
          <div className="space-y-3 md:space-y-4 animate-fade-in-up">
            <span className="inline-block bg-wolf-green-accent text-wolf-green-cta-text font-bold uppercase text-xs md:text-sm tracking-wide px-3 md:px-4 py-2 rounded-md shadow-md">
              ¿Quieres alquilar un vehículo
            </span>
            <span className="inline-block bg-wolf-green-accent text-wolf-green-cta-text text-xl md:text-3xl lg:text-4xl font-bold leading-tight px-4 md:px-5 py-2 md:py-3 rounded-md shadow-md max-w-full">
              en Colombia,{" "}
              <span className="font-display-italic font-normal">sin complicaciones?</span>
            </span>
            <p className="text-white text-base md:text-lg lg:text-xl pt-2 md:pt-4">
              Conoce nuestra flota y reserva con{" "}
              <Link
                href="/flota"
                className="font-display-italic text-wolf-green-accent underline underline-offset-4 decoration-2"
              >
                Wolf Rent a Car.
              </Link>
            </p>
            <div className="flex flex-wrap gap-3 pt-2 md:pt-4">
              <Link href="/flota" className="btn-primary">Ver flota</Link>
              <Link href="/reservar" className="btn-secondary">Reservar ahora</Link>
            </div>
          </div>

          {/* Right: hero illustration / driver scene placeholder */}
          <div className="relative hidden lg:block">
            <div className="aspect-[5/4] rounded-[200px_24px_24px_24px] bg-gradient-to-br from-wolf-green/40 via-wolf-green-accent/15 to-wolf-green/60 border border-wolf-green-accent/30 backdrop-blur-sm flex items-center justify-center text-center px-12">
              <div>
                <p className="text-wolf-green-accent uppercase tracking-widest text-xs font-semibold">
                  Wolf Renta Car
                </p>
                <p className="text-white text-3xl font-bold mt-3 leading-tight">
                  Tu carro, tu ruta,
                  <br />
                  <span className="font-display-italic">tu aventura.</span>
                </p>
                <p className="text-white/80 text-sm mt-4">
                  Vehículos modernos, atención personalizada en 6 ciudades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips bars (Localiza light-gray strip) */}
      <section className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
          {tipsBars.map((bar) => (
            <Link
              key={bar.title}
              href={bar.href}
              className="flex items-start gap-4 group"
            >
              <span className="w-12 h-12 rounded-full bg-wolf-green-accent flex items-center justify-center shrink-0 shadow-sm">
                <bar.icon size={22} className="text-wolf-green-cta-text" />
              </span>
              <div>
                <p className="text-wolf-green font-bold text-base">{bar.title}</p>
                <p className="text-wolf-text text-sm mt-1">
                  {bar.body}{" "}
                  <span className="text-wolf-green underline underline-offset-2 group-hover:text-wolf-green-accent">
                    {bar.cta}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Fleet section */}
      <section className="bg-white">
        <div className="max-w-[1170px] mx-auto px-6 py-12">
          <header className="text-center mb-10">
            <h2 className="text-2xl md:text-[24px] text-wolf-green font-bold leading-tight">
              Conoce nuestra flota
            </h2>
            <p className="text-wolf-text text-sm mt-2">
              Las mejores opciones para que reserves y aproveches.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/flota" className="btn-secondary">
              Mira todos los grupos
            </Link>
          </div>
        </div>
      </section>

      {/* Why Wolf — 4-up benefit row */}
      <section className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-12">
          <header className="text-center mb-10">
            <h2 className="text-2xl md:text-[24px] text-wolf-green font-bold">
              ¿Por qué elegir Wolf?
            </h2>
            <p className="text-wolf-text text-sm mt-2">
              Más que alquiler, una experiencia completa de movilidad.
            </p>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card p-6 text-center">
                <span className="w-12 h-12 mx-auto rounded-full bg-wolf-green-accent flex items-center justify-center mb-3">
                  <b.icon size={22} className="text-wolf-green-cta-text" />
                </span>
                <h3 className="text-wolf-green font-bold text-base uppercase">{b.title}</h3>
                <p className="text-wolf-text text-sm mt-2">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations / inspiration */}
      <section className="bg-white">
        <div className="max-w-[1170px] mx-auto px-6 py-12">
          <header className="text-center mb-10">
            <h2 className="text-2xl md:text-[24px] text-wolf-green font-bold">
              Destinos para descubrir e inspirarte
            </h2>
            <p className="text-wolf-text text-sm mt-2 max-w-2xl mx-auto">
              Más que alquilarte un carro, cuidamos de tu camino. Consulta destinos y viaja sin
              preocupaciones.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((d, i) => (
              <Link
                key={d.name}
                href="/ubicaciones"
                className="card overflow-hidden group"
              >
                <div
                  className="h-44 bg-gradient-to-br"
                  style={{
                    backgroundImage:
                      i % 2 === 0
                        ? "linear-gradient(135deg, #01602A 0%, #78DE1F 130%)"
                        : "linear-gradient(135deg, #003827 0%, #01602A 90%)",
                  }}
                />
                <div className="p-4">
                  <p className="text-wolf-green font-bold text-base group-hover:underline">
                    {d.name}
                  </p>
                  <p className="text-wolf-text text-xs mt-1">{d.body}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/ubicaciones" className="btn-secondary">
              Consulta todos los destinos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
