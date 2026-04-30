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
    img: "/assets/Home/classroom.jpg",
    side: "right",
  },
  {
    year: "1998",
    title: "Growing Roots in Jawahar Nagar",
    desc: "Seedling Public School (CBSE) took root in Sector 4, Jawahar Nagar — becoming a cornerstone institution for families across Jaipur who sought holistic, values-driven education.",
    img: "/assets/ANNUAL FUNCTION/7.webp",
    side: "left",
  },
  {
    year: "2005",
    title: "Opening New Horizons — Durgapura",
    desc: "Seedling Modern High School (CBSE) opened its doors in Durgapura, expanding the group's reach and bringing the same ethos of joyful, reflective learning to a new community.",
    img: "/assets/SPORTS DAY/2.webp",
    side: "right",
  },
  {
    year: "2010",
    title: "Going Global — Cambridge Curriculum",
    desc: "Seedling International Academy launched with the Cambridge Board, giving students access to a world-class, internationally recognised curriculum while remaining rooted in Indian values.",
    img: "/assets/Home/smart-classroom.jpg",
    side: "left",
  },
  {
    year: "2015",
    title: "Seedling Modern International Academy",
    desc: "A second Cambridge-affiliated institution — Seedling Modern International Academy — was established in Durgapura, completing a full dual-campus, dual-curriculum ecosystem.",
    img: "/assets/Home/library.jpg",
    side: "right",
  },
  {
    year: "2018",
    title: "Nurturing the Youngest Minds",
    desc: "Seedling Wonderland Kids League was born — a thoughtfully designed early-years environment at both campuses that recognises play as the most powerful form of learning.",
    img: "/assets/PRIMARY OUTING/1.webp",
    side: "left",
  },
];

const leaders = [
  {
    name: "Late Ms. Mohini Bakshi",
    role: "Founder Director",
    sub: "Seedling Group of Institutions",
    quote: "The life of one we love is never lost. Its influence goes on through all the lives it ever touched.",
    img: "https://seedlingschools.com/assets/img/mohini.png",
    tag: "Legacy",
  },
  {
    name: "Dr. Sandeep Bakshi",
    role: "CEO & Director",
    sub: "Seedling Group of Institutions",
    quote: "To make education monumentally effective, we must teach young people to grow their own plants rather than giving them cut flowers.",
    img: "https://seedlingschools.com/assets/img/sandeep.png",
    tag: "Forever New Frontiers",
  },
  {
    name: "Dr. Preeti Bakshi",
    role: "Executive Director",
    sub: "Seedling Group of Institutions",
    quote: "Give pupils something to do, not something to learn — and the doing demands thinking; learning naturally results.",
    img: "https://seedlingschools.com/assets/img/preeti.png",
    tag: "Creating Fresh Pathways",
  },
  {
    name: "Ms. Akansha Bakshi",
    role: "Joint Director",
    sub: "Seedling Group of Institutions",
    quote: "Adaptability to change is itself a hallmark of successful education.",
    img: "https://seedlingschools.com/assets/img/akansha.png",
    tag: "Engagement that Empowers",
  },
  {
    name: "Ms. Aishwarya Bakshi",
    role: "Joint Director",
    sub: "Seedling Group of Institutions",
    quote: "The only person who is educated is the one who has learned how to learn and change.",
    img: "https://seedlingschools.com/assets/img/aishwarya.png",
    tag: "Promoting Global Citizenship",
  },
];

const campusImages = [
  { src: "/assets/Home/classroom.jpg", label: "Main Campus", span: "col-span-2 row-span-2" },
  { src: "/assets/Home/smart-classroom.jpg", label: "Science Labs", span: "col-span-1 row-span-1" },
  { src: "/assets/Home/library.jpg", label: "Library", span: "col-span-1 row-span-1" },
  { src: "/assets/SPORTS DAY/1.webp", label: "Sports Ground", span: "col-span-1 row-span-1" },
  { src: "/assets/PRIMARY OUTING/2.webp", label: "Kindergarten", span: "col-span-1 row-span-1" },
  { src: "/assets/Home/classroom.jpg", label: "Classrooms", span: "col-span-2 row-span-1" },
];

const stats = [
  { value: "20,000+", label: "Students Enrolled" },
  { value: "15:1", label: "Student–Teacher Ratio" },
  { value: "5,000+", label: "Alumni Worldwide" },
  { value: "100%", label: "Board Results" },
  { value: "50+", label: "Nations Represented" },
  { value: "1992", label: "Year Established" },
];

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background image with parallax feel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[20s] ease-out"
        style={{
          backgroundImage:
            "url('/assets/about/about-banner.jpg')",
        }}
      />

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deeper/80 via-navy-dark/60 to-sand/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper via-transparent to-transparent" />

      {/* Decorative geometry */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 400 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="400" cy="200" r="300" fill="none" stroke="currentColor" className="text-sand" strokeWidth="1" />
          <circle cx="400" cy="200" r="220" fill="none" stroke="currentColor" className="text-sand" strokeWidth="0.5" />
          <circle cx="400" cy="600" r="200" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 className="font-playfair text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tight mb-6 animate-fade-in-up">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand via-white/50 to-sand">
            Us
          </span>
        </h1>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}

      <Hero />

      {/* ══════════════════════════════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════════════════════════════ */}
      {/* <section className="bg-navy-deeper text-white py-12 border-y border-sand/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-sand/20">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-4 text-center">
                <p className="font-playfair text-3xl md:text-5xl font-semibold text-sand">{s.value}</p>
                <p className="text-white/60 text-xs mt-2 tracking-widest uppercase font-dm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════════════════════════
          2. WHO WE ARE
      ══════════════════════════════════════════════════════════════ */}
      <section id="story" className="py-10 md:py-16 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="font-playfair text-crimson text-xl italic mb-4">Who We Are</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-light leading-tight mb-8 text-navy-deeper">
                A Family. <br />
                <em className="font-semibold text-navy">A Movement.</em><br />
                A Legacy.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-text-base leading-[1.9] text-lg mb-6 font-dm">
                Founded in 1992 by the visionary Late Ms. Mohini Bakshi, Seedling Group of Schools was born from a simple but profound belief — that education must prioritise the whole child. Not just marks. Not just ranks. But the full, flourishing human being.
              </p>
              {/* <p className="text-text-light leading-[1.9] text-lg font-dm border-l-4 border-sand pl-6 italic">
                Today, under the leadership of Dr. Sandeep Bakshi, Dr. Preeti Bakshi, and the next generation of the Bakshi family, the group runs five schools across two Jaipur campuses.
              </p> */}
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 space-y-5">
                {[
                  { icon: "🌱", title: "Holistic Development", desc: "Intellectual, social, moral, spiritual, emotional and physical growth for every child." },
                  { icon: "🌍", title: "NEP Aligned Curriculum", desc: "Thoughtfully designed to align with the National Education Policy — ensuring students receive a relevant, future-ready education." },
                  { icon: "❤️", title: "Student Well-being First", desc: "A safe, inclusive and stimulating learning environment where every student feels confident, respected and motivated to grow." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-2xl hover:bg-navy-light transition-colors duration-300">
                    <span className="text-2xl mt-1">{item.icon}</span>
                    <div>
                      <h4 className="font-playfair font-semibold text-xl mb-1">{item.title}</h4>
                      <p className="text-text-light text-sm leading-relaxed font-dm">{item.desc}</p>
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
                src="/assets/about/empowering-about.png"
                alt="Seedling Students Learning"
                className="w-full h-[560px] object-cover rounded-2xl shadow-2xl transition-all duration-700"
              />
              <img
                src="/assets/about/grow.jpg"
                alt="Seedling Campus Life"
                className="absolute -bottom-8 -left-8 w-48 h-48 object-cover rounded-2xl shadow-xl border-4 border-white"
              />
              <div className="absolute -top-6 -right-6 bg-crimson text-white rounded-2xl px-6 py-4 shadow-xl">
                <p className="font-playfair text-4xl font-semibold">30+</p>
                <p className="text-white/80 text-xs tracking-widest uppercase font-dm">Years of Excellence</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CORE VALUES
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-navy-light/10 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mauve/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <p className="font-playfair text-crimson text-xl italic mb-3">Our Guiding Principles</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper">
              Core Values of <em className="font-semibold text-navy">Seedlings</em>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Integrity",
                desc: "Being honest and ethical in all actions.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: "text-crimson",
                bg: "bg-crimson/10",
              },
              {
                title: "Respect",
                desc: "Valuing self, others, and the environment.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                color: "text-navy",
                bg: "bg-navy/10",
              },
              {
                title: "Responsibility",
                desc: "Taking ownership of actions and duties.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "text-mauve",
                bg: "bg-mauve/10",
              },
              {
                title: "Excellence",
                desc: "Striving to achieve the best in everything.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                color: "text-sand",
                bg: "bg-sand/10",
              },
              {
                title: "Empathy",
                desc: "Understanding and caring for others.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                color: "text-crimson",
                bg: "bg-crimson/10",
              },
              {
                title: "Discipline",
                desc: "Maintaining consistency and self-control.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
                color: "text-navy",
                bg: "bg-navy/10",
              },
            ].map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-off-white hover:border-sand/40 group h-full flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${value.bg} ${value.color} group-hover:scale-110 transition-transform duration-500`}>
                    {value.icon}
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-3 text-navy-deeper">{value.title}</h3>
                  <p className="text-text-light text-base leading-relaxed font-dm">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. TIMELINE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white md:py-16 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-24">
            <p className="font-playfair text-mauve text-xl italic mb-3">Our Journey</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper">
              From <em className="font-semibold text-crimson">Nursery</em><br />to University
            </h2>
            <div className="w-16 h-px bg-sand mx-auto mt-8" />
          </Reveal>

          <div className="relative timeline-line">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 60}>
                <div className={`relative flex flex-col md:flex-row items-center gap-8 ${i===5 ? "mb-4" : "mb-24"} ${item.side === "left" ? "md:flex-row-reverse" : ""}`}>
                  {/* dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-navy rounded-full ring-4 ring-navy-light z-10 hidden md:block" />

                  {/* image */}
                  <div className="md:w-5/12">
                    <div className="overflow-hidden rounded-2xl shadow-xl group border border-sand/30">
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
                      <span className="font-playfair text-7xl font-light text-sand/40 leading-none block">{item.year}</span>
                      <h3 className="font-playfair text-3xl font-semibold mt-2 mb-4 text-navy-deeper">{item.title}</h3>
                      <p className="text-text-light leading-[1.9] text-base font-dm">{item.desc}</p>
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
      <section className="relative py-10 sm:py-16 px-5 sm:px-6 overflow-hidden">
        {/* <img
          src="/assets/about/feature-education.png"
          alt="Seedling Philosophy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-navy-deeper/60 to-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <Reveal>
            <p className="font-playfair text-sand text-3xl italic mb-6 tracking-wide">Our Philosophy</p>
            <blockquote className="font-playfair text-5xl md:text-7xl font-light leading-[1.1] mb-10 text-white">
              "हस्ये नयतु नः ब्रह्मज्ञानं"
            </blockquote>
            <p className="font-playfair text-2xl font-light italic text-sand mb-12">
              We aim at wisdom and the ability to comprehend.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-white/80 text-xl leading-[1.8] max-w-3xl mx-auto mb-10 font-dm">
              We believe education must be joyful, reflective, and creative — developing students who are resilient, adaptable, and equipped to continue learning long after they leave our halls.
            </p>
            <div className="h-px w-24 bg-crimson mx-auto mb-10" />
            <p className="font-playfair text-2xl italic text-sand">
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
      <section className="py-10 sm:py-16  max-w-7xl mx-auto px-5 sm:px-6">
        <Reveal className="text-center mb-20">
          <p className="font-playfair text-navy text-xl italic mb-3">Direction & Purpose</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-light">
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
              body: "To be a beacon of wisdom — nurturing young minds that can comprehend, question, and contribute meaningfully to the world. We envision graduates who are life-ready and life-worthy, open to noble thoughts from every direction.",
              accent: "bg-navy",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              label: "Our Mission",
              title: "Joyful, Whole-Child Learning",
              body: "To provide a joyful learning environment that empowers students to reach their educational and personal potential while nurturing self-confidence and self-esteem — developing resilient, adaptable, socially responsible adults.",
              accent: "bg-mauve",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ),
              label: "Our Promise",
              title: "Community & Collaboration",
              body: "Every stakeholder — student, parent, teacher — matters. We commit to active communication, holistic well-being, and an environment where every child feels seen, valued, and motivated to grow into their fullest potential.",
              accent: "bg-crimson",
            },
          ].map((card, i) => (
            <Reveal key={card.label} delay={i * 120}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-off-white overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 ${card.accent}`} />
                <div className={`inline-flex p-3 rounded-xl ${card.accent} text-white mb-6`}>
                  {card.icon}
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-text-light mb-2 font-dm">{card.label}</p>
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-text-base">{card.title}</h3>
                <p className="text-text-light leading-[1.9] text-sm font-dm">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NEP ALIGNMENT BAND
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-navy-light/40 py-24 px-5 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-mauve/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand/20 rounded-full blur-3xl -ml-48 -mb-48" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal className="text-center mb-16">
            <p className="font-playfair text-navy text-xl italic mb-3">What Makes Us Special</p>
            <h2 className="font-playfair text-5xl font-light text-navy-deeper">
              Seedling's <em className="font-semibold text-mauve">Differentiators</em>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: "📋", title: "Aligned with NEP", desc: "Our curriculum is thoughtfully designed to align with the National Education Policy — ensuring students receive a relevant, future-ready education with global standards." },
              { emoji: "🏛️", title: "State-of-the-Art Facilities", desc: "Spacious modern classrooms, well-equipped science laboratories, a well-stocked library, and inspiring outdoor spaces that enhance the learning experience." },
              { emoji: "💻", title: "Technology-Integrated Learning", desc: "Interactive whiteboards, AI-integrated tools, educational apps, and online resources create an engaging and dynamic learning experience every single day." },
              { emoji: "🔬", title: "Experiential Learning", desc: "Hands-on experiments, outdoor excursions, and interactive projects foster critical thinking, problem-solving, and a genuine love for discovery beyond textbooks." },
              { emoji: "💬", title: "Student-Centred Approach", desc: "Personalised attention with continuous assessment, timely feedback, and open parent–teacher communication ensure the continuous growth of each child." },
              { emoji: "🌿", title: "Holistic Well-being", desc: "We nurture not only academic growth but emotional, social, and physical well-being — for students, parents, and staff alike. Integrity, Respect, Empathy at our core." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-sand/50 group">
                  <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">{p.emoji}</span>
                  <h4 className="font-playfair text-2xl font-semibold mb-4 text-navy">{p.title}</h4>
                  <p className="text-text-light text-sm leading-[1.9] font-dm">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. CAMPUS GLIMPSES
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-navy-deeper relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <Reveal className="text-center mb-16">
            <p className="font-playfair text-sand text-xl italic mb-3">Campus Life</p>
            <h2 className="font-playfair text-5xl md:text-6xl font-light text-white">
              A Glimpse of<br />
              <em className="font-semibold text-crimson">Our World</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[700px]">
            {campusImages.map((img, i) => (
              <Reveal key={i} delay={i * 60} className={img.span}>
                <div className="relative overflow-hidden rounded-3xl h-full group cursor-pointer border border-white/5">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span
                    className="absolute bottom-6 left-6 text-white text-lg font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-dm"
                  >
                    {img.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-6 mt-32 text-center relative z-10">
          <Reveal>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white mb-8">
              Ready to Join the<br />
              <em className="font-semibold text-sand">Seedling Family?</em>
            </h2>
            <p className="text-white/60 text-xl mb-12 font-dm max-w-2xl mx-auto">
              Admissions open for 2026–27. Step into a world of limitless possibilities.
            </p>
            <a
              href="/admission-procedure"
              className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-12 py-6 rounded-full text-sm tracking-widest uppercase transition-all duration-500 hover:shadow-2xl hover:shadow-crimson/40 hover:gap-6 font-dm"
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