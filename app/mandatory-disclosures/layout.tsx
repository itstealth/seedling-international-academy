import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandatory Disclosures | Seedling Cambridge Schools Jaipur",
  description:
    "Statutory and Cambridge accreditation disclosures for Seedling International Academy and SMIA, Jaipur - registration details, certificates and reports.",
  openGraph: {
    title: "Mandatory Disclosures | Seedling Cambridge Schools Jaipur",
    description:
      "Statutory and Cambridge accreditation disclosures for Seedling International Academy and SMIA, Jaipur - registration details, certificates and reports.",
    url: "https://cambridge.seedlingschools.com/mandatory-disclosures",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandatory Disclosures | Seedling Cambridge Schools Jaipur",
    description: "Statutory and Cambridge accreditation disclosures for Seedling International Academy and SMIA, Jaipur.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/mandatory-disclosures" },
};

export default function MandatoryDisclosuresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
