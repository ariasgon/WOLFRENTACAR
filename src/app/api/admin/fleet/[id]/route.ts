import { NextResponse } from "next/server";
import { setOverride, type FleetOverride } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = (await req.json().catch(() => null)) as Partial<FleetOverride> | null;
  if (!body) {
    return NextResponse.json({ ok: false, error: "bad-body" }, { status: 400 });
  }

  const patch: FleetOverride = {};
  if (typeof body.available === "boolean") patch.available = body.available;
  if (typeof body.imageUrl === "string") patch.imageUrl = body.imageUrl;
  if (typeof body.pricePerDay === "number") patch.pricePerDay = body.pricePerDay;
  if (typeof body.notes === "string") patch.notes = body.notes;

  const saved = await setOverride(id, patch);
  return NextResponse.json({ ok: true, override: saved });
}
