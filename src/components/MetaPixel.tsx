"use client";
// MetaPixel.tsx (src/components/MetaPixel.tsx) · updated 19.09.2026 17:39 (Asia/Jerusalem)
// Meta (Facebook) Pixel — loads ONLY when NEXT_PUBLIC_META_PIXEL_ID is set (Vercel env var).
// No ID = renders nothing, zero effect. Fires PageView; the LeadForm fires the "Lead" event.
import Script from "next/script";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function MetaPixel() {
  if (!PIXEL_ID) return null;
  const inline = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`;
  return <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: inline }} />;
}
