"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme/ThemeToggle"

/**
 * Fixed site header with brand gutters, theme toggle, and iOS safe-area insets.
 */
export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    /**
     * Tracks scroll direction for hide/show and glass treatment after 40px.
     */
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !menuOpen) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setScrolled(currentScrollY > 40)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY, menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header
      className={[
        "site-nav",
        hidden && !menuOpen ? "site-nav-hidden" : "",
        scrolled || menuOpen ? "site-nav-glass" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-brand">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Mode-Jl3dgrEza60F7WftOu1bn9DbKbFDqu.png"
            alt=""
            className="site-nav-mark"
            aria-hidden="true"
          />
          <span className="site-nav-wordmark">GrayNest</span>
        </Link>

        <div className="site-nav-center">
          <div className="site-nav-pill">
            <Link href="/ai-agents" className="site-nav-link">
              AI Agents
            </Link>
            <span className="site-nav-dot" aria-hidden="true">
              ·
            </span>
            <Link href="/software-engineering" className="site-nav-link">
              Software
            </Link>
          </div>
        </div>

        <div className="site-nav-actions">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary nav-cta site-nav-cta">
            Start a project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
          <button
            type="button"
            className="site-nav-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d={menuOpen ? "M5 5l14 14M19 5L5 19" : "M3 12h18M3 6h18M3 18h18"}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu md:hidden ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-links">
          <Link href="/ai-agents" onClick={() => setMenuOpen(false)}>
            AI Agents
          </Link>
          <Link href="/software-engineering" onClick={() => setMenuOpen(false)}>
            Software
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Start a project
          </Link>
        </div>
        <div className="mobile-menu-footer">
          <ThemeToggle />
          <a className="mobile-menu-contact" href="mailto:hello@graynest.co">
            hello@graynest.co
          </a>
        </div>
      </div>
    </header>
  )
}
