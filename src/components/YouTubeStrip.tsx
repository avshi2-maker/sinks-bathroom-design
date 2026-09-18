// YouTubeStrip.tsx (src/components/YouTubeStrip.tsx) · updated 18.09.2026 (Asia/Jerusalem)
// Home "בתנועה" section — YouTube Shorts embeds (vertical) from videos.ts, links to /videos + channel.
// Replaces the old Cloudinary <VideoGallery/>. Cloudinary masters kept as backup (unused).
import Link from "next/link";
import { VIDEOS, CHANNEL_URL } from "@/app/videos/videos";

export function YouTubeStrip() {
  const strip = VIDEOS.slice(0, 6);
  if (strip.length === 0) return null;

  return (
    <section id="videos-gallery" className="py-20 md:py-28 bg-[var(--color-charcoal)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[var(--color-brass)] text-xs font-medium tracking-[0.3em] uppercase mb-4">בתנועה</p>
          <h2 className="text-[var(--color-cream)] text-3xl md:text-5xl font-black mb-4 leading-tight">הכיורים שלנו בווידאו</h2>
          <p className="text-[var(--color-cream)]/60 max-w-2xl mx-auto leading-relaxed">סרטונים קצרים — מהאבן ועד הגימור. לחצו להפעלה, או עברו לערוץ היוטיוב שלנו לכל הסרטונים.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 justify-items-center">
          {strip.map((v) => (
            <div key={v.id} className="w-full max-w-[300px] rounded-2xl overflow-hidden bg-black shadow-lg">
              <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
                <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${v.id}`} title={v.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-12">
          <Link href="/videos" className="inline-block bg-[var(--color-brass)] text-[var(--color-charcoal)] font-bold px-8 py-3 rounded-full hover:bg-[var(--color-brass-dark)] hover:text-[var(--color-cream)] transition-colors">לכל הסרטונים ←</Link>
          <Link href={CHANNEL_URL} target="_blank" className="inline-block border border-[var(--color-cream)]/40 text-[var(--color-cream)] font-bold px-8 py-3 rounded-full hover:bg-[var(--color-cream)]/10 transition-colors">לערוץ היוטיוב</Link>
        </div>
      </div>
    </section>
  );
}
