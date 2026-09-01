import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Cambridge — Global Standard, Local Heart",
  description:
    "Why choose the Cambridge curriculum? Discover how Cambridge IGCSE and A Level education at Seedling International Academy prepares students for top universities worldwide.",
  openGraph: {
    title: "Why Cambridge | Seedling International Academy",
    description:
      "Cambridge IGCSE and A Level at Seedling International Academy — globally recognised, locally delivered, preparing students for top universities worldwide.",
    url: "https://cambridge.seedlingschools.com/why-cambridge",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Why Cambridge at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Cambridge | Seedling International Academy",
    description: "Cambridge IGCSE and A Level at Seedling International Academy, Jaipur.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/why-cambridge" },
};

export default function WhyCambridgeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
