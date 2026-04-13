"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MapPin, Calendar, Users, Cog, Wind, Briefcase, Fuel, DoorOpen, ChevronRight, ArrowLeft } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import { vehicles, vehicleCategories, formatCOP, Vehicle } from "@/lib/vehicles";
import { locations } from "@/lib/locations";

function ReservarContent() {
  const searchParams = useSearchParams();
  const vehiculoId = searchParams.get("vehiculo");
  const ciudad = searchParams.get("ciudad") || "";
  const recogida = searchParams.get("recogida") || "";
  const devolucion = searchParams.get("devolucion") || "";

  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("price-asc");

  // If a specific vehicle is selected, show the reservation form
  const selectedVehicle = vehiculoId ? vehicles.find((v) => v.id === vehiculoId) : null;

  const filteredVehicles = useMemo(() => {
    let result = vehicles.filter((v) => v.available);
    if (filterCategory !== "all") {
      result = result.filter((v) => v.categorySlug === filterCategory);
    }
    if (sortBy === "price-asc") result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    if (sortBy === "price-desc") result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    if (sortBy === "passengers") result.sort((a, b) => b.passengers - a.passengers);
    return result;
  }, [filterCategory, sortBy]);

  const days = useMemo(() => {
    if (recogida && devolucion) {
      const d1 = new Date(recogida);
      const d2 = new Date(devolucion);
      const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
      return diff > 0 ? diff : 1;
    }
    return 1;
  }, [recogida, devolucion]);

  const cityName = ciudad ? locations.find((l) => l.id === ciudad)?.city || ciudad : "";

  if (selectedVehicle) {
    return <ReservationForm vehicle={selectedVehicle} ciudad={cityName} recogida={recogida} devolucion={devolucion} days={days} />;
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-wolf-dark py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-heading">
            {ciudad ? (
              <>Vehículos disponibles en <span className="text-wolf-red">{cityName}</span></>
            ) : (
              <>Buscar <span className="text-wolf-red">Vehículos</span></>
            )}
          </h1>
          {recogida && devolucion && (
            <p className="mt-2 text-gray-400">
              {recogida} al {devolucion} ({days} día{days !== 1 ? "s" : ""})
            </p>
          )}
        </div>
      </section>

      <section className="py-8 bg-wolf-light">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search widget */}
          <div className="mb-8">
            <BookingWidget variant="inline" />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterCategory("all")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  filterCategory === "all"
                    ? "bg-wolf-red text-white"
                    : "bg-white text-wolf-text border border-gray-200 hover:border-wolf-red"
                }`}
              >
                Todos
              </button>
              {vehicleCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setFilterCategory(cat.slug)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                    filterCategory === cat.slug
                      ? "bg-wolf-red text-white"
                      : "bg-white text-wolf-text border border-gray-200 hover:border-wolf-red"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm bg-white"
            >
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="passengers">Más pasajeros</option>
            </select>
          </div>

          <p className="text-sm text-wolf-text-light mb-4">
            {filteredVehicles.length} vehículo{filteredVehicles.length !== 1 ? "s" : ""} disponible{filteredVehicles.length !== 1 ? "s" : ""}
          </p>

          {/* Results */}
          <div className="space-y-4">
            {filteredVehicles.map((vehicle) => (
              <VehicleRow key={vehicle.id} vehicle={vehicle} days={days} ciudad={ciudad} recogida={recogida} devolucion={devolucion} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function VehicleRow({ vehicle, days, ciudad, recogida, devolucion }: { vehicle: Vehicle; days: number; ciudad: string; recogida: string; devolucion: string }) {
  const total = vehicle.pricePerDay * days;
  const params = new URLSearchParams();
  params.set("vehiculo", vehicle.id);
  if (ciudad) params.set("ciudad", ciudad);
  if (recogida) params.set("recogida", recogida);
  if (devolucion) params.set("devolucion", devolucion);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 border border-gray-100">
      {/* Vehicle image placeholder */}
      <div className="w-full md:w-52 h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shrink-0">
        <div className="text-center">
          <svg width="60" height="40" viewBox="0 0 80 50" fill="none" className="mx-auto mb-1 opacity-40">
            <rect x="15" y="15" width="50" height="22" rx="8" fill="#11161C"/>
            <rect x="5" y="25" width="70" height="14" rx="5" fill="#11161C"/>
            <circle cx="22" cy="42" r="6" fill="#333"/>
            <circle cx="58" cy="42" r="6" fill="#333"/>
          </svg>
          <p className="text-xs text-gray-400">{vehicle.category}</p>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-wolf-blue uppercase tracking-wider">{vehicle.category}</span>
            <h3 className="text-xl font-bold text-wolf-dark">{vehicle.name}</h3>
            <p className="text-sm text-wolf-text-light">{vehicle.brand} {vehicle.model} {vehicle.year} o similar</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-3">
          <span className="flex items-center gap-1 text-sm text-wolf-text-light"><Users size={15} className="text-wolf-blue" /> {vehicle.passengers} pasajeros</span>
          <span className="flex items-center gap-1 text-sm text-wolf-text-light"><DoorOpen size={15} className="text-wolf-blue" /> {vehicle.doors} puertas</span>
          <span className="flex items-center gap-1 text-sm text-wolf-text-light"><Cog size={15} className="text-wolf-blue" /> {vehicle.transmission}</span>
          <span className="flex items-center gap-1 text-sm text-wolf-text-light"><Wind size={15} className="text-wolf-blue" /> {vehicle.ac ? "A/C" : "Sin A/C"}</span>
          <span className="flex items-center gap-1 text-sm text-wolf-text-light"><Briefcase size={15} className="text-wolf-blue" /> {vehicle.bags} maletas</span>
          <span className="flex items-center gap-1 text-sm text-wolf-text-light"><Fuel size={15} className="text-wolf-blue" /> {vehicle.fuelType}</span>
        </div>
      </div>

      {/* Price and CTA */}
      <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2 shrink-0 border-t md:border-t-0 md:border-l border-gray-100 pt-3 md:pt-0 md:pl-6">
        <div className="text-right">
          <p className="text-xs text-wolf-text-light">{days} día{days !== 1 ? "s" : ""}</p>
          <p className="text-2xl font-bold text-wolf-red">{formatCOP(total)}</p>
          <p className="text-xs text-wolf-text-light">{formatCOP(vehicle.pricePerDay)} / día</p>
        </div>
        <Link
          href={`/reservar?${params.toString()}`}
          className="bg-wolf-red hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-1"
        >
          Seleccionar <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}

function ReservationForm({ vehicle, ciudad, recogida, devolucion, days }: { vehicle: Vehicle; ciudad: string; recogida: string; devolucion: string; days: number }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    cedula: "",
    observaciones: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const total = vehicle.pricePerDay * days;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="bg-wolf-dark py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-white font-heading">Reserva Confirmada</h1>
          </div>
        </section>
        <section className="py-12 bg-wolf-light">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-wolf-dark mb-2">¡Reserva exitosa!</h2>
              <p className="text-wolf-text-light mb-6">
                Tu solicitud de reserva ha sido recibida. Nuestro equipo se pondrá en contacto contigo pronto para confirmar los detalles.
              </p>

              <div className="bg-wolf-light rounded-lg p-4 text-left mb-6 space-y-2 text-sm">
                <p><strong>Vehículo:</strong> {vehicle.name}</p>
                {ciudad && <p><strong>Ciudad:</strong> {ciudad}</p>}
                {recogida && <p><strong>Recogida:</strong> {recogida}</p>}
                {devolucion && <p><strong>Devolución:</strong> {devolucion}</p>}
                <p><strong>Días:</strong> {days}</p>
                <p><strong>Total estimado:</strong> {formatCOP(total)}</p>
                <p><strong>Nombre:</strong> {formData.nombre} {formData.apellido}</p>
                <p><strong>Teléfono:</strong> {formData.telefono}</p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={`https://wa.me/573028491534?text=${encodeURIComponent(
                    `Hola, acabo de hacer una reserva:\nVehículo: ${vehicle.name}\nCiudad: ${ciudad}\nFechas: ${recogida} al ${devolucion}\nNombre: ${formData.nombre} ${formData.apellido}\nTeléfono: ${formData.telefono}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm inline-flex items-center gap-2 transition-colors"
                >
                  Confirmar por WhatsApp
                </a>
                <Link href="/" className="border border-gray-300 text-wolf-text hover:bg-gray-50 px-6 py-2.5 rounded-lg font-bold text-sm transition-colors">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-wolf-dark py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/reservar" className="text-gray-400 hover:text-white text-sm inline-flex items-center gap-1 mb-4 transition-colors">
            <ArrowLeft size={16} /> Volver a resultados
          </Link>
          <h1 className="text-3xl font-bold text-white font-heading">
            Reservar <span className="text-wolf-red">{vehicle.name}</span>
          </h1>
        </div>
      </section>

      <section className="py-8 bg-wolf-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-6">
                <h2 className="text-xl font-bold text-wolf-dark border-b pb-3">Datos del conductor</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-wolf-text mb-1">Nombre *</label>
                    <input type="text" required value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-wolf-text mb-1">Apellido *</label>
                    <input type="text" required value={formData.apellido} onChange={(e) => setFormData({ ...formData, apellido: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue" placeholder="Tu apellido" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-wolf-text mb-1">Correo electrónico *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue" placeholder="correo@ejemplo.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-wolf-text mb-1">Teléfono / WhatsApp *</label>
                    <input type="tel" required value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue" placeholder="+57 300 000 0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-wolf-text mb-1">Cédula / Pasaporte *</label>
                    <input type="text" required value={formData.cedula} onChange={(e) => setFormData({ ...formData, cedula: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue" placeholder="Número de documento" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-wolf-text mb-1">Observaciones</label>
                  <textarea rows={3} value={formData.observaciones} onChange={(e) => setFormData({ ...formData, observaciones: e.target.value })} className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-wolf-blue" placeholder="Hora de recogida, lugar específico, etc." />
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                  <strong>Nota:</strong> El pago se realiza al momento de la entrega del vehículo. Esta reserva asegura tu disponibilidad. Nuestro equipo te contactará para confirmar.
                </div>

                <button
                  type="submit"
                  className="w-full bg-wolf-red hover:bg-red-700 text-white py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors"
                >
                  Confirmar Reserva
                </button>
              </form>
            </div>

            {/* Summary sidebar */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-32">
                <h3 className="font-bold text-wolf-dark text-lg mb-4">Resumen de Reserva</h3>

                <div className="bg-wolf-light rounded-lg p-3 mb-4">
                  <p className="font-bold text-wolf-dark">{vehicle.name}</p>
                  <p className="text-sm text-wolf-text-light">{vehicle.category} | {vehicle.transmission}</p>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  {ciudad && (
                    <div className="flex items-center gap-2">
                      <MapPin size={15} className="text-wolf-blue" />
                      <span>{ciudad}</span>
                    </div>
                  )}
                  {recogida && (
                    <div className="flex items-center gap-2">
                      <Calendar size={15} className="text-wolf-blue" />
                      <span>Recogida: {recogida}</span>
                    </div>
                  )}
                  {devolucion && (
                    <div className="flex items-center gap-2">
                      <Calendar size={15} className="text-wolf-blue" />
                      <span>Devolución: {devolucion}</span>
                    </div>
                  )}
                </div>

                <div className="border-t pt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-wolf-text-light">Tarifa diaria</span>
                    <span className="font-semibold">{formatCOP(vehicle.pricePerDay)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-wolf-text-light">Días</span>
                    <span className="font-semibold">{days}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                    <span className="text-wolf-dark">Total estimado</span>
                    <span className="text-wolf-red">{formatCOP(total)}</span>
                  </div>
                </div>

                <p className="text-xs text-wolf-text-light mt-3">
                  * Precio no incluye combustible. Seguro básico incluido. Extras sujetos a disponibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ReservarPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-wolf-light flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wolf-red mx-auto"></div>
          <p className="mt-4 text-wolf-text-light">Cargando...</p>
        </div>
      </div>
    }>
      <ReservarContent />
    </Suspense>
  );
}
