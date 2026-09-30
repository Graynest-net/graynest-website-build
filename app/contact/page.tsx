import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CoreGlow } from "@/components/CoreGlow"
import { Reveal } from "@/components/Reveal"
import { ContactForm } from "./ContactForm"


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
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export const metadata = {
  title: "Contact GrayNest – Start a Software or AI Agent Project",
  description:
    "Tell us what you're building: an AI agent for your calls and messages, or custom software. Email hello@graynest.co or talk to our agent now.",
  alternates: { canonical: "/contact" },
}
