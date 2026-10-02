/**
 * App Teardown landing page: copy per language.
 *
 * The Arabic copy is the approved campaign copy (the LinkedIn/Instagram carousel),
 * kept word for word where the carousel has a line for it. Every claim here is a
 * term of the offer: free, 15 minutes, recorded by the CTO, three fixes ranked by
 * impact with technical tips (usability, page speed, and security where it
 * applies), delivered on WhatsApp within 48 hours, five reviews a month.
 */

import { CONTACT } from "@/content/clinics-onepager"

export type TeardownLang = "ar" | "en"

export const TEARDOWN_LANGS: { lang: TeardownLang; label: string; href: string }[] = [
  { lang: "ar", label: "العربية", href: "/teardown/ar" },
  { lang: "en", label: "English", href: "/teardown/en" },
]

export interface TeardownCopy {
  dir: "rtl" | "ltr"
  metaTitle: string
  metaDescription: string
  tag: string

  // Hero
  headline: string[]
  headlineAccent: string
  subhead: string
  primaryCta: string
  secondaryCta: string
  proofChips: string[]
  cardRecording: string
  cardSummary: string
  cardSummaryNote: string

  // What a teardown is
  whatTitle: string
  whatTitleAccent: string
  whatText: string

  // What we check
  checksTitle: string
  checksTitleAccent: string
  checks: { title: string; text: string }[]

  // What you get
  getsTitle: string
  getsTitleAccent: string
  gets: { title: string; text: string }[]

  // Who it is for
  fitTitle: string
  fitTitleAccent: string
  fitForLabel: string
  fitForText: string
  fitNotLabel: string
  fitNot: string[]

  // Why it is free
  whyTitle: string
  whyTitleAccent: string
  whyText: string
  whyAfter: string

  // Final CTA
  finalTitle: string
  finalAccent: string
  finalText: string
  finalCta: string
  scanLabel: string

  /** Opens the WhatsApp chat with this text already typed. */
  whatsappPrefill: string
  smallPrint: string
}

export const TEARDOWN_COPY: Record<TeardownLang, TeardownCopy> = {
  ar: {
    dir: "rtl",
    metaTitle: "GrayNest — تفكيك مجاني لتطبيقك أو موقعك من الـCTO",
    metaDescription: "مراجعة مسجّلة، 15 دقيقة، من الـCTO. على حسابنا، بدون أي عرض بيع.",
    tag: "تفكيك مجاني من الـCTO",

    headline: ["بنفكّك تطبيقك", "أو موقعك"],
    headlineAccent: "ونوريك وين الخلل.",
    subhead: "مراجعة مسجّلة، 15 دقيقة، من الـCTO. على حسابنا، بدون أي عرض بيع.",
    primaryCta: "ابعتلنا الرابط",
    secondaryCta: "شو بنفحص؟",
    proofChips: ["15 دقيقة مسجّلة", "من الـCTO", "خلال 48 ساعة", "بدون عرض بيع"],
    cardRecording: "تسجيل الشاشة والصوت",
    cardSummary: "الملخّص المكتوب",
    cardSummaryNote: "ثلاث إصلاحات مرتبة حسب الأثر",

    whatTitle: "شو يعني",
    whatTitleAccent: "تفكيك؟",
    whatText:
      "الـCTO بيفتح تطبيقك أو موقعك متل أي زبون، وبيمشي فيه خطوة خطوة، وبيسجّل شاشته وصوته وهو بيشرح شو شايف.",

    checksTitle: "شو",
    checksTitleAccent: "بنفحص؟",
    checks: [
      { title: "سرعة الصفحات", text: "قديش بيستنى الزبون قبل ما يشوف إشي، وشو اللي مبطّئها." },
      { title: "سهولة الاستخدام", text: "إذا الزبون عارف وين يكبس وشو الخطوة الجاية، ووين بيعلق." },
      { title: "أسئلة بدون جواب", text: "الأسئلة اللي الزبون ما لقى جوابها." },
      { title: "الأمان", text: "إذا في إشي باين من برّا بيعرّض بيانات زباينك للخطر، بننبّهك عليه." },
      { title: "آخر تحديث", text: "إيمتى آخر مرة اتحدّث، وشو صار باين عليه إنه قديم." },
      { title: "الذكاء الاصطناعي", text: "وين ممكن يوفّر عليك شغل، ووين ما إله لزوم." },
    ],

    getsTitle: "شو",
    getsTitleAccent: "بتاخد؟",
    gets: [
      { title: "فيديو مسجّل 15 دقيقة", text: "شاشة الـCTO وصوته وهو بيمشي في تطبيقك وبيشرح شو شايف." },
      { title: "ملخّص مكتوب", text: "ثلاث إصلاحات مرتبة حسب الأثر، مع نصائح تقنية لتنفيذها." },
      { title: "خلال 48 ساعة", text: "بتوصلك خاص على واتساب." },
    ],

    fitTitle: "لمين",
    fitTitleAccent: "هالعرض؟",
    fitForLabel: "إلك",
    fitForText: "مشاريع صغيرة عندها تطبيق أو موقع شغّال، بس النتيجة مش على قد التعب.",
    fitNotLabel: "مش إلك",
    fitNot: ["الشركات الكبيرة", "الأفكار اللي لسا ما اتبنت"],

    whyTitle: "ليش",
    whyTitleAccent: "على حسابنا؟",
    whyText:
      "لأن أحسن طريقة تعرف شغلنا إنك تشوفه على تطبيقك إنت. بدون التزام وبدون عرض بيع. خمس مراجعات بس بالشهر.",
    whyAfter:
      "بعد الفيديو، إذا حبيت ننفّذ الإصلاحات بنحكي بالتفاصيل. وإذا لا، المراجعة إلك وبتستفيد منها متل ما بدك.",

    finalTitle: "ابعتلنا رابط تطبيقك أو موقعك.",
    finalAccent: "وبنفكّكه.",
    finalText: "خمس مراجعات بالشهر، على حسابنا. بدون أي عرض بيع.",
    finalCta: "ابعتلنا الرابط",
    scanLabel: "امسح وابعت الرابط على واتساب",

    whatsappPrefill: "مرحبا، بدي تفكيك مجاني. هاد رابط تطبيقي أو موقعي: ",
    smallPrint: "التفكيك مراجعة مسجّلة لمرة واحدة، وما بيشمل تنفيذ الإصلاحات.",
  },

  en: {
    dir: "ltr",
    metaTitle: "GrayNest — Free app teardown by our CTO",
    metaDescription: "A recorded 15-minute review of your app or website by our CTO. On us, with no sales pitch.",
    tag: "Free teardown by our CTO",

    headline: ["We tear down", "your app", "or website."],
    headlineAccent: "And show you where it breaks.",
    subhead: "A recorded 15-minute review by our CTO. On us, with no sales pitch.",
    primaryCta: "Send us your link",
    secondaryCta: "What we check",
    proofChips: ["15 minutes, recorded", "By our CTO", "Within 48 hours", "No sales pitch"],
    cardRecording: "Screen and voice recording",
    cardSummary: "The written summary",
    cardSummaryNote: "Three fixes, ranked by impact",

    whatTitle: "What is a",
    whatTitleAccent: "teardown?",
    whatText:
      "Our CTO opens your app or website like any customer would, walks through it step by step, and records his screen and voice as he explains what he sees.",

    checksTitle: "What we",
    checksTitleAccent: "check.",
    checks: [
      { title: "Page speed", text: "How long a customer waits before they see anything, and what is slowing it down." },
      { title: "Usability", text: "Whether a customer knows where to tap and what comes next, and where they get stuck." },
      { title: "Unanswered questions", text: "The questions a customer couldn't find an answer to." },
      { title: "Security", text: "If something visible from the outside puts your customers' data at risk, we flag it." },
      { title: "Last update", text: "When it was last updated, and what already looks dated." },
      { title: "AI", text: "Where it could save you work, and where it has no place." },
    ],

    getsTitle: "What you",
    getsTitleAccent: "get.",
    gets: [
      { title: "A 15-minute recorded video", text: "Our CTO's screen and voice as he walks through your app and explains what he sees." },
      { title: "A written summary", text: "Three fixes, ranked by impact, with technical tips for making them." },
      { title: "Within 48 hours", text: "Sent to you privately on WhatsApp." },
    ],

    fitTitle: "Who it's",
    fitTitleAccent: "for.",
    fitForLabel: "For you",
    fitForText: "Small businesses with a live app or website, where the results don't match the effort.",
    fitNotLabel: "Not for you",
    fitNot: ["Large companies", "Ideas that haven't been built yet"],

    whyTitle: "Why it's",
    whyTitleAccent: "on us.",
    whyText:
      "Because the best way to judge our work is to see it on your own app. No commitment and no sales pitch. Only five reviews a month.",
    whyAfter:
      "After the video, if you want us to build the fixes, we'll talk details. If not, the review is yours to use however you like.",

    finalTitle: "Send us the link to your app or website.",
    finalAccent: "We'll tear it down.",
    finalText: "Five reviews a month, on us. No sales pitch.",
    finalCta: "Send us your link",
    scanLabel: "Scan to send your link on WhatsApp",

    whatsappPrefill: "Hi, I'd like a free teardown. Here's the link to my app or website: ",
    smallPrint: "The teardown is a one-time recorded review. It doesn't include building the fixes.",
  },
}

/** WhatsApp chat with the request already typed, so the visitor only pastes a link. */
export function teardownWhatsappUrl(lang: TeardownLang): string {
  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(TEARDOWN_COPY[lang].whatsappPrefill)}`
}
