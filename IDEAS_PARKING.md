# Marble Art — Site & YouTube Ideas Parking

Parked upgrade ideas for the marketing site (marble-art.co.il) + YouTube channel. Not urgent — revisit when the trigger condition is met.

---

## 1. Auto-pull latest YouTube videos onto /videos — effort: medium
**Idea:** `/videos` reads the channel's YouTube RSS feed and lists new uploads automatically, instead of adding each video by hand in `src/app/videos/videos.ts`.
**Benefit:** Upload to YouTube → it appears on the site with no code change. Zero maintenance.
**How:** a Next.js server component/route that fetches `https://www.youtube.com/feeds/videos.xml?channel_id=<ID>`, parses the `<entry>` items (video id, title, published), caches ~1h. Featured = newest.
**Trigger to build:** once posting reaches ~1 video/week. Below that, the current one-line-in-`videos.ts` method is simpler and safer.
**Note:** needs the channel_id (not the @handle) — YouTube Studio → Settings → Channel → Advanced settings.

---

## 3. Brand-styled auto-generated video thumbnails — effort: medium
**Idea:** an HTML→PNG template (same Playwright pipeline used for the channel banner) that stamps the Marble Art logo + Hebrew title + brass accent onto a still frame → a consistent thumbnail per video.
**Benefit:** every video shares one premium look → the channel reads as a real brand, higher click-through.
**Trigger to build:** once there are 5+ videos. Below that it's not worth the setup — hand-pick a strong frame per video instead.
**Note:** thumbnail spec 1280×720; keep text in the center-safe area.

---

## Done (shipped 18.09.2026)
- ✅ 7 guide pages + master pillar page (/guides/stone-guide)
- ✅ Related-guides cross-links on every guide
- ✅ /videos page (YouTube embeds + VideoObject schema) + "סרטונים" nav tab
- ✅ Featured video embedded inside /guides/how-its-made
- ✅ New YouTube channel @marbleart-il — branded (logo + banner), described, linked

## How to use
- Add ideas under a `##` heading. One idea = title + benefit + effort + trigger-to-build.
- When an idea ships, move it to the Done list with the date.
