import Link from "next/link";
import { Users, Cog, Fuel, Briefcase, ArrowRight } from "lucide-react";
import { Vehicle, formatCOP } from "@/lib/vehicles";
import VehicleImage from "@/components/VehicleImage";

interface VehicleCardProps {
  vehicle: Vehicle;
  searchParams?: string;
}

export default function VehicleCard({ vehicle, searchParams }: VehicleCardProps) {
  const reserveLink = searchParams
    ? `/reservar?vehiculo=${vehicle.id}&${searchParams}`
    : `/reservar?vehiculo=${vehicle.id}`;

  const specs = [
    { Icon: Users, label: "Pax", value: `${vehicle.passengers}` },
    { Icon: Briefcase, label: "Eqp", value: `${vehicle.bags}` },
    { Icon: Cog, label: "Trans", value: vehicle.transmission === "Automática" ? "AT" : "MT" },
    { Icon: Fuel, label: "Fuel", value: vehicle.fuelType === "Gasolina" ? "GAS" : "DSL" },
  ];

  return (
    <article className="vehicle-card flex flex-col h-full group">
      <div className="flex items-center justify-between px-5 pt-5">
        <span className="eyebrow text-wolf-blue">{vehicle.category}</span>
        <span className="vehicle-plate">
          {vehicle.brand.slice(0, 3).toUpperCase()}·{String(vehicle.year).slice(-2)}
        </span>
      </div>

      <div className="px-5 pt-3">
        <h3 className="font-display font-bold text-wolf-dark text-lg leading-[1.05] tracking-tight break-words">
          {vehicle.name}
        </h3>
        <p className="text-[11px] text-wolf-text-muted mt-1.5 font-mono uppercase tracking-wider">
          {vehicle.model} · {vehicle.year} · o similar
        </p>
      </div>

      <div className="relative mt-3 mx-3 h-[150px] bg-wolf-bone overflow-hidden">
        <VehicleImage
          imageUrl={vehicle.imageUrl}
          category={vehicle.category}
          alt={`${vehicle.brand} ${vehicle.model}`}
          vehicleId={vehicle.id}
        />
      </div>

      <div className="mx-3 mt-3 border-y border-wolf-border grid grid-cols-4">
        {specs.map(({ Icon, label, value }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center py-2.5 ${
              i < specs.length - 1 ? "border-r border-wolf-border" : ""
            }`}
          >
            <Icon size={14} className="text-wolf-text-muted" />
            <span className="spec-value mt-1">{value}</span>
            <span className="spec-label mt-0.5">{label}</span>
          </div>
        ))}
      </div>

      <div className="px-5 pt-4 pb-2">
        <p className="eyebrow text-wolf-text-muted">Desde · COP</p>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="font-display font-extrabold text-[28px] leading-none text-wolf-dark">
            {formatCOP(vehicle.pricePerDay).replace(/\s*COP\s*/i, "").trim()}
          </span>
          <span className="font-mono text-[11px] text-wolf-text-muted uppercase tracking-wider">
            / día
          </span>
        </div>
      </div>

      <div className="p-3 mt-auto">
        <Link href={reserveLink} className="btn-primary w-full h-11 text-[11px]">
          Reservar este carro
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
