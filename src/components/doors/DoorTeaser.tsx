"use client";

// src/components/doors/DoorTeaser.tsx
// The "play with data" teaser: pick stone (live render swap) + size + handle.
// Visual only — no prices. Selections lift up to DoorExperience and fold into the form.

import { DOOR_STONES, DOOR_SIZES, DOOR_HANDLES } from "./doorOptions";

export type DoorConfig = { stoneId: string; sizeBand: string; handle: string };

export function DoorTeaser({ config, onChange }: { config: DoorConfig; onChange: (next: DoorConfig) => void }) {
  const stone = DOOR_STONES.find((s) => s.id === config.stoneId) || DOOR_STONES[0];

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="rounded-2xl overflow-hidden bg-[var(--color-cream)] border border-[var(--color-cream-darker)] shadow-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={stone.render_url} alt={`דלת שיש ${stone.name_he}`} className="w-full h-full object-cover aspect-[2/3]" />
      </div>

      <div className="space-y-7">
        <div>
          <p className="text-[var(--color-charcoal)] font-bold text-sm mb-3">בחרו אבן</p>
          <div className="flex flex-wrap gap-3">
            {DOOR_STONES.map((s) => {
              const active = s.id === config.stoneId;
              return (
                <button key={s.id} type="button" onClick={() => onChange({ ...config, stoneId: s.id })} className={"flex flex-col items-center gap-1.5 focus:outline-none"} aria-pressed={active}>
                  <span className={"w-12 h-12 rounded-full border-2 transition-all " + (active ? "border-[var(--color-brass)] ring-2 ring-[var(--color-brass)]/40 scale-110" : "border-[var(--color-cream-darker)] hover:border-[var(--color-brass)]/50")} style={{ backgroundColor: s.swatch_hex }} />
                  <span className={"text-[11px] " + (active ? "text-[var(--color-charcoal)] font-bold" : "text-[var(--color-charcoal)]/60")}>{s.name_he}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-[var(--color-charcoal)] font-bold text-sm mb-3">גודל פתח</p>
          <div className="grid grid-cols-2 gap-3">
            {DOOR_SIZES.map((o) => {
              const active = o.value === config.sizeBand;
              return (
                <button key={o.value} type="button" onClick={() => onChange({ ...config, sizeBand: o.value })} className={"px-3 py-3 rounded-lg border-2 text-center transition-all " + (active ? "border-[var(--color-brass)] bg-[var(--color-brass)]/10" : "border-[var(--color-cream-darker)] bg-white hover:border-[var(--color-brass)]/50")}>
                  <span className="block font-bold text-[var(--color-charcoal)] text-sm">{o.label}</span>
                  {o.desc && <span className="block text-[var(--color-charcoal)]/55 text-[11px] mt-0.5">{o.desc}</span>}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-[var(--color-charcoal)] font-bold text-sm mb-3">גימור ידית</p>
          <div className="grid grid-cols-2 gap-3">
            {DOOR_HANDLES.map((o) => {
              const active = o.value === config.handle;
              return (
                <button key={o.value} type="button" onClick={() => onChange({ ...config, handle: o.value })} className={"px-3 py-3 rounded-lg border-2 text-center transition-all " + (active ? "border-[var(--color-brass)] bg-[var(--color-brass)]/10" : "border-[var(--color-cream-darker)] bg-white hover:border-[var(--color-brass)]/50")}>
                  <span className="block font-bold text-[var(--color-charcoal)] text-sm">{o.label}</span>
                  {o.desc && <span className="block text-[var(--color-charcoal)]/55 text-[11px] mt-0.5">{o.desc}</span>}
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-[var(--color-charcoal)]/55 text-xs">התאמה אישית מלאה. הצעת מחיר אישית לאחר פנייה — מלאו פרטים למטה.</p>
      </div>
    </div>
  );
}
