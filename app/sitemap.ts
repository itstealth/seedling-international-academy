import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/wordpress";

const BASE_URL = "https://cambridge.seedlingschools.com";

export const revalidate = 600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts(100);
  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    // ── Home ──────────────────────────────────────────────────────────────
    {
      url: BASE_URL,
      changeFrequency: "daily",
      priority: 1.0,
    },

    // ── Campuses ──────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/campuses`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/campuses/sia`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/campuses/smia`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Admissions ────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/admissions`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/admissions/apply`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/admissions/process`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/admissions/fee-structure`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/admissions/transport`,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── Academics ─────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/academics/early-years`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/academics/primary`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/academics/lower-secondary`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/academics/upper-secondary`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/academics/advanced`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/academics/roll-of-honour`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── About ─────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about/leadership`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about/mission`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about/affiliation`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/about/welcome-from-the-head`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/about/standards`,
      changeFrequency: "yearly",
      priority: 0.6,
    },

    // ── School Life & Other Top-Level Pages ───────────────────────────────
    {
      url: `${BASE_URL}/curriculum`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/school-life`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/cambridge-canvas`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/alumni`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faculty`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/learning-support`,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── News, Blog & Career ───────────────────────────────────────────────
    {
      url: `${BASE_URL}/news-and-events`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/news-and-events/news`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/news-and-events/events`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/career`,
      changeFrequency: "weekly",
      priority: 0.6,
    },

    // ── Contact ───────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/contact-us`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Legal / Compliance ────────────────────────────────────────────────
    {
      url: `${BASE_URL}/policies`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/mandatory-disclosures`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...blogPosts,
  ];
}
