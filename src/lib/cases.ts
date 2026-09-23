// cases.ts (src/lib/cases.ts) · updated 23.09.2026 10:39 (Asia/Jerusalem)
// Published case studies (approved in the CRM /case-studies) for /projects, sitemap, city pages, llms-full.txt.
// Selects PUBLIC columns only — never customer_name, notes, transcript, costs.
import { supabase } from "./supabase";

export type CaseMedia = { url: string; type?: string };
export type CaseFaq = { q: string; a: string };
export type PublicCase = {
  id: string;
  slug: string;
  job_type: string | null;
  city: string | null;
  first_name: string | null;
  rating: number | null;
  quote: string | null;
  consent: { photos?: boolean; name_city?: boolean; quote?: boolean };
  after_media: CaseMedia[];
  before_media: CaseMedia[];
  finish_date: string | null;
  published_at: string | null;
  updated_at: string;
  gen: {
    title?: string; meta?: string; summary?: string; challenge?: string; process?: string; result?: string;
    material?: string; size?: string; faq?: CaseFaq[]; alt?: string[]; tags?: string[];
  };
};

const COLS = "id, slug, job_type, city, first_name, rating, quote, consent, after_media, before_media, finish_date, published_at, updated_at, gen";

export function caseImages(c: PublicCase): { url: string; alt: string }[] {
  const isImg = (m: CaseMedia) => !m.type || m.type === "image";
  const imgs = [...(c.after_media || []).filter(isImg), ...(c.before_media || []).filter(isImg)].slice(0, 8);
  return imgs.map((m, i) => ({ url: m.url, alt: (c.gen.alt || [])[i] || c.gen.title || "" }));
}

// Public-safe rules applied at render time (the CRM gates already enforce them before publish).
export function publicQuote(c: PublicCase): { text: string; by: string } | null {
  if (!c.consent?.quote || !c.quote) return null;
  const by = c.consent?.name_city && c.first_name ? c.first_name + (c.city ? ", " + c.city : "") : "לקוח/ה" + (c.city ? " מ" + c.city : "");
  return { text: c.quote, by };
}

export async function fetchPublishedCases(): Promise<PublicCase[]> {
  try {
    const { data, error } = await supabase.from("case_studies").select(COLS).eq("status", "published").not("slug", "is", null).order("published_at", { ascending: false });
    if (error) { console.error("[cases]", error.message); return []; }
    return (data || []) as PublicCase[];
  } catch (e) {
    console.error("[cases]", e);
    return [];
  }
}

export async function fetchCaseBySlug(slug: string): Promise<PublicCase | null> {
  try {
    const { data } = await supabase.from("case_studies").select(COLS).eq("status", "published").eq("slug", slug).maybeSingle();
    return (data as PublicCase) || null;
  } catch {
    return null;
  }
}

export function heDate(iso: string | null): string {
  if (!iso) return "";
  try { return new Date(iso).toLocaleDateString("he-IL", { timeZone: "Asia/Jerusalem", day: "numeric", month: "long", year: "numeric" }); } catch { return ""; }
}
