import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/academics/primary',
  title: 'Cambridge Primary School in Jaipur (Ages 5-11)',
  description: 'Cambridge Primary at Seedling, an international school in Jaipur: 10+ subjects, Global Perspectives and Checkpoint assessment for ages 5-11.',
  imageAlt: 'Cambridge Primary at Seedling International Academy',
});

export default function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
