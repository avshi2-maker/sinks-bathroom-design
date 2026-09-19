"use client";
// Footer.tsx (src/components/Footer.tsx) · updated 19.09.2026 (Asia/Jerusalem)
// ARVO branding scrubbed -> Marble Art text wordmark + copyright + internal SEO links.
import Link from "next/link";
import { CITIES } from "@/app/marble-sinks/cities";

const WA_MESSAGE = "שלום, ראיתי את האתר של מרבל ארט ומעוניין/ת בכיור שיש.";
function trackEvent(eventName: string, params: Record<string, string | number>) {
  if (typeof window !== "undefined") {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", eventName, params);
    }
  }
}
export function Footer() {
  const waText = encodeURIComponent(WA_MESSAGE);
  const avshiHref = "https://wa.me/972505231042?text=" + waText;
  const linkCls = "hover:text-[var(--color-brass)] transition-colors";
  const onAvshiClick = () => trackEvent("whatsapp_click", { contact: "avshi", location: "footer", phone: "972505231042" });
  const onFormClick = () => trackEvent("lead_form_click", { location: "footer" });
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]/70 py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="inline-block w-3 h-3 bg-[var(--color-brass)] rotate-45" />
          <span className="text-2xl font-black tracking-wide text-[var(--color-cream)]">Marble Art</span>
          <span className="text-sm text-[var(--color-cream)]/60">מרבל ארט</span>
        </div>
        <p className="text-sm mb-8">כיורי שיש וגרניט פורצלן בעבודת יד</p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-8">
          <Link href="/marble-sink-prices" className={linkCls}>מחירון כיור שיש</Link>
          <Link href="/free-visualization" className={linkCls}>הדמיה חינם</Link>
          <Link href="/guides" className={linkCls}>מדריכים</Link>
          <Link href="/marble-sinks-for-designers" className={linkCls}>למעצבים ואדריכלים</Link>
          <Link href="/videos" className={linkCls}>סרטונים</Link>
        </div>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-[var(--color-cream)]/40 mb-3">אזורי שירות</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {CITIES.map((c) => (
              <Link key={c.slug} href={`/marble-sinks/${c.slug}`} className={linkCls}>כיורי שיש {c.inCity}</Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm mb-10">
          <a href={avshiHref} target="_blank" rel="noopener noreferrer" onClick={onAvshiClick} className={linkCls}>וואטסאפ - אבשי 050-5231042</a>
          <a href="#lead-form" onClick={onFormClick} className={linkCls}>מלאו טופס</a>
        </div>
        <p className="text-xs text-[var(--color-cream)]/40">© 2026 Marble Art · מרבל ארט. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}
