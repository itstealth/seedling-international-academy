import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://cambridge.seedlingschools.com/about/vision" },
};

export default function RouteMetadataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
