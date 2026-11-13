import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About Seedling's Cambridge Schools in Jaipur | SIA & SMIA",
  description:
    "Learn about Seedling International Academy — three decades of Cambridge education in Jaipur, our founding story, leadership team, mission and vision.",
  image: "/assets/about/about-banner.jpg",
  imageAlt: "About Seedling International Academy",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
