import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.graynest.co/sitemap.xml",
    host: "https://www.graynest.co",
  }
}
