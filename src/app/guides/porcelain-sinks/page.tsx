// page.tsx (src/app/guides/porcelain-sinks/page.tsx) · updated 18.09.2026 (Asia/Jerusalem)
// GEO/SEO guide: porcelain kitchen sinks — long-form authority content + Article & FAQPage schema.
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://www.marble-art.co.il";
const PAGE_URL = `${SITE_URL}/guides/porcelain-sinks`;

export const metadata: Metadata = {
  title: "המדריך המלא לכיורי פורצלן — יתרונות, עמידות ותחזוקה",
  description:
    "כל מה שצריך לדעת על כיורי פורצלן למטבח: למה פורצלן, המדע מאחורי החוזק, עמידות בחום, תחזוקה, סוגי התקנה ושאלות נפוצות. מדריך מקצועי מבית Marble Art / מרבל ארט.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    authors: ["Marble Art Sinks"],
    publishedTime: "2026-09-18T00:00:00+03:00",
    section: "מדריכי שיש ופורצלן",
    locale: "he_IL",
    url: PAGE_URL,
    siteName: "Marble Art Sinks",
    title: "המדריך המלא לכיורי פורצלן",
    description: "יתרונות, מדע החומרים, עמידות בחום, תחזוקה וסוגי התקנה של כיורי פורצלן למטבח.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const FAQ_ITEMS: { q: string; a: string }[] = [
  { q: "האם כיור פורצלן עמיד?", a: "כן. פורצלן נשרף בטמפרטורה גבוהה במיוחד (כ-1,230°C) והופך לחומר קרמי צפוף וקשיח, העמיד בפני סדקים, שריטות וכתמים. מטופח היטב, כיור פורצלן מחזיק עשרות שנים." },
  { q: "האם כיור פורצלן נסדק מחום?", a: "לא בתנאי מטבח רגילים. הצפיפות של הפורצלן מונעת התפשטות והתכווצות משינויי טמפרטורה, כך שסיר חם לא יסדק אותו. יחד עם זאת, מומלץ להימנע מהפלת פריטים כבדים כמו מחבת ברזל יצוק ישירות לתוך הכיור." },
  { q: "איך מנקים כיור פורצלן?", a: "מים וסבון כלים עדין מספיקים לתחזוקה יומיומית. יש להימנע מחומרי ניקוי שוחקים, אבקות קרצוף וצמר פלדה שעלולים לפגוע בגימור." },
  { q: "האם פורצלן מכתים?", a: "המשטח אינו נקבובי ולכן עמיד לכתמים. כתמי קפה, תה או עגבניות שיושבים זמן רב, וכן כתמי חלודה ממים עתירי ברזל, מוסרים בקלות בעזרת סודה לשתייה, חומץ או לימון." },
  { q: "פורצלן או נירוסטה — מה עדיף?", a: "פורצלן שקט יותר (סופג רעידות ומעמעם קולות), אינו מציג טביעות אצבע וכתמי מים כמו נירוסטה, ומגיע במגוון עיצובים. נירוסטה קלה יותר אך רועשת ומראה סימנים יומיומיים." },
  { q: "כמה זמן מחזיק כיור פורצלן?", a: "כיור פורצלן שמטופח כראוי יכול להחזיק עשרות שנים, תוך שמירה על מראה טוב ועל ביצועים גבוהים." },
  { q: "אילו סוגי התקנה מתאימים לפורצלן?", a: "פורצלן מתאים לכיורים בסגנון כפרי (farmhouse), חיבור נפתח, הרכבה עליונה וכלי קיבול. הרכבה תחתונה דורשת התייחסות למשקל הפורצלן ולכן מומלץ להתקין בעזרת מקצוען." },
  { q: "אפשר כיור פורצלן בהזמנה אישית?", a: "כן. ב-Marble Art כל כיור מתוכנן ונבנה בעבודת יד ובהתאמה אישית למטבח שלכם, עם הדמיה מציאותית לפני הייצור." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "המדריך המלא לכיורי פורצלן",
  description: "יתרונות, מדע החומרים, עמידות בחום, תחזוקה וסוגי התקנה של כיורי פורצלן למטבח.",
  inLanguage: "he",
  image: `${SITE_URL}/og-image.jpg`,
  mainEntityOfPage: PAGE_URL,
  author: { "@type": "Organization", name: "Marble Art Sinks" },
  publisher: { "@type": "Organization", name: "Marble Art Sinks", url: SITE_URL },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-4 leading-tight">{title}</h2>
      <div className="text-[var(--color-charcoal)]/75 text-base md:text-lg leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export default function PorcelainGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main dir="rtl" className="bg-[var(--color-cream)]">
        <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <nav className="text-sm text-[var(--color-brass-dark)] mb-6">
            <Link href="/" className="hover:underline">דף הבית</Link> · מדריך האבן
          </nav>
          <h1 className="text-[var(--color-charcoal)] text-4xl md:text-5xl font-black leading-tight mb-5">המדריך המלא לכיורי פורצלן</h1>
          <p className="text-[var(--color-charcoal)]/70 text-lg md:text-xl leading-relaxed mb-12">
            כיור המטבח הוא לב הבית — כאן שוטפים ידיים, כלים, ירקות ופירות. הוא חייב להיות עמיד, היגייני, קל לניקוי ועמיד בשינויי טמפרטורה — ורצוי שגם יפה ושקט. במדריך הזה נסביר למה פורצלן איכותי הוא מהבחירות הטובות ביותר לכיור מטבח, מה עומד מאחורי החוזק שלו, ואיך לשמור עליו לאורך שנים.
          </p>

          <Section title="למה פורצלן לכיור מטבח?">
            <p>פורצלן הוא הטרנד החם בעיצוב המטבח — קירות, חיפויים, משטחי עבודה ואיים. אך בכיורי מטבח הוא נוכח כבר מתחילת המאה ה-20, והסיבות ברורות: משטח לא נקבובי שאינו סופג כתמים או חיידקים, עמידות גבוהה, קלות ניקוי, ורבגוניות עיצובית.</p>
            <p>יתרון נוסף שלא תמיד חושבים עליו הוא השקט. מטבח הוא מקום רועש — מים זורמים, מחבתות וכלים. פורצלן עבה וצפוף סופג רעידות ומעמעם קולות, בניגוד לנירוסטה שמגבירה כל טיפה ומגע.</p>
          </Section>

          <Section title="מה הופך כיור מטבח למושלם?">
            <p>כיור מטבח טוב נדרש לעמוד בכמה תנאים בו-זמנית: עמידות לאורך זמן, קלות ניקוי, היגיינה, עמידות בפני שריטות וכתמים, ויכולת לעמוד בשינויי טמפרטורה. פורצלן איכותי עונה על כל אלה — ומוסיף מראה יוקרתי וחוויית שימוש שקטה.</p>
          </Section>

          <Section title="המדע מאחורי החוזק">
            <p>פורצלן הוא חומר קרמי, אך שונה מכלי חרס או אבן רגילים. הוא עשוי מחימר, מינרלים ומרכיבים מעודנים יותר, שנלחצים ונשרפים בטמפרטורה גבוהה במיוחד. התוצאה היא חומר צפוף וקומפקטי במיוחד, העמיד בפני סדקים, שריטות וכתמים.</p>
          </Section>

          <Section title="עמידות בחום ובקור">
            <p>פורצלן נשרף בסביבות 1,230°C — טמפרטורה שגבוהה בהרבה מכל מה שקורה במטבח, כך שאין צורך לדאוג לעמידות בחום. אותה צפיפות שמעניקה לו עמידות בחום גם מונעת התפשטות והתכווצות משינויי טמפרטורה, ולכן, בניגוד לחומרים אחרים, הוא אינו נסדק מהפרשי חום.</p>
          </Section>

          <Section title="תחזוקה, כתמים וניקוי">
            <p>תחזוקת פורצלן פשוטה: מים וסבון כלים עדין לניקוי יומיומי. יש להימנע מחומרים שוחקים, אבקות קרצוף וצמר פלדה שעלולים לפגוע בגימור.</p>
            <p>למרות העמידות הגבוהה, בתנאים מסוימים פורצלן עלול להיסדק (למשל מהפלת מחבת ברזל יצוק כבדה) או להכתים. כתמי קפה, תה או רטבי עגבניות שיושבים זמן רב, וכן כתמי חלודה ממים עתירי ברזל, מוסרים בקלות בעזרת סודה לשתייה, חומץ או לימון. בניגוד לנירוסטה, פורצלן אינו מציג טביעות אצבע וכתמי מים — מטרד יומיומי מוכר. מטופח היטב, הוא מחזיק עשרות שנים.</p>
          </Section>

          <Section title="סוגי כיורי פורצלן והתקנה">
            <p>פורצלן הוא בחירה מצוינת למגוון סגנונות: כיורים כפריים (farmhouse), כיורים עם חיבור נפתח, הרכבה עליונה וכלי קיבול. כיורי פורצלן בהרכבה תחתונה עשויים להיות מורכבים יותר להתקנה בשל המשקל, ולכן מומלץ להתייעץ עם ספק הכיורים והמתקין לגבי העיצוב הספציפי שלכם.</p>
          </Section>

          <section className="mb-12">
            <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-6 leading-tight">שאלות נפוצות</h2>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
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
            <h2 className="text-2xl md:text-3xl font-black mb-3">רוצים כיור פורצלן בהזמנה אישית?</h2>
            <p className="text-[var(--color-cream)]/70 mb-6 max-w-xl mx-auto">כל כיור אצלנו מתוכנן ונבנה בעבודת יד, בדיוק למטבח שלכם — עם הדמיה מציאותית לפני הייצור.</p>
            <Link href="/#lead-form" className="inline-block bg-[var(--color-brass)] text-[var(--color-charcoal)] font-bold px-8 py-3 rounded-full hover:bg-[var(--color-brass-dark)] hover:text-[var(--color-cream)] transition-colors">קבלו הצעה אישית</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
