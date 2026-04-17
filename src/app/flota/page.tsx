"use client";

import { useState } from "react";
import VehicleCard from "@/components/VehicleCard";
import { vehicles, vehicleCategories } from "@/lib/vehicles";

export default function FlotaPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredVehicles =
    activeCategory === "all"
      ? vehicles
      : vehicles.filter((v) => v.categorySlug === activeCategory);

  return (
    <>
      <section className="bg-white border-b border-wolf-border/60">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          <p className="text-xs text-wolf-text-card uppercase tracking-wider">
            Inicio · Categorías de vehículos
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-wolf-green mt-2">
            Categorías de vehículos
          </h1>
          <p className="text-wolf-text text-sm mt-2 max-w-2xl">
            Vehículos para cada necesidad. Compactos económicos hasta SUVs premium. Todos con seguro y mantenimiento al día.
          </p>
        </div>
      </section>

      <section className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 h-9 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${
                activeCategory === "all"
                  ? "bg-wolf-green text-white"
                  : "bg-white text-wolf-green border border-wolf-green hover:bg-wolf-green hover:text-white"
              }`}
            >
              Todos
            </button>
            {vehicleCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 h-9 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeCategory === cat.slug
                    ? "bg-wolf-green text-white"
                    : "bg-white text-wolf-green border border-wolf-green hover:bg-wolf-green hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <p className="text-sm text-wolf-text-card mb-6">
            {filteredVehicles.length} vehículo{filteredVehicles.length !== 1 ? "s" : ""} disponible{filteredVehicles.length !== 1 ? "s" : ""}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-wolf-text-card text-base">
                No hay vehículos disponibles en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
