import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career — Join the Seedling Team",
  description:
    "Join Seedling International Academy, Jaipur's leading Cambridge school. Explore teaching and administrative roles across our SIA and SMIA campuses.",
  openGraph: {
    title: "Career | Seedling International Academy",
    description:
      "Explore teaching and administrative careers at Seedling International Academy across SIA (Jawahar Nagar) and SMIA (Durgapura) campuses in Jaipur.",
    url: "https://cambridge.seedlingschools.com/career",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Careers at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career | Seedling International Academy",
    description: "Join the Seedling International Academy team in Jaipur.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/career" },
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
