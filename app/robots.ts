import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/auth/*"],
      disallow: ["/dashboard/", "/api/"], // Don't index private user areas
    },
    sitemap: "https://formy-ai.vercel.app/sitemap.xml",
  };
}
