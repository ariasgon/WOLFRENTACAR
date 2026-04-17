import { NextResponse } from "next/server";
import { updateBooking, type BookingStatus } from "@/lib/db";

const VALID_STATUS: BookingStatus[] = [
  "pending",
  "confirmed",
  "active",
  "completed",
  "cancelled",
];

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ ok: false, error: "bad-body" }, { status: 400 });
  }

  const patch: Record<string, unknown> = {};
  if (typeof body.status === "string" && VALID_STATUS.includes(body.status as BookingStatus)) {
    patch.status = body.status;
  }
  if (typeof body.notes === "string") {
    patch.notes = body.notes;
  }

  const updated = await updateBooking(id, patch);
  if (!updated) {
    return NextResponse.json({ ok: false, error: "not-found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, booking: updated });
}
