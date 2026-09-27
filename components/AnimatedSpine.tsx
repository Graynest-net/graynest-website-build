"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SpineStep {
  title: string
  body: string
  variant?: string
  index?: number
}

interface AnimatedSpineProps {
  steps: readonly SpineStep[]
  className?: string
  children?: ReactNode
}

export function AnimatedSpine({ steps, className = "" }: AnimatedSpineProps) {
  const spineRef = useRef<HTMLUListElement | null>(null)
  const lineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const spine = spineRef.current
    const line = lineRef.current
    if (!spine || !line) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      line.style.transform = "scaleY(1)"
      spine.querySelectorAll(".spine-row").forEach((row) => {
        const el = row as HTMLElement
        el.style.opacity = "1"
        el.style.transform = "none"
      })
      return
    }

    const rows = spine.querySelectorAll(".spine-row")
    const nodes = spine.querySelectorAll(".spine-node")

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: spine,
        start: "top 75%",
        end: "bottom 60%",
        scrub: 0.6,
      },
    })

    tl.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: "none" }, 0)

    rows.forEach((row, i) => {
      const offset = i / rows.length
      tl.fromTo(
        row,
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.15, ease: "power2.out" },
        offset
      )
      if (nodes[i]) {
        tl.fromTo(
          nodes[i],
          { scale: 0 },
          { scale: 1, duration: 0.1, ease: "back.out(2)" },
          offset
        )
      }
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [steps])

  return (
    <ul ref={spineRef} className={`channel-spine animated-spine ${className}`.trim()}>
      <div ref={lineRef} className="spine-line" aria-hidden="true" />
      {steps.map((step, index) => {
        const variantClass = step.variant ? `channel-row-${step.variant}` : ""
        const nodeClass = step.variant ? `channel-node-${step.variant}` : ""
        return (
          <li key={step.title} className={`channel-row spine-row ${variantClass}`.trim()}>
            <span className={`channel-node spine-node ${nodeClass}`.trim()} aria-hidden="true" />
            <div>
              <h3 className="channel-title">
                {step.index !== undefined ? (
                  <span className="text-[var(--gn-text-3)] mr-2">
                    {String(step.index).padStart(2, "0")}
                  </span>
                ) : null}
                {step.title}
              </h3>
              <p className="channel-body">{step.body}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
