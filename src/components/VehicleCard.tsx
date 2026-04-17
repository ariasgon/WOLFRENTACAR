import Link from "next/link";
import { Users, Cog, Fuel, Briefcase } from "lucide-react";
import { Vehicle, formatCOP } from "@/lib/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
  searchParams?: string;
}

// Inline minimalist car silhouette — substitute for stock car cutout image.
function CarSilhouette({ category }: { category: string }) {
  const tone = category.toLowerCase().includes("van")
    ? "#7e7e7e"
    : category.toLowerCase().includes("premium")
    ? "#3a3a3a"
    : category.toLowerCase().includes("suv")
    ? "#5a5a5a"
    : "#7a7a7a";
  return (
    <svg viewBox="0 0 220 110" className="w-full h-full" aria-hidden="true">
      <ellipse cx="110" cy="100" rx="95" ry="6" fill="#000" opacity="0.08" />
      <path
        d="M28 78 Q40 50 80 46 L150 46 Q180 50 195 70 L200 80 Q200 88 192 88 L28 88 Q20 88 20 80 Z"
        fill={tone}
      />
      <path
        d="M82 50 Q88 42 100 42 L138 42 Q150 44 158 56 L150 60 L86 60 Z"
        fill="#cfd6db"
        opacity="0.85"
      />
      <circle cx="62" cy="88" r="14" fill="#1a1a1a" />
      <circle cx="62" cy="88" r="6" fill="#666" />
      <circle cx="160" cy="88" r="14" fill="#1a1a1a" />
      <circle cx="160" cy="88" r="6" fill="#666" />
      <rect x="148" y="70" width="14" height="6" rx="1.5" fill="#78DE1F" />
    </svg>
  );
}

export default function VehicleCard({ vehicle, searchParams }: VehicleCardProps) {
  const reserveLink = searchParams
    ? `/reservar?vehiculo=${vehicle.id}&${searchParams}`
    : `/reservar?vehiculo=${vehicle.id}`;
  const detailLink = `/flota/${vehicle.id}`;

  return (
    <article className="card flex flex-col h-full">
      <div className="px-5 pt-5 pb-2">
        <p className="text-wolf-green-accent text-[10px] uppercase font-bold tracking-widest">
          {vehicle.category}
        </p>
        <h3 className="text-wolf-green font-bold text-sm md:text-base uppercase leading-tight mt-1 break-words">
          {vehicle.name}
        </h3>
        <p className="text-wolf-text-card text-xs mt-1.5 leading-relaxed">
          {vehicle.brand} {vehicle.model} {vehicle.year} o similar.
        </p>
      </div>

      <div className="px-5 my-3 h-[120px]">
        <CarSilhouette category={vehicle.category} />
      </div>

      <div className="px-5 py-2 grid grid-cols-4 gap-2 text-[11px] text-wolf-text-card">
        <div className="flex flex-col items-center gap-1">
          <Users size={16} className="text-wolf-green" />
          <span>{vehicle.passengers} pax</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Briefcase size={16} className="text-wolf-green" />
          <span>{vehicle.bags} bolsos</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Cog size={16} className="text-wolf-green" />
          <span>{vehicle.transmission === "Automática" ? "Auto" : "Mec"}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Fuel size={16} className="text-wolf-green" />
          <span>{vehicle.fuelType === "Gasolina" ? "Gas" : "Diésel"}</span>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-wolf-border/60">
        <p className="text-[11px] text-wolf-text-card">Desde</p>
        <p className="text-wolf-green text-xl font-bold leading-none">
          {formatCOP(vehicle.pricePerDay)}
          <span className="text-wolf-text-card text-[11px] font-normal ml-1">/ día</span>
        </p>
      </div>

      <div className="px-5 pb-5 pt-1 mt-auto flex flex-col items-center gap-2">
        <Link href={reserveLink} className="btn-primary w-full">
          Reservar ahora
        </Link>
        <Link href={detailLink} className="btn-link">
          Mostrar detalles
        </Link>
      </div>
    </article>
  );
}
