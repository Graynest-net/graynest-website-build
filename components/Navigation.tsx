"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { Icon } from "@/components/Icon"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

/**
 * Fixed site header with brand gutters, theme toggle, and iOS safe-area insets.
 */
export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  // Keep the hero's own "Start a project" as the only primary CTA on screen;
  // reveal the header CTA once the hero has scrolled out of view.
  const [pastHero, setPastHero] = useState(false)

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

  useEffect(() => {
    const hero = document.querySelector(".hero-section")
    // Pages without a hero (e.g. legal) keep the header CTA visible.
    if (!hero) {
      setPastHero(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

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
            width={28}
            height={28}
            className="site-nav-mark"
            aria-hidden="true"
          />
          <span className="site-nav-wordmark">GrayNest</span>
        </Link>

        <div className="site-nav-center">
          <nav className="site-nav-glass-links" aria-label="Primary">
            <LiquidButton asChild size="default" className="site-nav-link site-nav-glass-btn">
              <Link href="/#scope">
                <span className="relative z-10">Scope Before Spend</span>
              </Link>
            </LiquidButton>
            <LiquidButton asChild size="default" className="site-nav-link site-nav-glass-btn">
              <Link href="/#phase-1">
                <span className="relative z-10">Phase-1 Ship</span>
              </Link>
            </LiquidButton>
          </nav>
        </div>

        <div className="site-nav-actions">
          <ThemeToggle />
          <div className={`site-nav-cta-slot ${pastHero ? "is-open" : ""}`.trim()}>
            <Link
              href="/contact"
              className="btn-primary nav-cta site-nav-cta"
              data-event="cta_project"
              aria-hidden={!pastHero}
              tabIndex={pastHero ? undefined : -1}
            >
              Start a project <Icon name="arrow-right" />
            </Link>
          </div>
          <LiquidButton
            type="button"
            size="icon"
            className="site-nav-menu-btn site-nav-glass-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </LiquidButton>
        </div>
      </div>

      <div
        className={`mobile-menu md:hidden ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-links">
          <Link href="/#scope" onClick={() => setMenuOpen(false)}>
            Scope Before Spend
          </Link>
          <Link href="/#phase-1" onClick={() => setMenuOpen(false)}>
            Phase-1 Ship
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
