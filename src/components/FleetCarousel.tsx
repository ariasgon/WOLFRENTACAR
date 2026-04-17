"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import VehicleCard from "@/components/VehicleCard";
import { Vehicle } from "@/lib/vehicles";

interface FleetCarouselProps {
  vehicles: Vehicle[];
}

export default function FleetCarousel({ vehicles }: FleetCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const scrollByDirection = (dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.getBoundingClientRect().width + 20;
    track.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const card = track.firstElementChild as HTMLElement | null;
      if (!card) return;
      const step = card.getBoundingClientRect().width + 20;
      const i = Math.round(track.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(vehicles.length - 1, i)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [vehicles.length]);

  return (
    <div className="relative">
      {/* Controls + counter — top right */}
      <div className="flex items-end justify-between mb-6">
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-wolf-text-muted">
          <span className="text-wolf-red font-bold">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="mx-2 opacity-50">/</span>
          <span>{String(vehicles.length).padStart(2, "0")}</span>
          <span className="ml-3 hidden sm:inline opacity-60">Flota activa</span>
        </div>
        <div className="flex gap-0">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scrollByDirection(-1)}
            className="w-11 h-11 bg-wolf-dark text-white flex items-center justify-center hover:bg-wolf-red transition-colors border-r border-wolf-hairline"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => scrollByDirection(1)}
            className="w-11 h-11 bg-wolf-dark text-white flex items-center justify-center hover:bg-wolf-red transition-colors"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x-mandatory no-scrollbar pb-4"
      >
        {vehicles.map((v, i) => (
          <div
            key={v.id}
            className={`snap-start shrink-0 w-[82%] sm:w-[48%] md:w-[32%] lg:w-[24%] animate-fade-in-up stagger-${Math.min(i + 1, 8)}`}
          >
            <VehicleCard vehicle={v} />
          </div>
        ))}
      </div>

      {/* Progress bar instead of dots */}
      <div className="mt-4 h-[2px] bg-wolf-border relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-wolf-red transition-all duration-300"
          style={{
            width: `${((activeIndex + 1) / vehicles.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
