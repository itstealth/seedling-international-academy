"use client";

import HeroWrapper from "@/components/layout/HeroWrapper";
// import { motion } from "framer-motion";

// Cambridge Learner Attributes card palette — cycled sequentially.
// const claPalette = [
//   { bg: "#7e25e0", bgTo: "#5a1aa3" }, // Confident
//   { bg: "#5165ec", bgTo: "#3849b0" }, // Responsible
//   { bg: "#028819", bgTo: "#015a0e" }, // Reflective
//   { bg: "#e04220", bgTo: "#a82e16" }, // Innovative
//   { bg: "#8c0e24", bgTo: "#5e0a18" }, // Engaged
// ];

// const values = [
//   {
//     title: "Confident",
//     desc: "We encourage our students to be confident in their abilities. Through the Cambridge curriculum, they gain the confidence to face challenges and express their ideas with clarity and conviction.",
//     icon: (
//       <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Reflective",
//     desc: "We foster a reflective approach to learning, where students evaluate their work, identify strengths and weaknesses, and continuously make improvements — becoming their own best teachers.",
//     icon: (
//       <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Responsible",
//     desc: "Responsibility is a core value at Seedling. We encourage our students to take ownership of their learning and actions, preparing them to be ethical leaders and contributing members of society.",
//     icon: (
//       <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Innovative",
//     desc: "We encourage innovation in problem-solving and creative thinking. Seedling nurtures innovative thinking by allowing students to explore new ideas, embrace technology, and engage in hands-on learning experiences.",
//     icon: (
//       <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Engaged",
//     desc: "We ensure that our students are actively engaged in their learning journey — curious about new ideas, passionate about discovery, and prepared for success in a rapidly changing world.",
//     icon: (
//       <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Empowered",
//     desc: "We empower every learner to discover their own voice, take initiative, and grow into the confident, capable and compassionate human being they are uniquely meant to be.",
//     icon: (
//       <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
//       </svg>
//     ),
//   },
// ];

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
        backgroundImage="/WhatsApp%20Image%202026-08-01%20at%2009.39.55.jpeg"
        title="Mission & Values"
        badge="What We Stand For"
        breadcrumbs={[{ label: "Mission & Values" }]}
        height="medium"
      />

      {/* ═══ INTRO / VISION ═══ */}
      <section className="py-12 md:py-20 max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <span className="block w-px h-12 bg-sand mx-auto mb-5" />
        <p className="font-playfair text-crimson text-xl mb-4">Our Mission</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          The Seedling <em className="font-semibold text-navy">Mission</em>
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-3xl mx-auto">
          The mission of the Seedling Group is to provide a joyful learning environment that empowers students to reach their educational and personal potential. The Group is committed to nurturing active, reflective and creative learners, who are resilient and adaptable, equipped with the knowledge and skills of lifelong learners. The aim is to help students who can celebrate diversity and engage in meaningful collaboration to create a peaceful and equitable world.
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
              Vision &amp; <em className="font-semibold text-navy">Promise</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                eyebrow: "Our Vision",
                title: "Wisdom & Comprehension",
                headerBg: "bg-purple-700",
                bg: "bg-purple-100",
                border: "border-purple-700",
                points: [
                  "A beacon of wisdom for every learner",
                  "Question, comprehend, contribute meaningfully",
                  "Graduates who are life-ready and life-worthy",
                ],
                footer: "Open to noble thoughts from every direction",
              },
              {
                eyebrow: "Our Promise",
                title: "Community & Collaboration",
                headerBg: "bg-green-700",
                bg: "bg-green-100",
                border: "border-green-700",
                points: [
                  "Every stakeholder truly matters",
                  "Active communication with families",
                  "An environment where every child feels seen",
                ],
                footer: "Holistic well-being is everyone's commitment",
              },
            ].map((c) => (
              <div key={c.title} className={`group relative ${c.bg} ${c.border} rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500`}>
                {/* Header band */}
                <div className={`relative ${c.headerBg} px-5 py-4 text-white`}>
                  <div className="absolute right-0 top-0 h-full w-11 bg-white/20 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,35%_50%)]" />
                  <h3 className="relative z-10 font-playfair text-base font-black leading-tight text-white pr-10">
                    {c.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="px-5 py-5">
                  <p className="mb-3 text-[11px] font-black uppercase tracking-wider text-[#133844]">{c.eyebrow}</p>
                  <ul className="space-y-2.5 text-sm leading-snug text-[#133844]">
                    {c.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2.5">
                        <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${c.headerBg}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer band */}
                <div className="border-t border-black/10 bg-white/50 px-5 py-4 text-sm font-bold leading-relaxed text-[#133844]">
                  {c.footer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      {/* <section className="relative py-12 md:py-20 bg-[#d4f4ed] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(at 50% 0%, rgba(19,56,68,0.06) 0px, transparent 55%), radial-gradient(at 100% 100%, rgba(162,15,39,0.10) 0px, transparent 50%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-crimson to-navy" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-playfair text-[#133844]/70 text-xl mb-3">Our Compass</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-[#133844]">
              The Values That <em className="font-semibold text-[#133844]">Guide Us</em>
            </h2>
            <p className="mt-6 text-[#133844]/75 text-lg max-w-2xl mx-auto font-dm leading-relaxed">
              Six values shape every classroom, every conversation, and every decision at Seedling.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {values.map((v, i) => {
              const c = claPalette[i % 5];
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 32px 70px -14px ${c.bgTo}, 0 14px 30px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)`,
                  }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 p-7 md:p-8 min-h-[280px] flex flex-col gap-5"
                  style={{
                    background: `linear-gradient(160deg, ${c.bg} 0%, ${c.bgTo} 100%)`,
                    boxShadow: "0 24px 50px -16px rgba(0,0,0,0.55), 0 6px 14px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)" }} />
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/95 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-[4deg]"
                    style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.6)", color: c.bg }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.25em] uppercase text-white/75 mb-2">Value 0{i + 1}</p>
                    <h3 className="font-playfair text-2xl font-semibold mb-3 leading-tight tracking-tight text-white">{v.title}</h3>
                    <p className="text-sm text-white/80 font-light leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* ═══ OUR PROMISES ═══ */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-playfair text-navy text-xl mb-3">In Practice</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
            What This <em className="font-semibold text-navy">Looks Like</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              num: "01",
              eyebrow: "Our Promise",
              title: "Safe & Nurturing",
              headerBg: "bg-purple-700",
              bg: "bg-purple-100",
              border: "border-purple-700",
              points: [
                "Secure campuses with trained counsellors",
                "Mentors who care for every child",
                "Emotional and physical well-being first",
              ],
              footer: "A culture of care at the heart of Seedling",
            },
            {
              num: "02",
              eyebrow: "Our Promise",
              title: "Holistic Development",
              headerBg: "bg-blue-700",
              bg: "bg-blue-100",
              border: "border-blue-700",
              points: [
                "Sports, performing arts, clubs, leadership",
                "Community service shapes character",
                "Every learner blossoms beyond academics",
              ],
              footer: "Educating the whole child, every day",
            },
            {
              num: "03",
              eyebrow: "Our Promise",
              title: "Strong Results",
              headerBg: "bg-green-700",
              bg: "bg-green-100",
              border: "border-green-700",
              points: [
                "Cambridge IGCSE & AS/A Level cohorts",
                "Top grades with proven university placements",
                "Global alumni network across 50+ nations",
              ],
              footer: "Excellence that opens doors worldwide",
            },
            {
              num: "04",
              eyebrow: "Our Promise",
              title: "Future-Ready Learners",
              headerBg: "bg-orange-700",
              bg: "bg-orange-100",
              border: "border-orange-700",
              points: [
                "Inquiry-led and future-focused learning",
                "Critical thinking and creativity",
                "Empathy, courage, and purpose in every child",
              ],
              footer: "Equipped to lead in an ever-changing world",
            },
          ].map((c) => (
            <div key={c.num} className={`group relative ${c.bg} ${c.border} rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500`}>
              {/* Header band */}
              <div className={`relative ${c.headerBg} px-5 py-4 text-white`}>
                <div className="absolute right-0 top-0 h-full w-11 bg-white/20 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,35%_50%)]" />
                <h3 className="relative z-10 font-playfair text-base font-black leading-tight text-white pr-10">
                  {c.title}
                </h3>
              </div>

              {/* Body */}
              <div className="px-5 py-5">
                <p className="mb-3 text-[11px] font-black uppercase tracking-wider text-[#133844]">
                  <span className="opacity-70 mr-1">0{c.num.slice(-1)}</span>· {c.eyebrow}
                </p>
                <ul className="space-y-2.5 text-sm leading-snug text-[#133844]">
                  {c.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${c.headerBg}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer band */}
              <div className="border-t border-black/10 bg-white/50 px-5 py-4 text-sm font-bold leading-relaxed text-[#133844]">
                {c.footer}
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
            className="inline-flex items-center gap-3 bg-white text-[#133844] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black hover:bg-sand hover:text-[#133844] transition-all duration-500 font-dm"
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
