import { Reveal } from "@/components/Reveal"
import { CoreGlow } from "@/components/CoreGlow"

const EXAMPLE = {
  name: "NutriFit",
  kind: "WEB APP · MOBILE APP · WHATSAPP AGENT",
  body: "A nutrition product built end to end: a web app and a mobile app, with AI and MCP built into both, and a reception agent answering on WhatsApp.",
  tags: ["Web app", "Mobile app", "AI built in", "MCP", "WhatsApp reception agent"],
} as const

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
      </div>
    </section>
  )
}
