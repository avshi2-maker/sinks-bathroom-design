// links/page.tsx (src/app/links/page.tsx) · updated 24.09.2026 17:35 (Asia/Jerusalem)
import type { Metadata } from "next";
import { LinkHub } from "@/components/LinkHub";

const SITE_URL = "https://www.marble-art.co.il";
const PAGE_PATH = "/links";

export const metadata: Metadata = {
  title: "כל הקישורים | מרבל ארט",
  description:
    "כיורי שיש בעבודת יד לפי השרטוט שלכם — וואטסאפ, אינסטגרם, פייסבוק, יוטיוב, פינטרסט והדמיה חינם במקום אחד.",
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "Marble Art Sinks",
    title: "Marble Art — כיורי שיש בעבודת יד",
    description: "כל הדרכים ליצור קשר ולראות עבודות — במקום אחד.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Marble Art — כיורי שיש בעבודת יד", type: "image/jpeg" }],
  },
  robots: { index: false, follow: true },
};

export default function LinksPage() {
  return <LinkHub />;
}
