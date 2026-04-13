"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Search } from "lucide-react";
import { locations } from "@/lib/locations";

interface BookingWidgetProps {
  variant?: "hero" | "inline" | "sidebar";
}

export default function BookingWidget({ variant = "hero" }: BookingWidgetProps) {
  const router = useRouter();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 4);

  const formatDate = (d: Date) => d.toISOString().split("T")[0];

  const [ciudad, setCiudad] = useState("");
  const [fechaRecogida, setFechaRecogida] = useState(formatDate(tomorrow));
  const [fechaDevolucion, setFechaDevolucion] = useState(formatDate(dayAfter));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      ciudad,
      recogida: fechaRecogida,
      devolucion: fechaDevolucion,
    });
    router.push(`/reservar?${params.toString()}`);
  };

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isHero
          ? "bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8"
          : variant === "sidebar"
          ? "bg-white rounded-xl shadow-lg p-5"
          : "bg-wolf-light rounded-xl p-5"
      }`}
    >
      {isHero && (
        <h2 className="text-xl md:text-2xl font-bold text-wolf-dark mb-5 font-heading">
          Reserva tu vehículo
        </h2>
      )}

      <div
        className={`grid gap-4 ${
          isHero ? "md:grid-cols-4" : "grid-cols-1"
        }`}
      >
        {/* City */}
        <div>
          <label className="block text-sm font-semibold text-wolf-text mb-1.5">
            <MapPin size={14} className="inline mr-1 text-wolf-blue" />
            Ciudad de recogida
          </label>
          <select
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-wolf-text text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue focus:border-transparent"
          >
            <option value="">Seleccionar ciudad</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.city}
              </option>
            ))}
          </select>
        </div>

        {/* Pickup date */}
        <div>
          <label className="block text-sm font-semibold text-wolf-text mb-1.5">
            <Calendar size={14} className="inline mr-1 text-wolf-blue" />
            Fecha de recogida
          </label>
          <input
            type="date"
            value={fechaRecogida}
            onChange={(e) => setFechaRecogida(e.target.value)}
            min={formatDate(new Date())}
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-wolf-text text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue focus:border-transparent"
          />
        </div>

        {/* Return date */}
        <div>
          <label className="block text-sm font-semibold text-wolf-text mb-1.5">
            <Calendar size={14} className="inline mr-1 text-wolf-blue" />
            Fecha de devolución
          </label>
          <input
            type="date"
            value={fechaDevolucion}
            onChange={(e) => setFechaDevolucion(e.target.value)}
            min={fechaRecogida}
            required
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-wolf-text text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue focus:border-transparent"
          />
        </div>

        {/* Submit */}
        <div className={isHero ? "flex items-end" : ""}>
          <button
            type="submit"
            className="w-full bg-wolf-red hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors flex items-center justify-center gap-2"
          >
            <Search size={18} />
            Buscar Vehículos
          </button>
        </div>
      </div>
    </form>
  );
}
