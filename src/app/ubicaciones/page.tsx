import { MapPin, Phone, Clock, MessageCircle, ArrowRight, Plane } from "lucide-react";
import Link from "next/link";
import { locations } from "@/lib/locations";

export const metadata = {
  title: "Dónde te entregamos | Wolf Rent a Car Bogotá",
  description:
    "Te entregamos el carro en el aeropuerto El Dorado o en la zona norte de Bogotá.",
};

export default function UbicacionesPage() {
  return (
    <>
      <section className="relative bg-wolf-dark text-white overflow-hidden bg-noise">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[radial-gradient(circle,rgba(33,118,174,0.32)_0%,transparent_60%)]" />
        </div>
        <span
          aria-hidden="true"
          className="absolute -left-4 bottom-[-40%] font-display font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(170px, 22vw, 340px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(233,230,223,0.06)",
          }}
        >
          AGENCIAS
        </span>
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6 text-[10px] font-display font-bold tracking-[0.22em] uppercase text-wolf-on-dark/60">
            <Link href="/" className="hover:text-wolf-red transition-colors">
              Inicio
            </Link>
            <span>·</span>
            <span>Dónde te entregamos</span>
          </div>
          <div className="kicker kicker-blue mb-5">Bogotá · te llevamos al Dorado</div>
          <h1 className="display-xl text-white">
            Dónde te <span className="text-wolf-blue">entregamos</span>.
          </h1>
          <p className="text-wolf-on-dark/80 text-base md:text-lg max-w-xl mt-6">
            Te entregamos el carro en el aeropuerto El Dorado o en la zona norte de Bogotá.
            Cuando termines, lo devolvemos igual — tú escoges el punto.
          </p>
        </div>
      </section>

      <section className="bg-wolf-bone py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((location, i) => (
              <article
                key={location.id}
                id={location.id}
                className={`group card flex flex-col animate-fade-in-up stagger-${Math.min(i + 1, 6)}`}
              >
                <div className="relative h-44 bg-wolf-dark overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_30%,rgba(213,0,38,0.35)_0%,transparent_60%)]" />
                  <div className="relative h-full flex flex-col justify-between p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                        /{String(i + 1).padStart(2, "0")}
                      </span>
                      <Plane size={16} className="text-wolf-red" />
                    </div>
                    <div>
                      <p className="eyebrow text-wolf-red">Agencia</p>
                      <h2 className="font-display font-black text-white text-3xl uppercase tracking-tight mt-1">
                        {location.city}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-sm text-wolf-text-muted mb-5 leading-relaxed">
                    {location.description}
                  </p>

                  <ul className="space-y-2.5 text-sm text-wolf-text mb-5 border-t border-wolf-border pt-4">
                    <li className="flex items-start gap-2.5">
                      <MapPin size={14} className="text-wolf-red shrink-0 mt-0.5" />
                      <span className="text-wolf-text-muted">{location.address}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Phone size={14} className="text-wolf-red shrink-0" />
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="font-mono text-wolf-dark hover:text-wolf-red transition-colors"
                      >
                        {location.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Clock size={14} className="text-wolf-red shrink-0" />
                      <span className="text-wolf-text-muted">{location.hours}</span>
                    </li>
                  </ul>

                  <div className="flex gap-2 mt-auto">
                    <Link
                      href={`/reservar?ciudad=${location.id}`}
                      className="btn-primary flex-1 h-11 text-[11px]"
                    >
                      Reservar
                      <ArrowRight size={14} />
                    </Link>
                    <a
                      href={`https://wa.me/573028491534?text=${encodeURIComponent(
                        `Hola, necesito un vehículo en ${location.city}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 w-11 bg-wolf-dark text-white flex items-center justify-center hover:bg-wolf-blue transition-colors"
                      aria-label={`WhatsApp ${location.city}`}
                    >
                      <MessageCircle size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-wolf-dark text-white py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid md:grid-cols-2 items-center gap-8">
          <h2 className="display-md text-white">
            ¿No encuentras<br/>
            tu ciudad?
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-wolf-on-dark/80 text-base">
              Contáctanos y te ayudamos a encontrar la mejor opción para tu viaje.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="https://wa.me/573028491534?text=Hola%2C%20necesito%20un%20vehículo%20en%20otra%20ciudad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} />
                Escríbenos
              </a>
              <a href="tel:+573028491534" className="btn-outline-light">
                <Phone size={16} />
                Llamar
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
