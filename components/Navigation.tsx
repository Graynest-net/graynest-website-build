'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      
      // Glass effect after 40px
      setScrolled(currentScrollY > 40)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-white/6 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
      style={{ height: '72px' }}
    >
      <div className="h-full px-8 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/brand/logo_icon.png"
            alt="GrayNest"
            className="h-8 w-8"
          />
        </Link>

        {/* Center navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="bg-white/6 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2">
            <div className="flex gap-6 text-sm font-medium text-white/80">
              <Link href="/ai-agents" className="hover:text-white transition">
                AI Agents
              </Link>
              <span className="text-white/30">·</span>
              <Link href="/software-engineering" className="hover:text-white transition">
                Software
              </Link>
              <span className="text-white/30">·</span>
              <a href="#" className="hover:text-white transition opacity-50">
                Work
              </a>
            </div>
          </div>
        </div>

        {/* Right CTA */}
        <button className="btn-primary hidden md:flex">
          Start a project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Mobile menu button */}
        <button className="md:hidden w-10 h-10 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
