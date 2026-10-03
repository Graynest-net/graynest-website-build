import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { MediaSlot } from "@/components/MediaSlot"
import { Icon } from "@/components/Icon"
import Link from "next/link"

export default function NotFound() {
  return (
    <main id="main" className="has-dark-hero">
      <Navigation />
      <section className="not-found-stage" data-theme="dark">
        <MediaSlot
          id="global.404"
          type="image"
          aspect="16:9"
          register="system"
          alt="A single off-white hexagon tile lying face-down on a dark floor with red light leaking from underneath"
          className="cta-stage-media"
          priority
        />
        <div className="grid-12 w-full">
          <div className="col-span-full">
            <p className="micro mb-6">ERROR / 404</p>
            <h1 className="display-line">
              THIS PAGE
              <br />
              <span className="accent-word">shipped.</span>
            </h1>
            <p className="body-lg mt-8">But it is not here.</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
              <Link href="/" className="btn-primary">
                <Icon name="arrow-left" /> Back home
              </Link>
              <Link href="/contact" className="btn-glass">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
