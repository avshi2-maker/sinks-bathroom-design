// guides.ts (src/app/guides/guides.ts) · updated 18.09.2026 (Asia/Jerusalem)
// Single source of truth for the /guides hub. Add a guide -> append one entry here.
export type GuideMeta = { slug: string; title: string; excerpt: string; tag: string };

export const GUIDES: GuideMeta[] = [
  {
    slug: "porcelain-sinks",
    title: "המדריך המלא לכיורי פורצלן",
    excerpt: "יתרונות, מדע החומרים, עמידות בחום, תחזוקה וסוגי התקנה של כיורי פורצלן למטבח.",
    tag: "פורצלן",
  },
  // Add future guides here, e.g.:
  // { slug: "calacatta-marble", title: "שיש קלקטה — כל מה שצריך לדעת", excerpt: "…", tag: "שיש" },
];
