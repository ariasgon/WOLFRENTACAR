"use client";

import { useState } from "react";
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
      <section className="bg-white border-b border-wolf-border/60">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          <p className="text-xs text-wolf-text-card uppercase tracking-wider">
            Inicio · Contacto
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-wolf-green mt-2">
            Envíanos tu mensaje
          </h1>
          <p className="text-wolf-text text-sm mt-2 max-w-2xl">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      <section className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="text-lg font-bold text-wolf-green mb-4">
                Información de contacto
              </h2>
              <ul className="space-y-4 text-sm">
                <ContactItem Icon={Phone} title="Teléfono">
                  <a
                    href="tel:+573028491534"
                    className="text-wolf-text hover:text-wolf-green transition-colors"
                  >
                    +57 302 849 1534
                  </a>
                </ContactItem>
                <ContactItem Icon={Mail} title="Correo">
                  <a
                    href="mailto:info@wolfrentacarcol.com"
                    className="text-wolf-text hover:text-wolf-green transition-colors"
                  >
                    info@wolfrentacarcol.com
                  </a>
                </ContactItem>
                <ContactItem Icon={MessageCircle} title="WhatsApp">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wolf-text hover:text-wolf-green transition-colors"
                  >
                    +57 302 849 1534
                  </a>
                </ContactItem>
                <ContactItem Icon={Clock} title="Horario">
                  <span className="text-wolf-text">Lun - Sáb: 8:00 AM - 6:00 PM</span>
                </ContactItem>
                <ContactItem Icon={MapPin} title="Ciudades">
                  <span className="text-wolf-text">
                    Bogotá, Medellín, Cali, Cartagena, Barranquilla, Pereira
                  </span>
                </ContactItem>
              </ul>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card block p-5 text-center bg-wolf-green text-white"
            >
              <MessageCircle size={28} className="mx-auto mb-2 text-wolf-green-accent" />
              <span className="font-bold">Chatea con nosotros por WhatsApp</span>
            </a>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-wolf-green-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#004521"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-wolf-green mb-2">¡Mensaje enviado!</h2>
                <p className="text-wolf-text mb-6">
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
              <form onSubmit={handleSubmit} className="card p-6 md:p-8">
                <h2 className="text-lg font-bold text-wolf-green mb-6">
                  Envíanos un mensaje
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
                    <label className="block text-sm font-semibold text-wolf-text mb-1">
                      Asunto *
                    </label>
                    <select
                      required
                      value={formData.asunto}
                      onChange={(e) =>
                        setFormData({ ...formData, asunto: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-md border border-wolf-border text-sm focus:outline-none focus:ring-2 focus:ring-wolf-green-accent bg-white"
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
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-wolf-text mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    className="w-full px-3 py-2.5 rounded-md border border-wolf-border text-sm focus:outline-none focus:ring-2 focus:ring-wolf-green-accent"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send size={18} />
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
      <span className="w-9 h-9 rounded-full bg-wolf-green-accent flex items-center justify-center shrink-0">
        <Icon size={16} className="text-wolf-green-cta-text" />
      </span>
      <div>
        <p className="font-semibold text-wolf-green">{title}</p>
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
      <label className="block text-sm font-semibold text-wolf-text mb-1">{label}</label>
      <input
        type={type}
        required={label.includes("*")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 rounded-md border border-wolf-border text-sm focus:outline-none focus:ring-2 focus:ring-wolf-green-accent"
      />
    </div>
  );
}
