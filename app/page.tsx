import { MethodSections } from "@/components/MethodSections"
import { ProofStrip } from "@/components/ProofStrip"
import { ProcessFilm } from "@/components/ProcessFilm"
import { TrackRecord } from "@/components/TrackRecord"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Reveal"
import { MagneticButton } from "@/components/MagneticButton"
import { MediaSlot } from "@/components/MediaSlot"
import { CoreGlow } from "@/components/CoreGlow"
import { Icon } from "@/components/Icon"
import { HeroFilm } from "@/components/HeroFilm"
import { Outfit } from "next/font/google"
import { ServiceRowMotion, ServiceMark } from "@/components/ServiceIcons"

// Hairline counter-voice for the hero's closing line.
const outfit = Outfit({ subsets: ["latin"], weight: ["200"], display: "swap", variable: "--font-thin" })

const SERVICES = [
  {
    eyebrow: "01 · WEB & MOBILE",
    title: "Products people use every day",
    body: "Web apps and iOS and Android apps, designed and built by the same senior team, from the first screen to the store listing.",
    icon: "layout-dashboard",
  },
  {
    eyebrow: "02 · BACKEND & APIS",
    title: "The systems underneath",
    body: "APIs, data models, integrations and payments, built to keep working as usage grows.",
    icon: "terminal",
  },
  {
    eyebrow: "03 · INTERNAL TOOLS",
    title: "Tools your team actually uses",
    body: "Dashboards, back offices and workflows that replace the spreadsheet everyone is afraid to touch.",
    icon: "kanban",
  },
  {
    eyebrow: "04 · AI INTEGRATION",
    title: "AI where it earns its place",
    body: "Search, assistants and automation inside your product, only where it saves real time or money.",
    icon: "workflow",
  },
] as const

const PRINCIPLES = [
  {
    mediaId: "home.principle.puzzle",
    eyebrow: "01 · INTEGRATION",
    title: "Built in, not bolted on.",
    body: "What we build connects to your real systems and fits how your team already works, not wedged on top of it.",
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
            <h1 className={`hero-title ${outfit.variable}`}>
              <span className="display-line">
                <span className="hero-normal">We Build</span>
              </span>
              <span className="display-line">
                <span className="hero-soft">Software</span>{" "}
                <span className="accent-word hero-thin">fast and of value.</span>
              </span>
            </h1>
            <p className="body-lg mt-8 max-w-[54ch]">
              Web and mobile products, backends and internal tools, built by senior engineers
              who ship fast and stay until it works.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
              <MagneticButton href="/contact" event="cta_project">
                Start a project <Icon name="arrow-right" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <TrackRecord />

      {/* ── Services ── */}
      <section className="section-padding relative overflow-hidden border-t border-[var(--gn-line)]">
        <div className="grid-12">
          <Reveal className="col-span-full lg:col-span-5 lg:self-start">
            <p className="micro mb-6 flex items-center gap-3">
              <CoreGlow size={12} /> WHAT WE BUILD
            </p>
            <h2 className="h2">
              FOUR THINGS
              <br />
              <span className="accent-word">we build well.</span>
            </h2>
            <p className="body-lg mt-8 max-w-[48ch]">
              Most companies don&apos;t need more software. They need the right software, shipped,
              and AI only where it earns its keep.
            </p>
          </Reveal>

          <div className="col-span-full lg:col-span-7 mt-10 lg:mt-0 space-y-0">
            {SERVICES.map((service, index) => (
              <Reveal key={service.eyebrow} delay={index * 0.08}>
                <ServiceRowMotion className={`service-row ${index > 0 ? "border-t border-[var(--gn-line)]" : ""}`}>
                  <div className="mb-4">
                    <p className="micro mb-2">{service.eyebrow}</p>
                    <div className="service-row-head">
                      <ServiceMark name={service.icon} />
                      <h3 className="h3">{service.title}</h3>
                    </div>
                  </div>
                  <p className="body text-[var(--gn-text-secondary)] max-w-[52ch]">{service.body}</p>
                </ServiceRowMotion>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessFilm />
      <MethodSections />
      <ProofStrip />

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
                  <MagneticButton href="/contact" event="cta_project">
                    Start a project <Icon name="arrow-right" />
                  </MagneticButton>
                  <a href="mailto:hello@graynest.co" className="btn-glass">
                    <Icon name="mail" /> hello@graynest.co
                  </a>
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
