"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

interface ManifestoWord {
  text: string
  accent?: boolean
}

const MANIFESTO_WORDS: ManifestoWord[] = [
  { text: "Most" },
  { text: "companies" },
  { text: "don't" },
  { text: "need" },
  { text: "more", accent: true },
  { text: "software." },
  { text: "They" },
  { text: "need" },
  { text: "the" },
  { text: "right" },
  { text: "software," },
  { text: "shipped," },
  { text: "and" },
  { text: "AI" },
  { text: "only" },
  { text: "where" },
  { text: "it" },
  { text: "earns", accent: true },
  { text: "its" },
  { text: "keep." },
  { text: "We're" },
  { text: "senior" },
  { text: "engineers" },
  { text: "who" },
  { text: "build" },
  { text: "both," },
  { text: "and" },
  { text: "we" },
  { text: "stay" },
  { text: "until" },
  { text: "it" },
  { text: "works.", accent: true },
]

/**
 * Pinned manifesto section: words fill from 15% to 100% opacity as the user scrolls.
 */
export function ManifestoScrub() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const wordsRef = useRef<Array<HTMLSpanElement | null>>([])

  useEffect(() => {
    const section = sectionRef.current
    const words = wordsRef.current.filter((word): word is HTMLSpanElement => word !== null)

    if (!section || words.length === 0) {
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      words.forEach((word, index) => {
        word.style.opacity = "1"
        if (MANIFESTO_WORDS[index]?.accent) {
          word.style.color = "var(--gn-red)"
        }
      })
      return
    }

    gsap.set(words, { opacity: 0.15 })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 0.65,
      },
    })

    words.forEach((word, index) => {
      const isAccent = MANIFESTO_WORDS[index]?.accent === true

      timeline.to(
        word,
        {
          opacity: 1,
          color: isAccent ? "#EA2E00" : "#FAFAFA",
          duration: 1,
          ease: "none",
        },
        index * 0.12
      )
    })

    return () => {
      timeline.scrollTrigger?.kill()
      timeline.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="manifesto-section" aria-label="GrayNest manifesto">
      <div className="absolute inset-0 falloff-gradient" />

      <div className="manifesto-haze" aria-hidden="true" />

      <div className="grid-12 relative z-10 h-full items-center">
        <p className="manifesto-copy col-span-full mx-auto">
          {MANIFESTO_WORDS.map((word, index) => (
            <span
              key={`${word.text}-${index}`}
              ref={(node) => {
                wordsRef.current[index] = node
              }}
              className={`manifesto-word ${word.accent ? "manifesto-word-accent" : ""}`.trim()}
            >
              {`${word.text} `}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
