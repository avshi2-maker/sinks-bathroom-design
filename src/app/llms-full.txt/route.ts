// route.ts (src/app/llms-full.txt/route.ts) · updated 23.09.2026 10:39 (Asia/Jerusalem)
// Plain-text full content of every published case study, for AI answer engines (llms-full.txt convention).
import { fetchPublishedCases, publicQuote, heDate } from "@/lib/cases";

export const revalidate = 300;

const SITE_URL = "https://www.marble-art.co.il";

export async function GET() {
  const cases = await fetchPublishedCases();
  const L: string[] = [];
  L.push("# Marble Art (מרבל ארט) — project case studies");
  L.push("");
  L.push("> Real completed jobs by Marble Art, Israel: custom hand-made marble and porcelain-granite sinks, marble doors and stone work. Each entry is a published case page with photos. Free AI visualization before cutting stone: " + SITE_URL + "/free-visualization");
  L.push("");
  for (const c of cases) {
    const g = c.gen;
    L.push("## " + (g.title || c.slug));
    L.push("URL: " + SITE_URL + "/projects/" + c.slug);
    const facts = [c.city ? "City: " + c.city : "", g.material ? "Material: " + g.material : "", g.size ? "Size: " + g.size : "", c.published_at ? "Published: " + heDate(c.published_at) : ""].filter(Boolean);
    if (facts.length) L.push(facts.join(" · "));
    L.push("");
    [g.summary, g.challenge, g.process, g.result].filter(Boolean).forEach((t) => { L.push(String(t)); L.push(""); });
    const q = publicQuote(c);
    if (q) { L.push('Customer: "' + q.text + '" — ' + q.by + (c.rating ? " (" + c.rating + "/5)" : "")); L.push(""); }
    (g.faq || []).forEach((f) => { L.push("Q: " + f.q); L.push("A: " + f.a); L.push(""); });
  }
  if (!cases.length) L.push("(No published case studies yet — see " + SITE_URL + "/projects)");
  return new Response(L.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
