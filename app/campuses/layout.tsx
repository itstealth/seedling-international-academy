import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Campuses | Cambridge Schools in Jaipur - SIA & SMIA",
  description:
    "Compare Seedling's two Cambridge campuses in Jaipur - SIA at Jawahar Nagar and SMIA at Durgapura. Facilities, class sizes, results and how to visit.",
  openGraph: {
    title: "Our Campuses — SIA & SMIA | Seedling International Academy",
    description:
      "Explore Seedling International Academy's two Cambridge campuses in Jaipur — SIA at Jawahar Nagar and SMIA at Durgapura.",
    url: "https://cambridge.seedlingschools.com/campuses",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Seedling Campuses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Campuses — SIA & SMIA | Seedling International Academy",
    description: "Two Cambridge campuses in Jaipur — SIA at Jawahar Nagar and SMIA at Durgapura.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/campuses" },
};

export default function CampusesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
