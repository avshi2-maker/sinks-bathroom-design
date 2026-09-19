// projects.ts (src/app/projects/projects.ts) · updated 19.09.2026 (Asia/Jerusalem)
// Case-study registry for /projects/[slug]. Add a project = one object here; page + sitemap auto-generate.
// image: a full URL (Cloudinary or /og-image.jpg placeholder). Swap the seeds' images for real Cloudinary URLs.

export type Project = {
  slug: string;
  title: string;
  area: string;       // city / region served
  material: string;
  size: string;
  image: string;
  summary: string;
  challenge: string;
  process: string;
  result: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
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
  {
    slug: "calacatta-basin",
    title: "אגן רחצה משיש קלקטה — עיצוב אמנותי",
    area: "השרון והמרכז",
    material: "שיש Calacatta איטלקי",
    size: "אגן יחיד, מידה מותאמת",
    image: "/og-image.jpg",
    summary: "אגן רחצה מגולף מלוח שיש Calacatta איטלקי, שנבחר לפי זרימת הוורידים כדי להפוך את הכיור לפריט מרכזי בחלל.",
    challenge: "לשמור על רציפות הוורידים הטבעיים לאורך האגן, כך שהדוגמה תיראה כיצירה אחת ולא כחיבור מקרי של חלקים.",
    process: "בחרנו את הלוח לפי הוורידים והגוון, תכננו את חיתוך האגן כך שהדוגמה תזרום בהרמוניה, וגילפנו את האגן בעבודת יד עדינה. הכיור לוטש לגימור משיי ואוטם להגנה מפני כתמים.",
    result: "אגן רחצה שנראה כפסל — כל וריד ממשיך בזרימה טבעית, וכל כיור יוצא אחד ויחיד שאי אפשר לשכפל.",
    tags: ["שיש קלקטה", "אגן רחצה", "עבודת יד", "עיצוב יוקרה"],
  },
];

export const projectBySlug = (slug: string): Project | undefined => PROJECTS.find((p) => p.slug === slug);
