import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about/affiliation",
  title: "Cambridge Affiliation & Accreditation | SIA & SMIA Jaipur",
  description:
    "Seedling International Academy and Seedling Modern International Academy are accredited by Cambridge Assessment International Education for IGCSE & A Level.",
  image: "/assets/about/about-banner.jpg",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
