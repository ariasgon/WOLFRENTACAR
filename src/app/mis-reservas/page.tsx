"use client";

import { useState } from "react";
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
      <section className="bg-white border-b border-wolf-border/60">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          <p className="text-xs text-wolf-text-card uppercase tracking-wider">
            Inicio · Mis reservas
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-wolf-green mt-2">
            Consulta tu reserva
          </h1>
          <p className="text-wolf-text text-sm mt-2 max-w-2xl">
            Ingresa tu número de reserva y correo para ver el estado o realizar cambios.
          </p>
        </div>
      </section>

      <section className="bg-wolf-soft">
        <div className="max-w-2xl mx-auto px-6 py-10">
          <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-wolf-text mb-1">
                Número de reserva *
              </label>
              <input
                type="text"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ej. WLF-12345"
                className="w-full px-3 py-2.5 rounded-md border border-wolf-border text-sm focus:outline-none focus:ring-2 focus:ring-wolf-green-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-wolf-text mb-1">
                Correo electrónico *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
                className="w-full px-3 py-2.5 rounded-md border border-wolf-border text-sm focus:outline-none focus:ring-2 focus:ring-wolf-green-accent"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              <Search size={18} />
              Consultar reserva
            </button>
          </form>

          {searched && (
            <div className="card p-6 mt-6 text-center">
              <Calendar size={36} className="text-wolf-green mx-auto mb-3" />
              <p className="text-wolf-green font-bold text-base mb-2">
                Estamos buscando tu reserva
              </p>
              <p className="text-wolf-text text-sm">
                Para asistencia inmediata, escríbenos por WhatsApp con tu número de reserva.
              </p>
              <a
                href={`https://wa.me/573028491534?text=${encodeURIComponent(
                  `Hola, quiero consultar mi reserva ${code} (${email})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4"
              >
                <MessageCircle size={18} />
                Consultar por WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
