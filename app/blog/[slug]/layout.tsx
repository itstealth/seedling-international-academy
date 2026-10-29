import type { Metadata } from "next";

const SITE_URL = "https://cambridge.seedlingschools.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `${SITE_URL}/blog/${encodeURIComponent(slug)}`;

  return {
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

export default function BlogPostMetadataLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
