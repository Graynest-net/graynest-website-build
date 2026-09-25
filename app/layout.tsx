import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { SmoothScroll } from "@/components/SmoothScroll"
import "./globals.css"

export const metadata: Metadata = {
  title: "GrayNest – Software, AI Agents",
  description: "AI agents and custom product engineering with AI integration for startups and enterprises.",
  generator: "v0.app",
  icons: {
    icon: "/icon-dark-32x32.png",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#16161a",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
