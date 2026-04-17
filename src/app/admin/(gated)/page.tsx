import Link from "next/link";
import { ArrowUpRight, Car, Calendar, TrendingUp } from "lucide-react";
import { listBookings, listFleet } from "@/lib/db";
import { formatCOP } from "@/lib/vehicles";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [bookings, fleet] = await Promise.all([listBookings(), listFleet()]);

  const pending = bookings.filter((b) => b.status === "pending").length;
  const active = bookings.filter((b) => b.status === "active").length;
  const unavailable = fleet.filter((v) => v.available === false).length;
  const totalRevenue = bookings
    .filter((b) => b.status === "completed" || b.status === "active")
    .reduce((sum, b) => sum + b.total, 0);

  const recent = bookings.slice(0, 6);

  return (
    <main className="max-w-[1400px] mx-auto px-4 lg:px-6 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="eyebrow text-wolf-text-muted">Panel</p>
          <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-wolf-dark">
            Hola, ¿qué sigue hoy?
          </h1>
        </div>
        <div className="text-right text-[12px] font-mono uppercase tracking-widest text-wolf-text-muted">
          {new Date().toLocaleDateString("es-CO", {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard
          label="Reservas nuevas"
          value={String(pending).padStart(2, "0")}
          Icon={Calendar}
          href="/admin/bookings?status=pending"
          accent="red"
        />
        <StatCard
          label="Activas en carretera"
          value={String(active).padStart(2, "0")}
          Icon={Car}
          href="/admin/bookings?status=active"
          accent="blue"
        />
        <StatCard
          label="Carros no disponibles"
          value={String(unavailable).padStart(2, "0")}
          Icon={Car}
          href="/admin/fleet"
          accent="dark"
        />
        <StatCard
          label="Ingresos mes"
          value={formatCOP(totalRevenue).replace("$", "$")}
          Icon={TrendingUp}
          href="/admin/bookings"
          accent="dark"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-wolf-border">
          <header className="flex items-center justify-between px-5 py-3 border-b border-wolf-border">
            <p className="eyebrow text-wolf-text-muted">Reservas recientes</p>
            <Link
              href="/admin/bookings"
              className="text-[11px] font-mono uppercase tracking-widest text-wolf-red hover:underline flex items-center gap-1"
            >
              Ver todas <ArrowUpRight size={12} />
            </Link>
          </header>
          {recent.length === 0 ? (
            <p className="p-8 text-center text-wolf-text-muted text-sm">
              Aún no hay reservas. Cuando alguien haga una reserva, aparecerá aquí.
            </p>
          ) : (
            <ul>
              {recent.map((b) => {
                const v = fleet.find((f) => f.id === b.vehicleId);
                return (
                  <li key={b.id} className="flex items-center gap-4 px-5 py-3 border-b border-wolf-border last:border-b-0 text-sm">
                    <span className="font-mono text-[11px] text-wolf-red w-28 shrink-0">
                      {b.id}
                    </span>
                    <span className="flex-1 truncate">
                      <strong>{b.customer.nombre} {b.customer.apellido}</strong>
                      <span className="text-wolf-text-muted"> · {v?.name ?? b.vehicleId}</span>
                    </span>
                    <span className="text-[11px] font-mono uppercase text-wolf-text-muted shrink-0">
                      {b.recogida}
                    </span>
                    <StatusBadge status={b.status} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="bg-wolf-dark text-white p-6 corner-brackets">
          <p className="eyebrow text-wolf-red">Tips</p>
          <h2 className="font-display font-bold text-xl mt-2 mb-4">Así se usa este panel</h2>
          <ul className="space-y-3 text-sm text-wolf-on-dark/80">
            <li>• Entra a <strong>Reservas</strong> para confirmar, marcar activa o completar.</li>
            <li>• En <strong>Flota</strong> activas o apagas la disponibilidad de cada carro.</li>
            <li>• Las reservas nuevas llegan como <em>pending</em>. Confírmalas primero.</li>
            <li>• Cuando entregues el carro, márcalo como <em>active</em>.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  Icon,
  href,
  accent,
}: {
  label: string;
  value: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  accent: "red" | "blue" | "dark";
}) {
  const accentClass =
    accent === "red"
      ? "text-wolf-red"
      : accent === "blue"
      ? "text-wolf-blue"
      : "text-wolf-dark";
  return (
    <Link
      href={href}
      className="bg-white border border-wolf-border p-5 hover:border-wolf-red transition-colors group"
    >
      <div className="flex items-start justify-between">
        <p className="eyebrow text-wolf-text-muted">{label}</p>
        <Icon size={16} className={accentClass} />
      </div>
      <p className="font-display font-extrabold text-wolf-dark text-3xl mt-3 leading-none group-hover:text-wolf-red transition-colors">
        {value}
      </p>
    </Link>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    pending: "bg-wolf-red text-white",
    confirmed: "bg-wolf-blue text-white",
    active: "bg-wolf-dark text-white",
    completed: "bg-wolf-bone text-wolf-dark border border-wolf-border",
    cancelled: "bg-wolf-text-muted text-white",
  };
  const label: Record<string, string> = {
    pending: "Por confirmar",
    confirmed: "Confirmada",
    active: "En ruta",
    completed: "Completada",
    cancelled: "Cancelada",
  };
  return (
    <span
      className={`inline-flex px-2 py-1 text-[10px] font-display font-bold uppercase tracking-widest shrink-0 ${
        map[status] ?? "bg-wolf-dark text-white"
      }`}
    >
      {label[status] ?? status}
    </span>
  );
}
