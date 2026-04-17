"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Clock } from "lucide-react";
import { locations } from "@/lib/locations";

interface BookingWidgetProps {
  variant?: "header" | "panel";
}

export default function BookingWidget({ variant = "header" }: BookingWidgetProps) {
  const router = useRouter();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 4);

  const formatDate = (d: Date) => d.toISOString().split("T")[0];

  const [ciudad, setCiudad] = useState("");
  const [fechaRecogida, setFechaRecogida] = useState(formatDate(tomorrow));
  const [horaRecogida, setHoraRecogida] = useState("10:00");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      ciudad,
      recogida: fechaRecogida,
      hora: horaRecogida,
      devolucion: formatDate(dayAfter),
    });
    router.push(`/reservar?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        variant === "panel"
          ? "bg-wolf-green p-5 rounded-md"
          : ""
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px_180px_auto] gap-3 items-center">
        {/* Location */}
        <div className="relative">
          <select
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
            className="field appearance-none pr-12"
            aria-label="Local de retirada"
          >
            <option value="">Informa el local de retirada (ej: Bogotá, Medellín)</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.city}
              </option>
            ))}
          </select>
          <MapPin
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-wolf-green pointer-events-none"
          />
        </div>

        {/* Date */}
        <div className="relative">
          <input
            type="date"
            value={fechaRecogida}
            onChange={(e) => setFechaRecogida(e.target.value)}
            min={formatDate(new Date())}
            required
            className="field pr-12"
            aria-label="Fecha"
          />
          <Calendar
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-wolf-green pointer-events-none"
          />
        </div>

        {/* Hour */}
        <div className="relative">
          <select
            value={horaRecogida}
            onChange={(e) => setHoraRecogida(e.target.value)}
            className="field appearance-none pr-12"
            aria-label="Hora"
          >
            {Array.from({ length: 11 }, (_, i) => 8 + i).map((h) => (
              <option key={h} value={`${h.toString().padStart(2, "0")}:00`}>
                {`${h.toString().padStart(2, "0")}:00`}
              </option>
            ))}
          </select>
          <Clock
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-wolf-green pointer-events-none"
          />
        </div>

        {/* Submit */}
        <button type="submit" className="btn-primary md:w-auto w-full">
          Reservar
        </button>
      </div>
    </form>
  );
}
