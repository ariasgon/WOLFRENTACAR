import Image from "next/image";
import Link from "next/link";
import { Shield, Users, Award, Target, Eye, Heart, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Nosotros | Wolf Rent a Car Colombia",
  description:
    "Conoce a Wolf Rent a Car, empresa colombiana dedicada al alquiler de vehículos en las principales ciudades del país.",
};

export default function NosotrosPage() {
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
          NOSOTROS
        </span>
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6 text-[10px] font-display font-bold tracking-[0.22em] uppercase text-wolf-on-dark/60">
            <Link href="/" className="hover:text-wolf-red transition-colors">
              Inicio
            </Link>
            <span>·</span>
            <span>Sobre Wolf</span>
          </div>
          <div className="kicker mb-5">Wolf Renta Car SAS</div>
          <h1 className="display-xl text-white">
            Una manada<br/>
            con <span className="text-wolf-red">propósito</span>.
          </h1>
          <p className="text-wolf-on-dark/80 text-base md:text-lg max-w-xl mt-6">
            Conoce la historia, la visión y las personas detrás de Wolf Rent a Car Colombia.
          </p>
        </div>
      </section>

      <section className="bg-wolf-bone py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="kicker mb-5">Nuestra historia</div>
            <h2 className="display-lg text-wolf-dark mb-6">
              Movilidad<br/>
              <span className="text-wolf-red">profesional.</span>
            </h2>
            <div className="space-y-5 text-wolf-text leading-relaxed text-base max-w-xl">
              <p>
                Wolf Rent a Car Colombia es una empresa dedicada a la renta de vehículos
                particulares en las principales ciudades del país. Nacimos con la misión de
                ofrecer un servicio de alquiler profesional, confiable y personalizado.
              </p>
              <p>
                Bajo la dirección de <strong>Wolfart Bohórquez Peña</strong>, Director Comercial,
                hemos construido una flota variada — desde compactos económicos hasta SUVs
                premium — para turistas, empresas y viajeros.
              </p>
              <p>
                Con presencia en <strong>Bogotá, Medellín, Cali, Cartagena, Barranquilla y
                Pereira</strong>, facilitamos la movilidad en las ciudades más importantes del
                país con entrega en aeropuertos y puntos estratégicos.
              </p>
            </div>
            <Link href="/contacto" className="btn-primary mt-8">
              Contáctanos
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="card-dark corner-brackets p-8 relative">
              <div className="flex items-center justify-between mb-5">
                <span className="eyebrow text-wolf-red">Ficha / 01</span>
                <span className="font-mono text-[10px] tracking-widest text-wolf-on-dark/50 uppercase">
                  Wolf · CO
                </span>
              </div>
              <div className="bg-white p-6 aspect-square flex items-center justify-center mb-6">
                <Image
                  src="/wolf-logo.svg"
                  alt="Wolf Rent a Car Logo"
                  width={220}
                  height={240}
                  className="w-[80%] h-auto"
                />
              </div>
              <div className="border-t border-wolf-hairline pt-5">
                <p className="eyebrow text-wolf-on-dark/50">Dir. Comercial</p>
                <p className="font-display font-bold text-white text-lg mt-1 uppercase tracking-tight">
                  Wolfart Bohórquez Peña
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mision" className="bg-wolf-dark text-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="kicker kicker-light mb-5">Nuestro ADN</div>
          <h2 className="display-lg text-white mb-12">
            Misión, visión<br/>
            y <span className="text-wolf-red">valores</span>.
          </h2>
          <div className="grid md:grid-cols-3 gap-0 border border-wolf-hairline">
            {[
              { Icon: Target, title: "Misión", num: "01", body: "Brindar soluciones de movilidad confiables y accesibles a través del alquiler de vehículos de calidad, con un servicio personalizado que supere las expectativas de nuestros clientes en Colombia." },
              { Icon: Eye, title: "Visión", num: "02", body: "Ser la empresa líder de alquiler de vehículos en Colombia, reconocida por la calidad de nuestra flota, la excelencia en el servicio y la confianza que generamos en cada cliente." },
              { Icon: Heart, title: "Valores", num: "03", body: "Confianza, profesionalismo, transparencia, compromiso con el cliente y responsabilidad. Cada vehículo entregado representa nuestra promesa de calidad." },
            ].map(({ Icon, title, body, num }, i) => (
              <div
                key={title}
                id={title.toLowerCase()}
                className={`relative p-8 ${i < 2 ? "md:border-r" : ""} border-b md:border-b-0 border-wolf-hairline group hover:bg-wolf-ink transition-colors`}
              >
                <span className="font-display font-black text-[80px] leading-none absolute top-3 right-5 text-wolf-red/15 group-hover:text-wolf-red/40 transition-colors">
                  {num}
                </span>
                <Icon size={28} strokeWidth={1.5} className="text-wolf-red mb-5" />
                <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white mb-3">
                  {title}
                </h3>
                <p className="text-wolf-on-dark/70 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-wolf-bone py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-wolf-dark">
            {[
              { number: "06", label: "Ciudades", Icon: Shield },
              { number: "500+", label: "Clientes satisfechos", Icon: Users },
              { number: "24h", label: "Soporte WhatsApp", Icon: Award },
              { number: "100%", label: "Seguro incluido", Icon: Shield },
            ].map(({ number, label, Icon }, i) => (
              <div
                key={label}
                className={`p-7 text-center ${i < 3 ? "md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} border-wolf-dark`}
              >
                <Icon size={22} className="text-wolf-red mx-auto mb-3" />
                <p className="font-display font-black text-wolf-dark text-4xl md:text-5xl">
                  {number}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-wolf-text-muted mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-wolf-red text-white py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid md:grid-cols-2 items-center gap-8">
          <h2 className="display-md text-white">
            ¿Listo para viajar<br/>
            con Wolf?
          </h2>
          <Link href="/reservar" className="btn-secondary justify-self-start md:justify-self-end">
            Reservar ahora
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
