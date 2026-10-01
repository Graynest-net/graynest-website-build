/**
 * Clinics offer landing page: copy per language, prices per market.
 *
 * Prices are anchored in USD. Local amounts are the USD equivalent at the rate
 * on ISSUED_ON, rounded to a clean number. To re-issue, update RATES and
 * ISSUED_ON, re-round the local amounts in MARKETS, then re-check the page.
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

export type ChatFrom = "patient" | "agent"

export interface PageCopy {
  dir: "rtl" | "ltr"
  numberLocale: string
  tag: string

  // Hero — the promise
  headline: string[]
  headlineAccent: string
  subhead: string
  primaryCta: string
  secondaryCta: string
  proofChips: string[]

  // Problem
  problemTitle: string
  problems: string[]

  // See it working — the demonstration
  demoTitle: string
  demoTitleAccent: string
  demoCaption: string
  thread: { from: ChatFrom; text: string }[]
  demoNote: string
  chatOnline: string
  chatTyping: string
  chatReplay: string

  // Outcomes
  outcomesLabel: string
  outcomes: { title: string; text: string }[]

  // How it works
  stepsTitle: string
  steps: { n: string; title: string; text: string }[]
  liveIn: string

  // Proof
  proofTitle: string
  proofTitleAccent: string
  proofText: string

  // Price
  discountBadge: string
  firstMonthLabel: string
  afterLabel: string
  perMonth: string
  setupLabel: string
  includes: string[]
  offerScope?: string
  offerEnds: string
  validity: string
  priceNote?: string

  // Guarantee
  guaranteeTitle: string
  guaranteeText: string

  // Final CTA
  finalTitle: string
  finalAccent: string
  finalText: string
  finalCta: string
  scanLabel: string

  smallPrint: string
}

export const COPY: Record<Lang, PageCopy> = {
  en: {
    dir: "ltr",
    numberLocale: "en-US",
    tag: "Your WhatsApp front desk",

    headline: ["Every patient booked.", "Every appointment confirmed."],
    headlineAccent: "On WhatsApp, around the clock.",
    subhead:
      "Your WhatsApp front desk, on autopilot — answering patients in their own dialect, booking appointments and reminding them before the visit.",
    primaryCta: "Try the agent",
    secondaryCta: "See it book a patient",
    proofChips: ["On WhatsApp", "Answers 24/7", "Their own dialect", "Live in 7 days"],

    problemTitle: "Where clinics lose patients",
    problems: [
      "Messages after closing go unanswered — and the patient books at the clinic that replied first.",
      "Appointments slip because no one confirmed or sent a reminder.",
      "Your team spends the day on the same questions: price, location, hours, how to prepare.",
    ],

    demoTitle: "Watch it book",
    demoTitleAccent: "a patient.",
    demoCaption: "A patient messages. It answers, books, confirms, and reminds — start to finish, no one at the desk.",
    thread: [
      { from: "patient", text: "Hi, do you have an appointment this week?" },
      { from: "agent", text: "We do. I have Tuesday 4:30 PM or Wednesday 11:00 AM free." },
      { from: "patient", text: "Tuesday works." },
      { from: "agent", text: "Booked ✓ What name should I put it under?" },
      { from: "patient", text: "Sara" },
      { from: "agent", text: "You're set, Sara — Tuesday 4:30 PM. I'll remind you the day before." },
    ],
    demoNote: "This isn't a recording. The number below is the same agent — message it yourself.",
    chatOnline: "online",
    chatTyping: "typing…",
    chatReplay: "Play again",

    outcomesLabel: "What changes for your clinic",
    outcomes: [
      { title: "More bookings", text: "Patients book the moment they message — day, night, or after you've closed." },
      { title: "Fewer no-shows", text: "Every appointment is confirmed and reminded, automatically." },
      { title: "Less front-desk work", text: "Routine WhatsApp questions are handled without your team touching them." },
    ],

    stepsTitle: "Live in seven days.",
    steps: [
      { n: "1", title: "We learn your clinic", text: "Your services, prices, hours, and the questions patients actually ask." },
      { n: "2", title: "We build your agent", text: "Configured for your clinic and tested with you on real cases." },
      { n: "3", title: "You go live", text: "It starts answering your patients on WhatsApp." },
    ],
    liveIn: "Live in 7 days",

    proofTitle: "Don't take our word.",
    proofTitleAccent: "Talk to the agent.",
    proofText:
      "The WhatsApp number below isn't a sales line — it's the agent itself. Message it and you'll get exactly what your patients get.",

    discountBadge: "50% off your first month",
    firstMonthLabel: "first month",
    afterLabel: "then",
    perMonth: "/ month",
    setupLabel: "one-time setup",
    includes: [
      "Booking, rescheduling and cancellations",
      "Reminders and confirmations before every visit",
      "Answers on price, location, hours and preparation",
      "Handover to your staff when a person is needed",
      "One WhatsApp number, answering 24/7",
    ],
    offerScope: "For a single clinic. Multi-branch, integrations and custom flows are scoped with you.",
    offerEnds: "Offer ends 31 December 2026 — standard price from 2027.",
    validity: "Price valid October 2026.",

    guaranteeTitle: "We guarantee it works.",
    guaranteeText:
      "Before we start, we agree on clear checks with you — answers prices correctly, books without anyone stepping in, hands over to staff when needed. We fix it free until it passes all of them.",

    finalTitle: "Ready to stop losing patients",
    finalAccent: "on WhatsApp?",
    finalText: "Message the agent now, or scan to open it on your phone.",
    finalCta: "Try the agent",
    scanLabel: "Scan — it's the agent",

    smallPrint: "The agent handles conversations in Arabic (Palestinian/Jordanian dialect) and Turkish.",
  },

  ar: {
    dir: "rtl",
    numberLocale: "ar-u-nu-arab",
    tag: "مكتب استقبالك على واتساب",

    headline: ["كل مريض يحجز.", "كل موعد يتأكد."],
    headlineAccent: "على واتساب، ٢٤ ساعة.",
    subhead:
      "مكتب استقبالك على واتساب، شغّال لحاله — يرد على مرضاك بلهجتهم، يحجز المواعيد، ويذكّرهم قبل الموعد.",
    primaryCta: "جرّب الوكيل",
    secondaryCta: "شوفه يحجز موعد",
    proofChips: ["على واتساب", "يرد ٢٤ ساعة", "بلهجة مرضاك", "جاهز خلال ٧ أيام"],

    problemTitle: "وين العيادات بتخسر مرضاها",
    problems: [
      "رسالة بتيجي بعد الدوام وبتظل بدون رد — والمريض بيحجز عند العيادة اللي ردّت عليه.",
      "مواعيد بتضيع لأنه ما حدا أكّد الموعد أو ذكّر فيه.",
      "فريقك بيقضي يومه على نفس الأسئلة: كم السعر؟ وين العيادة؟ إيمتى الدوام؟ كيف أتحضّر؟",
    ],

    demoTitle: "شوفه يحجز",
    demoTitleAccent: "موعد مريض.",
    demoCaption: "المريض بيراسل. الوكيل بيرد، بيحجز، بيأكّد، وبيذكّر — من الأول للآخر، وما حدا على المكتب.",
    thread: [
      { from: "patient", text: "مرحبا، في موعد فاضي هالأسبوع؟" },
      { from: "agent", text: "أكيد. عندي الثلاثاء ٤:٣٠ العصر أو الأربعاء ١١:٠٠ الصبح." },
      { from: "patient", text: "الثلاثاء مناسب." },
      { from: "agent", text: "تم الحجز ✓ على أي اسم أسجّله؟" },
      { from: "patient", text: "سارة" },
      { from: "agent", text: "تمام يا سارة — الثلاثاء ٤:٣٠ العصر. رح أذكّرك قبلها بيوم." },
    ],
    demoNote: "هاي مش تسجيل. الرقم تحت هو نفس الوكيل — راسله وجرّبه بنفسك.",
    chatOnline: "متصل",
    chatTyping: "بيكتب…",
    chatReplay: "شغّلها من جديد",

    outcomesLabel: "شو بيتغيّر في عيادتك",
    outcomes: [
      { title: "حجوزات أكثر", text: "المريض بيحجز بنفس اللحظة اللي بيراسل فيها — نهار، ليل، وبعد ما تسكّر." },
      { title: "غيابات أقل", text: "كل موعد بيتأكّد وبيجيه تذكير، تلقائياً." },
      { title: "شغل أقل على الاستقبال", text: "أسئلة واتساب المتكررة بتنحل بدون ما يلمسها فريقك." },
    ],

    stepsTitle: "جاهز خلال سبعة أيام.",
    steps: [
      { n: "١", title: "نتعرّف على عيادتك", text: "خدماتك، أسعارك، ساعات دوامك، والأسئلة اللي بيسألها مرضاك فعلاً." },
      { n: "٢", title: "نبني وكيلك", text: "مضبوط على عيادتك ومجرّب معك على حالات حقيقية." },
      { n: "٣", title: "تبدأ الخدمة", text: "يبدأ يرد على مرضاك على واتساب." },
    ],
    liveIn: "جاهز خلال ٧ أيام",

    proofTitle: "لا تصدّقنا.",
    proofTitleAccent: "كلّم الوكيل.",
    proofText:
      "الرقم تحت مش رقم مبيعات — هو الوكيل نفسه. راسله وبتوصلك بالضبط نفس التجربة اللي رح يعيشها مريضك.",

    discountBadge: "خصم ٥٠٪ على أول شهر",
    firstMonthLabel: "الشهر الأول",
    afterLabel: "بعدها",
    perMonth: "شهرياً",
    setupLabel: "رسوم إعداد لمرة واحدة",
    includes: [
      "الحجز وإعادة الجدولة والإلغاء",
      "تذكيرات وتأكيد قبل كل موعد",
      "إجابات عن السعر والموقع والدوام والتحضير",
      "تحويل الحالة لموظفك لما يحتاج الأمر إنساناً",
      "رقم واتساب واحد يرد ٢٤ ساعة",
    ],
    offerScope: "لعيادة واحدة. الفروع والتكاملات والمسارات الخاصة نتفق عليها معك.",
    offerEnds: "العرض ساري حتى ٣١ كانون الأول ٢٠٢٦ — من ٢٠٢٧ بالسعر الأصلي.",
    validity: "السعر ساري خلال تشرين الأول ٢٠٢٦، بما يعادل السعر بالدولار.",

    guaranteeTitle: "نضمن إنه يشتغل.",
    guaranteeText:
      "قبل ما نبدأ نتفق معك على معايير واضحة — يجيب عن الأسعار بدقة، يحجز بدون تدخل أحد، يحوّل للموظف عند الحاجة. ونعدّل مجاناً لحدّ ما يحقق كلها.",

    finalTitle: "جاهز توقف خسارة المرضى",
    finalAccent: "على واتساب؟",
    finalText: "راسل الوكيل هلأ، أو امسح الرمز تفتحه على تلفونك.",
    finalCta: "جرّب الوكيل",
    scanLabel: "امسح — هذا هو الوكيل",

    smallPrint: "يتحدث الوكيل بالعربية (اللهجة الفلسطينية والأردنية) وبالتركية.",
  },

  tr: {
    dir: "ltr",
    numberLocale: "tr-TR",
    tag: "WhatsApp'taki resepsiyonunuz",

    headline: ["Her hasta randevusunu alır.", "Her randevu onaylanır."],
    headlineAccent: "WhatsApp'ta, 7/24.",
    subhead:
      "WhatsApp'taki resepsiyonunuz, kendi kendine çalışır — hastalarınıza kendi dilinde yanıt verir, randevu alır ve muayeneden önce hatırlatır.",
    primaryCta: "Asistanı deneyin",
    secondaryCta: "Randevu alışını izleyin",
    proofChips: ["WhatsApp'ta", "7/24 yanıt", "Kendi dilinde", "7 günde hazır"],

    problemTitle: "Klinikler hastalarını nerede kaybeder",
    problems: [
      "Mesai sonrası gelen mesaj yanıtsız kalır — hasta ise ilk cevap veren kliniğe gider.",
      "Kimse onaylamadığı ya da hatırlatmadığı için randevular boşa gider.",
      "Ekibiniz gününü aynı sorulara harcar: ücret, adres, çalışma saatleri, nasıl hazırlanılır.",
    ],

    demoTitle: "Bir hastanın randevusunu",
    demoTitleAccent: "alışını izleyin.",
    demoCaption: "Hasta yazar. Asistan yanıtlar, randevu alır, onaylar ve hatırlatır — baştan sona, masada kimse yok.",
    thread: [
      { from: "patient", text: "Merhaba, bu hafta randevunuz var mı?" },
      { from: "agent", text: "Var. Salı 16:30 ya da Çarşamba 11:00 boşta." },
      { from: "patient", text: "Salı uygun." },
      { from: "agent", text: "Alındı ✓ Hangi isme kaydedeyim?" },
      { from: "patient", text: "Sara" },
      { from: "agent", text: "Hazırsınız Sara — Salı 16:30. Bir gün önce hatırlatacağım." },
    ],
    demoNote: "Bu bir kayıt değil. Aşağıdaki numara aynı asistan — kendiniz yazın.",
    chatOnline: "çevrimiçi",
    chatTyping: "yazıyor…",
    chatReplay: "Tekrar oynat",

    outcomesLabel: "Kliniğinizde ne değişir",
    outcomes: [
      { title: "Daha çok randevu", text: "Hasta yazdığı anda randevu alır — gündüz, gece, kapandıktan sonra." },
      { title: "Daha az kaçan randevu", text: "Her randevu otomatik onaylanır ve hatırlatılır." },
      { title: "Daha az resepsiyon yükü", text: "Sık gelen WhatsApp soruları ekibiniz dokunmadan çözülür." },
    ],

    stepsTitle: "Yedi günde hazır.",
    steps: [
      { n: "1", title: "Kliniğinizi öğreniriz", text: "Hizmetleriniz, fiyatlarınız, saatleriniz ve hastaların gerçekten sorduğu sorular." },
      { n: "2", title: "Asistanınızı kurarız", text: "Kliniğinize göre yapılandırılır ve gerçek senaryolarla sizinle test edilir." },
      { n: "3", title: "Yayına geçersiniz", text: "Hastalarınıza WhatsApp'tan yanıt vermeye başlar." },
    ],
    liveIn: "7 günde hazır",

    proofTitle: "Bize inanmayın.",
    proofTitleAccent: "Asistanla konuşun.",
    proofText:
      "Aşağıdaki numara bir satış hattı değil — asistanın kendisi. Yazın ve hastalarınızın alacağı yanıtın aynısını alın.",

    discountBadge: "İlk ay %50 indirim",
    firstMonthLabel: "ilk ay",
    afterLabel: "sonra",
    perMonth: "/ ay",
    setupLabel: "tek seferlik kurulum",
    includes: [
      "Randevu alma, erteleme ve iptal",
      "Her muayeneden önce hatırlatma ve onay",
      "Ücret, adres, saat ve hazırlık sorularına yanıt",
      "Gerektiğinde çalışanınıza devretme",
      "7/24 yanıt veren tek WhatsApp numarası",
    ],
    offerScope: "Tek klinik içindir. Çok şube, entegrasyon ve özel akışlar sizinle planlanır.",
    offerEnds: "Kampanya 31 Aralık 2026'da biter — 2027'de tam fiyat.",
    validity: "Fiyat Ekim 2026 için geçerlidir.",
    priceNote: "TL fiyat USD karşılığıdır ve sözleşme tarihinde sabitlenir.",

    guaranteeTitle: "Çalıştığını garanti ederiz.",
    guaranteeText:
      "Başlamadan önce sizinle net ölçütlerde anlaşırız — fiyatları doğru söyler, kimse müdahale etmeden randevu alır, gerektiğinde çalışana devreder. Hepsini karşılayana kadar ücretsiz düzeltiriz.",

    finalTitle: "WhatsApp'ta hasta kaybetmeyi",
    finalAccent: "bırakmaya hazır mısınız?",
    finalText: "Asistana şimdi yazın ya da telefonunuzda açmak için tarayın.",
    finalCta: "Asistanı deneyin",
    scanLabel: "Tarayın — asistan bu",

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
