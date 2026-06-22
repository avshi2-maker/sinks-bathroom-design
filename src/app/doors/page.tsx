// src/app/doors/page.tsx
// Public door page (marble-art.co.il/doors). Full section, mirroring the sinks
// homepage rhythm: Header -> hero -> why -> how -> teaser/strip/form -> Footer.

import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DoorHero } from "@/components/doors/DoorHero";
import { DoorWhy } from "@/components/doors/DoorWhy";
import { DoorHowItWorks } from "@/components/doors/DoorHowItWorks";
import { DoorExperience } from "@/components/doors/DoorExperience";

export const metadata: Metadata = {
  title: "דלת שיש בגובה אפס",
  description:
    "דלת שיש חלקה ובלתי נראית — חיפוי שיש ללא תפר, מערכת תלייה מבנית נסתרת וחיבור בגובה אפס. בחרו אבן, גודל וידית ושלחו בקשה.",
  alternates: { canonical: "https://www.marble-art.co.il/doors" },
  openGraph: {
    title: "דלת שיש בגובה אפס | Marble Art",
    description: "חיפוי שיש חלק וללא תפר, מערכת תלייה מבנית נסתרת וחיבור בלתי נראה בגובה אפס.",
    url: "https://www.marble-art.co.il/doors",
    type: "website",
  },
};

export default function DoorsPage() {
  return (
    <>
      <Header />
      <main dir="rtl">
        <DoorHero />
        <DoorWhy />
        <DoorHowItWorks />
        <DoorExperience />
      </main>
      <Footer />
    </>
  );
}
