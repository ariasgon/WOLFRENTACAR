import { MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import { locations } from "@/lib/locations";

export const metadata = {
  title: "Ubicaciones | Wolf Rent a Car Colombia",
  description: "Encuentra tu punto de recogida en Bogotá, Medellín, Cali, Cartagena, Barranquilla y Pereira.",
};

export default function UbicacionesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-wolf-dark py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">
            Nuestras <span className="text-wolf-red">Ubicaciones</span>
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Presentes en las 6 principales ciudades de Colombia. Recoge y devuelve tu vehículo en aeropuertos y puntos estratégicos.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 bg-wolf-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
              >
                {/* City image placeholder */}
                <div className="h-44 bg-gradient-to-br from-wolf-dark to-wolf-blue/80 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="relative text-center">
                    <MapPin size={36} className="text-white mx-auto mb-2" />
                    <h2 className="text-2xl font-bold text-white font-heading">{location.city}</h2>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="text-sm text-wolf-text-light mb-4 leading-relaxed">
                    {location.description}
                  </p>

                  <div className="space-y-2.5 text-sm mb-5">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="text-wolf-blue shrink-0 mt-0.5" />
                      <span className="text-wolf-text">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-wolf-blue shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-wolf-text hover:text-wolf-red transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-wolf-blue shrink-0" />
                      <span className="text-wolf-text">{location.hours}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/reservar?ciudad=${location.id}`}
                      className="flex-1 bg-wolf-red hover:bg-red-700 text-white py-2 rounded-lg text-center font-bold text-sm uppercase tracking-wider transition-colors"
                    >
                      Reservar aquí
                    </Link>
                    <a
                      href={`https://wa.me/573028491534?text=${encodeURIComponent(`Hola, necesito un vehículo en ${location.city}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                      aria-label={`WhatsApp ${location.city}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-wolf-dark font-heading mb-3">
            ¿No encuentras tu ciudad?
          </h2>
          <p className="text-wolf-text-light mb-6">
            Contáctanos y te ayudamos a encontrar la mejor opción para tu viaje.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/573028491534?text=Hola%2C%20necesito%20un%20vehículo%20en%20otra%20ciudad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos por WhatsApp
            </a>
            <a
              href="tel:+573028491534"
              className="border-2 border-wolf-dark text-wolf-dark hover:bg-wolf-dark hover:text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              Llamar: +57 302 849 1534
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
