# Marble Art — Handover (19/09/2026, end of day)

Big build day. Everything below is **live and pushed** (auto-push now wired on both repos). Tomorrow = publishing support, especially making each post/video look great in Canva.

---

## ✅ SHIPPED TODAY

### Website — marble-art.co.il (repo sinks-bathroom-design)
| Feature | URL / where |
|---|---|
| Free AI-visualization lead page | marble-art.co.il/free-visualization |
| Price page ("כמה עולה כיור שיש") + FAQ schema | marble-art.co.il/marble-sink-prices |
| 10 city pages (SEO) | marble-art.co.il/marble-sinks/tel-aviv, /herzliya, /ramat-gan, /jerusalem, /haifa, /raanana, /kfar-saba, /netanya, /rishon-lezion, /givatayim |
| Projects / case studies (nav "פרויקטים") | marble-art.co.il/projects |
| Real Calacatta "two options" case study (bid) — both renders | marble-art.co.il/projects/calacatta-two-options |
| HowTo + FAQ schema (AI search) | /guides/marble-care · /guides/how-its-made |
| WhatsApp one-tap reply button in lead-alert email | (arrives in your Gmail on each lead) |
| Meta Pixel (env-gated) + Lead event | fires site-wide; ID 1895361261843895 set in Vercel |
| Footer internal links to price/city/projects | every page footer |

Commits: `f139af2` `3c56058` `6a1f1ed` `c31253e` `5e2ff89` `0b5ba2f` `9f79852` `8e58691` `b696e80` (+ parked ideas `6b0dcee` `472e263`).

### Content Studio — studio.marble-art.co.il (repo content-studio)
- **Lead CTA baked into every generated post** (commit `344c681`).
- **Video upload + per-platform output** (commit `22549e8`): upload image **or video** (grabs a frame) → separate tailored boxes for **YouTube / Instagram / Facebook / Pinterest**, each with its own copy buttons. Pinterest includes a **תיאור לחיפוש / AI** (SEO) box. Every caption ends with the free-visualization link.

### Infrastructure
- **Auto-push wired** on sinks-bathroom-design + content-studio (fine-grained GitHub token in each repo's `.git/config` — survives the VM resets that caused the old 50% push failures). I now commit **and** push directly.

---

## 🧭 THE FUNNEL (how it all connects)
```
STUDIO (1 upload → 4 platforms' text, CTA baked in)
  → publish to YouTube / Instagram / Facebook / Pinterest
  → traffic to /free-visualization + /marble-sink-prices + city pages
  → lead fills form → CRM + Gmail alert (with WhatsApp reply button) → you answer in 1 tap
  → Meta Pixel remembers every visitor for future retargeting + lookalikes
```

---

## ⏭️ TOMORROW — PUBLISHING (your ask: step-by-step + Canva)

**Main event: I walk you through posting, and fixing each post/video in Canva to look great.**

1. **Generate Week-2 content in Studio.** Upload the sink video (or a photo) → tick all 4 platforms → "צור תוכן לכל רשת" → copy each platform's boxes.
2. **Canva polish (I guide you click-by-click).** For each post/video: pick the right size (Reel 1080×1920, Pin 1000×1500, YouTube thumb 1280×720), drop in the clip/photo, add the Hebrew caption in the brand look (charcoal #2B2B2B / brass #B08D57 / cream #F5F0E8, Frank Ruhl Libre font), export. I'll give exact steps so Canva stops being annoying.
3. **Schedule/publish:** Meta Business Suite (FB + IG auto-publish), YouTube Studio (schedule the Short), Pinterest app (video Pin). Tick each in the 8-Shorts planner.

## ⏭️ ALSO PENDING (your side, when you have time)
- **Instagram → Professional account + link to FB Page** (unlocks IG scheduling in Meta Suite). Blocked channel until done.
- **Google Business Profile + reviews** — biggest local lever; verify + request reviews.
- **Pinterest "claim website"** (Settings → Claimed accounts → marble-art.co.il) — logo on pins + analytics.
- **Send me a real photo** of the porcelain-trough project to replace its placeholder image.
- **Search Console:** request indexing for the price page + a few city pages (a few per day; the sitemap catches the rest).
- **Verify Meta Pixel** firing: Events Manager → Test events → open the site → see PageView.

## 💡 PARKED IDEAS (in IDEAS_PARKING.md, build when triggered)
- Auto-pull YouTube videos onto /videos
- Brand-styled auto thumbnails
- Studio Metrics → real lead count (only when running paid ads)
- Meta Conversions API (only when running paid ads)

## 🎯 THE REAL LEVER NOW
The whole machine is built. What moves the needle is **publishing consistently** — 1 Short/week + the 4-platform posts from Studio, made to look premium in Canva. That's exactly what we do tomorrow, step by step.
