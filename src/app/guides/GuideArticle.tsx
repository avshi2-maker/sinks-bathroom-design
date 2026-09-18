// GuideArticle.tsx (src/app/guides/GuideArticle.tsx) · updated 18.09.2026 (Asia/Jerusalem)
// Shared renderer for /guides article pages: Header + Article/FAQ schema + sections + FAQ + related guides + CTA + Footer.
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GUIDES } from "./guides";

const SITE_URL = "https://www.marble-art.co.il";

export type GuideSection = { title: string; paras: string[] };
export type GuideFaq = { q: string; a: string };
export type GuideData = {
  slug: string;
  h1: string;
  intro: string;
  sections: GuideSection[];
  faq: GuideFaq[];
  videoId?: string; // optional YouTube video ID embedded under the intro
};

export function GuideArticle({ data }: { data: GuideData }) {
  const PAGE_URL = `${SITE_URL}/guides/${data.slug}`;
  const related = GUIDES.filter((g) => g.slug !== data.slug).slice(0, 3);
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

  const videoSchema = data.videoId
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: data.h1,
        description: data.intro.slice(0, 200),
        uploadDate: "2026-09-18",
        thumbnailUrl: [`https://i.ytimg.com/vi/${data.videoId}/hqdefault.jpg`],
        embedUrl: `https://www.youtube.com/embed/${data.videoId}`,
        contentUrl: `https://www.youtube.com/watch?v=${data.videoId}`,
        publisher: { "@type": "Organization", name: "Marble Art Sinks", url: SITE_URL },
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {videoSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />}
      <Header />
      <main dir="rtl" className="bg-[var(--color-cream)]">
        <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <nav className="text-sm text-[var(--color-brass-dark)] mb-6">
            <Link href="/" className="hover:underline">דף הבית</Link> · <Link href="/guides" className="hover:underline">מדריכים</Link>
          </nav>
          <h1 className="text-[var(--color-charcoal)] text-4xl md:text-5xl font-black leading-tight mb-5">{data.h1}</h1>
          <p className="text-[var(--color-charcoal)]/70 text-lg md:text-xl leading-relaxed mb-12">{data.intro}</p>

          {data.videoId && (
            <div className="rounded-2xl overflow-hidden border border-[var(--color-cream-darker)] shadow-sm bg-black mb-12">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${data.videoId}`} title={data.h1} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
            </div>
          )}

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

          <section className="mb-12">
            <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-6 leading-tight">מדריכים נוספים</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="block bg-[var(--color-cream-darker)]/40 border border-[var(--color-cream-darker)] rounded-2xl p-5 hover:bg-[var(--color-cream-darker)]/60 transition-colors">
                  <span className="inline-block text-xs text-[var(--color-brass-dark)] font-bold mb-2">{g.tag}</span>
                  <h3 className="text-[var(--color-charcoal)] text-lg font-bold leading-tight mb-2">{g.title}</h3>
                  <span className="text-[var(--color-brass-dark)] text-sm font-bold">קראו את המדריך ←</span>
                </Link>
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
