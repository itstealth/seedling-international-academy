import { getMediaUrl, getPosts, getCategories, stripHtml } from "@/lib/wordpress";
import BlogClient from "./BlogClient";

export const revalidate = 600; // ISR: revalidate every 10 minutes in the background

const SITE_URL = "https://cambridge.seedlingschools.com";

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getPosts(50),
    getCategories(),
  ]);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/blog#collection`,
    url: `${SITE_URL}/blog`,
    name: "Cambridge and IGCSE Guides for Jaipur Parents",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        item: {
          "@type": "BlogPosting",
          headline: stripHtml(post.title.rendered),
          datePublished: post.date,
          image: new URL(getMediaUrl(post), SITE_URL).toString(),
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlogClient initialPosts={posts} initialCategories={categories} />
    </>
  );
}
