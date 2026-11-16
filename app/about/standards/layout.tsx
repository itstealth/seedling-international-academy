import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/about/standards',
  title: 'Academic & Assessment Standards | Seedling Jaipur',
  description: 'How Seedling, a CAIE curriculum school in Jaipur, grades students: criterion-referenced marking, moderation and Cambridge-benchmarked boundaries.',
  image: "/assets/about/about-banner.jpg",
  imageAlt: 'Academic and assessment standards at Seedling International Academy',
});

export default function StandardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
