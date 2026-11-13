import type { Metadata } from "next";
import { getPostBySlug, getMediaUrl, stripHtml } from "@/lib/wordpress";

const SITE_URL = "https://cambridge.seedlingschools.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `${SITE_URL}/blog/${encodeURIComponent(slug)}`;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      alternates: { canonical },
      openGraph: { url: canonical },
    };
  }

  const title = stripHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered).slice(0, 160);
  const image = getMediaUrl(post);

  return {
    // Keep the brand suffix only while the whole title stays within 60 chars.
    title: {
      absolute:
        `${title} | Seedling Blog`.length <= 60 ? `${title} | Seedling Blog` : title,
    },
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function BlogPostMetadataLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
