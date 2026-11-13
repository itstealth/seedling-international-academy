import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about/legacy",
  title: "Our Legacy Since 1993 | Seedling Group of Schools",
  description:
    "The Seedling Group of Schools story since 1993, from the founding vision of the late Ms. Mohini Bakshi to the milestones that shaped our schools in Jaipur.",
  image: "/assets/about/about-banner.jpg",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
