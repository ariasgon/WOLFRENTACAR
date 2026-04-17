import { listBookings, listFleet } from "@/lib/db";
import BookingRow from "./BookingRow";

export const dynamic = "force-dynamic";

export default async function AdminBookingsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const sp = await searchParams;
  const status = sp.status;
  const [bookings, fleet] = await Promise.all([listBookings(), listFleet()]);
  const filtered = status ? bookings.filter((b) => b.status === status) : bookings;

  return (
    <main className="max-w-[1400px] mx-auto px-4 lg:px-6 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="eyebrow text-wolf-text-muted">Reservas</p>
          <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-wolf-dark">
            {status ? `Reservas · ${status}` : "Todas las reservas"}
          </h1>
        </div>
        <p className="text-[12px] font-mono uppercase tracking-widest text-wolf-text-muted">
          {filtered.length} {filtered.length === 1 ? "reserva" : "reservas"}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-wolf-border p-10 text-center text-wolf-text-muted text-sm">
          No hay reservas por aquí. Cuando alguien reserve, verás todo en este listado.
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((b) => {
            const v = fleet.find((f) => f.id === b.vehicleId);
            return <BookingRow key={b.id} booking={b} vehicleName={v?.name ?? b.vehicleId} />;
          })}
        </div>
      )}
    </main>
  );
}
