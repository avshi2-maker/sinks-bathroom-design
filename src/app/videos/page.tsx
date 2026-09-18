// page.tsx (src/app/videos/page.tsx) · updated 18.09.2026 (Asia/Jerusalem)
// /videos — featured video + grid, VideoObject schema, links to the YouTube channel.
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VIDEOS, CHANNEL_URL } from "./videos";

const SITE_URL = "https://www.marble-art.co.il";

export const metadata: Metadata = {
  title: "סרטונים — כיורי שיש בעבודת יד | Marble Art",
  description: "סרטוני תהליך, השראה ותחזוקה של כיורי שיש ופורצלן בהזמנה אישית. צפו איך נוצר כיור אמנותי — מגוש אבן ועד התקנה. מבית Marble Art / מרבל ארט.",
  alternates: { canonical: `${SITE_URL}/videos` },
  openGraph: { type: "website", locale: "he_IL", url: `${SITE_URL}/videos`, siteName: "Marble Art Sinks", title: "סרטונים — Marble Art", description: "צפו איך נוצר כיור שיש אמנותי בעבודת יד.", images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
};

const featured = VIDEOS[0];
const rest = VIDEOS.slice(1);

const videoSchema = VIDEOS.map((v) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: v.title,
  description: v.desc,
  uploadDate: v.date,
  thumbnailUrl: [`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`],
  embedUrl: `https://www.youtube.com/embed/${v.id}`,
  contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
  publisher: { "@type": "Organization", name: "Marble Art Sinks", url: SITE_URL },
}));

export default function VideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <Header />
      <main dir="rtl" className="bg-[var(--color-cream)] min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12 md:mb-14">
            <p className="text-[var(--color-brass-dark)] text-xs font-medium tracking-[0.3em] uppercase mb-4">Marble Art</p>
            <h1 className="text-[var(--color-charcoal)] text-4xl md:text-5xl font-black leading-tight mb-4">סרטונים</h1>
            <p className="text-[var(--color-charcoal)]/70 text-lg max-w-2xl mx-auto">צפו איך נוצר כיור שיש אמנותי — מגוש אבן טבעי, דרך חריטה וגילוף, ועד ההתקנה בבית.</p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[var(--color-cream-darker)] shadow-sm bg-black">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${featured.id}`} title={featured.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          </div>
          <h2 className="text-[var(--color-charcoal)] text-xl md:text-2xl font-black mt-5 mb-1 leading-tight">{featured.title}</h2>
          <p className="text-[var(--color-charcoal)]/70 text-base leading-relaxed">{featured.desc}</p>

          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-6 mt-14">
              {rest.map((v) => (
                <Link key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" className="group block bg-[#fff] border border-[var(--color-cream-darker)] rounded-2xl overflow-hidden hover:border-[var(--color-brass)] transition-colors">
                  <div className="relative w-full bg-black" style={{ paddingTop: "56.25%" }}>
                    <img className="absolute inset-0 w-full h-full object-cover" src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[var(--color-charcoal)] text-lg font-bold leading-tight mb-1">{v.title}</h3>
                    <p className="text-[var(--color-charcoal)]/70 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="bg-[var(--color-charcoal)] text-[var(--color-cream)] rounded-2xl p-8 text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-black mb-3">רוצים לראות עוד?</h2>
            <p className="text-[var(--color-cream)]/70 mb-6 max-w-xl mx-auto">עקבו אחרי הערוץ שלנו ביוטיוב לסרטוני תהליך, השראה וטיפים על כיורי שיש בעבודת יד.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href={CHANNEL_URL} target="_blank" className="inline-block bg-[var(--color-brass)] text-[var(--color-charcoal)] font-bold px-8 py-3 rounded-full hover:bg-[var(--color-brass-dark)] hover:text-[var(--color-cream)] transition-colors">לערוץ היוטיוב שלנו</Link>
              <Link href="/#lead-form" className="inline-block border border-[var(--color-cream)]/40 text-[var(--color-cream)] font-bold px-8 py-3 rounded-full hover:bg-[var(--color-cream)]/10 transition-colors">קבלו הצעה אישית</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
