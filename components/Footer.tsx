import Link from "next/link"

/**
 * Site footer with theme-aware surfaces and muted link styles.
 */
export function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden border-t border-[var(--gn-line)]">
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="footerHex" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon
                points="40,0 70,20 70,60 40,80 10,60 10,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerHex)" />
        </svg>
      </div>

      <div className="relative z-10 grid-12 py-[clamp(96px,12vh,160px)]">
        <div className="col-span-full mb-[clamp(48px,8vw,80px)]">
          <h2 className="h2 leading-tight">
            YOUR ROADMAP.
            <br />
            <span className="accent-word">OUR problem.</span>
          </h2>
        </div>

        <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="micro mb-6">Services</p>
            <ul className="space-y-3">
              <li>
                <Link href="/ai-agents" className="footer-link">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/software-engineering" className="footer-link">
                  Software Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="micro mb-6">Company</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="micro mb-6">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@graynest.co" className="footer-link">
                  hello@graynest.co
                </a>
              </li>
              <li>
                <a href="https://wa.me/" className="footer-link">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-full border-t border-[var(--gn-line)] pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[var(--gn-text-3)]">© GrayNest. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="https://instagram.com/graynestcomp" className="footer-link-muted">
              Instagram
            </a>
            <a href="#" className="footer-link-muted">
              Facebook
            </a>
            <a href="#" className="footer-link-muted">
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="footer-link-muted">
              Privacy
            </Link>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Mode-Jl3dgrEza60F7WftOu1bn9DbKbFDqu.png"
              alt="GrayNest"
              className="h-6 w-6 opacity-30"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
