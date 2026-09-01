"use client";

import { useState, useEffect } from "react";
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
];

const subjectGroups = [
  {
    group: "Sciences",
    color: "crimson",
    items: ["Biology", "Chemistry", "Physics", "Marine Science", "Environmental Management", "Computer Science"],
  },
  {
    group: "Mathematics",
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
  const [activePathwayStep, setActivePathwayStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 3 seconds; loop back to 0 after last step
  // Pause when user clicks a step
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      setActivePathwayStep((prev) => (prev + 1) % pathwaySteps.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activePathwayStep, isPaused]);

  const handleStepClick = (i: number) => {
    setActivePathwayStep(i);
    setIsPaused(true);
  };

  const pathwaySteps = [
    { num: "01", title: "Year 12", desc: "AS Level chosen subjects — 3 to 4 typically. Regular mock exams, IPQ planning, university shortlisting.", color: "purple" },
    { num: "02", title: "Year 13", desc: "A2 continuation + AS-only subjects. Final Cambridge exams in May–June, IPQ submission.", color: "blue" },
    { num: "03", title: "Summer", desc: "Results day in August. UCAS, Common App, Indian university applications all finalised.", color: "green" },
    { num: "04", title: "University", desc: "Matriculation at a leading university — in India or abroad.", color: "orange" },
  ];
  const pathwayPalette = [
    { bg: "bg-purple-700", border: "border-purple-700", text: "text-white", shadow: "shadow-2xl shadow-purple-700/60", ring: "ring-purple-300/40" },
    { bg: "bg-blue-700", border: "border-blue-700", text: "text-white", shadow: "shadow-2xl shadow-blue-700/60", ring: "ring-blue-300/40" },
    { bg: "bg-green-700", border: "border-green-700", text: "text-white", shadow: "shadow-2xl shadow-green-700/60", ring: "ring-green-300/40" },
    { bg: "bg-orange-700", border: "border-orange-700", text: "text-white", shadow: "shadow-2xl shadow-orange-700/60", ring: "ring-orange-300/40" },
  ];
  const activeStep = pathwaySteps[activePathwayStep];
  const activePalette = pathwayPalette[activePathwayStep];

  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">
      {/* ═══ HERO ═══ */}
      <HeroWrapper
        backgroundImage="/academy.JPG"
        title="Cambridge Advanced — AS & A Levels in Jaipur"
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
              Two Pathways to <em className="font-semibold text-navy">Excel</em>
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
              Design Your <em className="font-semibold text-navy">Specialisation</em>
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {[
              {
                title: "Sciences",
                bg: "bg-purple-700",
                border: "border-purple-700",
                items: ["Biology", "Chemistry", "Physics", "Computer Science"],
                shadow: "shadow-2xl shadow-purple-700/60",
              },
              {
                title: "Mathematics",
                bg: "bg-blue-700",
                border: "border-blue-700",
                items: ["Mathematics"],
                shadow: "shadow-2xl shadow-blue-700/60",
              },
              {
                title: "Languages",
                bg: "bg-orange-700",
                border: "border-orange-700",
                items: ["English (General)", "English Literature", "English Language"],
                shadow: "shadow-2xl shadow-orange-700/60",
              },
              {
                title: "Commerce",
                bg: "bg-red-700",
                border: "border-red-700",
                items: ["Business", "Economics", "Accounting"],
                shadow: "shadow-2xl shadow-red-700/60",
              },
              {
                title: "Wellbeing",
                bg: "bg-purple-700",
                border: "border-purple-700",
                items: ["Physical Education"],
                shadow: "shadow-2xl shadow-purple-700/60",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                variants={cardRise}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: EASE }}
                className={`group relative ${c.bg} ${c.border} rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="relative z-10 p-6">
                  <h3 className="font-playfair text-xl font-semibold text-white mb-4">{c.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {c.items.map((s) => (
                      <span key={s} className="text-xs font-medium text-white bg-white/15 border border-white/30 rounded-full px-3 py-1">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {[
            {
              region: "India",
              tagline: "Top Destinations",
              items: ["IIT Delhi", "IIT Bombay", "IIT Madras", "NLSIU Bangalore", "St. Stephen's College", "Ashoka University"],
              footer: "India's leading engineering, law & liberal arts colleges",
            },
            {
              region: "United Kingdom",
              tagline: "Top Destinations",
              items: ["University of Oxford", "University of Cambridge", "Imperial College London", "LSE", "UCL", "University of Edinburgh"],
              footer: "The gold standard of higher education",
            },
            {
              region: "United States",
              tagline: "Top Destinations",
              items: ["Harvard University", "MIT", "Stanford", "Princeton", "Yale", "Columbia University"],
              footer: "Ivy League & top research universities",
            },
            {
              region: "Worldwide",
              tagline: "Top Destinations",
              items: ["NUS Singapore", "University of Melbourne", "TU Munich", "McGill", "University of Toronto", "Hong Kong University"],
              footer: "Premier universities across continents",
            },
          ].map((d, idx) => {
            const palette = [
              { header: "bg-purple-700", border: "border-purple-700", body: "bg-purple-100", text: "text-[#133844]", dot: "bg-purple-700", accent: "text-purple-700" },
              { header: "bg-blue-700", border: "border-blue-700", body: "bg-blue-100", text: "text-[#133844]", dot: "bg-blue-700", accent: "text-blue-700" },
              { header: "bg-green-700", border: "border-green-700", body: "bg-green-100", text: "text-[#133844]", dot: "bg-green-700", accent: "text-green-700" },
              { header: "bg-orange-700", border: "border-orange-700", body: "bg-orange-100", text: "text-[#133844]", dot: "bg-orange-700", accent: "text-orange-700" },
            ];
            const c = palette[idx % palette.length];
            return (
            <motion.div
              key={d.region}
              variants={cardRise}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={`group relative ${c.body} ${c.border} rounded-2xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              {/* Header band */}
              <div className={`relative ${c.header} px-5 py-4 text-white`}>
                <div className="absolute right-0 top-0 h-full w-11 bg-white/20 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,35%_50%)]" />
                <h3 className="relative z-10 font-playfair text-base font-black leading-tight text-white pr-10">
                  {d.region}
                </h3>
              </div>

              {/* Body */}
              <div className="px-5 py-5">
                <p className={`text-[11px] font-black uppercase tracking-wider ${c.accent} mb-3`}>
                  {d.tagline}
                </p>
                <ul className="space-y-2.5 text-sm leading-snug">
                  {d.items.map((uni) => (
                    <li key={uni} className={`flex gap-2.5 ${c.text}`}>
                      <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${c.dot}`} />
                      <span>{uni}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer band */}
              <div className="border-t border-black/10 bg-white/50 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#133844]">
                {d.footer}
              </div>
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
            {/* Stepper with progress bar */}
            <div className="relative mb-14">
              {/* Background progress line */}
              <motion.div
                className="absolute left-0 right-0 top-7 sm:top-9 h-1 rounded-full bg-sand/40"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: EASE }}
                style={{ transformOrigin: "left" }}
              />
              {/* Active progress line — animates as user clicks */}
              <motion.div
                className="absolute left-0 top-7 sm:top-9 h-1 rounded-full bg-[#133844]"
                initial={{ width: "0%" }}
                animate={{ width: `${(activePathwayStep / (pathwaySteps.length - 1)) * 100}%` }}
                transition={{ duration: 0.7, ease: EASE }}
              />

              {/* Step circles */}
              <div className="relative z-10 grid grid-cols-4 gap-2 sm:gap-4">
                {pathwaySteps.map((s, i) => {
                  const active = i === activePathwayStep;
                  const complete = i < activePathwayStep;
                  return (
                    <motion.button
                      key={s.num}
                      type="button"
                      onClick={() => handleStepClick(i)}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex flex-col items-center gap-3 text-center"
                      aria-current={active ? "step" : undefined}
                    >
                      <motion.span
                        animate={{
                          scale: active ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className={`relative w-14 h-14 sm:w-18 sm:h-18 rounded-full flex items-center justify-center font-playfair text-base sm:text-xl font-black shadow-md transition-colors duration-500 ${active ? "bg-[#133844] text-white ring-4 sm:ring-8 ring-[#133844]/20" : complete ? "bg-[#133844] text-white" : "bg-white border-2 border-sand/40 text-[#133844]"}`}
                      >
                        {s.num}
                      </motion.span>
                      <span className={`hidden sm:block text-[10px] font-black uppercase tracking-[0.18em] font-dm transition-colors duration-300 ${active ? "text-[#133844]" : "text-text-light"}`}>
                        Step
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Active step content card — neutral colors */}
            <motion.div
              key={activeStep.num}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="bg-white border-2 border-sand/30 rounded-3xl p-7 md:p-10 shadow-[0_28px_70px_-40px_rgba(10,31,58,0.25)]"
            >
              <div className="grid gap-6 md:grid-cols-[140px_1fr] md:items-center">
                <div className="flex items-center gap-5 md:flex-col md:items-center md:text-center">
                  <div className="w-20 h-20 rounded-2xl bg-off-white border-2 border-sand/30 flex items-center justify-center shadow-md">
                    <span className="text-[#133844] font-playfair font-black text-2xl">{activeStep.num}</span>
                  </div>
                  <div>
                    <p className="text-text-light text-xs font-black uppercase tracking-[0.24em] font-dm mb-2">
                      Step {activeStep.num}
                    </p>
                    <h3 className="font-playfair text-3xl md:text-4xl font-black text-ink leading-tight">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>
                <p className="text-text-light text-base md:text-lg leading-[1.85] font-dm">
                  {activeStep.desc}
                </p>
              </div>
            </motion.div>

            {/* Step labels */}
            <div className="grid md:grid-cols-4 gap-3 mt-6">
              {pathwaySteps.map((s, i) => (
                <div
                  key={s.num}
                  className={`text-center text-[10px] font-black uppercase tracking-[0.18em] font-dm transition-colors duration-300 ${i === activePathwayStep ? "text-[#133844]" : "text-text-light"}`}
                >
                  {s.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══ */}
      <motion.section
        className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]"
        initial="hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,244,237,0.82), rgba(212,244,237,0.82)), url('/assets/Home/building-from-top.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
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
