import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/academics/upper-secondary',
  title: 'IGCSE School in Jaipur | Cambridge Upper Secondary',
  description: 'IGCSE at Seedling in Jawahar Nagar and Durgapura, Jaipur: 70+ subjects across Sciences, Maths, Business, Economics and Psychology for ages 14-16.',
  imageAlt: 'Cambridge IGCSE at Seedling International Academy',
});

export default function UpperSecondaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
