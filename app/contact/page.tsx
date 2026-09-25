import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CoreGlow } from '@/components/CoreGlow'

export default function ContactPage() {
  return <main className="bg-[#16161a]"><Navigation /><section className="hero-section pt-20"><div className="grid-12"><div className="col-span-full lg:col-span-8 space-y-8"><p className="micro flex items-center gap-3"><CoreGlow size={12} /> START A PROJECT</p><h1 className="display-line">LET&apos;S MAKE<br /><span className="accent-word">something.</span></h1><p className="body-lg">Tell us what you are building, what is stuck, or what needs to exist next.</p><form className="space-y-5 max-w-2xl" action="mailto:hello@graynest.co" method="post" encType="text/plain"><label className="block"><span className="micro block mb-2">YOUR NAME</span><input className="contact-input" name="name" required /></label><label className="block"><span className="micro block mb-2">EMAIL</span><input className="contact-input" type="email" name="email" required /></label><label className="block"><span className="micro block mb-2">WHAT ARE WE MAKING?</span><textarea className="contact-input min-h-36" name="message" required /></label><button className="btn-primary" type="submit">Send inquiry <span aria-hidden="true">→</span></button></form></div></div></section><Footer /></main>
}

export const metadata = { title: 'Start a Project – GrayNest', description: 'Start a software or AI agents project with GrayNest.' }
