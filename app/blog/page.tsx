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
);

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
    <>
      {/* ── Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        .blog-container {
          --serif: 'Lora', Georgia, serif;
          --sans: 'Outfit', system-ui, sans-serif;
          --green: #059669;
          --green-light: #d1fae5;
          --green-dark: #047857;
          --stone-50: #fafaf9;
          --stone-100: #f5f5f4;
          --stone-200: #e7e5e4;
          --stone-300: #d6d3d1;
          --stone-400: #a8a29e;
          --stone-500: #78716c;
          --stone-600: #57534e;
          --stone-800: #292524;
          --stone-900: #1c1917;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
          --shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05);
          --shadow-lg: 0 12px 40px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06);

          font-family: var(--sans);
          background: var(--stone-50);
          color: var(--stone-900);
          -webkit-font-smoothing: antialiased;
        }

        .blog-container * {
          box-sizing: border-box;
        }

        .blog-container .serif { font-family: var(--serif); }
        .blog-container img { display: block; max-width: 100%; }

        /* hero */
        .blog-container .hero { padding: 72px 24px 56px; position: relative; overflow: hidden; border-bottom: 1px solid var(--stone-100); }
        .blog-container .hero-bg-dots { position: absolute; inset: 0; background-image: radial-gradient(circle at 1px 1px, var(--stone-200) 1px, transparent 0); background-size: 30px 30px; opacity: .5; pointer-events: none; }
        .blog-container .hero-glow { position: absolute; right: 0; top: 0; width: 480px; height: 100%; background: radial-gradient(ellipse at 90% 50%, rgba(209,250,229,0.45) 0%, transparent 70%); pointer-events: none; }
        .blog-container .hero-inner { position: relative; max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: center; }
        .blog-container .hero-kicker { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 20px; }
        .blog-container .hero-kicker-bar { width: 32px; height: 2px; background: var(--green); border-radius: 1px; }
        .blog-container .hero-kicker-text { font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: var(--green-dark); }
        .blog-container .hero-h1 { font-family: var(--serif); font-size: clamp(38px, 5vw, 58px); font-weight: 700; line-height: 1.07; letter-spacing: -.02em; color: var(--stone-900); margin-bottom: 16px; }
        .blog-container .hero-h1 em { font-style: italic; font-weight: 400; color: var(--stone-400); }
        .blog-container .hero-desc { font-size: 16px; font-weight: 300; line-height: 1.75; color: var(--stone-500); max-width: 460px; margin-bottom: 32px; }
        .blog-container .hero-stats { display: flex; gap: 32px; flex-wrap: wrap; }
        .blog-container .hero-stat-num { font-family: var(--serif); font-size: 26px; font-weight: 700; color: var(--stone-900); line-height: 1; }
        .blog-container .hero-stat-label { font-size: 12px; color: var(--stone-400); margin-top: 2px; font-weight: 500; }
        .blog-container .hero-right { display: flex; flex-direction: column; gap: 10px; }
        .blog-container .hero-pill { display: flex; align-items: center; gap: 8px; background: white; border: 1px solid var(--stone-100); border-radius: 40px; padding: 8px 14px; box-shadow: var(--shadow-sm); white-space: nowrap; }
        .blog-container .hero-pill-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .blog-container .hero-pill-text { font-size: 12px; font-weight: 500; color: var(--stone-600); }
        @media (max-width: 760px) { .blog-container .hero-right { display: none; } .blog-container .hero-inner { grid-template-columns: 1fr; } }

        /* section label */
        .blog-container .section-label { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .blog-container .sl-text { font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: var(--stone-400); white-space: nowrap; }
        .blog-container .sl-line { flex: 1; height: 1px; background: var(--stone-100); }

        /* featured */
        .blog-container .featured-section { padding: 48px 24px 40px; max-width: 1152px; margin: 0 auto; }
        .blog-container .featured-card { display: grid; grid-template-columns: 55% 1fr; border-radius: 20px; overflow: hidden; background: white; border: 1px solid var(--stone-100); box-shadow: var(--shadow-sm); transition: box-shadow .4s; cursor: pointer; text-decoration: none; color: inherit; }
        .blog-container .featured-card:hover { box-shadow: var(--shadow-lg); }
        .blog-container .featured-img { position: relative; min-height: 380px; overflow: hidden; }
        .blog-container .featured-img img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .7s cubic-bezier(.25,.46,.45,.94); }
        .blog-container .featured-card:hover .featured-img img { transform: scale(1.05); }
        .blog-container .featured-img-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,0,0,0.18) 0%, transparent 60%); }
        .blog-container .featured-badge-wrap { position: absolute; top: 20px; left: 20px; display: flex; gap: 6px; flex-wrap: wrap; }
        .blog-container .badge { background: rgba(255,255,255,0.94); backdrop-filter: blur(4px); color: var(--stone-700, #44403c); font-size: 10px; font-weight: 700; padding: 4px 10px; border-radius: 20px; letter-spacing: .05em; }
        .blog-container .badge-green { background: var(--green); color: white; }
        .blog-container .featured-content { padding: 44px 48px; display: flex; flex-direction: column; justify-content: center; }
        .blog-container .featured-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
        .blog-container .meta-date { font-size: 12px; color: var(--stone-400); font-weight: 500; }
        .blog-container .meta-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--stone-300); }
        .blog-container .meta-read { font-size: 12px; color: var(--stone-400); font-weight: 500; }
        .blog-container .featured-title { font-family: var(--serif); font-size: clamp(20px, 2.4vw, 28px); font-weight: 700; line-height: 1.25; letter-spacing: -.01em; color: var(--stone-900); margin-bottom: 16px; transition: color .3s; }
        .blog-container .featured-card:hover .featured-title { color: var(--green-dark); }
        .blog-container .featured-excerpt { font-size: 14px; font-weight: 300; line-height: 1.78; color: var(--stone-500); margin-bottom: 32px; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
        .blog-container .cta-link { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: var(--green); transition: gap .25s; }
        .blog-container .featured-card:hover .cta-link { gap: 12px; }
        @media (max-width: 720px) { .blog-container .featured-card { grid-template-columns: 1fr; } .blog-container .featured-img { min-height: 240px; } .blog-container .featured-content { padding: 28px 24px; } }

        /* grid section */
        .blog-container .grid-section { max-width: 1152px; margin: 0 auto; padding: 0 24px 72px; }

        /* filters */
        .blog-container .filters-bar { display: flex; gap: 7px; flex-wrap: wrap; margin-bottom: 36px; }
        .blog-container .filter-btn { padding: 8px 16px; border-radius: 24px; font-size: 12px; font-weight: 500; font-family: var(--sans); border: none; cursor: pointer; transition: all .2s; white-space: nowrap; }
        .blog-container .filter-btn.inactive { background: var(--stone-100); color: var(--stone-500); }
        .blog-container .filter-btn.inactive:hover { background: var(--stone-200); color: var(--stone-800); }
        .blog-container .filter-btn.active { background: var(--stone-900); color: white; box-shadow: var(--shadow-sm); }

        /* blog grid */
        .blog-container .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 960px) { .blog-container .blog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .blog-container .blog-grid { grid-template-columns: 1fr; } }

        /* blog card */
        .blog-container .blog-card { background: white; border-radius: 16px; overflow: hidden; border: 1px solid var(--stone-100); box-shadow: var(--shadow-sm); transition: box-shadow .3s, transform .3s; text-decoration: none; color: inherit; display: flex; flex-direction: column; }
        .blog-container .blog-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
        .blog-container .card-img { position: relative; height: 196px; overflow: hidden; background: var(--stone-100); flex-shrink: 0; }
        .blog-container .card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
        .blog-container .blog-card:hover .card-img img { transform: scale(1.06); }
        .blog-container .card-cat { position: absolute; bottom: 12px; left: 12px; background: rgba(255,255,255,0.92); backdrop-filter: blur(4px); color: var(--stone-600); font-size: 9px; font-weight: 700; padding: 4px 9px; border-radius: 12px; letter-spacing: .05em; max-width: calc(100% - 24px); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .blog-container .card-body { padding: 20px 20px 22px; display: flex; flex-direction: column; flex: 1; }
        .blog-container .card-meta { display: flex; align-items: center; gap: 6px; margin-bottom: 10px; }
        .blog-container .card-date, .blog-container .card-read { font-size: 11px; color: var(--stone-400); font-weight: 500; }
        .blog-container .card-dot { width: 2px; height: 2px; border-radius: 50%; background: var(--stone-300); }
        .blog-container .card-title { font-family: var(--serif); font-size: 15.5px; font-weight: 600; line-height: 1.38; letter-spacing: -.005em; color: var(--stone-900); margin-bottom: 9px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; transition: color .25s; }
        .blog-container .blog-card:hover .card-title { color: var(--green-dark); }
        .blog-container .card-excerpt { font-size: 13px; font-weight: 300; line-height: 1.68; color: var(--stone-500); margin-bottom: 18px; flex: 1; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .blog-container .card-cta { display: flex; align-items: center; gap: 5px; font-size: 12px; font-weight: 600; color: var(--green); margin-top: auto; transition: gap .25s; }
        .blog-container .blog-card:hover .card-cta { gap: 8px; }

        /* empty state */
        .blog-container .empty-state { grid-column: 1 / -1; text-align: center; padding: 80px 0; color: var(--stone-400); font-size: 15px; }

        /* pagination */
        .blog-container .pagination { display: flex; align-items: center; justify-content: center; gap: 6px; padding-top: 48px; flex-wrap: wrap; }
        .blog-container .page-btn { width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--stone-200); background: white; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; color: var(--stone-500); font-family: var(--sans); transition: all .2s; }
        .blog-container .page-btn:hover:not(:disabled) { border-color: var(--stone-400); color: var(--stone-900); }
        .blog-container .page-btn.active { background: var(--stone-900); border-color: var(--stone-900); color: white; }
        .blog-container .page-btn:disabled { opacity: .3; cursor: not-allowed; }
        .blog-container .page-btn.nav-arrow { background: none; }

        /* CTA */
        .blog-container .cta-section { padding: 16px 24px 56px; max-width: 1152px; margin: 0 auto; }
        .blog-container .cta-box { background: linear-gradient(140deg, #111827 0%, #1c1917 100%); border-radius: 24px; padding: 64px 48px; text-align: center; position: relative; overflow: hidden; }
        .blog-container .cta-glow-1 { position: absolute; top: -60px; right: -60px; width: 320px; height: 320px; background: radial-gradient(circle, rgba(5,150,105,0.15), transparent 70%); pointer-events: none; }
        .blog-container .cta-glow-2 { position: absolute; bottom: -40px; left: -40px; width: 240px; height: 240px; background: radial-gradient(circle, rgba(52,211,153,0.08), transparent 70%); pointer-events: none; }
        .blog-container .cta-icon-wrap { width: 48px; height: 48px; border-radius: 14px; background: rgba(16,185,129,.15); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
        .blog-container .cta-kicker { font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: #34d399; margin-bottom: 14px; }
        .blog-container .cta-title { font-family: var(--serif); font-size: clamp(26px,4vw,36px); font-weight: 700; color: white; letter-spacing: -.02em; margin-bottom: 12px; }
        .blog-container .cta-desc { font-size: 14px; font-weight: 300; color: #9ca3af; line-height: 1.72; max-width: 380px; margin: 0 auto 32px; }
        .blog-container .cta-form { display: flex; gap: 10px; max-width: 420px; margin: 0 auto; }
        .blog-container .cta-input { flex: 1; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15); color: white; font-size: 13px; font-family: var(--sans); padding: 12px 18px; border-radius: 12px; outline: none; transition: border-color .2s; }
        .blog-container .cta-input::placeholder { color: #6b7280; }
        .blog-container .cta-input:focus { border-color: var(--green); }
        .blog-container .cta-submit { background: var(--green); color: white; font-size: 13px; font-weight: 600; font-family: var(--sans); padding: 12px 24px; border-radius: 12px; border: none; cursor: pointer; transition: background .2s; white-space: nowrap; }
        .blog-container .cta-submit:hover { background: #10b981; }
        .blog-container .cta-success { display: inline-flex; align-items: center; gap: 8px; background: rgba(16,185,129,.15); color: #34d399; padding: 12px 24px; border-radius: 20px; font-size: 14px; font-weight: 600; border: 1px solid rgba(52,211,153,.25); }
        @media (max-width: 520px) { .blog-container .cta-form { flex-direction: column; } .blog-container .cta-box { padding: 40px 24px; } }

        /* fade-in animation */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .blog-container .fade-up { animation: fadeUp .5s ease both; }
        .blog-container .delay-1 { animation-delay: .08s; }
        .blog-container .delay-2 { animation-delay: .16s; }
        .blog-container .delay-3 { animation-delay: .24s; }
      `}</style>

      <div className="blog-container" style={{ minHeight: "100vh" }}>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="hero">
          <div className="hero-bg-dots" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-left fade-up">
              <div className="hero-kicker">
                <span className="hero-kicker-bar" />
                <span className="hero-kicker-text">Seedling Schools Blog</span>
              </div>
              <h1 className="hero-h1 serif">
                Stories, Ideas<br />&amp; <em>Insights</em>
              </h1>
              <p className="hero-desc">
                Perspectives on education, child development, and the future of learning — thoughtfully curated for parents, educators, and curious minds across Jaipur.
              </p>
              <div className="hero-stats">
                {[
                  { num: "20+", label: "Articles Published" },
                  { num: "20k+", label: "Students Served" },
                  { num: "3 Decades", label: "Of Excellence" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div className="hero-stat-num serif">{num}</div>
                    <div className="hero-stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-right fade-up delay-2">
              {[
                { color: "#059669", label: "Student Development" },
                { color: "#0284c7", label: "Cambridge Learning" },
                { color: "#d97706", label: "Parental Resources" },
                { color: "#7c3aed", label: "Mental Wellbeing" },
                { color: "#db2777", label: "Early Education" },
              ].map(({ color, label }) => (
                <div key={label} className="hero-pill">
                  <div className="hero-pill-dot" style={{ background: color }} />
                  <span className="hero-pill-text">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ FEATURED POST ══════════════════ */}
        <section className="featured-section fade-up delay-1">
          <div className="section-label">
            <span className="sl-text">Featured Story</span>
            <div className="sl-line" />
          </div>
          <a
            href={postUrl(FEATURED.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-card"
          >
            <div className="featured-img">
              <img src={FEATURED.img} alt={FEATURED.title} />
              <div className="featured-img-overlay" aria-hidden="true" />
              <div className="featured-badge-wrap">
                <span className="badge badge-green">Featured</span>
                {FEATURED.categories.slice(0, 1).map((c) => (
                  <span key={c} className="badge">{c}</span>
                ))}
              </div>
            </div>
            <div className="featured-content">
              <div className="featured-meta">
                <time dateTime={FEATURED.dateISO} className="meta-date">{FEATURED.date}</time>
                <span className="meta-dot" aria-hidden="true" />
                <span className="meta-read">{FEATURED.readMin} min read</span>
              </div>
              <h2 className="featured-title serif">{FEATURED.title}</h2>
              <p className="featured-excerpt">{FEATURED.excerpt}</p>
              <span className="cta-link">
                Read Full Article <ArrowRight />
              </span>
            </div>
          </a>
        </section>

        {/* ══════════════════ GRID + FILTERS ══════════════════ */}
        <section className="grid-section">
          <div className="section-label">
            <div className="sl-line" />
            <span className="sl-text">All Articles</span>
            <div className="sl-line" />
          </div>

          {/* Category Filters */}
          <div className="filters-bar" role="tablist" aria-label="Filter by category">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`filter-btn ${activeCategory === cat ? "active" : "inactive"}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {paginated.length === 0 ? (
              <div className="empty-state">No articles found in this category.</div>
            ) : (
              paginated.map((post, idx) => (
                <a
                  key={post.id}
                  href={postUrl(post.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card fade-up"
                  style={{ animationDelay: `${idx * 0.06}s` }}
                >
                  <div className="card-img">
                    <img src={post.img} alt={post.title} loading="lazy" />
                    <span className="card-cat">{post.categories[0]}</span>
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <time dateTime={post.dateISO} className="card-date">{post.date}</time>
                      <span className="card-dot" aria-hidden="true" />
                      <span className="card-read">{post.readMin} min read</span>
                    </div>
                    <h3 className="card-title serif">{post.title}</h3>
                    <p className="card-excerpt">{post.excerpt}</p>
                    <span className="card-cta">
                      Read More <ArrowRight size={13} />
                    </span>
                  </div>
                </a>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="pagination" aria-label="Pagination">
              <button
                className="page-btn nav-arrow"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <ChevronLeft />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`page-btn${currentPage === page ? " active" : ""}`}
                  onClick={() => setCurrentPage(page)}
                  aria-label={`Page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              ))}
              <button
                className="page-btn nav-arrow"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <ChevronRight />
              </button>
            </nav>
          )}
        </section>

        {/* ══════════════════ NEWSLETTER CTA ══════════════════ */}
        <section className="cta-section">
          <div className="cta-box">
            <div className="cta-glow-1" aria-hidden="true" />
            <div className="cta-glow-2" aria-hidden="true" />
            <div className="cta-icon-wrap"><MailIcon /></div>
            <p className="cta-kicker">Stay in the Loop</p>
            <h2 className="cta-title serif">Never Miss an Update</h2>
            <p className="cta-desc">
              Get the latest articles on education, child development, and school life delivered straight to your inbox.
            </p>
            {subscribed ? (
              <div className="cta-success">
                <CheckIcon /> You&apos;re subscribed — thank you!
              </div>
            ) : (
              <form className="cta-form" onSubmit={handleSubscribe}>
                <input
                  className="cta-input"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                <button type="submit" className="cta-submit">Subscribe</button>
              </form>
            )}
          </div>
        </section>

      </div>
    </>
  );
}
