import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#16161a] to-[#111114] border-t border-white/8 overflow-hidden">
      {/* Hex background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="footerHex" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon
                points="40,0 70,20 70,60 40,80 10,60 10,20"
                fill="none"
                stroke="rgba(250,250,250,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerHex)" />
        </svg>
      </div>

      <div className="relative z-10 grid-12 py-[clamp(96px,12vh,160px)]">
        {/* Giant headline */}
        <div className="col-span-full mb-[clamp(48px,8vw,80px)]">
          <h2 className="h2 leading-tight">
            YOUR ROADMAP.
            <br />
            <span className="accent-word">OUR problem.</span>
          </h2>
        </div>

        {/* Three columns */}
        <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Services */}
          <div>
            <p className="micro mb-6">Services</p>
            <ul className="space-y-3">
              <li>
                <Link href="/ai-agents" className="text-white/70 hover:text-white transition">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/software-engineering" className="text-white/70 hover:text-white transition">
                  Software Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="micro mb-6">Company</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="micro mb-6">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@graynest.co" className="text-white/70 hover:text-white transition">
                  hello@graynest.co
                </a>
              </li>
              <li>
                <a href="https://wa.me/" className="text-white/70 hover:text-white transition">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="col-span-full border-t border-white/8 pt-12 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-white/50">© GrayNest. All rights reserved.</p>

          {/* Socials */}
          <div className="flex gap-6 my-6 md:my-0">
            <a href="https://instagram.com/graynestcomp" className="text-white/50 hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="text-white/50 hover:text-white transition">
              Facebook
            </a>
            <a href="#" className="text-white/50 hover:text-white transition">
              LinkedIn
            </a>
          </div>

          {/* Privacy and logo */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition">
              Privacy
            </Link>
            <img
              src="/brand/logo_icon.png"
              alt="GrayNest"
              className="h-6 w-6 opacity-30"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
