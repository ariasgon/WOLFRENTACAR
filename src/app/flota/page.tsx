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
      {/* Page Header */}
      <section className="bg-wolf-dark py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">
            Nuestra <span className="text-wolf-red">Flota</span>
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Vehículos para cada necesidad. Desde compactos económicos hasta SUVs premium. Todos con seguro y mantenimiento al día.
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-12 bg-wolf-light">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
                activeCategory === "all"
                  ? "bg-wolf-red text-white"
                  : "bg-white text-wolf-text border border-gray-200 hover:border-wolf-red hover:text-wolf-red"
              }`}
            >
              Todos
            </button>
            {vehicleCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat.slug
                    ? "bg-wolf-red text-white"
                    : "bg-white text-wolf-text border border-gray-200 hover:border-wolf-red hover:text-wolf-red"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-wolf-text-light mb-6">
            {filteredVehicles.length} vehículo{filteredVehicles.length !== 1 ? "s" : ""} disponible{filteredVehicles.length !== 1 ? "s" : ""}
          </p>

          {/* Vehicle grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-wolf-text-light text-lg">
                No hay vehículos disponibles en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
