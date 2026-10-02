"use client"

import type { ReactNode } from "react"
import { MotionConfig } from "motion/react"

import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { BotMessageSquare } from "@/components/animate-ui/icons/bot-message-square"
import { Blocks } from "@/components/animate-ui/icons/blocks"
import { PhoneCall } from "@/components/animate-ui/icons/phone-call"
import { MessageCircleMore } from "@/components/animate-ui/icons/message-circle-more"
import { MessageSquareHeart } from "@/components/animate-ui/icons/message-square-heart"
import { MessageSquareText } from "@/components/animate-ui/icons/message-square-text"
import { LayoutDashboard } from "@/components/animate-ui/icons/layout-dashboard"
import { Terminal } from "@/components/animate-ui/icons/terminal"
import { Kanban } from "@/components/animate-ui/icons/kanban"
import { Sparkles } from "@/components/animate-ui/icons/sparkles"

const ICONS = {
  "bot-message-square": BotMessageSquare,
  blocks: Blocks,
  "phone-call": PhoneCall,
  "message-circle-more": MessageCircleMore,
  "message-square-heart": MessageSquareHeart,
  "message-square-text": MessageSquareText,
  "layout-dashboard": LayoutDashboard,
  terminal: Terminal,
  kanban: Kanban,
  sparkles: Sparkles,
} as const

export type ServiceIconName = keyof typeof ICONS

/**
 * A service row whose icons animate together while the row is hovered.
 * Motion is user-triggered, so it stays inside the one-thing-moving budget.
 */
export function ServiceRowMotion({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <AnimateIcon animateOnHover asChild>
        <article className={className}>{children}</article>
      </AnimateIcon>
    </MotionConfig>
  )
}

/** The large service mark; also plays once on scroll-in so touch visitors see it move. */
export function ServiceMark({ name }: { name: ServiceIconName }) {
  const Icon = ICONS[name]
  return (
    <span className="service-mark" aria-hidden="true">
      <Icon size={26} animateOnView animateOnViewOnce animateOnViewMargin="-20%" />
    </span>
  )
}

/** A capability chip's icon; animates with its row, or on its own when the chip is hovered. */
export function CapIcon({ name }: { name: ServiceIconName }) {
  const Icon = ICONS[name]
  return <Icon size={15} aria-hidden="true" />
}
