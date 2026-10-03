"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface LogoMarqueeProps {
  children: ReactNode
  /** Cruising speed in px/s, leftwards. */
  speed?: number
}

/**
 * Endless logo strip that always drifts and can be dragged with a mouse or swiped on
 * touch. Children must render the row twice in a row so wrapping by half the track
 * width is seamless. A flick keeps its momentum, then eases back to the cruising
 * speed. Vertical swipes still scroll the page (touch-action: pan-y).
 * Reduced motion: no script; the CSS shows a static, wrapped row instead.
 */
export function LogoMarquee({ children, speed = 40 }: LogoMarqueeProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    if (!viewport || !track) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let offset = 0
    let velocity = speed // px/s; positive moves the row left
    let dragging = false
    let pointerId: number | null = null
    let lastX = 0
    let lastMoveTime = 0
    let lastFrame = performance.now()
    let frame = 0
    let visible = true

    const wrap = () => {
      const half = track.scrollWidth / 2
      if (half <= 0) return
      offset = ((offset % half) + half) % half
    }

    const tick = (now: number) => {
      const dt = Math.min((now - lastFrame) / 1000, 0.05)
      lastFrame = now
      if (!dragging) {
        // Ease any flick momentum back toward the cruising speed.
        velocity += (speed - velocity) * Math.min(1, dt * 2.2)
        offset += velocity * dt
      }
      wrap()
      track.style.transform = `translate3d(${-offset}px, 0, 0)`
      frame = visible ? requestAnimationFrame(tick) : 0
    }

    const start = () => {
      if (frame) return
      lastFrame = performance.now()
      frame = requestAnimationFrame(tick)
    }

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return
      dragging = true
      pointerId = event.pointerId
      lastX = event.clientX
      lastMoveTime = event.timeStamp
      velocity = 0
      viewport.setPointerCapture(event.pointerId)
      viewport.classList.add("is-dragging")
    }

    const onMove = (event: PointerEvent) => {
      if (!dragging || event.pointerId !== pointerId) return
      const dx = event.clientX - lastX
      const dt = Math.max((event.timeStamp - lastMoveTime) / 1000, 1 / 240)
      offset -= dx
      velocity = velocity * 0.7 + (-dx / dt) * 0.3
      lastX = event.clientX
      lastMoveTime = event.timeStamp
    }

    const onUp = (event: PointerEvent) => {
      if (!dragging || event.pointerId !== pointerId) return
      dragging = false
      pointerId = null
      // A pause before release means no flick.
      if (event.timeStamp - lastMoveTime > 80) velocity = 0
      velocity = Math.max(-3000, Math.min(3000, velocity))
      viewport.classList.remove("is-dragging")
    }

    // Stop the loop while the strip is off screen.
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
    })
    observer.observe(viewport)

    viewport.addEventListener("pointerdown", onDown)
    viewport.addEventListener("pointermove", onMove)
    viewport.addEventListener("pointerup", onUp)
    viewport.addEventListener("pointercancel", onUp)
    start()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      viewport.removeEventListener("pointerdown", onDown)
      viewport.removeEventListener("pointermove", onMove)
      viewport.removeEventListener("pointerup", onUp)
      viewport.removeEventListener("pointercancel", onUp)
    }
  }, [speed])

  return (
    <div ref={viewportRef} className="track-record-drag">
      <div ref={trackRef} className="track-record-track">
        {children}
      </div>
    </div>
  )
}
