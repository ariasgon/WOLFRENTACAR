import { NextResponse, type NextRequest } from "next/server";

const ADMIN_COOKIE = "wolf_admin";
function adminToken(): string {
  return "ok:" + (process.env.ADMIN_PASSWORD || "wolf2026").length;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Forward pathname to server components via request header so root layout
  // can conditionally render chrome (public vs. admin).
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-pathname", pathname);

  // Login page + its API route must be reachable while logged out.
  const isLogin =
    pathname === "/admin/login" || pathname === "/api/admin/login";

  if (
    !isLogin &&
    (pathname.startsWith("/admin") || pathname.startsWith("/api/admin"))
  ) {
    const token = req.cookies.get(ADMIN_COOKIE)?.value;
    if (token !== adminToken()) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "unauthorized" }, { status: 401 });
      }
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // Run on all routes except static assets.
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
