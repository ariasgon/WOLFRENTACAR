import { promises as fs } from "node:fs";
import path from "node:path";
import { vehicles as seedVehicles, Vehicle } from "@/lib/vehicles";

const DATA_DIR = path.join(process.cwd(), "data");
const BOOKINGS_PATH = path.join(DATA_DIR, "bookings.json");
const OVERRIDES_PATH = path.join(DATA_DIR, "fleet-overrides.json");

export type BookingStatus =
  | "pending"    // just submitted, not confirmed
  | "confirmed"  // we confirmed, advance paid or pending
  | "active"     // vehicle handed over
  | "completed"  // vehicle returned
  | "cancelled"; // cancelled by either party

export interface Booking {
  id: string;              // wlf-{yymmdd}-{random4}
  vehicleId: string;
  ciudad: string;
  recogida: string;        // yyyy-mm-dd
  devolucion: string;      // yyyy-mm-dd
  hora: string;            // hh:mm
  days: number;
  pricePerDay: number;
  total: number;
  advance: number;         // 10 % of total
  customer: {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    cedula: string;
    observaciones?: string;
  };
  status: BookingStatus;
  notes?: string;
  createdAt: string;       // ISO
  updatedAt: string;       // ISO
}

export interface FleetOverride {
  available?: boolean;
  imageUrl?: string;
  pricePerDay?: number;
  notes?: string;
}

async function ensureFile(p: string, fallback: string) {
  try {
    await fs.access(p);
  } catch {
    await fs.mkdir(path.dirname(p), { recursive: true });
    await fs.writeFile(p, fallback, "utf8");
  }
}

async function readJSON<T>(p: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(p, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJSON(p: string, data: unknown) {
  await ensureFile(p, "null");
  await fs.writeFile(p, JSON.stringify(data, null, 2), "utf8");
}

/* ---------- Bookings ---------- */

export async function listBookings(): Promise<Booking[]> {
  await ensureFile(BOOKINGS_PATH, "[]");
  const rows = await readJSON<Booking[]>(BOOKINGS_PATH, []);
  return rows.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getBooking(id: string): Promise<Booking | undefined> {
  const all = await listBookings();
  return all.find((b) => b.id === id);
}

export async function createBooking(
  input: Omit<Booking, "id" | "status" | "createdAt" | "updatedAt">
): Promise<Booking> {
  const all = await listBookings();
  const now = new Date().toISOString();
  const id = generateBookingId();
  const booking: Booking = {
    ...input,
    id,
    status: "pending",
    createdAt: now,
    updatedAt: now,
  };
  const next = [booking, ...all];
  await writeJSON(BOOKINGS_PATH, next);
  return booking;
}

export async function updateBooking(
  id: string,
  patch: Partial<Omit<Booking, "id" | "createdAt">>
): Promise<Booking | undefined> {
  const all = await listBookings();
  const idx = all.findIndex((b) => b.id === id);
  if (idx === -1) return undefined;
  const updated: Booking = {
    ...all[idx],
    ...patch,
    id: all[idx].id,
    createdAt: all[idx].createdAt,
    updatedAt: new Date().toISOString(),
  };
  all[idx] = updated;
  await writeJSON(BOOKINGS_PATH, all);
  return updated;
}

function generateBookingId() {
  const d = new Date();
  const ymd =
    d.getFullYear().toString().slice(2) +
    String(d.getMonth() + 1).padStart(2, "0") +
    String(d.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `WLF-${ymd}-${rand}`;
}

/* ---------- Fleet (seed + runtime overrides) ---------- */

export async function listOverrides(): Promise<Record<string, FleetOverride>> {
  await ensureFile(OVERRIDES_PATH, "{}");
  return readJSON<Record<string, FleetOverride>>(OVERRIDES_PATH, {});
}

export async function setOverride(
  vehicleId: string,
  patch: FleetOverride
): Promise<FleetOverride> {
  const all = await listOverrides();
  const next = { ...(all[vehicleId] ?? {}), ...patch };
  // Clean empties
  (Object.keys(next) as (keyof FleetOverride)[]).forEach((k) => {
    if (next[k] === undefined || next[k] === null || next[k] === "")
      delete next[k];
  });
  all[vehicleId] = next;
  await writeJSON(OVERRIDES_PATH, all);
  return next;
}

export async function listFleet(): Promise<Vehicle[]> {
  const overrides = await listOverrides();
  return seedVehicles.map((v) => {
    const o = overrides[v.id];
    if (!o) return v;
    return {
      ...v,
      available: o.available ?? v.available,
      imageUrl: o.imageUrl ?? v.imageUrl,
      pricePerDay: o.pricePerDay ?? v.pricePerDay,
    };
  });
}

/* ---------- Auth helpers ---------- */

export const ADMIN_COOKIE = "wolf_admin";

/** The password comes from env. Never commit a real one. */
export function adminPassword(): string {
  return process.env.ADMIN_PASSWORD || "wolf2026";
}

/** Token we drop in the cookie once login succeeds. Simple and sufficient
 *  for a single-operator portal. Rotate by changing ADMIN_PASSWORD. */
export function adminToken(): string {
  return "ok:" + (process.env.ADMIN_PASSWORD || "wolf2026").length;
}
