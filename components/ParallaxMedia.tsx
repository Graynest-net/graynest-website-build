"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ParallaxMediaProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxMedia({ children, speed = 20, className = "" }: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const tween = gsap.fromTo(
      el.querySelector(".parallax-inner"),
      { yPercent: -speed / 2 },
      {
        yPercent: speed / 2,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [speed])

  return (
    <div ref={ref} className={`parallax-wrap ${className}`.trim()}>
      <div className="parallax-inner">{children}</div>
    </div>
  )
}
