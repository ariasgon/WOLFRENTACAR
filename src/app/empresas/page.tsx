import Link from "next/link";
import { Building2, Users, ShieldCheck, FileText, Briefcase, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Para empresas | Wolf Rent a Car Colombia",
  description: "Soluciones de movilidad corporativa con Wolf Rent a Car Colombia.",
};

const features = [
  { Icon: Briefcase, title: "Para tu negocio", body: "Reserva y gestión de vehículos para tu empresa, con facturación electrónica.", num: "01" },
  { Icon: Users, title: "Agencias de viaje", body: "Reserva y gestión de vehículos para tu agencia de viajes, con tarifas preferenciales.", num: "02" },
  { Icon: ShieldCheck, title: "Aseguradoras", body: "Asistencia directa para aseguradoras y siniestros, con vehículos de reemplazo.", num: "03" },
];

export default function EmpresasPage() {
  return (
    <>
      <section className="relative bg-wolf-dark text-white overflow-hidden bg-noise">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[radial-gradient(circle,rgba(33,118,174,0.32)_0%,transparent_60%)]" />
        </div>
        <span
          aria-hidden="true"
          className="absolute -right-4 bottom-[-40%] font-display font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(160px, 20vw, 300px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(233,230,223,0.06)",
          }}
        >
          EMPRESAS
        </span>
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6 text-[10px] font-display font-bold tracking-[0.22em] uppercase text-wolf-on-dark/60">
              <Link href="/" className="hover:text-wolf-red transition-colors">
                Inicio
              </Link>
              <span>·</span>
              <span>Empresas</span>
            </div>
            <div className="kicker kicker-blue mb-5">Planes para empresas</div>
            <h1 className="display-xl text-white">
              Movilidad para <span className="text-wolf-blue">tu equipo</span>.
            </h1>
            <ul className="mt-8 space-y-3 text-base text-white/90 max-w-lg">
              <li className="flex gap-3 items-start">
                <span className="text-wolf-blue font-mono text-[10px] mt-2">/01</span>
                Tarifas preferenciales para tu compañía
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-wolf-blue font-mono text-[10px] mt-2">/02</span>
                Facturación electrónica y contratos a la medida
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-wolf-blue font-mono text-[10px] mt-2">/03</span>
                Un asesor dedicado · Soporte cuando lo necesites
              </li>
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contacto" className="btn-primary">
                Solicitar asesoría
                <ArrowRight size={14} />
              </Link>
              <Link href="/flota" className="btn-outline-light">Ver flota</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="card-dark corner-brackets p-8 aspect-[5/5] flex flex-col items-center justify-center">
              <Building2 size={120} strokeWidth={1} className="text-wolf-blue" />
              <p className="font-display font-bold text-[11px] uppercase tracking-[0.24em] text-wolf-on-dark/60 mt-6">
                Plan corporativo
              </p>
              <p className="font-display font-black text-white text-4xl mt-2">W-CORP</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-wolf-bone py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="kicker mb-5">Soluciones por sector</div>
          <h2 className="display-lg text-wolf-dark mb-10">
            Un plan para<br/>cada operación.
          </h2>
          <div className="grid md:grid-cols-3 gap-0 border border-wolf-dark">
            {features.map(({ Icon, title, body, num }, i) => (
              <div
                key={title}
                className={`relative p-8 ${i < features.length - 1 ? "md:border-r" : ""} border-b md:border-b-0 border-wolf-dark group hover:bg-wolf-dark hover:text-white transition-colors`}
              >
                <span className="font-display font-black text-[80px] leading-none absolute top-3 right-5 text-wolf-dark/10 group-hover:text-wolf-red/40 transition-colors">
                  {num}
                </span>
                <Icon size={28} strokeWidth={1.5} className="text-wolf-red mb-5" />
                <h3 className="font-display font-bold text-xl uppercase tracking-tight text-wolf-dark group-hover:text-white transition-colors mb-2">
                  {title}
                </h3>
                <p className="text-wolf-text-muted text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-wolf-dark text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="kicker kicker-light mb-4">
              <FileText size={14} /> Cuentas corporativas
            </p>
            <h2 className="display-lg text-white">
              Gestión simple.<br/>
              <span className="text-wolf-red">Resultados claros.</span>
            </h2>
            <ul className="mt-8 space-y-4 text-sm text-wolf-on-dark/90 border-t border-wolf-hairline pt-6">
              <li className="flex gap-3"><span className="text-wolf-red font-mono">▸</span> Más facilidad, menos demoras</li>
              <li className="flex gap-3"><span className="text-wolf-red font-mono">▸</span> Presencia en aeropuertos y ciudades principales</li>
              <li className="flex gap-3"><span className="text-wolf-red font-mono">▸</span> Atención 24h · Soporte de emergencia incluido</li>
              <li className="flex gap-3"><span className="text-wolf-red font-mono">▸</span> Facturación electrónica</li>
            </ul>
          </div>
          <div className="card-dark corner-brackets p-8">
            <span className="eyebrow text-wolf-red">Propuesta personalizada</span>
            <h3 className="font-display font-bold text-2xl uppercase text-white mt-3 mb-4">
              ¿Quieres una cotización?
            </h3>
            <p className="text-wolf-on-dark/75 text-sm mb-7 leading-relaxed">
              Cuéntanos qué necesita tu empresa y armamos un plan a la medida con tarifas
              preferenciales y soporte dedicado.
            </p>
            <Link href="/contacto" className="btn-primary w-full">
              Cotizar plan corporativo
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
