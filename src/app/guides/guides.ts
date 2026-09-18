// guides.ts (src/app/guides/guides.ts) · updated 18.09.2026 (Asia/Jerusalem)
// Single source of truth for the /guides hub. Add a guide -> append one entry here + a page folder.
export type GuideMeta = { slug: string; title: string; excerpt: string; tag: string };

export const GUIDES: GuideMeta[] = [
  {
    slug: "why-marble",
    title: "למה שיש טבעי לכיור אמנותי",
    excerpt: "יופי טבעי שאין שני לו, עמידות לאורך שנים והשקעה שמעלה ערך — למה שיש הוא הבחירה הפרימיום.",
    tag: "שיש",
  },
  {
    slug: "marble-vs-porcelain",
    title: "שיש מול פורצלן — איך לבחור",
    excerpt: "השוואה של יופי, תחזוקה, עמידות ועלות בין שיש טבעי לפורצלן, כדי לבחור נכון.",
    tag: "השוואה",
  },
  {
    slug: "custom-sinks",
    title: "היתרון של כיור בהזמנה אישית",
    excerpt: "התאמה מושלמת לחלל, שליטה מלאה בעיצוב ואומנות בעבודת יד — היתרונות של כיור מותאם.",
    tag: "בהזמנה אישית",
  },
  {
    slug: "porcelain-sinks",
    title: "המדריך המלא לכיורי פורצלן",
    excerpt: "יתרונות, מדע החומרים, עמידות בחום, תחזוקה וסוגי התקנה של כיורי פורצלן למטבח.",
    tag: "פורצלן",
  },
];
