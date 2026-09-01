import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic & Assessment Standards | Seedling Cambridge Jaipur",
  description:
    "How Seedling grades and reports: criterion-referenced marking, internal moderation, Cambridge-benchmarked boundaries and transparent progress reporting.",
  openGraph: {
    title: "Academic & Assessment Standards | Seedling Cambridge Jaipur",
    description:
      "How Seedling grades and reports: criterion-referenced marking, internal moderation, Cambridge-benchmarked boundaries and transparent progress reporting.",
    url: "https://cambridge.seedlingschools.com/about/standards",
    images: [{ url: "/assets/about/about-banner.jpg", width: 1200, height: 630, alt: "Academic Standards at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic & Assessment Standards | Seedling Cambridge Jaipur",
    description: "Academic and assessment standards at Seedling International Academy, Jaipur.",
    images: ["/assets/about/about-banner.jpg"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/about/standards" },
};

export default function StandardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
