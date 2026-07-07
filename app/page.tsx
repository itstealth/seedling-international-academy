'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trophy, Users, Music, Medal, BookOpen, Award, Heart, Brain, ArrowUpRight, CalendarDays, Camera } from 'lucide-react';
import { submitEnquiryForm, validateEnquiryForm, type EnquiryFormData } from '@/lib/enquiry-form';
import WorldMapDemo from "@/components/world-map-demo";
import { AnimatePresence, motion } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────
type TabKey = 'campus' | 'labs' | 'sports' | 'arts';

// ─── Request a Callback Form ─────────────────────────────────────────────────
function CallbackForm() {
  const [formData, setFormData] = useState({ parentName: '', candidateName: '', phone: '', className: '', gender: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: EnquiryFormData = { parentName: formData.parentName, candidateName: formData.candidateName, phone: formData.phone, className: formData.className, gender: formData.gender, message: formData.message };
    const errs = validateEnquiryForm(data);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      await submitEnquiryForm(data);
      window.location.href = '/thank-you';
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const fieldCls = "w-full h-12 rounded-xl border border-[#cfcfcf] bg-white px-4 font-playfair text-base text-text-base placeholder:text-[#8c8c8c] focus:outline-none focus:border-navy transition-colors";
  const errorCls = "text-crimson text-xs mt-1.5 pl-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <input type="text" placeholder="Parent's Name *" value={formData.parentName} onChange={handleChange('parentName')} className={fieldCls} />
        {errors.parentName && <p className={errorCls}>{errors.parentName}</p>}
      </div>
      <div>
        <input type="text" placeholder="Student's Name *" value={formData.candidateName} onChange={handleChange('candidateName')} className={fieldCls} />
        {errors.candidateName && <p className={errorCls}>{errors.candidateName}</p>}
      </div>
      <div>
        <input type="tel" placeholder="Mobile Number *" value={formData.phone}
          onChange={(e) => handleChange('phone')({ ...e, target: { ...e.target, value: e.target.value.replace(/\D/g, '').slice(0, 10) } } as React.ChangeEvent<HTMLInputElement>)}
          className={fieldCls} />
        {errors.phone && <p className={errorCls}>{errors.phone}</p>}
      </div>
      <div>
        <select value={formData.className} onChange={handleChange('className')} className={`${fieldCls} appearance-none`}>
          <option value="">Grade Applying For *</option>
          <option>Nursery</option><option>LKG</option><option>UKG</option>
          <option>Grade 1</option><option>Grade 2</option><option>Grade 3</option>
          <option>Grade 4</option><option>Grade 5</option><option>Grade 6</option>
          <option>Grade 7</option><option>Grade 8</option><option>Grade 9</option>
          <option>Grade 10</option><option>Grade 11</option><option>Grade 12</option>
        </select>
        {errors.className && <p className={errorCls}>{errors.className}</p>}
      </div>
      <div>
        <select value={formData.gender} onChange={handleChange('gender')} className={`${fieldCls} appearance-none`}>
          <option value="">Select Gender *</option>
          <option>Male</option><option>Female</option>
        </select>
        {errors.gender && <p className={errorCls}>{errors.gender}</p>}
      </div>
      <div>
        <textarea rows={3} placeholder="Message" value={formData.message} onChange={handleChange('message')} className="w-full rounded-xl border border-[#cfcfcf] bg-white px-4 py-3 font-playfair text-base text-text-base placeholder:text-[#8c8c8c] focus:outline-none focus:border-navy transition-colors resize-none" />
        {errors.message && <p className={errorCls}>{errors.message}</p>}
      </div>
      <button type="submit" disabled={submitting} className="w-full h-12 bg-crimson hover:bg-crimson-dark disabled:opacity-60 text-white rounded-full font-playfair font-black text-base uppercase tracking-wider transition-colors shadow-lg hover:shadow-crimson/30">
        {submitting ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}

// ─── Main Page Component ─────────────────────────────────────────────────────
export default function CambridgeInternationalSchoolPage(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabKey>('campus');
  const [navShadow, setNavShadow] = useState<string>('0 2px 20px rgba(23,81,144,0.10)');

  // Sticky nav shadow on scroll
  useEffect(() => {
    const handleScroll = (): void => {
      setNavShadow(
        window.scrollY > 10
          ? '0 4px 30px rgba(23,81,144,0.15)'
          : '0 2px 20px rgba(23,81,144,0.10)'
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabSwitch = (tab: TabKey): void => {
    setActiveTab(tab);
  };

  const marqueeItems: string[] = [
    'Admissions Open for 2026–27 Academic Session',
    'Scholarship Available for Meritorious Students in Academics & Sports',
    'Parent Counselling Available Online & Offline',
    'Results 2024: 100% Pass Rate · Multiple School Toppers',
    'Annual Sports Day – March 2025',
    'Admissions Open for 2026–27 Academic Session',
    'Scholarship Available for Meritorious Students in Academics & Sports',
    'Parent Counselling Available Online & Offline',
    'Results 2024: 100% Pass Rate · Multiple School Toppers',
    'Annual Sports Day – March 2025',
  ];

  // Infrastructure tab data
  const infraData: Record<TabKey, Array<{ img: string; alt: string; tag: string; title: string; desc: string }>> = {
    campus: [
       { img: '/assets/Home/School2.webp', alt: 'School Campus', tag: 'Campus', title: 'Sprawling Green Campus', desc: 'Our 5-acre green campus provides a serene, distraction-free environment ideal for focused learning and outdoor activities.' },
  { 
  img: '/assets/Home/science-lab.jpg',
  alt: 'Science Lab',
  tag: 'Science Lab',
  title: 'Modern Science Labs',
 desc: 'Modern science labs with advanced tools encouraging innovation and practical learning for every student.'
},
     
      { img: '/assets/STELLAR SATURDAYS/4.webp', alt: 'Library', tag: 'Library', title: 'Resource-Rich Library', desc: 'A vast collection of books, e-resources, and periodicals encouraging a love of reading and independent research.' },
    ],
    labs: [
      { img: '/assets/BOOT CAMP/2.webp', alt: 'Science Lab', tag: 'Science', title: 'Advanced Science Labs', desc: 'Physics, Chemistry, and Biology labs equipped with latest apparatus enabling hands-on experimental learning.' },
      { img: '/assets/ANNUAL FUNCTION/3.webp', alt: 'Computer Lab', tag: 'Technology', title: 'AI & Robotics Lab', desc: 'State-of-the-art computer and robotics lab introducing students to coding, AI tools, and future technologies.' },
      { img: '/assets/STELLAR SATURDAYS/4.webp', alt: 'Auditorium', tag: 'Facilities', title: 'Modern Auditorium', desc: 'A fully equipped 800-seat auditorium for cultural events, seminars, and inter-school competitions.' },
    ],
    sports: [
      { img: '/assets/SPORTS DAY/1.webp', alt: 'Sports Ground', tag: 'Outdoor', title: 'Multi-Sport Ground', desc: 'Dedicated grounds for cricket, football, athletics, and kabaddi — built to national standards.' },
      { img: '/assets/STELLAR SATURDAYS/1.webp', alt: 'Swimming Pool', tag: 'Aquatics', title: 'Swimming Pool', desc: 'Olympic-standard swimming pool with qualified coaches for beginner and advanced swimmers from Grade 3 onwards.' },
      { img: '/assets/SPORTS%20DAY/basketball.JPG', alt: 'Basketball', tag: 'Outdoor', title: 'Basketball', desc: 'Well-maintained basketball courts for competitive play and physical development.' },
    ],
    arts: [
      { img: '/assets/ANNUAL FUNCTION/5.webp', alt: 'Music Room', tag: 'Music', title: 'Music & Dance Studio', desc: 'Fully equipped studios for classical and contemporary music, dance, and performing arts for all grades.' },
      { img: '/assets/BOOT CAMP/3.webp', alt: 'Art Studio', tag: 'Visual Arts', title: 'Art & Craft Studio', desc: 'Creative spaces where students explore painting, sculpture, pottery, and digital design under expert guidance.' },
      { img: '/assets/ANNUAL FUNCTION/4.webp', alt: 'Drama', tag: 'Theatre', title: 'Drama & Theatre Club', desc: 'Annual theatre productions, inter-school drama contests, and storytelling workshops for confident self-expression.' },
    ],
  };

  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen overflow-hidden px-4 pt-20 md:pt-28">
        {/* Background Video with Overlay (chunked streaming for smooth playback) */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/Home/building-from-top.jpg"
            // Disable picture-in-picture so the video stays as a background
            // Disable remote playback for the same reason
            // @ts-ignore - non-standard but widely supported attributes
            disablePictureInPicture
            // @ts-ignore - non-standard but widely supported attributes
            disableRemotePlayback
          >
            <source
              src="/assets/Home/hero-chunk-1.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a5c]/70 via-[#1a3a5c]/60 to-[#1a3a5c]/80" />
        </div>

        {/* Decorative SVG Elements */}
        <svg
          width="358"
          height="483"
          viewBox="0 0 358 483"
          className="absolute top-0 z-[1] left-0 opacity-45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="paint0_linear" x1="-50.9961" y1="-33.114" x2="-50.9961" y2="507.886" gradientUnits="userSpaceOnUse">
              <stop stopColor="#91bbfb" />
              <stop offset="1" stopColor="#E6F1FF" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="8.04686" y1="-135.113" x2="8.04686" y2="405.887" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8dbafd" />
              <stop offset="1" stopColor="#c1d9f8" />
            </linearGradient>
          </defs>
          <g filter="url(#filter0_f)">
            <rect x="-86.9961" y="-33.114" width="72" height="541" rx="36" transform="rotate(-30.8182 -86.9961 -33.114)" fill="url(#paint0_linear)" />
          </g>
          <g filter="url(#filter1_f)">
            <rect x="-17" y="-135.113" width="50.0937" height="541" rx="25.0469" transform="rotate(-30.8182 -17 -135.113)" fill="url(#paint1_linear)" />
          </g>
          <filter id="filter0_f" x="-137.641" y="-120.646" width="440.285" height="602.787" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_0_1" />
          </filter>
          <filter id="filter1_f" x="-71.707" y="-215.486" width="429.598" height="599.69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_0_1" />
          </filter>
        </svg>

        {/* Hero Header Badge */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-2 text-center">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md px-1.5 py-1 text-white shadow-lg shadow-blue-500/15">
            <span className="rounded-full bg-gradient-to-br from-[#2f8cff] to-[#9fc8ff] px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest text-white">
              New
            </span>
            <span className="truncate pr-2 text-sm font-semibold text-white">
              Cambridge IGCSE Affiliated · Jaipur
            </span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center max-w-7xl mx-auto">
          <h1 className="mt-8 max-w-6xl !font-dm text-[clamp(3rem,8vw,7.25rem)] font-medium leading-[0.95] tracking-normal !text-white">
            Where Learning <span className="whitespace-nowrap">Inspires Transformation.</span>
          </h1>
          <p className="mt-7 max-w-3xl px-2 text-lg font-medium leading-relaxed text-white/80 md:text-2xl">
            Shaping confident learners through Cambridge academics, creative exploration, and a campus built for meaningful growth.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a href="/admissions#enquire" className="rounded-lg border border-blue-300 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-200 px-5 py-3 text-lg font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              Apply Now
            </a>
            <a href="/about" className="rounded-lg border border-neutral-300 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-300 px-5 py-3 text-lg font-semibold text-black shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              Explore School
            </a>
          </div>
        </div>
      </section>


      {/* ─── CURRICULUM OVERVIEW ─── */}
      <section className="bg-navy-deeper pt-20 pb-24 relative overflow-hidden" id="curriculum">
        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex flex-col items-center gap-2 mb-5">
              <span className="block w-px h-10 bg-sand" />
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-sand">Learning</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-6xl font-light text-white leading-tight mb-6">
              Curriculum overview
            </h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-light max-w-2xl mx-auto">
              At Seedling International School, we are dedicated to upholding the values and heritage of our founding school, while
              building on British education excellence. Our curriculum emphasises academic rigour, personal growth, and a global
              perspective from the Early Years to the Sixth Form. Our programme covers four stages and age groups:
            </p>
          </div>

          {/* Stage cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {[
              {
                name: "Pre-Prep School",
                age: "3 - 7 years",
                img: "/assets/Home/3 years .webp",
              },
              {
                name: "Prep School",
                age: "7 - 11 years",
                img: "/assets/Home/4 years .webp",
              },
              {
                name: "Junior School",
                age: "11 - 14 years",
                img: "/assets/Home/11 years .webp",
              },
              {
                name: "Senior School",
                age: "14 - 16 years",
                img: "/assets/Home/14 years .webp",
              },
              {
                name: "Sixth Form",
                age: "16 - 18 years",
                img: "/assets/Home/16 years.webp",
              },
            ].map((stage, i) => (
              <motion.div
                key={stage.name}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-xl cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                {/* Image */}
                <img
                  src={stage.img}
                  alt={stage.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Top stage label */}
                <div className="absolute top-4 left-4 right-4 flex justify-end">
                  <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white/70">
                    Stage {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="font-playfair text-xl md:text-2xl font-light text-white leading-tight mb-3">
                    {stage.name}
                  </h3>
                  <span className="inline-block px-4 py-1.5 rounded-full border border-sand/70 text-sand text-[11px] font-black tracking-widest">
                    {stage.age}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORLD MAP / GLOBAL REACH ─── */}
      <section className="bg-navy-deeper w-full" id="global-reach">
        <div className="w-full">
          <WorldMapDemo />
        </div>
      </section>

      {/* ─── TESTIMONIALS / VOICES FROM THE FAMILY ─── */}
      <section className="bg-off-white py-16 md:py-24" id="testimonials">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              Testimonials
            </motion.span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper leading-tight">
              {"Voices from the ".split("").map((ch, idx) => (
                <motion.span
                  key={`v-${idx}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: idx * 0.025 }}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
              <em className="font-semibold italic text-royal-blue">
                {"Family".split("").map((ch, idx) => (
                  <motion.span
                    key={`f-${idx}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + idx * 0.05,
                    }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </em>
              <motion.span
                className="inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                .
              </motion.span>
            </h2>
            <motion.p
              className="mt-5 text-text-light text-base md:text-lg leading-relaxed font-light"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Real stories from the parents, students and alumni who make
              Seedling International School what it is today.
            </motion.p>
          </motion.div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote:
                  "Seedling has shaped my daughter into a confident, curious learner. The Cambridge curriculum and the teachers' dedication have made every day feel meaningful.",
                name: "Priya Sharma",
                role: "Parent — Grade 5",
                accent: "from-royal-blue to-royal-blue",
              },
              {
                quote:
                  "From the IGCSE toppers to the sports field, the school gave me opportunities I never imagined. I'm proud to be a Seedling alumnus at a top global university today.",
                name: "Aarav Mehta",
                role: "Alumni — Class of 2022",
                accent: "from-crimson to-crimson",
              },
              {
                quote:
                  "The holistic approach — academics, arts, sports and life skills — has helped my son find what he truly loves. We couldn't have asked for a better environment.",
                name: "Rohan & Anjali Verma",
                role: "Parents — Grade 8",
                accent: "from-navy to-navy",
              },
              {
                quote:
                  "As an educator myself, I'm amazed by Seedling's teaching standards. The faculty genuinely cares, and the leadership is always open to dialogue and growth.",
                name: "Dr. Neha Kapoor",
                role: "Parent — Grade 10",
                accent: "from-royal-blue to-royal-blue",
              },
              {
                quote:
                  "The transport, safety and the warmth of every staff member — from the gate to the classroom — gives us complete peace of mind as working parents.",
                name: "Karan Singhvi",
                role: "Parent — Grade 3",
                accent: "from-crimson to-crimson",
              },
              {
                quote:
                  "I came to Seedling in Grade 9 and immediately felt at home. Today I'm an A-Level topper and a published debater. This place changed my life.",
                name: "Isha Rathore",
                role: "Student — Grade 12",
                accent: "from-navy to-navy",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="group relative bg-white rounded-3xl p-7 md:p-8 border border-sand/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${t.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Quote mark removed */}

                {/* Quote */}
                <blockquote className="text-text-base text-[15px] leading-relaxed font-light flex-1 mt-3">
                  {t.quote}
                </blockquote>

                {/* Author */}
                <div className="mt-6 pt-5 border-t border-sand/40 flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.accent} text-white flex items-center justify-center font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="font-playfair text-base font-semibold text-navy-deeper leading-tight">
                      {t.name}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-text-light font-semibold mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INFRASTRUCTURE / CAMPUS TABS ─── */}
      <section className="bg-navy-deeper pt-14 pb-12 md:pt-20 md:pb-14 relative overflow-hidden" id="campus">
        {/* Subtle mesh decoration to match other dark sections */}
        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial={{ opacity: 0, y: 54 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">
            <div className="max-w-3xl">
              <motion.span
                className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block"
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
              >
                Infrastructure
              </motion.span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-tight">
                World-Class <em className="font-semibold text-sand">Facilities</em>
              </h2>
            </div>

          {/* Tab Bar */}
          <div className="flex flex-nowrap gap-2 overflow-x-auto rounded-2xl bg-white/10 p-2 border border-white/15">
            {([
              { key: 'campus', label: '🏫 Campus' },
              // { key: 'labs', label: '🔬 Labs & Tech' },
              { key: 'sports', label: '⚽ Sports' },
              { key: 'arts', label: '🎨 Arts' },
            ] as { key: TabKey; label: string }[]).map(({ key }) => (
              <button
                key={key}
                className={`relative min-w-28 rounded-xl px-5 py-3 text-xs font-black tracking-widest uppercase cursor-pointer transition-colors ${activeTab === key ? 'text-white' : 'text-white/70 hover:text-white'}`}
                onClick={() => handleTabSwitch(key)}
              >
                {activeTab === key && (
                  <motion.span
                    layoutId="facility-active-tab"
                    className="absolute inset-0 rounded-xl bg-royal-blue shadow-lg shadow-royal-blue/30"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{key === 'campus' ? 'Campus' : key === 'sports' ? 'Sports' : 'Arts'}</span>
              </button>
            ))}
          </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-8 items-stretch"
              initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.article
                className="group relative min-h-[430px] md:min-h-[560px] rounded-[2.25rem] overflow-hidden shadow-editorial bg-navy-deeper"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                <img
                  src={infraData[activeTab][0].img}
                  alt={infraData[activeTab][0].alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper via-navy-deeper/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 text-white">
                  <span className="inline-block bg-white/15 text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border border-white/25 backdrop-blur-md">
                    {infraData[activeTab][0].tag}
                  </span>
                  <h3 className="font-playfair text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">
                    {infraData[activeTab][0].title}
                  </h3>
                  <p className="max-w-xl text-sm md:text-base leading-relaxed text-white/82 font-light">
                    {infraData[activeTab][0].desc}
                  </p>
                </div>
              </motion.article>

              <div className="grid gap-6">
                {infraData[activeTab].slice(1).map(({ img, alt, tag, title, desc }, i) => (
                  <motion.article
                    key={title}
                    className="group grid sm:grid-cols-[180px_1fr] bg-off-white rounded-[2rem] overflow-hidden border border-sand/40 hover:border-navy/20 hover:shadow-editorial transition-all duration-500"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.12 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="h-52 sm:h-full min-h-[220px] overflow-hidden">
                      <img
                        src={img}
                        alt={alt}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-7 flex flex-col justify-center">
                      <span className="inline-block w-fit bg-navy-light text-navy text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-full mb-4 border border-navy/10">
                        {tag}
                      </span>
                      <h3 className="font-playfair text-2xl font-semibold text-navy-deeper mb-3 leading-tight">
                        {title}
                      </h3>
                      <p className="text-sm text-text-light leading-relaxed font-light">
                        {desc}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ─── WHY CAMBRIDGE INTERNATIONAL SCHOOL ─── */}
      <section className="bg-off-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-24 items-center">
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">Why Choose Us</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper leading-tight mb-12">
                Why Seedling International Academy?
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  { num: '01', title: 'Personalized Journeys', desc: "Tailored approaches for each child's strengths." },
                  { num: '02', title: 'Future-Ready Skills', desc: 'AI literacy and critical thinking integrated.' },
                  { num: '03', title: 'Global Mindset', desc: 'International exposure with Indian values.' },
                  { num: '04', title: 'University Counseling', desc: 'Dedicated guidance for global higher-education pathways.' },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="flex gap-6 items-start p-8 bg-white rounded-[2rem] shadow-sm border border-sand/30 hover:shadow-editorial hover:border-navy/20 transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-navy text-white flex items-center justify-center font-black text-xl flex-shrink-0 group-hover:scale-110 transition-transform">{num}</div>
                    <div>
                      <h4 className="text-lg font-black text-navy-deeper mb-1 uppercase tracking-tight font-dm">{title}</h4>
                      <p className="text-sm text-text-light leading-relaxed font-light">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden h-[600px] shadow-editorial border-8 border-white">
                <img src="/assets/ANNUAL FUNCTION/2.webp" alt="Students Learning" className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-navy-deeper text-white rounded-[2rem] p-12 shadow-2xl z-10 border-4 border-white">
                <strong className="block text-6xl font-playfair text-sand mb-2">33+</strong>
                <span className="text-xs font-black tracking-widest uppercase opacity-60">Years of Academic<br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STUDENT GALLERY ─── */}
      <section className="bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">Campus Life</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper leading-tight">
                Vibrant <em className="font-semibold text-navy italic">Memories</em>.
              </h2>
            </div>
            {/* <a href="/news-and-events" className="bg-navy-deeper hover:bg-navy-dark text-white px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 shadow-xl hover:shadow-navy-deeper/40">View Gallery</a> */}
          </div>
          {/* Gallery Grid - Mobile: 2-col boxes | Desktop: asymmetric layout */}
          <div className="hidden md:block space-y-4">
            {/* Row 1 - Left big, Right stacked */}
            <div className="grid grid-cols-3 gap-4 h-[280px]">
              <div className="col-span-2 row-span-2 group relative rounded-[2rem] overflow-hidden">
                <img src="/assets/ANNUAL FUNCTION/5.webp" alt="Annual Day" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white text-lg font-semibold font-playfair">Annual Day</span>
                </div>
              </div>
              <div className="group relative rounded-[2rem] overflow-hidden">
                <img src="/assets/STELLAR SATURDAYS/2.webp" alt="Stellar Saturdays" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-sm font-semibold font-playfair">Stellar Saturdays</span>
                </div>
              </div>
              <div className="group relative rounded-[2rem] overflow-hidden">
                <img src="/assets/JAISELMER TRIP/1.webp" alt="Jaiselmer Trip" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-sm font-semibold font-playfair">Jaiselmer Trip</span>
                </div>
              </div>
            </div>

            {/* Row 2 - Wide left, 1 image right */}
            <div className="grid grid-cols-3 gap-4 h-[280px]">
              <div className="col-span-2 group relative rounded-[2rem] overflow-hidden">
                <img src="/assets/BOOT CAMP/1.webp" alt="Boot Camp" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-sm font-semibold font-playfair">Boot Camp</span>
                </div>
              </div>
              <div className="col-span-1 row-span-2 group relative rounded-[2rem] overflow-hidden">
                <img src="/assets/FAREWELL 12TH/2.webp" alt="Diwali Dance" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-sm font-semibold font-playfair">Diwali Dance</span>
                </div>
              </div>
            </div>

            {/* Row 3 - Stacked left, 1 image right */}
            <div className="grid grid-cols-3 gap-4 h-[280px]">
              <div className="group relative rounded-[2rem] overflow-hidden">
                <img src="/assets/SPORTS DAY/3.webp" alt="Sports Day" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-sm font-semibold font-playfair">Sports Day</span>
                </div>
              </div>
              <div className="group relative rounded-[2rem] overflow-hidden">
                <img src="/assets/PRIMARY OUTING/1.webp" alt="Primary Outing" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-sm font-semibold font-playfair">Primary Outing</span>
                </div>
              </div>
              <div className="group relative rounded-[2rem] overflow-hidden">
                <img src="/assets/SPARKLE FEST/1.webp" alt="Sparkle Fest" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-sm font-semibold font-playfair">Sparkle Fest</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Gallery - Clean 2-column grid */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {[
              { img: '/assets/ANNUAL FUNCTION/5.webp', label: 'Annual Day' },
              { img: '/assets/STELLAR SATURDAYS/2.webp', label: 'Stellar Saturdays' },
              { img: '/assets/JAISELMER TRIP/1.webp', label: 'Jaiselmer Trip' },
              { img: '/assets/BOOT CAMP/1.webp', label: 'Boot Camp' },
              { img: '/assets/FAREWELL 12TH/2.webp', label: 'Diwali Dance' },
              { img: '/assets/SPORTS DAY/3.webp', label: 'Sports Day' },
              { img: '/assets/PRIMARY OUTING/1.webp', label: 'Primary Outing' },
              { img: '/assets/SPARKLE FEST/1.webp', label: 'Sparkle Fest' },
            ].map(({ img, label }) => (
              <div key={label} className="group relative rounded-2xl overflow-hidden aspect-square">
                <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                  <span className="text-white text-xs font-semibold font-playfair">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── TRENDING UPDATES + INSTAGRAM ─── */}
      <section className="bg-navy-deeper/40 pt-16 pb-12 relative overflow-hidden backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/30 via-navy-deeper/20 to-royal-blue/30" />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-navy-deeper/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-white/80 mb-4 block">Latest at Seedling International School</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-tight">
                Trending <em className="font-semibold text-sand italic">Updates</em>.
              </h2>
            </div>
            <Link href="/blog" className="bg-navy-deeper border border-navy/30 text-white px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 hover:bg-crimson hover:border-crimson inline-flex items-center gap-3 self-start md:self-auto">
              All Updates
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-stretch">
            <a href="https://www.instagram.com/p/Dac7NwvoH72/?img_index=1" target='_blank' className="group relative min-h-[430px] overflow-hidden rounded-[2.5rem] bg-navy-deeper shadow-editorial border border-sand/30">
              <img
                src="/assets/Home/challenge.png"
                alt="Cambridge Kaleidoscope Challenge"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper via-navy-deeper/45 to-transparent" />
              <div className="absolute top-6 left-6 bg-white text-crimson w-20 h-20 rounded-3xl flex flex-col items-center justify-center shadow-xl">
                <strong className="block text-2xl font-playfair leading-none">6</strong>
                <span className="text-[10px] font-black tracking-widest uppercase mt-1">JUL</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                <div className="inline-flex items-center gap-2 text-white/80 text-[10px] font-black tracking-[0.25em] uppercase mb-4">
                  <CalendarDays size={15} strokeWidth={2.5} />
                  Campus Highlight
                </div>
                <h3 className="font-playfair text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                 Cambridge Kaleidoscope <em className="font-semibold text-sand">Challenge</em>
                </h3>
                <p className="text-white/75 text-sm md:text-base leading-relaxed font-light max-w-xl">
                Fostering Critical Thinking, Creativity &amp; Curiosity — students explored diverse perspectives through hands-on challenges, building confidence and collaborative problem-solving skills.
                </p>
              </div>
            </a>

            <div className="bg-off-white rounded-[2.5rem] border border-sand/40 p-5 md:p-7 flex flex-col justify-between">
              <div className="space-y-4">
                {[
                  { day: '16', month: 'MAY', title: 'IGCSE Results 2026', desc: 'Seedling International School students shine again with 100% in Cambridge.',url: 'https://www.instagram.com/p/DYkBE_6k6I4/?img_index=1' },
                  { day: '10', month: 'May', title: "Mother's Day Celebration", desc: "This Mother's Day, our little learners expressed their love through beautiful paper crafts, celebrating the warmth, care, and magic. ",url:"https://www.instagram.com/p/DYJGy3BgX65/" },
                  { day: '26', month: 'APR', title: 'Earth Day Celebration', desc: 'This Earth Day, Seedling International School turned learning into action! From planting saplings to spreading awareness',url:"https://www.instagram.com/p/DXaz2W8CcOI/" },
                ].map(({ day, month, title, desc, url }, index) => (
                  <a key={title} href={url} target="_blank" rel="noopener noreferrer" className="group flex gap-5 items-start bg-white rounded-[1.75rem] p-5 border border-sand/30 transition-all duration-500 hover:border-crimson/30 hover:shadow-editorial">
                    <div className={`${index === 0 ? 'bg-crimson text-white' : 'bg-navy-light text-navy'} w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 transition-transform group-hover:-translate-y-1`}>
                      <strong className="block text-xl font-playfair leading-none">{day}</strong>
                      <span className="text-[9px] font-black tracking-widest uppercase mt-1">{month}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-navy-deeper text-xl font-bold mb-2 font-playfair group-hover:text-crimson transition-colors">{title}</h4>
                        <ArrowUpRight size={17} strokeWidth={2.5} className="text-crimson flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-text-light text-sm leading-relaxed font-light">{desc}</p>
                    </div>
                  </a>
                ))}
              </div>

              <a href="https://www.instagram.com/seedlinginternational/" target="_blank" rel="noopener noreferrer" className="mt-7 flex items-center justify-between gap-4 rounded-[1.5rem] bg-navy-deeper text-white px-5 py-4 hover:bg-crimson transition-colors">
                <span className="inline-flex items-center gap-3 text-sm font-black tracking-widest uppercase">
                  <Camera size={18} strokeWidth={2.5} />
                  Follow Updates
                </span>
                <ArrowUpRight size={17} strokeWidth={2.5} />
              </a>
            </div>

            <div className="lg:col-span-2">
              <a href="https://www.instagram.com/cambridgeinternationalschooljaipur" target="_blank" rel="noopener noreferrer" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-2">
                {[
                  '/assets/Home/trending1.jpg',
                  '/assets/Home/trending2.jpg',
                  '/assets/Home/trending3.jpg',
                  '/assets/Home/trending4.jpg',
                  '/assets/Home/trending5.jpg',
                  '/assets/Home/trending6.jpg',
                ].map((src, i) => (
                  <div key={i} className="rounded-[1.5rem] overflow-hidden aspect-[4/5] border border-sand/30 hover:border-crimson/30 transition-all duration-500 group bg-off-white">
                    <img src={src} alt={`Seedling International School update ${i + 1}`} className="w-full h-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                ))}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADMISSION CTA ─── */}
      <section className="relative pt-16 pb-16 md:pb-24 px-4 overflow-hidden bg-navy-deeper">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="max-w-7xl mx-auto  relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className='px-2'>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-sand mb-6 block">Join the Family</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-tight mb-8">
                Enroll Your Child <em className="font-semibold text-sand italic">Today</em>.
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-12 font-light">
                Admissions for 2026–27 are now open. Experience the difference of a school that truly cares about every child's growth and happiness.
              </p>
              <div className="space-y-4">
                {[
                  'Early Bird Benefits for Registrations',
                  'Scholarships for Meritorious Students',
                  'Counselling Available Online & Offline',
                  'Flexible curriculum tailored to individual needs',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-white font-bold text-sm uppercase tracking-widest">
                    <span className="w-6 h-6 rounded-full bg-crimson flex items-center justify-center text-[10px]">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
              <h3 className="font-playfair text-3xl font-semibold text-navy-deeper mb-8 ">Building Joyful Classroom Connections</h3>
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
