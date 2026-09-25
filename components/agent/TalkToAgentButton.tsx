"use client"

import type { ReactNode } from "react"
import { MagneticButton } from "@/components/MagneticButton"
import { useAgent, type AgentMode } from "@/components/agent/AgentContext"

interface TalkToAgentButtonProps {
  mode?: AgentMode
  className?: string
  children?: ReactNode
}

/**
 * Primary CTA that opens the sitewide ElevenLabs agent drawer.
 */
export function TalkToAgentButton({
  mode = "talk",
  className = "",
  children = (
    <>
      Talk to our agent
      <span aria-hidden="true">→</span>
    </>
  ),
}: TalkToAgentButtonProps) {
  const { openAgent } = useAgent()

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
