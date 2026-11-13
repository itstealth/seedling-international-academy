import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/terms-and-conditions",
  title: "Terms & Conditions | Seedling International Academy",
  description:
    "Terms and conditions for Seedling International Academy, Jaipur, covering admissions and fees, student data and privacy, website use and grievances.",
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
