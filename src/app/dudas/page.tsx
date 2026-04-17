"use client";

import { useState } from "react";
import { Search, ChevronRight, MessageCircle } from "lucide-react";

const topics = [
  {
    title: "Reservas Prepagadas o pago en línea",
    body: "Las reservas se confirman en el momento de la entrega del vehículo. El pago se realiza en la oficina o por enlace de pago seguro previo acuerdo.",
  },
  {
    title: "Flota / Modelos",
    body: "Trabajamos con marcas como Renault, Chevrolet, Kia, Toyota y Suzuki. La asignación es por categoría — el modelo concreto está sujeto a disponibilidad.",
  },
  { title: "Multas de tránsito", body: "Las multas generadas durante el período de alquiler son responsabilidad del arrendatario. Se trasladan con el cobro administrativo correspondiente." },
  { title: "Accidentes y hurto", body: "Todos los vehículos cuentan con seguro todo riesgo. En caso de siniestro contacta al WhatsApp 24h y al número de emergencias del contrato." },
  { title: "Requisitos y formas de pago", body: "Cédula vigente, licencia de conducción colombiana o internacional, y tarjeta de crédito a nombre del conductor para garantía. Aceptamos efectivo, débito y crédito." },
  { title: "Combustible y conductor adicional", body: "El vehículo se entrega con tanque lleno y debe devolverse igual. Conductores adicionales con costo extra y registro previo." },
  { title: "Reserva de autos", body: "Puedes reservar online, por WhatsApp o por teléfono. Confirmación en menos de 30 minutos en horario laboral." },
  { title: "Pico y Placa", body: "Te informamos en cada ciudad sobre la restricción de pico y placa y, cuando aplica, ofrecemos vehículos exentos de la restricción." },
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
      <section className="bg-white border-b border-wolf-border/60">
        <div className="max-w-[1170px] mx-auto px-6 py-10 text-center">
          <p className="text-xs text-wolf-text-card uppercase tracking-wider">
            Inicio · Preguntas frecuentes
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-wolf-green mt-2">
            Preguntas frecuentes
          </h1>
          <p className="text-wolf-text text-sm mt-2">
            ¿Cómo podemos ayudarte? Encuentra información útil y resuelve tu duda.
          </p>
          <div className="max-w-xl mx-auto mt-6 relative">
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por palabras clave"
              className="field pr-12"
            />
            <Search
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-wolf-green pointer-events-none"
            />
          </div>
        </div>
      </section>

      <section className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-10 grid md:grid-cols-2 gap-3">
          {filtered.map((t) => (
            <details key={t.title} className="card p-0 group">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 list-none">
                <span className="text-wolf-green font-semibold text-sm">{t.title}</span>
                <ChevronRight
                  size={18}
                  className="text-wolf-green transition-transform group-open:rotate-90"
                />
              </summary>
              <div className="px-5 pb-5 text-sm text-wolf-text border-t border-wolf-border/60 pt-3">
                {t.body}
              </div>
            </details>
          ))}
          {filtered.length === 0 && (
            <p className="md:col-span-2 text-center text-wolf-text py-12">
              Sin resultados. Escríbenos por WhatsApp y resolvemos tu duda en minutos.
            </p>
          )}
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-wolf-green mb-3">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="text-wolf-text mb-6">
            Nuestro equipo está disponible 24h por WhatsApp.
          </p>
          <a
            href="https://wa.me/573028491534?text=Hola%2C%20tengo%20una%20duda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            Hablar con un asesor
          </a>
        </div>
      </section>
    </>
  );
}
