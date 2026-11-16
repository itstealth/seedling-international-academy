import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/about/leadership',
  title: 'Leadership Team | Cambridge Schools Jaipur',
  description: "Meet the leaders of Seedling's international schools in Jaipur: Dr. Sandeep Bakshi, Dr. Preeti Bakshi, the Joint Directors and Principal Shruti Kukar.",
  image: "/assets/about/about-banner.jpg",
  imageAlt: 'Leadership at Seedling International Academy',
});

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
