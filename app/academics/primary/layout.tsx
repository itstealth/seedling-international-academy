import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/academics/primary",
  title: "Cambridge Primary in Jaipur (Ages 5-11) | SIA & SMIA",
  description:
    "Cambridge Primary at Seedling Jaipur, ages 5-11: 10+ subjects including Global Perspectives, Checkpoint assessment and a smooth path into Lower Secondary.",
  imageAlt: "Cambridge Primary at Seedling International Academy",
});

export default function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
