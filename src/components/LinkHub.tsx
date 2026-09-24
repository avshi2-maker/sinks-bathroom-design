"use client";
// LinkHub (src/components/LinkHub.tsx) · updated 24.09.2026 17:35 (Asia/Jerusalem)
import Link from "next/link";

const PHONE = "972505231042";
const WA_TEXT = encodeURIComponent("היי, הגעתי מדף הקישורים של Marble Art ואשמח לפרטים על כיור שיש");
const WA_HREF = `https://wa.me/${PHONE}?text=${WA_TEXT}`;

type Social = { label: string; href: string; d?: string; stroke?: boolean };

const SOCIALS: Social[] = [
  { label: "Instagram", href: "https://www.instagram.com/marble_art_sinks", stroke: true },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590495129435", d: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" },
  { label: "YouTube", href: "https://www.youtube.com/@marbleart-il", d: "M23 12s0-3.3-.4-4.9a2.5 2.5 0 0 0-1.8-1.8C19 5 12 5 12 5s-7 0-8.8.3A2.5 2.5 0 0 0 1.4 7.1C1 8.7 1 12 1 12s0 3.3.4 4.9a2.5 2.5 0 0 0 1.8 1.8C5 19 12 19 12 19s7 0 8.8-.3a2.5 2.5 0 0 0 1.8-1.8C23 15.3 23 12 23 12zM9.8 15.2V8.8l6 3.2-6 3.2z" },
  { label: "Pinterest", href: "https://www.pinterest.com/avshisapir/", d: "M12.3 2C6.9 2 4 5.6 4 9.3c0 1.7 1 3.9 2.5 4.6.2.1.4 0 .4-.2l.2-.9c.1-.2 0-.3-.1-.4-.6-.7-.9-1.6-.9-2.5 0-3 2.2-5.6 5.9-5.6 3.2 0 5 2 5 4.6 0 3.4-1.5 6.3-3.8 6.3-1.2 0-2.2-1-1.9-2.3.4-1.5 1.1-3.1 1.1-4.2 0-1-.5-1.8-1.6-1.8-1.3 0-2.3 1.3-2.3 3.1 0 1.1.4 1.9.4 1.9l-1.5 6.4c-.4 1.9-.1 4.2 0 4.4 0 .1.2.2.3.1.1-.1 1.6-2 2.1-3.8l.8-3c.4.8 1.6 1.4 2.8 1.4 3.7 0 6.2-3.4 6.2-7.9C20.2 5.1 17.3 2 12.3 2z" },
];

const PAGES = [
  { label: "הדמיה חינם לחלל שלכם", sub: "שלחו תמונה — קבלו הדמיה של הכיור", href: "/free-visualization", id: "free_visualization" },
  { label: "לאדריכלים ומעצבי פנים", sub: "בנייה לפי שרטוט · לוחות 5–12 מ״מ · מייטר 45°", href: "/marble-sinks-for-designers", id: "designers" },
  { label: "פרויקטים שביצענו", sub: "עבודות אמיתיות, בעבודת יד", href: "/projects", id: "projects" },
  { label: "לאתר המלא", sub: "marble-art.co.il", href: "/", id: "home" },
];

function track(name: string, params: Record<string, string>) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", name, params);
}

function SocialIcon({ s }: { s: Social }) {
  if (s.stroke) {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d={s.d} />
    </svg>
  );
}

const btnBase = "flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 transition active:scale-[0.99]";
const socialBtn = "flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-[#F6F4EF] transition hover:border-[#C9A66B] hover:text-[#C9A66B]";

export function LinkHub() {
  const onWa = () => track("whatsapp_click", { contact: "avshi", location: "link_hub", phone: PHONE });
  const onCall = () => track("link_hub_click", { target: "phone" });

  return (
    <main className="min-h-screen bg-[#1B1A17] text-[#F6F4EF]">
      <div className="relative h-56 w-full overflow-hidden sm:h-64">
        <img src="/hero-render.jpg" alt="כיור שיש בעבודת יד — Marble Art" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#1B1A17]" />
      </div>

      <div className="mx-auto -mt-16 flex max-w-md flex-col items-center gap-6 px-4 pb-12">
        <div className="relative flex flex-col items-center gap-2 text-center">
          <span className="text-xs font-bold tracking-[0.35em] text-[#C9A66B]" dir="ltr">MARBLE ART</span>
          <h1 className="text-3xl font-black leading-tight">כיורי שיש בעבודת יד</h1>
          <p className="text-base text-[#D8D2C6]">נבנים לפי השרטוט שלכם — מלוחות שיש טבעי</p>
        </div>

        <a href={WA_HREF} target="_blank" rel="noopener noreferrer" onClick={onWa} className={`${btnBase} bg-[#1F7A4D] text-white`}>
          <span className="flex flex-col text-right">
            <span className="text-lg font-bold">שלחו הודעה בוואטסאפ</span>
            <span className="text-sm text-white/80">מענה אישי מאבשי</span>
          </span>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" /></svg>
        </a>

        <nav className="flex w-full flex-col gap-3" aria-label="קישורים">
          {PAGES.map((p) => (
            <Link key={p.id} href={p.href} onClick={() => track("link_hub_click", { target: p.id })} className={`${btnBase} border border-white/15 bg-white/5 hover:border-[#C9A66B]`}>
              <span className="flex flex-col text-right">
                <span className="text-lg font-bold">{p.label}</span>
                <span className="text-sm text-[#D8D2C6]">{p.sub}</span>
              </span>
              <span className="text-2xl text-[#C9A66B]" aria-hidden="true">›</span>
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-3" aria-label="רשתות חברתיות">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} onClick={() => track("link_hub_click", { target: s.label.toLowerCase() })} className={socialBtn}>
              <SocialIcon s={s} />
            </a>
          ))}
          <a href={`tel:+${PHONE}`} aria-label="חיוג" onClick={onCall} className={socialBtn}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
          </a>
        </div>

        <p className="text-center text-sm text-[#D8D2C6]">
          <span dir="ltr">050-5231042</span> · עבודת יד · לפי שרטוט · בכל הארץ
        </p>
      </div>
    </main>
  );
}
