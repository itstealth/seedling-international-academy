import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/?s=",
          "/search/",
          "/erp-login",
          "/thank-you",
          "/api/",
        ],
      },
    ],
    sitemap: "https://cambridge.seedlingschools.com/sitemap.xml",
  };
}
