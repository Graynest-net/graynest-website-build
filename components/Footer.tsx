import Link from "next/link"

export function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden border-t border-[var(--gn-line)]">
      <div className="relative z-10 grid-12 py-[clamp(96px,12vh,160px)]">
        <div className="col-span-full mb-[clamp(48px,8vw,80px)]">
          <h2 className="h2">
            YOUR ROADMAP.
            <br />
            <span className="accent-word">OUR problem.</span>
          </h2>
        </div>

        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
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
            <p className="micro mb-6">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@graynest.co" className="footer-link">
                  hello@graynest.co
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
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="footer-link-muted">
              Privacy
            </Link>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dark%20Mode-Jl3dgrEza60F7WftOu1bn9DbKbFDqu.png"
              alt="GrayNest"
              width={24}
              height={24}
              className="h-6 w-6 opacity-30"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
