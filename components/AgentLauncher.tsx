"use client"

import { useEffect, useState } from "react"
import { CoreGlow } from "@/components/CoreGlow"

/**
 * Sitewide live-agent launcher. Pulses once, 6s after first load, then stays calm.
 */
export function AgentLauncher() {
  const [pulseOnce, setPulseOnce] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      return
    }

    const timer = window.setTimeout(() => {
      setPulseOnce(true)
      window.setTimeout(() => setPulseOnce(false), 1600)
    }, 6000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <div className="agent-launcher">
      <button
        type="button"
        className={`btn-glass agent-launcher-btn ${pulseOnce ? "agent-launcher-pulse" : ""}`.trim()}
        data-event="agent_open"
        aria-label="Ask GrayNest"
      >
        <CoreGlow size={12} pulse={true} />
        Ask GrayNest
      </button>
    </div>
  )
}
