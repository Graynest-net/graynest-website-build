import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Reveal"
import { MagneticButton } from "@/components/MagneticButton"
import { MediaSlot } from "@/components/MediaSlot"
import { CoreGlow } from "@/components/CoreGlow"
import { Icon } from "@/components/Icon"
import { HeroFilm } from "@/components/HeroFilm"
import Link from "next/link"

const SERVICES = [
  {
    eyebrow: "01 · AI AGENTS",
    title: "Agents that answer for you",
    body: "Voice and chat across every channel — phone, WhatsApp, Instagram, website. They qualify, book, sell, and hand off the moment a person is needed.",
    capabilities: ["Phone calls", "WhatsApp", "Instagram & Facebook", "Website chat"],
    href: "/ai-agents",
    cta: "See how the agent works",
  },
  {
    eyebrow: "02 · SOFTWARE + AI",
    title: "Software built to ship",
    body: "Web, mobile, backend, and internal tools. AI where it earns its place. Senior engineers who own the plan from first commit through launch and whatever comes after.",
    capabilities: ["Web & mobile apps", "Backend & APIs", "Internal tools", "AI integration"],
    href: "/software-engineering",
    cta: "See what we build",
  },
] as const

const PRINCIPLES = [
  {
    mediaId: "home.principle.puzzle",
    eyebrow: "01 · INTEGRATION",
    title: "Built in, not bolted on.",
    body: "The agent connects to your real systems. The software is designed around how your team already works — not wedged on top of it.",
    alt: "Two interlocking off-white hexagon forms fitted together, their seam glowing red-orange",
  },
  {
    mediaId: "home.principle.hourglass",
    eyebrow: "02 · SPEED",
    title: "MVP in weeks.",
    body: "Something working in your hands early, so product decisions come from real usage, not slide decks.",
    alt: "A hexagon-panelled hourglass whose lower chamber fills with glowing red-orange hex tiles",
  },
  {
    mediaId: "home.principle.roadmap",
    eyebrow: "03 · OWNERSHIP",
    title: "We stay until it works.",
    body: "No handoff at launch. The plan is ours to carry, from architecture through production and whatever comes after.",
    alt: "A winding path of hexagon tiles leading into the dark towards one glowing tile",
  },
] as const

export default function Home() {
  return (
    <main id="main">
      <Navigation />

      {/* ── Hero ── */}
      <section className="hero-section hero-with-film relative overflow-hidden">
        <HeroFilm />

        <div className="grid-12 relative z-10">
          <div className="col-span-full lg:col-span-7 hero-copy">
            <p className="micro flex items-center gap-3">
              <CoreGlow size={12} /> SOFTWARE HOUSE · AI WHERE IT PAYS OFF
            </p>
            <h1>
              <span className="display-line">WE BUILD</span>
              <span className="display-line">
                SOFTWARE <span className="accent-word">that works.</span>
              </span>
            </h1>
            <p className="body-lg mt-8 max-w-[54ch]">
              Two things under one roof: AI agents that answer every call and message,
              and product engineering that ships fast and stays shipped.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
              <MagneticButton href="/contact">
                Start a project <Icon name="arrow-right" />
              </MagneticButton>
              <Link href="/contact" className="btn-glass" data-event="cta_demo">
                <Icon name="calendar" /> Book a demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-padding relative overflow-hidden border-t border-[var(--gn-line)]">
        <div className="grid-12">
          <Reveal className="col-span-full lg:col-span-5 lg:self-start">
            <p className="micro mb-6 flex items-center gap-3">
              <CoreGlow size={12} /> WHAT WE BUILD
            </p>
            <h2 className="h2">
              TWO KINDS
              <br />
              <span className="accent-word">of work.</span>
            </h2>
            <p className="body-lg mt-8 max-w-[48ch]">
              Most companies don&apos;t need more software. They need the right software, shipped,
              and AI only where it earns its keep.
            </p>
          </Reveal>

          <div className="col-span-full lg:col-span-7 mt-14 lg:mt-0 space-y-0">
            {SERVICES.map((service, index) => (
              <Reveal key={service.href} delay={index * 0.12}>
                <article className={`service-row ${index > 0 ? "border-t border-[var(--gn-line)]" : ""}`}>
                  <p className="micro mb-4">{service.eyebrow}</p>
                  <h3 className="h3 mb-3">{service.title}</h3>
                  <p className="body text-[var(--gn-text-secondary)] mb-6 max-w-[52ch]">
                    {service.body}
                  </p>
                  <div className="service-row-caps mb-6">
                    {service.capabilities.map((cap) => (
                      <span key={cap} className="service-cap">{cap}</span>
                    ))}
                  </div>
                  <Link href={service.href} className="btn-glass">
                    {service.cta} <Icon name="arrow-right" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="section-padding relative overflow-hidden section-tint">
        <div className="grid-12">
          <Reveal className="col-span-full mb-10 md:mb-14">
            <p className="micro mb-6">HOW WE WORK</p>
            <h2 className="h2">
              THREE RULES.
              <br />
              <span className="accent-word">No exceptions.</span>
            </h2>
          </Reveal>

          {PRINCIPLES.map((principle, index) => (
            <Reveal
              key={principle.mediaId}
              className="col-span-full md:col-span-4"
              delay={index * 0.1}
            >
              <article className="principle-card">
                <MediaSlot
                  id={principle.mediaId}
                  type="image"
                  aspect="1:1"
                  register="system"
                  alt={principle.alt}
                />
                <div className="principle-card-copy">
                  <p className="micro">{principle.eyebrow}</p>
                  <h3 className="h3">{principle.title}</h3>
                  <p className="body">{principle.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding relative">
        <div className="grid-12">
          <Reveal className="col-span-full">
            <div className="cta-stage" data-theme="dark">
              <MediaSlot
                id="home.cta.welcome"
                type="image"
                aspect="16:9"
                register="system"
                alt="The GrayNest persona with arms open and palms up, a small glowing seed of red light resting between its hands"
                className="cta-stage-media"
              />
              <div className="cta-stage-copy">
                <h2 className="h2">
                  START WITH
                  <br />
                  <span className="accent-word">a conversation.</span>
                </h2>
                <p className="body-lg">
                  Tell us what you need. We&apos;ll tell you what it takes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <MagneticButton href="/contact">
                    Start a project <Icon name="arrow-right" />
                  </MagneticButton>
                  <Link href="/contact" className="btn-glass" data-event="cta_demo">
                    <Icon name="calendar" /> Book a demo
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
