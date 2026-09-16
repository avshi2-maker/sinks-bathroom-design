// FAQ.tsx (src/components/FAQ.tsx) · updated 16.09.2026 (Asia/Jerusalem)
// GEO/AI-optimized FAQ section + FAQPage JSON-LD schema (source of truth = FAQ_ITEMS).

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "כמה עולה כיור שיש בהזמנה אישית?",
    a: "המחיר נקבע לפי גודל הכיור, סוג האבן (Calacatta, Statuario, Saint Laurent, מדגסקר, גרניט פורצלן ועוד) ומורכבות העיצוב. כל כיור מיוצר בהזמנה אישית — מלאו טופס קצר ונחזור אליכם עם הצעת מחיר מותאמת.",
  },
  {
    q: "מאילו אבנים אתם מייצרים את הכיורים?",
    a: "שיש איטלקי Calacatta ו-Statuario, Saint Laurent, אבן מדגסקר, גרניט פורצלן ואבנים אקזוטיות נוספות. כל לוח נבחר ידנית ומגיע עם תעודת מקור.",
  },
  {
    q: "אפשר כיור בגודל, בצורה ובצבע מותאמים אישית?",
    a: "כן. כל כיור הוא יצירה אחת ויחידה בעבודת יד. אפשר כיור באורך 1.20 עד 2.40 מ׳ ללא חיבורים, או כל גודל נדרש עם חיבורים סמויים כמעט בלתי נראים. הצורה, הצבע וסוג האבן נבחרים יחד אתכם.",
  },
  {
    q: "מה זו הדמיית ה-AI לפני הייצור?",
    a: "לפני שחותכים אבן יקרה, אנחנו יכולים להציג לכם הדמיה מציאותית של הכיור עם הפרטים ששלחתם בטופס — כדי שתראו בדיוק איך ייראה עוד לפני שמתחילים בייצור.",
  },
  {
    q: "אתם עובדים עם מעצבי פנים ואדריכלים?",
    a: "בהחלט. אנחנו משתפים פעולה עם מעצבי פנים ואדריכלים, מייצרים לפי מפרט מדויק, ומספקים תעודות מקור והדמיות AI שאפשר להציג ללקוח הסופי.",
  },
  {
    q: "הכיור מותקן תלוי על הקיר?",
    a: "כן — התקנה תלויה ללא ארון תחתון, למראה מרחף ונקי שמשחרר את רצפת חדר הרחצה. אפשר גם התקנה אחרת לפי דרישה.",
  },
  {
    q: "באילו אזורים בארץ אתם נותנים שירות?",
    a: "אנחנו נותנים שירות בכל רחבי ישראל. הכיורים מיוצרים בעבודת יד בסדנה בישראל ומותקנים אצלכם.",
  },
  {
    q: "איך מזמינים כיור?",
    a: "ממלאים טופס קצר באתר או שולחים הודעת וואטסאפ. נחזור אליכם תוך 24–48 שעות עם הצעה והמשך התהליך.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-[var(--color-cream)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-[var(--color-brass-dark)] text-xs font-medium tracking-[0.3em] uppercase mb-4">שאלות נפוצות</p>
          <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black leading-tight">כל מה שרציתם לדעת</h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className="group bg-[var(--color-cream-darker)]/40 border border-[var(--color-cream-darker)] rounded-2xl px-6 py-1 open:bg-[var(--color-cream-darker)]/60 transition-colors">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-4 [&::-webkit-details-marker]:hidden">
                <span className="text-[var(--color-charcoal)] text-lg md:text-xl font-bold text-right">{item.q}</span>
                <span className="shrink-0 text-[var(--color-brass-dark)] text-2xl font-black transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="text-[var(--color-charcoal)]/70 text-base leading-relaxed pb-5 text-right">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
