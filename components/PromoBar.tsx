"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

/**
 * Site-wide offer strip pinned above the fixed nav, hidden on the teardown pages it
 * advertises. The whole strip is one link to /teardown, which picks Arabic or English
 * from the browser's language. It measures its own height into --gn-promo-h so the nav
 * and page tops drop below it; the CSS carries a 44px fallback for first paint.
 */
export function PromoBar() {
  const barRef = useRef<HTMLDivElement>(null)
  const hidden = usePathname()?.startsWith("/teardown") ?? false

  useEffect(() => {
    const el = barRef.current
    if (hidden || !el) return
    const root = document.documentElement
    const measure = () => root.style.setProperty("--gn-promo-h", `${el.offsetHeight}px`)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => {
      observer.disconnect()
      root.style.removeProperty("--gn-promo-h")
    }
  }, [hidden])

  if (hidden) return null

  return (
    <div ref={barRef} className="gn-promo" role="region" aria-label="Free app teardown offer">
      <Link href="/teardown" className="gn-promo-inner gn-promo-link" data-event="promo_teardown">
        <span className="gn-promo-text">
          <span className="gn-promo-badge">Free</span>
          <span>
            Our CTO tears down your app or website in a recorded 15-minute review.{" "}
            <strong>No sales pitch.</strong>
          </span>
        </span>
        <span className="gn-promo-cta" aria-hidden="true">
          See the offer
          <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
        </span>
      </Link>
    </div>
  )
}
