"use client";

import { useEffect, useRef, useState } from "react";

// ─── Scroll Reveal ────────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Tag / Label ──────────────────────────────────────────────────────────────
function Tag({ children, color = "navy" }: { children: React.ReactNode, color?: "navy" | "crimson" | "mauve" }) {
  const styles = {
    navy: "bg-navy-light text-navy border-navy/20",
    crimson: "bg-crimson/10 text-crimson border-crimson/20",
    mauve: "bg-mauve/10 text-mauve border-mauve/20",
  };
  return (
    <span className={`inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-4 font-dm ${styles[color]}`}>
      {children}
    </span>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const curricula = [
  {
    board: "CBSE",
    schools: ["Seedling Public School", "Seedling Modern High School"],
    icon: "🇮🇳",
    color: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    accent: "bg-orange-500",
    text: "text-orange-600",
    desc: "Affiliated with the Central Board of Secondary Education, our CBSE schools deliver a comprehensive, NEP-aligned curriculum. Our student-centric syllabus fosters holistic development and cultivates values, ethics, and leadership qualities — creating a stress-free environment that boosts self-esteem and confidence.",
    highlights: ["NEP Aligned", "100% Board Results", "Personalised Learning"],
  },
  {
    board: "Cambridge IGCSE",
    schools: ["Seedling International Academy", "Seedling Modern International Academy"],
    icon: "🌏",
    color: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    accent: "bg-sky-600",
    text: "text-sky-700",
    desc: "Your gateway to a holistic education under the esteemed Cambridge IGCSE Board. Our experienced faculty, state-of-the-art facilities, and a curriculum that promotes critical thinking and creativity create a stimulating learning environment where every student thrives and gains worldwide credibility.",
    highlights: ["Cambridge Primary → IGCSE", "Global Credibility", "University Counselling"],
  },
  {
    board: "Early Years",
    schools: ["Seedling Wonderland Kids League"],
    icon: "🌱",
    color: "from-emerald-50 to-green-50",
    border: "border-emerald-200",
    accent: "bg-emerald-600",
    text: "text-emerald-700",
    desc: "A thoughtfully designed early-years environment at both Jawahar Nagar and Durgapura campuses. Play is the most powerful form of learning — every activity is intentional, joyful, and developmental, nurturing curiosity and creativity from the very first day.",
    highlights: ["Play-Based Learning", "Dual Campus", "Age 2–6 Years"],
  },
];

const learningApproaches = [
  {
    title: "Aligned With National Education Policy (NEP)",
    body: "Our curriculum is thoughtfully designed to align with the latest educational standards and practices outlined by the NEP, ensuring our students receive a relevant and future-ready education. We focus on critical thinking, creativity, and empathy — preparing every student for the dynamic challenges of tomorrow.",
    img: "/assets/Home/classroom.jpg",
    tag: "Learning Philosophy",
  },
  {
    title: "Technology Integrated Innovative Education",
    body: "We embrace the power of technology in education. Our classrooms are equipped with interactive whiteboards, and we integrate educational apps and online resources to create an engaging and dynamic learning experience. Students are introduced to modern skills including AI, ethics, and sustainability — preparing them for a digitally driven world.",
    img: "/assets/Home/smart-classroom.jpg",
    tag: "Innovation",
  },
  {
    title: "Thrust on Experiential Learning",
    body: "We believe that learning should be immersive and hands-on. Through experiential learning activities — practical experiments, outdoor excursions, and interactive projects — we foster critical thinking, problem-solving skills, and a genuine love for learning in every student.",
    img: "/assets/BOOT CAMP/2.webp",
    tag: "Student Wellbeing",
  },
  {
    title: "Effective Feedback & Parent Partnership",
    body: "We believe in the power of feedback. Our teachers provide timely and constructive feedback to students and maintain open communication with parents — both online and offline — ensuring the continuous growth and development of each child. Education at Seedling is truly a community endeavour.",
    img: "/assets/Home/library.jpg",
    tag: "Community",
  },
];

const programs = [
  {
    level: "Early Years & Primary",
    range: "Playgroup – Class V",
    desc: "Building strong foundations in literacy, numeracy, and curiosity. At Seedling Wonderland Kids League and our primary wings, play-based and inquiry-led learning nurture a genuine love for discovery from the very beginning.",
    img: "/assets/PRIMARY OUTING/2.webp",
    color: "from-amber-500/80",
  },
  {
    level: "Middle School",
    range: "Classes VI – VIII",
    desc: "Deepening knowledge across disciplines while nurturing self-confidence, ethical reasoning, and a global outlook. Students participate in Olympiads, academic challenges, and collaborative projects — becoming engaged, responsible, and innovative thinkers.",
    img: "/assets/Home/classroom.jpg",
    color: "from-sky-700/80",
  },
  {
    level: "Senior Secondary",
    range: "Classes IX – XII",
    desc: "Rigorous CBSE and Cambridge IGCSE programmes with personalised career counselling, university guidance, and focused preparation for competitive exams. Our consistent 100% board results speak to the academic rigour and dedication of our students and faculty.",
    img: "/assets/Home/smart-classroom.jpg",
    color: "from-emerald-700/80",
  },
];

const achievements = [
  { value: "100%", label: "Board Results", sub: "Consistently every year", icon: "🏆" },
  { value: "20,000+", label: "Students Enrolled", sub: "Across 5 schools", icon: "👩‍🎓" },
  { value: "15:1", label: "Student–Teacher Ratio", sub: "Personalised attention", icon: "📐" },
  { value: "5,000+", label: "Alumni Network", sub: "Across 50+ nations", icon: "🌍" },
  { value: "30+", label: "Years of Excellence", sub: "Since 1992", icon: "⭐" },
  { value: "2", label: "Boards Offered", sub: "CBSE & Cambridge", icon: "📜" },
];

const learnerProfile = [
  { trait: "Confident", desc: "Students embark on a journey of self-discovery, fearlessly exploring new ideas and embracing challenges with a can-do attitude.", emoji: "💪", img: "https://seedlingschools.com/assets/img/confident.jpg" },
  { trait: "Reflective", desc: "We encourage students to be reflective thinkers — pondering their experiences, analysing outcomes, and adapting with informed decisions.", emoji: "🪞", img: "https://seedlingschools.com/assets/img/reflective.jpg" },
  { trait: "Responsible", desc: "Students are accountable for their actions. We foster integrity and prepare them to make wise decisions and shape a bright future.", emoji: "🤝", img: "https://seedlingschools.com/assets/img/responsible.jpg" },
  { trait: "Innovative", desc: "We ignite the spark of innovation through exciting projects, cutting-edge technologies, and out-of-the-box problem-solving.", emoji: "💡", img: "https://seedlingschools.com/assets/img/innovative.jpg" },
  { trait: "Engaged", desc: "Learning comes alive as students participate in hands-on activities, collaborative projects, and interactive discussions.", emoji: "🔥", img: "https://seedlingschools.com/assets/img/engaged.jpg" },
];

const faculty = [
  { name: "CBSE Faculty", subject: "Seedling Public School", img: "https://seedlingschools.com/assets/img/feature-3.jpg" },
  { name: "Cambridge Faculty", subject: "Seedling International Academy", img: "https://seedlingschools.com/assets/img/sia-faculty.jpg" },
  { name: "Sports & Co-Curricular", subject: "All Campuses", img: "https://seedlingschools.com/assets/img/smhs-sports.jpg" },
  { name: "Early Years Educators", subject: "Seedling Wonderland Kids League", img: "https://seedlingschools.com/assets/img/feature-6.jpg" },
  { name: "Science & Labs", subject: "Practical Learning Wing", img: "https://seedlingschools.com/assets/img/feature-2.jpg" },
  { name: "Admissions & Counselling", subject: "All Schools", img: "https://seedlingschools.com/assets/img/counselling-1.jpg" },
];

const joyride = [
  "Personalised Learning Journeys — tailored to meet individual student needs and strengths",
  "Academic Rigor — comprehensive CBSE curriculum with critical knowledge and skills",
  "Emotional Intelligence — integrated into all aspects of learning for holistic growth",
  "Future-Ready Skills — AI, ethics, and sustainability for tomorrow's challenges",
  "Holistic Development — prioritising both academic success and personal growth",
  "Sports & Extracurricular Activities — diverse opportunities for all-round development",
  "Mental Wellness Focus — regular mental health support sessions for all students",
  "Safe & Nurturing Environment — a 'Happy School' atmosphere promoting emotional security",
  "Global Outlook — promoting international-mindedness and cultural awareness",
  "Innovative Teaching Methods — combining traditional and modern mindfulness tools",
  "Parent–Teacher Collaboration — regular, transparent updates on student progress",
  "Career Counselling — personalised guidance for future academic and career paths",
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AcademicsPage() {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">

      {/* ══════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative h-[55vh] min-h-[480px] flex items-center overflow-hidden">
        <img
          src="https://seedlingschools.com/assets/img/sps-banner.jpg"
          alt="Academic Excellence at Seedling Schools"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-[ken-burns_20s_ease_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deeper/90 via-navy-deeper/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <Reveal delay={100}>
            <h1 className="font-playfair text-white font-light text-4xl md:text-5xl leading-[1.05] mb-6 inline-block">
              Academic<br />
              <em className="font-semibold text-sand">Excellence</em><br />
              <span className="text-white/90">& Future-Ready Learning.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. CURRICULUM OVERVIEW
      ══════════════════════════════════════════════════════ */}
      <section className="pt-16 pb-8 max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <Tag color="navy">Curriculum Overview</Tag>
          <h2 className="font-playfair text-5xl md:text-6xl font-light text-navy-deeper">
            Two Boards
            <em className="font-semibold text-crimson ml-2">One Vision</em>
          </h2>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="overflow-hidden rounded-3xl shadow-editorial">
              <img
                src="/assets/Home/classroom.jpg"
                alt="CBSE Curriculum at Seedling Schools"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              {/* <div className="inline-block text-navy text-[10px] font-black tracking-[0.2em] uppercase mb-4 border border-navy/10 px-4 py-1 rounded-full font-dm">
                CBSE
              </div> */}
              <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-navy-deeper mb-6 leading-snug">Central Board of Secondary Education</h3>
              <p className="text-text-light leading-[1.9] text-lg font-dm font-light mb-8">
                Affiliated with the Central Board of Secondary Education, our CBSE schools deliver a comprehensive, NEP-aligned curriculum. Our student-centric syllabus fosters holistic development and cultivates values, ethics, and leadership qualities — creating a stress-free environment that boosts self-esteem and confidence.
              </p>
              <div className="flex flex-wrap gap-3">
                {["NEP Aligned", "100% Board Results", "Personalised Learning"].map((h) => (
                  <span key={h} className="text-[10px] text-navy border border-navy/10 px-4 py-2 rounded-full font-black tracking-widest uppercase font-dm bg-white/50">{h}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. LEARNING APPROACH (ZIG-ZAG)
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-24">
            <Tag color="crimson">How We Teach</Tag>
            <h2 className="font-playfair text-5xl md:text-6xl font-light text-navy-deeper">
              Our Learning <em className="font-semibold text-navy">Approach</em>
            </h2>
          </Reveal>

          <div className="space-y-32">
            {learningApproaches.map((item, i) => (
              <Reveal key={item.title} delay={60}>
                <div className={`grid md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                    <div className="overflow-hidden rounded-3xl shadow-editorial group border border-sand/30">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                    <Tag color={i % 2 === 1 ? "mauve" : "navy"}>{item.tag}</Tag>
                    <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-navy-deeper mb-6 leading-snug">{item.title}</h3>
                    <p className="text-text-light leading-[1.9] text-lg font-dm font-light">{item.body}</p>
                    <div className="mt-10 w-16 h-1 bg-sand rounded-full" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAMBRIDGE LEARNER PROFILE
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-navy-deeper text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-20">
            <span className="inline-block bg-sand/10 text-sand text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full border border-sand/20 mb-6 font-dm">
              Cambridge Learner Profile
            </span>
            <h2 className="font-playfair text-5xl md:text-6xl font-light text-white">
              We Shape <em className="font-semibold text-sand">5 Kinds</em><br />of Learners
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {learnerProfile.map((lp, i) => (
              <Reveal key={lp.trait} delay={i * 80}>
                <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-sand/40 transition-all duration-500 hover:-translate-y-2 text-center pb-8">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={lp.img}
                      alt={lp.trait}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 to-transparent" />
                  </div>
                  <div className="p-6 px-4">
                    <span className="text-4xl mb-4 block group-hover:scale-125 transition-transform duration-500">{lp.emoji}</span>
                    <h4 className="font-playfair text-2xl font-semibold text-sand mb-3">{lp.trait}</h4>
                    <p className="text-white/60 text-xs leading-relaxed font-dm font-light">{lp.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. PROGRAMME LEVELS
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-20">
          <Tag color="mauve">Programme Levels</Tag>
          <h2 className="font-playfair text-5xl md:text-6xl font-light text-navy-deeper">
            A Journey From<br />
            <em className="font-semibold text-crimson">First Steps to Future Paths</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { ...programs[0], color: "from-mauve/90" },
            { ...programs[1], color: "from-navy-deeper/90" },
            { ...programs[2], color: "from-crimson/90" },
          ].map((p, i) => (
            <Reveal key={p.level} delay={i * 120}>
              <div className="group relative h-[520px] rounded-[2.5rem] overflow-hidden shadow-editorial cursor-pointer">
                <img
                  src={p.img}
                  alt={p.level}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.color} via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/50 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-10 text-white translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-4 block font-dm font-bold">{p.range}</span>
                  <h3 className="font-playfair text-4xl font-semibold mb-5 leading-tight">{p.level}</h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-100 group-hover:opacity-100 transition-opacity duration-500 font-dm font-light">
                    {p.desc}
                  </p>
                  <div className="mt-8 w-12 h-1 bg-white/60 group-hover:w-24 transition-all duration-500 rounded-full" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. ACHIEVEMENTS
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-gradient-to-br from-navy-deeper via-navy-dark to-navy text-white relative overflow-hidden">
        {/* decorative layers */}
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-mauve/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-sand/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal className="text-center mb-24">
            <span className="inline-block bg-white/10 text-white text-xs font-bold tracking-[0.3em] uppercase px-5 py-2 rounded-full border border-white/20 mb-6 font-dm">
              Roll of Honour
            </span>
            <h2 className="font-playfair text-5xl md:text-7xl font-light text-white">
              Numbers That<br />
              <em className="font-semibold text-sand">Tell Our Story</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {achievements.map((a, i) => (
              <Reveal key={a.label} delay={i * 80}>
                <div className="group bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:bg-white/10 hover:border-sand/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-editorial backdrop-blur-md">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{a.icon}</div>
                  <p className="font-playfair text-5xl md:text-6xl font-semibold text-sand mb-3">{a.value}</p>
                  <p className="text-white font-bold text-lg mb-2 font-dm tracking-tight">{a.label}</p>
                  <p className="text-white/40 text-xs tracking-widest uppercase font-dm font-bold">{a.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Full-width 100% results banner */}
          <Reveal delay={200}>
            <div className="mt-20 bg-navy-deeper/60 border border-white/10 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 backdrop-blur-xl shadow-editorial group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-crimson/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000" />
              <div className="relative z-10">
                <p className="text-sand text-xs tracking-[0.4em] uppercase mb-4 font-black">Our Pride</p>
                <h3 className="font-playfair text-5xl md:text-6xl font-semibold mb-6">100% Board Results</h3>
                <p className="text-white/70 mt-3 max-w-xl text-lg font-dm font-light leading-relaxed">Seedling Group of Schools has consistently achieved 100% results in both CBSE and Cambridge board examinations — every year, across all campuses. Many students secure high scores and distinctions, with a strong track record of placements in top universities worldwide.</p>
              </div>
              <div className="flex-shrink-0 relative z-10">
                <div className="w-40 h-40 bg-sand/10 rounded-full flex flex-col items-center justify-center border-2 border-sand/30 group-hover:bg-sand group-hover:text-navy-deeper transition-colors duration-500">
                  <span className="font-playfair text-5xl font-bold">100%</span>
                  <span className="text-[10px] tracking-widest uppercase mt-2 font-black">Every Year</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          JOYRIDE — WHAT SEEDLING OFFERS
      ══════════════════════════════════════════════════════ */}
      {/* <section className="py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <Reveal>
              <Tag color="crimson">Start Your Joyride</Tag>
              <h2 className="font-playfair text-5xl font-light leading-tight mb-8 text-navy-deeper">
                12 Reasons to Choose<br />
                <em className="font-semibold text-navy">Seedling Schools</em>
              </h2>
              <p className="text-text-light leading-relaxed mb-10 text-lg font-dm font-light">
                Every element of the Seedling experience is intentionally designed to prepare students not just academically, but for life's challenges — with confidence, compassion, and curiosity. Come feel the Buzz!
              </p>
              <a href="/admission-procedure" className="inline-flex items-center gap-3 bg-navy hover:bg-navy-dark text-white px-10 py-5 rounded-full text-sm font-black tracking-widest uppercase transition-all duration-500 hover:shadow-2xl hover:shadow-navy/40">
                Begin Enrolment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {joyride.map((item, i) => (
                <Reveal key={i} delay={i * 40}>
                  <div className="flex gap-4 p-5 rounded-2xl bg-white border border-sand/40 hover:bg-navy-light/30 hover:border-navy/20 transition-all duration-300 group shadow-sm hover:shadow-md">
                    <span className="w-6 h-6 rounded-full bg-navy text-white flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-text-base text-xs leading-[1.8] font-dm font-bold">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════════════════
          6. FACULTY
      ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-24">
            <Tag color="mauve">Our Educators</Tag>
            <h2 className="font-playfair text-5xl md:text-6xl font-light text-navy-deeper">
              Faculty Who<br />
              <em className="font-semibold text-crimson">Inspire, Not Just Instruct</em>
            </h2>
            <p className="text-text-light mt-6 max-w-3xl mx-auto leading-relaxed text-lg font-dm font-light">
              Our dedicated teachers create a nurturing environment for student success. They foster rapport, understand individual needs, and set high standards for both character and academic achievement — preparing students not just for exams, but for life.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {faculty.map((f, i) => (
              <Reveal key={f.name} delay={i * 80}>
                <div className="group bg-off-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-editorial transition-all duration-700 hover:-translate-y-2 border border-sand/40">
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={f.img}
                      alt={f.name}
                      className="w-full h-full object-cover object-top transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <h4 className="font-playfair text-2xl font-semibold text-navy-deeper mb-2">{f.name}</h4>
                    <p className="text-crimson text-sm font-black tracking-widest uppercase font-dm">{f.subject}</p>
                    <div className="mt-6 w-10 h-1 bg-sand group-hover:w-20 group-hover:bg-navy transition-all duration-500 rounded-full" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* faculty descriptor */}
          <Reveal delay={100}>
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {[
                { icon: "📚", title: "Experienced & Qualified", desc: "Faculty members are continuously trained, experienced, and deeply passionate about teaching. Regular tests, remedial classes, and doubt-clearing sessions help students strengthen their understanding." },
                { icon: "🎯", title: "Student-Centric Approach", desc: "A personalised, inclusive approach ensures every child receives individual attention and guidance. Our teachers promote inquiry, fellowship, and joy — setting high standards for character and discipline." },
                { icon: "🔄", title: "Mentors, Not Just Teachers", desc: "Our teachers go beyond knowledge delivery — they build confidence, nurture personality, and create a positive atmosphere where every student feels valued, motivated, and ready for life's challenges." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-[#EEECEA] rounded-2xl p-7 flex gap-5 items-start">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-[#666] text-sm leading-[1.8]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-48 overflow-hidden">
        <img
          src="https://seedlingschools.com/assets/img/life-at-sps.jpg"
          alt="Join Seedling Schools"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deeper/95 via-navy-deeper/80 to-navy-dark/70" />
        <div className="absolute inset-0 mesh-gradient opacity-10" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <Reveal>
            <span className="inline-block bg-sand/10 text-sand text-xs tracking-[0.3em] uppercase px-6 py-2.5 rounded-full border border-sand/20 mb-8 font-dm font-black">
              Admissions Open 2026–27
            </span>
            <h2 className="font-playfair text-5xl md:text-8xl font-light mb-8 text-white">
              Join the<br />
              <em className="font-semibold text-sand">Seedling Family</em>
            </h2>
            <p className="text-white/70 text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-dm font-light">
              Come feel the Buzz! Parent counselling is available both online and offline. Early bird incentives and scholarships for meritorious students in academics and sports are available. Where every student matters — prioritising well-being since 1992.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/admission-online"
                className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-12 py-6 rounded-full text-sm font-black tracking-[0.2em] uppercase transition-all duration-500 hover:shadow-2xl hover:shadow-crimson/50 hover:gap-6 font-dm"
              >
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/admission-procedure"
                className="inline-flex items-center gap-3 bg-white/10 border border-white/30 text-white hover:bg-white hover:text-navy-deeper px-12 py-6 rounded-full text-sm font-black tracking-[0.2em] uppercase transition-all duration-500 backdrop-blur-md font-dm"
              >
                Enquire Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-24 grid grid-cols-3 gap-12 max-w-2xl mx-auto border-t border-white/10 pt-16">
              {[["🎓", "University\nCounselling"], ["🏅", "Merit\nScholarships"], ["🤝", "Parent\nPartnerships"]].map(([icon, label]) => (
                <div key={label} className="text-center group cursor-default">
                  <span className="text-5xl block mb-4 group-hover:scale-125 transition-transform duration-500">{icon}</span>
                  <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-black leading-loose whitespace-pre-line font-dm">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}