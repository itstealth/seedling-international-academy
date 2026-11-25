import { getMediaUrl, getPostCategories, getPosts, getCategories, stripHtml } from "@/lib/wordpress";
import BlogClient, { type BlogCategory, type BlogSummary } from "./BlogClient";

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

  // The WordPress response includes complete article bodies and extensive
  // embedded API metadata. The listing only needs compact card data; passing
  // the full objects to a Client Component bloats the HTML/RSC payload.
  const postSummaries: BlogSummary[] = posts.map((post) => ({
    id: post.id,
    title: stripHtml(post.title.rendered),
    slug: post.slug,
    excerpt: stripHtml(post.excerpt.rendered),
    date: post.date,
    categoryIds: post.categories,
    categoryNames: getPostCategories(post),
    image: getMediaUrl(post),
  }));

  const categorySummaries: BlogCategory[] = categories.map(({ id, name }) => ({
    id,
    name: stripHtml(name),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlogClient initialPosts={postSummaries} initialCategories={categorySummaries} />
    </>
  );
}
