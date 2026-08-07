"use client";

import { motion } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";

const EASE = [0.22, 1, 0.36, 1] as const;

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

const qualifications = [
  {
    code: "AS",
    name: "Cambridge International AS Level",
    desc: "A one-year standalone qualification taken after IGCSE. Often the first half of an A Level — students can continue to A2 in Year 13, or hold the AS as a finished credential.",
    color: "crimson",
  },
  {
    code: "A",
    name: "Cambridge International A Level",
    desc: "The gold standard for university admission worldwide. A two-year course with deep specialisation, examined at the end of Year 13.",
    color: "navy",
  },
  {
    code: "IPQ",
    name: "Cambridge International Project Qualification",
    desc: "An extended research project on a topic of the student's choice. Equivalent to half an A Level — and prized by admissions teams for evidence of independent thinking.",
    color: "mauve",
  },
  {
    code: "AICE",
    name: "Cambridge AICE Diploma",
    desc: "A group certificate awarded to students who pass Cambridge AS/A Levels across multiple subject groups. Recognised by leading US and UK universities for breadth.",
    color: "royal-blue",
  },
];

const subjectGroups = [
  {
    group: "Sciences",
    color: "crimson",
    items: ["Biology", "Chemistry", "Physics", "Marine Science", "Environmental Management", "Computer Science"],
  },
  {
    group: "Mathematics & Further",
    color: "navy",
    items: ["Mathematics", "Further Mathematics", "Statistics"],
  },
  {
    group: "Humanities",
    color: "mauve",
    items: ["English Literature", "English Language", "History", "Geography", "Religious Studies", "Sociology"],
  },
  {
    group: "Languages",
    color: "royal-blue",
    items: ["French", "Spanish", "German", "Hindi", "Urdu", "Mandarin Chinese"],
  },
  {
    group: "Business & Social Sciences",
    color: "crimson",
    items: ["Business", "Economics", "Accounting", "Psychology", "Global Perspectives & Research"],
  },
  {
    group: "Creative & Vocational",
    color: "navy",
    items: ["Art & Design", "Music", "Drama", "Media Studies", "Physical Education", "Design & Technology"],
  },
];

const destinations = [
  { region: "India", items: ["IIT Delhi", "IIT Bombay", "IIT Madras", "NLSIU Bangalore", "St. Stephen's College", "Ashoka University"] },
  { region: "United Kingdom", items: ["University of Oxford", "University of Cambridge", "Imperial College London", "LSE", "UCL", "University of Edinburgh"] },
  { region: "United States", items: ["Harvard University", "MIT", "Stanford", "Princeton", "Yale", "Columbia University"] },
  { region: "Worldwide", items: ["NUS Singapore", "University of Melbourne", "TU Munich", "McGill", "University of Toronto", "Hong Kong University"] },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  crimson: { bg: "bg-crimson/10", text: "text-crimson", border: "border-crimson/30" },
  navy: { bg: "bg-navy/10", text: "text-navy", border: "border-navy/30" },
  mauve: { bg: "bg-mauve/10", text: "text-mauve", border: "border-mauve/30" },
  "royal-blue": { bg: "bg-royal-blue/10", text: "text-royal-blue", border: "border-royal-blue/30" },
};

export default function CambridgeAdvancedPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      {/* ═══ HERO ═══ */}
      <HeroWrapper
        backgroundImage="/assets/img/sps-banner.jpg"
        title="Cambridge Advanced"
        badge="The Final Two Years · Age 16–19"
        breadcrumbs={[{ label: "Cambridge Advanced" }]}
        height="large"
      />

      {/* ═══ INTRO ═══ */}
      <motion.section
        className="py-12 md:py-20 max-w-4xl mx-auto px-5 sm:px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <motion.span
          className="block w-px h-12 bg-sand mx-auto mb-5"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        <p className="font-playfair text-crimson text-xl mb-4">The Senior Years</p>
        <h2 className="font-playfair text-4xl md:text-6xl font-light leading-tight text-ink mb-6">
          Depth, specialisation,<br />
          <em className="font-semibold text-navy">a passport to the world.</em>
        </h2>
        <p className="text-text-light text-lg leading-[1.9] font-dm max-w-2xl mx-auto">
          Cambridge Advanced is where Seedling students turn curiosity into mastery. Over Years 12 and 13, learners dive deep into subjects they love, take ownership of an independent research project, and earn the credentials that open doors at leading universities in India and across 160 countries.
        </p>
      </motion.section>

      {/* ═══ FOUR QUALIFICATIONS ═══ */}
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
            transition={{ duration: 0.45, ease: EASE }}
          >
            <p className="font-playfair text-navy text-xl mb-3">The Qualifications</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              Four Ways to <em className="font-semibold text-navy">Excel</em>
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {qualifications.map((q, idx) => {
              const c = colorMap[q.color];
              const pastel = ["bg-pathway-purple-bg border-pathway-purple-border", "bg-pathway-blue-bg border-pathway-blue-border", "bg-pathway-green-bg border-pathway-green-border", "bg-pathway-orange-bg border-pathway-orange-border"][idx] || "bg-pathway-purple-bg border-pathway-purple-border";
              return (
                <motion.div
                  key={q.code}
                  variants={cardRise}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className={`group ${pastel} rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-xl border flex gap-5 md:gap-7 items-start`}
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center ${c.bg} ${c.text} font-playfair text-xl md:text-2xl font-semibold flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {q.code}
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 text-ink">{q.name}</h3>
                    <p className="text-text-light text-sm md:text-base leading-[1.85] font-dm">{q.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ SUBJECT GROUPS ═══ */}
      <section className="relative py-12 md:py-20 bg-[#d4f4ed] overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-crimson to-navy" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <p className="font-playfair text-navy text-xl mb-3">50+ Subjects · Six Groups</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-[#133844]">
              Design Your <em className="font-semibold text-[#133844]">Specialisation</em>
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {subjectGroups.map((g, idx) => {
              const c = colorMap[g.color];
              const pastel = ["bg-pathway-orange-bg border-pathway-orange-border", "bg-pathway-purple-bg border-pathway-purple-border", "bg-pathway-orange-bg border-pathway-orange-border", "bg-pathway-purple-bg border-pathway-purple-border", "bg-pathway-orange-bg border-pathway-orange-border", "bg-pathway-purple-bg border-pathway-purple-border"][idx] || "bg-pathway-orange-bg border-pathway-orange-border";
              return (
                <motion.div
                  key={g.group}
                  variants={cardRise}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className={`${pastel} backdrop-blur-sm rounded-2xl p-6 hover:border-sand/40 transition-colors`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-2 h-2 rounded-full ${c.bg.replace('/10', '')}`} />
                    <h3 className="font-playfair text-lg font-semibold text-[#133844]">{g.group}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span key={s} className="text-xs font-medium text-[#133844]/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ UNIVERSITY DESTINATIONS ═══ */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <p className="font-playfair text-navy text-xl mb-3">Where Cambridge Advanced Leads</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
            Doors Opened <em className="font-semibold text-navy">Worldwide</em>
          </h2>
          <p className="mt-6 text-text-light text-lg max-w-2xl mx-auto font-dm leading-relaxed">
            Cambridge International AS & A Levels are accepted by every leading university on Earth — including the IITs, Oxbridge, Ivy League, NUS and Melbourne.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {destinations.map((d, idx) => {
            const pastel = ["bg-pathway-purple-bg border-pathway-purple-border", "bg-pathway-blue-bg border-pathway-blue-border", "bg-pathway-green-bg border-pathway-green-border", "bg-pathway-orange-bg border-pathway-orange-border"][idx] || "bg-pathway-purple-bg border-pathway-purple-border";
            return (
            <motion.div
              key={d.region}
              variants={cardRise}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={`${pastel} rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg border`}
            >
              <h3 className="font-playfair text-lg font-semibold mb-4 text-ink">{d.region}</h3>
              <ul className="space-y-2">
                {d.items.map((uni) => (
                  <li key={uni} className="text-sm text-text-light flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crimson" />
                    <span>{uni}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ═══ PATHWAY DIAGRAM ═══ */}
      <section className="relative py-12 md:py-20 bg-navy-light/40 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-royal-blue/10 rounded-full blur-2xl -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/20 rounded-full blur-2xl -ml-48 -mb-48 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <p className="font-playfair text-mauve text-xl mb-3">The Pathway</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              From Year 12 to <em className="font-semibold text-navy">University</em>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-sand/50 hidden md:block" />

            <div className="grid md:grid-cols-4 gap-6 md:gap-4 relative">
              {[
                { num: "01", title: "Year 12", desc: "AS Level chosen subjects — 3 to 4 typically. Regular mock exams, IPQ planning, university shortlisting.", color: "crimson" },
                { num: "02", title: "Year 13", desc: "A2 continuation + AS-only subjects. Final Cambridge exams in May–June, IPQ submission.", color: "navy" },
                { num: "03", title: "Summer", desc: "Results day in August. UCAS, Common App, Indian university applications all finalised.", color: "mauve" },
                { num: "04", title: "University", desc: "Matriculation at a leading university — in India or abroad.", color: "royal-blue" },
              ].map((s, i) => {
                const c = colorMap[s.color];
                return (
                  <motion.div
                    key={s.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                    className="relative text-center"
                  >
                    <div className={`relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 rounded-full ${c.bg} ${c.text} flex items-center justify-center font-playfair text-xl md:text-2xl font-semibold border-4 border-white shadow-lg`}>
                      {s.num}
                    </div>
                    <h3 className="font-playfair text-lg font-semibold mb-2 text-ink">{s.title}</h3>
                    <p className="text-text-light text-sm leading-[1.85] font-dm max-w-[220px] mx-auto">{s.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══ */}
      <motion.section
        className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#133844]">
          <motion.span
            className="block w-px h-10 bg-sand mx-auto mb-5"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
          <p className="font-playfair text-[#133844] text-xl mb-4">The Final Stretch</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-6">
            Two years that open<br />
            <em className="font-semibold text-[#133844]">a lifetime of doors.</em>
          </h2>
          <p className="text-[#133844]/80 text-lg leading-[1.85] max-w-2xl mx-auto font-dm">
            Talk to our Cambridge Advanced team about how your child can begin shaping the next chapter — at Seedling and beyond.
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
              className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 hover:shadow-2xl hover:shadow-crimson/40 font-dm"
            >
              Begin Your Journey
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              variants={cardRise}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/academics/upper-secondary"
              className="inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-[#133844] text-[#133844] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 font-dm"
            >
              Cambridge Upper Secondary
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
