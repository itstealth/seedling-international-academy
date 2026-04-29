"use client";

import { useEffect, useRef, useState } from "react";

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ─── Reveal Wrapper ───────────────────────────────────────────────────────────
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const timeline = [
  {
    year: "1992",
    title: "The Seed is Planted",
    desc: "Late Ms. Mohini Bakshi founded Seedling Group of Institutions in Jaipur with a vision to nurture every child as a unique individual — prioritising student well-being and community values above all else.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    side: "right",
  },
  {
    year: "1998",
    title: "Growing Roots in Jawahar Nagar",
    desc: "Seedling Public School (CBSE) took root in Sector 4, Jawahar Nagar — becoming a cornerstone institution for families across Jaipur who sought holistic, values-driven education.",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    side: "left",
  },
  {
    year: "2005",
    title: "Opening New Horizons — Durgapura",
    desc: "Seedling Modern High School (CBSE) opened its doors in Durgapura, expanding the group's reach and bringing the same ethos of joyful, reflective learning to a new community.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    side: "right",
  },
  {
    year: "2010",
    title: "Going Global — Cambridge Curriculum",
    desc: "Seedling International Academy launched with the Cambridge Board, giving students access to a world-class, internationally recognised curriculum while remaining rooted in Indian values.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    side: "left",
  },
  {
    year: "2015",
    title: "Seedling Modern International Academy",
    desc: "A second Cambridge-affiliated institution — Seedling Modern International Academy — was established in Durgapura, completing a full dual-campus, dual-curriculum ecosystem.",
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
    side: "right",
  },
  {
    year: "2018",
    title: "Nurturing the Youngest Minds",
    desc: "Seedling Wonderland Kids League was born — a thoughtfully designed early-years environment at both campuses that recognises play as the most powerful form of learning.",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    side: "left",
  },
  {
    year: "Today",
    title: "20,000+ Lives Shaped & Counting",
    desc: "Today the Seedling Group spans 5 schools, 2 campuses, CBSE and Cambridge boards, and serves over 20,000 students — with alumni spread across 50+ nations and a 100% board result record.",
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    side: "right",
  },
];

const leaders = [
  {
    name: "Late Ms. Mohini Bakshi",
    role: "Founder Director",
    sub: "Seedling Group of Institutions",
    quote: "The life of one we love is never lost. Its influence goes on through all the lives it ever touched.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    tag: "Legacy",
  },
  {
    name: "Dr. Sandeep Bakshi",
    role: "CEO & Director",
    sub: "Seedling Group of Institutions",
    quote: "Teach young people to grow their own plants rather than giving them cut flowers.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    tag: "Forever New Frontiers",
  },
  {
    name: "Dr. Preeti Bakshi",
    role: "Executive Director",
    sub: "Seedling Group of Institutions",
    quote: "Give pupils something to do, not something to learn — and the doing demands thinking; learning naturally results.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    tag: "Creating Fresh Pathways",
  },
  {
    name: "Ms. Akansha Bakshi",
    role: "Joint Director",
    sub: "Seedling Group of Institutions",
    quote: "Adaptability to change is itself a hallmark of successful education.",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&q=80",
    tag: "Engagement that Empowers",
  },
  {
    name: "Ms. Aishwarya Bakshi",
    role: "Joint Director",
    sub: "Seedling Group of Institutions",
    quote: "The only person who is educated is the one who has learned how to learn and change.",
    img: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=400&q=80",
    tag: "Promoting Global Citizenship",
  },
];

const campusImages = [
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80", label: "Main Campus", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80", label: "Science Labs", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80", label: "Library", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80", label: "Sports Ground", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80", label: "Kindergarten", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80", label: "Classrooms", span: "col-span-2 row-span-1" },
];

const stats = [
  { value: "20,000+", label: "Students Enrolled" },
  { value: "15:1", label: "Student–Teacher Ratio" },
  { value: "5,000+", label: "Alumni Worldwide" },
  { value: "100%", label: "Board Results" },
  { value: "50+", label: "Nations Represented" },
  { value: "1992", label: "Year Established" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="bg-[#FAFAF7] text-[#1C1C1E] font-['Cormorant_Garamond',serif] overflow-x-hidden">

      {/* ── Google Font Import ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        .display { font-family: 'Cormorant Garamond', serif; }
        .timeline-line::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, #2D6A4F 10%, #2D6A4F 90%, transparent);
        }
        @media (max-width: 768px) {
          .timeline-line::before { left: 20px; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1800&q=85"
          alt="Students at Seedling"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-[10s] hover:scale-100"
        />
        {/* gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
          <Reveal>
            <p className="display text-emerald-400 text-xl italic tracking-widest mb-4 uppercase">
              Est. 1992 · Jaipur, India
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="display text-white font-light leading-[1.05] text-6xl md:text-8xl lg:text-[7rem] max-w-4xl">
              Where Every<br />
              <em className="font-semibold">Student</em> Matters
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-white/70 text-lg md:text-xl mt-6 max-w-xl font-light leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Seedling Group of Schools has nurtured over 20,000 young minds across Jaipur — from playgroup to university — for more than three decades.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="#story"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/40"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Explore Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#admissions"
                className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Admissions 2026–27
              </a>
            </div>
          </Reveal>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase rotate-90 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#2D6A4F] text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-4 text-center">
                <p className="display text-3xl md:text-4xl font-semibold">{s.value}</p>
                <p className="text-white/60 text-xs mt-1 tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. WHO WE ARE
      ══════════════════════════════════════════════════════════════ */}
      <section id="story" className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="display text-emerald-600 text-xl italic mb-4">Who We Are</p>
              <h2 className="display text-5xl md:text-6xl font-light leading-tight mb-8">
                A Family. <br />
                <em className="font-semibold">A Movement.</em><br />
                A Legacy.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-[#555] leading-[1.9] text-lg mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Founded in 1992 by the visionary Late Ms. Mohini Bakshi, the Seedling Group of Schools was born from a simple but profound belief — that education must prioritise the whole child. Not just marks. Not just ranks. But the full, flourishing human being.
              </p>
              <p className="text-[#555] leading-[1.9] text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Today, under the leadership of Dr. Sandeep Bakshi, Dr. Preeti Bakshi, and the next generation of the Bakshi family, the group runs five schools across two Jaipur campuses — offering both CBSE and Cambridge curriculums from playgroup through senior secondary.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 space-y-5">
                {[
                  { icon: "🌱", title: "Holistic Development", desc: "Intellectual, social, moral, spiritual, emotional and physical growth for every child." },
                  { icon: "🌍", title: "International Standards", desc: "Cambridge and CBSE boards, aligned with NEP, serving alumni across 50+ nations." },
                  { icon: "❤️", title: "Community First", desc: "We measure success by the well-being of students, parents, and staff alike." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-2xl hover:bg-emerald-50 transition-colors duration-300">
                    <span className="text-2xl mt-1">{item.icon}</span>
                    <div>
                      <h4 className="display font-semibold text-xl mb-1">{item.title}</h4>
                      <p className="text-[#777] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Image stack */}
          <Reveal delay={150} className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80"
                alt="Students learning"
                className="w-full h-[560px] object-cover rounded-2xl shadow-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80"
                alt="Campus life"
                className="absolute -bottom-8 -left-8 w-48 h-48 object-cover rounded-2xl shadow-xl border-4 border-white"
              />
              <div className="absolute -top-6 -right-6 bg-emerald-600 text-white rounded-2xl px-6 py-4 shadow-xl">
                <p className="display text-4xl font-semibold">30+</p>
                <p className="text-white/80 text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>Years of Excellence</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. TIMELINE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-24">
            <p className="display text-emerald-600 text-xl italic mb-3">Our Journey</p>
            <h2 className="display text-5xl md:text-7xl font-light">
              From <em className="font-semibold">Nursery</em><br />to University
            </h2>
            <div className="w-16 h-px bg-emerald-500 mx-auto mt-8" />
          </Reveal>

          <div className="relative timeline-line">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 60}>
                <div className={`relative flex flex-col md:flex-row items-center gap-8 mb-24 ${item.side === "left" ? "md:flex-row-reverse" : ""}`}>
                  {/* dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-emerald-600 rounded-full ring-4 ring-emerald-100 z-10 hidden md:block" />

                  {/* image */}
                  <div className="md:w-5/12">
                    <div className="overflow-hidden rounded-2xl shadow-xl group">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* spacer */}
                  <div className="md:w-2/12" />

                  {/* text */}
                  <div className="md:w-5/12">
                    <div className={`${item.side === "left" ? "md:text-right" : ""}`}>
                      <span className="display text-6xl font-light text-emerald-100 leading-none block">{item.year}</span>
                      <h3 className="display text-3xl font-semibold mt-2 mb-4 text-[#1C1C1E]">{item.title}</h3>
                      <p className="text-[#666] leading-[1.9] text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. PHILOSOPHY (FULL-WIDTH PARALLAX)
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800&q=80"
          alt="Philosophy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-emerald-950/60 to-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Reveal>
            <p className="display text-emerald-300 text-2xl italic mb-6 tracking-wide">Our Philosophy</p>
            <blockquote className="display text-5xl md:text-6xl font-light leading-[1.2] mb-10">
              "हस्ये नयतु नः ब्रह्मज्ञानं"
            </blockquote>
            <p className="display text-2xl font-light italic text-white/70 mb-12">
              We aim at wisdom and the ability to comprehend.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-white/70 text-lg leading-[1.9] max-w-2xl mx-auto mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We believe education must be joyful, reflective, and creative — developing students who are resilient, adaptable, and equipped to continue learning long after they leave our halls. Our goal is not merely academic excellence, but the total development of the intellectual, social, moral, spiritual, emotional, and physical self.
            </p>
            <p className="display text-xl italic text-emerald-300">
              "उप नो सश्रा कृतवो यन्तु विश्रमः"
            </p>
            <p className="text-white/50 text-sm mt-2 tracking-wider uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Open the doors from all sides so that noble thoughts come in unhindered.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. VISION & MISSION
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <p className="display text-emerald-600 text-xl italic mb-3">Direction & Purpose</p>
          <h2 className="display text-5xl md:text-6xl font-light">
            Vision &amp; <em className="font-semibold">Mission</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
              label: "Our Vision",
              title: "Wisdom & Comprehension",
              body: "To be a beacon of wisdom — nurturing young minds that can comprehend, question, and contribute meaningfully to the world. We envision graduates who are life-ready and life-worthy.",
              accent: "bg-emerald-600",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              label: "Our Mission",
              title: "Joyful, Whole-Child Learning",
              body: "To provide a joyful learning environment that empowers students to reach their educational and personal potential, nurturing self-confidence, resilience, and adaptability — alongside intellectual excellence.",
              accent: "bg-amber-500",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ),
              label: "Our Promise",
              title: "Community & Collaboration",
              body: "Every stakeholder — student, parent, teacher — matters. We commit to active communication, holistic well-being, and an environment where every child feels seen, valued, and motivated to grow.",
              accent: "bg-rose-500",
            },
          ].map((card, i) => (
            <Reveal key={card.label} delay={i * 120}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#F0EDE8] overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${card.accent}`} />
                <div className={`inline-flex p-3 rounded-xl ${card.accent} text-white mb-6`}>
                  {card.icon}
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.label}</p>
                <h3 className="display text-2xl font-semibold mb-4 text-[#1C1C1E]">{card.title}</h3>
                <p className="text-[#666] leading-[1.9] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NEP ALIGNMENT BAND
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F5F0E8] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <p className="display text-emerald-600 text-xl italic mb-3">What Makes Us Special</p>
            <h2 className="display text-5xl font-light">
              Six Pillars of <em className="font-semibold">Excellence</em>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "📋", title: "Aligned with NEP", desc: "Our curriculum is thoughtfully designed to align with the National Education Policy — ensuring students receive a relevant, future-ready education." },
              { emoji: "🏛️", title: "State-of-the-Art Facilities", desc: "Modern classrooms, well-equipped science labs, and inspiring outdoor spaces that enhance the learning experience and encourage curiosity." },
              { emoji: "💻", title: "Technology-Integrated Learning", desc: "Interactive whiteboards, educational apps, and online resources create an engaging and dynamic learning experience every day." },
              { emoji: "🔬", title: "Experiential Learning", desc: "Hands-on experiments, outdoor excursions, and interactive projects foster critical thinking, problem-solving, and a genuine love for discovery." },
              { emoji: "💬", title: "Effective Feedback", desc: "Timely, constructive feedback and open parent–teacher communication ensure the continuous growth and development of each child." },
              { emoji: "🌿", title: "Holistic Well-being", desc: "We nurture not only academic growth but emotional, social, and physical well-being — for students, parents, and staff alike." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 h-full hover:shadow-lg transition-shadow duration-300 border border-[#E8E3DA]">
                  <span className="text-4xl mb-5 block">{p.emoji}</span>
                  <h4 className="display text-xl font-semibold mb-3">{p.title}</h4>
                  <p className="text-[#666] text-sm leading-[1.9]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          DIRECTOR'S MESSAGE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80"
                alt="Director"
                className="w-full h-[560px] object-cover rounded-2xl shadow-2xl object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-[#F0EDE8]">
                <p className="display text-lg font-semibold">Dr. Sandeep Bakshi</p>
                <p className="text-emerald-600 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>CEO & Director, Seedling Group</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="display text-emerald-600 text-xl italic mb-4">Director's Communiqué</p>
              <h2 className="display text-4xl md:text-5xl font-light leading-tight mb-8">
                "Life Ready<br />
                &amp; <em className="font-semibold">Life Worthy"</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-[#555] leading-[1.9] text-base mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                As we dynamise our movement into a post-pandemic world, we sense opportunity at our doorstep. For us, it is a chance to rewrite the narrative of school — to make it more relevant to the realities of the world today. A place where learning happens not from a textbook or worksheet, but through contextual, real-life problem-solving.
              </p>
              <p className="text-[#555] leading-[1.9] text-base mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                At Seedling, we are constantly reflecting, reassessing, and recalibrating what the fundamental purpose of school is in an age of deep uncertainty and change. It will take community, collaboration, courage, conviction, and optimism to resist the pull of the status quo.
              </p>
              <p className="text-[#555] leading-[1.9] text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                From Play Group to University — your child, in our care, is promised a world of opportunities, memories, and milestones.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-px bg-emerald-500" />
                <span className="display italic text-xl text-[#999]">Dr. Sandeep Bakshi</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. LEADERSHIP
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <p className="display text-emerald-600 text-xl italic mb-3">Our Torchbearers</p>
            <h2 className="display text-5xl md:text-6xl font-light">
              The <em className="font-semibold">Leadership</em><br />Behind the Legacy
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 100}>
                <div className="group bg-[#FAFAF7] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#F0EDE8]">
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={l.img}
                      alt={l.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 right-4 bg-emerald-600/90 text-white text-xs px-3 py-1 rounded-full" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {l.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="display text-2xl font-semibold text-[#1C1C1E] mb-1">{l.name}</h3>
                    <p className="text-emerald-600 text-sm font-medium mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{l.role}</p>
                    <p className="text-[#999] text-xs mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{l.sub}</p>
                    <blockquote className="display italic text-[#555] text-base leading-relaxed border-l-2 border-emerald-200 pl-4">
                      "{l.quote}"
                    </blockquote>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. CAMPUS GLIMPSES
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#1C1C1E]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-20">
            <p className="display text-emerald-400 text-xl italic mb-3">Campus Life</p>
            <h2 className="display text-5xl md:text-6xl font-light text-white">
              A Glimpse of<br />
              <em className="font-semibold">Our World</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[700px]">
            {campusImages.map((img, i) => (
              <Reveal key={i} delay={i * 60} className={img.span}>
                <div className="relative overflow-hidden rounded-2xl h-full group cursor-pointer">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span
                    className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {img.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-6 mt-24 text-center">
          <Reveal>
            <h2 className="display text-5xl md:text-6xl font-light text-white mb-6">
              Ready to Join the<br />
              <em className="font-semibold text-emerald-400">Seedling Family?</em>
            </h2>
            <p className="text-white/50 text-lg mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Admissions open for 2026–27. Come feel the buzz.
            </p>
            <a
              href="/admission-procedure"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:gap-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Begin Your Application
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
