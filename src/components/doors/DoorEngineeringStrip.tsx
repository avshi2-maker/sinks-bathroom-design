"use client";

// src/components/doors/DoorEngineeringStrip.tsx
// Credibility strip: the engineering spec sketches as IMPRESSION thumbnails.
// Click -> lightbox. Only items with a url render (so it stays clean until you
// upload them). Upload reduced-res versions to Cloudinary and paste the URLs.

import { useState } from "react";

type Sketch = { url: string; caption: string };

// TODO(Avshi): upload reduced-res sketches to Cloudinary and paste secure URLs.
// Leave a url empty ('') to hide that tile.
const SKETCHES: Sketch[] = [
  { url: "", caption: "בנייה וחיפוי קיר — מסגרת פלדה נסתרת ועיגון מדויק" },
  { url: "", caption: "קורת ראש עליונה ואפשרויות ידית" },
  { url: "", caption: "חיבור שיש חלק — עיגון בלתי נראה בגובה אפס" },
];

export function DoorEngineeringStrip() {
  const [open, setOpen] = useState<string | null>(null);
  const shown = SKETCHES.filter((s) => s.url.trim() !== "");
  if (shown.length === 0) return null;

  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-5">
        {shown.map((s) => (
          <button key={s.url} type="button" onClick={() => setOpen(s.url)} className="group text-right focus:outline-none">
            <div className="rounded-xl overflow-hidden border border-[var(--color-cream-darker)] bg-[var(--color-cream)] shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.url} alt={s.caption} className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform" loading="lazy" />
            </div>
            <p className="text-[var(--color-charcoal)]/70 text-xs mt-2 leading-snug">{s.caption}</p>
          </button>
        ))}
      </div>
      <p className="text-[var(--color-charcoal)]/45 text-[11px] mt-3 text-center">סקיצות הנדסיות להמחשה בלבד.</p>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={open} alt="סקיצה הנדסית" className="max-w-full max-h-full rounded-lg" />
          <button type="button" onClick={() => setOpen(null)} className="absolute top-5 right-5 text-white text-3xl leading-none" aria-label="סגור">×</button>
        </div>
      )}
    </div>
  );
}
