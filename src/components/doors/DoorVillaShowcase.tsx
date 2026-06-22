"use client";

// src/components/doors/DoorVillaShowcase.tsx
// Full-width villa-facade band that sits right after the hero. Three monumental
// flush-door facades (Nero / Amperdor / Calacatta) — the attention hook.
// Reduced-res delivery transform protects the source renders.

import { useState } from "react";

const TX = "w_900,q_auto,f_auto";
function rz(url: string): string {
  return url.replace("/image/upload/", `/image/upload/${TX}/`);
}

type Villa = { url: string; stone: string };

const VILLAS: Villa[] = [
  { url: rz("https://res.cloudinary.com/dqdku88vv/image/upload/v1782114257/Nero_Marquina_door_gldl5w.png"), stone: "נרו מרקינה" },
  { url: rz("https://res.cloudinary.com/dqdku88vv/image/upload/v1782114256/Amperdor_Emperador_door_d0vxuf.png"), stone: "אמפרדור" },
  { url: rz("https://res.cloudinary.com/dqdku88vv/image/upload/v1782114256/Calacatta_Gold_door_dsuwnp.png"), stone: "קלקטה גולד" },
];

export function DoorVillaShowcase() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="py-16 md:py-24 bg-[var(--color-charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[var(--color-brass)] text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-3">בקנה מידה אדריכלי</p>
          <h2 className="text-[var(--color-cream)] text-3xl md:text-5xl font-black">הכניסה שעוצרת מבטים</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {VILLAS.map((v) => (
            <button key={v.url} type="button" onClick={() => setOpen(v.url)} className="group block text-right focus:outline-none">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.url} alt={`חזית וילה עם דלת שיש ${v.stone}`} className="w-full aspect-[3/4] object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
              </div>
              <p className="text-[var(--color-cream)]/80 text-sm mt-3 text-center">{v.stone}</p>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={open} alt="חזית וילה עם דלת שיש" className="max-w-full max-h-full rounded-lg" />
          <button type="button" onClick={() => setOpen(null)} className="absolute top-5 right-5 text-white text-3xl leading-none" aria-label="סגור">×</button>
        </div>
      )}
    </section>
  );
}
