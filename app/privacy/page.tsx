import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function PrivacyPage() {
  return <main className="bg-[#16161a]"><Navigation /><article className="section-padding max-w-4xl mx-auto"><p className="micro mb-6">GRAYNEST / PRIVACY</p><h1 className="display-line mb-12">YOUR DATA.<br /><span className="accent-word">Your say.</span></h1><div className="space-y-8 body"><p>GrayNest respects your privacy. We collect only the information you choose to share with us when you contact the team or use a GrayNest demo.</p><h2 className="h3 text-white">What we use it for</h2><p>We use contact details and messages to respond to inquiries, understand project needs, and provide requested demos. We do not sell personal information.</p><h2 className="h3 text-white">Questions</h2><p>For privacy questions or requests, email <a className="text-white underline" href="mailto:hello@graynest.co">hello@graynest.co</a>.</p><p className="micro">Last updated September 2026</p></div></article><Footer /></main>
}

export const metadata = { title: 'Privacy – GrayNest', description: 'GrayNest privacy policy.' }
