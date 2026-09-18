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
  {
    slug: "calacatta-marble",
    title: "כיורי שיש קלקטה — האבן שמגדירה יוקרה",
    excerpt: "רקע לבן בהיר, ורידי זהב דרמטיים ונדירות — למה קלקטה היא האבן של חדרי הרחצה היוקרתיים.",
    tag: "שיש",
  },
  {
    slug: "marble-care",
    title: "תחזוקת כיור שיש — מדריך מעשי",
    excerpt: "ניקוי יומיומי, איטום תקופתי וטיפול בכתמים ובצריבה — כך שומרים על כיור שיש לשנים.",
    tag: "תחזוקה",
  },
  {
    slug: "how-its-made",
    title: "איך נוצר כיור שיש בעבודת יד",
    excerpt: "מהגוש הטבעי דרך החיתוך והגילוף ועד האיטום, בקרת האיכות וההתקנה — המסע של כיור אמנותי.",
    tag: "בעבודת יד",
  },
];
