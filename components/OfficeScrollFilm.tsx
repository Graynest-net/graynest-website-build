"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTheme } from "@/components/theme/ThemeProvider"
import {
  OFFICE_FILM_BEATS,
  OFFICE_FILM_CAMERA,
  OFFICE_FILM_SLOTS,
} from "@/content/office-film"

gsap.registerPlugin(ScrollTrigger)

interface VideoAvailability {
  day: boolean
  night: boolean
}

/**
 * Probes whether a media URL exists without throwing on 404.
 */
async function probeMedia(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD", cache: "force-cache" })
    return response.ok
  } catch {
    return false
  }
}

/**
 * Picks the active story beat for a given scrub progress.
 */
function beatForProgress(progress: number) {
  let active = OFFICE_FILM_BEATS[0]

  for (const beat of OFFICE_FILM_BEATS) {
    if (progress >= beat.progress) {
      active = beat
    }
  }

  return active
}

/**
 * Theme-aware office scroll film: same camera path, day people vs night persona.
 * Playback is scrubbed by scroll while the section is pinned.
 */
export function OfficeScrollFilm() {
  const { theme } = useTheme()
  const sectionRef = useRef<HTMLElement | null>(null)
  const dayRef = useRef<HTMLVideoElement | null>(null)
  const nightRef = useRef<HTMLVideoElement | null>(null)
  const progressRef = useRef(0)
  const [progress, setProgress] = useState(0)
  const [availability, setAvailability] = useState<VideoAvailability>({
    day: false,
    night: false,
  })

  const beat = useMemo(() => beatForProgress(progress), [progress])
  const isLight = theme === "light"
  const activeLabel = isLight ? OFFICE_FILM_SLOTS.day.label : OFFICE_FILM_SLOTS.night.label

  /**
   * Keeps both plates on the same frame so theme switches stay continuous.
   */
  const syncVideos = useCallback((nextProgress: number) => {
    progressRef.current = nextProgress
    setProgress(nextProgress)

    const durationHint = OFFICE_FILM_CAMERA.durationSeconds

    for (const video of [dayRef.current, nightRef.current]) {
      if (!video) {
        continue
      }

      const duration =
        Number.isFinite(video.duration) && video.duration > 0
          ? video.duration
          : durationHint

      const target = Math.min(Math.max(nextProgress, 0), 0.999) * duration

      if (Math.abs(video.currentTime - target) > 0.04) {
        try {
          video.currentTime = target
        } catch {
          // Ignore seek-before-ready races.
        }
      }
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    /**
     * Resolves which master video files are present in /public/media.
     */
    async function resolveAvailability() {
      const [day, night] = await Promise.all([
        probeMedia(OFFICE_FILM_SLOTS.day.src),
        probeMedia(OFFICE_FILM_SLOTS.night.src),
      ])

      if (!cancelled) {
        setAvailability({ day, night })
      }
    }

    void resolveAvailability()

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      syncVideos(0.35)
      return
    }

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=280%",
      pin: true,
      scrub: 0.45,
      anticipatePin: 1,
      onUpdate: (self) => {
        syncVideos(self.progress)
      },
    })

    return () => {
      trigger.kill()
    }
  }, [syncVideos])

  useEffect(() => {
    /**
     * Re-sync after metadata loads so duration-based seeking is accurate.
     */
    const onMeta = () => {
      syncVideos(progressRef.current)
    }

    const day = dayRef.current
    const night = nightRef.current

    day?.addEventListener("loadedmetadata", onMeta)
    night?.addEventListener("loadedmetadata", onMeta)

    return () => {
      day?.removeEventListener("loadedmetadata", onMeta)
      night?.removeEventListener("loadedmetadata", onMeta)
    }
  }, [availability.day, availability.night, syncVideos])

  return (
    <section
      ref={sectionRef}
      className="office-film"
      aria-label="GrayNest agents office day and night scroll film"
    >
      <div className="office-film-stage" aria-hidden={!availability.day && !availability.night}>
        <div className={`office-film-plate office-film-day ${isLight ? "is-active" : ""}`.trim()}>
          {availability.day ? (
            <video
              ref={dayRef}
              className="office-film-video"
              src={OFFICE_FILM_SLOTS.day.src}
              poster={OFFICE_FILM_SLOTS.day.poster}
              muted
              playsInline
              preload="auto"
              aria-label={OFFICE_FILM_SLOTS.day.id}
            />
          ) : (
            <div className="office-film-placeholder office-film-placeholder-day">
              <div className="office-film-placeholder-glow" />
              <p className="glass-pill">{OFFICE_FILM_SLOTS.day.id} · VIDEO · 16:9</p>
              <p className="office-film-placeholder-copy">
                Daylight agency floor. People at desks. Same camera path as night.
              </p>
            </div>
          )}
        </div>

        <div className={`office-film-plate office-film-night ${isLight ? "" : "is-active"}`.trim()}>
          {availability.night ? (
            <video
              ref={nightRef}
              className="office-film-video"
              src={OFFICE_FILM_SLOTS.night.src}
              poster={OFFICE_FILM_SLOTS.night.poster}
              muted
              playsInline
              preload="auto"
              aria-label={OFFICE_FILM_SLOTS.night.id}
            />
          ) : (
            <div className="office-film-placeholder office-film-placeholder-night">
              <div className="office-film-placeholder-glow" />
              <p className="glass-pill">{OFFICE_FILM_SLOTS.night.id} · VIDEO · 16:9</p>
              <p className="office-film-placeholder-copy">
                Soft warm night office. GrayNest persona on the floor. Same dolly.
              </p>
            </div>
          )}
        </div>

        <div className="office-film-veil" />
      </div>

      <div className="office-film-copy grid-12">
        <div className="office-film-copy-inner col-span-full md:col-span-7 lg:col-span-6">
          <p className="micro office-film-eyebrow">{beat.eyebrow}</p>
          <h2 className="h2 office-film-title">
            <span className="office-film-title-line">{beat.line1}</span>
            <span className="office-film-title-line">
              {(() => {
                const accentIndex = beat.line2.toLowerCase().indexOf(beat.accent.toLowerCase())

                if (accentIndex < 0) {
                  return beat.line2
                }

                return (
                  <>
                    {beat.line2.slice(0, accentIndex)}
                    <span className="accent-word">
                      {beat.line2.slice(accentIndex, accentIndex + beat.accent.length)}
                    </span>
                    {beat.line2.slice(accentIndex + beat.accent.length)}
                  </>
                )
              })()}
            </span>
          </h2>
          <p className="body office-film-support">
            Scroll to move the camera. Flip theme to change the shift — people by day, the persona by night.
          </p>
        </div>
      </div>

      <div className="office-film-hud" aria-hidden="true">
        <span className="glass-pill">{activeLabel}</span>
        <div className="office-film-progress">
          <span style={{ transform: `scaleX(${Math.max(progress, 0.02)})` }} />
        </div>
        <span className="micro">{Math.round(progress * 100)}%</span>
      </div>
    </section>
  )
}
