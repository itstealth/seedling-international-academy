"use client";

import HeroWrapper from "@/components/layout/HeroWrapper";

const values = [
  {
    title: "Confident",
    desc: "We encourage our students to be confident in their abilities. Through the Cambridge curriculum, they gain the confidence to face challenges and express their ideas with clarity and conviction.",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "crimson",
  },
  {
    title: "Reflective",
    desc: "We foster a reflective approach to learning, where students evaluate their work, identify strengths and weaknesses, and continuously make improvements — becoming their own best teachers.",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: "navy",
  },
  {
    title: "Responsible",
    desc: "Responsibility is a core value at Seedling. We encourage our students to take ownership of their learning and actions, preparing them to be ethical leaders and contributing members of society.",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "mauve",
  },
  {
    title: "Innovative",
    desc: "We encourage innovation in problem-solving and creative thinking. Seedling nurtures innovative thinking by allowing students to explore new ideas, embrace technology, and engage in hands-on learning experiences.",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: "sand",
  },
  {
    title: "Engaged",
    desc: "We ensure that our students are actively engaged in their learning journey — curious about new ideas, passionate about discovery, and prepared for success in a rapidly changing world.",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "crimson",
  },
  {
    title: "Empowered",
    desc: "We empower every learner to discover their own voice, take initiative, and grow into the confident, capable and compassionate human being they are uniquely meant to be.",
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "royal-blue",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  crimson: { bg: "bg-crimson/10", text: "text-crimson", border: "border-crimson/30" },
  navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/30" },
  mauve: { bg: "bg-mauve/10", text: "text-mauve", border: "border-mauve/30" },
  sand: { bg: "bg-sand/15", text: "text-sand", border: "border-sand/40" },
  "royal-blue": { bg: "bg-royal-blue/10", text: "text-royal-blue", border: "border-royal-blue/30" },
};

const promises = [
  { num: "01", title: "Holistic Development", desc: "Intellectual, social, moral, spiritual, emotional and physical growth for every child." },
  { num: "02", title: "Cambridge-Aligned Curriculum", desc: "Thoughtfully designed to meet Cambridge Assessment International Education standards." },
  { num: "03", title: "Student Well-being First", desc: "A safe, inclusive and stimulating environment where every student feels respected and motivated." },
  { num: "04", title: "Joyful, Reflective Learning", desc: "Classrooms where curiosity leads, thinking deepens, and growth happens at every level." },
];

export default function MissionAndValuesPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      {/* ═══ HERO ═══ */}
      <HeroWrapper
        backgroundImage="/assets/about/about-banner.jpg"
        title="Mission & Values"
        badge="What We Stand For"
        breadcrumbs={[{ label: "Mission & Values" }]}
        height="medium"
      />

      {/* ═══ INTRO / VISION ═══ */}
      <section className="py-12 md:py-20 max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <span className="block w-px h-12 bg-sand mx-auto mb-5" />
        <p className="font-playfair text-crimson text-xl mb-4">Our Guiding Compass</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          Wisdom &amp; <em className="font-semibold text-navy">Comprehension</em>
        </h2>
        <p className="font-playfair text-2xl md:text-3xl text-sand mb-8">
          "हस्ये नयतु नः ब्रह्मज्ञानं"
        </p>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-3xl mx-auto">
          We aim at wisdom and the ability to comprehend. We believe education must be joyful, reflective and creative — developing students who are resilient, adaptable, and equipped to continue learning long after they leave our halls.
        </p>
      </section>

      {/* ═══ MISSION ═══ */}
      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sand/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mauve/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-playfair text-mauve text-xl mb-3">Our Compass</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              The <em className="font-semibold text-navy">Mission</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="group relative bg-off-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-sand/40 hover:border-navy/30 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-navy" />
              <div className="inline-flex p-3 rounded-xl bg-navy text-white mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-text-light mb-2 font-dm">Our Vision</p>
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-ink">Wisdom & Comprehension</h3>
              <p className="text-text-light leading-[1.9] text-sm font-dm">
                To be a beacon of wisdom — nurturing young minds that can comprehend, question, and contribute meaningfully to the world. We envision graduates who are life-ready and life-worthy, open to noble thoughts from every direction.
              </p>
            </div>

            <div className="group relative bg-off-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-sand/40 hover:border-mauve/30 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-mauve" />
              <div className="inline-flex p-3 rounded-xl bg-mauve text-white mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-text-light mb-2 font-dm">Our Mission</p>
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-ink">Joyful, Whole-Child Learning</h3>
              <p className="text-text-light leading-[1.9] text-sm font-dm">
                To provide a joyful learning environment that empowers students to reach their educational and personal potential while nurturing self-confidence and self-esteem — developing resilient, adaptable, socially responsible adults.
              </p>
            </div>

            <div className="group relative bg-off-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-sand/40 hover:border-crimson/30 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-crimson" />
              <div className="inline-flex p-3 rounded-xl bg-crimson text-white mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-text-light mb-2 font-dm">Our Promise</p>
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-ink">Community & Collaboration</h3>
              <p className="text-text-light leading-[1.9] text-sm font-dm">
                Every stakeholder — student, parent, teacher — matters. We commit to active communication, holistic well-being, and an environment where every child feels seen, valued, and motivated to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="relative py-12 md:py-20 bg-navy-deeper overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-crimson to-navy" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-playfair text-sand text-xl mb-3">Our Compass</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white">
              The Values That <em className="font-semibold text-sand">Guide Us</em>
            </h2>
            <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto font-dm leading-relaxed">
              Six values shape every classroom, every conversation, and every decision at Seedling.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {values.map((v, i) => {
              const c = colorMap[v.color];
              return (
                <div
                  key={v.title}
                  className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-7 md:p-8 border ${c.border} hover:border-sand/60 transition-all duration-500 hover:-translate-y-1`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${c.bg} ${c.text} group-hover:scale-110 transition-transform duration-500`}>
                    {v.icon}
                  </div>
                  <p className={`text-[10px] font-black tracking-[0.25em] uppercase ${c.text} mb-2`}>Value 0{i + 1}</p>
                  <h3 className="font-playfair text-2xl font-semibold mb-3 text-white">{v.title}</h3>
                  <p className="text-white/75 text-sm leading-[1.85] font-dm">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ OUR PROMISES ═══ */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-playfair text-navy text-xl mb-3">In Practice</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
            What This <em className="font-semibold text-navy">Looks Like</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {promises.map((p, i) => (
            <div
              key={p.num}
              className="flex gap-6 items-start p-7 bg-white rounded-[2rem] shadow-sm border border-sand/40 hover:border-navy/20 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-navy text-white flex items-center justify-center font-black text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {p.num}
              </div>
              <div>
                <h4 className="text-lg font-black text-ink mb-1 uppercase tracking-tight font-dm">{p.title}</h4>
                <p className="text-sm text-text-light leading-relaxed font-dm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CLOSING QUOTE ═══ */}
      <section className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-crimson">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson via-crimson-dark/30 to-crimson-darker" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="font-playfair text-sand text-3xl mb-6 tracking-wide">From the Seedling Charter</p>
          <blockquote className="font-playfair text-3xl md:text-4xl font-light leading-[1.15] mb-10 text-white">
            &ldquo;उप नो सश्रा कृतवो यन्तु विश्रमः&rdquo;
          </blockquote>
          <p className="font-playfair text-2xl font-light text-sand mb-12">
            Open the doors from all sides so that noble thoughts come in unhindered.
          </p>
          <a
            href="/about/welcome-from-the-head"
            className="inline-flex items-center gap-3 bg-white text-navy-deeper px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black hover:bg-sand hover:text-white transition-all duration-500 font-dm"
          >
            Read From The Head
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
