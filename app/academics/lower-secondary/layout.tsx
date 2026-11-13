import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/academics/lower-secondary",
  title: "Cambridge Lower Secondary, Jaipur (Ages 11-14) | SIA & SMIA",
  description:
    "Cambridge Lower Secondary at Seedling Jaipur, ages 11-14: 10+ subjects, Checkpoint and progression tests, and a strong bridge into Cambridge IGCSE.",
  imageAlt: "Cambridge Lower Secondary at Seedling International Academy",
});

export default function LowerSecondaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
