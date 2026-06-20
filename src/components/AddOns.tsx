// src/components/AddOns.tsx
"use client";
// "Complete your space" upsell section — change-order add-ons Ales can deliver.
// Each item is PICKABLE into the existing SelectionContext cart (section "תוספות"),
// so it flows into the LeadForm + single WhatsApp message exactly like gallery picks.
// No prices (price on request). Each add-on has an AI render (Cloudinary); items
// without one fall back to the brass ◆ placeholder.
import { useSelection } from "@/context/SelectionContext";

const ADDON_THUMB =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="#2b2b2b"/><text x="32" y="42" font-size="30" text-anchor="middle" fill="#b08d57">\u25C6</text></svg>',
  );

// Cloudinary render base — version-free URL, public id = add-on id.
const IMG = (id: string) => `https://res.cloudinary.com/dqdku88vv/image/upload/${id}.png`;

type AddOn = { id: string; name: string; img?: string };

const categories: { badge: string; title: string; items: AddOn[] }[] = [
  {
    badge: "01",
    title: "אבזור ומתקנים",
    items: [
      { id: "addon-towel-rail", name: "מתקן תליית מגבות", img: IMG("addon-towel-rail") },
      { id: "addon-soap-brush", name: "מתקני תלייה לסבון ומברשות", img: IMG("addon-soap-brush") },
      { id: "addon-upper-shelves", name: "מדפים עליונים", img: IMG("addon-upper-shelves") },
      { id: "addon-lower-shelf", name: "מדף תחתון", img: IMG("addon-lower-shelf") },
    ],
  },
  {
    badge: "02",
    title: "ברזים",
    items: [
      { id: "addon-faucet-3way", name: "ברז אינטרפוט 3-דרך מהקיר, גוון גרפיט", img: IMG("addon-faucet-3way") },
      { id: "addon-faucet-touchless", name: "ברז פתיחה ללא מגע יד", img: IMG("addon-faucet-touchless") },
    ],
  },
  {
    badge: "03",
    title: "תאורה",
    items: [{ id: "addon-led-strip", name: "תאורת פס LED", img: IMG("addon-led-strip") }],
  },
  {
    badge: "04",
    title: "הרחבות אבן",
    items: [
      { id: "addon-marble-wall", name: "קיר שיש איטלקי תואם לכיור", img: IMG("addon-marble-wall") },
      { id: "addon-marble-floor", name: "ריצוף שיש איטלקי תואם", img: IMG("addon-marble-floor") },
      { id: "addon-siphon-cube", name: "בגירת סיפון עם קובייה", img: IMG("addon-siphon-cube") },
    ],
  },
  {
    badge: "05",
    title: "גימור",
    items: [{ id: "addon-grout-match", name: "התאמת רובה לכל גוון בכיור", img: IMG("addon-grout-match") }],
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
        <div className="space-y-16 md:space-y-20">
          {categories.map((c) => (
            <div key={c.badge}>
              <div className="flex items-baseline gap-4 justify-end mb-6 text-right">
                <h3 className="text-[var(--color-charcoal)] text-2xl font-bold leading-tight">{c.title}</h3>
                <div className="text-[var(--color-brass)] text-4xl font-black leading-none">{c.badge}</div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {c.items.map((item) => {
                  const selected = isSelected(item.id);
                  const thumb = item.img || ADDON_THUMB;
                  const onPick = () => toggle({ id: item.id, name: item.name, thumbnailUrl: thumb, section: "תוספות" });
                  const cardCls = selected
                    ? "group relative w-full text-right rounded-xl overflow-hidden border-2 border-[var(--color-brass)] bg-white shadow-md transition-all"
                    : "group relative w-full text-right rounded-xl overflow-hidden border-2 border-[var(--color-cream-darker)] bg-white hover:border-[var(--color-brass)]/50 hover:shadow-md transition-all";
                  const hasImg = Boolean(item.img);
                  return (
                    <button key={item.id} type="button" onClick={onPick} className={cardCls} aria-pressed={selected}>
                      <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--color-cream-darker)]/40 flex items-center justify-center">
                        {hasImg ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        ) : (
                          <span className="text-[var(--color-brass)]/50 text-4xl">◆</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between gap-2 p-3">
                        <span className="text-[var(--color-charcoal)]/85 text-sm leading-snug">{item.name}</span>
                        <span className={selected ? "shrink-0 w-6 h-6 rounded-full bg-[var(--color-brass)] text-white flex items-center justify-center text-sm font-bold" : "shrink-0 w-6 h-6 rounded-full border border-[var(--color-charcoal)]/20 text-[var(--color-charcoal)]/40 flex items-center justify-center text-sm"}>{selected ? "✓" : "+"}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[var(--color-charcoal)]/50 text-sm mt-12">בחרתם תוספות? הן יופיעו בעגלה למטה ויצורפו אוטומטית לטופס — בקשה אחת, הצעת מחיר אחת.</p>
      </div>
    </section>
  );
}
