import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://cambridge.seedlingschools.com/search" },
};

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
