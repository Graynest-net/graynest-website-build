import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Headline } from "@/components/Headline"
import { MediaSlot } from "@/components/MediaSlot"
import { CoreGlow } from "@/components/CoreGlow"
import { Reveal } from "@/components/Reveal"
import { MagneticButton } from "@/components/MagneticButton"
import { TalkToAgentButton } from "@/components/agent/TalkToAgentButton"
import { OfficeScrollFilm } from "@/components/OfficeScrollFilm"
import { SceneCard } from "@/components/SceneCard"

import Link from "next/link"

const CHANNELS = ["Phone calls", "WhatsApp", "Instagram + Facebook", "Website chat"] as const

const USE_CASES = [
  {
    mediaId: "agents.uc.retail.scene",
    eyebrow: "01 · RETAIL",
    title: "Retail stores",
    body: "Answers stock and price questions after closing, and reserves the item for the morning.",
    alt: "A shop assistant in a Palestinian appliance store handing a reserved box to a smiling customer",
  },
  {
    mediaId: "agents.uc.clinic.scene",
    eyebrow: "02 · CLINICS & SALONS",
    title: "Clinics and salons",
    body: "Books, moves, and confirms appointments so the day starts already full.",
    alt: "An empty clinic reception desk early in the morning with a tablet showing a full day of bookings",
  },
  {
    mediaId: "agents.uc.bakery.scene",
    eyebrow: "03 · FOOD",
    title: "Restaurants, cafés, bakeries",
    body: "Takes orders and table bookings while your hands are busy.",
    alt: "A baker shaping dough at dawn while a phone on the shelf beside him lights up with incoming orders",
  },
  {
    mediaId: "agents.uc.support.scene",
    eyebrow: "04 · SUPPORT",
    title: "Customer support and after-sales",
    body: "Tracks orders, handles returns, and answers the same question for the hundredth time, politely.",
    alt: "A courier loading parcels into a van at dusk while checking his phone for the next delivery",
  },
  {
    mediaId: "agents.uc.leads.scene",
    eyebrow: "05 · SALES",
    title: "Lead follow-up",
    body: "Qualifies new enquiries and books the visit before they go cold.",
    alt: "A salesperson in a car showroom at night greeting a couple who arrive for a booked visit",
  },
]

/**
 * AI Agents service page with improved section rhythm and scroll reveals.
 */
export default function AIAgentsPage() {
  return (
    <main id="main" className="has-dark-hero page-stack">
      <Navigation />

      <section className="hero-section hero-plate" data-theme="dark">
        <MediaSlot
          id="agents.hero.bg"
          type="image"
          aspect="16:9"
          register="world"
          alt="Inside a closed shop at night, a phone on the counter lighting up while the wet street glows through the shutter"
          className="hero-plate-media"
          priority
        />

        <div className="grid-12 items-center">
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
              <TalkToAgentButton />
              <Link href="/contact" className="btn-glass">
                Book a demo
              </Link>
            </div>
          </div>
          <Reveal className="col-span-full lg:col-span-5 mt-14 lg:mt-0" delay={0.12}>
            <MediaSlot
              id="agents.meet.persona"
              type="image"
              aspect="1:1"
              register="system"
              alt="The GrayNest agent persona with one hand raised mid-sentence, hexagonal sound rings rippling from its glowing chest core"
              className="scene-frame"
              priority
            />
          </Reveal>
        </div>
      </section>

      <OfficeScrollFilm />

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
          <Reveal className="col-span-full lg:col-span-5">
            <p className="micro mb-6">THE SYSTEM / 03</p>
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

      <section className="section-padding relative overflow-hidden">
        <div className="grid-12 items-center">
          <Reveal className="col-span-full md:col-span-6 lg:col-span-5">
            <MediaSlot
              id="agents.handoff.scene"
              type="image"
              aspect="4:5"
              register="world"
              alt="A shop owner opening his store in the morning, reading the overnight summary on his phone with a half-smile"
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
            <div className="feature-card space-y-5">
              <div className="flex justify-between micro">
                <span>LIVE DEMO</span>
                <span>AR / EN</span>
              </div>
              <div dir="rtl" lang="ar" className="rounded-2xl glass p-5 text-lg">
                أهلين! كيف فيني أساعدك اليوم؟
              </div>
              <div className="ml-12 rounded-xl bg-[var(--gn-red)] p-5 text-[var(--gn-on-red)]">
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
                  Book a demo
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
