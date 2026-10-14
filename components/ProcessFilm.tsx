"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { CoreGlow } from "@/components/CoreGlow"

const SRC = "/media/how-we-work"

// Same breakpoints as the <source> media queries below: phones get 540p, tablets 720p, desktop 1080p.
const posterFor = (width: number) => `${SRC}-${width < 768 ? "540p" : width < 1280 ? "720p" : "1080p"}.jpg`

/**
 * The how-we-work film: plays muted while on screen and pauses when scrolled away.
 * It runs over 5s, so a pause control is always visible; reduced-motion visitors
 * get the poster and start it themselves. Each size tier ships AV1 first with an
 * H.264 fallback; the browser takes the first <source> whose media query and codec match.
 */
export function ProcessFilm() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [poster, setPoster] = useState(`${SRC}-720p.jpg`)
  // Once a visitor pauses, scrolling back must not restart it.
  const userPaused = useRef(false)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    setPoster(posterFor(window.innerWidth))
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || reduced) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) void video.play().catch(() => {})
        else if (!entry.isIntersecting) video.pause()
      },
      { threshold: 0.5 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [reduced])

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      userPaused.current = false
      void video.play().catch(() => {})
    } else {
      userPaused.current = true
      video.pause()
    }
  }

  return (
    <section id="how-we-work" className="section-padding relative overflow-hidden border-t border-[var(--gn-line)]">
      <div className="grid-12">
        <Reveal className="col-span-full lg:col-span-6">
          <p className="micro mb-6 flex items-center gap-3">
            <CoreGlow size={12} /> HOW WE WORK
          </p>
          <h2 className="h2">
            FROM FIRST CALL
            <br />
            <span className="accent-word">to live product.</span>
          </h2>
        </Reveal>
        <Reveal className="col-span-full lg:col-span-6 lg:self-end mt-6 lg:mt-0" delay={0.08}>
          <p className="body-lg max-w-[52ch]">
            Agree the MVP, plan it week by week, design it, build it, test every change, ship it,
            then learn from real users. Seventeen seconds, start to finish.
          </p>
        </Reveal>

        <Reveal className="col-span-full mt-8 md:mt-10" delay={0.12}>
          <div className="process-film">
            <video
              ref={videoRef}
              className="process-film-media"
              poster={poster}
              muted
              loop
              playsInline
              preload="none"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              aria-label="Animated walkthrough of how GrayNest works: kickoff chat, weekly plan, design, build, test, ship, and learning from users"
            >
              <source src={`${SRC}-540p.av1.mp4`} type='video/mp4; codecs="av01.0.04M.08"' media="(max-width: 767px)" />
              <source src={`${SRC}-540p.mp4`} type="video/mp4" media="(max-width: 767px)" />
              <source src={`${SRC}-720p.av1.mp4`} type='video/mp4; codecs="av01.0.08M.08"' media="(max-width: 1279px)" />
              <source src={`${SRC}-720p.mp4`} type="video/mp4" media="(max-width: 1279px)" />
              <source src={`${SRC}-1080p.av1.mp4`} type='video/mp4; codecs="av01.0.09M.08"' />
              <source src={`${SRC}-1080p.mp4`} type="video/mp4" />
            </video>
            <button
              type="button"
              className="process-film-toggle"
              onClick={toggle}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? <Pause size={18} fill="currentColor" aria-hidden="true" /> : <Play size={18} fill="currentColor" aria-hidden="true" />}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
