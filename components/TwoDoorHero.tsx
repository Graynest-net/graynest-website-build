"use client"

import Link from "next/link"
import { useState } from "react"
import { MediaSlot } from "@/components/MediaSlot"

interface DoorPanel {
  id: string
  href: string
  label: string
  mediaId: string
  alt: string
}

const DOORS: DoorPanel[] = [
  {
    id: "agents",
    href: "/ai-agents",
    label: "01 · AI AGENTS →",
    mediaId: "home.hero.agents",
    alt: "Ramallah shop after closing, phone lighting up on the counter",
  },
  {
    id: "software",
    href: "/software-engineering",
    label: "02 · SOFTWARE + AI →",
    mediaId: "home.hero.software",
    alt: "Glass-walled war room at 2 a.m. with a red LED practical",
  },
]

/**
 * Home hero: two cinematic World panels that expand on hover (desktop).
 */
export function TwoDoorHero() {
  const [active, setActive] = useState<"agents" | "software" | null>(null)

  return (
    <section className="two-door-hero" aria-label="GrayNest home hero">
      <div className="two-door-panels">
        {DOORS.map((door) => {
          const isActive = active === door.id
          const isDimmed = active !== null && active !== door.id

          return (
            <Link
              key={door.id}
              href={door.href}
              className={`two-door-panel ${isActive ? "is-active" : ""} ${isDimmed ? "is-dimmed" : ""}`.trim()}
              onMouseEnter={() => setActive(door.id as "agents" | "software")}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(door.id as "agents" | "software")}
              onBlur={() => setActive(null)}
              data-event={door.id === "agents" ? "cta_demo" : "cta_project"}
            >
              <div className="two-door-media">
                <MediaSlot
                  id={door.mediaId}
                  type="video"
                  aspect="9:16"
                  register="world"
                  alt={door.alt}
                  className="two-door-slot"
                />
              </div>
              <div className="two-door-label">
                <span className="glass-pill">{door.label}</span>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="two-door-overlay">
        <div className="hero-copy two-door-copy">
          <p className="glass-pill eyebrow-pill">SOFTWARE HOUSE · AI WHERE IT PAYS OFF</p>
          <h1 className="two-door-headline">
            <span className="display-line">WE SHIP SOFTWARE.</span>
            <span className="display-line">
              SOME OF IT <span className="accent-word">talks back.</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}
