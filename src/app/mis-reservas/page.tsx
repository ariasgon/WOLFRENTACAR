"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MessageCircle, Calendar } from "lucide-react";

export default function MisReservasPage() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <>
      <section className="relative bg-wolf-dark text-white overflow-hidden bg-noise">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[radial-gradient(circle,rgba(33,118,174,0.28)_0%,transparent_60%)]" />
        </div>
        <span
          aria-hidden="true"
          className="absolute -left-4 bottom-[-40%] font-display font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(150px, 19vw, 280px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(233,230,223,0.06)",
          }}
        >
          RESERVAS
        </span>
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-14 md:py-20">
          <div className="flex items-center gap-3 mb-6 text-[10px] font-display font-bold tracking-[0.22em] uppercase text-wolf-on-dark/60">
            <Link href="/" className="hover:text-wolf-red transition-colors">
              Inicio
            </Link>
            <span>·</span>
            <span>Mis reservas</span>
          </div>
          <div className="kicker kicker-blue mb-5">Consulta de reserva</div>
          <h1 className="display-lg text-white">
            Consulta tu<br/>
            <span className="text-wolf-blue">reserva activa</span>.
          </h1>
          <p className="text-wolf-on-dark/80 text-base md:text-lg max-w-xl mt-5">
            Ingresa tu número de reserva y correo para ver el estado o realizar cambios.
          </p>
        </div>
      </section>

      <section className="bg-wolf-bone py-16">
        <div className="max-w-2xl mx-auto px-4 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="card corner-brackets p-8 md:p-10 space-y-5"
          >
            <div>
              <label className="field-label">Número de reserva *</label>
              <input
                type="text"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ej. WLF-12345"
                className="field-light"
              />
            </div>
            <div>
              <label className="field-label">Correo electrónico *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                className="field-light"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              <Search size={16} />
              Consultar reserva
            </button>
          </form>

          {searched && (
            <div className="card-dark corner-brackets p-8 mt-6 text-center">
              <Calendar size={32} className="text-wolf-red mx-auto mb-4" />
              <p className="font-display font-bold uppercase text-white text-lg mb-2">
                Estamos buscando tu reserva
              </p>
              <p className="text-wolf-on-dark/70 text-sm mb-5">
                Para asistencia inmediata, escríbenos por WhatsApp con tu número de reserva.
              </p>
              <a
                href={`https://wa.me/573028491534?text=${encodeURIComponent(
                  `Hola, quiero consultar mi reserva ${code} (${email})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} />
                Consultar por WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
