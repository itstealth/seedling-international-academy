"use client";

import { useState, useMemo } from "react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  categories: string[];
  date: string;
  dateISO: string;
  readMin: number;
  img: string;
}

// ─────────────────────────────────────────────
// REAL DATA — sourced from seedlingschools.com/blog
// ─────────────────────────────────────────────
const ALL_POSTS: Post[] = [
  {
    id: 1,
    slug: "dialogue-over-division-how-schools-can-shape-a-conflict-free-future",
    title: "Dialogue Over Division – How Schools Can Shape a Conflict-Free Future",
    excerpt:
      "In a world where differences often turn into divisions, the true power to build peace lies not in politics—but in education. Schools are more than places of academic learning; they are the training grounds for the next generation of citizens.",
    categories: ["Best CBSE Schools in Jaipur", "Best School in Jaipur"],
    date: "10 Mar 2025",
    dateISO: "2025-03-10",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "healthy-screen-time-for-young-kids",
    title: "Healthy Screen Time for Young Kids",
    excerpt:
      "What Helps, What Hurts, and What to Do Instead. In today's digital age, screens are everywhere — from online learning and educational apps to entertainment and social media.",
    categories: ["Best CBSE Schools in Jaipur", "Best School in Jaipur"],
    date: "09 Mar 2025",
    dateISO: "2025-03-09",
    readMin: 4,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "10-best-tips-how-to-improve-reading-skills-of-a-child",
    title: "10 Best Tips – How to Improve Reading Skills of a Child",
    excerpt:
      "Reading is one of the most important skills children develop in the early years. Strong reading habits improve language, imagination, confidence, and academic success.",
    categories: ["Best CBSE Schools in Jaipur", "Best School in Jaipur"],
    date: "02 Mar 2025",
    dateISO: "2025-03-02",
    readMin: 6,
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "from-classroom-to-global-stage-the-cambridge-learning-approach",
    title: "From Classroom to Global Stage – The Cambridge Learning Approach",
    excerpt:
      "In a rapidly globalising world, education must go beyond textbooks and exams. Parents today want a learning system that builds confidence, critical thinking, and global awareness in their children.",
    categories: [
      "Best CBSE Schools in Jaipur",
      "Cultural and Linguistic Awareness",
      "Mental Health and Emotional Wellbeing",
    ],
    date: "10 Feb 2025",
    dateISO: "2025-02-10",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    slug: "benefits-of-extracurricular-activities-for-students-in-cambridge-schools",
    title: "Benefits of Extracurricular Activities for Students in Cambridge Schools",
    excerpt:
      "When parents search for the best Cambridge school in Jaipur, academics are important—but they are no longer the only priority. Today's parents want schools that nurture the whole child.",
    categories: [
      "School Life and Community",
      "Social and Emotional Skills",
      "Student Development",
    ],
    date: "06 Feb 2025",
    dateISO: "2025-02-06",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    slug: "integrated-curriculum-in-schools-what-parents-should-know",
    title: "Integrated Curriculum in Schools – What Parents Should Know",
    excerpt:
      "Choosing the best CBSE school in Jaipur is one of the most important decisions for parents. Today, families are looking for schools that focus on holistic development rather than rote learning.",
    categories: ["Best CBSE Schools in Jaipur", "Wellbeing of Children"],
    date: "03 Feb 2025",
    dateISO: "2025-02-03",
    readMin: 4,
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    slug: "are-after-school-activities-worth-it-or-just-an-extra-cost",
    title: "Are After-School Activities Worth It or Just an Extra Cost?",
    excerpt:
      "In today's competitive world, parents want education that goes beyond academics and builds well-rounded learners. This raises a common question: Are after-school activities truly worth the investment?",
    categories: ["Best School in Jaipur"],
    date: "28 Jan 2025",
    dateISO: "2025-01-28",
    readMin: 4,
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 8,
    slug: "how-to-build-strong-reading-habits-in-children-of-all-ages",
    title: "How to Build Strong Reading Habits in Children of All Ages",
    excerpt:
      "Good reading habits are a lifelong gift. In today's digital world, reading helps children think clearly, communicate effectively, and build strong academic foundations.",
    categories: ["Best CBSE Schools in Jaipur"],
    date: "22 Jan 2025",
    dateISO: "2025-01-22",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 9,
    slug: "why-cambridge-the-curriculum-that-builds-global-leaders",
    title: "Why Cambridge? The Curriculum That Builds Global Leaders",
    excerpt:
      "Choosing the right school shapes a child's future. In today's world, students need more than academics — they need creativity, confidence, leadership, communication skills, and a global mindset.",
    categories: ["Best School in Jaipur"],
    date: "29 Dec 2024",
    dateISO: "2024-12-29",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 10,
    slug: "inside-cambridge-primary-a-fresh-approach-to-early-international-education",
    title: "Inside Cambridge Primary – A Fresh Approach to Early International Education",
    excerpt:
      "Choosing the right school in the early years shapes a child's confidence, skills, and future success. As parents explore 2026–27 admissions, many are choosing the Cambridge pathway.",
    categories: ["Best CBSE Schools in Jaipur"],
    date: "25 Dec 2024",
    dateISO: "2024-12-25",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 11,
    slug: "top-school-in-jaipur-explains-why-the-first-five-years-shape-the-next-fifty",
    title: "Top School in Jaipur Explains Why the First Five Years Shape the Next Fifty",
    excerpt:
      "Nurturing Bright Beginnings at Seedling Wonderland Kids League. The first five years of a child's life are often called the foundation years — and for very good reason.",
    categories: ["Best CBSE Schools in Jaipur"],
    date: "20 Nov 2024",
    dateISO: "2024-11-20",
    readMin: 4,
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 12,
    slug: "the-power-of-purpose-driven-schooling-at-seedling-international-academy",
    title: "The Power of Purpose-Driven Schooling at Seedling International Academy",
    excerpt:
      "If schools were stories, some would be encyclopaedias—packed with facts, a little dry, and mostly forgettable. But then there's Seedling International Academy—a vibrant narrative in the making.",
    categories: ["Best School in Jaipur"],
    date: "27 Oct 2024",
    dateISO: "2024-10-27",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 13,
    slug: "best-private-cbse-school-in-jaipur-seedling-modern-high",
    title: "Is My Child Happy? Signs of a Positive Learning Environment at Seedling Modern High School",
    excerpt:
      "How Do You Measure a Smile That's Real? Here's something no progress report will tell you: whether your child felt seen today. Whether they laughed — really laughed — at school.",
    categories: ["Best CBSE Schools in Jaipur"],
    date: "25 Oct 2024",
    dateISO: "2024-10-25",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 14,
    slug: "best-cbse-school-in-jaipur",
    title: "From Campus to Character – The Values That Shape Seedling Public School Students",
    excerpt:
      "There's something quietly remarkable about a student who instinctively says, 'thank you,' owns up to a mistake, or stands up for a classmate. These aren't accidents — they're by design.",
    categories: ["Wellbeing of Children"],
    date: "22 Oct 2024",
    dateISO: "2024-10-22",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 15,
    slug: "crack-your-board-exams-in-2-months-with-seedling-public-school-guide",
    title: "Crack Your Board Exams in 2 Months with Seedling Public School Guide",
    excerpt:
      "Board exams mark a landmark in the whole academic journey of students. In any case, the pressure level gets too high, especially within two months to go — but with the right strategy, it's very achievable.",
    categories: ["Best CBSE Schools in Jaipur", "Wellbeing of Children"],
    date: "18 Oct 2024",
    dateISO: "2024-10-18",
    readMin: 6,
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b6f96?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 16,
    slug: "from-policy-to-practice-fostering-collaboration-for-higher-happiness-index",
    title: "From Policy to Practice – Fostering Collaboration for Higher Happiness Index",
    excerpt:
      "In today's rapidly changing world, academic excellence is just one part of the equation. Equally important—but often underestimated—is the emotional and social well-being of students.",
    categories: ["Best CBSE Schools in Jaipur", "Best School in Jaipur"],
    date: "12 Sep 2024",
    dateISO: "2024-09-12",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 17,
    slug: "financial-literacy-for-the-next-generation",
    title: "Financial Literacy for the Next Generation",
    excerpt:
      "In a world where young people are expected to make financial decisions earlier than ever—whether it's managing an online wallet, choosing between EMI options, or planning savings—financial literacy has never been more critical.",
    categories: ["Best CBSE Schools in Jaipur", "Best School in Jaipur"],
    date: "08 Sep 2024",
    dateISO: "2024-09-08",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 18,
    slug: "why-embrace-engineering-design-thinking-in-school-projects",
    title: "Why Embrace Engineering Design Thinking in School Projects?",
    excerpt:
      "Think back to your childhood. There's a good chance you remember the day you took apart a toy—not out of frustration, but out of curiosity. That instinct is exactly what engineering design thinking nurtures.",
    categories: ["Best CBSE Schools in Jaipur"],
    date: "25 Aug 2024",
    dateISO: "2024-08-25",
    readMin: 5,
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 19,
    slug: "how-to-reduce-stress-practice-self-care-during-exams",
    title: "How to Reduce Stress & Practice Self-Care During Exams",
    excerpt:
      "If there's one thing we can say for sure, it's that school exams have a way of turning even the most prepared student into a bundle of nerves. Here's how to manage that stress effectively.",
    categories: ["Best CBSE Schools in Jaipur"],
    date: "25 Aug 2024",
    dateISO: "2024-08-25",
    readMin: 4,
    img: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 20,
    slug: "last-minute-exam-tips-every-student-can-rely-on",
    title: "Last-Minute Exam Tips Every Student Can Rely On",
    excerpt:
      "Let's be honest—exams have a way of sneaking up on us. One moment you're planning to start 'tomorrow,' and the next thing you know, tomorrow is today. These last-minute tips will help you make the most of it.",
    categories: ["Best CBSE Schools in Jaipur", "Best School in Jaipur"],
    date: "23 Aug 2024",
    dateISO: "2024-08-23",
    readMin: 4,
    img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=900&q=80&auto=format&fit=crop",
  },
];

// ─────────────────────────────────────────────
// DERIVED DATA
// ─────────────────────────────────────────────
const FEATURED = ALL_POSTS[0];
const GRID_POSTS = ALL_POSTS.slice(1);

const ALL_CATEGORIES = [
  "All",
  "Best CBSE Schools in Jaipur",
  "Best School in Jaipur",
  "Student Development",
  "School Life and Community",
  "Wellbeing of Children",
  "Mental Health and Emotional Wellbeing",
  "Cultural and Linguistic Awareness",
  "Social and Emotional Skills",
];

const POSTS_PER_PAGE = 6;

// ─────────────────────────────────────────────
// ICONS (inline SVG helpers)
// ─────────────────────────────────────────────
const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ChevronLeft = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const MailIcon = () => (
  <svg width={20} height={20} fill="none" viewBox="0 0 24 24" stroke="#34d399" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const CheckIcon = () => (
  <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const CategoryBadge = ({ category, active, onClick }: { category: string, active: boolean, onClick: () => void }) => (
  <button
    role="tab"
    aria-selected={active}
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-200 font-dm
      ${active 
        ? "bg-navy-deeper text-white shadow-lg" 
        : "bg-white text-navy-deeper border border-sand/40 hover:border-navy hover:bg-navy/5"
      }`}
  >
    {category}
  </button>
)

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ── filtered + paginated posts
  const filtered = useMemo(() => {
    if (activeCategory === "All") return GRID_POSTS;
    return GRID_POSTS.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);

  const paginated = useMemo(
    () => filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE),
    [filtered, currentPage]
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  const postUrl = (slug: string) => `https://seedlingschools.com/blog/${slug}/`;

  // ─────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-off-white font-dm">
      
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden border-b border-sand/20">
        {/* Background elements */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(circle, #175190 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          aria-hidden="true" 
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-light/30 to-transparent pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-0.5 bg-crimson" />
              <span className="text-crimson text-[10px] font-black tracking-[0.3em] uppercase">Seedling Schools Blog</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-navy-deeper leading-[1.1] mb-6">
              Stories, Ideas<br />
              <span className="text-sand">&amp; </span>
              <em className="italic font-medium text-navy">Insights</em>
            </h1>
            <p className="text-text-light text-lg leading-relaxed mb-10 max-w-lg font-light">
              Perspectives on education, child development, and the future of learning — thoughtfully curated for parents, educators, and curious minds across Jaipur.
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { num: "20+", label: "Articles Published" },
                { num: "20k+", label: "Students Served" },
                { num: "3 Decades", label: "Of Excellence" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-playfair text-3xl font-bold text-navy-deeper">{num}</div>
                  <div className="text-[10px] text-text-light font-black uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-3 fade-up delay-150">
            {[
              { color: "bg-navy", label: "Student Development" },
              { color: "bg-crimson", label: "Cambridge Learning" },
              { color: "bg-sand", label: "Parental Resources" },
              { color: "bg-navy-dark", label: "Mental Wellbeing" },
              { color: "bg-crimson-dark", label: "Early Education" },
            ].map(({ color, label }) => (
              <div key={label} className="inline-flex items-center gap-3 bg-white border border-sand/30 rounded-full px-5 py-3 shadow-sm self-start transition-transform hover:-translate-x-2 duration-300">
                <div className={`w-2 h-2 rounded-full ${color}`} />
                <span className="text-[11px] font-black text-navy-deeper uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ FEATURED POST ══════════════════ */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[10px] font-black text-text-light uppercase tracking-[0.3em] whitespace-nowrap">Featured Story</span>
          <div className="h-px bg-sand/30 flex-1" />
        </div>

        <a
          href={postUrl(FEATURED.slug)}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-white rounded-[2.5rem] overflow-hidden border border-sand/40 shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img 
                src={FEATURED.img} 
                alt={FEATURED.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/40 to-transparent" />
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-crimson text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Featured</span>
                <span className="bg-white/90 backdrop-blur-sm text-navy-deeper text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                  {FEATURED.categories[0]}
                </span>
              </div>
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <time className="text-text-light text-[11px] font-black uppercase tracking-widest">{FEATURED.date}</time>
                <span className="w-1 h-1 rounded-full bg-sand" />
                <span className="text-text-light text-[11px] font-black uppercase tracking-widest">{FEATURED.readMin} min read</span>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-deeper leading-tight mb-6 group-hover:text-crimson transition-colors duration-300">
                {FEATURED.title}
              </h2>
              <p className="text-text-light text-base leading-relaxed mb-10 font-light line-clamp-3">
                {FEATURED.excerpt}
              </p>
              <div className="inline-flex items-center gap-2 text-crimson text-[11px] font-black uppercase tracking-[0.2em] group-hover:gap-4 transition-all duration-300">
                Read Full Article <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* ══════════════════ GRID + FILTERS ══════════════════ */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-sand/30 flex-1" />
          <span className="text-[10px] font-black text-text-light uppercase tracking-[0.3em] whitespace-nowrap">Explore All Articles</span>
          <div className="h-px bg-sand/30 flex-1" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {ALL_CATEGORIES.map((cat) => (
            <CategoryBadge 
              key={cat} 
              category={cat} 
              active={activeCategory === cat} 
              onClick={() => handleCategoryChange(cat)} 
            />
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.length === 0 ? (
            <div className="col-span-full py-20 text-center text-text-light font-light italic">
              No articles found in this category.
            </div>
          ) : (
            paginated.map((post, idx) => (
              <a
                key={post.id}
                href={postUrl(post.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-sand/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-navy-deeper text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {post.categories[0]}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <time className="text-text-light text-[10px] font-black uppercase tracking-widest">{post.date}</time>
                    <span className="w-1 h-1 rounded-full bg-sand/40" />
                    <span className="text-text-light text-[10px] font-black uppercase tracking-widest">{post.readMin} min read</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-navy-deeper leading-tight mb-4 group-hover:text-crimson transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed mb-8 font-light line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-navy text-[10px] font-black uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                    Read More <ArrowRight size={12} />
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="flex items-center justify-center gap-2 mt-16" aria-label="Pagination">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border border-sand/40 text-navy-deeper hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 disabled:opacity-30"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-[11px] font-black transition-all duration-200
                  ${currentPage === page 
                    ? "bg-navy-deeper text-white shadow-lg" 
                    : "text-navy-deeper hover:bg-navy-light border border-transparent"
                  }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border border-sand/40 text-navy-deeper hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 disabled:opacity-30"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight />
            </button>
          </nav>
        )}
      </section>

      {/* ══════════════════ NEWSLETTER CTA ══════════════════ */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="relative bg-navy-deeper rounded-[3rem] p-10 md:p-20 text-center overflow-hidden">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
              <MailIcon />
            </div>
            <p className="text-sand text-[10px] font-black uppercase tracking-[0.4em] mb-4">Stay in the Loop</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Never Miss an Update</h2>
            <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
              Get the latest articles on education, child development, and school life delivered straight to your inbox.
            </p>
            
            {subscribed ? (
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full text-white font-bold">
                <CheckIcon /> You&apos;re subscribed — thank you!
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubscribe}>
                <input
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-sand transition-colors font-dm"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="bg-sand hover:bg-white text-navy-deeper font-black text-[11px] uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center">
        <p className="text-text-light text-[10px] font-black uppercase tracking-widest">
          © 2026 Seedling Group of Schools, Jaipur. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
