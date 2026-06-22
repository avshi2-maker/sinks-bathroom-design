"use client";

// src/components/doors/DoorExperience.tsx
// Interactive island of the door page: teaser (stone/size/handle play) ->
// engineering strip -> request form. Static sections (hero/why/how) live in page.tsx.

import { useState } from "react";
import { DoorTeaser, type DoorConfig } from "./DoorTeaser";
import { DoorEngineeringStrip } from "./DoorEngineeringStrip";
import { DoorLeadForm } from "./DoorLeadForm";
import { DOOR_SIZES, DOOR_HANDLES, stoneName, labelFor } from "./doorOptions";

export function DoorExperience() {
  const [config, setConfig] = useState<DoorConfig>({ stoneId: "calacatta", sizeBand: "standard", handle: "recessed" });

  const labels = {
    stone: stoneName(config.stoneId),
    size: labelFor(DOOR_SIZES, config.sizeBand),
    handle: labelFor(DOOR_HANDLES, config.handle),
  };

  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">עיצוב</p>
          <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-3">שחקו עם הדלת</h2>
          <p className="text-[var(--color-charcoal)]/60 text-lg max-w-xl mx-auto">בחרו אבן, גודל פתח וסוג ידית — וראו את הדלת מתעצבת.</p>
        </div>
        <DoorTeaser config={config} onChange={setConfig} />
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-2 text-center">ההנדסה שמאחורי הדלת</h2>
        <p className="text-[var(--color-charcoal)]/60 text-sm text-center mb-8">מסגרת פלדה נסתרת, עיגון סיסמי וחיבור בגובה אפס — מה שמייצר את המראה החלק.</p>
        <DoorEngineeringStrip />
      </section>

      <section id="door-lead-form" className="py-20 md:py-28 bg-[var(--color-cream-darker)]/40">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">בואו ניצור קשר</p>
            <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-4">מלאו פרטי בקשה</h2>
            <p className="text-[var(--color-charcoal)]/60 text-lg max-w-xl mx-auto">מלאו פרטים ותוך 24-48 שעות נחזור אליכם עם הצעה והדמיה מותאמת אישית.</p>
          </div>
          <DoorLeadForm doorConfig={labels} />
        </div>
      </section>
    </>
  );
}
