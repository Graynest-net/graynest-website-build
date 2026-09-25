import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CoreGlow } from "@/components/CoreGlow"
import { Reveal } from "@/components/Reveal"
import { MagneticButton } from "@/components/MagneticButton"
import { HexGrid } from "@/components/HexGrid"

/**
 * Contact / start-a-project page with clearer vertical rhythm.
 */
export default function ContactPage() {
  return (
    <main id="main" className="bg-[var(--gn-ink-900)]">
      <Navigation />
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        <HexGrid opacity={0.03} />
        <div className="grid-12 relative z-10">
          <Reveal className="col-span-full lg:col-span-8 space-y-8">
            <p className="micro flex items-center gap-3">
              <CoreGlow size={12} /> START A PROJECT
            </p>
            <h1 className="display-line">
              LET&apos;S MAKE
              <br />
              <span className="accent-word">something.</span>
            </h1>
            <p className="body-lg">
              Tell us what you are building, what is stuck, or what needs to exist next.
            </p>
            <form
              className="space-y-5 max-w-2xl"
              action="mailto:hello@graynest.co"
              method="post"
              encType="text/plain"
            >
              <label className="block">
                <span className="micro mb-2 block">YOUR NAME</span>
                <input className="contact-input" name="name" required />
              </label>
              <label className="block">
                <span className="micro mb-2 block">EMAIL</span>
                <input className="contact-input" type="email" name="email" required />
              </label>
              <label className="block">
                <span className="micro mb-2 block">WHAT ARE WE MAKING?</span>
                <textarea className="contact-input min-h-36" name="message" required />
              </label>
              <MagneticButton type="submit">
                Send inquiry
                <span aria-hidden="true">→</span>
              </MagneticButton>
            </form>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export const metadata = {
  title: "Start a Project – GrayNest",
  description: "Start a software or AI agents project with GrayNest.",
}
