import { headers } from "next/headers"
import { redirect } from "next/navigation"

// Short link and banner target: send visitors to the teardown in their browser's language.
// Only the first (preferred) language counts; anything other than Arabic gets English.
export default async function TeardownIndex() {
  const preferred = (await headers()).get("accept-language")?.split(",")[0]?.trim().toLowerCase() ?? ""
  redirect(preferred.startsWith("ar") ? "/teardown/ar" : "/teardown/en")
}
