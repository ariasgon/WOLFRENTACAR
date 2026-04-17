import { listFleet } from "@/lib/db";
import { formatCOP } from "@/lib/vehicles";
import FleetRow from "./FleetRow";

export const dynamic = "force-dynamic";

export default async function AdminFleetPage() {
  const fleet = await listFleet();

  return (
    <main className="max-w-[1400px] mx-auto px-4 lg:px-6 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="eyebrow text-wolf-text-muted">Flota</p>
          <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-wolf-dark">
            Administra tus carros
          </h1>
          <p className="text-wolf-text-muted text-sm mt-2 max-w-xl">
            Activa o apaga la disponibilidad, cambia el precio o pega una URL de foto — los
            cambios se aplican en el sitio público inmediatamente.
          </p>
        </div>
        <p className="text-[12px] font-mono uppercase tracking-widest text-wolf-text-muted">
          {fleet.length} carros en la flota
        </p>
      </div>

      <div className="bg-white border border-wolf-border">
        <header className="hidden md:grid grid-cols-[1fr_120px_120px_120px_140px] gap-4 px-5 py-3 border-b border-wolf-border text-[11px] font-mono uppercase tracking-widest text-wolf-text-muted">
          <span>Vehículo</span>
          <span>Categoría</span>
          <span>Precio día</span>
          <span>Disponible</span>
          <span>Imagen</span>
        </header>
        <ul>
          {fleet.map((v) => (
            <FleetRow
              key={v.id}
              id={v.id}
              name={v.name}
              brand={v.brand}
              category={v.category}
              pricePerDay={v.pricePerDay}
              available={v.available}
              imageUrl={v.imageUrl}
              priceLabel={formatCOP(v.pricePerDay)}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
