"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Users,
  Cog,
  Wind,
  Briefcase,
  Fuel,
  DoorOpen,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
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
    return (
      <ReservationForm
        vehicle={selectedVehicle}
        ciudad={cityName}
        recogida={recogida}
        devolucion={devolucion}
        days={days}
      />
    );
  }

  return (
    <>
      <section className="bg-white border-b border-wolf-border/60">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          <p className="text-xs text-wolf-text-card uppercase tracking-wider">
            Inicio · Reservar
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-wolf-green mt-2">
            {ciudad ? `Vehículos disponibles en ${cityName}` : "Buscar vehículos"}
          </h1>
          {recogida && devolucion && (
            <p className="text-sm text-wolf-text mt-2">
              {recogida} al {devolucion} ({days} día{days !== 1 ? "s" : ""})
            </p>
          )}
        </div>
      </section>

      <section className="bg-wolf-soft">
        <div className="max-w-[1170px] mx-auto px-6 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterCategory("all")}
                className={`px-4 h-9 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${
                  filterCategory === "all"
                    ? "bg-wolf-green text-white"
                    : "bg-white text-wolf-green border border-wolf-green"
                }`}
              >
                Todos
              </button>
              {vehicleCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setFilterCategory(cat.slug)}
                  className={`px-4 h-9 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${
                    filterCategory === cat.slug
                      ? "bg-wolf-green text-white"
                      : "bg-white text-wolf-green border border-wolf-green"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 h-9 rounded-md border border-wolf-border text-sm bg-white text-wolf-text"
            >
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="passengers">Más pasajeros</option>
            </select>
          </div>

          <p className="text-sm text-wolf-text-card mb-4">
            {filteredVehicles.length} vehículo{filteredVehicles.length !== 1 ? "s" : ""} disponible{filteredVehicles.length !== 1 ? "s" : ""}
          </p>

          <div className="space-y-4">
            {filteredVehicles.map((vehicle) => (
              <VehicleRow
                key={vehicle.id}
                vehicle={vehicle}
                days={days}
                ciudad={ciudad}
                recogida={recogida}
                devolucion={devolucion}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function VehicleRow({
  vehicle,
  days,
  ciudad,
  recogida,
  devolucion,
}: {
  vehicle: Vehicle;
  days: number;
  ciudad: string;
  recogida: string;
  devolucion: string;
}) {
  const total = vehicle.pricePerDay * days;
  const params = new URLSearchParams();
  params.set("vehiculo", vehicle.id);
  if (ciudad) params.set("ciudad", ciudad);
  if (recogida) params.set("recogida", recogida);
  if (devolucion) params.set("devolucion", devolucion);

  return (
    <div className="card p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6">
      <div className="w-full md:w-52 h-36 bg-wolf-soft rounded-md flex items-center justify-center shrink-0">
        <div className="text-center">
          <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className="mx-auto mb-1 opacity-60">
            <rect x="15" y="15" width="50" height="22" rx="8" fill="#01602A" />
            <rect x="5" y="25" width="70" height="14" rx="5" fill="#01602A" />
            <circle cx="22" cy="42" r="6" fill="#1a1a1a" />
            <circle cx="58" cy="42" r="6" fill="#1a1a1a" />
            <rect x="48" y="18" width="12" height="8" rx="2" fill="#78DE1F" opacity="0.6" />
          </svg>
          <p className="text-xs text-wolf-text-card">{vehicle.category}</p>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <span className="text-[11px] font-bold text-wolf-green uppercase tracking-wide">
          {vehicle.category}
        </span>
        <h3 className="text-lg font-bold text-wolf-green">{vehicle.name}</h3>
        <p className="text-sm text-wolf-text-card">
          {vehicle.brand} {vehicle.model} {vehicle.year} o similar
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
          <span className="flex items-center gap-1 text-sm text-wolf-text-card">
            <Users size={15} className="text-wolf-green" /> {vehicle.passengers} pasajeros
          </span>
          <span className="flex items-center gap-1 text-sm text-wolf-text-card">
            <DoorOpen size={15} className="text-wolf-green" /> {vehicle.doors} puertas
          </span>
          <span className="flex items-center gap-1 text-sm text-wolf-text-card">
            <Cog size={15} className="text-wolf-green" /> {vehicle.transmission}
          </span>
          <span className="flex items-center gap-1 text-sm text-wolf-text-card">
            <Wind size={15} className="text-wolf-green" /> {vehicle.ac ? "A/C" : "Sin A/C"}
          </span>
          <span className="flex items-center gap-1 text-sm text-wolf-text-card">
            <Briefcase size={15} className="text-wolf-green" /> {vehicle.bags} maletas
          </span>
          <span className="flex items-center gap-1 text-sm text-wolf-text-card">
            <Fuel size={15} className="text-wolf-green" /> {vehicle.fuelType}
          </span>
        </div>
      </div>

      <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2 shrink-0 border-t md:border-t-0 md:border-l border-wolf-border/60 pt-3 md:pt-0 md:pl-6">
        <div className="text-right">
          <p className="text-xs text-wolf-text-card">{days} día{days !== 1 ? "s" : ""}</p>
          <p className="text-2xl font-bold text-wolf-green">{formatCOP(total)}</p>
          <p className="text-xs text-wolf-text-card">{formatCOP(vehicle.pricePerDay)} / día</p>
        </div>
        <Link href={`/reservar?${params.toString()}`} className="btn-primary">
          Seleccionar <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}

function ReservationForm({
  vehicle,
  ciudad,
  recogida,
  devolucion,
  days,
}: {
  vehicle: Vehicle;
  ciudad: string;
  recogida: string;
  devolucion: string;
  days: number;
}) {
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
      <section className="bg-wolf-soft">
        <div className="max-w-2xl mx-auto px-6 py-12">
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-wolf-green-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#004521"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-wolf-green mb-2">¡Reserva exitosa!</h2>
            <p className="text-wolf-text mb-6">
              Tu solicitud fue recibida. Te contactaremos pronto para confirmar.
            </p>

            <div className="bg-wolf-soft rounded-md p-4 text-left mb-6 space-y-2 text-sm text-wolf-text">
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
                className="btn-primary"
              >
                Confirmar por WhatsApp
              </a>
              <Link href="/" className="btn-secondary">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-white border-b border-wolf-border/60">
        <div className="max-w-[1170px] mx-auto px-6 py-8">
          <Link
            href="/reservar"
            className="text-wolf-green text-sm inline-flex items-center gap-1 mb-3 hover:underline"
          >
            <ArrowLeft size={16} /> Volver a resultados
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-wolf-green">
            Reservar {vehicle.name}
          </h1>
        </div>
      </section>

      <section className="bg-wolf-soft py-10">
        <div className="max-w-[1170px] mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card p-6 space-y-6">
              <h2 className="text-lg font-bold text-wolf-green border-b border-wolf-border pb-3">
                Datos del conductor
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Nombre *"
                  value={formData.nombre}
                  onChange={(v) => setFormData({ ...formData, nombre: v })}
                  placeholder="Tu nombre"
                />
                <Field
                  label="Apellido *"
                  value={formData.apellido}
                  onChange={(v) => setFormData({ ...formData, apellido: v })}
                  placeholder="Tu apellido"
                />
                <Field
                  label="Correo electrónico *"
                  type="email"
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                  placeholder="correo@ejemplo.com"
                />
                <Field
                  label="Teléfono / WhatsApp *"
                  type="tel"
                  value={formData.telefono}
                  onChange={(v) => setFormData({ ...formData, telefono: v })}
                  placeholder="+57 300 000 0000"
                />
                <Field
                  label="Cédula / Pasaporte *"
                  value={formData.cedula}
                  onChange={(v) => setFormData({ ...formData, cedula: v })}
                  placeholder="Número de documento"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-wolf-text mb-1">
                  Observaciones
                </label>
                <textarea
                  rows={3}
                  value={formData.observaciones}
                  onChange={(e) =>
                    setFormData({ ...formData, observaciones: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-md border border-wolf-border text-sm focus:outline-none focus:ring-2 focus:ring-wolf-green-accent"
                  placeholder="Hora de recogida, lugar específico, etc."
                />
              </div>

              <div className="bg-wolf-soft border border-wolf-border rounded-md p-4 text-sm text-wolf-text">
                <strong>Nota:</strong> El pago se realiza al momento de la entrega del vehículo. Esta reserva asegura tu disponibilidad. Nuestro equipo te contactará para confirmar.
              </div>

              <button type="submit" className="btn-primary w-full">
                Confirmar reserva
              </button>
            </form>
          </div>

          <div>
            <div className="card p-6 sticky top-8">
              <h3 className="font-bold text-wolf-green text-base mb-4">Resumen de reserva</h3>

              <div className="bg-wolf-soft rounded-md p-3 mb-4">
                <p className="font-bold text-wolf-green">{vehicle.name}</p>
                <p className="text-sm text-wolf-text-card">
                  {vehicle.category} | {vehicle.transmission}
                </p>
              </div>

              <div className="space-y-2 text-sm text-wolf-text mb-4">
                {ciudad && (
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-wolf-green" />
                    <span>{ciudad}</span>
                  </div>
                )}
                {recogida && (
                  <div className="flex items-center gap-2">
                    <Calendar size={15} className="text-wolf-green" />
                    <span>Recogida: {recogida}</span>
                  </div>
                )}
                {devolucion && (
                  <div className="flex items-center gap-2">
                    <Calendar size={15} className="text-wolf-green" />
                    <span>Devolución: {devolucion}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-wolf-border pt-3 space-y-2 text-sm">
                <div className="flex justify-between text-wolf-text">
                  <span>Tarifa diaria</span>
                  <span className="font-semibold">{formatCOP(vehicle.pricePerDay)}</span>
                </div>
                <div className="flex justify-between text-wolf-text">
                  <span>Días</span>
                  <span className="font-semibold">{days}</span>
                </div>
                <div className="flex justify-between text-base font-bold border-t border-wolf-border pt-2 mt-2">
                  <span className="text-wolf-text">Total estimado</span>
                  <span className="text-wolf-green">{formatCOP(total)}</span>
                </div>
              </div>

              <p className="text-xs text-wolf-text-card mt-3">
                * Precio no incluye combustible. Seguro básico incluido. Extras sujetos a disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-wolf-text mb-1">{label}</label>
      <input
        type={type}
        required={label.includes("*")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 rounded-md border border-wolf-border text-sm focus:outline-none focus:ring-2 focus:ring-wolf-green-accent"
        placeholder={placeholder}
      />
    </div>
  );
}

export default function ReservarPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-wolf-soft flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wolf-green mx-auto"></div>
            <p className="mt-4 text-wolf-text">Cargando...</p>
          </div>
        </div>
      }
    >
      <ReservarContent />
    </Suspense>
  );
}
