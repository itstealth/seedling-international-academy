import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about/vision",
  title: "Vision & Mission | Seedling International Academy",
  description:
    "The vision and mission of Seedling International Academy, Jaipur, and the values that guide our Cambridge school: innovation, globalism, integrity, empathy.",
  image: "/assets/about/about-banner.jpg",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
