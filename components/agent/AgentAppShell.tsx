"use client"

import dynamic from "next/dynamic"
import { useEffect, useState, type ReactNode } from "react"
import { AgentProvider, useAgent } from "@/components/agent/AgentContext"
import { ThinkingOrb } from "thinking-orbs"
import { Icon } from "@/components/Icon"
import { AgentOrb } from "@/components/agent/AgentOrb"

const AgentDrawer = dynamic(
  () => import("@/components/agent/AgentDrawer").then((module) => module.AgentDrawer),
  { ssr: false }
)

interface AgentAppShellProps {
  children: ReactNode
}

/**
 * Collapses the launcher while the visitor scrolls down the page and
 * expands it again on the way back up or near the top.
 */
function useCompactOnScroll(): boolean {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0

    const onScroll = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastY

        if (y < 160) {
          setCompact(false)
        } else if (delta > 6) {
          setCompact(true)
        } else if (delta < -6) {
          setCompact(false)
        }

        lastY = y
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return compact
}

/**
 * Floating Ask GrayNest pill that opens the agent drawer. It shrinks to a
 * round button on scroll down, and becomes the speaking orb during a call.
 */
function AgentLauncherButton() {
  const { openAgent, isOpen, callState } = useAgent()
  const [pulseOnce, setPulseOnce] = useState(false)
  const compact = useCompactOnScroll()
  const inCall = callState !== "idle"
  const [inviteReady, setInviteReady] = useState(false)
  const [dismissed, setDismissed] = useState(true)
  const [hovered, setHovered] = useState(false)

  // Invite once per session, a few seconds after arrival.
  useEffect(() => {
    let seen = false
    try {
      seen = window.sessionStorage.getItem("gn-invite-dismissed") === "1"
    } catch {}
    setDismissed(seen)
    const timer = window.setTimeout(() => setInviteReady(true), 4000)
    return () => window.clearTimeout(timer)
  }, [])

  const dismissInvite = () => {
    setDismissed(true)
    try {
      window.sessionStorage.setItem("gn-invite-dismissed", "1")
    } catch {}
  }
  const showInvite = !isOpen && !compact && (hovered || (inviteReady && !dismissed))

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

  if (inCall) {
    return (
      <div className={`agent-launcher ${isOpen ? "is-hidden" : ""}`.trim()}>
        <button
          type="button"
          className="agent-launcher-orb"
          aria-label={callState === "speaking" ? "GrayNest is speaking. Open call" : "GrayNest is listening. Open call"}
          onClick={() => openAgent("talk")}
        >
          <AgentOrb size={60} />
        </button>
      </div>
    )
  }

  return (
    <div
      className={`agent-launcher ${isOpen ? "is-hidden" : ""}`.trim()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`agent-invite ${showInvite ? "is-visible" : ""}`.trim()} aria-hidden={!showInvite}>
        <ThinkingOrb state="listening" size={64} theme="auto" />
        <div className="agent-invite-body">
          <p className="agent-invite-title">Got a question? Instant answers.</p>
          <div className="agent-invite-actions">
            <button
              type="button"
              className="btn-primary"
              data-event="agent_call"
              tabIndex={showInvite ? 0 : -1}
              onClick={() => openAgent("talk", true)}
            >
              <Icon name="phone" size={16} /> Talk
            </button>
            <button
              type="button"
              className="btn-glass"
              data-event="agent_open"
              aria-label="Type instead"
              title="Type instead"
              tabIndex={showInvite ? 0 : -1}
              onClick={() => openAgent("chat", true)}
            >
              <Icon name="message" size={16} />
            </button>
          </div>
        </div>
        <button
          type="button"
          className="agent-invite-close"
          aria-label="Dismiss"
          tabIndex={showInvite ? 0 : -1}
          onClick={dismissInvite}
        >
          <Icon name="x" size={14} />
        </button>
      </div>
      <button
        type="button"
        className={`btn-glass agent-launcher-btn ${compact ? "is-compact" : ""} ${pulseOnce ? "agent-launcher-pulse" : ""}`.trim()}
        data-event="agent_open"
        aria-label="Ask GrayNest"
        onClick={() => openAgent("talk")}
      >
        <Icon name="message" size={20} />
        <span className="agent-launcher-label">Ask GrayNest</span>
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
