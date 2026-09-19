// cities.ts (src/app/marble-sinks/cities.ts) · updated 19.09.2026 (Asia/Jerusalem)
// City registry for programmatic local landing pages /marble-sinks/[city].
// slug = URL (english), he = display name, inCity = "ב<עיר>" preposition form.

export type City = { slug: string; he: string; inCity: string };

export const CITIES: City[] = [
  { slug: "tel-aviv", he: "תל אביב", inCity: "בתל אביב" },
  { slug: "herzliya", he: "הרצליה", inCity: "בהרצליה" },
  { slug: "ramat-gan", he: "רמת גן", inCity: "ברמת גן" },
  { slug: "jerusalem", he: "ירושלים", inCity: "בירושלים" },
  { slug: "haifa", he: "חיפה", inCity: "בחיפה" },
  { slug: "raanana", he: "רעננה", inCity: "ברעננה" },
  { slug: "kfar-saba", he: "כפר סבא", inCity: "בכפר סבא" },
  { slug: "netanya", he: "נתניה", inCity: "בנתניה" },
  { slug: "rishon-lezion", he: "ראשון לציון", inCity: "בראשון לציון" },
  { slug: "givatayim", he: "גבעתיים", inCity: "בגבעתיים" },
];

export const cityBySlug = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);
