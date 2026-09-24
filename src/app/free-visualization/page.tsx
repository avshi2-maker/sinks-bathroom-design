// free-visualization/page.tsx (src/app/free-visualization/page.tsx) · updated 19.09.2026 07:06 (Asia/Jerusalem)
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { SelectionProvider } from "@/context/SelectionContext";
import { SelectionCart } from "@/components/SelectionCart";

const SITE_URL = "https://www.marble-art.co.il";
const PAGE_PATH = "/free-visualization";

export const metadata: Metadata = {
  title: "הדמיה חינם לכיור שיש מותאם אישית | מרבל ארט",
  description:
    "שלחו תמונה של האמבטיה או המטבח וקבלו הדמיה חינם של כיור שיש איטלקי בהתאמה אישית — ללא התחייבות. הדמיה וטווח מחירים תוך 24-48 שעות.",
  keywords: [
    "הדמיה חינם כיור שיש",
    "כיור שיש מותאם אישית",
    "כיור שיש למטבח",
    "כיור שיש לאמבטיה",
    "כיור שיש איטלקי",
    "עיצוב אמבטיה עם שיש",
    "טווח מחירים כיור שיש",
    "כיור שיש בעבודת יד",
    "הדמיית עיצוב אמבטיה",
    "free marble sink visualization",
    "custom marble sink Israel",
  ],
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "Marble Art Sinks",
    title: "הדמיה חינם לכיור שיש מותאם אישית | מרבל ארט",
    description:
      "שלחו תמונה של החלל שלכם וקבלו הדמיה חינם של כיור שיש איטלקי מותאם אישית — ללא עלות וללא התחייבות.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "הדמיה חינם לכיור שיש מותאם אישית", type: "image/jpeg" }],
  },
  robots: { index: true, follow: true },
};

const STEPS = [
  { num: "1", title: "שולחים תמונה", text: "צלמו את החלל בטלפון — אמבטיה, מטבח או שירותים — והוסיפו מידות גסות. אין צורך למדוד בדיוק." },
  { num: "2", title: "האומן מתאים כיור", text: "אנחנו בוחרים אבן ופרופורציה שמתאימות בדיוק לחלל ולסגנון שלכם, מתוך שיש איטלקי מקורי." },
  { num: "3", title: "מקבלים הדמיה", text: "תוך 24-48 שעות נחזור עם הדמיה מציאותית של הכיור בחלל שלכם — ועם טווח מחירים ברור." },
];

const TRUST = [
  "אבן איטלקית מקורית עם תעודת מקור",
  "עבודת יד אומנותית, לא ייצור המוני",
  "ההדמיה חינם — ללא עלות וללא התחייבות",
  "רואים את התוצאה לפני שחותכים אבן יקרה",
];

const heroWrap = "relative overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-cream)] pt-16 pb-20 md:pt-24 md:pb-28";
const heroKicker = "text-[var(--color-brass)] text-sm font-medium tracking-widest uppercase mb-4";
const ctaBtn = "inline-block bg-[var(--color-brass)] text-[var(--color-charcoal)] px-10 py-5 rounded-full font-bold text-lg hover:bg-[var(--color-cream)] transition-colors duration-300";
const stepCard = "bg-[var(--color-cream)] rounded-2xl p-8 text-center border border-[var(--color-cream-darker)]";
const stepNum = "w-14 h-14 mx-auto mb-5 rounded-full bg-[var(--color-brass)] text-[var(--color-charcoal)] flex items-center justify-center text-2xl font-black";

export default function FreeVisualizationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Free custom marble sink visualization",
    name: "הדמיה חינם לכיור שיש מותאם אישית",
    provider: { "@type": "LocalBusiness", name: "Marble Art Sinks", url: SITE_URL, telephone: "+972-50-523-1042" },
    areaServed: { "@type": "Country", name: "Israel" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "ILS", description: "הדמיית AI חינם של כיור שיש מותאם אישית, ללא התחייבות." },
    url: `${SITE_URL}${PAGE_PATH}`,
  };

  return (
    <SelectionProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main>
        <section className={heroWrap}>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <p className={heroKicker}>ללא עלות · ללא התחייבות</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">קבלו הדמיה חינם של כיור שיש מותאם לחלל שלכם</h1>
            <p className="text-[var(--color-cream)]/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">שלחו תמונה של האמבטיה או המטבח — ותוך 24-48 שעות נחזור אליכם עם הדמיה מציאותית של כיור שיש איטלקי בעבודת יד, מותאם בדיוק לחלל שלכם, ועם טווח מחירים ברור.</p>
            <a href="#lead-form" className={ctaBtn}>שלחו תמונה וקבלו הדמיה ←</a>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[var(--color-cream-darker)]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[var(--color-charcoal)] text-3xl md:text-4xl font-black mb-3">איך זה עובד?</h2>
              <p className="text-[var(--color-charcoal)]/60 text-lg">שלושה צעדים פשוטים, בלי שום התחייבות.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {STEPS.map((s) => (
                <div key={s.num} className={stepCard}>
                  <div className={stepNum}>{s.num}</div>
                  <h3 className="text-[var(--color-charcoal)] text-xl font-black mb-3">{s.title}</h3>
                  <p className="text-[var(--color-charcoal)]/65 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[var(--color-cream)]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {TRUST.map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[var(--color-brass)] text-[var(--color-charcoal)] flex items-center justify-center text-sm font-black">✓</span>
                  <span className="text-[var(--color-charcoal)]/80 leading-relaxed">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lead-form" className="py-20 md:py-32 bg-[var(--color-cream-darker)]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">מלאו פרטים</p>
              <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-4">קבלו את ההדמיה שלכם</h2>
              <p className="text-[var(--color-charcoal)]/60 text-lg max-w-xl mx-auto">צרפו תמונה של החלל (אופציונלי אך מומלץ) — ככל שנראה יותר, ההדמיה מדויקת יותר. תוך 24-48 שעות נחזור אליכם.</p>
            </div>
            <LeadForm landingPage="/free-visualization" />
          </div>
        </section>
        <Footer />
      </main>
      <SelectionCart />
    </SelectionProvider>
  );
}
