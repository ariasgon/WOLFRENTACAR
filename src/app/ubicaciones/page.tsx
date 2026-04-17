import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import { locations } from "@/lib/locations";

export const metadata = {
  title: "Red de agencias | Wolf Rent a Car Colombia",
  description:
    "Encuentra tu punto de recogida en Bogotá, Medellín, Cali, Cartagena, Barranquilla y Pereira.",
};

export default function UbicacionesPage() {
  return (
    <>
      <section className="bg-white border-b border-wolf-border/60">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          <p className="text-xs text-wolf-text-card uppercase tracking-wider">
            Inicio · Red de agencias
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-wolf-green mt-2">
            Red de agencias
          </h1>
          <p className="text-wolf-text text-sm mt-2 max-w-2xl">
            Presentes en las 6 principales ciudades de Colombia. Recoge y devuelve tu vehículo en aeropuertos y puntos estratégicos.
          </p>
        </div>
      </section>

      <section className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <article key={location.id} id={location.id} className="card flex flex-col">
                <div
                  className="h-40 flex items-center justify-center relative"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #01602A 0%, #003827 100%)",
                  }}
                >
                  <MapPin size={32} className="text-wolf-green-accent" />
                  <h2 className="text-white text-2xl font-bold ml-3">{location.city}</h2>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-sm text-wolf-text-card mb-4 leading-relaxed">
                    {location.description}
                  </p>

                  <ul className="space-y-2 text-sm text-wolf-text mb-5">
                    <li className="flex items-start gap-2">
                      <MapPin size={15} className="text-wolf-green shrink-0 mt-0.5" />
                      <span>{location.address}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone size={15} className="text-wolf-green shrink-0" />
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="hover:text-wolf-green transition-colors"
                      >
                        {location.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock size={15} className="text-wolf-green shrink-0" />
                      <span>{location.hours}</span>
                    </li>
                  </ul>

                  <div className="flex gap-2 mt-auto">
                    <Link
                      href={`/reservar?ciudad=${location.id}`}
                      className="btn-primary flex-1 px-4"
                    >
                      Reservar aquí
                    </Link>
                    <a
                      href={`https://wa.me/573028491534?text=${encodeURIComponent(
                        `Hola, necesito un vehículo en ${location.city}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-4"
                      aria-label={`WhatsApp ${location.city}`}
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-wolf-green mb-3">
            ¿No encuentras tu ciudad?
          </h2>
          <p className="text-wolf-text mb-6">
            Contáctanos y te ayudamos a encontrar la mejor opción para tu viaje.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/573028491534?text=Hola%2C%20necesito%20un%20vehículo%20en%20otra%20ciudad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} />
              Escríbenos por WhatsApp
            </a>
            <a href="tel:+573028491534" className="btn-secondary">
              Llamar +57 302 849 1534
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
