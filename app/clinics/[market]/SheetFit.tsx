import type { ReactNode } from "react"

/**
 * Wrapper for the fixed A4 sheet. The on-screen fit is handled entirely in CSS
 * (a `zoom` ladder on `.sheet` in sheet.module.css) so it is stable before
 * hydration and in static export — no JS scaling that could compound or flash.
 */
export function SheetFit({ children }: { children: ReactNode }) {
  return <div data-sheet-fit>{children}</div>
}
