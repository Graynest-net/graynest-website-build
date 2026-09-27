import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { MediaSlot } from "@/components/MediaSlot"
import { CoreGlow } from "@/components/CoreGlow"
import { AgentProofPanel } from "@/components/agent/AgentProofPanel"
import { Reveal } from "@/components/Reveal"
import { AnimatedSpine } from "@/components/AnimatedSpine"
import { MagneticButton } from "@/components/MagneticButton"
import { SceneCard } from "@/components/SceneCard"

import { Icon } from "@/components/Icon"
import Link from "next/link"

const CHANNELS = [
  {
    title: "Phone calls",
    body: "Picks up on the first ring. Every ring, including the ones that arrive at the same moment.",
  },
  {
    title: "WhatsApp",
    body: "Replies in the thread your customers already use, and keeps the history in one place.",
  },
  {
    title: "Instagram + Facebook",
    body: "Works comments and DMs, and moves the serious ones into a real conversation.",
  },
  {
    title: "Website chat",
    body: "Greets visitors, answers what your product actually does, and qualifies before they leave.",
  },
] as const

/** Where the four inbound channels end up. This is the point of the section. */
const SYSTEM_OUTCOMES = [
  {
    title: "One agent, one history",
    body: "Every channel lands in the same conversation, so nobody has to repeat themselves to you.",
    variant: "merge",
  },
  {
    title: "Then a person",
    body: "Anything it should not answer goes to your team, with the whole thread attached.",
    variant: "handoff",
  },
] as const

const USE_CASES = [
  {
    mediaId: "agents.uc.retail.scene",
    eyebrow: "01 · E-COMMERCE",
    title: "E-commerce and retail",
    body: "Answers pre-sale questions, tracks orders, and handles returns around the clock — no queue, no wait.",
    alt: "A warehouse operations screen glowing at night with incoming order notifications stacking up",
  },
  {
    mediaId: "agents.uc.clinic.scene",
    eyebrow: "02 · HEALTHCARE",
    title: "Clinics and practices",
    body: "Books, reschedules, and confirms appointments so the front desk starts full, not catching up.",
    alt: "A medical practice reception at dawn with a screen showing the day's bookings already confirmed",
  },
  {
    mediaId: "agents.uc.bakery.scene",
    eyebrow: "03 · HOSPITALITY",
    title: "Hotels, restaurants, venues",
    body: "Takes reservations, answers availability, and handles group inquiries across locations.",
    alt: "A restaurant host station after hours with a tablet lighting up with reservation confirmations",
  },
  {
    mediaId: "agents.uc.support.scene",
    eyebrow: "04 · SUPPORT",
    title: "Customer support",
    body: "Resolves the repeatable questions instantly, and routes the rest to your team with full context.",
    alt: "A support dashboard at night showing resolved tickets climbing while the team is offline",
  },
  {
    mediaId: "agents.uc.leads.scene",
    eyebrow: "05 · SALES",
    title: "Inbound sales",
    body: "Qualifies leads, books meetings, and follows up — before the inquiry goes cold.",
    alt: "A CRM screen showing a new lead converted to a booked meeting within minutes of first contact",
  },
]

/**
 * AI Agents service page with improved section rhythm and scroll reveals.
 */
export default function AIAgentsPage() {
  return (
    <main id="main" className="page-stack">
      <Navigation />

      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />

        <div className="grid-12 items-center relative z-10">
          <div className="col-span-full lg:col-span-7 hero-copy">
            <p className="micro flex items-center gap-3">
              <CoreGlow size={12} /> AI AGENTS / 01
            </p>
            <h1>
              <span className="display-line">EVERY CALL.</span>
              <span className="display-line">
                EVEN <span className="accent-word">at 2 a.m.</span>
              </span>
            </h1>
            <p className="body-lg mt-8 max-w-[54ch]">
              Voice and chat agents that answer every call, message, and chat in Palestinian
              Arabic or English. They carry the volume your team shouldn&apos;t have to, and
              hand over the moment a person is needed.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
              <MagneticButton href="/contact">
                <Icon name="calendar" /> Book a demo
              </MagneticButton>
              <Link href="/contact" className="btn-glass">
                <Icon name="message" /> Talk to our agent
              </Link>
            </div>
          </div>
          <div className="col-span-full lg:col-span-5 mt-14 lg:mt-0 hero-panel">
            <AgentProofPanel />
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="grid-12">
          <Reveal className="col-span-full mb-10 md:mb-14">
            <p className="micro mb-6">WHO IT&apos;S FOR / 02</p>
            <h2 className="h2">
              BUSINESSES THAT
              <br />
              <span className="accent-word">can&apos;t miss a call.</span>
            </h2>
          </Reveal>
          {USE_CASES.map((useCase, index) => (
            <Reveal
              key={useCase.mediaId}
              className={index === 0 ? "col-span-full" : "col-span-full md:col-span-6"}
              delay={index === 0 ? 0 : ((index - 1) % 2) * 0.1}
            >
              <SceneCard {...useCase} aspect={index === 0 ? "2:1" : "3:2"} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding relative overflow-hidden border-t border-[var(--gn-line)]">
        <div className="grid-12">
          <Reveal className="col-span-full lg:col-span-5 lg:self-center">
            <p className="micro mb-6">THE SYSTEM / 03</p>
            <h2 className="h2">
              ALWAYS ON.
              <br />
              <span className="accent-word">Always a person behind it.</span>
            </h2>
            <p className="body-lg mt-8">The channels are separate. The conversation is not.</p>
          </Reveal>
          <div className="col-span-full lg:col-span-7 mt-14 lg:mt-0">
            <AnimatedSpine
              steps={[
                ...CHANNELS.map((c) => ({ title: c.title, body: c.body })),
                ...SYSTEM_OUTCOMES.map((o) => ({ title: o.title, body: o.body, variant: o.variant })),
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="grid-12 items-center">
          <Reveal className="col-span-full md:col-span-6 lg:col-span-5">
            <MediaSlot
              id="agents.handoff.scene"
              type="image"
              aspect="4:5"
              register="world"
              alt="Someone arriving at work in the morning, reading the overnight summary on their phone with a half-smile"
              className="scene-frame"
            />
          </Reveal>
          <Reveal className="col-span-full md:col-span-6 lg:col-span-6 lg:col-start-7 mt-12 md:mt-0" delay={0.1}>
            <p className="micro mb-6">HANDOFF / 04</p>
            <h2 className="h2">
              YOU STAY
              <br />
              <span className="accent-word">in control.</span>
            </h2>
            <p className="body-lg mt-6">
              Every conversation lands as a short summary on your phone. Anything the agent
              can&apos;t settle goes straight to your team, with the full context attached.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden section-tint">

        <div className="grid-12 items-center relative z-10">
          <Reveal className="col-span-full lg:col-span-6">
            <p className="micro mb-6">A CONVERSATION / 05</p>
            <h2 className="h2">
              THE FIRST
              <br />
              <span className="accent-word">hello.</span>
            </h2>
            <p className="body-lg mt-6">
              Palestinian Arabic or English. Formal or familiar. Your agent carries the tone of your
              business into every conversation.
            </p>
          </Reveal>
          <Reveal className="col-span-full lg:col-span-6 mt-12 lg:mt-0" delay={0.1}>
            <div className="feature-card space-y-5 p-6 md:p-[clamp(24px,3vw,36px)]">
              <div className="flex justify-between micro">
                <span>SAMPLE CONVERSATION</span>
                <span>AR / EN</span>
              </div>
              <div dir="rtl" lang="ar" className="rounded-2xl glass p-5 text-lg">
                أهلين! كيف فيني أساعدك اليوم؟
              </div>
              <div className="ml-12 rounded-xl bg-[var(--gn-red)] p-5 text-[var(--gn-on-red)]">
                I&apos;d like to book a table for tonight.
              </div>
              <p className="micro">
                Ask GrayNest to hear the real thing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="grid-12">
          <Reveal className="col-span-full">
            <div className="cta-stage" data-theme="dark">
              <MediaSlot
                id="agents.cta.welcome"
                type="image"
                aspect="16:9"
                register="system"
                alt="The GrayNest persona holding a small glowing seed of red light between its open hands"
                className="cta-stage-media"
              />
              <div className="cta-stage-copy">
                <h2 className="h2">
                  HEAR IT
                  <br />
                  <span className="accent-word">yourself.</span>
                </h2>
                <p className="body-lg">
                  The same agent that answers this site can answer yours.
                </p>
                <MagneticButton href="/contact">
                  <Icon name="calendar" /> Book a demo
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export const metadata = {
  title: "AI Agents – GrayNest",
  description: "Voice and chat AI agents for businesses in Palestine.",
}
