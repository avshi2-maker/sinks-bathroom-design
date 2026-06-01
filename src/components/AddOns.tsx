// src/components/AddOns.tsx
"use client";

// "Complete your space" upsell section — change-order add-ons Ales can deliver.
// Each item is PICKABLE into the existing SelectionContext cart (section "תוספות"),
// so it flows into the LeadForm + single WhatsApp message exactly like gallery picks.
// No prices (price on request). Touches no other file: add-ons carry a generated
// data-URI thumbnail so the cart/form <img> renders cleanly without image assets.

import { useSelection } from "@/context/SelectionContext";

// Tiny brass "◆" on charcoal as an inline SVG data-URI — used as the thumbnail
// for text-only add-ons so the cart and lead-form image tiles render correctly.
const ADDON_THUMB =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="#2b2b2b"/><text x="32" y="42" font-size="30" text-anchor="middle" fill="#b08d57">\u25C6</text></svg>',
  );

type AddOn = { id: string; name: string };

const categories: { badge: string; title: string; items: AddOn[] }[] = [
  {
    badge: "01",
    title: "אבזור ומתקנים",
    items: [
      { id: "addon-towel-rail", name: "מתקן תליית מגבות" },
      { id: "addon-soap-brush", name: "מתקני תלייה לסבון ומברשות" },
      { id: "addon-upper-shelves", name: "מדפים עליונים" },
      { id: "addon-lower-shelf", name: "מדף תחתון" },
    ],
  },
  {
    badge: "02",
    title: "ברזים",
    items: [
      { id: "addon-faucet-3way", name: "ברז אינטרפוט 3-דרך מהקיר, גוון גרפיט" },
      { id: "addon-faucet-touchless", name: "ברז פתיחה ללא מגע יד" },
    ],
  },
  {
    badge: "03",
    title: "תאורה",
    items: [{ id: "addon-led-strip", name: "תאורת פס LED" }],
  },
  {
    badge: "04",
    title: "הרחבות אבן",
    items: [
      { id: "addon-marble-wall", name: "קיר שיש איטלקי תואם לכיור" },
      { id: "addon-marble-floor", name: "ריצוף שיש איטלקי תואם" },
      { id: "addon-italian-marble", name: "שיש איטלקי (Calacatta, Statuario ועוד)" },
      { id: "addon-siphon-cube", name: "בגירת סיפון עם קובייה" },
    ],
  },
  {
    badge: "05",
    title: "גימור",
    items: [{ id: "addon-grout-match", name: "התאמת רובה לכל גוון בכיור" }],
  },
];

export function AddOns() {
  const { toggle, isSelected } = useSelection();

  return (
    <section id="add-ons" className="py-20 md:py-32 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[var(--color-brass-dark)] text-xs font-medium tracking-[0.3em] uppercase mb-4">השלימו את החלל</p>
          <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black max-w-2xl mx-auto leading-tight">לא רק כיור — חלל שלם באבן</h2>
          <p className="text-[var(--color-charcoal)]/60 text-lg max-w-xl mx-auto mt-4">תוספות ושדרוגים שאלס יכול לבצע יחד עם הכיור. בחרו מה שמעניין אתכם — הבחירות יצורפו אוטומטית לטופס הבקשה. המחיר נקבע לפי הפרויקט.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {categories.map((c) => (
            <div key={c.badge} className="text-right">
              <div className="text-[var(--color-brass)] text-5xl font-black mb-6 leading-none">{c.badge}</div>
              <h3 className="text-[var(--color-charcoal)] text-2xl font-bold mb-4 leading-tight">{c.title}</h3>
              <ul className="space-y-2">
                {c.items.map((item) => {
                  const selected = isSelected(item.id);
                  const onPick = () => toggle({ id: item.id, name: item.name, thumbnailUrl: ADDON_THUMB, section: "תוספות" });
                  const btnCls = selected
                    ? "w-full text-right flex items-center gap-2 justify-end px-3 py-2 rounded-lg border-2 border-[var(--color-brass)] bg-[var(--color-brass)]/10 transition-all"
                    : "w-full text-right flex items-center gap-2 justify-end px-3 py-2 rounded-lg border-2 border-[var(--color-cream-darker)] bg-white hover:border-[var(--color-brass)]/50 transition-all";
                  return (
                    <li key={item.id}>
                      <button type="button" onClick={onPick} className={btnCls} aria-pressed={selected}>
                        <span className="text-[var(--color-charcoal)]/80 text-base leading-relaxed">{item.name}</span>
                        <span className={selected ? "text-[var(--color-brass)] shrink-0 font-bold" : "text-[var(--color-charcoal)]/30 shrink-0"}>{selected ? "✓" : "+"}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-[var(--color-charcoal)]/50 text-sm mt-12">בחרתם תוספות? הן יופיעו בעגלה למטה ויצורפו אוטומטית לטופס — בקשה אחת, הצעת מחיר אחת.</p>
      </div>
    </section>
  );
}