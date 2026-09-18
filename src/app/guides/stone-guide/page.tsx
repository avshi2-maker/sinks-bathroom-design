// page.tsx (src/app/guides/stone-guide/page.tsx) · updated 18.09.2026 (Asia/Jerusalem)
// Pillar page "מדריך האבן": summarizes every guide, links down to each, aggregates FAQ + schema.
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://www.marble-art.co.il";
const PAGE_URL = `${SITE_URL}/guides/stone-guide`;

export const metadata: Metadata = {
  title: "מדריך האבן — המדריך המלא לכיורי שיש ופורצלן בהזמנה אישית",
  description: "כל מה שצריך לדעת על כיורי שיש ופורצלן: בחירת אבן, שיש מול פורצלן, קלקטה, תחזוקה, איטום, ואיך נוצר כיור בעבודת יד. המדריך המרכזי של Marble Art / מרבל ארט.",
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "article", locale: "he_IL", url: PAGE_URL, siteName: "Marble Art Sinks", title: "מדריך האבן — המדריך המלא לכיורי שיש ופורצלן", description: "בחירת אבן, השוואות, תחזוקה ותהליך הייצור — כל הידע על כיורי שיש ופורצלן במקום אחד.", images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
};

type PillarItem = { slug: string; tag: string; title: string; summary: string };

const ITEMS: PillarItem[] = [
  { slug: "why-marble", tag: "שיש", title: "למה לבחור שיש טבעי", summary: "שיש טבעי נותן יופי שאין שני לו — כל לוח שונה, כך ששני כיורים לעולם לא זהים. הוא עמיד בחום, מחזיק עשרות שנים בטיפול נכון, ומעלה את הערך הנתפס של הבית. לצד היתרונות, הוא דורש איטום תקופתי וטיפול עדין." },
  { slug: "marble-vs-porcelain", tag: "השוואה", title: "שיש מול פורצלן — איך לבחור", summary: "שיש מציע יופי טבעי וייחודי אך דורש תחזוקה; פורצלן קשיח, אחיד ובתחזוקה נמוכה אך פחות ייחודי. הבחירה תלויה במה שחשוב לכם יותר — אופי טבעי או קלות תחזוקה — ובחלל שבו הכיור מותקן." },
  { slug: "calacatta-marble", tag: "שיש", title: "כיורי שיש קלקטה", summary: "קלקטה הוא שיש היוקרה: רקע לבן בהיר, ורידי זהב דרמטיים ונדירות אמיתית. הוא הופך כל כיור לפריט גיבור וייחודי, ומתאים במיוחד לחדרי רחצה ראשיים ולפרויקטים מונחי-עיצוב. כמו כל שיש טבעי, הוא רגיש לחומצות ודורש איטום." },
  { slug: "porcelain-sinks", tag: "פורצלן", title: "המדריך לכיורי פורצלן", summary: "פורצלן הוא חומר קרמי דחוס ועמיד במיוחד: קשיח, עמיד בחום ובכתמים, אחיד למראה ובתחזוקה נמוכה. בחירה מצוינת למי שרוצה מראה נקי ומודרני עם מינימום טיפול, כולל אפשרויות התקנה מגוונות." },
  { slug: "marble-care", tag: "תחזוקה", title: "תחזוקת כיור שיש", summary: "כיור שיש נשאר מרהיב עשרות שנים בשגרה נכונה: ניקוי עדין יומיומי עם חומר pH-ניטרלי, איטום כל 6–12 חודשים, והימנעות מחומרים חומציים ושוחקים. מבחן מים פשוט יגיד מתי צריך לאטום מחדש." },
  { slug: "custom-sinks", tag: "בהזמנה אישית", title: "היתרון של כיור בהזמנה אישית", summary: "כיור בהזמנה אישית נבנה במידות מדויקות, בסוג האבן, בצורה ובגימור שבחרתם — התאמה מושלמת לחלל שלכם. זה ההבדל בין מתקן מדף לבין יצירה שנבנתה בדיוק עבורכם." },
  { slug: "how-its-made", tag: "בעבודת יד", title: "איך נוצר כיור שיש בעבודת יד", summary: "המסע מהגוש הטבעי ועד ההתקנה: בחירת לוח, עיצוב, חיתוך וגילוף ידני, ליטוש, איטום ובקרת איכות. ייצור בעבודת יד לוקח מספר שבועות — וזה בדיוק מה שהופך כל כיור לפריט אחד ויחיד." },
];

const FAQ = [
  { q: "מה עדיף לכיור — שיש או פורצלן?", a: "שני החומרים מצוינים. שיש נותן יופי טבעי וייחודי (כל לוח שונה) אך דורש איטום תקופתי וטיפול עדין. פורצלן קשיח, אחיד ובתחזוקה נמוכה. הבחירה תלויה אם חשוב לכם אופי טבעי-ייחודי או קלות תחזוקה." },
  { q: "כמה זמן לוקח לייצר כיור בהזמנה אישית?", a: "בדרך כלל מספר שבועות, תלוי בגודל, במורכבות ובסוג האבן. כל כיור נחצב מאבן טבעית ומעובד בעבודת יד — לא ייצור המוני." },
  { q: "כל כמה זמן צריך לאטום כיור שיש?", a: "בדרך כלל כל 6–12 חודשים לפי עוצמת השימוש. מבחן המים יגיד מתי: אם טיפות מים נספגות ומכהות את האבן במקום להתגבש לכדוריות, הגיע הזמן לאטום מחדש." },
  { q: "האם הכיור ייראה בדיוק כמו בתמונה?", a: "בשיש טבעי — לא. שני לוחות אינם זהים, ולכן הדוגמה על הכיור שלכם תהיה ייחודית לו. אפשר לראות אפשרויות לוח לפני הייצור." },
  { q: "אפשר להתאים מידות, צורה וגימור?", a: "כן. המידות, הצורה, עומק האגן וסוג הגימור נקבעים לפי החלל והצרכים שלכם — הכיור נבנה בהזמנה אישית מההתחלה." },
  { q: "איך מנקים ומטפלים בכיור שיש?", a: "ניקוי עדין עם חומר pH-ניטרלי ומטלית רכה, ניגוב לאחר השימוש, ואיטום תקופתי. הימנעו מחומרים חומציים (חומץ, לימון) ומאבקות שוחקות." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "מדריך האבן — המדריך המלא לכיורי שיש ופורצלן",
  description: "בחירת אבן, השוואות, תחזוקה ותהליך הייצור — כל הידע על כיורי שיש ופורצלן במקום אחד.",
  inLanguage: "he",
  image: `${SITE_URL}/og-image.jpg`,
  mainEntityOfPage: PAGE_URL,
  author: { "@type": "Organization", name: "Marble Art Sinks" },
  publisher: { "@type": "Organization", name: "Marble Art Sinks", url: SITE_URL },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main dir="rtl" className="bg-[var(--color-cream)]">
        <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <nav className="text-sm text-[var(--color-brass-dark)] mb-6">
            <Link href="/" className="hover:underline">דף הבית</Link> · <Link href="/guides" className="hover:underline">מדריכים</Link>
          </nav>
          <h1 className="text-[var(--color-charcoal)] text-4xl md:text-5xl font-black leading-tight mb-5">מדריך האבן — כל מה שצריך לדעת על כיורי שיש ופורצלן</h1>
          <p className="text-[var(--color-charcoal)]/70 text-lg md:text-xl leading-relaxed mb-12">בחירת כיור אבן היא החלטה לשנים רבות. ריכזנו כאן את כל הידע — סוגי אבן, השוואות, תחזוקה ותהליך הייצור בעבודת יד — כדי שתוכלו לבחור נכון. כל נושא מסוכם בקצרה, עם קישור למדריך המלא.</p>

          {ITEMS.map((it) => (
            <section key={it.slug} className="mb-10">
              <span className="inline-block text-xs text-[var(--color-brass-dark)] font-bold mb-2">{it.tag}</span>
              <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-3 leading-tight">{it.title}</h2>
              <p className="text-[var(--color-charcoal)]/75 text-base md:text-lg leading-relaxed mb-3">{it.summary}</p>
              <Link href={`/guides/${it.slug}`} className="text-[var(--color-brass-dark)] font-bold hover:underline">למדריך המלא ←</Link>
            </section>
          ))}

          <section className="mb-12">
            <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-6 leading-tight">שאלות נפוצות</h2>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <details key={i} className="group bg-[var(--color-cream-darker)]/40 border border-[var(--color-cream-darker)] rounded-2xl px-6 py-1 open:bg-[var(--color-cream-darker)]/60 transition-colors">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-4 [&::-webkit-details-marker]:hidden">
                    <span className="text-[var(--color-charcoal)] text-lg font-bold text-right">{item.q}</span>
                    <span className="shrink-0 text-[var(--color-brass-dark)] text-2xl font-black transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-[var(--color-charcoal)]/70 text-base leading-relaxed pb-5 text-right">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="bg-[var(--color-charcoal)] text-[var(--color-cream)] rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-3">רוצים כיור בהזמנה אישית?</h2>
            <p className="text-[var(--color-cream)]/70 mb-6 max-w-xl mx-auto">כל כיור אצלנו מתוכנן ונבנה בעבודת יד, בדיוק לחלל שלכם — עם הדמיה מציאותית לפני הייצור.</p>
            <Link href="/#lead-form" className="inline-block bg-[var(--color-brass)] text-[var(--color-charcoal)] font-bold px-8 py-3 rounded-full hover:bg-[var(--color-brass-dark)] hover:text-[var(--color-cream)] transition-colors">קבלו הצעה אישית</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
