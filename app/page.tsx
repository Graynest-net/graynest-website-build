import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Headline } from '@/components/Headline'
import { CoreGlow } from '@/components/CoreGlow'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-[#16161a]">
      <Navigation />

      {/* Hero section */}
      <section className="hero-section pt-20 relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        
        <div className="grid-12 relative z-10">
          <div className="col-span-full md:col-span-8 space-y-8 hero-copy">
            <Headline
              line1="WE DESIGN, BUILD"
              line2="AND SHIP WITH AI."
              accent="AI."
            />
            <p className="body-lg max-w-2xl">
              Custom software for startups and enterprises. AI agents that answer calls, texts, and chat in Palestinian Arabic and English.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start a project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <button className="btn-glass flex items-center gap-2">
                <CoreGlow size={12} pulse={false} />
                Ask GrayNest
              </button>
            </div>
          </div>
        </div>

        {/* Right side media */}
        <div className="hero-orb pointer-events-none absolute right-[-18%] top-[18%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(234,46,0,.28),rgba(234,46,0,.08)_35%,transparent_70%)] blur-[2px] md:right-[-6%] md:top-1/2 md:h-[680px] md:w-[680px] md:-translate-y-1/2" aria-hidden="true" />
      </section>

      {/* Two services teaser */}
      <section className="section-padding relative overflow-hidden">
        <div className="grid-12">
          <div className="col-span-full space-y-4 mb-16">
            <h2 className="h2">TWO WAYS TO WORK.</h2>
          </div>

          {/* AI Agents card */}
          <div className="col-span-full md:col-span-6 feature-card reveal-card group cursor-pointer">
            <div className="space-y-4">
              <CoreGlow size={24} pulse={true} />
              <h3 className="h3">AI Agents</h3>
              <p className="body">
                Voice and chat agents that handle calls, WhatsApp, Instagram, and site chat. Speak Palestinian Arabic and English.
              </p>
              <Link href="/ai-agents" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition group">
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Software Engineering card */}
          <div className="col-span-full md:col-span-6 feature-card reveal-card group cursor-pointer">
            <div className="space-y-4">
              <CoreGlow size={24} pulse={true} />
              <h3 className="h3">Software Engineering</h3>
              <p className="body">
                Custom product engineering with AI built in where it pays. Web, mobile, backend, internal tools for ambitious teams.
              </p>
              <Link href="/software-engineering" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition group">
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="section-padding relative overflow-hidden border-t border-white/8">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        
        <div className="grid-12 relative z-10">
          <div className="col-span-full md:col-span-8 mx-auto text-center">
            <h2 className="h2 mb-8">
              READY TO
              <br />
              <span className="accent-word">TALK?</span>
            </h2>
            <p className="body-lg mx-auto mb-12">
              Start a project, book a demo, or ask our agent a question. Let&apos;s build something together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start a project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <Link href="/contact" className="btn-glass">
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Live agent launcher - placeholder */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="btn-glass flex items-center gap-2 animate-pulse" style={{ animationDuration: '2.4s' }}>
          <CoreGlow size={12} pulse={true} />
          Ask GrayNest
        </button>
      </div>
    </main>
  )
}
