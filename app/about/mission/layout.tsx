import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/about/mission',
  title: 'Mission & Vision | Seedling Cambridge Schools',
  description: 'The mission and values behind Seedling, a global curriculum school in Durgapura and Jawahar Nagar: joyful learning and life-ready learners.',
  image: "/assets/about/about-banner.jpg",
  imageAlt: 'Mission, vision and values at Seedling International Academy',
});

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
