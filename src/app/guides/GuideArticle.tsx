// GuideArticle.tsx (src/app/guides/GuideArticle.tsx) · updated 18.09.2026 (Asia/Jerusalem)
// Shared renderer for /guides article pages: Header + Article/FAQ schema + sections + FAQ + CTA + Footer.
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://www.marble-art.co.il";

export type GuideSection = { title: string; paras: string[] };
export type GuideFaq = { q: string; a: string };
export type GuideData = {
  slug: string;
  h1: string;
  intro: string;
  sections: GuideSection[];
  faq: GuideFaq[];
};

export function GuideArticle({ data }: { data: GuideData }) {
  const PAGE_URL = `${SITE_URL}/guides/${data.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.h1,
    description: data.intro.slice(0, 160),
    inLanguage: "he",
    image: `${SITE_URL}/og-image.jpg`,
    mainEntityOfPage: PAGE_URL,
    author: { "@type": "Organization", name: "Marble Art Sinks" },
    publisher: { "@type": "Organization", name: "Marble Art Sinks", url: SITE_URL },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };

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
          <h1 className="text-[var(--color-charcoal)] text-4xl md:text-5xl font-black leading-tight mb-5">{data.h1}</h1>
          <p className="text-[var(--color-charcoal)]/70 text-lg md:text-xl leading-relaxed mb-12">{data.intro}</p>

          {data.sections.map((s, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-4 leading-tight">{s.title}</h2>
              <div className="text-[var(--color-charcoal)]/75 text-base md:text-lg leading-relaxed space-y-4">
                {s.paras.map((p, k) => <p key={k}>{p}</p>)}
              </div>
            </section>
          ))}

          <section className="mb-12">
            <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-6 leading-tight">שאלות נפוצות</h2>
            <div className="space-y-3">
              {data.faq.map((item, i) => (
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
