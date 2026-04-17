import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, adminToken } from "@/lib/db";
import AdminLogoutButton from "@/components/AdminLogoutButton";

const navItems = [
  { href: "/admin", label: "Panel" },
  { href: "/admin/bookings", label: "Reservas" },
  { href: "/admin/fleet", label: "Flota" },
];

export default async function AdminGatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Defense in depth — middleware also gates, but this catches the case
  // where middleware is bypassed (local tooling, edge cases).
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (token !== adminToken()) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-wolf-bone">
      <header className="bg-wolf-dark text-white border-b border-wolf-hairline">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 h-14 flex items-center justify-between gap-6">
          <Link href="/admin" className="flex items-center gap-3">
            <span className="font-display font-bold tracking-tight">Wolf</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-wolf-on-dark/60 border-l border-wolf-hairline pl-3">
              Admin
            </span>
          </Link>
          <nav className="flex items-center gap-1 text-[12px] font-display uppercase tracking-widest">
            {navItems.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="px-3 py-1.5 hover:text-wolf-red transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-[11px] font-mono uppercase tracking-widest text-wolf-on-dark/60 hover:text-white transition-colors"
            >
              Ver sitio
            </Link>
            <AdminLogoutButton />
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
