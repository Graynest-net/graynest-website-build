"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { MARKETS, type Market } from "@/content/clinics-onepager"

/** Order shown left-to-right; labels are the reader's own region, not the currency. */
const REGIONS: { market: Market; label: string }[] = [
  { market: "ps", label: "Palestine" },
  { market: "jo", label: "Jordan" },
  { market: "tr", label: "Türkiye" },
  { market: "en", label: "English" },
]

// Guard against a stray market key drifting out of sync with the content file.
const KNOWN = REGIONS.filter((r) => r.market in MARKETS)

/**
 * Persistent offer strip pinned above the fixed nav. It measures its own height
 * into --gn-promo-h so the nav (and the hero) drop below it; the CSS carries a
 * 44px fallback for first paint before this runs.
 */
export function PromoBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const root = document.documentElement
    const measure = () => root.style.setProperty("--gn-promo-h", `${el.offsetHeight}px`)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => {
      observer.disconnect()
      root.style.removeProperty("--gn-promo-h")
    }
  }, [])

  return (
    <div ref={barRef} className="gn-promo" role="region" aria-label="Clinics offer">
      <div className="gn-promo-inner">
        <p className="gn-promo-text">
          <span className="gn-promo-badge">New</span>
          <span>
            A WhatsApp front desk for clinics — books patients 24/7.{" "}
            <strong>50% off the first month.</strong>
          </span>
        </p>

        <div className="gn-promo-regions" role="group" aria-label="Open the offer for your region">
          {KNOWN.map((region) => (
            <Link key={region.market} href={`/clinics/${region.market}`} className="gn-promo-region">
              {region.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
