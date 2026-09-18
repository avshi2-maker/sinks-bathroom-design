// videos.ts (src/app/videos/videos.ts) · updated 18.09.2026 (Asia/Jerusalem)
// Single source of truth for /videos. Add a video -> paste its YouTube ID + title here (newest first).
export type VideoMeta = {
  id: string;        // YouTube video ID (the part after youtu.be/ or watch?v=)
  title: string;
  desc: string;
  date: string;      // ISO upload date, e.g. "2026-09-18"
  kind: "short" | "long";
};

export const CHANNEL_URL = "https://www.youtube.com/@marbleart-il";

export const VIDEOS: VideoMeta[] = [
  {
    id: "syL4upX2yRM",
    title: "הדמיית ייצור כיור שיש — חריטה מגוש אבן",
    desc: "הדמיה של תהליך יצירת כיור שיש: מגוש אבן טבעי, דרך חריטה וגילוף, ועד הכיור המוגמר. כל כיור נבנה בעבודת יד, פריט אחד ויחיד.",
    date: "2026-09-18",
    kind: "short",
  },
];
