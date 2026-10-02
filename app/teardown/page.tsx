import { redirect } from "next/navigation"

// The campaign runs in Arabic, so the short link graynest.co/teardown lands there.
export default function TeardownIndex() {
  redirect("/teardown/ar")
}
