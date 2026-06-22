// src/components/doors/doorOptions.ts
// Shared constants + types for the public door module (teaser + request form).
// Stone renders are the 5 Cloudinary door images already uploaded.
// NOTE: BUDGET tiers are PLACEHOLDERS — set the real door numbers when ready.

export type DoorStone = { id: string; name_he: string; swatch_hex: string; render_url: string };
export type Opt = { value: string; label: string; desc?: string };

const CLOUD_BASE = 'https://res.cloudinary.com/dqdku88vv/image/upload';

// Calacatta leads, then light -> dramatic (matches the catalog sort_order).
export const DOOR_STONES: DoorStone[] = [
  { id: 'calacatta', name_he: 'קלקטה גולד', swatch_hex: '#ECE9E2', render_url: `${CLOUD_BASE}/v1782055025/door-flush-calacatta_uifonz.png` },
  { id: 'statuario', name_he: 'סטטואריו', swatch_hex: '#F1F0EC', render_url: `${CLOUD_BASE}/v1782055026/door-flush-statuario_ep9dc9.png` },
  { id: 'gold', name_he: 'אבן זהב', swatch_hex: '#C4A35A', render_url: `${CLOUD_BASE}/v1782055024/door-flush-gold_h6mvb2.png` },
  { id: 'amperdor', name_he: 'אמפרדור', swatch_hex: '#6B5240', render_url: `${CLOUD_BASE}/v1782055024/door-flush-amperdor_ejdlqc.png` },
  { id: 'nero', name_he: 'נרו מרקינה', swatch_hex: '#232323', render_url: `${CLOUD_BASE}/v1782055027/door-flush-nero_vazuxc.png` },
];

export const DOOR_SIZES: Opt[] = [
  { value: 'standard', label: 'סטנדרט', desc: '~90×210 ס"מ' },
  { value: 'wide', label: 'רחב', desc: 'מעל 100 ס"מ רוחב' },
  { value: 'double', label: 'כפול', desc: 'שתי כנפיים' },
  { value: 'unsure', label: 'לא בטוח/ה', desc: 'נמדוד יחד' },
];

// Handle finishes — straight from the engineering spec sheet.
export const DOOR_HANDLES: Opt[] = [
  { value: 'recessed', label: 'ידית שקועה', desc: 'טקסטורת שיש תואמת' },
  { value: 'blade', label: 'להב מינימליסטי', desc: 'מתכת שחורה מט' },
  { value: 'push_led', label: 'פתיחת דחיפה', desc: 'חיווי LED' },
  { value: 'biometric', label: 'ביומטרי + קולי', desc: 'Bio-Key וקורא כף יד' },
];

export const DOOR_TYPES: Opt[] = [
  { value: 'main_entry', label: 'כניסה ראשית' },
  { value: 'interior', label: 'פנים' },
  { value: 'sliding', label: 'הזזה' },
  { value: 'unsure', label: 'לא בטוח/ה' },
];

export const PROJECT_TYPES: Opt[] = [
  { value: 'renovation', label: 'שיפוץ' },
  { value: 'new_construction', label: 'בנייה חדשה' },
  { value: 'replacement', label: 'החלפה' },
  { value: 'commercial', label: 'מסחרי' },
];

// Door budget bands. NOTE: `value` must match the leads_budget_tier_check
// constraint (reuses the existing allowed sink values). Only the LABELS are
// door-appropriate. PLACEHOLDER ranges — tell me the real numbers to display.
export const DOOR_BUDGETS: Opt[] = [
  { value: "tier_1_8k_15k", label: "25,000 - 40,000 ₪", desc: "בסיס" },
  { value: "tier_2_15k_25k", label: "40,000 - 60,000 ₪", desc: "פרימיום" },
  { value: "tier_3_25k_50k", label: "60,000 - 90,000 ₪", desc: "אומנותי" },
  { value: "tier_4_50k_plus", label: "90,000+ ₪", desc: "יצירת מופת" },
];

export function labelFor(list: Opt[], val: string): string {
  return list.find((x) => x.value === val)?.label || '—';
}

export function stoneName(id: string): string {
  return DOOR_STONES.find((s) => s.id === id)?.name_he || '—';
}
