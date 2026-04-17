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
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { vehicles, vehicleCategories, formatCOP, Vehicle } from "@/lib/vehicles";
import { locations } from "@/lib/locations";
import BookingWidget from "@/components/BookingWidget";

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
      <section className="relative bg-wolf-dark text-white overflow-hidden bg-noise">
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[radial-gradient(circle,rgba(213,0,38,0.3)_0%,transparent_60%)]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-14 md:py-20">
          <div className="flex items-center gap-3 mb-6 text-[10px] font-display font-bold tracking-[0.22em] uppercase text-wolf-on-dark/60">
            <Link href="/" className="hover:text-wolf-red transition-colors">
              Inicio
            </Link>
            <span>·</span>
            <span>Reservar</span>
          </div>
          <div className="kicker mb-5">Reservar mi carro</div>
          <h1 className="display-lg text-white">
            {ciudad ? (
              <>
                Estos son los carros<br />
                en <span className="text-wolf-red">{cityName}</span>.
              </>
            ) : (
              <>
                ¿Cuándo y para<br />
                dónde <span className="text-wolf-red">vamos</span>?
              </>
            )}
          </h1>
          {recogida && devolucion && (
            <p className="font-mono text-[12px] uppercase tracking-widest text-wolf-on-dark/70 mt-5">
              {recogida} → {devolucion} · {days} día{days !== 1 ? "s" : ""}
            </p>
          )}

          <div className="mt-10">
            <BookingWidget variant="dark" />
          </div>
        </div>
      </section>

      <section className="bg-wolf-bone py-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="eyebrow text-wolf-text-muted mr-2">Filtro:</span>
              <button
                onClick={() => setFilterCategory("all")}
                className={`chip ${filterCategory === "all" ? "chip-active" : ""}`}
              >
                Todos
              </button>
              {vehicleCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setFilterCategory(cat.slug)}
                  className={`chip ${filterCategory === cat.slug ? "chip-active" : ""}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="field-light h-10 text-[12px] font-display font-bold uppercase tracking-wider"
              style={{ width: "auto", minWidth: "240px" }}
            >
              <option value="price-asc">Precio · menor a mayor</option>
              <option value="price-desc">Precio · mayor a menor</option>
              <option value="passengers">Más pasajeros</option>
            </select>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-widest text-wolf-text mb-6 border-b border-wolf-dark pb-3">
            <span className="text-wolf-red font-bold">
              {String(filteredVehicles.length).padStart(2, "0")}
            </span>{" "}
            vehículo{filteredVehicles.length !== 1 ? "s" : ""} disponible
            {filteredVehicles.length !== 1 ? "s" : ""}
          </p>

          <div className="space-y-3">
            {filteredVehicles.map((vehicle, i) => (
              <VehicleRow
                key={vehicle.id}
                vehicle={vehicle}
                days={days}
                ciudad={ciudad}
                recogida={recogida}
                devolucion={devolucion}
                index={i}
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
  index,
}: {
  vehicle: Vehicle;
  days: number;
  ciudad: string;
  recogida: string;
  devolucion: string;
  index: number;
}) {
  const total = vehicle.pricePerDay * days;
  const params = new URLSearchParams();
  params.set("vehiculo", vehicle.id);
  if (ciudad) params.set("ciudad", ciudad);
  if (recogida) params.set("recogida", recogida);
  if (devolucion) params.set("devolucion", devolucion);

  return (
    <article className="group card flex flex-col md:flex-row items-stretch hover:border-wolf-dark transition-colors">
      <div className="w-full md:w-56 h-40 md:h-auto bg-wolf-bone flex items-center justify-center shrink-0 relative overflow-hidden border-b md:border-b-0 md:border-r border-wolf-border">
        <span className="absolute top-2 left-3 font-mono text-[10px] uppercase tracking-widest text-wolf-text-muted">
          /{String(index + 1).padStart(2, "0")}
        </span>
        <svg width="120" height="70" viewBox="0 0 120 70" fill="none" className="opacity-80 transition-transform duration-500 group-hover:translate-x-2">
          <path d="M10 56 Q18 38 42 34 L60 28 Q72 24 84 26 Q96 30 104 44 L110 52 Q110 58 104 58 L10 58 Q4 58 4 54 Z" fill="#1a2029" />
          <path d="M42 30 Q56 24 74 28 Q86 32 94 44 L44 46 Z" fill="#cfd6db" opacity="0.85" />
          <circle cx="30" cy="58" r="8" fill="#0a0c10" />
          <circle cx="86" cy="58" r="8" fill="#0a0c10" />
          <rect x="100" y="44" width="8" height="4" rx="1" fill="#D50026" />
        </svg>
      </div>

      <div className="flex-1 min-w-0 p-5 md:p-6">
        <span className="eyebrow text-wolf-blue">{vehicle.category}</span>
        <h3 className="font-display font-bold text-xl uppercase tracking-tight text-wolf-dark mt-1">
          {vehicle.name}
        </h3>
        <p className="text-xs text-wolf-text-muted font-mono uppercase tracking-wider mt-1">
          {vehicle.brand} · {vehicle.model} · {vehicle.year} · o similar
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
          <Spec Icon={Users} label={`${vehicle.passengers} pax`} />
          <Spec Icon={DoorOpen} label={`${vehicle.doors} puertas`} />
          <Spec Icon={Cog} label={vehicle.transmission} />
          <Spec Icon={Wind} label={vehicle.ac ? "A/C" : "Sin A/C"} />
          <Spec Icon={Briefcase} label={`${vehicle.bags} maletas`} />
          <Spec Icon={Fuel} label={vehicle.fuelType} />
        </div>
      </div>

      <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 shrink-0 border-t md:border-t-0 md:border-l border-wolf-border p-5 md:p-6 md:min-w-[220px] bg-wolf-bone/40">
        <div className="text-left md:text-right">
          <p className="eyebrow text-wolf-text-muted">
            {days} día{days !== 1 ? "s" : ""} · Total
          </p>
          <p className="font-display font-black text-wolf-dark text-2xl md:text-3xl leading-none mt-1">
            {formatCOP(total)}
          </p>
          <p className="font-mono text-[10px] text-wolf-text-muted uppercase tracking-wider mt-1">
            {formatCOP(vehicle.pricePerDay)} / día
          </p>
        </div>
        <Link
          href={`/reservar?${params.toString()}`}
          className="btn-primary h-11 px-5 text-[11px] md:w-full"
        >
          Seleccionar
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

function Spec({
  Icon,
  label,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}) {
  return (
    <span className="flex items-center gap-1.5 text-[12px] text-wolf-text-muted font-mono uppercase tracking-wider">
      <Icon size={13} className="text-wolf-red" />
      {label}
    </span>
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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const total = vehicle.pricePerDay * days;
  const advance = Math.round(total * 0.1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vehicleId: vehicle.id,
          ciudad,
          recogida,
          devolucion,
          hora: "10:00",
          customer: formData,
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.ok) {
        setSubmitError(
          json?.error === "vehicle-not-available"
            ? "Ese carro ya no está disponible. Prueba con otro."
            : "No pudimos guardar tu reserva. Inténtalo de nuevo o escríbenos por WhatsApp."
        );
        setSubmitting(false);
        return;
      }
      setBookingId(json.booking.id);
      setSubmitted(true);
    } catch {
      setSubmitError("No pudimos guardar tu reserva. Revisa tu conexión.");
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-wolf-bone py-16">
        <div className="max-w-2xl mx-auto px-4 lg:px-8">
          <div className="card corner-brackets p-10 text-center">
            <div className="w-16 h-16 bg-wolf-red flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={28} strokeWidth={2.5} className="text-white" />
            </div>
            <div className="kicker mb-4 justify-center">Confirmación</div>
            <h2 className="font-display font-bold text-wolf-dark text-3xl tracking-tight mb-3">
              ¡Listo! Te confirmamos pronto.
            </h2>
            <p className="text-wolf-text-muted mb-2">
              Ya tenemos tu reserva. Te escribimos por WhatsApp para confirmar los detalles.
            </p>
            {bookingId && (
              <p className="font-mono text-[12px] text-wolf-red uppercase tracking-widest mb-5">
                Reserva #{bookingId}
              </p>
            )}

            <div className="bg-wolf-bone border border-wolf-dark p-5 text-left mb-7 space-y-1.5 text-sm text-wolf-text">
              <ReceiptRow k="Vehículo" v={vehicle.name} />
              {ciudad && <ReceiptRow k="Ciudad" v={ciudad} />}
              {recogida && <ReceiptRow k="Recogida" v={recogida} />}
              {devolucion && <ReceiptRow k="Devolución" v={devolucion} />}
              <ReceiptRow k="Días" v={`${days}`} />
              <ReceiptRow k="Total estimado" v={formatCOP(total)} />
              <ReceiptRow k="Anticipo sugerido (10 %)" v={formatCOP(advance)} />
              <ReceiptRow k="Nombre" v={`${formData.nombre} ${formData.apellido}`} />
              <ReceiptRow k="Teléfono" v={formData.telefono} />
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
              <Link href="/" className="btn-ghost">
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
      <section className="relative bg-wolf-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-[radial-gradient(circle,rgba(213,0,38,0.25)_0%,transparent_60%)]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
          <Link
            href="/reservar"
            className="text-wolf-on-dark/80 text-sm inline-flex items-center gap-2 mb-4 hover:text-wolf-red transition-colors font-display font-bold uppercase tracking-widest text-[11px]"
          >
            <ArrowLeft size={14} /> Volver a resultados
          </Link>
          <div className="kicker mb-3">Paso 2 · Datos del conductor</div>
          <h1 className="display-md text-white">
            Reservar <span className="text-wolf-red">{vehicle.name}</span>
          </h1>
        </div>
      </section>

      <section className="bg-wolf-bone py-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card p-8 md:p-10 space-y-6">
              <div>
                <div className="kicker mb-3">01 · Identidad</div>
                <h2 className="font-display font-bold text-wolf-dark text-xl uppercase tracking-tight border-b border-wolf-border pb-4">
                  Datos del conductor
                </h2>
              </div>
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
                <label className="field-label">Observaciones</label>
                <textarea
                  rows={3}
                  value={formData.observaciones}
                  onChange={(e) =>
                    setFormData({ ...formData, observaciones: e.target.value })
                  }
                  className="field-light h-auto py-3"
                  placeholder="Hora de recogida, lugar específico, etc."
                />
              </div>

              <div className="border-l-2 border-wolf-red pl-4 py-1 text-sm text-wolf-text-muted">
                <strong className="text-wolf-dark">Así funciona:</strong> dejas los datos, te
                escribimos para confirmar la disponibilidad y, si todo cuadra, te pedimos un
                anticipo del 10 % para apartar el carro. El resto lo pagas cuando te lo
                entregamos.
              </div>

              {submitError && (
                <div className="bg-wolf-red/10 border border-wolf-red px-4 py-3 text-sm text-wolf-red">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? "Guardando…" : "Confirmar mi reserva"}
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

          <div>
            <div className="card-dark corner-brackets p-7 sticky top-8">
              <div className="kicker kicker-light mb-4">Resumen</div>
              <div className="pb-5 mb-5 border-b border-wolf-hairline">
                <p className="font-display font-bold text-white text-xl uppercase tracking-tight">
                  {vehicle.name}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-wolf-on-dark/60 mt-1">
                  {vehicle.category} · {vehicle.transmission}
                </p>
              </div>

              <div className="space-y-3 text-sm text-wolf-on-dark/80 mb-6">
                {ciudad && (
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-wolf-red" />
                    <span>{ciudad}</span>
                  </div>
                )}
                {recogida && (
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-wolf-red" />
                    <span className="font-mono text-xs">Recogida · {recogida}</span>
                  </div>
                )}
                {devolucion && (
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-wolf-blue" />
                    <span className="font-mono text-xs">Devolución · {devolucion}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-wolf-hairline pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-wolf-on-dark/80">
                  <span>Tarifa diaria</span>
                  <span className="font-mono">{formatCOP(vehicle.pricePerDay)}</span>
                </div>
                <div className="flex justify-between text-wolf-on-dark/80">
                  <span>Días</span>
                  <span className="font-mono">{days}</span>
                </div>
                <div className="flex justify-between items-baseline border-t border-wolf-hairline pt-3 mt-3">
                  <span className="eyebrow text-wolf-on-dark/60">Total est.</span>
                  <span className="font-display font-black text-white text-2xl">
                    {formatCOP(total)}
                  </span>
                </div>
              </div>

              <p className="text-[10px] text-wolf-on-dark/50 mt-5 font-mono uppercase tracking-widest">
                * No incluye combustible · Seguro básico incluido
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ReceiptRow({ k, v }: { k: string; v: string }) {
  return (
    <p className="flex justify-between gap-3">
      <span className="font-display font-bold uppercase text-[10px] tracking-widest text-wolf-text-muted pt-1">
        {k}
      </span>
      <span className="text-right">{v}</span>
    </p>
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
      <label className="field-label">{label}</label>
      <input
        type={type}
        required={label.includes("*")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="field-light"
        placeholder={placeholder}
      />
    </div>
  );
}

export default function ReservarPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] bg-wolf-dark flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin h-10 w-10 border-2 border-wolf-red border-t-transparent mx-auto"></div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-white">
              Cargando…
            </p>
          </div>
        </div>
      }
    >
      <ReservarContent />
    </Suspense>
  );
}
