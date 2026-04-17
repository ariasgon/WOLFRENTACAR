import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminPassword, adminToken } from "@/lib/db";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { password?: string }
    | null;
  if (!body?.password || body.password !== adminPassword()) {
    return NextResponse.json({ ok: false, error: "bad-password" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: ADMIN_COOKIE,
    value: adminToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12, // 12 h
  });
  return res;
}
