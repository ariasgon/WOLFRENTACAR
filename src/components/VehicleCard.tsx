import Link from "next/link";
import { Users, DoorOpen, Fuel, Cog, Wind, Briefcase } from "lucide-react";
import { Vehicle, formatCOP } from "@/lib/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
  searchParams?: string;
}

export default function VehicleCard({ vehicle, searchParams }: VehicleCardProps) {
  const reserveLink = searchParams
    ? `/reservar?vehiculo=${vehicle.id}&${searchParams}`
    : `/reservar?vehiculo=${vehicle.id}`;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
      {/* Vehicle image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className="mx-auto mb-2 opacity-40">
            <rect x="15" y="15" width="50" height="22" rx="8" fill="#11161C"/>
            <rect x="5" y="25" width="70" height="14" rx="5" fill="#11161C"/>
            <circle cx="22" cy="42" r="6" fill="#333"/>
            <circle cx="58" cy="42" r="6" fill="#333"/>
            <circle cx="22" cy="42" r="3" fill="#666"/>
            <circle cx="58" cy="42" r="3" fill="#666"/>
            <rect x="48" y="18" width="12" height="8" rx="2" fill="#2176AE" opacity="0.5"/>
            <rect x="22" y="18" width="20" height="8" rx="2" fill="#2176AE" opacity="0.3"/>
          </svg>
          <p className="text-sm text-gray-400 font-medium">{vehicle.category}</p>
        </div>
        <span className="absolute top-3 left-3 bg-wolf-red text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase">
          {vehicle.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-wolf-dark">{vehicle.name}</h3>
        <p className="text-sm text-wolf-text-light mb-3">{vehicle.brand} {vehicle.model} {vehicle.year} o similar</p>

        {/* Features grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-sm text-wolf-text-light">
            <Users size={16} className="text-wolf-blue" />
            <span>{vehicle.passengers}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-wolf-text-light">
            <DoorOpen size={16} className="text-wolf-blue" />
            <span>{vehicle.doors}P</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-wolf-text-light">
            <Briefcase size={16} className="text-wolf-blue" />
            <span>{vehicle.bags}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-wolf-text-light">
            <Cog size={16} className="text-wolf-blue" />
            <span>{vehicle.transmission === "Automática" ? "Auto" : "Manual"}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-wolf-text-light">
            <Wind size={16} className="text-wolf-blue" />
            <span>{vehicle.ac ? "A/C" : "—"}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-wolf-text-light">
            <Fuel size={16} className="text-wolf-blue" />
            <span>{vehicle.fuelType === "Gasolina" ? "Gas" : "Diésel"}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-wolf-text-light">Desde</p>
              <p className="text-2xl font-bold text-wolf-red">{formatCOP(vehicle.pricePerDay)}</p>
              <p className="text-xs text-wolf-text-light">por día</p>
            </div>
            <Link
              href={reserveLink}
              className="bg-wolf-red hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors"
            >
              Reservar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
