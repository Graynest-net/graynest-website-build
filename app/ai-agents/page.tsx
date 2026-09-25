import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Headline } from '@/components/Headline'
import { MediaSlot } from '@/components/MediaSlot'
import { CoreGlow } from '@/components/CoreGlow'
import Link from 'next/link'

export default function AIAgentsPage() {
  return (
    <main className="bg-[#16161a]">
      <Navigation />
      <section className="hero-section pt-20 relative overflow-hidden">
        <div className="absolute inset-0 falloff-gradient -z-10" />
        <div className="grid-12 relative z-10 items-center">
          <div className="col-span-full lg:col-span-7 space-y-8">
            <p className="micro flex items-center gap-3"><CoreGlow size={12} /> AI AGENTS / 01</p>
            <Headline line1="YOUR PHONE" line2="JUST GOT a team." accent="a team." />
            <p className="body-lg">Voice and chat agents for retail, clinics, restaurants, and small companies in Palestine. They speak your language and never miss a call.</p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Talk to our agent <span aria-hidden="true">→</span></button>
              <Link href="/contact" className="btn-glass">Book a demo</Link>
            </div>
          </div>
          <div className="col-span-full lg:col-span-5 mt-12 lg:mt-0"><MediaSlot id="agents.hero" type="image" aspect="4:5" register="system" alt="GrayNest agent persona placeholder" /></div>
        </div>
      </section>
      <section className="section-padding border-t border-white/8">
        <div className="grid-12">
          <div className="col-span-full lg:col-span-5"><p className="micro mb-6">THE SYSTEM / 02</p><h2 className="h2">ALWAYS ON.<br /><span className="accent-word">Always human.</span></h2></div>
          <div className="col-span-full lg:col-span-7 grid sm:grid-cols-2 gap-4 mt-12 lg:mt-0">
            {['Phone calls', 'WhatsApp', 'Instagram + Facebook', 'Website chat'].map((item) => <div key={item} className="feature-card"><CoreGlow size={18} /><h3 className="h3 mt-8">{item}</h3><p className="body mt-3">A consistent answer, on the channel your customers already use.</p></div>)}
          </div>
        </div>
      </section>
      <section className="section-padding bg-[#111114]">
        <div className="grid-12 items-center"><div className="col-span-full lg:col-span-6"><p className="micro mb-6">A CONVERSATION / 03</p><h2 className="h2">THE FIRST<br /><span className="accent-word">hello.</span></h2><p className="body-lg mt-8">Palestinian Arabic or English. Formal or familiar. Your agent carries the tone of your business into every conversation.</p></div><div className="col-span-full lg:col-span-6 mt-12 lg:mt-0"><div className="feature-card space-y-5"><div className="flex justify-between micro"><span>LIVE DEMO</span><span>AR / EN</span></div><div dir="rtl" lang="ar" className="bg-[#2b2b2f] rounded-xl p-5 text-lg">أهلين! كيف فيني أساعدك اليوم؟</div><div className="bg-[#ea2e00] rounded-xl p-5 ml-12 text-white">I'd like to book a table for tonight.</div><div className="flex gap-2 items-center micro"><span className="inline-block w-2 h-2 rounded-full bg-[#ea2e00]" /> typing...</div></div></div></div>
      </section>
      <section className="section-padding"><div className="grid-12"><div className="col-span-full text-center"><h2 className="h2">HEAR IT<br /><span className="accent-word">yourself.</span></h2><p className="body-lg mx-auto mt-8">The same agent that answers this site can answer yours.</p><Link href="/contact" className="btn-primary mt-10">Book a demo <span>→</span></Link></div></div></section>
      <Footer />
    </main>
  )
}

export const metadata = { title: 'AI Agents – GrayNest', description: 'Voice and chat AI agents for businesses in Palestine.' }
