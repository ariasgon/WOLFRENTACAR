import Link from "next/link";
import { Award, CheckCircle2, Star, Crown, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Fidelidad | Wolf Rent a Car Colombia",
  description: "Programa de fidelidad de Wolf Rent a Car Colombia: gana puntos en cada alquiler.",
};

const tiers = [
  {
    name: "Bronce",
    Icon: Award,
    ring: "bronze",
    perks: ["1 hora de tolerancia en la devolución", "5% de descuento en tarifas seleccionadas"],
    price: "0",
    num: "01",
  },
  {
    name: "Plata",
    Icon: Star,
    ring: "silver",
    perks: [
      "2 horas de tolerancia en la devolución",
      "10% de descuento en tarifas seleccionadas",
      "Upgrade gratuito según disponibilidad",
    ],
    price: "5+",
    num: "02",
  },
  {
    name: "Premium",
    Icon: Crown,
    ring: "premium",
    perks: [
      "3 horas de tolerancia en la devolución",
      "15% de descuento en tarifas seleccionadas",
      "Línea de atención prioritaria",
      "Recogida y devolución VIP",
    ],
    price: "15+",
    num: "03",
  },
];

const ringStyles: Record<string, React.CSSProperties> = {
  bronze: { background: "linear-gradient(135deg, #8b5a2b 0%, #cd7f32 50%, #5c3a1d 100%)" },
  silver: { background: "linear-gradient(135deg, #6a737d 0%, #c0c7cd 50%, #4d545c 100%)" },
  premium: { background: "linear-gradient(135deg, #11161C 0%, #D50026 50%, #0a0d12 100%)" },
};

export default function FidelidadPage() {
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
            fontSize: "clamp(160px, 22vw, 340px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(233,230,223,0.06)",
          }}
        >
          FIDELIDAD
        </span>
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6 text-[10px] font-display font-bold tracking-[0.22em] uppercase text-wolf-on-dark/60">
            <Link href="/" className="hover:text-wolf-red transition-colors">
              Inicio
            </Link>
            <span>·</span>
            <span>Fidelidad</span>
          </div>
          <div className="kicker mb-5">Programa Fidelidad</div>
          <h1 className="display-xl text-white">
            Mientras más viajas, <span className="text-wolf-red">más ganas</span>.
          </h1>
          <p className="text-wolf-on-dark/80 text-base md:text-lg max-w-xl mt-6">
            Te recompensamos por tus alquileres con Wolf. Conoce las categorías, beneficios
            y cómo subir de nivel.
          </p>
        </div>
      </section>

      <section className="bg-wolf-bone py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-5">
          {tiers.map(({ name, Icon, ring, perks, price, num }, i) => (
            <article
              key={name}
              className={`group card flex flex-col animate-fade-in-up stagger-${i + 1}`}
            >
              <div
                className="relative p-7 h-56 flex flex-col justify-between text-white overflow-hidden"
                style={ringStyles[ring]}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                <div className="flex items-start justify-between relative">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                    Tier /{num}
                  </span>
                  <Icon size={26} className="text-white" />
                </div>
                <div className="relative">
                  <p className="eyebrow text-white/70">Wolf</p>
                  <h2 className="font-display font-black text-4xl uppercase tracking-tight mt-1">
                    {name}
                  </h2>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-white/80 mt-2">
                    {price} alquileres / año
                  </p>
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <ul className="space-y-3 text-sm text-wolf-text flex-1">
                  {perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-wolf-red shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/reservar" className="btn-primary w-full mt-7">
                  Subir de nivel
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-wolf-dark text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="kicker kicker-light mb-5">Cómo funciona</div>
          <h2 className="display-lg text-white mb-10">
            Tres pasos.<br/>
            <span className="text-wolf-red">Cero complicaciones.</span>
          </h2>
          <ol className="grid md:grid-cols-3 gap-0 border border-wolf-hairline">
            {[
              "Te registras al hacer tu primera reserva",
              "Acumulas puntos por cada día alquilado",
              "Canjeas tus puntos por descuentos y upgrades",
            ].map((step, i) => (
              <li
                key={step}
                className={`p-8 ${i < 2 ? "md:border-r" : ""} border-b md:border-b-0 border-wolf-hairline`}
              >
                <span className="font-display font-black text-wolf-red text-6xl leading-none">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white text-base mt-5 max-w-sm">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
