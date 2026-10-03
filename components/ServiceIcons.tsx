"use client"

import type { ReactNode } from "react"
import { MotionConfig } from "motion/react"

import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { LayoutDashboard } from "@/components/animate-ui/icons/layout-dashboard"
import { Terminal } from "@/components/animate-ui/icons/terminal"
import { Kanban } from "@/components/animate-ui/icons/kanban"
import { Workflow } from "@/components/animate-ui/icons/workflow"

const ICONS = {
  "layout-dashboard": LayoutDashboard,
  terminal: Terminal,
  kanban: Kanban,
  workflow: Workflow,
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
      <Icon size={28} animateOnView animateOnViewOnce animateOnViewMargin="-20%" />
    </span>
  )
}
