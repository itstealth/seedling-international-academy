import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership & Director's Message | Seedling Cambridge Jaipur",
  description:
    "Meet the leadership of Seedling International Academy & SMIA Jaipur — Dr. Sandeep Bakshi, Dr. Preeti Bakshi, the Joint Directors and Principal Shruti Kukar.",
  openGraph: {
    title: "Leadership & Director's Message | Seedling Cambridge Jaipur",
    description:
      "Meet the leadership of Seedling International Academy & SMIA Jaipur — Dr. Sandeep Bakshi, Dr. Preeti Bakshi, the Joint Directors and Principal Shruti Kukar.",
    url: "https://cambridge.seedlingschools.com/about/leadership",
    images: [{ url: "/assets/about/about-banner.jpg", width: 1200, height: 630, alt: "Leadership at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership & Director's Message | Seedling Cambridge Jaipur",
    description: "Meet the leadership team of Seedling International Academy & SMIA, Jaipur.",
    images: ["/assets/about/about-banner.jpg"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/about/leadership" },
};

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
