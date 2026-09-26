import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Headline } from "@/components/Headline"
import { CoreGlow } from "@/components/CoreGlow"
import { Reveal } from "@/components/Reveal"
import { MagneticButton } from "@/components/MagneticButton"
import { SceneCard } from "@/components/SceneCard"
import { MediaSlot } from "@/components/MediaSlot"

import Link from "next/link"

const CAPABILITIES = ["Web products", "Mobile apps", "Backend systems", "Internal tools"] as const

const USE_CASES = [
  {
    mediaId: "software.uc.mvp.scene",
    eyebrow: "01 · STARTUPS",
    title: "MVP for startups",
    body: "From idea to a working product people can use, in weeks rather than quarters.",
    alt: "Two startup founders late at night, one showing a working app on a phone while the other reacts",
  },
  {
    mediaId: "software.uc.ai.scene",
    eyebrow: "02 · AI",
    title: "AI inside your product",
    body: "Search, answers, and automation built into the app your team already uses.",
    alt: "A product manager in a bright office typing a question into her company's app and getting an instant answer",
  },
  {
    mediaId: "software.uc.legacy.scene",
    eyebrow: "03 · MODERNIZATION",
    title: "Legacy modernization",
    body: "Move off the old system without stopping the business that depends on it.",
    alt: "An IT lead in a server room standing between an old beige server and a new rack, a laptop open on a cart",
  },
]

/**
 * Software Engineering service page with cinematic spacing and scroll motion.
 */
export default function SoftwareEngineeringPage() {
  return (
    <main id="main" className="has-dark-hero page-stack">
      <Navigation />

      <section className="hero-section hero-plate" data-theme="dark">
        <MediaSlot
          id="software.hero.bg"
          type="image"
          aspect="16:9"
          register="world"
          alt="A software engineer alone in a glass-walled war room at night, lit by her monitor, rain on the glass"
          className="hero-plate-media"
          priority
        />

        <div className="grid-12">
          <div className="col-span-full lg:col-span-7 hero-copy">
            <p className="micro flex items-center gap-3">
              <CoreGlow size={12} /> SOFTWARE / 02
            </p>
            <Headline line1="GOOD SOFTWARE" line2="SHIPS with intent." accent="with intent." />
            <p className="body-lg">
              Product engineering for founders, startups, and teams who need the right thing built —
              web, mobile, backend, and AI where it pays off.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <MagneticButton href="/contact">
                Start a project
              </MagneticButton>
              <Link href="/contact" className="btn-glass">
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden border-t border-[var(--gn-line)]">
        <div className="grid-12 items-start">
          <Reveal className="col-span-full lg:col-span-5">
            <p className="micro mb-6">THE BUILD / 01</p>
            <h2 className="h2">
              FROM FIRST
              <br />
              <span className="accent-word">commit.</span>
            </h2>
          </Reveal>
          <div className="col-span-full lg:col-span-7 grid sm:grid-cols-2 gap-4 mt-12 lg:mt-0">
            {CAPABILITIES.map((item, index) => (
              <Reveal key={item} delay={index * 0.08}>
                <div className="feature-card h-full">
                  <CoreGlow size={18} />
                  <h3 className="h3 mt-8">{item}</h3>
                  <p className="body mt-3">
                    A focused build shaped around the people who will use it and the business it needs
                    to move.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
          {USE_CASES.map((useCase, index) => (
            <Reveal key={useCase.mediaId} className="col-span-full md:col-span-6 lg:col-span-4" delay={index * 0.1}>
              <SceneCard {...useCase} aspect="4:5" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding relative overflow-hidden section-tint">

        <div className="grid-12 items-center relative z-10">
          <Reveal className="col-span-full lg:col-span-7">
            <p className="micro mb-6">AI / WHERE IT PAYS</p>
            <h2 className="h2">
              NO AI
              <br />
              <span className="accent-word">theatre.</span>
            </h2>
            <p className="body-lg mt-6">
              We use AI to remove friction, sharpen decisions, and create new product value. If it does
              not improve the experience, it does not ship.
            </p>
          </Reveal>
          <Reveal className="col-span-full lg:col-span-5 mt-12 lg:mt-0" delay={0.1}>
            <div className="feature-card space-y-8">
              <div className="flex items-center gap-3">
                <CoreGlow size={18} />
                <span className="micro">A PRACTICAL SYSTEM</span>
              </div>
              <div className="h-px bg-[var(--gn-line)]" />
              <p className="h3">Clear thinking in. Useful software out.</p>
              <p className="body">
                Discovery, design, engineering, and launch in one accountable team.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        <div className="grid-12">
          <Reveal className="col-span-full text-center">
            <h2 className="h2">
              READY TO
              <br />
              <span className="accent-word">ship?</span>
            </h2>
            <p className="body-lg mx-auto mt-6">Tell us what needs to exist next.</p>
            <MagneticButton href="/contact" className="mt-10">
              Start a project
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export const metadata = {
  title: "Software Engineering – GrayNest",
  description: "Custom software engineering with AI integration.",
}
