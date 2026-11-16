import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/academics/advanced',
  title: 'Cambridge AS & A Levels in Jaipur | Seedling',
  description: 'AS & A Levels in 50+ subjects at Seedling, Jaipur, with IPQ research and university counselling for the IITs, Oxbridge and the Ivy League.',
  imageAlt: 'Cambridge A Levels at Seedling International Academy',
});

export default function AdvancedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
