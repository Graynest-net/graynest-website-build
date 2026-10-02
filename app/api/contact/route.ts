const INTERESTS = ["new-product", "existing", "internal-tool", "unsure"] as const
type Interest = (typeof INTERESTS)[number]

const INTEREST_LABEL: Record<Interest, string> = {
  "new-product": "New product / MVP",
  existing: "Existing product",
  "internal-tool": "Internal tool",
  unsure: "Not sure yet",
}

const LIMITS = { name: 120, email: 200, message: 4000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function fail(status: number, error: string) {
  return Response.json({ ok: false, error }, { status })
}

/**
 * Lead capture: validates the inquiry and emails it to the team via Resend.
 * Needs RESEND_API_KEY; CONTACT_TO / CONTACT_FROM are optional overrides.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return fail(400, "invalid_request")
  }

  // Honeypot: real visitors never see or fill this field. Pretend success to bots.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return Response.json({ ok: true })
  }

  const name = typeof body.name === "string" ? body.name.trim() : ""
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const message = typeof body.message === "string" ? body.message.trim() : ""
  const interest: Interest = INTERESTS.includes(body.interest as Interest)
    ? (body.interest as Interest)
    : "unsure"

  if (!name || !message || !EMAIL_RE.test(email)) return fail(422, "invalid_fields")
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return fail(422, "too_long")
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return fail(503, "not_configured")

  const to = process.env.CONTACT_TO ?? "hello@graynest.co"
  const from = process.env.CONTACT_FROM ?? "GrayNest Website <hello@graynest.co>"

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Interested in: ${INTEREST_LABEL[interest]}`,
    "",
    message,
  ].join("\n")

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New inquiry (${INTEREST_LABEL[interest]}) from ${name}`,
      text,
    }),
  })

  if (!res.ok) {
    console.error("contact: Resend rejected the email", res.status, await res.text())
    return fail(502, "send_failed")
  }

  return Response.json({ ok: true })
}
