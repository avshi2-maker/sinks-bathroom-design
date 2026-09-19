// page.tsx (src/app/projects/[slug]/page.tsx) · updated 19.09.2026 (Asia/Jerusalem)
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { SelectionProvider } from "@/context/SelectionContext";
import { SelectionCart } from "@/components/SelectionCart";
import { PROJECTS, projectBySlug } from "../projects";

const SITE_URL = "https://www.marble-art.co.il";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) return {};
  const url = `${SITE_URL}/projects/${p.slug}`;
  const image = p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}`;
  return {
    title: `${p.title} | פרויקטים — מרבל ארט`,
    description: p.summary,
    alternates: { canonical: url },
    openGraph: { type: "article", locale: "he_IL", url, siteName: "Marble Art Sinks", title: p.title, description: p.summary, images: [{ url: image, width: 1200, height: 630 }] },
    robots: { index: true, follow: true },
  };
}

const heroImg = "w-full max-w-3xl mx-auto rounded-2xl object-cover aspect-[16/10] mb-8";
const blockCard = "bg-[var(--color-cream)] rounded-2xl p-7 border border-[var(--color-cream-darker)]";
const specPill = "bg-[var(--color-brass)]/10 border border-[var(--color-brass)]/30 rounded-full px-4 py-2 text-sm text-[var(--color-charcoal)]";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();
  const url = `${SITE_URL}/projects/${p.slug}`;
  const image = p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    description: p.summary,
    image,
    url,
    inLanguage: "he",
    material: p.material,
    creator: { "@type": "Organization", name: "Marble Art Sinks", url: SITE_URL },
  };

  const blocks = [
    { t: "האתגר", d: p.challenge },
    { t: "התהליך", d: p.process },
    { t: "התוצאה", d: p.result },
  ];

  return (
    <SelectionProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        <section className="pt-14 pb-10 md:pt-20 bg-[var(--color-cream-darker)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">פרויקט · {p.area}</p>
            <h1 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-6 leading-tight">{p.title}</h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={p.title} className={heroImg} />
            <p className="text-[var(--color-charcoal)]/70 text-lg max-w-2xl mx-auto leading-relaxed">{p.summary}</p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className={specPill}>חומר: {p.material}</span>
              <span className={specPill}>מידה: {p.size}</span>
              <span className={specPill}>אזור: {p.area}</span>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[var(--color-cream)]">
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {blocks.map((b) => (
              <div key={b.t} className={blockCard}>
                <h2 className="text-[var(--color-charcoal)] text-xl font-black mb-3">{b.t}</h2>
                <p className="text-[var(--color-charcoal)]/65 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="lead-form" className="py-20 md:py-28 bg-[var(--color-cream-darker)]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">רוצים כזה?</p>
              <h2 className="text-[var(--color-charcoal)] text-3xl md:text-5xl font-black mb-4">נתחיל את הפרויקט שלכם</h2>
              <p className="text-[var(--color-charcoal)]/60 text-lg max-w-xl mx-auto">שלחו תמונה של החלל וקבלו הדמיה חינם — נחזור אליכם תוך 24-48 שעות.</p>
            </div>
            <LeadForm landingPage={`/projects/${p.slug}`} />
          </div>
        </section>
        <Footer />
      </main>
      <SelectionCart />
    </SelectionProvider>
  );
}
