import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/admissions/process",
  title: "Cambridge School Admission Process in Jaipur | SIA & SMIA",
  description:
    "How to apply to Seedling's Cambridge schools in Jaipur, step by step: enquiry and registration, an interactive session, the admission offer and fee payment.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
