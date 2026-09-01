import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Life at Seedling Cambridge Schools, Jaipur",
  description:
    "Sports, arts, wellness, clubs and celebrations at Seedling's Cambridge campuses in Jaipur - a look at daily life beyond the IGCSE classroom.",
  openGraph: {
    title: "School Life | Seedling International Academy",
    description:
      "Sports, arts, clubs and leadership — school life at Seedling International Academy shapes confident, curious, compassionate global citizens.",
    url: "https://cambridge.seedlingschools.com/school-life",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "School Life at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "School Life | Seedling International Academy",
    description: "Sports, arts and clubs at Seedling International Academy, Jaipur.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/school-life" },
};

export default function SchoolLifeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
