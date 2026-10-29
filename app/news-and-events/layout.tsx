import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://cambridge.seedlingschools.com/news-and-events" },
  title: "News & Events â€” What's Happening at Seedling",
  description:
    "Stay up to date with the latest news, events, achievements and announcements from Seedling International Academy â€” Jaipur's Cambridge school.",
  openGraph: {
    title: "News & Events | Seedling International Academy",
    description:
      "Latest news, events, achievements and announcements from Seedling International Academy â€” Jaipur's Cambridge school.",
    url: "https://cambridge.seedlingschools.com/news-and-events",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "News and Events at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Events | Seedling International Academy",
    description: "Latest news and events from Seedling International Academy, Jaipur.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
};

export default function NewsEventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
