"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme/ThemeProvider"

/**
 * Toggles between light and dark site themes.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === "light"

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Dark mode" : "Light mode"}
    >
      {isLight ? <Moon size={18} strokeWidth={1.8} aria-hidden="true" /> : <Sun size={18} strokeWidth={1.8} aria-hidden="true" />}
    </button>
  )
}
