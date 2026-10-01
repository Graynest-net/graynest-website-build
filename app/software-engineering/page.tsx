import { ProofStrip } from "@/components/ProofStrip"
import { TrackRecord } from "@/components/TrackRecord"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CoreGlow } from "@/components/CoreGlow"
import { Reveal } from "@/components/Reveal"
import { AnimatedSpine } from "@/components/AnimatedSpine"
import { MagneticButton } from "@/components/MagneticButton"
import { MediaSlot } from "@/components/MediaSlot"
import { Icon } from "@/components/Icon"
import Link from "next/link"

const CAPABILITIES = [
  {
    eyebrow: "01 · WEB",
    title: "Web products",
    body: "Customer-facing apps and dashboards, built to hold up once real traffic arrives.",
    tags: ["Next.js", "React", "Node", "PostgreSQL"],
  },
  {
    eyebrow: "02 · MOBILE",
    title: "Mobile apps",
    body: "iOS and Android, taken through review to the stores and maintained after launch.",
    tags: ["React Native", "Swift", "Kotlin", "App Store"],
  },
  {
    eyebrow: "03 · BACKEND",
    title: "Backend systems",
    body: "APIs, integrations, and the data layer underneath everything your users touch.",
    tags: ["REST & GraphQL", "Microservices", "Cloud", "CI/CD"],
  },
  {
    eyebrow: "04 · INTERNAL",
    title: "Internal tools",
    body: "The admin panels and workflows your own team lives in, made faster to work with.",
    tags: ["Dashboards", "Automation", "Data pipelines", "Admin"],
  },
] as const

const PROCESS = [
  {
    title: "Discovery",
    body: "We learn the problem, the users, and the constraints before writing a line. The output is a plan you can hold us to.",
  },
  {
    title: "Architecture",
    body: "System design, data model, and infrastructure decisions — documented and reviewed before build begins.",
  },
  {
    title: "Build",
    body: "Iterative sprints with working software at every milestone. You see progress, not slide decks.",
  },
  {
    title: "Ship",
    body: "Deployment, monitoring, and the launch checklist. We stay through the first wave of real usage.",
  },
  {
    title: "Maintain",
    body: "Bug fixes, performance tuning, and the next round of features. The relationship does not end at launch.",
  },
] as const

const USE_CASES = [
  {
    mediaId: "software.uc.mvp.scene",
    eyebrow: "STARTUPS",
    title: "MVP in weeks",
    body: "From idea to a working product people can use. We scope tight, build fast, and iterate from real feedback instead of research decks.",
    alt: "Two startup founders late at night, one showing a working app on a phone while the other reacts",
  },
  {
    mediaId: "software.uc.ai.scene",
    eyebrow: "AI INTEGRATION",
    title: "AI inside your product",
    body: "Search, answers, and automation built into the app your team already uses. No AI for its own sake — only where it removes friction.",
    alt: "A product manager in a bright office typing a question into her company's app and getting an instant answer",
  },
  {
    mediaId: "software.uc.legacy.scene",
    eyebrow: "MODERNIZATION",
    title: "Legacy systems, replaced",
    body: "Move off the old system without stopping the business that depends on it. We run both in parallel until the new one earns the traffic.",
    alt: "An IT lead in a server room standing between an old beige server and a new rack, a laptop open on a cart",
  },
]

export default function SoftwareEngineeringPage() {
  return (
    <main id="main" className="page-stack">
      <Navigation />

      {/* ── Hero ── */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />

        <div className="grid-12 relative z-10">
          <div className="col-span-full lg:col-span-8 hero-copy">
            <p className="micro flex items-center gap-3">
              <CoreGlow size={12} /> SOFTWARE / 02
            </p>
            <h1>
              <span className="display-line">GOOD SOFTWARE</span>
              <span className="display-line">
                SHIPS <span className="accent-word">with intent.</span>
              </span>
            </h1>
            <p className="body-lg mt-8 max-w-[54ch]">
              Product engineering for founders, startups, and teams who need the right thing built.
              Web, mobile, backend, and AI where it pays off.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
              <MagneticButton href="/contact" event="cta_project">
                Start a project <Icon name="arrow-right" />
              </MagneticButton>
              <Link href="/contact" className="btn-glass" data-event="cta_contact">
                <Icon name="message" /> Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrackRecord />

      {/* ── What we build ── */}
      <section className="section-padding relative overflow-hidden border-t border-[var(--gn-line)]">
        <div className="grid-12">
          <Reveal className="col-span-full lg:col-span-5 lg:self-start">
            <p className="micro mb-6 flex items-center gap-3">
              <CoreGlow size={12} /> WHAT WE BUILD
            </p>
            <h2 className="h2">
              FROM FIRST
              <br />
              <span className="accent-word">commit.</span>
            </h2>
            <p className="body-lg mt-8 max-w-[48ch]">
              Senior engineers who own the plan from architecture through production and whatever comes after.
            </p>
          </Reveal>

          <div className="col-span-full lg:col-span-7 mt-14 lg:mt-0 space-y-0">
            {CAPABILITIES.map((cap, index) => (
              <Reveal key={cap.eyebrow} delay={index * 0.1}>
                <article className={`service-row ${index > 0 ? "border-t border-[var(--gn-line)]" : ""}`}>
                  <p className="micro mb-4">{cap.eyebrow}</p>
                  <h3 className="h3 mb-3">{cap.title}</h3>
                  <p className="body text-[var(--gn-text-secondary)] mb-6 max-w-[52ch]">
                    {cap.body}
                  </p>
                  <div className="service-row-caps">
                    {cap.tags.map((tag) => (
                      <span key={tag} className="service-cap">{tag}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="section-padding relative overflow-hidden section-tint">
        <div className="grid-12">
          <Reveal className="col-span-full lg:col-span-5 lg:self-start">
            <p className="micro mb-6">HOW WE WORK / 01</p>
            <h2 className="h2">
              FIVE PHASES.
              <br />
              <span className="accent-word">One team.</span>
            </h2>
            <p className="body-lg mt-8 max-w-[48ch]">
              Discovery, design, engineering, and launch in one accountable team. No handoff between phases — the people who plan it are the people who ship it.
            </p>
          </Reveal>

          <div className="col-span-full lg:col-span-7 mt-14 lg:mt-0">
            <AnimatedSpine
              steps={PROCESS.map((step, index) => ({
                title: step.title,
                body: step.body,
                index: index + 1,
              }))}
            />
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="grid-12">
          <Reveal className="col-span-full mb-10 md:mb-14">
            <p className="micro mb-6">USE CASES / 02</p>
            <h2 className="h2">
              WHAT WE
              <br />
              <span className="accent-word">get called for.</span>
            </h2>
          </Reveal>

          {USE_CASES.map((uc, index) => (
            <Reveal
              key={uc.mediaId}
              className="col-span-full md:col-span-6 lg:col-span-4"
              delay={index * 0.1}
            >
              <article className="feature-card h-full p-0 overflow-hidden">
                <MediaSlot
                  id={uc.mediaId}
                  type="image"
                  aspect="4:5"
                  register="world"
                  alt={uc.alt}
                  className="w-full"
                />
                <div className="p-6">
                  <p className="micro mb-3">{uc.eyebrow}</p>
                  <h3 className="h3 mb-2">{uc.title}</h3>
                  <p className="body text-[var(--gn-text-secondary)]">{uc.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ProofStrip />

      {/* ── CTA ── */}
      <section className="section-padding relative">
        <div className="grid-12">
          <Reveal className="col-span-full">
            <div className="cta-stage" data-theme="dark">
              <MediaSlot
                id="software.cta.launch"
                type="image"
                aspect="16:9"
                register="system"
                alt="The GrayNest persona pressing a glowing red launch button on a dark console"
                className="cta-stage-media"
              />
              <div className="cta-stage-copy">
                <h2 className="h2">
                  READY TO
                  <br />
                  <span className="accent-word">ship?</span>
                </h2>
                <p className="body-lg">
                  Tell us what needs to exist next. We&apos;ll tell you what it takes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <MagneticButton href="/contact" event="cta_project">
                    Start a project <Icon name="arrow-right" />
                  </MagneticButton>
                  <Link href="/contact" className="btn-glass" data-event="cta_contact">
                    <Icon name="message" /> Talk to us
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

export const metadata = {
  title: "Custom Software & MVP Development – GrayNest",
  description:
    "Web apps, iOS and Android apps, backend systems and internal tools, built by senior engineers from discovery to launch. MVPs in weeks.",
  alternates: { canonical: "/software-engineering" },
}
