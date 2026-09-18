// page.tsx (src/app/guides/page.tsx) · updated 18.09.2026 (Asia/Jerusalem)
// /guides hub — browsable index of all guide pages (source: guides.ts).
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GUIDES } from "./guides";

const SITE_URL = "https://www.marble-art.co.il";

export const metadata: Metadata = {
  title: "מדריכים — כיורי שיש, פורצלן ואבן טבעית",
  description:
    "מדריכים מקצועיים של Marble Art על כיורי שיש, פורצלן ואבן טבעית — יתרונות, עמידות, תחזוקה וסוגי התקנה. ידע שיעזור לכם לבחור נכון.",
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: `${SITE_URL}/guides`,
    siteName: "Marble Art Sinks",
    title: "מדריכים — Marble Art",
    description: "מדריכים מקצועיים על כיורי שיש, פורצלן ואבן טבעית.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function GuidesIndex() {
  return (
    <>
      <Header />
      <main dir="rtl" className="bg-[var(--color-cream)] min-h-[60vh]">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-14 md:mb-16">
            <p className="text-[var(--color-brass-dark)] text-xs font-medium tracking-[0.3em] uppercase mb-4">מדריך האבן</p>
            <h1 className="text-[var(--color-charcoal)] text-4xl md:text-5xl font-black leading-tight mb-4">מדריכים מקצועיים</h1>
            <p className="text-[var(--color-charcoal)]/70 text-lg max-w-2xl mx-auto">כל מה שצריך לדעת על כיורי שיש, פורצלן ואבן טבעית — כדי לבחור נכון וליהנות מהכיור לשנים.</p>
          </div>

          <Link href="/guides/stone-guide" className="group block bg-[var(--color-charcoal)] text-[var(--color-cream)] rounded-2xl p-7 md:p-8 mb-8 hover:bg-[var(--color-charcoal)]/90 transition-colors">
            <span className="inline-block text-xs font-bold text-[var(--color-brass)] mb-3">התחילו כאן</span>
            <h2 className="text-2xl md:text-3xl font-black mb-2 leading-tight">מדריך האבן — המדריך המלא</h2>
            <p className="text-[var(--color-cream)]/70 text-base leading-relaxed mb-4">כל הנושאים במקום אחד: בחירת אבן, שיש מול פורצלן, קלקטה, תחזוקה ותהליך הייצור בעבודת יד.</p>
            <span className="text-[var(--color-brass)] font-bold group-hover:underline">למדריך המלא ←</span>
          </Link>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {GUIDES.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="group block bg-[#fff] border border-[var(--color-cream-darker)] rounded-2xl p-7 hover:border-[var(--color-brass)] transition-colors">
                <span className="inline-block text-xs font-bold text-[var(--color-brass-dark)] bg-[var(--color-cream-darker)]/50 rounded-full px-3 py-1 mb-4">{g.tag}</span>
                <h2 className="text-[var(--color-charcoal)] text-2xl font-black mb-3 leading-tight">{g.title}</h2>
                <p className="text-[var(--color-charcoal)]/70 text-base leading-relaxed mb-4">{g.excerpt}</p>
                <span className="text-[var(--color-brass-dark)] font-bold group-hover:underline">קראו את המדריך →</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-[var(--color-charcoal)]/60 mb-5">רוצים כיור בהזמנה אישית?</p>
            <Link href="/#lead-form" className="inline-block bg-[var(--color-brass)] text-[var(--color-charcoal)] font-bold px-8 py-3 rounded-full hover:bg-[var(--color-brass-dark)] hover:text-[var(--color-cream)] transition-colors">קבלו הצעה אישית</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
