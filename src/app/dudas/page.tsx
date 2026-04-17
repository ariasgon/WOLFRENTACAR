"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Plus, MessageCircle } from "lucide-react";

const topics = [
  {
    title: "Reservas prepagadas o pago en línea",
    body: "Las reservas se confirman en el momento de la entrega del vehículo. El pago se realiza en la oficina o por enlace de pago seguro previo acuerdo.",
  },
  {
    title: "Flota / Modelos disponibles",
    body: "Trabajamos con marcas como Renault, Chevrolet, Kia, Toyota y Suzuki. La asignación es por categoría — el modelo concreto está sujeto a disponibilidad.",
  },
  { title: "Multas de tránsito", body: "Las multas generadas durante el período de alquiler son responsabilidad del arrendatario. Se trasladan con el cobro administrativo correspondiente." },
  { title: "Accidentes y hurto", body: "Todos los vehículos cuentan con seguro todo riesgo. En caso de siniestro contacta al WhatsApp 24h y al número de emergencias del contrato." },
  { title: "Requisitos y formas de pago", body: "Cédula vigente, licencia de conducción colombiana o internacional, y tarjeta de crédito a nombre del conductor para garantía. Aceptamos efectivo, débito y crédito." },
  { title: "Combustible y conductor adicional", body: "El vehículo se entrega con tanque lleno y debe devolverse igual. Conductores adicionales con costo extra y registro previo." },
  { title: "Reserva de autos", body: "Puedes reservar online, por WhatsApp o por teléfono. Confirmación en menos de 30 minutos en horario laboral." },
  { title: "Pico y placa", body: "Te informamos en cada ciudad sobre la restricción de pico y placa y, cuando aplica, ofrecemos vehículos exentos de la restricción." },
  { title: "Alquiler de adicionales", body: "Sillas para niños, GPS, segundo conductor y kilometraje ampliado disponibles bajo costo adicional." },
  { title: "Licencia de conductor extranjera", body: "Aceptamos licencia internacional vigente o licencia del país de origen acompañada de pasaporte." },
];

export default function DudasPage() {
  const [q, setQ] = useState("");
  const filtered = topics.filter(
    (t) =>
      !q ||
      t.title.toLowerCase().includes(q.toLowerCase()) ||
      t.body.toLowerCase().includes(q.toLowerCase())
  );

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
            fontSize: "clamp(170px, 22vw, 340px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(233,230,223,0.06)",
          }}
        >
          FAQ
        </span>
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6 text-[10px] font-display font-bold tracking-[0.22em] uppercase text-wolf-on-dark/60">
            <Link href="/" className="hover:text-wolf-red transition-colors">
              Inicio
            </Link>
            <span>·</span>
            <span>Ayuda</span>
          </div>
          <div className="kicker mb-5">Preguntas frecuentes</div>
          <h1 className="display-xl text-white">
            ¿En qué podemos<br/>
            <span className="text-wolf-red">ayudarte?</span>
          </h1>

          <div className="max-w-xl mt-10 relative">
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por palabras clave…"
              className="field pr-14"
            />
            <Search
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-wolf-red pointer-events-none"
            />
          </div>
        </div>
      </section>

      <section className="bg-wolf-bone py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-wolf-text-muted mb-6">
            <span className="text-wolf-red font-bold">
              {String(filtered.length).padStart(2, "0")}
            </span>{" "}
            tema{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </p>

          <div className="border-t border-wolf-dark">
            {filtered.map((t, i) => (
              <details
                key={t.title}
                className="group border-b border-wolf-dark/20"
              >
                <summary className="flex items-center justify-between cursor-pointer py-5 list-none gap-4 group-hover:pl-4 transition-all">
                  <span className="flex items-center gap-6">
                    <span className="font-mono text-[11px] text-wolf-red font-bold">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display font-bold text-lg uppercase tracking-tight text-wolf-dark">
                      {t.title}
                    </span>
                  </span>
                  <span className="w-9 h-9 border border-wolf-dark flex items-center justify-center shrink-0 group-open:bg-wolf-red group-open:border-wolf-red group-open:text-white transition-colors">
                    <Plus
                      size={16}
                      className="transition-transform duration-300 group-open:rotate-45"
                    />
                  </span>
                </summary>
                <div className="pb-6 pl-14 pr-4 text-wolf-text-muted text-sm leading-relaxed max-w-3xl">
                  {t.body}
                </div>
              </details>
            ))}
            {filtered.length === 0 && (
              <p className="text-center font-display uppercase text-wolf-text-muted py-16">
                Sin resultados. Escríbenos por WhatsApp y resolvemos tu duda.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-wolf-red text-white py-14">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid md:grid-cols-2 items-center gap-8">
          <h2 className="display-md text-white">
            ¿Aún tienes dudas?<br/>
            Hablemos.
          </h2>
          <div>
            <a
              href="https://wa.me/573028491534?text=Hola%2C%20tengo%20una%20duda"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle size={16} />
              Hablar con un asesor
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
