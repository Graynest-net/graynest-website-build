import { Reveal } from "@/components/Reveal"
import { CoreGlow } from "@/components/CoreGlow"
import { MediaSlot } from "@/components/MediaSlot"

const BODY =
  "A nutrition product built end to end: a web app where nutritionists run consultations, a mobile app where their clients follow the plan in Arabic or English, AI and MCP built into both, and a reception agent answering on WhatsApp."

const SHOTS = [
  {
    mediaId: "work.nutrifit.web",
    label: "WEB APP · FOR NUTRITIONISTS",
    caption: "Consultations, AI copilot notes and health context in one record.",
    alt: "Two tablets showing the NutriFit platform for nutritionists: a consultation with AI copilot notes, and the body composition, health context and clinical notes of the same visit",
  },
  {
    mediaId: "work.nutrifit.mobile",
    label: "MOBILE APP · FOR CLIENTS",
    caption: "The day's plan, meals and journal, in Arabic and English.",
    alt: "Two phones showing the NutriFit mobile app home screen, one in Arabic and one in English, with the day's meal plan marked done",
  },
] as const

/**
 * Shipped-work proof. Framed as an example of range, not a menu of what we sell.
 */
export function ProofStrip() {
  return (
    <section id="work" className="section-padding relative overflow-hidden border-t border-[var(--gn-line)]">
      <div className="grid-12">
        <Reveal className="col-span-full">
          <p className="micro mb-6 flex items-center gap-3">
            <CoreGlow size={12} /> SHIPPED
          </p>
          <h2 className="h2">
            NUTRIFIT,
            <br />
            <span className="accent-word">built end to end.</span>
          </h2>
          <p className="body-lg mt-8 max-w-[60ch]">{BODY}</p>
        </Reveal>

        {SHOTS.map((shot, index) => (
          <Reveal
            key={shot.mediaId}
            className="col-span-full md:col-span-6 mt-8 md:mt-10"
            delay={index * 0.1}
          >
            <figure className="proof-shot">
              <MediaSlot id={shot.mediaId} type="image" aspect="4:3" register="system" alt={shot.alt} />
              <figcaption className="proof-shot-caption">
                <span className="micro">{shot.label}</span>
                <span className="body">{shot.caption}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
