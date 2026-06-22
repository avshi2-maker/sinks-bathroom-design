// src/components/doors/DoorWhy.tsx
// The engineering advantages — what makes the flush marble door possible.

const ITEMS = [
  { n: "01", title: "חיבור בגובה אפס", body: "נקודת יישור סף-אפס וחיבור בלתי נראה — הדלת מתיישרת לקיר במישור מושלם, ללא מסגרת בולטת." },
  { n: "02", title: "מבנה פלדה נסתר", body: "מסגרת RHS ופלטת ציר אינטגרלית נסתרת, עם עיגון סיסמי — כל המבנה מוסתר מאחורי האבן." },
  { n: "03", title: "חיפוי שיש ללא תפר", body: "חיפוי קלקטה, סטטואריו ועוד בעובי 40 מ\"מ, חתוך ומולבש כך שגוף הדלת נראה כיצוק אבן אחד." },
  { n: "04", title: "ידיות חכמות", body: "ידית שקועה בטקסטורת שיש, להב מינימליסטי, פתיחת דחיפה עם LED, או קורא ביומטרי וקולי." },
];

export function DoorWhy() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">למה אנחנו</p>
          <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black">ההנדסה שמאחורי המראה החלק</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ITEMS.map((it) => (
            <div key={it.n} className="bg-white rounded-2xl p-7 border border-[var(--color-cream-darker)] shadow-sm">
              <div className="text-[var(--color-brass)] text-2xl font-black mb-3">{it.n}</div>
              <h3 className="text-[var(--color-charcoal)] text-lg font-black mb-2 leading-snug">{it.title}</h3>
              <p className="text-[var(--color-charcoal)]/65 text-sm leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
