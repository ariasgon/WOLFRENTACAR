import Link from "next/link";
import { Building2, Users, ShieldCheck, FileText, Briefcase } from "lucide-react";

export const metadata = {
  title: "Para empresas | Wolf Rent a Car Colombia",
  description: "Soluciones de movilidad corporativa con Wolf Rent a Car Colombia.",
};

const features = [
  { Icon: Briefcase, title: "Para tu negocio", body: "Reserva y gestión de vehículos para tu empresa." },
  { Icon: Users, title: "Agencias de viaje", body: "Reserva y gestión de vehículos para tu agencia." },
  { Icon: ShieldCheck, title: "Aseguradoras", body: "Asistencia directa para aseguradoras y siniestros." },
];

export default function EmpresasPage() {
  return (
    <>
      <section className="relative bg-wolf-green text-white overflow-hidden">
        <span className="absolute -left-10 top-12 w-40 h-40 rounded-full bg-wolf-green-accent/30 blur-2xl" />
        <div className="relative max-w-[1170px] mx-auto px-6 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-wolf-green-accent uppercase font-bold text-xs tracking-widest">
              Disfruta de una experiencia personalizada de renta de carros
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mt-3">
              Tenemos la solución de movilidad ideal para las necesidades de tu empresa.
            </h1>
            <ul className="mt-6 space-y-3 text-sm text-white/90">
              <li className="flex gap-2"><span className="text-wolf-green-accent">•</span> Más oferta y reducción de costos</li>
              <li className="flex gap-2"><span className="text-wolf-green-accent">•</span> Condiciones comerciales adaptadas a tu negocio</li>
              <li className="flex gap-2"><span className="text-wolf-green-accent">•</span> Estaremos atentos de manera personalizada</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto" className="btn-primary">Solicitar asesoría</Link>
              <Link href="/flota" className="btn-secondary bg-white">Ver flota</Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="aspect-[5/4] rounded-[160px_24px_24px_24px] bg-wolf-green-accent/15 border border-wolf-green-accent/40 w-full max-w-md flex items-center justify-center">
              <Building2 size={140} className="text-wolf-green-accent/80" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1170px] mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
          {features.map(({ Icon, title, body }) => (
            <div key={title} className="card p-6">
              <span className="w-10 h-10 rounded-full bg-wolf-green-accent flex items-center justify-center mb-3">
                <Icon size={20} className="text-wolf-green-cta-text" />
              </span>
              <h3 className="text-wolf-green font-bold uppercase">{title}</h3>
              <p className="text-wolf-text text-sm mt-2">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-wolf-green-accent uppercase font-bold text-xs tracking-widest flex items-center gap-2">
              <FileText size={14} /> Cuentas corporativas
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-wolf-green mt-2">
              Gestión simple y transparente
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-wolf-text">
              <li className="flex gap-2"><span className="text-wolf-green">•</span> Más facilidad, menos demoras, vehículos y mensajería</li>
              <li className="flex gap-2"><span className="text-wolf-green">•</span> En las principales ciudades y aeropuertos del país</li>
              <li className="flex gap-2"><span className="text-wolf-green">•</span> Atención 24h, soporte de emergencia incluido</li>
            </ul>
            <div className="mt-8">
              <Link href="/contacto" className="btn-primary">Solicitar asesoría</Link>
            </div>
          </div>
          <div className="card p-8">
            <h3 className="text-wolf-green font-bold text-lg mb-4">¿Quieres una propuesta?</h3>
            <p className="text-wolf-text text-sm mb-6">
              Cuéntanos qué necesita tu empresa y armamos un plan a la medida con tarifas preferenciales y soporte dedicado.
            </p>
            <Link href="/contacto" className="btn-primary w-full">Cotizar plan corporativo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
