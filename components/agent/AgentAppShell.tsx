"use client"

import dynamic from "next/dynamic"
import { useEffect, useState, type ReactNode } from "react"
import { CoreGlow } from "@/components/CoreGlow"
import { AgentProvider, useAgent } from "@/components/agent/AgentContext"

const AgentDrawer = dynamic(
  () => import("@/components/agent/AgentDrawer").then((module) => module.AgentDrawer),
  { ssr: false }
)

interface AgentAppShellProps {
  children: ReactNode
}

/**
 * Floating Ask GrayNest pill that opens the agent drawer.
 */
function AgentLauncherButton() {
  const { openAgent, isOpen } = useAgent()
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
    <div className={`agent-launcher ${isOpen ? "is-hidden" : ""}`.trim()}>
      <button
        type="button"
        className={`btn-glass agent-launcher-btn ${pulseOnce ? "agent-launcher-pulse" : ""}`.trim()}
        data-event="agent_open"
        aria-label="Ask GrayNest"
        onClick={() => openAgent("talk")}
      >
        <CoreGlow size={12} pulse={true} />
        Ask GrayNest
      </button>
    </div>
  )
}

/**
 * Wraps the app with agent context, launcher, and lazy-loaded ElevenLabs drawer.
 */
export function AgentAppShell({ children }: AgentAppShellProps) {
  return (
    <AgentProvider>
      {children}
      <AgentLauncherButton />
      <AgentDrawer />
    </AgentProvider>
  )
}
