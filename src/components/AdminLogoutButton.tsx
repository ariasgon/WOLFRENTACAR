"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function AdminLogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-wolf-on-dark/60 hover:text-wolf-red transition-colors"
    >
      <LogOut size={13} />
      Salir
    </button>
  );
}
