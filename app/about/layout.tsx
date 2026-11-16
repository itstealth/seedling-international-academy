import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/about',
  title: 'Our Story, Leadership & Vision | Seedling Jaipur',
  description: "Looking for a Cambridge school in Jaipur? Learn how Seedling's three decades of education shaped our story, leadership, mission and vision.",
  image: "/assets/about/about-banner.jpg",
  imageAlt: 'About Seedling International Academy',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
