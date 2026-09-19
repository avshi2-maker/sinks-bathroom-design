# Marble Art — Handover (19/09/2026) · leads + organic-search session

## ✅ SHIPPED THIS SESSION (all live on Vercel)

### Website — sinks-bathroom-design (marble-art.co.il)
- **NEW lead-magnet page `/free-visualization`** (commit `f139af2`, pushed). Free AI-render offer → hero, 3 steps, trust bar, LeadForm. Tested end-to-end: a real lead landed in **Gmail + CRM**, tagged `landing_page = /free-visualization` so campaign leads filter separately.
- LeadForm got an optional `landingPage` prop (home form unchanged). Nav tab **"הדמיה חינם"** + sitemap entry (priority 0.95).
- **HowTo + FAQ schema on `/guides/marble-care`** (commit `3c56058`, pushed). GuideArticle now emits reusable **HowTo** JSON-LD; marble-care carries the 3-step water-bead test + the exact AI-search question "איך יודעים אם כיור שיש אטום?". → the water-bead video and the site now answer the same question; AI engines (Google AI Overviews / Gemini / ChatGPT) can quote the page.

### Content Studio — content-studio (studio.marble-art.co.il)
- **Lead CTA wired into the generation prompt** (commit `344c681`, pushed). Every post Studio produces — single or weekly batch — now ends its CTA with `הדמיה חינם → marble-art.co.il/free-visualization`. Studio = content engine; the page = capture. No duplication.

## 🧭 THE FUNNEL (how the pieces connect)
```
STUDIO (make posts, CTA baked in) → publish FB/IG/YouTube/Pinterest → traffic
   → /free-visualization (capture, photo upload) → CRM + Gmail alert
   → הדמיה fulfillment → close
```
Three roles, one owner each: **content = Studio · capture = /free-visualization · fulfillment = CRM-side (future auto-render).**

## 📌 LIVE ASSETS
- **8-Shorts planner** (Claude artifact, reopen by link): all 8 posts preloaded, copy buttons, per-platform ticks (YouTube/IG/FB), editable dates, progress bar. Saved in your gallery.
- **Social leads pack** (file): copy-paste captions for every channel → all point at `/free-visualization`.
- **Week 1 Short LIVE:** water-bead clip generated in Veo (10s, sound), captioned, uploaded to YouTube + Facebook + **Pinterest (via mobile app)**.
- Clip files: `C:\SinkS\pictures\clips\FB drops.mp4` (+ `FB drops_web.mp4`, faststart copy).

## 🔑 KEY FACTS (so next session doesn't re-discover)
- **Connected folders this session:** `C:\SinkS\sinks-bathroom-design`, `C:\SinkS\content-studio`, `C:\SinkS\pictures\clips`. Delete permission granted on the two repo folders (git lock cleanup).
- **Push:** NO GitHub token in the bridge for sinks-bathroom-design or content-studio → Claude commits, **Avshi runs `git push`** (two lines: `cd <repo>` then `git push`). Only **cash-box** has auto-push wired. Wiring a PAT for the other repos is a pending Ferrari.
- **Pinterest:** business account "Marble Art" connected. Desktop web video upload is buggy — **use the phone app** (worked). File was spec-perfect (H.264 1080×1920, 10s); Pinterest's uploader was the issue, not the clip.
- **Instagram:** NOT yet shareable from Meta Business Suite — needs (1) IG switched to **Professional/Business** account, (2) **linked to the Facebook Page** in Meta Suite. This is the one blocked social channel.
- **Video generation:** Veo (Gemini Pro) — must pick the **Video** tool (or Google Flow), not the default box, or it returns stills. Models garble Hebrew → add on-screen captions in **CapCut/Canva**, not in the model. ~8s native, Extend for 10s.
- **Publishing:** Meta Business Suite auto-publishes FB + IG Reels on a calendar (free); YouTube Studio schedules the Short at upload. Native tools do the posting — no custom auto-poster needed.

## ⏭️ TASK BACKLOG (priority order, effort tags)

**A — Finish the content pipeline (do first, cheap, compounding)**
1. **Instagram → Professional + link to FB Page** (quick, no code). Unblocks IG Reels scheduling + the IG half of the funnel.
2. **Veo prompts for Shorts 2–8** (quick). Claude to write sound-ready, safe-format Veo prompts for carving / before-after / veins / 3-mistakes / choosing-slab / sketch→product / install, so you batch them in one Gemini session.
3. **Pinterest "claim website"** (quick). Settings → Claimed accounts → claim marble-art.co.il (logo on every pin + analytics + search boost). Needs a small verify tag on the site — Claude can add + push.
4. **Planner: add Pinterest column** (quick). 4th tick per week: FB / IG / YouTube / Pinterest.

**B — Organic search build-out (the 1–8, biggest growth lever)**
5. **Programmatic city pages** (medium) — "כיור שיש ב<עיר>" for תל אביב / הרצליה / רמת גן / ירושלים / חיפה / רעננה / כפר סבא. One template → N indexed pages. **Top pick.**
6. **Price-intent page "כמה עולה כיור שיש?"** (quick) — highest commercial-intent traffic; honest ranges + CTA. **Top pick.**
7. **Google Business Profile + review engine** (quick, mostly non-code) — map-pack visibility + star reviews; one-tap review-request link. **Top pick.**
8. **FAQ + HowTo schema on the other 6 guides** (quick) — replicate what marble-care now has across all guides.
9. **Real project case-study pages** (medium) — each finished sink = an indexed page, feeds /free-visualization.
10. **Auto-blog from Studio** (medium) — pipe Studio's "ידע מקצועי" posts to a /blog for weekly fresh content.

**C — Ferrari upgrades (build once, pay forever)**
11. **Speed-to-lead WhatsApp auto-responder** (medium) — instant "קיבלנו, נחזור תוך 24–48ש" the second a lead submits. Biggest conversion lever on the capture side.
12. **Meta Pixel on /free-visualization** (quick) — fire a Lead event → lookalike audiences for cheap paid scale later.
13. **Auto-push for sinks + content-studio** (quick) — fine-grained PATs like cash-box, so Claude pushes directly and you stop pasting `git push`.
14. **Studio Metrics tab → real leads** (quick) — read the actual `leads` table (`landing_page=/free-visualization`) instead of the manual log; true post→lead conversion.

## 🎯 THE THING THAT ACTUALLY GROWS IT
The plumbing is built and the funnel is closed. Now it's **volume + consistency**: post 1 Short/week (planner tracks it), and stand up the **city pages + price page + GBP** trio so organic search starts feeding `/free-visualization` on its own. Everything technical is in place — the lever now is publishing.

## ▶️ SUGGESTED NEXT SESSION START
Pick one: **(5) city pages**, **(6) price page**, or **(2) Veo prompts 2–8**. Say the number and Claude starts building.
