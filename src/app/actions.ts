"use server";

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
    const lines = [
      `שם: ${opts.fullName}`,
      `טלפון: ${opts.phone}`,
      opts.city ? `עיר: ${opts.city}` : "",
      opts.projectType ? `סוג פרויקט: ${opts.projectType}` : "",
      opts.budgetTier ? `תקציב: ${opts.budgetTier}` : "",
      opts.notes ? `\nפרטים:\n${opts.notes}` : "",
      opts.imageCount && opts.imageCount > 0 ? `\n📎 ${opts.imageCount} קבצים מצורפים — זמינים בכרטיס הליד ב-CRM` : "",
      `\nפתח את ה-CRM כדי לעבד את הפנייה.`,
    ].filter((l) => l !== "");
    await resend.emails.send({
      from: "Marble Art Leads <onboarding@resend.dev>",
      to: [to],
      subject: `🔔 ליד חדש מהאתר: ${opts.fullName}`,
      text: lines.join("\n"),
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
      landing_page: "/",
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
