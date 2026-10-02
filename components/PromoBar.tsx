"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { TEARDOWN_LANGS } from "@/content/teardown"

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
    <div ref={barRef} className="gn-promo" role="region" aria-label="Free app teardown offer">
      <div className="gn-promo-inner">
        <p className="gn-promo-text">
          <span className="gn-promo-badge">Free</span>
          <span>
            Our CTO tears down your app or website in a recorded 15-minute review.{" "}
            <strong>No sales pitch.</strong>
          </span>
        </p>

        <div className="gn-promo-regions" role="group" aria-label="Open the teardown offer in your language">
          {TEARDOWN_LANGS.map((entry) => (
            <Link
              key={entry.lang}
              href={entry.href}
              lang={entry.lang}
              className="gn-promo-region"
              data-event={`promo_teardown_${entry.lang}`}
            >
              {entry.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
