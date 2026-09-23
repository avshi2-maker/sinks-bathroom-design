// CaseStudyView.tsx (src/components/CaseStudyView.tsx) · updated 23.09.2026 10:39 (Asia/Jerusalem)
// Public page for a CRM-published case study: hero, gallery, story, customer quote, FAQ, lead form + full JSON-LD graph.
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { SelectionProvider } from "@/context/SelectionContext";
import { SelectionCart } from "@/components/SelectionCart";
import type { PublicCase } from "@/lib/cases";
import { caseImages, publicQuote, heDate } from "@/lib/cases";

const SITE_URL = "https://www.marble-art.co.il";
const heroImg = "w-full max-w-3xl mx-auto rounded-2xl object-cover aspect-[16/10] mb-8";
const blockCard = "bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-cream-darker)]";
const specPill = "bg-[var(--color-brass)]/10 border border-[var(--color-brass)]/30 rounded-full px-4 py-2 text-sm text-[var(--color-charcoal)]";
const galImg = "w-full aspect-square object-cover rounded-xl";
const faqItem = "bg-[var(--color-cream)] rounded-2xl p-6 border border-[var(--color-cream-darker)]";

export function CaseStudyView({ c }: { c: PublicCase }) {
  const g = c.gen;
  const url = SITE_URL + "/projects/" + c.slug;
  const imgs = caseImages(c);
  const hero = imgs[0];
  const quote = publicQuote(c);
  const faq = (g.faq || []).filter((f) => f.q && f.a);
  const date = c.published_at || c.finish_date;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article", "@id": url + "#article", headline: g.title, description: g.meta, inLanguage: "he",
      datePublished: c.published_at, dateModified: c.updated_at, url, mainEntityOfPage: url,
      image: imgs.map((i) => i.url),
      author: { "@type": "Organization", name: "Marble Art", url: SITE_URL },
      publisher: { "@type": "Organization", name: "Marble Art", url: SITE_URL },
      about: { "@type": "Service", name: g.material ? "כיור / עבודת " + g.material + " בהתאמה אישית" : "עבודת שיש בהתאמה אישית", areaServed: c.city || "ישראל", provider: { "@type": "LocalBusiness", name: "Marble Art Sinks", url: SITE_URL } },
      keywords: (g.tags || []).join(", "),
    },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "בית", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "פרויקטים", item: SITE_URL + "/projects" },
      { "@type": "ListItem", position: 3, name: g.title, item: url },
    ] },
  ];
  if (faq.length) graph.push({ "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
  if (quote) graph.push({ "@type": "Review", itemReviewed: { "@type": "Service", name: g.title }, reviewBody: quote.text, author: { "@type": "Person", name: quote.by }, ...(c.rating ? { reviewRating: { "@type": "Rating", ratingValue: c.rating, bestRating: 5 } } : {}) });
  const schema = { "@context": "https://schema.org", "@graph": graph };

  const blocks = [{ t: "האתגר", d: g.challenge }, { t: "התהליך", d: g.process }, { t: "התוצאה", d: g.result }].filter((b) => b.d);

  return (
    <SelectionProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        <section className="pt-14 pb-10 md:pt-20 bg-[var(--color-cream-darker)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">פרויקט · {c.city}{date ? " · " + heDate(date) : ""}</p>
            <h1 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-6 leading-tight">{g.title}</h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {hero ? <img src={hero.url} alt={hero.alt} className={heroImg} /> : null}
            <p className="text-[var(--color-charcoal)]/70 text-lg max-w-2xl mx-auto leading-relaxed">{g.summary}</p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {g.material ? <span className={specPill}>חומר: {g.material}</span> : null}
              {g.size ? <span className={specPill}>מידה: {g.size}</span> : null}
              {c.city ? <span className={specPill}>עיר: {c.city}</span> : null}
            </div>
          </div>
        </section>

        {blocks.length ? (
          <section className="py-16 md:py-20 bg-[var(--color-cream)]">
            <div className="max-w-4xl mx-auto px-6 grid gap-6">
              {blocks.map((b) => (
                <div key={b.t} className={blockCard}>
                  <h2 className="text-[var(--color-charcoal)] text-xl font-black mb-3">{b.t}</h2>
                  <p className="text-[var(--color-charcoal)]/70 leading-relaxed whitespace-pre-line">{b.d}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {imgs.length > 1 ? (
          <section className="py-16 md:py-20 bg-[var(--color-cream-darker)]">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-8 text-center">תמונות מהפרויקט</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {imgs.slice(1).map((i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i.url} src={i.url} alt={i.alt} className={galImg} loading="lazy" />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {quote ? (
          <section className="py-16 md:py-20 bg-[var(--color-cream)]">
            <figure className="max-w-3xl mx-auto px-6 text-center">
              {c.rating ? <div className="text-[var(--color-brass)] text-2xl tracking-widest mb-4" aria-label={c.rating + " מתוך 5"}>{"★".repeat(c.rating)}</div> : null}
              <blockquote className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black leading-snug">&quot;{quote.text}&quot;</blockquote>
              <figcaption className="text-[var(--color-charcoal)]/60 mt-4">— {quote.by}</figcaption>
            </figure>
          </section>
        ) : null}

        {faq.length ? (
          <section className="py-16 md:py-20 bg-[var(--color-cream-darker)]">
            <div className="max-w-3xl mx-auto px-6 grid gap-4">
              <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-4 text-center">שאלות נפוצות</h2>
              {faq.map((f) => (
                <div key={f.q} className={faqItem}>
                  <h3 className="text-[var(--color-charcoal)] font-black mb-2">{f.q}</h3>
                  <p className="text-[var(--color-charcoal)]/70 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section id="lead-form" className="py-20 md:py-28 bg-[var(--color-cream)]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">רוצים כזה?</p>
              <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-4">נתחיל את הפרויקט שלכם</h2>
              <p className="text-[var(--color-charcoal)]/60 text-lg max-w-xl mx-auto">שלחו תמונה של החלל וקבלו הדמיה חינם — נחזור אליכם תוך 24-48 שעות.</p>
            </div>
            <LeadForm landingPage={"/projects/" + c.slug} />
          </div>
        </section>
        <Footer />
      </main>
      <SelectionCart />
    </SelectionProvider>
  );
}
