"use client"

import { useState, type FormEvent } from "react"
import { track } from "@vercel/analytics"
import { MagneticButton } from "@/components/MagneticButton"
import { Icon } from "@/components/Icon"
import { useAgent } from "@/components/agent/AgentContext"

const INTERESTS = [
  { value: "new-product", label: "New product / MVP" },
  { value: "existing", label: "Existing product" },
  { value: "internal-tool", label: "Internal tool" },
  { value: "unsure", label: "Not sure yet" },
] as const

type Status = "idle" | "sending" | "sent" | "error"

/**
 * Lead capture form: posts to /api/contact, then swaps to a confirmation with the
 * reply window and a route to the site assistant.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [interest, setInterest] = useState<(typeof INTERESTS)[number]["value"]>("unsure")
  const { openAgent } = useAgent()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "sending") return
    const data = new FormData(event.currentTarget)
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"),
          interest,
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      track("lead_submitted", { interest })
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="glass max-w-2xl rounded-[28px] p-6 md:p-8 space-y-5" role="status">
        <p className="micro">RECEIVED</p>
        <h2 className="h3">Thanks. We have your brief.</h2>
        <p className="body text-[var(--gn-text-secondary)]">
          We reply within one business day. Have a quick question before then? Ask GrayNest, our
          site assistant.
        </p>
        <button type="button" className="btn-glass" onClick={() => openAgent("chat")}>
          <Icon name="message" /> Ask GrayNest
        </button>
      </div>
    )
  }

  return (
    <form className="glass space-y-5 max-w-2xl rounded-[28px] p-6 md:p-8" onSubmit={onSubmit}>
      <label className="block">
        <span className="micro mb-2 block">YOUR NAME</span>
        <input className="contact-input" name="name" autoComplete="name" placeholder="Full name…" maxLength={120} required />
      </label>
      <label className="block">
        <span className="micro mb-2 block">EMAIL</span>
        <input className="contact-input" type="email" name="email" autoComplete="email" spellCheck={false} placeholder="you@company.com…" maxLength={200} required />
      </label>

      <fieldset className="border-0 p-0 m-0">
        <legend className="micro mb-2 block">WHAT DO YOU NEED?</legend>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((option) => (
            <label key={option.value} className="contact-chip">
              <input
                type="radio"
                name="interest"
                value={option.value}
                checked={interest === option.value}
                onChange={() => setInterest(option.value)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="micro mb-2 block">WHAT ARE WE MAKING?</span>
        <textarea className="contact-input min-h-36" name="message" placeholder="A brief on what you need…" maxLength={4000} required />
      </label>

      {/* Honeypot: hidden from people and assistive tech, bots fill it. */}
      <div aria-hidden="true" className="contact-hp">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <MagneticButton type="submit">
          <Icon name="send" /> {status === "sending" ? "Sending…" : "Send inquiry"}
        </MagneticButton>
        <p className="text-sm text-[var(--gn-text-3)]">We reply within one business day.</p>
        {status === "error" ? (
          <p role="alert" className="text-sm text-[var(--gn-red-hot)]">
            That didn&apos;t send. Try again, or email us at{" "}
            <a className="underline" href="mailto:hello@graynest.co">hello@graynest.co</a>.
          </p>
        ) : null}
      </div>
    </form>
  )
}
