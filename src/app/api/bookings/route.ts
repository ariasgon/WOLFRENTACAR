import { NextResponse } from "next/server";
import { createBooking, listFleet } from "@/lib/db";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ ok: false, error: "bad-body" }, { status: 400 });
  }

  const vehicleId = String(body.vehicleId ?? "");
  const ciudad = String(body.ciudad ?? "");
  const recogida = String(body.recogida ?? "");
  const devolucion = String(body.devolucion ?? "");
  const hora = String(body.hora ?? "10:00");
  const customer = (body.customer ?? {}) as Record<string, string>;

  // Minimal validation — client-side forms also enforce required fields.
  if (!vehicleId || !recogida || !devolucion || !customer.nombre || !customer.email) {
    return NextResponse.json(
      { ok: false, error: "missing-fields" },
      { status: 400 }
    );
  }

  const fleet = await listFleet();
  const vehicle = fleet.find((v) => v.id === vehicleId);
  if (!vehicle) {
    return NextResponse.json({ ok: false, error: "vehicle-not-found" }, { status: 404 });
  }
  if (vehicle.available === false) {
    return NextResponse.json({ ok: false, error: "vehicle-not-available" }, { status: 409 });
  }

  const d1 = new Date(recogida);
  const d2 = new Date(devolucion);
  const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
  const days = diff > 0 ? diff : 1;
  const total = vehicle.pricePerDay * days;
  const advance = Math.round(total * 0.1);

  const booking = await createBooking({
    vehicleId,
    ciudad,
    recogida,
    devolucion,
    hora,
    days,
    pricePerDay: vehicle.pricePerDay,
    total,
    advance,
    customer: {
      nombre: customer.nombre ?? "",
      apellido: customer.apellido ?? "",
      email: customer.email ?? "",
      telefono: customer.telefono ?? "",
      cedula: customer.cedula ?? "",
      observaciones: customer.observaciones ?? "",
    },
  });

  return NextResponse.json({ ok: true, booking });
}
