import { getPosts, getCategories } from "@/lib/wordpress";
import BlogClient from "./BlogClient";

export const revalidate = 600; // ISR: revalidate every 10 minutes in the background

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getPosts(50),
    getCategories(),
  ]);

  return <BlogClient initialPosts={posts} initialCategories={categories} />;
}
