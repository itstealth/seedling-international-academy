import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/policies",
  title: "Privacy Policy | Seedling International Academy, Jaipur",
  description:
    "How Seedling International Academy and SMIA collect, use and protect the personal data of students, parents and visitors to this website.",
  imageAlt: "Seedling International Academy",
});

export default function PoliciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
