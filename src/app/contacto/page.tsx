"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

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
      {/* Header */}
      <section className="bg-wolf-dark py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">
            <span className="text-wolf-red">Contacto</span>
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      <section className="py-12 bg-wolf-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-wolf-dark mb-4">Información de Contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-wolf-red/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-wolf-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-wolf-dark text-sm">Teléfono</p>
                      <a href="tel:+573028491534" className="text-wolf-text-light text-sm hover:text-wolf-red transition-colors">
                        +57 302 849 1534
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-wolf-blue/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-wolf-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-wolf-dark text-sm">Correo</p>
                      <a href="mailto:info@wolfrentacarcol.com" className="text-wolf-text-light text-sm hover:text-wolf-blue transition-colors">
                        info@wolfrentacarcol.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#22c55e">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-wolf-dark text-sm">WhatsApp</p>
                      <a
                        href="https://wa.me/573028491534?text=Hola%2C%20quiero%20información%20sobre%20alquiler%20de%20vehículos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-wolf-text-light text-sm hover:text-green-600 transition-colors"
                      >
                        +57 302 849 1534
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-wolf-red/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-wolf-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-wolf-dark text-sm">Horario</p>
                      <p className="text-wolf-text-light text-sm">Lun - Sáb: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-wolf-blue/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-wolf-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-wolf-dark text-sm">Ciudades</p>
                      <p className="text-wolf-text-light text-sm">Bogotá, Medellín, Cali, Cartagena, Barranquilla, Pereira</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-wolf-dark mb-3">Síguenos</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/wolfrentacarcol/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/p/Wolf-Rent-a-Car-Colombia-100069930636889/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick WhatsApp CTA */}
              <a
                href="https://wa.me/573028491534?text=Hola%2C%20quiero%20información%20sobre%20alquiler%20de%20vehículos"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white p-5 rounded-xl text-center font-bold transition-colors"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chatea con nosotros por WhatsApp
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-wolf-dark mb-2">¡Mensaje enviado!</h2>
                  <p className="text-wolf-text-light mb-6">
                    Hemos recibido tu mensaje. Nuestro equipo te responderá pronto.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" }); }}
                    className="text-wolf-red hover:text-red-700 font-bold text-sm uppercase tracking-wider"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                  <h2 className="text-xl font-bold text-wolf-dark mb-6">Envíanos un mensaje</h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-wolf-text mb-1">Nombre completo *</label>
                      <input type="text" required value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-wolf-text mb-1">Correo electrónico *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue" placeholder="correo@ejemplo.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-wolf-text mb-1">Teléfono</label>
                      <input type="tel" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue" placeholder="+57 300 000 0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-wolf-text mb-1">Asunto *</label>
                      <select required value={formData.asunto} onChange={(e) => setFormData({ ...formData, asunto: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue bg-white">
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
                    <label className="block text-sm font-semibold text-wolf-text mb-1">Mensaje *</label>
                    <textarea rows={5} required value={formData.mensaje} onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue" placeholder="Cuéntanos cómo podemos ayudarte..." />
                  </div>
                  <button type="submit" className="w-full bg-wolf-red hover:bg-red-700 text-white py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors flex items-center justify-center gap-2">
                    <Send size={18} />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
