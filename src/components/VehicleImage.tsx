"use client";

import { useState } from "react";

interface Props {
  imageUrl?: string;
  category: string;
  alt: string;
  vehicleId: string;
}

function CarSilhouette({ category }: { category: string }) {
  const cat = category.toLowerCase();
  const isVan = cat.includes("van");
  const isPremium = cat.includes("premium");
  const isSuv = cat.includes("suv");
  const bodyFill = isPremium ? "#0c1014" : isSuv ? "#1a2029" : isVan ? "#4a5260" : "#222832";
  const underBody = isPremium ? "#06080b" : isSuv ? "#0e131a" : isVan ? "#2f353f" : "#141920";

  if (isVan) {
    return (
      <svg viewBox="0 0 260 110" className="w-full h-full" aria-hidden="true">
        <ellipse cx="130" cy="96" rx="100" ry="5" fill="#000" opacity="0.15" />
        <path
          d="M30 70 Q30 30 50 28 L200 28 Q220 28 230 40 L236 70 Q236 84 228 84 L30 84 Q22 84 22 72 Z"
          fill={bodyFill}
        />
        <rect x="56" y="36" width="58" height="20" rx="2" fill="#cfd6db" opacity="0.85" />
        <rect x="120" y="36" width="58" height="20" rx="2" fill="#cfd6db" opacity="0.85" />
        <rect x="184" y="36" width="30" height="20" rx="2" fill="#cfd6db" opacity="0.7" />
        <path d="M30 70 L230 70 L234 78 L30 78 Z" fill={underBody} />
        <circle cx="66" cy="86" r="12" fill="#0a0c10" />
        <circle cx="66" cy="86" r="5" fill="#6b7480" />
        <circle cx="194" cy="86" r="12" fill="#0a0c10" />
        <circle cx="194" cy="86" r="5" fill="#6b7480" />
        <rect x="222" y="52" width="12" height="6" rx="1" fill="#D50026" />
        <rect x="26" y="48" width="8" height="6" rx="1" fill="#fff" opacity="0.9" />
      </svg>
    );
  }

  if (isSuv) {
    return (
      <svg viewBox="0 0 260 110" className="w-full h-full" aria-hidden="true">
        <ellipse cx="130" cy="96" rx="100" ry="5" fill="#000" opacity="0.15" />
        <path
          d="M38 80 Q42 50 82 46 L108 34 Q118 30 134 30 L178 30 Q198 32 214 56 L224 74 Q224 86 216 86 L38 86 Q28 86 28 78 Z"
          fill={bodyFill}
        />
        <path
          d="M108 38 Q116 34 130 34 L172 34 Q184 36 194 54 L110 56 Z"
          fill="#cfd6db" opacity="0.9"
        />
        <path
          d="M82 52 Q90 48 104 48 L108 48 L108 56 L82 56 Z"
          fill="#cfd6db" opacity="0.85"
        />
        <path d="M38 72 L224 72 L222 82 L38 82 Z" fill={underBody} />
        <circle cx="72" cy="86" r="13" fill="#0a0c10" />
        <circle cx="72" cy="86" r="5" fill="#6b7480" />
        <circle cx="188" cy="86" r="13" fill="#0a0c10" />
        <circle cx="188" cy="86" r="5" fill="#6b7480" />
        <rect x="212" y="62" width="12" height="6" rx="1" fill="#D50026" />
        <rect x="34" y="58" width="10" height="6" rx="1" fill="#fff" opacity="0.9" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 260 110" className="w-full h-full" aria-hidden="true">
      <ellipse cx="130" cy="96" rx="100" ry="5" fill="#000" opacity="0.15" />
      <path
        d="M28 78 Q36 54 68 50 L94 40 Q108 34 128 34 L166 34 Q190 38 210 62 L224 74 Q224 84 216 84 L28 84 Q20 84 20 78 Z"
        fill={bodyFill}
      />
      <path
        d="M94 42 Q108 38 128 38 L164 38 Q182 42 196 60 L94 62 Z"
        fill="#cfd6db" opacity="0.9"
      />
      <path d="M28 74 L222 74 L222 80 L28 80 Z" fill={underBody} />
      <circle cx="70" cy="84" r="13" fill="#0a0c10" />
      <circle cx="70" cy="84" r="5" fill="#6b7480" />
      <circle cx="188" cy="84" r="13" fill="#0a0c10" />
      <circle cx="188" cy="84" r="5" fill="#6b7480" />
      <rect x="208" y="62" width="12" height="5" rx="1" fill="#D50026" />
      <rect x="26" y="60" width="10" height="5" rx="1" fill="#fff" opacity="0.9" />
    </svg>
  );
}

export default function VehicleImage({ imageUrl, category, alt, vehicleId }: Props) {
  const [failed, setFailed] = useState(false);
  const showPhoto = !!imageUrl && !failed;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,22,28,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,22,28,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <span className="absolute top-2 left-2 z-[2] font-mono text-[9px] tracking-[0.2em] text-wolf-dark/60 uppercase">
        W·{vehicleId.slice(0, 6).toUpperCase()}
      </span>
      <span className="absolute top-2 right-2 z-[2] h-[2px] w-12 bg-wolf-red" />
      {showPhoto ? (
        // Using a plain <img> here (not next/image) because photos live on
        // multiple remote CDNs, we accept unoptimized, and we need onError
        // to fall back to the SVG silhouette.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-end justify-center pb-2 px-4">
          <CarSilhouette category={category} />
        </div>
      )}
    </div>
  );
}
