// src/components/doors/DoorHowItWorks.tsx
// 4-step process, door-worded — mirrors the sinks HowItWorks rhythm.

const STEPS = [
  { n: "1", title: "מספרים", body: "ממלאים את הטופס: אבן, גודל פתח, סוג ידית וקצת על הפרויקט." },
  { n: "2", title: "מתכננים", body: "תוך 24-48 שעות נחזור עם הצעה והדמיה מותאמת לפתח שלכם." },
  { n: "3", title: "מאשרים", body: "בוחרים את האבן והגרסה — לפני שחותכים אבן יקרה." },
  { n: "4", title: "נבנה ומותקן", body: "האומנים בונים את הדלת והמערכת הנסתרת, ומתקינים אצלכם." },
];

export function DoorHowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-cream-darker)]/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">תהליך</p>
          <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black">איך זה עובד</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center">
              <div className="w-14 h-14 rounded-full bg-[var(--color-brass)] text-[var(--color-charcoal)] text-2xl font-black flex items-center justify-center mx-auto mb-4">{s.n}</div>
              <h3 className="text-[var(--color-charcoal)] text-lg font-black mb-2">{s.title}</h3>
              <p className="text-[var(--color-charcoal)]/65 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
