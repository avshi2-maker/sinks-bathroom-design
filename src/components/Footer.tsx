"use client";
// Footer.tsx (src/components/Footer.tsx) · updated 20.09.2026 (Asia/Jerusalem)
// Marble Art wordmark + social icons + internal SEO links + service-area links + copyright.
import Link from "next/link";
import { CITIES } from "@/app/marble-sinks/cities";

const WA_MESSAGE = "שלום, ראיתי את האתר של מרבל ארט ומעוניין/ת בכיור שיש.";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590495129435", d: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" },
  { label: "Instagram", href: "https://www.instagram.com/marble_art_sinks", stroke: true },
  { label: "YouTube", href: "https://www.youtube.com/@marbleart-il", d: "M23 12s0-3.3-.4-4.9a2.5 2.5 0 0 0-1.8-1.8C19 5 12 5 12 5s-7 0-8.8.3A2.5 2.5 0 0 0 1.4 7.1C1 8.7 1 12 1 12s0 3.3.4 4.9a2.5 2.5 0 0 0 1.8 1.8C5 19 12 19 12 19s7 0 8.8-.3a2.5 2.5 0 0 0 1.8-1.8C23 15.3 23 12 23 12zM9.8 15.2V8.8l6 3.2-6 3.2z" },
  { label: "Pinterest", href: "https://www.pinterest.com/avshisapir/", d: "M12.3 2C6.9 2 4 5.6 4 9.3c0 1.7 1 3.9 2.5 4.6.2.1.4 0 .4-.2l.2-.9c.1-.2 0-.3-.1-.4-.6-.7-.9-1.6-.9-2.5 0-3 2.2-5.6 5.9-5.6 3.2 0 5 2 5 4.6 0 3.4-1.5 6.3-3.8 6.3-1.2 0-2.2-1-1.9-2.3.4-1.5 1.1-3.1 1.1-4.2 0-1-.5-1.8-1.6-1.8-1.3 0-2.3 1.3-2.3 3.1 0 1.1.4 1.9.4 1.9l-1.5 6.4c-.4 1.9-.1 4.2 0 4.4 0 .1.2.2.3.1.1-.1 1.6-2 2.1-3.8l.8-3c.4.8 1.6 1.4 2.8 1.4 3.7 0 6.2-3.4 6.2-7.9C20.2 5.1 17.3 2 12.3 2z" },
];

function trackEvent(eventName: string, params: Record<string, string | number>) {
  if (typeof window !== "undefined") {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") w.gtag("event", eventName, params);
  }
}

export function Footer() {
  const waText = encodeURIComponent(WA_MESSAGE);
  const avshiHref = "https://wa.me/972505231042?text=" + waText;
  const linkCls = "hover:text-[var(--color-brass)] transition-colors";
  const iconCls = "text-[var(--color-cream)]/55 hover:text-[var(--color-brass)] transition-colors";
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
        <p className="text-sm mb-6">כיורי שיש וגרניט פורצלן בעבודת יד</p>

        <div className="flex justify-center items-center gap-5 mb-8">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={iconCls}>
              {s.stroke ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
              )}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-8">
          <Link href="/marble-sink-prices" className={linkCls}>מחירון כיור שיש</Link>
          <Link href="/free-visualization" className={linkCls}>הדמיה חינם</Link>
          <Link href="/projects" className={linkCls}>פרויקטים</Link>
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
