import Image from "next/image";
import Link from "next/link";
import { Shield, Users, Award, Target, Eye, Heart } from "lucide-react";

export const metadata = {
  title: "Nosotros | Wolf Rent a Car Colombia",
  description:
    "Conoce a Wolf Rent a Car, empresa colombiana dedicada al alquiler de vehículos en las principales ciudades del país.",
};

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-white border-b border-wolf-border/60">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          <p className="text-xs text-wolf-text-card uppercase tracking-wider">
            Inicio · Acerca de Wolf
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-wolf-green mt-2">
            Sobre nosotros
          </h1>
          <p className="text-wolf-text text-sm mt-2 max-w-2xl">
            Conoce la historia y los valores de Wolf Rent a Car Colombia.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1170px] mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-wolf-green-accent font-bold text-xs uppercase tracking-widest">
              Nuestra historia
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-wolf-green mt-2 mb-4">
              Wolf Renta Car SAS
            </h2>
            <p className="text-wolf-text leading-relaxed mb-3">
              Wolf Rent a Car Colombia es una empresa dedicada a la renta de vehículos particulares en las principales ciudades del país. Nacimos con la misión de ofrecer un servicio de alquiler profesional, confiable y personalizado.
            </p>
            <p className="text-wolf-text leading-relaxed mb-3">
              Bajo la dirección de <strong className="text-wolf-green">Wolfart Bohórquez Peña</strong>, Director Comercial, hemos construido una flota variada que va desde vehículos compactos económicos hasta SUVs premium, para satisfacer las necesidades de turistas, empresas y viajeros nacionales e internacionales.
            </p>
            <p className="text-wolf-text leading-relaxed mb-6">
              Con presencia en <strong className="text-wolf-green">Bogotá, Medellín, Cali, Cartagena, Barranquilla y Pereira</strong>, facilitamos la movilidad en las ciudades más importantes del país con entrega en aeropuertos y puntos estratégicos.
            </p>
            <Link href="/contacto" className="btn-primary">
              Contáctanos
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="card p-8 max-w-sm w-full text-center">
              <Image
                src="/wolf-logo.svg"
                alt="Wolf Rent a Car Logo"
                width={180}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-wolf-green">Wolf Rent a Car</h3>
              <p className="text-wolf-text-card text-sm mt-1">
                Alquiler de vehículos en Colombia
              </p>
              <div className="mt-4 pt-4 border-t border-wolf-border">
                <p className="text-sm font-semibold text-wolf-green">
                  Wolfart Bohórquez Peña
                </p>
                <p className="text-[11px] text-wolf-green-accent font-bold uppercase tracking-widest">
                  Director Comercial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mision" className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-12">
          <header className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-wolf-green">
              Misión, visión y valores
            </h2>
          </header>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Target, title: "Misión", body: "Brindar soluciones de movilidad confiables y accesibles a través del alquiler de vehículos de calidad, con un servicio personalizado que supere las expectativas de nuestros clientes en Colombia." },
              { Icon: Eye, title: "Visión", body: "Ser la empresa líder de alquiler de vehículos en Colombia, reconocida por la calidad de nuestra flota, la excelencia en el servicio y la confianza que generamos en cada cliente." },
              { Icon: Heart, title: "Valores", body: "Confianza, profesionalismo, transparencia, compromiso con el cliente y responsabilidad. Cada vehículo entregado representa nuestra promesa de calidad." },
            ].map(({ Icon, title, body }) => (
              <div key={title} id={title.toLowerCase()} className="card p-6">
                <span className="w-12 h-12 rounded-full bg-wolf-green-accent flex items-center justify-center mb-4">
                  <Icon size={22} className="text-wolf-green-cta-text" />
                </span>
                <h3 className="text-base font-bold text-wolf-green uppercase mb-2">{title}</h3>
                <p className="text-wolf-text text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-wolf-green text-white">
        <div className="max-w-[1170px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "6", label: "Ciudades", Icon: Shield },
              { number: "500+", label: "Clientes satisfechos", Icon: Users },
              { number: "24/7", label: "Soporte WhatsApp", Icon: Award },
              { number: "100%", label: "Seguro incluido", Icon: Shield },
            ].map(({ number, label, Icon }) => (
              <div key={label}>
                <Icon size={28} className="text-wolf-green-accent mx-auto mb-2" />
                <p className="text-3xl md:text-4xl font-bold text-wolf-green-accent">
                  {number}
                </p>
                <p className="text-white/80 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-wolf-soft">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-wolf-green mb-3">
            ¿Listo para viajar con Wolf?
          </h2>
          <p className="text-wolf-text mb-6">
            Reserva tu vehículo ahora y disfruta de la mejor experiencia de alquiler en Colombia.
          </p>
          <Link href="/reservar" className="btn-primary">
            Reservar ahora
          </Link>
        </div>
      </section>
    </>
  );
}
