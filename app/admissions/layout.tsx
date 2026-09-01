import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cambridge School Admissions 2026-27 | Jaipur | Seedling",
  description:
    "Apply to Seedling's Cambridge schools in Jaipur for 2026-27. Eligibility, documents, entrance test details and the full step-by-step admission process.",
  openGraph: {
    title: "Admissions | Seedling International Academy",
    description:
      "Apply to Seedling International Academy, Jaipur's leading Cambridge IGCSE & A Level school. Open for 2026-27 academic session.",
    url: "https://cambridge.seedlingschools.com/admissions",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Admissions at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions | Seedling International Academy",
    description: "Apply to Seedling International Academy — Cambridge IGCSE & A Level school in Jaipur.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/admissions" },
};

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
