import type { Metadata } from "next"
import { Playpen_Sans_Arabic, Tajawal } from "next/font/google"
import { TeardownPage } from "@/components/teardown/TeardownPage"
import { TEARDOWN_COPY } from "@/content/teardown"

// The campaign faces. Loaded here only, so the English route ships no Arabic fonts.
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-tajawal",
})

const playpen = Playpen_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300"],
  display: "swap",
  variable: "--font-playpen",
})

const copy = TEARDOWN_COPY.ar

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  alternates: {
    canonical: "/teardown/ar",
    languages: { ar: "/teardown/ar", en: "/teardown/en" },
  },
}

export default function TeardownArabicPage() {
  return <TeardownPage lang="ar" fontClass={`${tajawal.variable} ${playpen.variable}`} />
}
