import Link from "next/link";
import { LiveClock } from "./LiveClock";

const NAV = [
  { href: "/", label: "כיורים" },
  { href: "/doors", label: "דלתות" },
  { href: "/marble-sinks-for-designers", label: "למעצבים" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-cream)]/85 backdrop-blur-md border-b border-[var(--color-cream-darker)]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center shrink-0" aria-label="ARVO — דף הבית">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/arvo-logo.svg" alt="ARVO — בניה תשתיות פיתוח" width={240} height={220} className="h-14 md:h-20 w-auto" />
        </Link>
        <nav className="flex items-center gap-3 md:gap-6">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-[var(--color-charcoal)] hover:text-[var(--color-brass-dark)] text-sm md:text-base font-medium transition-colors">{n.label}</Link>
          ))}
        </nav>
        <div className="hidden md:block shrink-0"><LiveClock /></div>
      </div>
    </header>
  );
}
