import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Our Story, Leadership & Vision",
  description:
    "Learn about Seedling International Academy — three decades of Cambridge education in Jaipur, our founding story, leadership team, mission and vision.",
  openGraph: {
    title: "About Seedling International Academy",
    description:
      "Three decades of Cambridge excellence in Jaipur. Discover our story, leadership, mission and vision at Seedling International Academy.",
    url: "https://cambridge.seedlingschools.com/about",
    images: [{ url: "/assets/about/about-banner.jpg", width: 1200, height: 630, alt: "About Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Seedling International Academy",
    description: "Three decades of Cambridge excellence in Jaipur. Discover our story and leadership.",
    images: ["/assets/about/about-banner.jpg"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
