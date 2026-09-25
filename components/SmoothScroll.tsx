"use client"

import { useEffect, type ReactNode } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SmoothScrollProps {
  children: ReactNode
}

/**
 * Wraps the app with Lenis smooth scrolling synced to the GSAP ticker.
 * Disabled when the user prefers reduced motion.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.4,
    })

    /**
     * Keep ScrollTrigger measurements in sync with Lenis scroll position.
     */
    lenis.on("scroll", ScrollTrigger.update)

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
