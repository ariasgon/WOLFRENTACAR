import Link from "next/link";
import { Award, CheckCircle2, Star, Crown } from "lucide-react";

export const metadata = {
  title: "Fidelidad | Wolf Rent a Car Colombia",
  description: "Programa de fidelidad de Wolf Rent a Car Colombia: gana puntos en cada alquiler.",
};

const tiers = [
  {
    name: "Wolf Bronce",
    Icon: Award,
    color: "#cd7f32",
    perks: ["1 hora de tolerancia en la devolución", "Descuento del 5% en tarifas seleccionadas"],
  },
  {
    name: "Wolf Plata",
    Icon: Star,
    color: "#9aa6ad",
    perks: ["2 horas de tolerancia en la devolución", "Descuento del 10% en tarifas seleccionadas", "Upgrade gratuito sujeto a disponibilidad"],
  },
  {
    name: "Wolf Premium",
    Icon: Crown,
    color: "#01602A",
    perks: ["3 horas de tolerancia en la devolución", "Descuento del 15% en tarifas seleccionadas", "Línea de atención prioritaria", "Recogida y devolución VIP"],
  },
];

export default function FidelidadPage() {
  return (
    <>
      <section className="bg-white border-b border-wolf-border/60">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          <p className="text-xs text-wolf-text-card uppercase tracking-wider">
            Inicio · Fidelidad
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-wolf-green mt-2">
            Programa Fidelidad Wolf
          </h1>
          <p className="text-wolf-text text-sm mt-2 max-w-2xl">
            Te recompensamos por tus alquileres con Wolf. Conoce las categorías, beneficios y cómo subir de nivel.
          </p>
        </div>
      </section>

      <section className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
          {tiers.map(({ name, Icon, color, perks }) => (
            <article key={name} className="card overflow-hidden flex flex-col">
              <div className="p-6 flex flex-col items-center text-center" style={{ background: color }}>
                <Icon size={36} className="text-white" />
                <h2 className="text-white text-lg font-bold uppercase tracking-wide mt-3">
                  {name}
                </h2>
              </div>
              <div className="p-6 flex-1">
                <ul className="space-y-3 text-sm text-wolf-text">
                  {perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-wolf-green shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link href="/reservar" className="btn-primary w-full">
                  Reservar y subir nivel
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1170px] mx-auto px-6 py-12">
          <header className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-wolf-green">¿Cómo funciona?</h2>
          </header>
          <ol className="grid md:grid-cols-3 gap-6 text-center">
            {[
              "Te registras al hacer tu primera reserva",
              "Acumulas puntos por cada día alquilado",
              "Canjeas tus puntos por descuentos y upgrades",
            ].map((step, i) => (
              <li key={step} className="card p-6">
                <span className="inline-flex w-10 h-10 rounded-full bg-wolf-green-accent text-wolf-green-cta-text font-bold items-center justify-center mb-3">
                  {i + 1}
                </span>
                <p className="text-wolf-text">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
