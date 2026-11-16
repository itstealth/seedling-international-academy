import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: '/terms-and-conditions',
  title: 'Terms & Conditions | Seedling International Academy',
  description: 'Terms of use for the Seedling International Academy and SMIA website, Cambridge schools in Jawahar Nagar and Durgapura, Jaipur.',
  imageAlt: 'Seedling International Academy',
});

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
