import Image from "next/image";
import Link from "next/link";
import { Shield, Users, Award, Target, Eye, Heart, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Nosotros | Wolf Rent a Car Colombia",
  description: "Conoce a Wolf Rent a Car, empresa colombiana dedicada al alquiler de vehículos en las principales ciudades del país.",
};

export default function NosotrosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-wolf-dark py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">
            Sobre <span className="text-wolf-red">Nosotros</span>
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Conoce la historia y los valores de Wolf Rent a Car Colombia.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-wolf-red font-bold text-sm uppercase tracking-wider">Nuestra Historia</span>
              <h2 className="text-3xl md:text-4xl font-bold text-wolf-dark font-heading mt-2 mb-4">
                Wolf Renta Car SAS
              </h2>
              <p className="text-wolf-text-light leading-relaxed mb-4">
                Wolf Rent a Car Colombia es una empresa dedicada a la renta de vehículos particulares en las principales ciudades de Colombia. Nacimos con la misión de ofrecer un servicio de alquiler de vehículos profesional, confiable y personalizado.
              </p>
              <p className="text-wolf-text-light leading-relaxed mb-4">
                Bajo la dirección de <strong className="text-wolf-dark">Wolfart Bohórquez Peña</strong>, Director Comercial, hemos construido una flota variada que va desde vehículos compactos económicos hasta SUVs premium, para satisfacer las necesidades de turistas, empresas y viajeros nacionales e internacionales.
              </p>
              <p className="text-wolf-text-light leading-relaxed mb-6">
                Con presencia en <strong className="text-wolf-dark">Bogotá, Medellín, Cali, Cartagena, Barranquilla y Pereira</strong>, facilitamos la movilidad en las ciudades más importantes del país con entrega en aeropuertos y puntos estratégicos.
              </p>
              <Link
                href="/contacto"
                className="bg-wolf-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors inline-flex items-center gap-2"
              >
                Contáctanos
                <ChevronRight size={18} />
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="bg-wolf-light rounded-2xl p-8 max-w-sm w-full text-center">
                <Image
                  src="/wolf-logo.svg"
                  alt="Wolf Rent a Car Logo"
                  width={180}
                  height={200}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-wolf-dark">Wolf Rent a Car</h3>
                <p className="text-wolf-text-light text-sm mt-1">Alquiler de vehículos en Colombia</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-wolf-dark">Wolfart Bohórquez Peña</p>
                  <p className="text-xs text-wolf-red font-bold uppercase tracking-wider">Director Comercial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-wolf-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-wolf-red/10 rounded-lg flex items-center justify-center mb-4">
                <Target size={24} className="text-wolf-red" />
              </div>
              <h3 className="text-xl font-bold text-wolf-dark mb-3">Misión</h3>
              <p className="text-wolf-text-light text-sm leading-relaxed">
                Brindar soluciones de movilidad confiables y accesibles a través del alquiler de vehículos de calidad, con un servicio personalizado que supere las expectativas de nuestros clientes en Colombia.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-wolf-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Eye size={24} className="text-wolf-blue" />
              </div>
              <h3 className="text-xl font-bold text-wolf-dark mb-3">Visión</h3>
              <p className="text-wolf-text-light text-sm leading-relaxed">
                Ser la empresa líder de alquiler de vehículos en Colombia, reconocida por la calidad de nuestra flota, la excelencia en el servicio y la confianza que generamos en cada cliente.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Heart size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-wolf-dark mb-3">Valores</h3>
              <p className="text-wolf-text-light text-sm leading-relaxed">
                Confianza, profesionalismo, transparencia, compromiso con el cliente y responsabilidad. Cada vehículo entregado representa nuestra promesa de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-wolf-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "6", label: "Ciudades", icon: Shield },
              { number: "500+", label: "Clientes satisfechos", icon: Users },
              { number: "24/7", label: "Soporte WhatsApp", icon: Award },
              { number: "100%", label: "Seguro incluido", icon: Shield },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-wolf-red font-heading">{stat.number}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-wolf-red to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            ¿Listo para viajar con Wolf?
          </h2>
          <p className="text-white/80 mb-6">
            Reserva tu vehículo ahora y disfruta de la mejor experiencia de alquiler en Colombia.
          </p>
          <Link
            href="/reservar"
            className="bg-white text-wolf-red hover:bg-gray-100 px-8 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors"
          >
            Reservar Ahora
          </Link>
        </div>
      </section>
    </>
  );
}
