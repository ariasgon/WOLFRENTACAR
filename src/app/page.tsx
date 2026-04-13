import Link from "next/link";
import { Shield, Clock, MapPin, Star, Car, Headphones, CreditCard, ChevronRight } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/lib/vehicles";

const benefits = [
  {
    icon: Shield,
    title: "Seguro Incluido",
    description: "Todos nuestros vehículos cuentan con seguro todo riesgo para tu tranquilidad.",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Recogida y entrega ágil en aeropuertos y puntos estratégicos de la ciudad.",
  },
  {
    icon: MapPin,
    title: "6 Ciudades",
    description: "Presencia en Bogotá, Medellín, Cali, Cartagena, Barranquilla y Pereira.",
  },
  {
    icon: Star,
    title: "Vehículos Recientes",
    description: "Flota renovada con modelos recientes, mantenimiento al día y en perfectas condiciones.",
  },
  {
    icon: Headphones,
    title: "Atención Personalizada",
    description: "Servicio al cliente directo por WhatsApp y teléfono. Siempre disponibles.",
  },
  {
    icon: CreditCard,
    title: "Tarifas Competitivas",
    description: "Los mejores precios del mercado con transparencia total. Sin cargos ocultos.",
  },
];

const cities = [
  { name: "Bogotá", desc: "Capital de Colombia", color: "from-wolf-red/80" },
  { name: "Medellín", desc: "Ciudad de la eterna primavera", color: "from-wolf-blue/80" },
  { name: "Cali", desc: "Capital de la salsa", color: "from-wolf-red/80" },
  { name: "Cartagena", desc: "La ciudad heroica", color: "from-wolf-blue/80" },
  { name: "Barranquilla", desc: "Puerta de oro", color: "from-wolf-red/80" },
  { name: "Pereira", desc: "Corazón del Eje Cafetero", color: "from-wolf-blue/80" },
];

export default function HomePage() {
  const featuredVehicles = vehicles.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-wolf-dark min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-wolf-dark via-wolf-dark/95 to-wolf-dark/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-[10%] right-[-10%] w-[120%] h-24 bg-wolf-blue rotate-[-15deg]" />
            <div className="absolute top-[25%] right-[-10%] w-[120%] h-32 bg-wolf-red rotate-[-15deg]" />
            <div className="absolute top-[45%] right-[-10%] w-[120%] h-40 bg-wolf-dark rotate-[-15deg]" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block bg-wolf-red/20 text-wolf-red px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                Alquiler de vehículos en Colombia
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading">
                Tu viaje comienza con{" "}
                <span className="text-wolf-red">Wolf</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-lg leading-relaxed">
                Renta el vehículo perfecto para tu aventura en Colombia.
                Flota moderna, precios competitivos y servicio personalizado en 6 ciudades.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/flota"
                  className="bg-wolf-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors inline-flex items-center gap-2"
                >
                  Ver Flota
                  <ChevronRight size={18} />
                </Link>
                <a
                  href="https://wa.me/573028491534?text=Hola%2C%20quiero%20información%20sobre%20alquiler%20de%20vehículos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors inline-flex items-center gap-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <BookingWidget variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wolf-dark font-heading">
              ¿Por qué elegir <span className="text-wolf-red">Wolf</span>?
            </h2>
            <p className="mt-3 text-wolf-text-light max-w-2xl mx-auto">
              Más que alquiler de carros, ofrecemos una experiencia completa para que disfrutes tu viaje sin preocupaciones.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-6 rounded-xl border border-gray-100 hover:border-wolf-red/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-wolf-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-wolf-red transition-colors duration-300">
                  <benefit.icon size={24} className="text-wolf-red group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-wolf-dark mb-2">{benefit.title}</h3>
                <p className="text-sm text-wolf-text-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section className="py-16 md:py-20 bg-wolf-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-wolf-dark font-heading">
                Nuestra <span className="text-wolf-red">Flota</span>
              </h2>
              <p className="mt-2 text-wolf-text-light">
                Vehículos para cada necesidad y presupuesto.
              </p>
            </div>
            <Link
              href="/flota"
              className="text-wolf-red hover:text-red-700 font-bold text-sm uppercase tracking-wider flex items-center gap-1 transition-colors"
            >
              Ver toda la flota
              <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wolf-dark font-heading">
              Presentes en <span className="text-wolf-red">6 Ciudades</span>
            </h2>
            <p className="mt-3 text-wolf-text-light max-w-2xl mx-auto">
              Recoge y devuelve tu vehículo en las principales ciudades de Colombia.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <Link
                key={city.name}
                href="/ubicaciones"
                className="group relative overflow-hidden rounded-xl bg-wolf-dark h-40 flex flex-col items-center justify-center text-center p-4 hover:scale-105 transition-transform duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-t ${city.color} to-wolf-dark/90 opacity-80`} />
                <div className="relative">
                  <MapPin size={24} className="text-white mx-auto mb-2 group-hover:text-wolf-red transition-colors" />
                  <h3 className="text-white font-bold text-lg">{city.name}</h3>
                  <p className="text-gray-300 text-xs mt-1">{city.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-wolf-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              ¿Cómo <span className="text-wolf-red">funciona</span>?
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
              Reservar tu vehículo es fácil y rápido. Solo 4 pasos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Elige ciudad y fechas", desc: "Selecciona dónde y cuándo necesitas el vehículo." },
              { step: "2", title: "Selecciona tu vehículo", desc: "Escoge entre nuestra variada flota el que mejor se adapte." },
              { step: "3", title: "Confirma tu reserva", desc: "Completa tus datos y confirma la reserva." },
              { step: "4", title: "Recoge y disfruta", desc: "Recoge tu vehículo y comienza tu aventura." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-wolf-red rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-wolf-red to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Car size={48} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            ¿Listo para tu próximo viaje?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Reserva ahora y obtén las mejores tarifas. Atención personalizada y vehículos en perfectas condiciones.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/reservar"
              className="bg-white text-wolf-red hover:bg-gray-100 px-8 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors"
            >
              Reservar Ahora
            </Link>
            <a
              href="tel:+573028491534"
              className="border-2 border-white text-white hover:bg-white hover:text-wolf-red px-8 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors"
            >
              Llamar: +57 302 849 1534
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
