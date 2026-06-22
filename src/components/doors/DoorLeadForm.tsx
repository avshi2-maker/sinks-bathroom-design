"use client";

// src/components/doors/DoorLeadForm.tsx
// Door request form. Reuses the EXACT sinks send-procedure: same Cloudinary preset,
// same submitLead() -> leads table, same PhoneInput. Door teaser config (stone/size/
// handle) + door type fold into notes_he under a 🚪 header; landing_page = "/doors"
// tags the lead so it's filterable in the CRM next to sink leads.

import { useState } from "react";
import { submitLead } from "@/app/actions";
import { PhoneInput, validateIsraeliPhone } from "../PhoneInput";
import { PROJECT_TYPES, DOOR_TYPES, labelFor } from "./doorOptions";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dqdku88vv";
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_LEAD_PRESET || "marble_lead_uploads";
const MAX_FILES = 5;
const MAX_SIZE_MB = 10;
const ACCEPTED = ".jpg,.jpeg,.png,.webp,.mp4,.mov,.pdf";

type UploadedFile = { name: string; url: string; type: string };

export type DoorConfigLabels = { stone: string; size: string; handle: string };

function trackEvent(eventName: string, params: Record<string, string | number>) {
  if (typeof window !== "undefined") {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") { w.gtag("event", eventName, params); }
  }
}

export function DoorLeadForm({ doorConfig }: { doorConfig: DoorConfigLabels }) {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files;
    if (!selected || selected.length === 0) return;
    setUploadError(null);
    if (files.length + selected.length > MAX_FILES) {
      setUploadError(`ניתן להעלות עד ${MAX_FILES} קבצים.`);
      return;
    }
    setUploading(true);
    const newFiles: UploadedFile[] = [];
    for (const file of Array.from(selected)) {
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        setUploadError(`הקובץ "${file.name}" גדול מדי (מקסימום ${MAX_SIZE_MB} מגה).`);
        continue;
      }
      try {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("upload_preset", UPLOAD_PRESET);
        const isImage = file.type.startsWith("image/");
        const endpoint = isImage ? "image" : (file.type.startsWith("video/") ? "video" : "auto");
        const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${endpoint}/upload`, { method: "POST", body: fd });
        if (!res.ok) { setUploadError(`שגיאה בהעלאת "${file.name}". נסו שוב.`); continue; }
        const data = await res.json();
        if (data.secure_url) { newFiles.push({ name: file.name, url: data.secure_url, type: file.type }); }
      } catch {
        setUploadError(`שגיאה בהעלאת "${file.name}". נסו שוב.`);
      }
    }
    setFiles((prev) => [...prev, ...newFiles]);
    setUploading(false);
    e.target.value = "";
  }

  function removeFile(url: string) {
    setFiles((prev) => prev.filter((f) => f.url !== url));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const phone = (formData.get("phone") as string)?.trim() || "";
    const phoneCheck = validateIsraeliPhone(phone);
    if (!phoneCheck.ok) {
      setError("אנא הזינו מספר טלפון ישראלי תקין (נייד או קווי).");
      return;
    }
    formData.set("phone", phoneCheck.normalized);
    const doorType = (formData.get("door_type") as string) || "";
    setPending(true);
    const userNotes = ((formData.get("notes_he") as string) || "").trim();
    const configLine = `אבן: ${doorConfig.stone} | פתח: ${doorConfig.size} | ידית: ${doorConfig.handle}` + (doorType ? ` | סוג דלת: ${labelFor(DOOR_TYPES, doorType)}` : "");
    const combinedNotes = ["🚪 בקשת דלת", configLine, userNotes].filter((s) => s !== "").join("\n");
    formData.set("notes_he", combinedNotes);
    formData.set("inspiration_urls_json", JSON.stringify(files.map((f) => f.url)));
    formData.set("landing_page", "/doors");
    const result = await submitLead(formData);
    setPending(false);
    if (result.success) {
      trackEvent("door_lead_submitted", { files: files.length });
      setDone(true);
    } else {
      setError(result.error);
    }
  }

  if (done) {
    return (
      <div className="bg-[var(--color-cream)] border-2 border-[var(--color-brass)] rounded-2xl p-10 md:p-14 text-center">
        <div className="w-16 h-16 bg-[var(--color-brass)] rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-[var(--color-charcoal)] text-3xl font-black">✓</span>
        </div>
        <h3 className="text-[var(--color-charcoal)] text-3xl font-black mb-4">תודה רבה!</h3>
        <p className="text-[var(--color-charcoal)]/70 text-lg max-w-md mx-auto leading-relaxed">קיבלנו את בקשת הדלת שלכם. נחזור אליכם תוך 24-48 שעות עם הצעה והדמיה מותאמת אישית.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[var(--color-cream)] rounded-2xl p-6 md:p-10 shadow-lg">
      <div className="bg-[var(--color-brass)]/10 border-2 border-[var(--color-brass)]/40 rounded-xl p-5">
        <p className="text-[var(--color-charcoal)] font-bold text-sm mb-1">הבחירה שלכם:</p>
        <p className="text-[var(--color-charcoal)]/75 text-sm">אבן {doorConfig.stone} · פתח {doorConfig.size} · ידית {doorConfig.handle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="full_name" className="block text-[var(--color-charcoal)] font-medium mb-2 text-sm">שם מלא *</label>
          <input id="full_name" name="full_name" required className="w-full px-4 py-3 border border-[var(--color-cream-darker)] rounded-lg bg-white text-[var(--color-charcoal)] focus:border-[var(--color-brass)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brass)]/20 transition-all" placeholder="ישראל ישראלי" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[var(--color-charcoal)] font-medium mb-2 text-sm">טלפון *</label>
          <PhoneInput id="phone" name="phone" required placeholder="050-1234567" />
        </div>
      </div>

      <div>
        <label htmlFor="city_he" className="block text-[var(--color-charcoal)] font-medium mb-2 text-sm">עיר</label>
        <input id="city_he" name="city_he" className="w-full px-4 py-3 border border-[var(--color-cream-darker)] rounded-lg bg-white text-[var(--color-charcoal)] focus:border-[var(--color-brass)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brass)]/20 transition-all" placeholder="תל אביב, ירושלים, חיפה..." />
      </div>

      <div>
        <label className="block text-[var(--color-charcoal)]/70 font-medium mb-3 text-sm">סוג פרויקט (אופציונלי)</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PROJECT_TYPES.map((p) => (
            <label key={p.value} className="cursor-pointer">
              <input type="radio" name="project_type" value={p.value} className="sr-only peer" />
              <div className="px-4 py-3 border-2 border-[var(--color-cream-darker)] rounded-lg bg-white text-center text-sm transition-all peer-checked:border-[var(--color-brass)] peer-checked:bg-[var(--color-brass)]/10 hover:border-[var(--color-brass)]/50">{p.label}</div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-[var(--color-charcoal)] font-medium mb-3 text-sm">סוג דלת (אופציונלי)</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {DOOR_TYPES.map((d) => (
            <label key={d.value} className="cursor-pointer">
              <input type="radio" name="door_type" value={d.value} className="sr-only peer" />
              <div className="px-4 py-3 border-2 border-[var(--color-cream-darker)] rounded-lg bg-white text-center text-sm transition-all peer-checked:border-[var(--color-brass)] peer-checked:bg-[var(--color-brass)]/10 hover:border-[var(--color-brass)]/50">{d.label}</div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="notes_he" className="block text-[var(--color-charcoal)] font-medium mb-2 text-sm">הערות (אופציונלי)</label>
        <textarea id="notes_he" name="notes_he" rows={4} className="w-full px-4 py-3 border border-[var(--color-cream-darker)] rounded-lg bg-white text-[var(--color-charcoal)] focus:border-[var(--color-brass)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brass)]/20 transition-all resize-none" placeholder="תארו במילים שלכם — אל תדאגו לדיוק. לדוגמה: פתח כפול בכניסה הראשית, גובה תקרה 2.7 מ׳..." />
      </div>

      <div>
        <label className="block text-[var(--color-charcoal)] font-medium mb-2 text-sm">צרפו תמונות / סרטונים / מסמכים (אופציונלי)</label>
        <p className="text-[var(--color-charcoal)]/50 text-xs mb-3">טיפ: צלמו את פתח הדלת עם סרגל או כרטיס אשראי לצידו — זה עוזר לנו להעריך מידות. עד {MAX_FILES} קבצים, {MAX_SIZE_MB} מגה לקובץ.</p>
        <label htmlFor="door_files" className="flex flex-col items-center justify-center w-full py-8 border-2 border-dashed border-[var(--color-cream-darker)] rounded-lg bg-white cursor-pointer hover:border-[var(--color-brass)]/50 transition-all">
          <span className="text-[var(--color-brass-dark)] text-3xl mb-2">↑</span>
          <span className="text-[var(--color-charcoal)]/70 text-sm">{uploading ? "מעלה קבצים..." : "לחצו לבחירת קבצים או גררו לכאן"}</span>
        </label>
        <input id="door_files" type="file" accept={ACCEPTED} multiple onChange={handleFileSelect} disabled={uploading || files.length >= MAX_FILES} className="hidden" />
        {uploadError && (<div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">{uploadError}</div>)}
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((f) => (
              <div key={f.url} className="flex items-center justify-between bg-white border border-[var(--color-cream-darker)] rounded-lg px-4 py-2">
                <span className="text-[var(--color-charcoal)]/80 text-sm truncate ml-3">{f.name}</span>
                <button type="button" onClick={() => removeFile(f.url)} className="text-red-500 hover:text-red-700 text-sm font-medium shrink-0">הסר</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && (<div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">{error}</div>)}

      <button type="submit" disabled={pending || uploading} className="w-full bg-[var(--color-charcoal)] text-[var(--color-cream)] py-5 rounded-full font-bold text-lg hover:bg-[var(--color-brass)] hover:text-[var(--color-charcoal)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300">{pending ? "שולח..." : "שלחו אלינו פרטים ←"}</button>

      <p className="text-center text-[var(--color-charcoal)]/50 text-xs">לא נשלח ספאם. נציג יחזור אליכם תוך 24-48 שעות.</p>
    </form>
  );
}
