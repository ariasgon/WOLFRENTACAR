"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import VehicleCard from "@/components/VehicleCard";
import BookingWidget from "@/components/BookingWidget";
import { vehicles, vehicleCategories } from "@/lib/vehicles";

export default function FlotaPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredVehicles =
    activeCategory === "all"
      ? vehicles
      : vehicles.filter((v) => v.categorySlug === activeCategory);

  return (
    <>
      {/* Editorial header */}
      <section className="relative bg-wolf-dark text-white overflow-hidden bg-noise">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[radial-gradient(circle,rgba(213,0,38,0.3)_0%,transparent_60%)]" />
        </div>
        <span
          aria-hidden="true"
          className="absolute -left-4 bottom-[-40%] font-display font-black leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(180px, 22vw, 340px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(233,230,223,0.06)",
          }}
        >
          FLOTA
        </span>
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6 text-[10px] font-display font-bold tracking-[0.22em] uppercase text-wolf-on-dark/60">
            <Link href="/" className="hover:text-wolf-red transition-colors">
              Inicio
            </Link>
            <span>·</span>
            <span>Flota</span>
          </div>
          <div className="kicker mb-5">Nuestra flota · 8 carros</div>
          <h1 className="display-xl text-white">
            Escoge el que <span className="text-wolf-red">va contigo</span>.
          </h1>
          <p className="text-wolf-on-dark/80 text-base md:text-lg max-w-xl mt-6">
            Desde un sedán urbano para moverte por la ciudad hasta una SUV 4×4 o una van para 15.
            Todos con seguro incluido y mantenimiento al día.
          </p>

          <div className="mt-10">
            <BookingWidget variant="dark" />
          </div>
        </div>
      </section>

      <section className="bg-wolf-bone py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          {/* Filter chips */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="eyebrow text-wolf-text-muted mr-2">Filtrar:</span>
            <button
              onClick={() => setActiveCategory("all")}
              className={`chip ${activeCategory === "all" ? "chip-active" : ""}`}
            >
              Todos ({vehicles.length})
            </button>
            {vehicleCategories.map((cat) => {
              const count = vehicles.filter((v) => v.categorySlug === cat.slug).length;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`chip ${activeCategory === cat.slug ? "chip-active" : ""}`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex items-baseline justify-between mb-6 border-b border-wolf-dark/80 pb-3">
            <p className="font-mono text-[12px] uppercase tracking-wider text-wolf-text">
              <span className="text-wolf-red font-bold">
                {String(filteredVehicles.length).padStart(2, "0")}
              </span>{" "}
              vehículo{filteredVehicles.length !== 1 ? "s" : ""} disponible
              {filteredVehicles.length !== 1 ? "s" : ""}
            </p>
            <Link href="/reservar" className="btn-ghost-blue text-wolf-dark">
              Cotizar rápido
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredVehicles.map((vehicle, i) => (
              <div
                key={vehicle.id}
                className={`animate-fade-in-up stagger-${Math.min(i + 1, 8)}`}
              >
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-20 border border-dashed border-wolf-border">
              <p className="font-display text-xl uppercase text-wolf-dark">
                Sin vehículos en esta categoría
              </p>
              <p className="text-wolf-text-muted text-sm mt-2">
                Prueba otra categoría o contáctanos.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
