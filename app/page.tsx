import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { AgentLauncher } from "@/components/AgentLauncher"
import { TwoDoorHero } from "@/components/TwoDoorHero"
import { ManifestoScrub } from "@/components/ManifestoScrub"
import { Reveal } from "@/components/Reveal"
import { MagneticButton } from "@/components/MagneticButton"
import { MediaSlot } from "@/components/MediaSlot"
import { HexGrid } from "@/components/HexGrid"
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
    cta: "Explore AI Agents →",
    mediaId: "home.service.agents.card",
    alt: "Shop floor after hours with a glowing phone",
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
    cta: "Explore Software →",
    mediaId: "home.service.software.card",
    alt: "Product war room with a red practical light",
  },
]

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
    <main id="main" className="bg-[var(--gn-ink-900)]">
      <Navigation />
      <TwoDoorHero />
      <ManifestoScrub />

      <section className="section-padding section-cinematic relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        <HexGrid opacity={0.03} />

        <div className="grid-12">
          <div className="col-span-full mb-14 md:mb-20">
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

      <section className="section-padding relative overflow-hidden border-t border-[var(--gn-line)]">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        <div className="manifesto-haze manifesto-haze-center" aria-hidden="true" />

        <div className="grid-12 relative z-10">
          <Reveal className="col-span-full md:col-span-8 md:col-start-3 text-center">
            <h2 className="h2 mb-8">
              READY TO
              <br />
              <span className="accent-word">talk?</span>
            </h2>
            <p className="body-lg mx-auto mb-12">
              Start a project, book a demo, or ask our agent a question.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton href="/contact">
                Start a project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </MagneticButton>
              <Link href="/contact" className="btn-glass" data-event="cta_demo">
                Book a demo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <AgentLauncher />
    </main>
  )
}
