// src/components/doors/DoorHero.tsx
// Dark/brass hero for the door page — matches the sinks Hero treatment.

export function DoorHero() {
  return (
    <section className="relative min-h-[72vh] flex items-center overflow-hidden bg-[var(--color-charcoal)]">
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at 30% 40%, #B89968 0%, #5a3a1a 25%, #1a1612 60%, #0F0F0F 100%)" }} aria-hidden="true" />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(270deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.6) 50%, rgba(15,15,15,0.25) 100%)" }} aria-hidden="true" />
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          <p className="text-[var(--color-brass)] text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6">דלת שיש בגובה אפס · עבודת יד</p>
          <h1 className="text-[var(--color-cream)] text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-8">דלת שהיא<br /><span className="text-[var(--color-brass)]">יצירת אבן.</span></h1>
          <p className="text-[var(--color-cream)]/85 text-lg md:text-xl leading-relaxed max-w-xl mb-8">חיפוי שיש חלק וללא תפר, מערכת תלייה מבנית נסתרת, וחיבור בלתי נראה בגובה אפס. דלת שנראית כאילו נחצבה מתוך הקיר.</p>
          <a href="#door-lead-form" className="inline-block bg-[var(--color-brass)] text-[var(--color-charcoal)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-cream)] transition-colors">עיצוב הדלת שלכם ←</a>
        </div>
      </div>
    </section>
  );
}
