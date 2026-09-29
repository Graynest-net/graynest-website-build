/**
 * Clinic one-pager: copy per language and prices per market.
 *
 * Prices are anchored in USD. Local amounts are the USD equivalent at the rate
 * on ISSUED_ON, rounded to a clean number. To re-issue, update RATES and
 * ISSUED_ON, re-round the local amounts, then re-export the PDF and PNG.
 */

export type Lang = "ar" | "en" | "tr"
export type Market = "ps" | "jo" | "tr" | "en"
export type TierId = "starter" | "growth" | "business"

/** Rates used for the current issue (open.er-api.com, 29 Sep 2026). */
export const RATES = { ILS: 3.0695, JOD: 0.709, TRY: 48.9975 } as const
export const ISSUED_ON = "2026-09-29"

export const USD_PRICES: Record<TierId, { setup: number; monthly: number }> = {
  starter: { setup: 250, monthly: 600 },
  growth: { setup: 800, monthly: 1120 },
  business: { setup: 1600, monthly: 2000 },
}

export const CONTACT = {
  whatsapp: "+970598466834",
  whatsappDisplay: "+970 59 846 6834",
  whatsappUrl: "https://wa.me/970598466834",
  email: "hello@graynest.co",
  web: "graynest.co",
}

interface MarketConfig {
  lang: Lang
  currency: "ILS" | "JOD" | "TRY" | "USD"
  /** Local amounts, rounded: ILS to 50, JOD to 5, TRY to 500. */
  prices: Record<TierId, { setup: number; monthly: number }>
}

export const MARKETS: Record<Market, MarketConfig> = {
  ps: {
    lang: "ar",
    currency: "ILS",
    prices: {
      starter: { setup: 765, monthly: 1850 },
      growth: { setup: 2450, monthly: 3450 },
      business: { setup: 4900, monthly: 6150 },
    },
  },
  jo: {
    lang: "ar",
    currency: "JOD",
    prices: {
      starter: { setup: 175, monthly: 425 },
      growth: { setup: 565, monthly: 795 },
      business: { setup: 1135, monthly: 1420 },
    },
  },
  tr: {
    lang: "tr",
    currency: "TRY",
    prices: {
      starter: { setup: 12250, monthly: 29500 },
      growth: { setup: 39000, monthly: 55000 },
      business: { setup: 78500, monthly: 98000 },
    },
  },
  en: {
    lang: "en",
    currency: "USD",
    prices: USD_PRICES,
  },
}

interface Tier {
  id: TierId
  name: string
  fit: string
  includes: string
}

export interface SheetCopy {
  dir: "rtl" | "ltr"
  numberLocale: string
  tag: string
  headline: string[]
  headlineAccent: string
  subhead: string
  /** Sample exchange shown on the persona's phone. */
  chat: { patient: string; agent: string }
  problems: string[]
  doesLabel: string
  does: string[]
  startsLabel: string
  steps: { day: string; text: string }[]
  guaranteeTitle: string
  guaranteeText: string
  discountBadge: string
  firstMonthLabel: string
  afterLabel: string
  offerEnds: string
  setupLabel: string
  perMonth: string
  offerIncludes: string
  offerScope?: string
  validity: string
  priceNote?: string
  liveIn: string
  tiers: Tier[]
  ctaTitle: string
  ctaAccent: string
  ctaText: string
  scanLabel: string
  smallPrint: string
}

export const COPY: Record<Lang, SheetCopy> = {
  ar: {
    dir: "rtl",
    numberLocale: "ar-u-nu-arab",
    tag: "وكلاء ذكاء اصطناعي للعيادات",
    headline: ["كل مريض يحجز.", "كل موعد يتأكد."],
    headlineAccent: "على واتساب، ٢٤ ساعة.",
    subhead:
      "موظف ذكي يرد على مرضاك بلهجتهم، يحجز المواعيد، ويذكّرهم قبل الموعد. جاهز خلال ٧ أيام.",
    chat: { patient: "بدي موعد يوم الثلاثاء", agent: "تم ✓ الثلاثاء ٤:٣٠ مساءً. رح أذكّرك قبلها بيوم." },
    problems: [
      "رسائل واتساب بدون رد خارج الدوام تعني مريضاً يحجز عند غيرك.",
      "مواعيد تضيع لأن المريض نسي.",
      "فريقك مشغول بالرد على نفس الأسئلة كل يوم: كم السعر؟ وين العيادة؟ كيف أتحضّر؟",
    ],
    doesLabel: "وكيل واحد، مكتب استقبالك كامل",
    does: [
      "يحجز المواعيد ويعيد جدولتها ويلغيها",
      "يرسل تذكيرات قبل الموعد ويطلب التأكيد",
      "يجيب عن الأسعار والموقع وساعات الدوام والتحضير للزيارة",
      "يتابع المريض بعد الزيارة",
      "يحوّل الحالة لموظف حقيقي عندما يحتاج الأمر إنساناً",
      "يشتغل ٢٤ ساعة، بلا إجازات",
    ],
    startsLabel: "كيف نبدأ",
    steps: [
      { day: "اليوم ١", text: "نجلس معك ونحدد خدماتك وأسعارك وأسئلة مرضاك." },
      { day: "اليوم ٣", text: "نبني الوكيل ونجربه معك على حالات حقيقية." },
      { day: "اليوم ٧", text: "يبدأ الرد على مرضاك." },
    ],
    guaranteeTitle: "نضمن أنه يشتغل.",
    guaranteeText:
      "قبل البدء نكتب معك ٤ معايير واضحة (مثلاً: يجيب عن الأسعار بدقة، يحجز بدون تدخل أحد، يحوّل للموظف عند الحاجة). ونعدّل مجاناً إلى أن يحقق كلها.",
    discountBadge: "خصم ٥٠٪ على أول شهر",
    firstMonthLabel: "الشهر الأول",
    afterLabel: "بعدها",
    offerEnds: "العرض ساري حتى ٣١ كانون الأول ٢٠٢٦ — من ٢٠٢٧ بالسعر الأصلي.",
    setupLabel: "رسوم إعداد لمرة واحدة",
    perMonth: "شهرياً",
    offerIncludes: "الحجز، التذكيرات، التأكيد، الأسئلة الشائعة، ورقم واتساب واحد.",
    offerScope: "عيادة واحدة. الفروع والتكاملات والمسارات الخاصة نتفق عليها معك.",
    liveIn: "يشتغل خلال ٧ أيام",
    validity: "السعر ساري خلال تشرين الأول ٢٠٢٦، بما يعادل السعر بالدولار.",
    tiers: [
      {
        id: "starter",
        name: "البداية",
        fit: "طبيب واحد",
        includes: "الحجز، التذكيرات، الأسئلة الشائعة، رقم واتساب واحد",
      },
      {
        id: "growth",
        name: "النمو",
        fit: "عيادة بعدة أطباء",
        includes: "كل ما في البداية + تقويم لكل طبيب، متابعة بعد الزيارة",
      },
      {
        id: "business",
        name: "الأعمال",
        fit: "مجموعات وعدة فروع",
        includes: "كل ما في النمو + عدة فروع، ربط مع برنامج العيادة، مسارات خاصة، دعم بأولوية",
      },
    ],
    ctaTitle: "لا تصدّقنا.",
    ctaAccent: "كلّم الوكيل.",
    ctaText: "الرقم تحت هو الوكيل نفسه، مش رقم مبيعات. راسله على واتساب، وبتجرّب بالضبط اللي رح يعيشه مريضك.",
    scanLabel: "امسح — هذا هو الوكيل",
    smallPrint: "يتحدث الوكيل بالعربية (اللهجة الفلسطينية والأردنية) وبالتركية.",
  },
  en: {
    dir: "ltr",
    numberLocale: "en-US",
    tag: "AI agents for clinics",
    headline: ["Every patient booked.", "Every appointment confirmed."],
    headlineAccent: "On WhatsApp, 24/7.",
    subhead:
      "An AI agent that answers your patients in their own dialect, books appointments and reminds them before the visit. Live in 7 days.",
    chat: { patient: "Can I book for Tuesday?", agent: "Done ✓ Tuesday, 4:30 PM. I'll remind you the day before." },
    problems: [
      "Messages left unanswered after hours become patients who book elsewhere.",
      "Appointments lost to forgetfulness.",
      "Your team keeps answering the same questions all day: price, location, how to prepare.",
    ],
    doesLabel: "One agent, your whole front desk",
    does: [
      "Books, reschedules and cancels appointments",
      "Sends reminders and asks for confirmation",
      "Answers questions on prices, location, hours and visit preparation",
      "Follows up after the visit",
      "Hands over to a real staff member when a person is needed",
      "Works 24/7, no days off",
    ],
    startsLabel: "How it starts",
    steps: [
      { day: "Day 1", text: "We sit with you and set your services, prices and common patient questions." },
      { day: "Day 3", text: "We build the agent and test it with you on real cases." },
      { day: "Day 7", text: "It starts answering your patients." },
    ],
    guaranteeTitle: "We guarantee it works.",
    guaranteeText:
      "Before we start, we write down 4 clear checks with you (for example: answers prices correctly, books without anyone stepping in, hands over to staff when needed). We fix it free until it passes all of them.",
    discountBadge: "50% off your first month",
    firstMonthLabel: "First month",
    afterLabel: "then",
    offerEnds: "Offer ends 31 December 2026 — standard price from 2027.",
    setupLabel: "one-time setup",
    perMonth: "/ month",
    offerIncludes: "Booking, reminders, confirmations, FAQ, and one WhatsApp number.",
    offerScope: "Single clinic. Multi-branch, integrations and custom flows are scoped with you.",
    liveIn: "Live in 7 days",
    validity: "Price valid October 2026.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        fit: "Single practitioner",
        includes: "Booking, reminders, FAQ, 1 WhatsApp number",
      },
      {
        id: "growth",
        name: "Growth",
        fit: "Multi-doctor clinic",
        includes: "Everything in Starter + multiple doctor calendars, post-visit follow-up",
      },
      {
        id: "business",
        name: "Business",
        fit: "Chains and multi-branch",
        includes: "Everything in Growth + multiple branches, clinic software integration, custom flows, priority support",
      },
    ],
    ctaTitle: "Don't take our word.",
    ctaAccent: "Talk to the agent.",
    ctaText: "The WhatsApp number below is the agent — not a sales line. Message it and you are talking to exactly what your patients will.",
    scanLabel: "Scan — it is the agent",
    smallPrint: "Agent handles conversations in Arabic (Palestinian/Jordanian dialect) and Turkish.",
  },
  tr: {
    dir: "ltr",
    numberLocale: "tr-TR",
    tag: "Klinikler için yapay zeka asistanı",
    headline: ["Her hasta randevusunu alır.", "Her randevu onaylanır."],
    headlineAccent: "WhatsApp'ta, 7/24.",
    subhead:
      "Hastalarınıza kendi dilinde yanıt veren, randevuları alan ve randevudan önce hatırlatma yapan yapay zeka asistanı. 7 günde hazır.",
    chat: { patient: "Salı günü randevu alabilir miyim?", agent: "Tamam ✓ Salı 16:30. Bir gün önce hatırlatacağım." },
    problems: [
      "Mesai dışında cevapsız kalan WhatsApp mesajları, başka kliniğe giden hastalar demektir.",
      "Hasta unuttuğu için boşa giden randevular.",
      "Ekibiniz her gün aynı sorulara yanıt vermekle meşgul: Ücret ne kadar? Klinik nerede? Muayeneye nasıl hazırlanmalı?",
    ],
    doesLabel: "Asistan neler yapar",
    does: [
      "Randevu alır, erteler ve iptal eder",
      "Randevu öncesi hatırlatma gönderir ve onay ister",
      "Ücret, adres, çalışma saatleri ve muayene hazırlığı sorularını yanıtlar",
      "Muayene sonrası hastayı takip eder",
      "İnsan gerektiğinde konuyu klinik çalışanına devreder",
      "7/24 çalışır, izin yapmaz",
    ],
    startsLabel: "Nasıl başlar",
    steps: [
      {
        day: "1. Gün",
        text: "Sizinle oturup hizmetlerinizi, fiyatlarınızı ve hastaların sık sorduğu soruları belirleriz.",
      },
      { day: "3. Gün", text: "Asistanı kurar, gerçek senaryolarla sizinle birlikte test ederiz." },
      { day: "7. Gün", text: "Hastalarınıza yanıt vermeye başlar." },
    ],
    guaranteeTitle: "Çalıştığını garanti ederiz.",
    guaranteeText:
      "Başlamadan önce sizinle 4 net ölçüt yazarız (örneğin: fiyatları doğru söyler, kimse müdahale etmeden randevu alır, gerektiğinde çalışana devreder). Hepsini karşılayana kadar ücretsiz düzeltiriz.",
    discountBadge: "İlk ay %50 indirim",
    firstMonthLabel: "İlk ay",
    afterLabel: "sonra",
    offerEnds: "Kampanya 31 Aralık 2026'da biter — 2027'de tam fiyat.",
    setupLabel: "tek seferlik kurulum",
    perMonth: "/ ay",
    offerIncludes: "Randevu, hatırlatma, onay, sık sorulan sorular ve 1 WhatsApp numarası.",
    liveIn: "7 günde hazır",
    validity: "Fiyat Ekim 2026 için geçerlidir.",
    priceNote: "TL fiyat USD karşılığıdır ve sözleşme tarihinde sabitlenir.",
    tiers: [
      {
        id: "starter",
        name: "Başlangıç",
        fit: "Tek hekim",
        includes: "Randevu, hatırlatma, sık sorulan sorular, 1 WhatsApp numarası",
      },
      {
        id: "growth",
        name: "Büyüme",
        fit: "Çok hekimli klinik",
        includes: "Başlangıç'taki her şey + hekim başına takvim, muayene sonrası takip",
      },
      {
        id: "business",
        name: "Kurumsal",
        fit: "Zincir ve çok şubeli",
        includes: "Büyüme'deki her şey + çoklu şube, klinik yazılımı entegrasyonu, özel akışlar, öncelikli destek",
      },
    ],
    ctaTitle: "Asistanı kendi kliniğinizde",
    ctaAccent: "çalışırken görün.",
    ctaText: "Hizmetleriniz ve fiyatlarınızla canlı bir demo hazırlarız. WhatsApp'tan bize yazın.",
    scanLabel: "Sohbet için tarayın",
    smallPrint: "Asistan Arapça (Filistin/Ürdün lehçesi) ve Türkçe konuşur.",
  },
}

/** First-month price at 50% off, rounded to a clean step per currency. */
export function firstMonthPrice(market: Market): number {
  const monthly = MARKETS[market].prices.starter.monthly
  const step: Record<Market, number> = { ps: 5, jo: 5, tr: 50, en: 10 }
  return Math.round(monthly / 2 / step[market]) * step[market]
}

export function formatPrice(amount: number, market: Market): string {
  const { currency, lang } = MARKETS[market]
  return new Intl.NumberFormat(COPY[lang].numberLocale, {
    style: "currency",
    currency,
    currencyDisplay: currency === "JOD" ? "name" : "narrowSymbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
