"use client";

import { motion } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } } };
const cardRise = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };

const subjects = [
  // { group: "Core", items: ["English", "Mathematics", "Science"], color: "crimson" },
  { group: "Core", items: ["Mathematics", "Science"], color: "crimson" },
  // { group: "Languages", items: ["English as a Second Language", "French", "Spanish", "German", "Mandarin", "Hindi"], color: "navy" },
  { group: "Languages", items: ["English as a Second Language", "French", "Spanish", "German", "Mandarin"], color: "navy" },
  // { group: "Humanities", items: ["Geography", "History", "Global Perspectives"], color: "mauve" },
  { group: "Humanities", items: ["Geography", "History"], color: "mauve" },
  { group: "Creative", items: ["Art & Design", "Music", "Drama", "Physical Education"], color: "royal-blue" },
  { group: "Digital", items: ["Computing & Digital Literacy"], color: "crimson" },
  // { group: "Wellbeing", items: ["Wellbeing", "Personal & Social Education"], color: "navy" },
  { group: "Wellbeing", items: ["Sports", "Wellbeing"], color: "navy" },
];

const features = [
  { title: "Flexible Curriculum", desc: "Not restrictive — teachers bring local and international examples into class, and it works with their students.", icon: "🌐", color: "crimson" },
  { title: "Optional Assessments", desc: "Cambridge Primary Checkpoint accurately measures student potential and progress at key stages.", icon: "📊", color: "navy" },
  { title: "High-Quality Resources", desc: "Engaging classroom materials plus endorsed resources from trusted publisher partners.", icon: "📚", color: "mauve" },
  { title: "Clear Progression", desc: "A clear age-appropriate path that takes students seamlessly into Cambridge Lower Secondary.", icon: "➡️", color: "royal-blue" },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  crimson: { bg: "bg-crimson/10", text: "text-crimson", border: "border-crimson/30" },
  navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/30" },
  mauve: { bg: "bg-mauve/10", text: "text-mauve", border: "border-mauve/30" },
  "royal-blue": { bg: "bg-royal-blue/10", text: "text-royal-blue", border: "border-royal-blue/30" },
};

export default function CambridgePrimaryPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-clip font-dm">
      <HeroWrapper backgroundImage="/P1676350.JPG" title="Cambridge Primary in Jaipur — Ages 5 to 11" badge="Ages 5–11 · A Strong Foundation" breadcrumbs={[{ label: "Cambridge Primary" }]} height="large" imageAlt="Cambridge Primary students at Seedling International Academy, Jaipur" />

      <motion.section className="py-12 md:py-20 max-w-4xl mx-auto px-5 sm:px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
        <motion.span className="block w-px h-12 bg-sand mx-auto mb-5" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, ease: "easeOut" }} style={{ transformOrigin: "top" }} />
        <p className="font-playfair text-crimson text-xl mb-4">The Foundation Years</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          A strong foundation,<br />
          <em className="font-semibold text-navy">a lifelong love of learning.</em>
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          Cambridge Primary provides a strong foundation for students at the beginning of their schooling — preparing them to progress through the Cambridge Pathway in an age-appropriate way.
        </p>
        <motion.figure className="mt-12 max-w-3xl mx-auto bg-pathway-blue-bg rounded-2xl p-7 md:p-8 border-l-4 border-crimson shadow-sm text-left border-pathway-blue-border" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, delay: 0.1, ease: EASE }}>
          <blockquote className="font-playfair text-lg md:text-xl text-[#133844] leading-relaxed">
            &ldquo;Cambridge Primary has a very flexible curriculum. It is not restrictive. I can bring local and international examples into my class, and it works very well with my students.&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-[10px] font-black tracking-[0.2em] uppercase text-text-light">— Cambridge Primary Teacher, Egypt</figcaption>
        </motion.figure>
      </motion.section>

      <section className="relative py-12 md:py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-mauve/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-navy text-xl mb-3">Subjects At Cambridge Primary</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              Over <em className="font-semibold text-navy">Six Subjects</em> To Explore
            </h2>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {[
              "Global English",
              "Hindi",
              "Science",
              "Maths",
              "Global Perspectives",
              "Computing",
            ].map((subject, idx) => {
              const palette = [
                { bg: "bg-purple-700", border: "border-purple-700", dot: "bg-purple-300", shadow: "shadow-2xl shadow-purple-700/60" },
                { bg: "bg-blue-700", border: "border-blue-700", dot: "bg-blue-300", shadow: "shadow-2xl shadow-blue-700/60" },
                { bg: "bg-green-700", border: "border-green-700", dot: "bg-green-300", shadow: "shadow-2xl shadow-green-700/60" },
                { bg: "bg-orange-700", border: "border-orange-700", dot: "bg-orange-300", shadow: "shadow-2xl shadow-orange-700/60" },
                { bg: "bg-red-700", border: "border-red-700", dot: "bg-red-300", shadow: "shadow-2xl shadow-red-700/60" },
              ];
              const c = palette[idx % palette.length];
              return (
                <motion.div key={subject} variants={cardRise} whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.4, ease: EASE }} className={`group relative ${c.bg} ${c.border} rounded-2xl p-6 shadow-lg hover:shadow-2xl ${c.shadow} transition-all duration-500 overflow-hidden`}>
                  {/* Decorative blob */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                    <h3 className="font-playfair text-xl font-semibold text-white">{subject}</h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative py-12 md:py-20 bg-[#d4f4ed] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-crimson to-navy" />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-[#133844] text-xl mb-3">Why It Works</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-[#133844]">
              The Cambridge Primary <em className="font-semibold text-[#133844]">Advantage</em>
            </h2>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {[
              {
                title: "Flexible Curriculum",
                headerBg: "bg-purple-700",
                bg: "bg-purple-100",
                border: "border-purple-700",
                desc: "Not restrictive — teachers bring local and international examples into class, and it works with their students.",
                footer: "Teachers adapt freely",
              },
              {
                title: "Optional Assessments",
                headerBg: "bg-blue-700",
                bg: "bg-blue-100",
                border: "border-blue-700",
                desc: "Cambridge Primary Checkpoint accurately measures student potential and progress at key stages.",
                footer: "Measure potential, not performance",
              },
              {
                title: "High-Quality Resources",
                headerBg: "bg-green-700",
                bg: "bg-green-100",
                border: "border-green-700",
                desc: "Engaging classroom materials plus endorsed resources from trusted publisher partners.",
                footer: "Publisher-endorsed materials",
              },
              {
                title: "Clear Progression",
                headerBg: "bg-orange-700",
                bg: "bg-orange-100",
                border: "border-orange-700",
                desc: "A clear age-appropriate path that takes students seamlessly into Cambridge Lower Secondary.",
                footer: "Smooth path to Lower Secondary",
              },
            ].map((c) => (
              <motion.div key={c.title} variants={cardRise} whileHover={{ y: -4 }} transition={{ duration: 0.4, ease: EASE }} className={`group relative ${c.bg} ${c.border} rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
                <div className={`relative ${c.headerBg} px-5 py-4 text-white`}>
                  <div className="absolute right-0 top-0 h-full w-11 bg-white/20 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,35%_50%)]" />
                  <h3 className="relative z-10 font-playfair text-base font-black leading-tight text-white pr-10">
                    {c.title}
                  </h3>
                </div>
                <div className="px-5 py-5">
                  <p className="text-[#133844] text-sm leading-[1.85] font-dm">{c.desc}</p>
                </div>
                <div className="border-t border-black/10 bg-white/50 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#133844]">
                  {c.footer}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.45, ease: EASE }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,244,237,0.82), rgba(212,244,237,0.82)), url('/assets/Home/building-from-top.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#133844]">
          <p className="font-playfair text-[#133844] text-xl mb-4">Where Primary Leads</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-6">
            Strong starts. <em className="font-semibold text-[#133844]">Confident learners.</em>
          </h2>
          <p className="text-[#133844]/80 text-lg leading-[1.85] max-w-2xl mx-auto font-dm">
            Cambridge Primary at Seedling International Academy — designed to spark curiosity, build strong foundations, and prepare your child for the next stage of the Cambridge Pathway.
          </p>
          <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={stagger}>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/admissions" className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 hover:shadow-2xl hover:shadow-crimson/40 font-dm">
              Enquire Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/academics/lower-secondary" className="inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-[#133844] text-[#133844] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 font-dm">
              Cambridge Lower Secondary
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
