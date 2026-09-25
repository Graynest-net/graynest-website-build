/**
 * Public ElevenLabs agent configuration for the sitewide GrayNest support widget.
 */
export function getElevenLabsAgentId(): string {
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID

  if (typeof agentId !== "string") {
    return ""
  }

  return agentId.trim()
}

/**
 * Optional WhatsApp deep link shown in the agent drawer.
 */
export function getAgentWhatsAppHref(): string {
  const raw = process.env.NEXT_PUBLIC_AGENT_WHATSAPP?.trim() ?? ""

  if (raw.length === 0) {
    return "https://wa.me/"
  }

  if (raw.startsWith("http")) {
    return raw
  }

  const digits = raw.replace(/[^\d]/g, "")
  return `https://wa.me/${digits}`
}

/**
 * Optional phone number shown in the agent drawer.
 */
export function getAgentPhoneHref(): string {
  const raw = process.env.NEXT_PUBLIC_AGENT_PHONE?.trim() ?? ""

  if (raw.length === 0) {
    return "tel:"
  }

  if (raw.startsWith("tel:")) {
    return raw
  }

  return `tel:${raw.replace(/\s+/g, "")}`
}

export function getAgentPhoneLabel(): string {
  const raw = process.env.NEXT_PUBLIC_AGENT_PHONE?.trim() ?? ""
  return raw.length > 0 ? raw : "Call GrayNest"
}
