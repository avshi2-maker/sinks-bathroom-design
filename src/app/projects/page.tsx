// page.tsx (src/app/projects/page.tsx) · updated 19.09.2026 (Asia/Jerusalem)
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PROJECTS } from "./projects";

const SITE_URL = "https://www.marble-art.co.il";

export const metadata: Metadata = {
  title: "פרויקטים — כיורי שיש ופורצלן בעבודת יד | מרבל ארט",
  description: "פרויקטים אמיתיים של כיורי שיש וגרניט פורצלן בהזמנה אישית — האתגר, התהליך והתוצאה בכל פרויקט. מבית Marble Art.",
  keywords: ["פרויקטים כיורי שיש", "דוגמאות כיור שיש", "כיור פורצלן בהזמנה אישית", "כיור שיש בעבודת יד"],
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: { type: "website", locale: "he_IL", url: `${SITE_URL}/projects`, siteName: "Marble Art Sinks", title: "פרויקטים — מרבל ארט", description: "פרויקטים אמיתיים של כיורי שיש ופורצלן בהזמנה אישית.", images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
  robots: { index: true, follow: true },
};

const card = "group block bg-[var(--color-cream)] rounded-2xl border border-[var(--color-cream-darker)] overflow-hidden hover:border-[var(--color-brass)] transition-colors";
const cardImg = "w-full aspect-[16/10] object-cover";

export default function ProjectsIndex() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-14 pb-8 md:pt-20 bg-[var(--color-cream-darker)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[var(--color-brass-dark)] text-sm font-medium tracking-widest uppercase mb-3">התיק שלנו</p>
            <h1 className="text-[var(--color-charcoal)] text-4xl md:text-5xl font-black mb-4">פרויקטים</h1>
            <p className="text-[var(--color-charcoal)]/60 text-lg max-w-2xl mx-auto leading-relaxed">כיורי שיש וגרניט פורצלן בהזמנה אישית — האתגר, התהליך והתוצאה בכל פרויקט.</p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-[var(--color-cream)]">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            {PROJECTS.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className={card}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} className={cardImg} />
                <div className="p-6">
                  <p className="text-[var(--color-brass-dark)] text-xs font-medium tracking-widest uppercase mb-2">{p.material} · {p.area}</p>
                  <h2 className="text-[var(--color-charcoal)] text-xl font-black mb-2 leading-tight group-hover:text-[var(--color-brass-dark)] transition-colors">{p.title}</h2>
                  <p className="text-[var(--color-charcoal)]/65 leading-relaxed text-sm">{p.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
