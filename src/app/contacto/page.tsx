"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/573028491534?text=Hola%2C%20quiero%20información%20sobre%20alquiler%20de%20vehículos";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          CONTACTO
        </span>
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6 text-[10px] font-display font-bold tracking-[0.22em] uppercase text-wolf-on-dark/60">
            <Link href="/" className="hover:text-wolf-red transition-colors">
              Inicio
            </Link>
            <span>·</span>
            <span>Contacto</span>
          </div>
          <div className="kicker mb-5">Hablemos</div>
          <h1 className="display-xl text-white">
            Cuéntanos qué <span className="text-wolf-red">necesitas</span>.
          </h1>
          <p className="text-wolf-on-dark/80 text-base md:text-lg max-w-xl mt-6">
            Escríbenos por WhatsApp, llámanos o manda un correo. Te respondemos el mismo día.
          </p>
        </div>
      </section>

      <section className="bg-wolf-bone py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-6">
          <aside className="space-y-4">
            <div className="card-dark corner-brackets p-6">
              <h2 className="kicker kicker-light mb-5">Canales</h2>
              <ul className="space-y-5 text-sm">
                <ContactItem Icon={Phone} title="Teléfono">
                  <a
                    href="tel:+573028491534"
                    className="font-mono text-white hover:text-wolf-red transition-colors"
                  >
                    +57 302 849 1534
                  </a>
                </ContactItem>
                <ContactItem Icon={Mail} title="Email">
                  <a
                    href="mailto:info@wolfrentacarcol.com"
                    className="text-white hover:text-wolf-blue transition-colors break-all"
                  >
                    info@wolfrentacarcol.com
                  </a>
                </ContactItem>
                <ContactItem Icon={MessageCircle} title="WhatsApp">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-white hover:text-wolf-red transition-colors"
                  >
                    +57 302 849 1534
                  </a>
                </ContactItem>
                <ContactItem Icon={Clock} title="Horario">
                  <span className="text-white">Lun – Sáb · 08:00 – 18:00</span>
                </ContactItem>
                <ContactItem Icon={MapPin} title="Ciudades">
                  <span className="text-white">
                    Bogotá, Medellín, Cali, Cartagena, Barranquilla, Pereira
                  </span>
                </ContactItem>
              </ul>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-wolf-red text-white text-center font-display font-bold text-[12px] uppercase tracking-[0.22em] hover:bg-wolf-ink transition-colors"
            >
              <MessageCircle size={22} className="mx-auto mb-2" />
              Chatea con nosotros
              <span className="block mt-1 text-[10px] text-white/80 tracking-[0.28em]">
                WhatsApp 24h
              </span>
            </a>
          </aside>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="card corner-brackets p-10 text-center">
                <div className="w-16 h-16 bg-wolf-red flex items-center justify-center mx-auto mb-5">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="font-display font-black text-wolf-dark text-2xl uppercase tracking-tight mb-2">
                  Mensaje enviado
                </h2>
                <p className="text-wolf-text-muted mb-6">
                  Hemos recibido tu mensaje. Nuestro equipo te responderá pronto.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      nombre: "",
                      email: "",
                      telefono: "",
                      asunto: "",
                      mensaje: "",
                    });
                  }}
                  className="btn-link"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 md:p-10">
                <div className="kicker mb-4">Formulario</div>
                <h2 className="font-display font-black text-wolf-dark text-2xl md:text-3xl uppercase tracking-tight mb-7">
                  Cuéntanos.
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <FormField
                    label="Nombre completo *"
                    value={formData.nombre}
                    onChange={(v) => setFormData({ ...formData, nombre: v })}
                    placeholder="Tu nombre"
                  />
                  <FormField
                    label="Correo electrónico *"
                    type="email"
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                    placeholder="correo@ejemplo.com"
                  />
                  <FormField
                    label="Teléfono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(v) => setFormData({ ...formData, telefono: v })}
                    placeholder="+57 300 000 0000"
                  />
                  <div>
                    <label className="field-label">Asunto *</label>
                    <select
                      required
                      value={formData.asunto}
                      onChange={(e) =>
                        setFormData({ ...formData, asunto: e.target.value })
                      }
                      className="field-light"
                    >
                      <option value="">Seleccionar</option>
                      <option value="cotizacion">Cotización</option>
                      <option value="reserva">Reserva existente</option>
                      <option value="soporte">Soporte</option>
                      <option value="corporativo">Planes corporativos</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="field-label">Mensaje *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    className="field-light h-auto py-3"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send size={16} />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  Icon,
  title,
  children,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-9 h-9 bg-wolf-red flex items-center justify-center shrink-0">
        <Icon size={14} className="text-white" />
      </span>
      <div className="min-w-0">
        <p className="eyebrow text-wolf-on-dark/50 mb-1">{title}</p>
        {children}
      </div>
    </li>
  );
}

function FormField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <input
        type={type}
        required={label.includes("*")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="field-light"
      />
    </div>
  );
}
