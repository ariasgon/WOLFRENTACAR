"use client";

import { useState } from "react";
import { Loader2, MessageCircle } from "lucide-react";
import type { Booking, BookingStatus } from "@/lib/db";
import { formatCOP } from "@/lib/vehicles";

const STATUS_OPTIONS: { value: BookingStatus; label: string }[] = [
  { value: "pending", label: "Por confirmar" },
  { value: "confirmed", label: "Confirmada" },
  { value: "active", label: "En ruta" },
  { value: "completed", label: "Completada" },
  { value: "cancelled", label: "Cancelada" },
];

const STATUS_STYLE: Record<BookingStatus, string> = {
  pending: "bg-wolf-red text-white",
  confirmed: "bg-wolf-blue text-white",
  active: "bg-wolf-dark text-white",
  completed: "bg-wolf-bone text-wolf-dark border border-wolf-border",
  cancelled: "bg-wolf-text-muted text-white",
};

export default function BookingRow({
  booking,
  vehicleName,
}: {
  booking: Booking;
  vehicleName: string;
}) {
  const [status, setStatus] = useState<BookingStatus>(booking.status);
  const [saving, setSaving] = useState(false);

  async function updateStatus(next: BookingStatus) {
    setStatus(next);
    setSaving(true);
    try {
      await fetch(`/api/admin/bookings/${booking.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
    } finally {
      setSaving(false);
    }
  }

  const waMessage =
    `Hola ${booking.customer.nombre}, soy del equipo Wolf Rent a Car. ` +
    `Te escribo por tu reserva ${booking.id} (${vehicleName}, recogida ${booking.recogida}).`;
  const waUrl = `https://wa.me/${booking.customer.telefono.replace(/\D/g, "")}?text=${encodeURIComponent(waMessage)}`;

  return (
    <article className="bg-white border border-wolf-border p-5">
      <header className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-wolf-border pb-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono text-[12px] text-wolf-red font-bold tracking-widest">
            {booking.id}
          </span>
          <span className={`inline-flex px-2 py-1 text-[10px] font-display font-bold uppercase tracking-widest ${STATUS_STYLE[status]}`}>
            {STATUS_OPTIONS.find((o) => o.value === status)?.label}
          </span>
          {saving && <Loader2 size={14} className="animate-spin text-wolf-text-muted" />}
        </div>
        <div className="flex items-center gap-2">
          <select
            value={status}
            onChange={(e) => updateStatus(e.target.value as BookingStatus)}
            className="bg-wolf-bone border border-wolf-border px-2 h-8 text-xs focus:outline-none focus:border-wolf-red"
          >
            {STATUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {booking.customer.telefono && (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-display uppercase tracking-widest bg-wolf-red text-white px-3 h-8 hover:bg-wolf-red-deep transition-colors"
            >
              <MessageCircle size={12} />
              WhatsApp
            </a>
          )}
        </div>
      </header>

      <div className="grid md:grid-cols-4 gap-4 text-sm">
        <div>
          <p className="eyebrow text-wolf-text-muted">Cliente</p>
          <p className="font-semibold mt-1">
            {booking.customer.nombre} {booking.customer.apellido}
          </p>
          <p className="text-xs text-wolf-text-muted">{booking.customer.email}</p>
          <p className="text-xs text-wolf-text-muted">{booking.customer.telefono}</p>
          <p className="text-xs text-wolf-text-muted">CC {booking.customer.cedula}</p>
        </div>
        <div>
          <p className="eyebrow text-wolf-text-muted">Vehículo</p>
          <p className="font-semibold mt-1">{vehicleName}</p>
          <p className="text-xs text-wolf-text-muted mt-1">{booking.ciudad || "—"}</p>
        </div>
        <div>
          <p className="eyebrow text-wolf-text-muted">Fechas</p>
          <p className="font-mono text-xs mt-1">
            {booking.recogida} → {booking.devolucion}
          </p>
          <p className="text-xs text-wolf-text-muted">
            {booking.days} día{booking.days !== 1 ? "s" : ""} · Hora {booking.hora}
          </p>
        </div>
        <div>
          <p className="eyebrow text-wolf-text-muted">Totales</p>
          <p className="font-display font-bold text-wolf-dark text-lg mt-1">
            {formatCOP(booking.total)}
          </p>
          <p className="text-xs text-wolf-text-muted">
            Anticipo 10 %: {formatCOP(booking.advance)}
          </p>
        </div>
      </div>

      {booking.customer.observaciones && (
        <div className="mt-4 bg-wolf-bone border-l-2 border-wolf-red px-4 py-3 text-xs text-wolf-text">
          <strong className="font-display uppercase tracking-widest text-[10px] text-wolf-text-muted">
            Observaciones
          </strong>
          <p className="mt-1">{booking.customer.observaciones}</p>
        </div>
      )}
    </article>
  );
}
