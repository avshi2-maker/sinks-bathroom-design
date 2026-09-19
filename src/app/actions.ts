"use server";
// actions.ts (src/app/actions.ts) · updated 19.09.2026 16:55 (Asia/Jerusalem)

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

type LeadResult =
  | { success: true }
  | { success: false; error: string };

// Reusable lead-alert email. Safe: never throws into the caller (email failure
// must not break the lead save). Reused for any future intake (e.g. Ales RFQ).
async function sendLeadAlertEmail(opts: {
  fullName: string;
  phone: string;
  city?: string | null;
  notes?: string | null;
  projectType?: string | null;
  budgetTier?: string | null;
  imageCount?: number;
}): Promise<void> {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.LEAD_ALERT_EMAIL;
    if (!apiKey || !to) {
      console.warn("[leadAlert] RESEND_API_KEY or LEAD_ALERT_EMAIL missing — skipping email");
      return;
    }
    const resend = new Resend(apiKey);
    const waPhone = (opts.phone || "").replace(/\D/g, "").replace(/^0/, "972");
    const waMsg = `שלום ${opts.fullName}, כאן Marble Art — קיבלנו את הפנייה שלכם לכיור שיש ונשמח להכין לכם הדמיה. מתי נוח לחזור אליכם?`;
    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMsg)}`;
    const cell = 'style="padding:4px 0;color:#8A6F44;font-weight:700"';
    const detailRows = [
      `<tr><td ${cell}>שם</td><td style="padding:4px 0">${opts.fullName}</td></tr>`,
      `<tr><td ${cell}>טלפון</td><td style="padding:4px 0">${opts.phone}</td></tr>`,
      opts.city ? `<tr><td ${cell}>עיר</td><td style="padding:4px 0">${opts.city}</td></tr>` : "",
      opts.projectType ? `<tr><td ${cell}>סוג פרויקט</td><td style="padding:4px 0">${opts.projectType}</td></tr>` : "",
      opts.budgetTier ? `<tr><td ${cell}>תקציב</td><td style="padding:4px 0">${opts.budgetTier}</td></tr>` : "",
    ].filter((r) => r !== "").join("");
    const notesBlock = opts.notes ? `<p style="background:#F5F1EA;padding:12px;border-radius:8px;white-space:pre-wrap;margin:14px 0">${opts.notes}</p>` : "";
    const filesBlock = opts.imageCount && opts.imageCount > 0 ? `<p style="color:#6b6155;font-size:13px">📎 ${opts.imageCount} קבצים מצורפים — בכרטיס הליד ב-CRM</p>` : "";
    const html = `<div dir="rtl" style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;color:#0F0F0F"><h2 style="margin:0 0 12px">🔔 ליד חדש: ${opts.fullName}</h2><table style="width:100%;border-collapse:collapse;font-size:15px">${detailRows}</table>${notesBlock}${filesBlock}<div style="margin:18px 0"><a href="${waUrl}" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:700;font-size:16px">📱 השב ללקוח ב-WhatsApp</a></div><p style="color:#6b6155;font-size:13px">לחיצה תפתח שיחת WhatsApp עם הלקוח והודעה מוכנה מראש. מהירות תגובה = יותר סגירות.</p></div>`;
    const lines = [
      `שם: ${opts.fullName}`,
      `טלפון: ${opts.phone}`,
      opts.city ? `עיר: ${opts.city}` : "",
      opts.projectType ? `סוג פרויקט: ${opts.projectType}` : "",
      opts.budgetTier ? `תקציב: ${opts.budgetTier}` : "",
      opts.notes ? `\nפרטים:\n${opts.notes}` : "",
      opts.imageCount && opts.imageCount > 0 ? `\n📎 ${opts.imageCount} קבצים מצורפים — זמינים בכרטיס הליד ב-CRM` : "",
      `\n📱 השב ללקוח ב-WhatsApp: ${waUrl}`,
      `\nפתח את ה-CRM כדי לעבד את הפנייה.`,
    ].filter((l) => l !== "");
    await resend.emails.send({
      from: "Marble Art Leads <onboarding@resend.dev>",
      to: [to],
      subject: `🔔 ליד חדש מהאתר: ${opts.fullName}`,
      text: lines.join("\n"),
      html,
    });
    console.log("[leadAlert] alert email sent");
  } catch (e) {
    console.error("[leadAlert] email failed (non-blocking):", e);
  }
}

export async function submitLead(formData: FormData): Promise<LeadResult> {
  try {
    const full_name = (formData.get("full_name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    if (!full_name || !phone) {
      return { success: false, error: "אנא מלאו שם וטלפון." };
    }
    // Parse inspiration URLs from the JSON-stringified array
    let inspirationUrls: string[] = [];
    const inspirationJson = formData.get("inspiration_urls_json") as string;
    if (inspirationJson) {
      try {
        const parsed = JSON.parse(inspirationJson);
        if (Array.isArray(parsed)) {
          inspirationUrls = parsed.filter((u) => typeof u === "string");
        }
      } catch {
        // Silent — empty array is fine
      }
    }
    const project_type = (formData.get("project_type") as string) || null;
    const budget_tier = (formData.get("budget_tier") as string) || null;
    const city_he = ((formData.get("city_he") as string) || "").trim() || null;
    const notes_he = ((formData.get("notes_he") as string) || "").trim() || null;
    // Optional: source page tag. Defaults to "/" so the sinks form is unchanged;
    // the door form sends "/doors" so door leads are filterable in the CRM.
    const landing_page = ((formData.get("landing_page") as string) || "/").trim() || "/";
    const data = {
      full_name,
      phone,
      city_he,
      project_type,
      budget_tier,
      notes_he,
      inspiration_image_urls: inspirationUrls.length > 0 ? inspirationUrls : null,
      preferred_contact: "whatsapp",
      status: "new",
      utm_source: "direct",
      utm_medium: "landing_v1",
      landing_page,
    };
    console.log("[submitLead] Attempting insert with:", JSON.stringify(data, null, 2));
    const { error } = await supabase.from("leads").insert(data);
    if (error) {
      console.error("[submitLead] Supabase error:", JSON.stringify(error, null, 2));
      const userMessage =
        error.code === "42501" || error.message?.includes("policy")
          ? "שגיאת הרשאות במסד הנתונים. אנא צרו קשר ישירות."
          : "שגיאה בשמירת הפרטים. אנא נסו שוב או צרו קשר ישירות.";
      return { success: false, error: userMessage };
    }
    console.log("[submitLead] Lead saved successfully");
    // Fire the alert email (non-blocking — never fails the save)
    await sendLeadAlertEmail({
      fullName: full_name,
      phone,
      city: city_he,
      notes: notes_he,
      projectType: project_type,
      budgetTier: budget_tier,
      imageCount: inspirationUrls.length,
    });
    return { success: true };
  } catch (e) {
    console.error("[submitLead] Unexpected error:", e);
    return { success: false, error: "שגיאה לא צפויה. אנא נסו שוב." };
  }
}
