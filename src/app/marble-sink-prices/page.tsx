// page.tsx (src/app/marble-sink-prices/page.tsx) · updated 19.09.2026 (Asia/Jerusalem)
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { SelectionProvider } from "@/context/SelectionContext";
import { SelectionCart } from "@/components/SelectionCart";

const SITE_URL = "https://www.marble-art.co.il";
const PAGE_PATH = "/marble-sink-prices";

export const metadata: Metadata = {
  title: "כמה עולה כיור שיש? מחירון וטווחי מחירים | מרבל ארט",
  description: "כמה עולה כיור שיש בהזמנה אישית? טווחי מחירים אמיתיים לפי סוג העבודה, מה משפיע על המחיר, ואיך מקבלים הצעה מדויקת. מבית Marble Art — כיורי שיש בעבודת יד.",
  keywords: ["מחיר כיור שיש", "כמה עולה כיור שיש", "מחירון כיור שיש", "עלות כיור שיש בהזמנה אישית", "כיור שיש מחיר", "marble sink price Israel"],
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: { type: "website", locale: "he_IL", url: `${SITE_URL}${PAGE_PATH}`, siteName: "Marble Art Sinks", title: "כמה עולה כיור שיש? מחירון וטווחי מחירים", description: "טווחי מחירים אמיתיים לכיור שיש בהזמנה אישית, ומה משפיע על המחיר.", images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
  robots: { index: true, follow: true },
};

const TIERS = [
  { range: "8,000 – 15,000 ₪", name: "תקציב יעיל", d: "כיור שיש בגודל סטנדרטי, עיצוב נקי, אבן במלאי — נקודת הכניסה לעבודת יד אמיתית." },
  { range: "15,000 – 25,000 ₪", name: "סטנדרט פרימיום", d: "מידות מותאמות, בחירת לוח לפי ורידים וגוון, גימור מוקפד — הטווח הנפוץ ביותר." },
  { range: "25,000 – 50,000 ₪", name: "אומנותי", d: "עיצוב מורכב, אבנים נדירות (Calacatta, Statuario), פרטי גילוף ייחודיים." },
  { range: "50,000 ₪ ומעלה", name: "יצירת מופת", d: "פרויקט אמנותי מלא — אבן יוקרתית, מידות גדולות, עבודה מותאמת לחלוטין." },
];

const FACTORS = [
  { t: "סוג האבן", d: "שיש איטלקי מובחר (Calacatta, Statuario) יקר יותר מאבן במלאי או מגרניט פורצלן." },
  { t: "מידות ומורכבות", d: "כיור גדול, זוגי או בצורה לא-סטנדרטית דורש יותר חומר ויותר שעות גילוף." },
  { t: "סוג ההתקנה", d: "כיור תלוי על קיר, על ארון או עם משטחי שיש מהצד — לכל אחד עלות שונה." },
  { t: "גימור ופרטים", d: "ליטוש מיוחד, שילוב זהב, ורידים תואמים בין חלקים — כל פרט משפיע." },
];

const FAQ = [
  { q: "כמה עולה כיור שיש בהזמנה אישית?", a: "טווח המחירים נע בדרך כלל בין 8,000 ₪ לכיור בגודל סטנדרטי מאבן במלאי, ועד 50,000 ₪ ומעלה לפרויקט אומנותי מאבן יוקרתית. הטווח הנפוץ ביותר הוא 15,000–25,000 ₪. המחיר המדויק תלוי בסוג האבן, במידות, בסוג ההתקנה ובגימור." },
  { q: "מה משפיע על מחיר של כיור שיש?", a: "ארבעה גורמים עיקריים: סוג האבן (איטלקי מובחר לעומת מלאי), המידות והמורכבות, סוג ההתקנה, ורמת הגימור והפרטים. כיור גדול או בעיצוב מורכב מאבן נדירה יעלה יותר מכיור סטנדרטי." },
  { q: "האם כיור שיש יקר יותר מכיור רגיל?", a: "כן, כי מדובר בעבודת יד מאבן טבעית — כל כיור מגולף בנפרד ואין שניים זהים. לעומת זאת הוא מחזיק עשרות שנים ומוסיף ערך עיצובי משמעותי, בניגוד לאגן תעשייתי." },
  { q: "איך מקבלים הצעת מחיר מדויקת לכיור שיש?", a: "שלחו לנו תמונה של החלל ומידות גסות דרך הטופס באתר. תוך 24-48 שעות נחזור אליכם עם הדמיה מותאמת וטווח מחירים ברור — ללא עלות וללא התחייבות." },
];

const heroWrap = "relative overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-cream)] pt-16 pb-20 md:pt-24 md:pb-28";
const ctaBtn = "inline-block bg-[var(--color-brass)] text-[var(--color-charcoal)] px-10 py-5 rounded-full font-bold text-lg hover:bg-[var(--color-cream)] transition-colors duration-300";
const tierCard = "bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-cream-darker)] flex flex-col";

export default function PricesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };

  return (
    <SelectionProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        <section className={heroWrap}>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <p className="text-[var(--color-brass)] text-sm font-medium tracking-widest uppercase mb-4">מחירון שקוף</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">כמה עולה כיור שיש?</h1>
            <p className="text-[var(--color-cream)]/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">כיור שיש בהזמנה אישית נע בין 8,000 ₪ לכ-50,000 ₪ ומעלה, לפי סוג האבן, המידות והגימור. הנה הפירוט המלא — ואיך מקבלים הצעה מדויקת בחינם.</p>
            <a href="#lead-form" className={ctaBtn}>קבלו הצעה מדויקת ←</a>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[var(--color-cream-darker)]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[var(--color-charcoal)] text-3xl md:text-4xl font-black mb-3">טווחי מחירים לפי סוג עבודה</h2>
              <p className="text-[var(--color-charcoal)]/60 text-lg">מחירים מוערכים לכיור שיש בהזמנה אישית, כולל עיצוב וייצור.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {TIERS.map((t) => (
                <div key={t.name} className={tierCard}>
                  <div className="text-[var(--color-brass-dark)] font-black text-2xl mb-1">{t.range}</div>
                  <div className="text-[var(--color-charcoal)] font-bold mb-2">{t.name}</div>
                  <p className="text-[var(--color-charcoal)]/65 leading-relaxed">{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[var(--color-cream)]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-8 text-center">מה משפיע על המחיר?</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {FACTORS.map((f) => (
                <div key={f.t} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[var(--color-brass)] text-[var(--color-charcoal)] flex items-center justify-center text-sm font-black">₪</span>
                  <div>
                    <div className="text-[var(--color-charcoal)] font-bold">{f.t}</div>
                    <p className="text-[var(--color-charcoal)]/65 leading-relaxed text-sm">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[var(--color-cream-darker)]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-8 text-center">שאלות נפוצות על מחיר</h2>
            <div className="flex flex-col gap-4">
              {FAQ.map((i) => (
                <details key={i.q} className="bg-[var(--color-cream)] rounded-xl p-5 border border-[var(--color-cream-darker)]">
                  <summary className="font-bold text-[var(--color-charcoal)] cursor-pointer">{i.q}</summary>
                  <p className="text-[var(--color-charcoal)]/70 leading-relaxed mt-3">{i.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="lead-form" className="py-20 md:py-32 bg-[var(--color-cream)]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">הצעה אישית</p>
              <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-4">קבלו טווח מחירים לפרויקט שלכם</h2>
              <p className="text-[var(--color-charcoal)]/60 text-lg max-w-xl mx-auto">שלחו תמונה של החלל ומידות גסות — נחזור תוך 24-48 שעות עם הדמיה וטווח מחירים, בחינם.</p>
            </div>
            <LeadForm landingPage="/marble-sink-prices" />
          </div>
        </section>
        <Footer />
      </main>
      <SelectionCart />
    </SelectionProvider>
  );
}
