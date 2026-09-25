import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Headline } from "@/components/Headline"
import { MediaSlot } from "@/components/MediaSlot"
import { CoreGlow } from "@/components/CoreGlow"
import { Reveal } from "@/components/Reveal"
import { MagneticButton } from "@/components/MagneticButton"
import { AgentLauncher } from "@/components/AgentLauncher"
import { HexGrid } from "@/components/HexGrid"
import Link from "next/link"

const CHANNELS = ["Phone calls", "WhatsApp", "Instagram + Facebook", "Website chat"] as const

/**
 * AI Agents service page with improved section rhythm and scroll reveals.
 */
export default function AIAgentsPage() {
  return (
    <main id="main" className="bg-[var(--gn-ink-900)] page-stack">
      <Navigation />

      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        <HexGrid opacity={0.035} />
        <div className="grid-12 relative z-10 items-center">
          <div className="col-span-full lg:col-span-7 hero-copy">
            <p className="micro flex items-center gap-3">
              <CoreGlow size={12} /> AI AGENTS / 01
            </p>
            <Headline line1="YOUR PHONE" line2="JUST GOT a team." accent="a team." />
            <p className="body-lg">
              Voice and chat agents for retail, clinics, restaurants, and small companies in Palestine.
              They speak your language and never miss a call.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <MagneticButton type="button">
                Talk to our agent
                <span aria-hidden="true">→</span>
              </MagneticButton>
              <Link href="/contact" className="btn-glass">
                Book a demo
              </Link>
            </div>
          </div>
          <Reveal className="col-span-full lg:col-span-5 mt-14 lg:mt-0" delay={0.12}>
            <MediaSlot
              id="agents.hero"
              type="image"
              aspect="4:5"
              register="system"
              alt="GrayNest agent persona placeholder"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden border-t border-[var(--gn-line)]">
        <div className="grid-12">
          <Reveal className="col-span-full lg:col-span-5">
            <p className="micro mb-6">THE SYSTEM / 02</p>
            <h2 className="h2">
              ALWAYS ON.
              <br />
              <span className="accent-word">Always human.</span>
            </h2>
          </Reveal>
          <div className="col-span-full lg:col-span-7 grid sm:grid-cols-2 gap-4 mt-12 lg:mt-0">
            {CHANNELS.map((item, index) => (
              <Reveal key={item} delay={index * 0.08}>
                <div className="feature-card h-full">
                  <CoreGlow size={18} />
                  <h3 className="h3 mt-8">{item}</h3>
                  <p className="body mt-3">
                    A consistent answer, on the channel your customers already use.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-[var(--gn-ink-950)]">
        <HexGrid opacity={0.03} />
        <div className="grid-12 items-center relative z-10">
          <Reveal className="col-span-full lg:col-span-6">
            <p className="micro mb-6">A CONVERSATION / 03</p>
            <h2 className="h2">
              THE FIRST
              <br />
              <span className="accent-word">hello.</span>
            </h2>
            <p className="body-lg mt-8">
              Palestinian Arabic or English. Formal or familiar. Your agent carries the tone of your
              business into every conversation.
            </p>
          </Reveal>
          <Reveal className="col-span-full lg:col-span-6 mt-12 lg:mt-0" delay={0.1}>
            <div className="feature-card space-y-5">
              <div className="flex justify-between micro">
                <span>LIVE DEMO</span>
                <span>AR / EN</span>
              </div>
              <div dir="rtl" lang="ar" className="rounded-xl bg-[var(--gn-ink-600)] p-5 text-lg">
                أهلين! كيف فيني أساعدك اليوم؟
              </div>
              <div className="ml-12 rounded-xl bg-[var(--gn-red)] p-5 text-white">
                I&apos;d like to book a table for tonight.
              </div>
              <div className="micro flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--gn-red)]" />
                typing...
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        <div className="grid-12">
          <Reveal className="col-span-full text-center">
            <h2 className="h2">
              HEAR IT
              <br />
              <span className="accent-word">yourself.</span>
            </h2>
            <p className="body-lg mx-auto mt-8">
              The same agent that answers this site can answer yours.
            </p>
            <MagneticButton href="/contact" className="mt-10">
              Book a demo
              <span aria-hidden="true">→</span>
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      <Footer />
      <AgentLauncher />
    </main>
  )
}

export const metadata = {
  title: "AI Agents – GrayNest",
  description: "Voice and chat AI agents for businesses in Palestine.",
}
