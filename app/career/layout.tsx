import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/career",
  title: "Teaching & Admin Careers in Jaipur | SIA & SMIA",
  description:
    "Join Seedling International Academy, Jaipur's leading Cambridge school. Explore teaching and administrative roles across our SIA and SMIA campuses.",
  imageAlt: "Careers at Seedling International Academy",
});

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
