import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CoreGlow } from "@/components/CoreGlow"
import { Reveal } from "@/components/Reveal"
import { TrackRecord } from "@/components/TrackRecord"
import { MagneticButton } from "@/components/MagneticButton"
import { TEAM } from "@/content/team"

/**
 * Who stands behind GrayNest: the people, by name.
 */
export default function TeamPage() {
  return (
    <main id="main">
      <Navigation />
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        <div className="grid-12 relative z-10 w-full">
          <Reveal className="col-span-full lg:col-span-10 space-y-8">
            <p className="micro flex items-center gap-3">
              <CoreGlow size={12} /> THE TEAM
            </p>
            <h1 className="display-line">
              THREE PEOPLE.
              <br />
              <span className="accent-word">One standard.</span>
            </h1>
            <p className="body-lg">
              GrayNest is a small senior team in Palestine. The people below are the ones who
              scope your product, build it, and stay after it ships.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-label="People" className="section-padding border-t border-[var(--gn-line)]">
        <div className="grid-12">
          <ul className="col-span-full grid grid-cols-1 gap-[clamp(16px,2vw,32px)] md:grid-cols-3">
            {TEAM.map((person, i) => (
              <li key={person.name} className="feature-card p-[clamp(24px,3vw,36px)]">
                <Reveal delay={i * 0.08} className="flex h-full flex-col gap-6">
                  <span className="micro">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="h3">{person.name}</h2>
                  {person.role && <p className="micro">{person.role}</p>}
                  {person.bio && <p className="body">{person.bio}</p>}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TrackRecord />

      <section className="section-padding border-t border-[var(--gn-line)]">
        <div className="grid-12">
          <Reveal className="col-span-full lg:col-span-8 space-y-6">
            <h2 className="h2">
              TALK TO THE
              <br />
              <span className="accent-word">people who build it.</span>
            </h2>
            <p className="body">
              Tell us what you are building and we reply within one business day.
            </p>
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
  title: "The Team – GrayNest",
  description:
    "The people behind GrayNest: Jihad Badran, Firas Nassar and Ahmad Alkhatib, a senior software team in Palestine.",
  alternates: { canonical: "/team" },
}
