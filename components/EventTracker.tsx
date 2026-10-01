"use client"

import { useEffect } from "react"
import { track } from "@vercel/analytics"

/**
 * Sends a Vercel Analytics custom event for any click inside an element carrying
 * data-event="name", so CTAs only need the attribute.
 */
export function EventTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-event]")
      const name = target?.dataset.event
      if (!name) return
      track(name, { path: window.location.pathname })
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])

  return null
}
