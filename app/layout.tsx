import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { SmoothScroll } from "@/components/SmoothScroll"
import { AgentAppShell } from "@/components/agent/AgentAppShell"
import { ThemeProvider, themeInitScript } from "@/components/theme/ThemeProvider"
import "./globals.css"

export const metadata: Metadata = {
  title: "GrayNest – Software, AI Agents",
  description: "AI agents and custom product engineering with AI integration for startups and enterprises.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
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
