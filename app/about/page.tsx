import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CoreGlow } from "@/components/CoreGlow"
import { Reveal } from "@/components/Reveal"
import { TrackRecord } from "@/components/TrackRecord"
import { TeamCards } from "@/components/TeamCards"
import { MagneticButton } from "@/components/MagneticButton"

const PRINCIPLES = [
  {
    title: "Senior engineers who stay",
    text: "The people who plan your product are the people who build it, with no junior churn and no handoff at launch.",
  },
  {
    title: "Weeks, then ownership",
    text: "We ship a first real version in weeks, then decide what comes next from how it is actually used.",
  },
  {
    title: "Built in Palestine, on purpose",
    text: "A local team and a local economy are part of the offer. We build bilingual products in Arabic and English.",
  },
]

/**
 * About GrayNest: what we are, how we work, and the people behind it.
 */
export default function AboutPage() {
  return (
    <main id="main">
      <Navigation />
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        <div className="grid-12 relative z-10 w-full">
          <Reveal className="col-span-full lg:col-span-10 space-y-8">
            <p className="micro flex items-center gap-3">
              <CoreGlow size={12} /> ABOUT GRAYNEST
            </p>
            <h1 className="display-line">
              A SOFTWARE HOUSE
              <br />
              <span className="accent-word">that stays.</span>
            </h1>
            <p className="body-lg">
              GrayNest is a software house in Palestine. Senior engineers build web and mobile
              products, backends and internal tools for startups and businesses, with AI added only
              where it pays off.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="How we work" className="section-padding border-t border-[var(--gn-line)]">
        <div className="grid-12">
          <ul className="col-span-full grid grid-cols-1 gap-[clamp(16px,2vw,32px)] md:grid-cols-3">
            {PRINCIPLES.map((item, i) => (
              <li key={item.title} className="feature-card p-[clamp(24px,3vw,36px)]">
                <Reveal delay={i * 0.08} className="flex flex-col gap-4">
                  <span className="micro">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="h3">{item.title}</h2>
                  <p className="body">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TrackRecord />

      <section
        id="team"
        aria-labelledby="team-title"
        className="section-padding border-t border-[var(--gn-line)] scroll-mt-24"
      >
        <div className="grid-12">
          <Reveal className="col-span-full mb-[clamp(32px,5vw,56px)] space-y-4">
            <p className="micro flex items-center gap-3">
              <CoreGlow size={12} /> THE PEOPLE
            </p>
            <h2 id="team-title" className="h2">
              WHO STANDS
              <br />
              <span className="accent-word">behind it.</span>
            </h2>
          </Reveal>
          <TeamCards />
        </div>
      </section>

      <section className="section-padding border-t border-[var(--gn-line)]">
        <div className="grid-12">
          <Reveal className="col-span-full lg:col-span-8 space-y-6">
            <h2 className="h2">
              TALK TO THE
              <br />
              <span className="accent-word">people who build it.</span>
            </h2>
            <p className="body">Tell us what you are building and we reply within one business day.</p>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact" event="cta_project">
                Start a project
              </MagneticButton>
              <Link href="/software-engineering" className="btn-glass" data-event="cta_services">
                What we build
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export const metadata = {
  title: "About GrayNest – A Software House in Palestine",
  description:
    "GrayNest is a senior software team in Palestine. Meet Jihad Badran, Firas Nassar and Ahmad Alkhatib, and see how we work.",
  alternates: { canonical: "/about" },
}
