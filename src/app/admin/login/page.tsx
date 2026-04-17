"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock } from "lucide-react";

function LoginInner() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") ?? "/admin";
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Contraseña incorrecta.");
        setLoading(false);
        return;
      }
      router.replace(next);
      router.refresh();
    } catch {
      setError("No se pudo iniciar sesión.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-wolf-dark text-white flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-wolf-graphite border border-wolf-hairline p-8 corner-brackets"
      >
        <div className="flex items-center gap-3 mb-6">
          <Lock size={20} className="text-wolf-red" />
          <span className="eyebrow text-wolf-red">Admin · Wolf</span>
        </div>
        <h1 className="display-md text-white mb-2">Entrar al portal.</h1>
        <p className="text-wolf-on-dark/70 text-sm mb-6">
          Solo para el equipo. Si perdiste la clave, escríbele a Wolfart.
        </p>

        <label className="block text-sm font-semibold text-white/80 mb-1">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoFocus
          className="w-full bg-wolf-ink border border-wolf-hairline px-3 h-11 text-white text-sm focus:outline-none focus:border-wolf-red"
          placeholder="••••••••"
        />
        {error && (
          <p className="text-wolf-red text-xs mt-2 font-mono uppercase tracking-widest">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full mt-6 disabled:opacity-60"
        >
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-wolf-dark" />}>
      <LoginInner />
    </Suspense>
  );
}
