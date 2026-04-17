"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { locations } from "@/lib/locations";

interface BookingWidgetProps {
  /** visual variant — "dark" renders on dark bg, "light" on light bg */
  variant?: "dark" | "light";
}

export default function BookingWidget({ variant = "dark" }: BookingWidgetProps) {
  const router = useRouter();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 4);

  const formatDate = (d: Date) => d.toISOString().split("T")[0];

  const [ciudad, setCiudad] = useState("");
  const [fechaRecogida, setFechaRecogida] = useState(formatDate(tomorrow));
  const [horaRecogida, setHoraRecogida] = useState("10:00");
  const [fechaDevolucion, setFechaDevolucion] = useState(formatDate(dayAfter));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      ciudad,
      recogida: fechaRecogida,
      hora: horaRecogida,
      devolucion: fechaDevolucion,
    });
    router.push(`/reservar?${params.toString()}`);
  };

  const fieldClass = variant === "light" ? "field-light" : "field";
  const labelClass =
    variant === "light"
      ? "field-label"
      : "field-label field-label-dark";

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div
        className={`relative grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_0.9fr_auto] gap-0 ${
          variant === "light"
            ? "bg-white border border-wolf-border"
            : "bg-wolf-ink border border-wolf-hairline"
        }`}
      >
        {/* Ciudad */}
        <div className="relative px-5 pt-4 pb-3 md:border-r border-b md:border-b-0 border-wolf-hairline">
          <label htmlFor="bw-ciudad" className={labelClass}>
            Ciudad · Punto de recogida
          </label>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-wolf-red shrink-0" />
            <select
              id="bw-ciudad"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              required
              className={`${fieldClass} h-9 border-0 bg-transparent px-0 shadow-none focus:shadow-none`}
              aria-label="Ciudad de recogida"
            >
              <option value="">Selecciona ciudad</option>
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Fecha recogida */}
        <div className="relative px-5 pt-4 pb-3 md:border-r border-b md:border-b-0 border-wolf-hairline">
          <label htmlFor="bw-rec" className={labelClass}>
            Recogida
          </label>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-wolf-red shrink-0" />
            <input
              id="bw-rec"
              type="date"
              value={fechaRecogida}
              onChange={(e) => setFechaRecogida(e.target.value)}
              min={formatDate(new Date())}
              required
              className={`${fieldClass} h-9 border-0 bg-transparent px-0 shadow-none focus:shadow-none`}
              aria-label="Fecha de recogida"
            />
          </div>
        </div>

        {/* Fecha devolución */}
        <div className="relative px-5 pt-4 pb-3 md:border-r border-b md:border-b-0 border-wolf-hairline">
          <label htmlFor="bw-dev" className={labelClass}>
            Devolución
          </label>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-wolf-blue shrink-0" />
            <input
              id="bw-dev"
              type="date"
              value={fechaDevolucion}
              onChange={(e) => setFechaDevolucion(e.target.value)}
              min={fechaRecogida}
              required
              className={`${fieldClass} h-9 border-0 bg-transparent px-0 shadow-none focus:shadow-none`}
              aria-label="Fecha de devolución"
            />
          </div>
        </div>

        {/* Hora */}
        <div className="relative px-5 pt-4 pb-3 md:border-r border-b md:border-b-0 border-wolf-hairline">
          <label htmlFor="bw-hora" className={labelClass}>
            Hora
          </label>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-wolf-blue shrink-0" />
            <select
              id="bw-hora"
              value={horaRecogida}
              onChange={(e) => setHoraRecogida(e.target.value)}
              className={`${fieldClass} h-9 border-0 bg-transparent px-0 shadow-none focus:shadow-none`}
              aria-label="Hora de recogida"
            >
              {Array.from({ length: 11 }, (_, i) => 8 + i).map((h) => (
                <option key={h} value={`${h.toString().padStart(2, "0")}:00`}>
                  {`${h.toString().padStart(2, "0")}:00`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-wolf-red text-white font-display font-bold text-[12px] uppercase tracking-[0.18em] h-[76px] md:h-auto px-7 flex items-center justify-center gap-3 hover:bg-wolf-ink transition-colors group"
        >
          <span>Buscar</span>
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Corner brackets decoration */}
      <span className="hidden md:block absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-wolf-red" />
      <span className="hidden md:block absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-wolf-red" />
    </form>
  );
}
