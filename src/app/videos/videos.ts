// videos.ts (src/app/videos/videos.ts) · updated 18.09.2026 (Asia/Jerusalem)
// Single source of truth for /videos + the home "בתנועה" strip.
// Add a video -> paste its YouTube ID + title here (newest/most-important first).
export type VideoMeta = {
  id: string;        // YouTube video ID (the part after youtu.be/ , /shorts/ or watch?v=)
  title: string;
  desc: string;
  date: string;      // ISO upload date
  kind: "short" | "long";
};

export const CHANNEL_URL = "https://www.youtube.com/@marbleart-il";

export const VIDEOS: VideoMeta[] = [
  { id: "foprmo8EAdI", title: "שיפוץ חדר רחצה — התקנת כיור שיש", desc: "תיעוד אמיתי מהשטח: התקנת כיור שיש בהזמנה אישית בשיפוץ חדר רחצה.", date: "2026-09-18", kind: "short" },
  { id: "syL4upX2yRM", title: "איך נוצר כיור שיש — מגוש אבן לכיור", desc: "הדמיה של תהליך יצירת כיור שיש: מגוש אבן טבעי, דרך חריטה וגילוף, ועד הכיור המוגמר.", date: "2026-09-18", kind: "short" },
  { id: "gvRyw4Vnqy8", title: "מסקיצה לכיור — כיור זוגי בגוון ירוק", desc: "מהסקיצה אל הכיור: הדמיה של כיור שיש זוגי בגוון ירוק, בהזמנה אישית.", date: "2026-09-18", kind: "short" },
  { id: "4CNTuAVflQQ", title: "מסקיצה לכיור — כיור בגוון צהוב", desc: "מהרעיון למציאות: הדמיה של כיור שיש בגוון צהוב חם, בעיצוב אישי.", date: "2026-09-18", kind: "short" },
  { id: "CNA3YwXVcJM", title: "מסקיצה לכיור — כיור שיש משולש", desc: "עיצוב לא שגרתי: הדמיה של כיור שיש משולש, מהסקיצה ועד המוצר.", date: "2026-09-18", kind: "short" },
  { id: "G2iEUVfDsyo", title: "כיור שיש משולש — עיצוב פינתי", desc: "הדמיה של כיור שיש משולש שמנצל פינה בצורה מושלמת, בהזמנה אישית.", date: "2026-09-18", kind: "short" },
  { id: "d5X8nFQ10_M", title: "שיש שחור מול פורצלן", desc: "הדמיה שממחישה את המעבר משיש שחור טבעי לפורצלן — שני חומרים, שני אופיים.", date: "2026-09-18", kind: "short" },
  { id: "NIa3AR8Oy_A", title: "כיור שיש בשני גוונים", desc: "הדמיה של כיור שיש בשילוב שני גוונים — משחק של צבע וניגודיות.", date: "2026-09-18", kind: "short" },
  { id: "vPasEbHnVtA", title: "כיור שיש פינתי — שוט קולנועי", desc: "הדמיה קולנועית של כיור שיש פינתי בהזמנה אישית — ורידים, צורה וגימור.", date: "2026-09-18", kind: "short" },
  { id: "ZCPRLspGVHg", title: "כיור שיש עם מתקן מגבות", desc: "הדמיה של כיור שיש משולב עם מתקן מגבות — פתרון עיצובי שלם לחדר הרחצה.", date: "2026-09-18", kind: "short" },
  { id: "B5H5bZS72Lw", title: "כיור שיש — רגע קולנועי", desc: "הדמיה פוטוריאליסטית של כיור שיש אמנותי: אור, ורידים וגימור.", date: "2026-09-18", kind: "short" },
  { id: "ibV8lAAmWgk", title: "כיור שיש — הדמיה קולנועית", desc: "הדמיה קולנועית של כיור שיש בהזמנה אישית — ההשראה לכיור הבא שלכם.", date: "2026-09-18", kind: "short" },
  { id: "FT-ai9XA9Jc", title: "כיור שיש בעבודת יד — הדמיה", desc: "הדמיה של כיור שיש בהזמנה אישית, בעבודת יד — כל כיור פריט אחד ויחיד.", date: "2026-09-18", kind: "short" },
];
