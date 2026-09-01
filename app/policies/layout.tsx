import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Seedling International Academy, Jaipur",
  description:
    "How Seedling International Academy and SMIA collect, use and protect the personal data of students, parents and visitors to this website.",
  openGraph: {
    title: "Privacy Policy | Seedling International Academy, Jaipur",
    description:
      "How Seedling International Academy and SMIA collect, use and protect the personal data of students, parents and visitors to this website.",
    url: "https://cambridge.seedlingschools.com/policies",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Seedling International Academy, Jaipur",
    description: "Privacy policy for Seedling International Academy and SMIA, Jaipur.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/policies" },
};

export default function PoliciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
