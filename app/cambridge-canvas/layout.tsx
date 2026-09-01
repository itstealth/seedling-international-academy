import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why the Cambridge Curriculum? IGCSE & A-Level in Jaipur",
  description:
    "How the Cambridge pathway works from Early Years to A-Level, why 1,400+ universities recognise it, and what it means for students in Jaipur.",
  openGraph: {
    title: "Cambridge Canvas | Seedling International Academy",
    description:
      "Art, culture and creativity at Seedling International Academy — the Cambridge Canvas programme shapes well-rounded global learners.",
    url: "https://cambridge.seedlingschools.com/cambridge-canvas",
    images: [{ url: "/assets/Home/SIA_collage_v3.webp", width: 1200, height: 630, alt: "Cambridge Canvas at Seedling International Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambridge Canvas | Seedling International Academy",
    description: "Arts and creativity at Seedling International Academy, Jaipur.",
    images: ["/assets/Home/SIA_collage_v3.webp"],
  },
  alternates: { canonical: "https://cambridge.seedlingschools.com/cambridge-canvas" },
};

export default function CambridgeCanvasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
