import { Reveal } from "@/components/Reveal"
import { CoreGlow } from "@/components/CoreGlow"
import { MediaSlot } from "@/components/MediaSlot"

const EXAMPLE = {
  name: "NutriFit",
  kind: "WEB APP · MOBILE APP · WHATSAPP AGENT",
  body: "A nutrition product built end to end: a web app where nutritionists run consultations, a mobile app where their clients follow the plan in Arabic or English, AI and MCP built into both, and a reception agent answering on WhatsApp.",
  tags: ["Web app", "Mobile app", "AI built in", "MCP", "WhatsApp reception agent"],
} as const

const SHOTS = [
  {
    mediaId: "work.nutrifit.web",
    label: "WEB APP · FOR NUTRITIONISTS",
    caption: "Consultations, AI copilot notes and health context in one record.",
    alt: "The NutriFit platform on a tablet, open on a completed consultation with AI copilot notes and the patient's health context",
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
        <Reveal className="col-span-full lg:col-span-5 lg:self-start">
          <p className="micro mb-6 flex items-center gap-3">
            <CoreGlow size={12} /> SHIPPED
          </p>
          <h2 className="h2">
            AN EXAMPLE
            <br />
            <span className="accent-word">of what we ship.</span>
          </h2>
          <p className="body-lg mt-8 max-w-[48ch]">
            One product, end to end. It shows the range, not the limit: we build what your product needs.
          </p>
        </Reveal>

        <Reveal className="col-span-full lg:col-span-7 mt-10 lg:mt-0" delay={0.1}>
          <article className="feature-card proof-card">
            <p className="micro mb-4">{EXAMPLE.kind}</p>
            <h3 className="h3 mb-3">{EXAMPLE.name}</h3>
            <p className="body text-[var(--gn-text-secondary)] mb-6 max-w-[52ch]">{EXAMPLE.body}</p>
            <div className="service-row-caps">
              {EXAMPLE.tags.map((tag) => (
                <span key={tag} className="service-cap">{tag}</span>
              ))}
            </div>
          </article>
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
