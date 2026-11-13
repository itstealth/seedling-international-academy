import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/academics/upper-secondary",
  title: "Cambridge IGCSE in Jaipur (Upper Secondary) | SIA & SMIA",
  description:
    "Cambridge Upper Secondary (IGCSE) at Seedling Jaipur — 70+ subjects spanning Sciences, Maths, Business, Economics and Psychology, for learners aged 14-16.",
  imageAlt: "Cambridge IGCSE at Seedling International Academy",
});

export default function UpperSecondaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
