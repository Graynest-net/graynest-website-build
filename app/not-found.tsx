import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function NotFound() {
  return <main className="bg-[#16161a]"><Navigation /><section className="hero-section pt-20"><div className="grid-12"><div className="col-span-full"><p className="micro mb-6">ERROR / 404</p><h1 className="display-line">THIS PAGE<br /><span className="accent-word">shipped.</span></h1><p className="body-lg mt-8">But it is not here.</p><Link href="/" className="btn-primary mt-10">Back home <span aria-hidden="true">→</span></Link></div></div></section><Footer /></main>
}
