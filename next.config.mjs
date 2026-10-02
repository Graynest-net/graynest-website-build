/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GrayNest no longer sells AI agents as a service; keep old links landing somewhere useful.
  async redirects() {
    return [{ source: "/ai-agents", destination: "/software-engineering", permanent: true }]
  },
}

export default nextConfig
