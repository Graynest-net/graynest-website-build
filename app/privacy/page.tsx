import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

export default function PrivacyPage() {
  return (
    <main id="main">
      <Navigation />
      <article className="section-padding max-w-4xl mx-auto px-[var(--gn-gutter-left)]">
        <p className="micro mb-6">GRAYNEST / PRIVACY</p>
        <h1 className="display-line mb-12">
          YOUR DATA.
          <br />
          <span className="accent-word">Your say.</span>
        </h1>
        <div className="space-y-8 body">
          <p>
            GrayNest respects your privacy. This page describes what this website collects, what the
            GrayNest agent does with what you say to it, and which third parties are involved.
          </p>
          <h2 className="h3 text-[var(--gn-bone-50)]">What you send us</h2>
          <p>
            When you use the contact form or email us, we receive the details you type. We use them to
            respond to inquiries, understand project needs, and provide requested demos. We do not sell
            personal information.
          </p>
          <h2 className="h3 text-[var(--gn-bone-50)]">The GrayNest agent</h2>
          <p>
            Starting a voice or chat session with the agent sends your microphone audio or typed
            messages to ElevenLabs, the provider that runs the conversation on our behalf. Their
            handling of that data is governed by their own privacy policy. GrayNest does not store
            recordings of these sessions.
          </p>
          <h2 className="h3 text-[var(--gn-bone-50)]">Analytics</h2>
          <p>
            This site uses Vercel Analytics to count page views and see which pages are read. It is
            privacy-friendly by design: it sets no cookies and does not build a profile of you across
            sites.
          </p>
          <h2 className="h3 text-[var(--gn-bone-50)]">Questions</h2>
          <p>
            For privacy questions or requests, email{" "}
            <a className="text-[var(--gn-bone-50)] underline" href="mailto:hello@graynest.co">
              hello@graynest.co
            </a>
            .
          </p>
          <p className="micro">Last updated September 2026</p>
        </div>
      </article>
      <Footer />
    </main>
  )
}

export const metadata = {
  title: "Privacy – GrayNest",
  description: "GrayNest privacy policy.",
}
