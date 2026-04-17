"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

interface Props {
  id: string;
  name: string;
  brand: string;
  category: string;
  pricePerDay: number;
  available: boolean;
  imageUrl?: string;
  priceLabel: string;
}

export default function FleetRow({
  id,
  name,
  brand,
  category,
  pricePerDay,
  available: initialAvailable,
  imageUrl: initialImageUrl,
  priceLabel,
}: Props) {
  const [available, setAvailable] = useState(initialAvailable);
  const [imageUrl, setImageUrl] = useState(initialImageUrl ?? "");
  const [price, setPrice] = useState(pricePerDay);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function patch(payload: Record<string, unknown>) {
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch(`/api/admin/fleet/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 1500);
      }
    } finally {
      setSaving(false);
    }
  }

  async function toggleAvailable() {
    const next = !available;
    setAvailable(next);
    await patch({ available: next });
  }

  async function saveImage() {
    await patch({ imageUrl });
  }

  async function savePrice() {
    await patch({ pricePerDay: price });
  }

  return (
    <li className="grid md:grid-cols-[1fr_120px_120px_120px_140px] gap-4 px-5 py-4 items-center border-b border-wolf-border last:border-b-0 text-sm">
      <div>
        <p className="font-semibold text-wolf-dark">{name}</p>
        <p className="text-[11px] font-mono uppercase text-wolf-text-muted tracking-wider">
          {brand} · {id}
        </p>
      </div>
      <span className="text-[11px] font-mono uppercase tracking-widest text-wolf-text-muted">
        {category}
      </span>
      <div className="flex items-center gap-1">
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value) || 0)}
          onBlur={savePrice}
          className="w-24 bg-wolf-bone border border-wolf-border px-2 h-9 text-sm focus:outline-none focus:border-wolf-red"
          aria-label="Precio por día"
        />
        <span className="text-[10px] font-mono text-wolf-text-muted uppercase">COP</span>
      </div>
      <button
        onClick={toggleAvailable}
        className={`h-9 px-3 text-[11px] font-display uppercase tracking-widest transition-colors ${
          available
            ? "bg-wolf-dark text-white hover:bg-wolf-red"
            : "bg-wolf-border text-wolf-text-muted hover:bg-wolf-blue hover:text-white"
        }`}
      >
        {available ? "Disponible" : "No disponible"}
      </button>
      <div className="flex items-center gap-2">
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          onBlur={saveImage}
          placeholder="/vehicles/… o URL"
          className="w-full bg-wolf-bone border border-wolf-border px-2 h-9 text-xs focus:outline-none focus:border-wolf-red"
          aria-label="URL de imagen"
        />
        {saving && <Loader2 size={14} className="animate-spin text-wolf-text-muted" />}
        {saved && <Check size={14} className="text-wolf-red" />}
      </div>
      <span className="sr-only">Precio por día base: {priceLabel}</span>
    </li>
  );
}
