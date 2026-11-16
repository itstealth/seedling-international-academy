import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/academics/lower-secondary',
  title: 'Cambridge Lower Secondary in Jaipur (Ages 11-14)',
  description: 'Cambridge Lower Secondary at Seedling, Jaipur: 10+ subjects, Checkpoint and progression tests, and a bridge into IGCSE for ages 11-14.',
  imageAlt: 'Cambridge Lower Secondary at Seedling International Academy',
});

export default function LowerSecondaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
