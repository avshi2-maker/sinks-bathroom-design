// page.tsx (src/app/marble-sinks/[city]/page.tsx) · updated 23.09.2026 10:39 (Asia/Jerusalem)
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import Link from "next/link";
import { fetchPublishedCases, caseImages } from "@/lib/cases";

// Local proof: CRM-published projects in this city appear here automatically (refresh every 5 min).
export const revalidate = 300;

const pcard = "block bg-[var(--color-cream)] rounded-2xl border border-[var(--color-cream-darker)] overflow-hidden hover:border-[var(--color-brass)] transition-colors";
const pimg = "w-full aspect-[16/10] object-cover";
import { SelectionProvider } from "@/context/SelectionContext";
import { SelectionCart } from "@/components/SelectionCart";
import { CITIES, cityBySlug } from "../cities";

const SITE_URL = "https://www.marble-art.co.il";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) return {};
  const title = `כיורי שיש ${c.inCity} — בעבודת יד ובהזמנה אישית | מרבל ארט`;
  const description = `כיורי שיש איטלקי בעבודת יד ${c.inCity} ובכל אזור המרכז — עיצוב, ייצור והתקנה בהזמנה אישית. שלחו תמונה של החלל וקבלו הדמיה חינם. מבית Marble Art.`;
  const url = `${SITE_URL}/marble-sinks/${c.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "he_IL", url, siteName: "Marble Art Sinks", title, description, images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
    robots: { index: true, follow: true },
  };
}

const heroWrap = "relative overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-cream)] pt-16 pb-20 md:pt-24 md:pb-28";
const ctaBtn = "inline-block bg-[var(--color-brass)] text-[var(--color-charcoal)] px-10 py-5 rounded-full font-bold text-lg hover:bg-[var(--color-cream)] transition-colors duration-300";
const pillCard = "bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-cream-darker)]";

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) notFound();
  const local = (await fetchPublishedCases()).filter((x) => (x.city || "").trim() === c.he);

  const pillars = [
    { t: "עיצוב אישי", d: `אנחנו מלווים לקוחות ${c.inCity} מהסקיצה ועד ההתקנה — כיור שיש שמתוכנן בדיוק לחלל ולסגנון שלכם.` },
    { t: "עבודת יד אמיתית", d: "כל כיור מגולף ביד מגוש שיש איטלקי מקורי — פריט אחד ויחיד, לא ייצור המוני." },
    { t: "הדמיה לפני שחותכים", d: "שלחו תמונה של החלל וקבלו הדמיה מציאותית של הכיור עוד לפני שחותכים אבן יקרה." },
  ];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Marble Art Sinks",
    alternateName: "מרבל ארט",
    description: `כיורי שיש איטלקי בעבודת יד ובהזמנה אישית, בשירות לקוחות ${c.inCity} ובכל אזור המרכז.`,
    url: `${SITE_URL}/marble-sinks/${c.slug}`,
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: "₪₪₪",
    telephone: "+972-50-523-1042",
    areaServed: { "@type": "City", name: c.he },
    address: { "@type": "PostalAddress", addressCountry: "IL", addressRegion: "Israel" },
  };

  return (
    <SelectionProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <Header />
      <main>
        <section className={heroWrap}>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <p className="text-[var(--color-brass)] text-sm font-medium tracking-widest uppercase mb-4">שירות אישי {c.inCity} והמרכז</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">כיורי שיש {c.inCity} — בעבודת יד ובהזמנה אישית</h1>
            <p className="text-[var(--color-cream)]/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">מחפשים כיור שיש ייחודי {c.inCity}? אנחנו מעצבים, מייצרים ומתקינים כיורי שיש איטלקי בעבודת יד, מותאמים בדיוק לחלל שלכם. שלחו תמונה — ותקבלו הדמיה חינם.</p>
            <a href="#lead-form" className={ctaBtn}>קבלו הדמיה חינם ←</a>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[var(--color-cream-darker)]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <div key={p.t} className={pillCard}>
                  <h2 className="text-[var(--color-charcoal)] text-xl font-black mb-3">{p.t}</h2>
                  <p className="text-[var(--color-charcoal)]/65 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[var(--color-charcoal)]/60 mt-10 max-w-2xl mx-auto leading-relaxed">אנחנו עובדים עם לקוחות פרטיים, מעצבי פנים ואדריכלים {c.inCity} ובכל אזור המרכז והשרון — שיפוצי אמבטיה, בנייה חדשה והחלפת כיורים.</p>
          </div>
        </section>

        {local.length ? (
          <section className="py-16 md:py-20 bg-[var(--color-cream)]">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-[var(--color-charcoal)] text-2xl md:text-3xl font-black mb-8 text-center">פרויקטים שביצענו {c.inCity}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {local.map((x) => (
                  <Link key={x.slug} href={`/projects/${x.slug}`} className={pcard}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={caseImages(x)[0]?.url || "/og-image.jpg"} alt={caseImages(x)[0]?.alt || x.gen.title || ""} className={pimg} loading="lazy" />
                    <div className="p-5">
                      <h3 className="text-[var(--color-charcoal)] text-lg font-black mb-1 leading-tight">{x.gen.title}</h3>
                      <p className="text-[var(--color-charcoal)]/65 text-sm leading-relaxed">{x.gen.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section id="lead-form" className="py-20 md:py-32 bg-[var(--color-cream)]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">בואו נתחיל</p>
              <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-4">כיור שיש {c.inCity}?</h2>
              <p className="text-[var(--color-charcoal)]/60 text-lg max-w-xl mx-auto">מלאו פרטים וצרפו תמונה של החלל — נחזור אליכם תוך 24-48 שעות עם הדמיה וטווח מחירים.</p>
            </div>
            <LeadForm landingPage={`/marble-sinks/${c.slug}`} />
          </div>
        </section>
        <Footer />
      </main>
      <SelectionCart />
    </SelectionProvider>
  );
}
