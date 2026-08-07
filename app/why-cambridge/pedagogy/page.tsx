"use client";

import { motion } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";

// ─── Motion variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
};

const cardRise = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

// Cambridge Learner Attributes card palette — cycled sequentially.
const claPalette = [
  { bg: "#7e25e0", bgTo: "#5a1aa3" }, // Confident
  { bg: "#5165ec", bgTo: "#3849b0" }, // Responsible
  { bg: "#028819", bgTo: "#015a0e" }, // Reflective
  { bg: "#e04220", bgTo: "#a82e16" }, // Innovative
  { bg: "#8c0e24", bgTo: "#5e0a18" }, // Engaged
];

const slideIn = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
  visible: { opacity: 1, x: 0 },
});

// ─── Content ────────────────────────────────────────────────────────────────
const pillars = [
  {
    step: "01",
    label: "Curriculum",
    title: "Learning Objectives, Locked In",
    desc: "Every Cambridge subject has detailed learning objectives laid out in a logical sequence across Stages 1 to 9. These same objectives are written into the curriculum frameworks, the endorsed textbooks our teachers use, the schemes of work, and the assessments.",
    points: [
      "Detailed learning objectives in a logical sequence",
      "Available in curriculum frameworks on the School Support Hub",
      "Mirrored in all four endorsed textbook publishers' materials",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: "crimson",
  },
  {
    step: "02",
    label: "Pedagogy",
    title: "Active Learning, Rooted in Objectives",
    desc: "Cambridge's pedagogy is an active-learning approach that is informed by the learning objectives themselves. The objective determines the teaching activity — never the other way around. This is what brings coherence into the classroom.",
    points: [
      "Active learning approach to teaching",
      "Promotes engagement, reasoning, and critical thinking",
      "Embedded in teacher guides, schemes of work, and professional development",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: "navy",
  },
  {
    step: "03",
    label: "Assessment",
    title: "Designed From the Same Objectives",
    desc: "Cambridge assessment questions are designed from the learning objectives taken from the curriculum frameworks. Formative Cambridge Progression Tests and summative Cambridge Checkpoint make the same objectives visible, measurable, and reportable.",
    points: [
      "Formative: Cambridge Progression Tests (continuous)",
      "Summative: Cambridge Checkpoint (milestones)",
      "Questions designed directly from learning objectives",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "mauve",
  },
];

const benefits = [
  { title: "Visible Connections", desc: "Learners see — and make — explicit connections between what they are taught and what they are tested on. There are no surprises." },
  { title: "Honest Reporting", desc: "Cambridge assessment reports identify exactly which learning objectives a student has mastered, and which still need work. Reports are useful, not decorative." },
  { title: "Targeted Re-teaching", desc: "When an assessment reveals a difficult objective, teachers can re-teach that exact concept — not guess at the gap." },
  { title: "Robust Programmes", desc: "Curriculum, textbooks, pedagogy and assessment reinforcing one another is what makes a programme robust, durable, and high-performing." },
];

const colorMap: Record<string, { bg: string; text: string; border: string; ring: string }> = {
  crimson: { bg: "bg-crimson/10", text: "text-crimson", border: "border-crimson/30", ring: "ring-crimson/40" },
  navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/30", ring: "ring-navy/40" },
  mauve: { bg: "bg-mauve/10", text: "text-mauve", border: "border-mauve/30", ring: "ring-mauve/40" },
  "royal-blue": { bg: "bg-royal-blue/10", text: "text-royal-blue", border: "border-royal-blue/30", ring: "ring-royal-blue/40" },
};

const cardColors5 = [
  "bg-purple-100 border-purple-700",
  "bg-blue-100 border-blue-700",
  "bg-green-100 border-green-700",
  "bg-orange-100 border-orange-700",
  "bg-red-100 border-red-700",
];

export default function PedagogyPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      {/* ═══ HERO ═══ */}
      <HeroWrapper
        backgroundImage="/assets/img/sps-banner.jpg"
        title="Pedagogy"
        badge="Curriculum · Pedagogy · Assessment"
        breadcrumbs={[{ label: "Pedagogy" }]}
        height="large"
      />

      {/* ═══ INTRO ═══ */}
      <motion.section
        className="py-12 md:py-20 max-w-4xl mx-auto px-5 sm:px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="block w-px h-12 bg-sand mx-auto mb-5"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        <p className="font-playfair text-crimson text-xl mb-4">What Makes Cambridge Work</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          Curriculum, pedagogy &amp; assessment,<br />
          <em className="font-semibold text-navy">speaking the same language.</em>
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          An education system is <em>coherent</em> when its curriculum, textbooks, teaching and assessment all align and reinforce one another. That single idea is at the heart of how Cambridge International works — and how Seedling teaches.
        </p>

        {/* Expert quote */}
        <motion.figure
          className="mt-12 max-w-3xl mx-auto bg-blue-100 border border-blue-700 rounded-2xl p-7 md:p-8 border-l-4 border-crimson shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <blockquote className="font-playfair text-lg md:text-xl text-[#133844] leading-relaxed">
            &ldquo;An education system is coherent when the national curriculum content, textbooks, teaching content, pedagogy and assessment all are aligned and reinforce one another.&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-[10px] font-black tracking-[0.2em] uppercase text-text-light">
            — Oates, 2017 · Cited by Cambridge International
          </figcaption>
        </motion.figure>
      </motion.section>

      {/* ═══ THREE PILLARS — Animated alternating slide-in ═══ */}
      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-mauve/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-playfair text-navy text-xl mb-3">The Coherence Model</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              Three parts. <em className="font-semibold text-navy">One language.</em>
            </h2>
          </motion.div>

          <div className="space-y-10">
            {pillars.map((p, i) => {
              const c = colorMap[p.color];
              const direction = i % 2 === 0 ? "left" : "right";
              return (
                <motion.div
                  key={p.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={slideIn(direction)}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.005 }}
                  className={`group ${cardColors5[i]} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden grid md:grid-cols-[1fr_280px] gap-0`}
                >
                  <div className="p-7 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${c.text}`}>Part {p.step}</span>
                      <span className="block w-10 h-px bg-current opacity-30" />
                      <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${c.text}`}>{p.label}</span>
                    </div>
                    <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-4 text-ink">{p.title}</h3>
                    <p className="text-text-light text-base md:text-[17px] leading-[1.85] font-dm mb-6">{p.desc}</p>
                    <ul className="space-y-2">
                      {p.points.map((pt, idx) => (
                        <motion.li
                          key={pt}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                          className="flex items-start gap-3 text-text-base"
                        >
                          <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${c.bg.replace('/10', '')}`} />
                          <span className="text-sm md:text-[15px]">{pt}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-gradient-to-br ${p.color === 'crimson' ? 'from-crimson/5 to-crimson/10' : p.color === 'navy' ? 'from-navy/5 to-navy/10' : 'from-mauve/5 to-mauve/10'} p-7 md:p-10 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-sand/30`}>
                    <motion.div
                      className={`w-24 h-24 rounded-3xl flex items-center justify-center ${c.bg} ${c.text}`}
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      {p.icon}
                    </motion.div>
                    <p className={`mt-5 text-[10px] font-black tracking-[0.3em] uppercase ${c.text}`}>{p.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PRACTICAL EXAMPLE ═══ */}
      <section className="relative py-12 md:py-20 bg-[#d4f4ed] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-crimson to-navy" />

        <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-10 md:mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-playfair text-[#133844]/70 text-xl mb-3">In The Classroom</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-[#133844]">
              How It Works in <em className="font-semibold text-[#133844]">Practice</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 md:p-10"
          >
            <p className="text-[#133844]/70 text-[10px] font-black tracking-[0.3em] uppercase mb-3">Example · Stage 4 Mathematics</p>
            <h3 className="font-playfair text-2xl md:text-3xl font-light text-[#133844] mb-6">
              Learning Objective <span className="text-[#133844] font-semibold">4Np.02</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  step: "1",
                  title: "Curriculum",
                  desc: "The objective is written into the curriculum framework: multiply and divide whole numbers by 10 and 100.",
                },
                {
                  step: "2",
                  title: "Pedagogy",
                  desc: "The teacher designs a teaching activity that helps students master exactly that objective — not the other way around.",
                },
                {
                  step: "3",
                  title: "Assessment",
                  desc: "A Cambridge Progression Test item targets the same objective — so success on the test means the objective is met.",
                },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.06 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-sand text-[#133844] flex items-center justify-center font-black text-sm">
                      {s.step}
                    </div>
                    <span className="text-[#133844] text-xs font-black tracking-[0.2em] uppercase">{s.title}</span>
                  </div>
                  <p className="text-[#133844]/75 text-sm leading-[1.85] font-dm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ BENEFITS GRID ═══ */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-playfair text-navy text-xl mb-3">Why It Matters</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
            What Coherence <em className="font-semibold text-navy">Delivers</em>
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {benefits.map((b, i) => {
            // 4-card section: skip the green (index 2) so the order reads purple / blue / orange / crimson
            const c = claPalette[[0, 1, 3, 4][i]];
            return (
              <motion.div
                key={b.title}
                variants={cardRise}
                whileHover={{
                  y: -10,
                  boxShadow: `0 32px 70px -14px ${c.bgTo}, 0 14px 30px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)`,
                }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-white/15 p-7 md:p-8 min-h-[220px] flex flex-col cursor-default"
                style={{
                  background: `linear-gradient(160deg, ${c.bg} 0%, ${c.bgTo} 100%)`,
                  boxShadow: "0 24px 50px -16px rgba(0,0,0,0.55), 0 6px 14px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)" }} />
                <span className="relative z-10 text-[10px] font-black tracking-[0.25em] uppercase text-white/75 mb-3 block">0{i + 1}</span>
                <h3 className="relative z-10 font-playfair text-xl font-semibold mb-3 leading-tight tracking-tight text-white">{b.title}</h3>
                <p className="relative z-10 text-sm text-white/80 font-light leading-[1.9]">{b.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ═══ RESEARCH NOTE ═══ */}
      <section className="relative py-14 md:py-20 px-5 sm:px-6 overflow-hidden bg-crimson">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson via-crimson-dark/30 to-crimson-darker" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-playfair text-sand text-2xl mb-6 tracking-wide">The Research</p>
          <blockquote className="font-playfair text-3xl md:text-4xl font-light leading-[1.15] mb-8">
            &ldquo;Extensive research between 1995 and 2017 by Bill Schmidt and William Prawat shows that <em>high-performing education systems align their curriculum, textbooks, pedagogy and assessment.</em>&rdquo;
          </blockquote>
          <p className="text-white/70 text-sm tracking-wider uppercase font-dm">
            Schmidt &amp; Prawat, cited by Cambridge International
          </p>
        </motion.div>
      </section>

      {/* ═══ CLOSING CTA ═══ */}
      <motion.section
        className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#133844]">
          <motion.span
            className="block w-px h-10 bg-[#133844]/40 mx-auto mb-5"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
          <p className="font-playfair text-[#133844]/70 text-xl mb-4">In Practice</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-6">
            Coherence you can feel<br />
            <em className="font-semibold text-[#133844]">in every classroom.</em>
          </h2>
          <p className="text-[#133844]/80 text-lg leading-[1.85] max-w-2xl mx-auto font-dm">
            Visit a Seedling campus and you will see the Cambridge coherence model in action — in the planning, in the teaching, in the way every student is supported forward.
          </p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={stagger}
          >
            <motion.a
              variants={cardRise}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/admissions"
              className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-500 hover:shadow-2xl hover:shadow-crimson/40 font-dm"
            >
              Plan a Visit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              variants={cardRise}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/why-cambridge/path"
              className="inline-flex items-center gap-3 border border-[#133844]/30 hover:bg-white hover:text-[#133844] text-[#133844] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-500 font-dm"
            >
              Your Path, Your Way
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
