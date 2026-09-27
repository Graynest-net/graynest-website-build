"use client"

import { useEffect, useRef, useState } from "react"

const SRC = "/media/home.hero.film"

export function HeroFilm({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || reduced) return
    // Plays once when it enters view, then rests on the lit final frame.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {})
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <div className={`hero-film ${className}`.trim()}>
      {reduced ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${SRC}.end.jpg`} alt="" className="hero-film-media" />
      ) : (
        <video
          ref={videoRef}
          className="hero-film-media"
          poster={`${SRC}.poster.jpg`}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={`${SRC}.webm`} type="video/webm" />
          <source src={`${SRC}.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
