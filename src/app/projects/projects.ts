// projects.ts (src/app/projects/projects.ts) · updated 19.09.2026 (Asia/Jerusalem)
// Case-study registry for /projects/[slug]. Add a project = one object here; page + sitemap auto-generate.
// image / image2: full URL or a /project-images/<file>.jpg path served from /public.

export type Project = {
  slug: string;
  title: string;
  area: string;
  material: string;
  size: string;
  image: string;
  summary: string;
  challenge: string;
  process: string;
  result: string;
  tags: string[];
  image2?: string;    // optional second visual (e.g. a design option)
  optionA?: string;   // optional: when a project compares two options
  optionB?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "calacatta-two-options",
    title: "כיור שיש Calacatta לחלל ציבורי — שתי אפשרויות עיצוב",
    area: "פרויקט מסחרי",
    material: "שיש Calacatta איטלקי",
    size: "משטח רחב · 4 עמדות",
    image: "/project-images/calacatta-long-trough.jpg",
    image2: "/project-images/calacatta-four-basins.jpg",
    summary: "פרויקט אמיתי בתהליך הצעת מחיר: משטח שיש Calacatta רחב לחדר רחצה ציבורי, עם שתי גישות עיצוב על אותו לוח, רוחב וחלל — שהאדריכל ומנהל הפרויקט בוחרים ביניהן.",
    challenge: "אותו משטח, שתי דרכים לחשוב עליו: קו רציף ונקי מול הפרדה בין משתמשים. ההחלטה משפיעה על חוויית השימוש, על התחזוקה ועל המראה — וצריכה להתקבל לפני חיתוך האבן.",
    process: "עיצבנו והדמינו את שתי האפשרויות על אותו משטח בדיוק, כדי לאפשר השוואה ראש-בראש: זרימת הוורידים, חלוקת המים, נוחות השימוש והתחזוקה — הכול לפני שנחתכת אבן אחת.",
    result: "הפרויקט נמצא בשלב הצעת מחיר. שתי ההדמיות מאפשרות למזמין להחליט בביטחון — לראות את התוצאה משני הכיוונים לפני ההזמנה.",
    optionA: "אפשרות 1 — שוקת אחת ארוכה עם ניקוז יחיד: קו רציף ונקי, זרימת ורידים אחידה לכל האורך, מראה מינימליסטי ומרשים.",
    optionB: "אפשרות 2 — ארבעה אגנים מרובעים נפרדים על אותו בסיס: הפרדה ברורה בין העמדות, מתאים לשימוש מרובה-משתמשים ולתחזוקה נוחה.",
    tags: ["שיש קלקטה", "חלל ציבורי", "הדמיה", "בהזמנה אישית"],
  },
  {
    slug: "grey-marble-slot-drain",
    title: "כיור שיש אפור עם ניקוז סמוי — עיצוב מרחף",
    area: "בהזמנה אישית",
    material: "שיש אפור עם עורקי זהב",
    size: "כיור תלוי · מידה מותאמת",
    image: "/project-images/grey-marble-slot-drain.jpg",
    summary: "כיור שיש אפור מרחף עם עורקי זהב טבעיים וניקוז ליניארי סמוי — מונוליט מגולף מלוח אחד, בעיצוב מינימליסטי ופיסולי.",
    challenge: "לשלב ניקוז נקי בתוך האבן עצמה — תעלה ליניארית עם שיפוע עדין לפתח סמוי — ולשמור על מראה מרחף, ללא תמיכה נראית מתחת לכיור.",
    process: "בחרנו לוח שיש אפור עם עורקי זהב בולטים, גילפנו אגן שטוח עם תעלת ניקוז מרכזית ושיפוע מחושב, ליטשנו לגימור מאט משיי ואטמנו את האבן. הכיור עוגן לקיר להשגת המראה המרחף.",
    result: "כיור פיסולי שבו המים נעלמים דרך חריץ דיסקרטי — קו נקי, נוכחות של אבן טבעית, ומראה מרחף שמשאיר את החלל תחתיו פנוי.",
    tags: ["שיש אפור", "ניקוז סמוי", "כיור תלוי", "עיצוב מינימליסטי"],
  },
  {
    slug: "porcelain-trough-1425",
    title: "כיור שוקת פורצלן תלוי — 1425 מ\"מ בהתאמה אישית",
    area: "אזור המרכז",
    material: "גרניט פורצלן",
    size: "1425 מ\"מ",
    image: "/og-image.jpg",
    summary: "כיור שוקת תלוי על קיר ברוחב לא-סטנדרטי של 1425 מ\"מ, שתוכנן וייוצר בהתאמה מלאה לחלל אמבטיה קיים.",
    challenge: "הרוחב המבוקש (1425 מ\"מ) אינו מידה מדפית, והכיור נדרש להתלות ישירות על קיר קיים — בלי ארון תמיכה — כך שהמידות, נקודות העיגון ושיפוע הניקוז חייבים להיות מדויקים לחלוטין.",
    process: "בחרנו לוח פורצלן בגוון ובמרקם שהתאימו לחלל, חתכנו אותו למידה המדויקת ועיצבנו אגן שוקת ארוך עם שיפוע ניקוז מחושב. הגימור לוטש בעבודת יד והאיטום בוצע לפני ההתקנה.",
    result: "כיור תלוי נקי בקו אחיד שמנצל את מלוא רוחב הקיר, נותן נוכחות עיצובית חזקה לחדר הרחצה ומשאיר את הרצפה פנויה — מראה מרחף ומינימליסטי.",
    tags: ["כיור פורצלן", "כיור תלוי", "בהזמנה אישית", "שיפוץ אמבטיה"],
  },
];

export const projectBySlug = (slug: string): Project | undefined => PROJECTS.find((p) => p.slug === slug);
