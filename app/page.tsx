import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { TwoDoorHero } from "@/components/TwoDoorHero"
import { ManifestoScrub } from "@/components/ManifestoScrub"
import { Reveal } from "@/components/Reveal"
import { MagneticButton } from "@/components/MagneticButton"
import { MediaSlot } from "@/components/MediaSlot"

import Link from "next/link"

interface ServiceCard {
  eyebrow: string
  titleLine1: string
  titleLine2: string
  accent: string
  bullets: string[]
  href: string
  cta: string
  mediaId: string
  alt: string
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    eyebrow: "01 · AI AGENTS",
    titleLine1: "YOUR SHOP CLOSES AT 9.",
    titleLine2: "Your agent doesn't.",
    accent: "doesn't.",
    bullets: [
      "Palestinian Arabic & English",
      "Phone, WhatsApp, Instagram, web",
      "Books, sells, hands off to your team",
    ],
    href: "/ai-agents",
    cta: "Explore AI Agents",
    mediaId: "home.service.agents.card",
    alt: "A shop owner opening his store in the morning, reading the overnight summary on his phone",
  },
  {
    eyebrow: "02 · SOFTWARE + AI",
    titleLine1: "THE BRIEF STOPS HERE.",
    titleLine2: "The build starts.",
    accent: "starts.",
    bullets: [
      "Web, mobile, backend, internal tools",
      "AI where it earns its keep",
      "Senior engineers who ship",
    ],
    href: "/software-engineering",
    cta: "Explore Software",
    mediaId: "home.service.software.card",
    alt: "Two startup founders late at night, one showing a working app on a phone while the other reacts",
  },
]

const PRINCIPLES = [
  {
    mediaId: "home.principle.puzzle",
    eyebrow: "01 · INTEGRATION",
    title: "Built in, not bolted on.",
    body: "AI and software designed around how your business already runs, not wedged on top of it.",
    alt: "Two interlocking off-white hexagon forms fitted together, their seam glowing red-orange",
  },
  {
    mediaId: "home.principle.hourglass",
    eyebrow: "02 · SPEED",
    title: "MVP in weeks.",
    body: "Something real in your hands early, so decisions come from usage instead of guesses.",
    alt: "A hexagon-panelled hourglass whose lower chamber fills with glowing red-orange hex tiles",
  },
  {
    mediaId: "home.principle.roadmap",
    eyebrow: "03 · OWNERSHIP",
    title: "Your roadmap, our problem.",
    body: "We carry the plan from first commit to launch and stay until it works.",
    alt: "A winding path of hexagon tiles leading into the dark towards one glowing tile",
  },
] as const

/**
 * Renders the house-style accent wrap inside a service card headline.
 */
function ServiceTitle({
  line1,
  line2,
  accent,
}: {
  line1: string
  line2: string
  accent: string
}) {
  const accentIndex = line2.toLowerCase().indexOf(accent.toLowerCase())

  if (accentIndex < 0) {
    return (
      <h3 className="service-card-title">
        <span>{line1}</span>
        <span>{line2}</span>
      </h3>
    )
  }

  const before = line2.slice(0, accentIndex)
  const matched = line2.slice(accentIndex, accentIndex + accent.length)
  const after = line2.slice(accentIndex + accent.length)

  return (
    <h3 className="service-card-title">
      <span>{line1}</span>
      <span>
        {before}
        <span className="accent-word">{matched}</span>
        {after}
      </span>
    </h3>
  )
}

/**
 * Home page: two-door hero, manifesto scrub, cinematic service doors, closing CTA.
 */
export default function Home() {
  return (
    <main id="main" className="has-dark-hero">
      <Navigation />
      <TwoDoorHero />
      <ManifestoScrub />

      <section className="section-padding section-cinematic relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />


        <div className="grid-12">
          <div className="col-span-full mb-10 md:mb-14">
            <Reveal>
              <p className="micro mb-5">TWO DOORS</p>
              <h2 className="h2">TWO WAYS TO WORK.</h2>
            </Reveal>
          </div>

          {SERVICE_CARDS.map((card, index) => (
            <Reveal
              key={card.href}
              className="col-span-full md:col-span-6"
              delay={index * 0.12}
            >
              <article className="service-cinema-card group">
                <div className="service-cinema-media">
                  <MediaSlot
                    id={card.mediaId}
                    type="image"
                    aspect="4:5"
                    register="world"
                    alt={card.alt}
                    className="service-cinema-slot"
                  />
                  <div className="service-cinema-body">
                    <p className="micro">{card.eyebrow}</p>
                    <ServiceTitle
                      line1={card.titleLine1}
                      line2={card.titleLine2}
                      accent={card.accent}
                    />
                    <ul className="service-cinema-bullets">
                      {card.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <Link href={card.href} className="btn-glass service-cinema-cta">
                      {card.cta}
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding relative overflow-hidden section-tint">
        <div className="grid-12">
          <Reveal className="col-span-full mb-10 md:mb-14">
            <p className="micro mb-5">HOW WE WORK</p>
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
                  READY TO
                  <br />
                  <span className="accent-word">talk?</span>
                </h2>
                <p className="body-lg">
                  Start a project, book a demo, or ask our agent a question.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <MagneticButton href="/contact">
                    Start a project
                  </MagneticButton>
                  <Link href="/contact" className="btn-glass" data-event="cta_demo">
                    Book a demo
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
