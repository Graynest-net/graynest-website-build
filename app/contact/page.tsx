import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CoreGlow } from "@/components/CoreGlow"
import { Reveal } from "@/components/Reveal"
import { MagneticButton } from "@/components/MagneticButton"
import { Icon } from "@/components/Icon"


/**
 * Contact / start-a-project page with clearer vertical rhythm.
 */
export default function ContactPage() {
  return (
    <main id="main">
      <Navigation />
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />

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
              className="glass space-y-5 max-w-2xl rounded-[28px] p-6 md:p-8"
              action="mailto:hello@graynest.co"
              method="post"
              encType="text/plain"
            >
              <label className="block">
                <span className="micro mb-2 block">YOUR NAME</span>
                <input className="contact-input" name="name" autoComplete="name" placeholder="Full name…" required />
              </label>
              <label className="block">
                <span className="micro mb-2 block">EMAIL</span>
                <input className="contact-input" type="email" name="email" autoComplete="email" spellCheck={false} placeholder="you@company.com…" required />
              </label>
              <label className="block">
                <span className="micro mb-2 block">WHAT ARE WE MAKING?</span>
                <textarea className="contact-input min-h-36" name="message" placeholder="A brief on what you need…" required />
              </label>
              <MagneticButton type="submit">
                <Icon name="send" /> Send inquiry
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
