"use client"

import Link from "next/link"
import { useRef, type MouseEvent, type ReactNode, type RefObject } from "react"

type MagneticButtonBaseProps = {
  children: ReactNode
  className?: string
  strength?: number
  /** Analytics event name, read by EventTracker. */
  event?: string
}

type MagneticAnchorProps = MagneticButtonBaseProps & {
  href: string
  type?: never
  onClick?: never
}

type MagneticNativeButtonProps = MagneticButtonBaseProps & {
  href?: never
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}

type MagneticButtonProps = MagneticAnchorProps | MagneticNativeButtonProps

/**
 * Applies magnetic pull toward the cursor within an 80px radius.
 */
function applyMagneticPull(
  node: HTMLElement,
  event: MouseEvent<HTMLElement>,
  strength: number
): void {
  if (window.matchMedia("(pointer: coarse)").matches) {
    return
  }

  const rect = node.getBoundingClientRect()
  const offsetX = event.clientX - (rect.left + rect.width / 2)
  const offsetY = event.clientY - (rect.top + rect.height / 2)
  const distance = Math.hypot(offsetX, offsetY)

  if (distance > 80) {
    node.style.transform = "translate3d(0, 0, 0)"
    return
  }

  const pullX = (offsetX / 80) * strength
  const pullY = (offsetY / 80) * strength
  node.style.transform = `translate3d(${pullX}px, ${pullY}px, 0)`
}

/**
 * Primary CTA that gently pulls toward the cursor (desktop only).
 */
export function MagneticButton(props: MagneticButtonProps) {
  const { children, className = "", strength = 8, event } = props
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null)

  if (strength < 0 || strength > 24) {
    throw new Error("MagneticButton strength must be between 0 and 24.")
  }

  const sharedClassName = `btn-primary magnetic-cta ${className}`.trim()

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const node = ref.current
    if (!node) {
      return
    }
    applyMagneticPull(node, event, strength)
  }

  const handleLeave = () => {
    const node = ref.current
    if (!node) {
      return
    }
    node.style.transform = "translate3d(0, 0, 0)"
  }

  if ("href" in props && typeof props.href === "string") {
    return (
      <Link
        href={props.href}
        ref={ref as RefObject<HTMLAnchorElement>}
        className={sharedClassName}
        data-event={event}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      ref={ref as RefObject<HTMLButtonElement>}
      type={props.type ?? "button"}
      className={sharedClassName}
      data-event={event}
      onClick={props.onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </button>
  )
}
