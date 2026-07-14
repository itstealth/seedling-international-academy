"use client";

import { motion } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } } };
const cardRise = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };

const subjects = [
  { group: "Core", items: ["English", "English as a Second Language", "Mathematics", "Science"], color: "crimson" },
  { group: "Humanities", items: ["Geography", "History", "Global Perspectives"], color: "mauve" },
  { group: "Languages", items: ["French", "Spanish", "German", "Mandarin", "Hindi"], color: "navy" },
  { group: "Creative", items: ["Art & Design", "Music", "Drama"], color: "royal-blue" },
  { group: "Digital", items: ["Computing & Digital Literacy"], color: "crimson" },
  { group: "Wellbeing", items: ["Physical Education", "Wellbeing"], color: "navy" },
];

const features = [
  { title: "10+ Subjects", desc: "Core subjects plus creativity, expression, and wellbeing — a balanced curriculum for every learner.", icon: "📚", color: "crimson" },
  { title: "Checkpoint Assessment", desc: "Cambridge Lower Secondary Checkpoint offers optional, external benchmarks of student progress.", icon: "🎯", color: "navy" },
  { title: "Progression Tests", desc: "Regular formative tests that help teachers track learning and tailor support to each student.", icon: "📈", color: "mauve" },
  { title: "Curriculum Frameworks", desc: "Detailed subject frameworks and high-quality teaching resources for every stage of learning.", icon: "🗂", color: "royal-blue" },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  crimson: { bg: "bg-crimson/10", text: "text-crimson", border: "border-crimson/30" },
  navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/30" },
  mauve: { bg: "bg-mauve/10", text: "text-mauve", border: "border-mauve/30" },
  "royal-blue": { bg: "bg-royal-blue/10", text: "text-royal-blue", border: "border-royal-blue/30" },
};

export default function CambridgeLowerSecondaryPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      <HeroWrapper backgroundImage="/assets/img/sps-banner.jpg" title="Cambridge Lower Secondary" badge="Ages 11–14 · Building Depth" breadcrumbs={[{ label: "Cambridge Lower Secondary" }]} height="large" />

      <motion.section className="py-12 md:py-20 max-w-4xl mx-auto px-5 sm:px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
        <motion.span className="block w-px h-12 bg-sand mx-auto mb-5" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, ease: "easeOut" }} style={{ transformOrigin: "top" }} />
        <p className="font-playfair text-crimson text-xl italic mb-4">Where Depth Begins</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-navy-deeper mb-6">
          Subjects deepen.<br />
          <em className="font-semibold text-navy">Choice begins.</em>
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          Cambridge Lower Secondary prepares students for the next step of their education — providing a clear age-appropriate path as they progress through the Cambridge Pathway.
        </p>
      </motion.section>

      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-mauve/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-navy text-xl italic mb-3">Subjects At Lower Secondary</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper">
              Over <em className="font-semibold text-navy">Ten Subjects</em>, One Balanced Curriculum
            </h2>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {subjects.map((s) => {
              const c = colorMap[s.color];
              return (
                <motion.div key={s.group} variants={cardRise} whileHover={{ y: -4 }} transition={{ duration: 0.4, ease: EASE }} className={`bg-off-white rounded-2xl p-6 shadow-sm hover:shadow-lg border ${c.border}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-2 h-2 rounded-full ${c.bg.replace('/10', '')}`} />
                    <h3 className="font-playfair text-lg font-semibold text-navy-deeper">{s.group}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((i) => (<span key={i} className="text-xs font-medium text-text-light bg-white border border-sand/40 rounded-full px-3 py-1">{i}</span>))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative py-12 md:py-20 bg-navy-deeper overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-sand text-xl italic mb-3">Built To Measure</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white">
              Optional <em className="font-semibold text-sand">Assessment</em>, Real Insight
            </h2>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {features.map((f) => {
              const c = colorMap[f.color];
              return (
                <motion.div key={f.title} variants={cardRise} whileHover={{ y: -6 }} transition={{ duration: 0.4, ease: EASE }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-sand/40 transition-colors">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="font-playfair text-lg font-semibold mb-2 text-white">{f.title}</h3>
                  <p className="text-white/75 text-sm leading-[1.85] font-dm">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <motion.section className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-navy-deeper" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <p className="font-playfair text-sand text-xl italic mb-4">The Bridge To Upper Secondary</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-6">
            Depth today. <em className="font-semibold text-sand">Choice tomorrow.</em>
          </h2>
          <p className="text-white/80 text-lg leading-[1.85] max-w-2xl mx-auto font-dm">
            Cambridge Lower Secondary at Seedling prepares every student for the rigour and specialisation of IGCSE — and the freedom to design their own Cambridge path forward.
          </p>
          <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={stagger}>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/admissions" className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 hover:shadow-2xl hover:shadow-crimson/40 font-dm">
              Enquire Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/academics/upper-secondary" className="inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-navy-deeper text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 font-dm">
              Cambridge Upper Secondary
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
