import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/erp-login",
          "/search",
          "/?s=",
          "/search/",
          "/thank-you",
          "/api/",
          "/sports1",
          "/sia",
          "/smia",
          "/mandatory-disclosures",
          "/terms-conditions",
          "/about/about1",
          "/academics/curriculum1",
          "/academics/learning/",
          "/academics/faculty/",
        ],
      },
    ],
    sitemap: "https://cambridge.seedlingschools.com/sitemap.xml",
  };
}
