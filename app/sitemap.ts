import type { MetadataRoute } from "next"

const BASE = "https://www.graynest.co"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/software-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/teardown/ar`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/teardown/en`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ]
}
