"use client";

import { motion } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";
import SixPillars from "@/components/campus/SixPillars";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } } };
const cardRise = { hidden: { opacity: 0, y: 20, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } };

const facilities = [
  { name: "Smart Classrooms", desc: "Modern AV-equipped classrooms with interactive whiteboards and ergonomic furniture." },
  { name: "STEM Labs", desc: "Purpose-built Physics, Chemistry, Biology and Robotics laboratories." },
  { name: "Library & Resource Centre", desc: "Extensive book collection, e-resources, periodicals and quiet study zones." },
  { name: "Sports Facilities", desc: "Multi-sport courts, athletics track, swimming pool and indoor games room." },
  { name: "Performing Arts Spaces", desc: "Auditorium, music rooms, dance studio and visual arts studio." },
  { name: "Cafeteria & Canteen", desc: "Nutritious, hygienically prepared meals and refreshments." },
];

const stats = [
  { value: "1993", label: "Established", palette: "purple" },
  { value: "20:1", label: "Student : Teacher", palette: "blue" },
  { value: "Modern", label: "Campus", palette: "green" },
  { value: "100%", label: "Cambridge Results", palette: "orange" },
];

export default function SMIAPage(): React.JSX.Element {
  return (
    <main className="bg-off-white text-text-base overflow-x-clip font-dm">
      <HeroWrapper
        backgroundImage="/assets/Home/SMIA_collage_v3.webp"
        title="Seedling Modern International Academy"
        badge="SMIA · Durgapura, Jaipur"
        breadcrumbs={[{ label: "Campuses", href: "/campuses" }, { label: "SMIA" }]}
        height="large"
      />

      <section className="relative py-14 md:py-20 bg-white overflow-x-clip">
        {/* Soft accent blur */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-mauve/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sand/15 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
          {/* Campus header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="size-2.5 rounded-full bg-royal-blue" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-navy">
                  SMIA · Durgapura, Jaipur
                </span>
              </div>
              <h1 className="font-playfair text-4xl md:text-6xl font-light leading-[1.05] text-ink">
                Seedling Modern International Academy
                <br />
                <span className="text-xs md:text-sm font-black tracking-[0.3em] uppercase align-middle text-navy ml-2">
                  Timeless Seedling values.
                </span>
              </h1>
            </div>
            <a
              href="https://maps.google.com/?q=Seedling+Modern+International+Academy+Durgapura+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] uppercase text-crimson hover:text-[#133844] transition-colors"
            >
              View on Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </motion.div>

          {/* Intro — full width */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mb-12 md:mb-16"
          >
            <p className="font-playfair text-crimson text-xl mb-3 font-semibold">Vibrant. Connected. Forward-looking.</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-light text-ink leading-tight mb-5">
              Modern facilities. <em className="font-semibold text-navy">Timeless Seedling values.</em>
            </h2>
            <p className="text-text-light text-base md:text-lg leading-[1.85] font-dm mb-6">
              Seedling Modern International Academy (SMIA) at Durgapura brings the same globally benchmarked Cambridge education to central Jaipur — modern, vibrant and built for the next generation of learners.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => {
                const paletteMap: Record<string, string> = {
                  purple: "bg-purple-100 border-purple-700",
                  blue: "bg-blue-100 border-blue-700",
                  green: "bg-green-100 border-green-700",
                  orange: "bg-orange-100 border-orange-700",
                };
                return (
                  <div key={s.label} className={`${paletteMap[s.palette]} rounded-2xl p-5 border-2 shadow-md hover:shadow-lg transition-all`}>
                    <p className="font-playfair text-3xl md:text-4xl font-black text-navy leading-none mb-1.5">{s.value}</p>
                    <p className="text-[11px] uppercase tracking-widest text-text-light font-dm font-semibold">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Facilities + Image split (Exact original style) */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* LEFT: Sticky campus image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="md:sticky md:top-28 self-start"
            >
              <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden border border-sand/40 shadow-lg">
                <img src="/assets/Home/SMIA_collage_v3.webp" alt="Seedling Modern International Academy" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow">
                  <span className="text-[10px] font-black tracking-[0.25em] uppercase text-navy">SMIA</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Facilities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <p className="font-playfair text-navy text-xl mb-2">The Campus</p>
              <h3 className="font-playfair text-2xl md:text-3xl font-light text-ink leading-tight mb-5">
                Facilities &amp; Spaces
              </h3>
              <div className="space-y-3">
                {facilities.map((f, i) => {
                  const palettes = [
                    "bg-purple-100 border-purple-700",
                    "bg-blue-100 border-blue-700",
                    "bg-green-100 border-green-700",
                    "bg-orange-100 border-orange-700",
                    "bg-red-100 border-red-700",
                    "bg-orange-100 border-orange-700",
                  ];
                  const paletteClass = palettes[i % palettes.length];
                  return (
                    <motion.div
                      key={f.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.35, delay: i * 0.04, ease: EASE }}
                      className={`flex gap-4 p-4 ${paletteClass} rounded-2xl border-2`}
                    >
                      <span className="size-9 rounded-xl bg-crimson text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-playfair text-base font-semibold text-[#133844] leading-tight">{f.name}</p>
                        <p className="text-[13px] text-text-light leading-relaxed font-dm">{f.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Six Pillars component */}
      <SixPillars />

      {/* Map + Location */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-playfair text-crimson text-xl mb-3">Visit Us</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-light text-ink leading-tight mb-4">
              Find Your Way <em className="font-semibold text-navy">to SMIA</em>
            </h2>
            <p className="text-text-light text-base md:text-lg leading-relaxed font-dm mb-4">
              Ashok Marg, Mahaveer Nagar II, Durgapura, Jaipur - 302018 — easy to reach from across the city.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-crimson text-white flex items-center justify-center flex-shrink-0 text-[10px]">📞</span>
                <a href="tel:+919587772837" className="text-[#133844] font-semibold hover:text-crimson transition-colors">+91 95877 72837 (Admissions)</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-crimson text-white flex items-center justify-center flex-shrink-0 text-[10px]">✉</span>
                <a href="mailto:seedlingacademy@hotmail.com" className="text-[#133844] font-semibold hover:text-crimson transition-colors break-all">seedlingacademy@hotmail.com</a>
              </div>
            </div>
            <a href="https://maps.google.com/?q=Seedling+Modern+International+Academy+Durgapura+Jaipur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-[11px] font-black tracking-[0.2em] uppercase text-crimson hover:text-[#133844] transition-colors">
              View on Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, ease: EASE }} className="rounded-[8px] overflow-hidden border border-sand/40 shadow-lg h-[360px]">
            <iframe
              src="https://www.google.com/maps?q=Seedling+Modern+International+Academy+Durgapura+Jaipur&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SMIA Durgapura location"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <motion.section className="relative py-16 md:py-24 px-5 sm:px-6 overflow-hidden bg-[#d4f4ed]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.45, ease: EASE }}>
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#133844]">
          <p className="font-playfair text-[#133844] text-xl mb-4">Visit Our Campus</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light leading-[1.15] mb-6">
            Walk the corridors<br />
            <em className="font-semibold text-[#133844]">of a Seedling school.</em>
          </h2>
          <p className="text-[#133844]/80 text-lg leading-[1.85] max-w-2xl mx-auto font-dm">
            Book a campus visit and see the SMIA difference in person — the classrooms, the teachers, the community.
          </p>
          <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={stagger}>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/admissions" className="inline-flex items-center gap-3 bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 hover:shadow-2xl hover:shadow-crimson/40 font-dm">
              Begin Application
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
            <motion.a variants={cardRise} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} href="/campuses/sia" className="inline-flex items-center gap-3 border border-[#133844]/30 hover:bg-white hover:text-[#133844] text-[#133844] px-8 py-4 rounded-full text-xs tracking-widest uppercase font-black transition-all duration-300 font-dm">
              Visit SIA →
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
