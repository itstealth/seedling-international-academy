import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Cambridge Schools in Jaipur | SIA & SMIA",
  description:
    "Contact Seedling International Academy, Jawahar Nagar and SMIA, Durgapura. Phone numbers, email, office hours and directions to both Jaipur campuses.",
  openGraph: {
    title: "Contact Us | Seedling International Academy",
    description:
      "Reach Seedling International Academy's admissions team in Jaipur. SIA at Jawahar Nagar — +91 74130 12351. SMIA at Durgapura — +91 95877 72837.",
    url: "https://cambridge.seedlingschools.com/contact-us",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Contact Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Seedling International Academy",
    description: "Reach Seedling International Academy's admissions team in Jaipur.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/contact-us" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
