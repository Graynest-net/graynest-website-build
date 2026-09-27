"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

/**
 * Cinematic enter animation: rises from below with expo-like easing on scroll.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 36,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      element.style.opacity = "1"
      element.style.transform = "none"
      return
    }

    const tween = gsap.fromTo(
      element,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "expo.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          toggleActions: once ? "play none none none" : "play reverse play reverse",
          onEnter: () => element.classList.add("is-revealed"),
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [delay, once, y])

  return (
    <div ref={ref} className={`reveal-ready ${className}`.trim()} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
