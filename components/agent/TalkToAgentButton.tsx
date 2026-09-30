"use client"

import type { ReactNode } from "react"
import { MagneticButton } from "@/components/MagneticButton"
import { Icon } from "@/components/Icon"
import { useAgent, type AgentMode } from "@/components/agent/AgentContext"

interface TalkToAgentButtonProps {
  mode?: AgentMode
  variant?: "primary" | "glass"
  className?: string
  children?: ReactNode
}

/**
 * Primary CTA that opens the sitewide ElevenLabs agent drawer.
 */
export function TalkToAgentButton({
  mode = "talk",
  variant = "primary",
  className = "",
  children = (
    <><Icon name="message" /> Talk to our agent</>
  ),
}: TalkToAgentButtonProps) {
  const { openAgent } = useAgent()

  if (variant === "glass") {
    return (
      <button
        type="button"
        className={`btn-glass ${className}`.trim()}
        data-event="agent_open"
        onClick={() => openAgent(mode)}
      >
        {children}
      </button>
    )
  }

  return (
    <MagneticButton
      type="button"
      className={className}
      onClick={() => openAgent(mode)}
    >
      {children}
    </MagneticButton>
  )
}
