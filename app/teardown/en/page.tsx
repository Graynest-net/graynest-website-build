import type { Metadata } from "next"
import { TeardownPage } from "@/components/teardown/TeardownPage"
import { TEARDOWN_COPY } from "@/content/teardown"

const copy = TEARDOWN_COPY.en

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  alternates: {
    canonical: "/teardown/en",
    languages: { ar: "/teardown/ar", en: "/teardown/en" },
  },
}

export default function TeardownEnglishPage() {
  return <TeardownPage lang="en" />
}
