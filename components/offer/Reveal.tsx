"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"

/**
 * Subtle scroll-reveal: fades a block up from an already-legible baseline once,
 * when it enters view. Reduced motion and no-JS both leave it fully visible.
 */
export function Reveal({
  children,
  as,
  className,
  delay = 0,
  ...rest
}: {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
} & Record<string, unknown>) {
  const Tag = (as ?? "div") as ElementType
  const ref = useRef<HTMLElement>(null)
  const [inview, setInview] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setInview(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInview(true)
            io.disconnect()
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal=""
      data-inview={inview ? "" : undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
