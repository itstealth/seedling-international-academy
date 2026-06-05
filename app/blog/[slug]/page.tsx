"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import HeroWrapper from "@/components/layout/HeroWrapper";
import { getMediaUrl, getPostCategories, stripHtml, formatDate, type WPPost } from "@/lib/wordpress";

const ArrowLeft = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const LoaderSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-sand/30 border-t-crimson rounded-full animate-spin" />
  </div>
);

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [post, setPost] = useState<WPPost | null>(null);
  const [allPosts, setAllPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [postsRes] = await Promise.all([
          fetch('https://stealthlearn.in/cambridgeinternationalschool/wp-json/wp/v2/posts?per_page=100&_embed'),
        ]);

        if (!postsRes.ok) throw new Error('Failed to fetch posts');

        const postsData: WPPost[] = await postsRes.json();

        const currentPost = postsData.find((p) => p.slug === slug);
        setPost(currentPost ?? null);
        setAllPosts(postsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post');
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchData();
  }, [slug]);

  // Extract headings first (used by processedContent)
  const headings = useMemo(() => {
    if (!post) return [];
    const matches = post.content.rendered.matchAll(/<h([2-4])[^>]*>(.*?)<\/h\1>/gi);
    return Array.from(matches).map((m) => {
      const text = m[2].replace(/<[^>]*>/g, '');
      return {
        level: parseInt(m[1]),
        text,
        id: text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      };
    });
  }, [post]);

  // Process content - inject TOC at first heading, remove WP TOC, fix links, add IDs
  const processedContent = useMemo(() => {
    if (!post) return '';
    let content = post.content.rendered;

    // Remove WordPress-generated Table of Contents (any TOC-related markup)
    content = content.replace(/<div[^>]*class="[^"]*"[^>]*>[\s\S]*?<\/div>/gi, (match) => {
      const text = match.toLowerCase();
      if (text.includes('toc') || text.includes('table-of-contents') || text.includes('jm-toc')) return '';
      return match;
    });
    content = content.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, (match) => {
      return match.toLowerCase().includes('toc') ? '' : match;
    });
    content = content.replace(/\[toc[^\]]*\]/gi, '');
    content = content.replace(/\[block[^>]*class="[^"]*jm-toc[^"]*"[^>]*\]/gi, '');
    content = content.replace(/<!--[^-]*-->/gi, '');

    // Remove internal links to WordPress domain
    content = content.replace(/https:\/\/stealthlearn\.in\/cambridgeinternationalschool(?!\/wp-)/g, '');

    // Add IDs to headings for smooth scrolling
    content = content.replace(/<h([2-4])([^>]*)>(.*?)<\/h\1>/gi, (_, level, attrs, text) => {
      const id = text.replace(/<[^>]*>/g, '').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    });

    // Build TOC HTML to inject at first heading position
    const tocHtml = `<div class="max-w-3xl mx-auto mb-12"><div class="bg-white/80 backdrop-blur-sm border border-sand/40 rounded-2xl p-6 shadow-sm">
      <h2 class="text-[10px] font-black uppercase tracking-[0.25em] text-text-light mb-4">In This Article</h2>
      <nav class="space-y-1">
        ${headings.map((h) => `
          <a href="#${h.id}" class="block w-full text-left text-sm font-bold text-navy-deeper/70 hover:text-crimson transition-colors py-1.5 ${h.level === 2 ? 'pl-0' : h.level === 3 ? 'pl-5 text-[13px]' : 'pl-10 text-[12px]'}">${h.text}</a>
        `).join('')}
      </nav>
    </div></div>`;

    // Inject TOC at first h2 position
    const firstH2Index = content.indexOf('<h2');
    if (firstH2Index > 0) {
      content = content.slice(0, firstH2Index) + tocHtml + content.slice(firstH2Index);
    }

    return content;
  }, [post, headings]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-off-white font-dm flex items-center justify-center">
        <div className="text-center">
          <LoaderSpinner />
          <p className="text-text-light text-sm mt-4">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-off-white font-dm flex items-center justify-center">
        <div className="text-center">
          <p className="text-crimson font-bold text-xl">Article not found</p>
          <p className="text-text-light text-sm mt-2">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-6 text-navy-deeper font-black text-sm uppercase tracking-widest hover:text-crimson transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && p.categories.some((c) => post.categories.includes(c)))
    .slice(0, 3);

  const postCategories = getPostCategories(post);
  const readTime = Math.max(1, Math.ceil(stripHtml(post.content.rendered).split(' ').length / 200));

  return (
    <div className="min-h-screen bg-off-white font-dm">
      <HeroWrapper
        backgroundImage="/assets/img/sps-banner.jpg"
        title="Blog"
        badge="Stories & Updates"
        breadcrumbs={[{ label: "Blog" }]}
      />
      {/* Back Button */}
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-navy-deeper/60 font-black text-[11px] uppercase tracking-widest hover:text-navy-deeper transition-colors"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="pt-10 pb-2 px-6 max-w-7xl mx-auto">
        <header className="max-w-4xl mx-auto text-center mb-16">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {postCategories.map((cat) => (
              <span
                key={cat}
                className="bg-navy-deeper/10 text-navy-deeper text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy-deeper leading-tight mb-8">
            {stripHtml(post.title.rendered)}
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-4">
            <time className="text-text-light text-[11px] font-black uppercase tracking-widest">{formatDate(post.date)}</time>
            <span className="w-1 h-1 rounded-full bg-sand" />
            <span className="text-text-light text-[11px] font-black uppercase tracking-widest">{readTime} min read</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative max-w-5xl mx-auto mb-16 rounded-[2rem] overflow-hidden shadow-xl">
          <img
            src={getMediaUrl(post)}
            alt={stripHtml(post.title.rendered)}
            className="w-full aspect-[16/9] object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = '/assets/Home/classroom.jpg'; }}
          />
        </div>

        {/* Article Content (TOC is injected inside content at first h2) */}
        <div className="max-w-3xl mx-auto">
          <div
            className="font-dm text-navy-deeper leading-relaxed [&_h2]:font-playfair [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy-deeper [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:pl-4 [&_h2]:border-l-4 [&_h2]:border-crimson [&_h3]:font-playfair [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-navy-deeper [&_h3]:mt-8 [&_h3]:mb-4 [&_h4]:font-bold [&_h4]:text-lg [&_h4]:text-navy-deeper [&_h4]:mt-6 [&_h4]:mb-3 [&_p]:text-base [&_p]:leading-8 [&_p]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2.5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2.5 [&_li]:text-base [&_li]:leading-7 [&_a]:text-crimson [&_a]:underline [&_a]:hover:text-crimson-dark [&_blockquote]:border-l-4 [&_blockquote]:border-sand [&_blockquote]:pl-5 [&_blockquote]:py-3 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-text-light [&_img]:w-full [&_img]:rounded-2xl [&_img]:my-8 [&_img]:shadow-lg [&_figure]:my-8 [&_figcaption]:text-center [&_figcaption]:text-text-light [&_figcaption]:text-sm [&_figcaption]:mt-3 [&_hr]:border-sand/30 [&_hr]:my-10 [&_strong]:font-bold [&_em]:italic"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </div>

      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="pt-8 pb-10 px-6 bg-white border-t border-sand/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[10px] font-black text-text-light uppercase tracking-[0.3em] whitespace-nowrap">Related Articles</span>
              <div className="h-px bg-sand/30 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group flex flex-col bg-off-white rounded-3xl overflow-hidden border border-sand/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={getMediaUrl(relatedPost)}
                      alt={stripHtml(relatedPost.title.rendered)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/assets/Home/classroom.jpg'; }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <time className="text-text-light text-[10px] font-black uppercase tracking-widest mb-3">
                      {formatDate(relatedPost.date)}
                    </time>
                    <h3 className="font-playfair text-lg font-bold text-navy-deeper leading-tight mb-4 group-hover:text-crimson transition-colors duration-300">
                      {stripHtml(relatedPost.title.rendered)}
                    </h3>
                    <div className="inline-flex items-center gap-2 text-navy text-[10px] font-black uppercase tracking-widest group-hover:gap-3 transition-all duration-300 mt-auto">
                      Read More <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    

    </div>
  );
}