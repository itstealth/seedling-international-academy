import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://cambridge.seedlingschools.com/about/mission" },
  title: "Mission, Vision & Values | Seedling Cambridge Schools Jaipur",
  description:
    "The mission, vision and promise behind Seedling's Cambridge schools in Jaipur â€” joyful learning, holistic development and life-ready, life-worthy learners.",
  openGraph: {
    title: "Mission, Vision & Values | Seedling Cambridge Schools Jaipur",
    description:
      "The mission, vision and promise behind Seedling's Cambridge schools in Jaipur â€” joyful learning, holistic development and life-ready, life-worthy learners.",
    url: "https://cambridge.seedlingschools.com/about/mission",
    images: [{ url: "/assets/about/about-banner.jpg", width: 1200, height: 630, alt: "Mission, Vision & Values at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission, Vision & Values | Seedling Cambridge Schools Jaipur",
    description: "The mission, vision and values behind Seedling's Cambridge schools in Jaipur.",
    images: ["/assets/about/about-banner.jpg"],
  },
};

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
