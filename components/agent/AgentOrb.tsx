"use client"

import { useEffect, useRef } from "react"
import { useAgent } from "@/components/agent/AgentContext"

interface AgentOrbProps {
  size?: number
  className?: string
}

/**
 * Ember orb that swells with the live call audio: the agent's voice while it
 * speaks, the caller's microphone while it listens.
 */
export function AgentOrb({ size = 120, className = "" }: AgentOrbProps) {
  const { callState, readLevel } = useAgent()
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.style.setProperty("--orb-level", "0.25")
      return
    }

    let frame = 0
    let smoothed = 0

    const tick = () => {
      const target = Math.min(Math.max(readLevel(), 0), 1)
      // Rise fast, fall slowly so the orb reads as a voice, not a flicker.
      smoothed += (target - smoothed) * (target > smoothed ? 0.35 : 0.08)
      node.style.setProperty("--orb-level", smoothed.toFixed(3))
      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [readLevel])

  return (
    <span
      ref={ref}
      className={`agent-orb is-${callState} ${className}`.trim()}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="agent-orb-halo" />
      <span className="agent-orb-ring" />
      <span className="agent-orb-core" />
    </span>
  )
}
