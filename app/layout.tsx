import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { SmoothScroll } from "@/components/SmoothScroll"
import { AgentAppShell } from "@/components/agent/AgentAppShell"
import { ThemeProvider, themeInitScript } from "@/components/theme/ThemeProvider"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.graynest.co"),
  title: "GrayNest – AI Voice Agents & Custom Software, Palestine",
  description:
    "Arabic and English voice and chat agents that answer your calls and WhatsApp, plus custom software for businesses and startups in Palestine.",
  alternates: { canonical: "/" },
}

// Organization facts for search engines and assistants. Only list what the site states.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.graynest.co/#organization",
      name: "GrayNest",
      url: "https://www.graynest.co",
      logo: "https://www.graynest.co/icon.png",
      email: "hello@graynest.co",
      description:
        "GrayNest builds voice and chat AI agents that answer calls and messages in Palestinian Arabic and English, and custom software for businesses and startups in Palestine.",
      areaServed: { "@type": "Country", name: "Palestine" },
      knowsLanguage: ["ar", "en"],
      sameAs: ["https://instagram.com/graynestcomp"],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI voice and chat agents",
            url: "https://www.graynest.co/ai-agents",
            serviceType: "AI phone and messaging agents",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom software engineering",
            url: "https://www.graynest.co/software-engineering",
            serviceType: "Web, mobile, backend and internal tools development",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.graynest.co/#website",
      url: "https://www.graynest.co",
      name: "GrayNest",
      publisher: { "@id": "https://www.graynest.co/#organization" },
      inLanguage: "en",
    },
  ],
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F5F1" },
    { media: "(prefers-color-scheme: dark)", color: "#16161A" },
  ],
  width: "device-width",
  initialScale: 1,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link
          rel="preload"
          href="/fonts/Satoshi-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Satoshi-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c") }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <AgentAppShell>
            <SmoothScroll>{children}</SmoothScroll>
          </AgentAppShell>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
