import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Headline } from '@/components/Headline'
import { CoreGlow } from '@/components/CoreGlow'
import Link from 'next/link'

const capabilities = ['Web products', 'Mobile apps', 'Backend systems', 'Internal tools']

export default function SoftwareEngineeringPage() {
  return (
    <main className="bg-[#16161a]">
      <Navigation />
      <section className="hero-section pt-20 relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        <div className="grid-12 relative z-10">
          <div className="col-span-full lg:col-span-9 space-y-8">
            <p className="micro flex items-center gap-3"><CoreGlow size={12} /> SOFTWARE / 02</p>
            <Headline line1="GOOD SOFTWARE" line2="SHIPS with intent." accent="with intent." />
            <p className="body-lg">Product engineering for founders, startups, and teams who need the right thing built — web, mobile, backend, and AI where it pays off.</p>
            <div className="flex flex-wrap gap-4"><Link href="/contact" className="btn-primary">Start a project <span aria-hidden="true">→</span></Link><Link href="/contact" className="btn-glass">Book a call</Link></div>
          </div>
        </div>
      </section>
      <section className="section-padding border-t border-white/8">
        <div className="grid-12 items-start"><div className="col-span-full lg:col-span-5"><p className="micro mb-6">THE BUILD / 01</p><h2 className="h2">FROM FIRST<br /><span className="accent-word">commit.</span></h2></div><div className="col-span-full lg:col-span-7 grid sm:grid-cols-2 gap-4 mt-12 lg:mt-0">{capabilities.map((item) => <div className="feature-card" key={item}><CoreGlow size={18} pulse={false} /><h3 className="h3 mt-8">{item}</h3><p className="body mt-3">A focused build shaped around the people who will use it and the business it needs to move.</p></div>)}</div></div>
      </section>
      <section className="section-padding bg-[#111114]"><div className="grid-12 items-center"><div className="col-span-full lg:col-span-7"><p className="micro mb-6">AI / WHERE IT PAYS</p><h2 className="h2">NO AI<br /><span className="accent-word">theatre.</span></h2><p className="body-lg mt-8">We use AI to remove friction, sharpen decisions, and create new product value. If it does not improve the experience, it does not ship.</p></div><div className="col-span-full lg:col-span-5 mt-12 lg:mt-0"><div className="feature-card space-y-8"><div className="flex items-center gap-3"><CoreGlow size={18} /><span className="micro">A PRACTICAL SYSTEM</span></div><div className="h-px bg-white/10" /><p className="h3">Clear thinking in. Useful software out.</p><p className="body">Discovery, design, engineering, and launch in one accountable team.</p></div></div></div></section>
      <section className="section-padding"><div className="grid-12"><div className="col-span-full text-center"><h2 className="h2">READY TO<br /><span className="accent-word">ship?</span></h2><p className="body-lg mx-auto mt-8">Tell us what needs to exist next.</p><Link href="/contact" className="btn-primary mt-10">Start a project <span>→</span></Link></div></div></section>
      <Footer />
    </main>
  )
}

export const metadata = { title: 'Software Engineering – GrayNest', description: 'Custom software engineering with AI integration.' }

