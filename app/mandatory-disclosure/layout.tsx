import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/mandatory-disclosure',
  title: 'Mandatory Public Disclosure | Seedling Jaipur',
  description: 'Mandatory public disclosure for Seedling International School (SPS), Jaipur, as per Cambridge Affiliation Bye-Laws: school info, affiliation status and certificates.',
  imageAlt: 'Seedling International Academy',
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
