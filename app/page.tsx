'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trophy, Users, Music, Medal, BookOpen, Award, Heart, Brain, ArrowUpRight, ArrowRight, CalendarDays, Camera, Pencil, Mail, Phone, ArrowDown, ChevronDown, ShieldCheck, Handshake, Compass, Lightbulb, Globe } from 'lucide-react';
import { submitEnquiryForm, validateEnquiryForm, type EnquiryFormData } from '@/lib/enquiry-form';
import HeroVideo from "@/components/ui/HeroVideo";
import { AnimatePresence, motion } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────
type TabKey = 'campus' | 'labs' | 'sports' | 'arts';

// ─── Request a Callback Form ─────────────────────────────────────────────────
function CallbackForm() {
  const [formData, setFormData] = useState({ school: '', parentName: '', candidateName: '', phone: '', className: '', gender: '', message: '' });
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
        <label htmlFor="f-school" className="block text-[11px] font-semibold uppercase tracking-wider text-ink-soft mb-1.5">Campus *</label>
        <select id="f-school" value={formData.school} onChange={handleChange('school')} className={`${fieldCls} appearance-none`}>
          <option value="">Select campus</option>
          <option value="SIA">Seedling International Academy (SIA) — Jawahar Nagar, Jaipur</option>
          <option value="SMIA">Seedling Modern International Academy (SMIA) — Durgapura, Jaipur</option>
        </select>
        {errors.school && <p className={errorCls}>{errors.school}</p>}
      </div>
      <div>
        <label htmlFor="f-parent" className="block text-[11px] font-semibold uppercase tracking-wider text-ink-soft mb-1.5">Parent&apos;s Name *</label>
        <input id="f-parent" type="text" placeholder="e.g. Rohit Sharma" value={formData.parentName} onChange={handleChange('parentName')} className={fieldCls} />
        {errors.parentName && <p className={errorCls}>{errors.parentName}</p>}
      </div>
      <div>
        <label htmlFor="f-student" className="block text-[11px] font-semibold uppercase tracking-wider text-ink-soft mb-1.5">Student&apos;s Name *</label>
        <input id="f-student" type="text" placeholder="e.g. Aarav Sharma" value={formData.candidateName} onChange={handleChange('candidateName')} className={fieldCls} />
        {errors.candidateName && <p className={errorCls}>{errors.candidateName}</p>}
      </div>
      <div>
        <label htmlFor="f-phone" className="block text-[11px] font-semibold uppercase tracking-wider text-ink-soft mb-1.5">Mobile Number *</label>
        <input id="f-phone" type="tel" placeholder="10-digit mobile" value={formData.phone}
          onChange={(e) => handleChange('phone')({ ...e, target: { ...e.target, value: e.target.value.replace(/\D/g, '').slice(0, 10) } } as React.ChangeEvent<HTMLInputElement>)}
          className={fieldCls} />
        {errors.phone && <p className={errorCls}>{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="f-grade" className="block text-[11px] font-semibold uppercase tracking-wider text-ink-soft mb-1.5">Grade Applying For *</label>
        <select id="f-grade" value={formData.className} onChange={handleChange('className')} className={`${fieldCls} appearance-none`}>
          <option value="">Select grade</option>
          <option>Nursery</option><option>LKG</option><option>UKG</option>
          <option>Grade 1</option><option>Grade 2</option><option>Grade 3</option>
          <option>Grade 4</option><option>Grade 5</option><option>Grade 6</option>
          <option>Grade 7</option><option>Grade 8</option><option>Grade 9</option>
          <option>Grade 10</option><option>Grade 11</option><option>Grade 12</option>
        </select>
        {errors.className && <p className={errorCls}>{errors.className}</p>}
      </div>
      <div>
        <label htmlFor="f-gender" className="block text-[11px] font-semibold uppercase tracking-wider text-ink-soft mb-1.5">Gender *</label>
        <select id="f-gender" value={formData.gender} onChange={handleChange('gender')} className={`${fieldCls} appearance-none`}>
          <option value="">Select gender</option>
          <option>Male</option><option>Female</option>
        </select>
        {errors.gender && <p className={errorCls}>{errors.gender}</p>}
      </div>
      <div>
        <label htmlFor="f-msg" className="block text-[11px] font-semibold uppercase tracking-wider text-ink-soft mb-1.5">Message (optional)</label>
        <textarea id="f-msg" rows={3} placeholder="Anything you would like us to know" value={formData.message} onChange={handleChange('message')} className="w-full rounded-xl border border-[#cfcfcf] bg-white px-4 py-3 font-playfair text-base text-text-base placeholder:text-[#8c8c8c] focus:outline-none focus:border-navy transition-colors resize-none" />
        {errors.message && <p className={errorCls}>{errors.message}</p>}
      </div>
      <button type="submit" disabled={submitting} className="w-full h-12 bg-claret hover:bg-claret/90 disabled:opacity-60 text-white rounded-[8px] font-playfair font-bold text-base uppercase tracking-wider transition-colors">
        {submitting ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}

// Campus Life gallery images (new set)
const campusGallery = [
  "/DSC_2180.JPG",
  "/DSC_2204.JPG",
  "/WhatsApp%20Image%202026-04-01%20at%2011.24.51.jpeg",
  "/IMG_5875.JPG",
  "/IMG_5854.JPG",
  "/WhatsApp%20Image%202026-08-01%20at%2009.35.12.jpeg",
  "/WhatsApp%20Image%202026-08-01%20at%2009.35.14%20%281%29.jpeg",
  "/WhatsApp%20Image%202026-08-01%20at%2009.39.55.jpeg",
  "/WhatsApp%20Image%202026-08-07%20at%2013.37.25%20%281%29.jpeg",
];

// ─── Main Page Component ─────────────────────────────────────────────────────
export default function CambridgeInternationalSchoolPage(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [navShadow, setNavShadow] = useState<string>('0 2px 20px rgba(23,81,144,0.10)');
  const [activeTab, setActiveTab] = useState<TabKey>('campus');

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

  // World-Class Facilities tab data
  const infraData: Record<TabKey, Array<{ img: string; alt: string; tag: string; title: string; desc: string }>> = {
    campus: [
      { img: '/P1676425.JPG', alt: 'Green Smart City Project', tag: 'Sustainability', title: 'Green Smart City Project', desc: 'Our students engineered a working model of a sustainable city — comparing air pollution in India and China with a green-smart-city solution powered by solar energy, electric vehicles, and clean urban design.' },
      { img: '/assets/Home/science-lab.jpg', alt: 'Science Lab', tag: 'Science Lab', title: 'Modern Science Labs', desc: 'Modern science labs with advanced tools encouraging innovation and practical learning for every student.' },
      { img: '/assets/STELLAR SATURDAYS/4.webp', alt: 'Library', tag: 'Library', title: 'Resource-Rich Library', desc: 'A vast collection of books, e-resources, and periodicals encouraging a love of reading and independent research.' },
    ],
    labs: [
      { img: '/assets/BOOT CAMP/2.webp', alt: 'Science Lab', tag: 'Science', title: 'Advanced Science Labs', desc: 'Physics, Chemistry, and Biology labs equipped with latest apparatus enabling hands-on experimental learning.' },
      { img: '/assets/ANNUAL FUNCTION/3.webp', alt: 'Computer Lab', tag: 'Technology', title: 'AI & Robotics Lab', desc: 'State-of-the-art computer and robotics lab introducing students to coding, AI tools, and future technologies.' },
      { img: '/assets/STELLAR SATURDAYS/4.webp', alt: 'Auditorium', tag: 'Facilities', title: 'Modern Auditorium', desc: 'A fully equipped auditorium for cultural events, seminars, and inter-school competitions.' },
    ],
    sports: [
      { img: '/assets/SPORTS DAY/1.webp', alt: 'Sports Ground', tag: 'Outdoor', title: 'Multi-Sport Ground', desc: 'Dedicated grounds for cricket, football, athletics, and kabaddi — built to national standards.' },
      { img: '/assets/STELLAR SATURDAYS/1.webp', alt: 'Swimming Pool', tag: 'Aquatics', title: 'Swimming Pool', desc: 'Swimming pool with qualified coaches for beginner and advanced swimmers from Grade 3 onwards.' },
      { img: '/assets/SPORTS%20DAY/basketball.JPG', alt: 'Basketball', tag: 'Outdoor', title: 'Basketball', desc: 'Well-maintained basketball courts for competitive play and physical development.' },
    ],
    arts: [
      { img: '/assets/ANNUAL FUNCTION/5.webp', alt: 'Music Room', tag: 'Music', title: 'Music & Dance Studio', desc: 'Fully equipped studios for classical and contemporary music, dance, and performing arts for all grades.' },
      { img: '/assets/BOOT CAMP/3.webp', alt: 'Art Studio', tag: 'Visual Arts', title: 'Art & Craft Studio', desc: 'Creative spaces where students explore painting, sculpture, pottery, and digital design under expert guidance.' },
      { img: '/assets/ANNUAL FUNCTION/4.webp', alt: 'Drama', tag: 'Theatre', title: 'Drama & Theatre Club', desc: 'Annual theatre productions, inter-school drama contests, and storytelling workshops for confident self-expression.' },
    ],
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

  // Cambridge Learner Attributes data — Cambridge Pathway brand colours, keyed to each stage
  const learnerAttributes = [
    {
      title: "Confident",
      desc: "Confident working with information and ideas — their own and those of others. Secure enough in their own knowledge to take intellectual risks, ask difficult questions, and communicate and defend their views clearly, whether in a classroom debate or in front of an audience.",
      Icon: ShieldCheck,
      color: "text-white",
      bg: "#7e25e0",
      bgTo: "#5a1aa3",
      accent: "#ffffff"
    },
    {
      title: "Responsible",
      desc: "Responsible for themselves, responsive to and respectful of others. Students learn to take genuine ownership of their learning and their actions, act with integrity even when no one is watching, and understand the ripple effect their choices have on their community and the wider world.",
      Icon: Handshake,
      color: "text-white",
      bg: "#5165ec",
      bgTo: "#3849b0",
      accent: "#ffffff"
    },
    {
      title: "Reflective",
      desc: "Reflective as learners, continually building their own ability to learn rather than simply absorbing content. Understanding themselves as students, focusing honestly on their own progress, and adopting active strategies that turn them into lifelong learners long after they leave a Seedling classroom.",
      Icon: Compass,
      color: "text-white",
      bg: "#028819",
      bgTo: "#015a0e",
      accent: "#ffffff"
    },
    {
      title: "Innovative",
      desc: "Innovative and equipped for challenges that don't have a textbook answer yet. Resourceful, creative, and genuinely capable of applying academic knowledge to solve real-world, unfamiliar problems — the kind of thinking that no amount of rote learning can substitute for.",
      Icon: Lightbulb,
      color: "text-white",
      bg: "#e04220",
      bgTo: "#a82e16",
      accent: "#ffffff"
    },
    {
      title: "Engaged",
      desc: "Engaged intellectually and socially, ready to make a difference in ways big and small. Driven by a real spirit of inquiry and curiosity, ready to pick up new skills without being told to, and ready to participate constructively in the communities they belong to, in school and well beyond it.",
      Icon: Globe,
      color: "text-white",
      bg: "#8c0e24",
      bgTo: "#5e0a18",
      accent: "#ffffff"
    }
  ];

  const cambridgePathwayStages = [
    {
      title: "Cambridge Early Years",
      age: "Age 3+",
      color: "from-[#8b26e6] to-[#6f22d8]",
      bg: "bg-[#f2e9ff]",
      border: "border-[#8b26e6]",
      points: ["A play-based programme", "A holistic curriculum", "Engaging resources", "Support to measure progress"],
      footer: "6 curriculum areas including Personal, social and emotional development",
    },
    {
      title: "Cambridge Primary",
      age: "Age 5+",
      color: "from-[#5f72f2] to-[#4458e5]",
      bg: "bg-[#edf0ff]",
      border: "border-[#5f72f2]",
      points: ["Clear, adaptable curriculum", "Flexible assessment options", "Support and resources", "Insight to understand potential"],
      footer: "10+ subjects including English, Mathematics and Science",
    },
    {
      title: "Cambridge Lower Secondary",
      age: "Age 11+",
      color: "from-[#06951d] to-[#007f17]",
      bg: "bg-[#e8f8ea]",
      border: "border-[#06951d]",
      points: ["Clear, adaptable curriculum", "Flexible assessment options", "Support and resources", "Insight to predict performance"],
      footer: "10+ subjects including English, Mathematics and Science",
    },
    {
      title: "Cambridge Upper Secondary",
      age: "Age 14+",
      color: "from-[#ee4a25] to-[#d63c1c]",
      bg: "bg-[#fff0ea]",
      border: "border-[#ee4a25]",
      points: ["Broad, adaptable curriculum", "Fair, valid, reliable assessment", "Support and resources", "Insight to optimise achievement"],
      footer: "Cambridge IGCSE: 70+ subjects. Cambridge O Level: 40+ subjects. Cambridge ICE.",
    },
    {
      title: "Cambridge Advanced",
      age: "Age 16+",
      color: "from-[#a20f27] to-[#7f0d21]",
      bg: "bg-[#fff0f3]",
      border: "border-[#a20f27]",
      points: ["In-depth, adaptable curriculum", "Fair, valid, reliable assessment", "Support and resources", "Insight to predict performance"],
      footer: "Cambridge International AS & A Level: 50+ subjects. Cambridge AICE, Cambridge IPQ.",
    },
  ];

  return (
    <main className="bg-off-white text-text-base overflow-x-hidden font-dm">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[480px] md:min-h-screen overflow-hidden px-4 pt-16 md:pt-28">
        {/* Background video — HLS-segmented so it starts on the first segment
            rather than waiting for the whole clip. See components/ui/HeroVideo. */}
        <div className="absolute inset-0 z-0">
          <HeroVideo className="w-full h-full object-cover" />
        </div>

        {/* Bottom fade — dark gradient anchored to the bottom of the hero so
            the headline stays readable regardless of the video frame. */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[60%] z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(8,12,24,0.92) 0%, rgba(8,12,24,0.70) 28%, rgba(8,12,24,0.30) 60%, transparent 100%)",
          }}
          aria-hidden="true"
        />

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

        {/* Hero Content — bottom-left headline. Premium display serif in
            warm ivory, title case across 2 lines. Only essential words
            capitalised so it reads as the editorial focal point without
            shouting. Fades in after the video has had a moment to
            establish. */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display absolute bottom-4 md:bottom-8 lg:bottom-12 left-6 md:left-14 lg:left-20 z-10 max-w-[88%] sm:max-w-2xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-[-0.01em]"
          style={{
            color: "#ffffff",
            textShadow:
              "0 2px 28px rgba(0,0,0,0.65), 0 10px 50px rgba(0,0,0,0.40), 0 1px 2px rgba(0,0,0,0.55)",
          }}
        >
          Where Curiosity<br />
          Meets Character.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-4 left-6 md:bottom-8 md:left-14 lg:bottom-10 lg:left-20 right-6 md:right-14 lg:right-20 z-10 text-sm sm:text-base md:text-lg leading-[1.7] font-light"
          style={{
            color: "rgba(255,255,255,0.85)",
            textShadow:
              "0 1px 12px rgba(0,0,0,0.55), 0 4px 24px rgba(0,0,0,0.30)",
          }}
        >
          
        </motion.p>
      </section>


      {/* ─── OUR CAMPUSES ─── */}
      <section className="bg-white pt-20 pb-24 relative overflow-hidden" id="campuses">
        {/* Accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-crimson to-navy" />
        {/* Subtle mesh decoration */}
        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex flex-col items-center gap-2 mb-5">
              <span className="block w-px h-10 bg-sand" />
              <span className="text-[0.7rem] font-semibold tracking-[0.4em] uppercase text-camb-us">Our Campuses</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-6xl font-light text-ink leading-tight mb-6">
              Two campuses, <em className="font-semibold text-crimson">one vision</em>
            </h2>
            <p className="text-sm md:text-base text-text-light leading-relaxed font-light max-w-2xl mx-auto">
              Two distinct schools, united by the same Cambridge board. Seedling International Academy (SIA) in Jawahar Nagar and Seedling Modern International Academy (SMIA) in Durgapura each carry their own character, their own community, and their own campus culture — one grown over three decades in Jaipur's oldest Cambridge neighbourhood, the other built fresh for families in the heart of the city.
            </p>
          </div>

          {/* Campus cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                name: "Seedling International Academy",
                subtitle: "SIA · Jawahar Nagar",
                images: [
                  "/assets/Home/SIA_collage_v3.webp"
                ],
                tag: "SIA",
              },
              {
                name: "Seedling Modern International Academy",
                subtitle: "SMIA · Durgapura",
                images: [
                  "/assets/Home/SMIA_collage_v3.webp"
                ],
                tag: "SMIA",
              },
            ].map((campus, i) => {
              const campusBgs = ["bg-blue-100", "bg-red-100"];
              const campusBorders = ["border-blue-200", "border-red-200"];
              const campusHref = campus.tag === "SIA" ? "/campuses#sia" : "/campuses#smia";
              return (
              <Link key={campus.name} href={campusHref} className="block">
                <motion.div
                  className={`group relative overflow-hidden rounded-[8px] border ${campusBorders[i]} shadow-2xl shadow-black/5 ${campusBgs[i]} backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                >
                {/* Collage of Images / Single Image */}
                <div className="relative h-80 sm:h-96 md:h-[28rem] overflow-hidden bg-[#fafafa]">
                  {campus.images.length === 1 ? (
                    <img
                      src={campus.images[0]}
                      alt={campus.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid grid-cols-2 grid-rows-2 gap-1 w-full h-full p-1 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                      {campus.images.map((imgSrc, idx) => (
                        <div key={idx} className="relative overflow-hidden w-full h-full bg-[#eee]">
                          <img
                            src={imgSrc}
                            alt={`${campus.name} student collage ${idx + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-[#133844]/35 to-transparent pointer-events-none" />

                  {/* Tag */}
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-full z-10">
                    <span className="size-1.5 rounded-full bg-sand" />
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white">
                      {campus.tag}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 pointer-events-none">
                    <h3 className="font-playfair text-2xl md:text-3xl font-semibold leading-tight mb-2 text-white drop-shadow-lg">
                      {campus.name}
                    </h3>
                    <p className="text-white/90 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase drop-shadow-md">
                      {campus.subtitle}
                    </p>
                  </div>
                </div>
                </motion.div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY CAMBRIDGE INTERNATIONAL SCHOOL — light editorial panel ─── */}
      <section className="relative bg-mint py-20 md:py-28 overflow-hidden border-y border-hairline">
        {/* faint teal radial so the panel doesn't read flat */}
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(70%_55%_at_15%_0%,rgba(0,189,182,0.10),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <span className="text-[13px] font-semibold tracking-[0.4em] uppercase text-crimson mb-5 block">Why Choose Us</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink leading-tight mb-4">
                Why <em className="font-semibold text-crimson">Cambridge</em>?
              </h2>
              <p className="text-sm md:text-base text-ink-soft font-light leading-relaxed max-w-md mb-12">
                One curriculum, recognised by universities and employers in every corner of the world — taught the Seedling way.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
                {[
                  { title: 'Personalized Journeys', desc: "No two learners are alike, and we don't pretend they are. Every child's pace, interests, learning style and strengths shape how we teach them — not the other way round." },
                  { title: 'Future-Ready Skills', desc: "AI literacy, critical thinking and structured problem-solving are woven into everyday learning from an early age, not bolted on as an occasional workshop." },
                  { title: 'Global Mindset', desc: "An internationally benchmarked curriculum taught with Indian values firmly at its core — students who can discuss world affairs." },
                  { title: 'University Counseling', desc: "Dedicated guidance that starts well before Class 12 and stays with every student through shortlisting, applications, personal statements and interview preparation for universities across India." },
                ].map(({ title, desc }) => (
                  <div key={title} className="group border-t-2 border-ink/10 pt-5 transition-colors duration-300 hover:border-crimson/70">
                    <h4 className="text-[15px] font-bold text-ink mb-2 uppercase tracking-wide font-dm flex items-center gap-2.5">
                      <ArrowRight className="h-3.5 w-3.5 text-crimson transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
                      {title}
                    </h4>
                    <p className="text-xs text-ink-soft leading-relaxed font-light">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* offset navy frame gives the photo weight without a dark ground */}
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[8px] border-2 border-navy/15 pointer-events-none" />
              <div className="rounded-[8px] overflow-hidden h-[440px] md:h-[520px] relative shadow-xl shadow-navy/10">
                <img src="/assets/ANNUAL FUNCTION/2.webp" alt="Students Learning" className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#133844]/35 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -left-4 bg-white border-l-4 border-crimson rounded-[8px] px-7 py-6 z-10 shadow-lg">
                <strong className="block text-5xl font-playfair text-crimson mb-1 leading-none">33+</strong>
                <span className="text-[10px] font-bold tracking-widest uppercase text-ink-soft block mt-1 leading-tight">33+ Years of Academic<br /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cambridge Pathway */}
      <section className="bg-stone pt-16 md:pt-24 pb-6 md:pb-16 relative overflow-hidden border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="rounded-[4px] border border-hairline bg-ivory p-5 md:p-8"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-center">
              <span className="hidden h-px w-28 bg-hairline lg:block" />
              <div className="flex items-center gap-4">
                <div className="text-left font-playfair text-3xl font-semibold leading-none text-ink md:text-4xl">
                  Cambridge<br />
                  <span className="text-crimson">Pathway</span>
                </div>
                <motion.div
                  className="h-16 w-16"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 72 72" className="h-full w-full" aria-hidden="true">
                    <path d="M15 8L58 36L15 64L26 36L15 8Z" fill="none" stroke="#036268" strokeWidth="5" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>
              <p className="max-w-xl text-base font-medium text-ink-soft md:text-lg">
                A clear path for educational success from age 3 to 19
              </p>
              <span className="hidden h-px w-28 bg-hairline lg:block" />
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5 items-stretch">
              {cambridgePathwayStages.map((stage, index) => (
                <motion.article
                  key={stage.title}
                  className={`group flex flex-col overflow-hidden rounded-2xl border-2 ${stage.border} ${stage.bg} shadow-lg shadow-black/5`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.015 }}
                >
                  <div className={`relative min-h-[88px] bg-gradient-to-br ${stage.color} px-5 py-4 text-white`}>
                    <div className="absolute right-0 top-0 h-full w-11 bg-white/20 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,35%_50%)]" />
                    <h3 className="relative z-10 font-playfair text-base font-black leading-tight text-white pr-10">
                      {stage.title}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="flex-1 px-5 py-5">
                      <p className="mb-3 text-[13px] font-black uppercase tracking-wider text-[#133844]">{stage.age}</p>
                      <ul className="space-y-2.5 text-[13px] leading-snug">
                        {stage.points.map((point) => (
                          <li key={point} className="flex gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy" />
                            <span className="text-text-base">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-black/10 bg-white/50 px-5 py-4 text-[13px] font-bold leading-relaxed text-[#133844]">
                      {stage.footer}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="mt-5 rounded-xl bg-[#133844] px-5 py-4 text-center font-playfair text-base font-black text-white shadow-lg md:text-lg"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Cambridge Professional Development for teachers and school leaders
            </motion.div>

            <div className="mt-7 flex items-center justify-center gap-4 text-center">
              <span className="h-px w-24 bg-royal-blue/20 md:w-44" />
              <div className="flex items-center gap-3">
                <span className="font-playfair text-2xl font-semibold leading-none text-[#133844] md:text-3xl whitespace-nowrap">
                  Ready for<br className="hidden md:inline" /> the world
                </span>
                <motion.svg
                  viewBox="0 0 48 56"
                  className="h-14 w-12"
                  aria-hidden="true"
                  animate={{ rotate: [0, -4, 4, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M6 4H42V36L24 50L6 36V4Z" fill="none" stroke="#00bdb6" strokeWidth="4" />
                </motion.svg>
              </div>
              <span className="h-px w-24 bg-royal-blue/20 md:w-44" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CAMBRIDGE WORLDWIDE / GLOBAL REACH ─── */}
      <section className="bg-white w-full border-b border-hairline" id="global-reach">
        <div className="mx-auto max-w-7xl px-6 py-6 md:py-10">
          <motion.img
            src="/assets/Home/cambridge-worldwide-map.png"
            alt="Cambridge Worldwide — empowering learners and schools to shape a better world. 10,000+ schools, 160+ countries, 40+ governments."
            className="w-full h-auto block rounded-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            loading="lazy"
          />
        </div>
      </section>


      {/* ─── CAMBRIDGE LEARNER ATTRIBUTES ─── */}
      <section className="relative py-16 md:py-24 overflow-hidden" id="learner-attributes">
        {/* Layer 1: Cambridge UK building photo background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/assets/Home/cambridge_uk_building.jpg')",
            filter: "saturate(0.80) brightness(0.95)",
          }}
        />
        {/* Layer 2: Mint wash overlay for legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(215,253,245,0.88) 0%, rgba(215,253,245,0.82) 50%, rgba(215,253,245,0.88) 100%)",
          }}
        />
        {/* Layer 3: Soft corner accents */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 0% 0%, rgba(13,92,83,0.10), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(162,15,39,0.06), transparent 55%)",
          }}
        />
        {/* Layer 4: Film grain (multiply blend) */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='9' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.18 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
        {/* Layer 5: Top hairline */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent 0%, #0d5c53 50%, transparent 100%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span
                className="h-px w-6"
                style={{ background: "linear-gradient(90deg, transparent, #0d5c53)" }}
              />
              <span className="text-[13px] font-semibold tracking-[0.4em] uppercase text-[#025055]">
                Cambridge board
              </span>
              <span
                className="h-px w-6"
                style={{ background: "linear-gradient(90deg, #0d5c53, transparent)" }}
              />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink leading-tight">
              Cambridge{" "}
              <em
                className="font-semibold not-italic"
                style={{ color: "#025055" }}
              >
                Learner Attributes
              </em>
            </h2>
            <p className="text-sm md:text-base text-[#3a4a4a] font-light leading-relaxed mt-4">
              Our curriculum is designed to help students develop these five core qualities,
              preparing them to be successful in an ever-changing world.
            </p>
          </motion.div>

          {/* Row 1: 3 cards in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {learnerAttributes.slice(0, 3).map((attr, idx) => (
              <motion.div
                key={attr.title}
                className="group relative overflow-hidden rounded-2xl border border-white/15 p-8 min-h-[300px] flex flex-col gap-5"
                style={{
                  background: `linear-gradient(160deg, ${attr.bg} 0%, ${attr.bgTo} 100%)`,
                  boxShadow:
                    "0 24px 50px -16px rgba(0,0,0,0.55), 0 6px 14px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 32px 70px -14px ${attr.bgTo}, 0 14px 30px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)`,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
                  }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/95 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-[4deg]"
                  style={{
                    boxShadow: "0 6px 18px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                >
                  <attr.Icon
                    className="w-5 h-5"
                    style={{ color: attr.bg }}
                    strokeWidth={1.85}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className={`font-playfair text-2xl font-semibold mb-3 leading-tight tracking-tight ${attr.color}`}>
                    {attr.title}
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {attr.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 2 cards in a centered flex container */}
          <div className="flex flex-wrap justify-center gap-6">
            {learnerAttributes.slice(3).map((attr, idx) => (
              <motion.div
                key={attr.title}
                className="group relative overflow-hidden rounded-2xl border border-white/15 p-8 min-h-[300px] flex flex-col gap-5 basis-full md:basis-[calc((100%-48px)/3)]"
                style={{
                  background: `linear-gradient(160deg, ${attr.bg} 0%, ${attr.bgTo} 100%)`,
                  boxShadow:
                    "0 24px 50px -16px rgba(0,0,0,0.55), 0 6px 14px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 32px 70px -14px ${attr.bgTo}, 0 14px 30px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)`,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: (idx + 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
                  }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/95 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-[4deg]"
                  style={{
                    boxShadow: "0 6px 18px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                >
                  <attr.Icon
                    className="w-5 h-5"
                    style={{ color: attr.bg }}
                    strokeWidth={1.85}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className={`font-playfair text-2xl font-semibold mb-3 leading-tight tracking-tight ${attr.color}`}>
                    {attr.title}
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {attr.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY VOICES ─── */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden" id="testimonials">
        {/* Subtle architectural background — Cambridge building sketch */}
        <div
          className="absolute inset-0 opacity-[0.18] bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/assets/Home/cambridge-sketch.jpeg')" }}
        />

        {/* Right-side floating action buttons */}
        <motion.div
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            { icon: Pencil, label: "Write a review", href: "#" },
            { icon: CalendarDays, label: "Book a visit", href: "/admissions" },
            { icon: Mail, label: "Email us", href: "mailto:seedlingacademy@hotmail.com" },
            { icon: Phone, label: "Call us", href: "tel:+917413012351" },
          ].map(({ icon: Icon, label, href }, idx) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="size-11 rounded-full bg-crimson text-white flex items-center justify-center shadow-xl shadow-crimson/30 hover:bg-crimson-dark transition-colors"
            >
              <Icon className="size-4" strokeWidth={2.2} />
            </motion.a>
          ))}
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.h2
            className="text-center font-playfair text-3xl sm:text-4xl md:text-5xl font-light text-[#133844] leading-[1.5] mb-10 md:mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Voices from our <em className="font-semibold text-crimson">Community</em>.
          </motion.h2>

          {/* Category cards with testimony */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                label: "STUDENT",
                img: "/0N9A9674.JPG",
                quote: "I came to Seedling in Grade 9 and immediately felt at home. Today I'm an A-Level topper and a published debater. This place changed my life.",
                name: "Isha Rathore",
                role: "Student — Grade 12",
                bg: "bg-purple-700",
                border: "border-purple-700",
                accentText: "text-white",
                shadow: "shadow-2xl shadow-purple-700/60",
              },
              {
                label: "PARENT",
                img: "/assets/testimonial/Vatan Parnami and Anku Sapra.png",
                quote: "Seedling International School has been a second home for our child. The warmth, care, and attention given to every student is remarkable. We are grateful for the strong foundation SPS provides.",
                name: "Vatan Parnami & Anku Sapra",
                role: "Parents",
                bg: "bg-blue-700",
                border: "border-blue-700",
                accentText: "text-white",
                shadow: "shadow-2xl shadow-blue-700/60",
              },
              {
                label: "FACULTY",
                img: "/0N9A9612.JPG",
                quote: "As an educator myself, I'm amazed by Seedling's teaching standards. The faculty genuinely cares, and the leadership is always open to dialogue and growth.",
                name: "Dr. Neha Kapoor",
                role: "Educator & Parent",
                bg: "bg-green-700",
                border: "border-green-700",
                accentText: "text-white",
                shadow: "shadow-2xl shadow-green-700/60",
              },
            ].map((card, i) => {
              return (
              <>
              {card.label === "FACULTY" ? (
                <Link href="/faculty-testimonials" className="block">
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className={`group ${card.bg} border-2 ${card.border} rounded-3xl ${card.shadow} hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer h-full`}
                >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden border-b-2 border-dashed border-white/30 m-3 mb-0">
                  <img
                    src={card.img}
                    alt={card.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="px-6 sm:px-8 py-8 sm:py-10 text-center">
                  <h3 className={`font-playfair text-xl sm:text-2xl tracking-[0.15em] ${card.accentText} font-light mb-2`}>
                    {card.label}
                  </h3>
                  <span className="block w-12 h-px bg-white/50 mx-auto mb-5" />

                  <blockquote className="text-white text-sm sm:text-[15px] leading-relaxed font-light mb-6">
                    &ldquo;{card.quote}&rdquo;
                  </blockquote>

                  <div className="pt-5 border-t border-white/30 inline-flex flex-col items-center min-w-[180px]">
                    <p className="font-playfair text-base font-semibold text-white leading-tight">
                      {card.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/75 font-semibold mt-1">
                      {card.role}
                    </p>
                    {card.label === "FACULTY" && (
                      <span className="mt-3 text-[10px] uppercase tracking-[0.18em] text-white font-semibold underline underline-offset-4">
                        Read full testimonial →
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
                </Link>
              ) : (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`group ${card.bg} border-2 ${card.border} rounded-3xl ${card.shadow} hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden`}
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden border-b-2 border-dashed border-white/30 m-3 mb-0">
                  <img
                    src={card.img}
                    alt={card.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="px-6 sm:px-8 py-8 sm:py-10 text-center">
                  <h3 className={`font-playfair text-xl sm:text-2xl tracking-[0.15em] ${card.accentText} font-light mb-2`}>
                    {card.label}
                  </h3>
                  <span className="block w-12 h-px bg-white/50 mx-auto mb-5" />
                  <blockquote className="text-white text-sm sm:text-[15px] leading-relaxed font-light mb-6">
                    &ldquo;{card.quote}&rdquo;
                  </blockquote>

                  <div className="pt-5 border-t border-white/30 inline-flex flex-col items-center min-w-[180px]">
                    <p className="font-playfair text-base font-semibold text-white leading-tight">
                      {card.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/75 font-semibold mt-1">
                      {card.role}
                    </p>
                  </div>
                </div>
              </motion.div>
              )}
              </>
            );
          })}
          </div>
        </div>
      </section>

      {/* ─── STUDENT GALLERY / CAMPUS LIFE ─── */}
      <section className="bg-stone py-16 md:py-24 relative overflow-hidden border-t border-hairline">
        {/* Subtle mesh decoration to match other sections */}
        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[0.7rem] font-semibold tracking-[0.4em] uppercase text-camb-us mb-4 block">Campus Life</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink leading-tight">
                Vibrant <em className="font-semibold text-crimson">Memories</em>.
              </h2>
            </div>
            {/* <a href="/news-and-events" className="bg-[#133844] hover:bg-navy-dark text-white px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 shadow-xl hover:shadow-[#133844]/40">View Gallery</a> */}
          </div>
          {/* Gallery Grid - Mobile: 2-col boxes | Desktop: asymmetric layout */}
          <div className="hidden md:block space-y-4">
            {/* Row 1 - Left big, Right stacked */}
            <div className="grid grid-cols-3 gap-4 h-[280px]">
              <div className="col-span-2 row-span-2 group relative rounded-[8px] overflow-hidden">
                <img src={campusGallery[0]} alt="Campus Life" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="group relative rounded-[8px] overflow-hidden">
                <img src={campusGallery[1]} alt="Campus Life" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="group relative rounded-[8px] overflow-hidden">
                <img src={campusGallery[2]} alt="Campus Life" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </div>

            {/* Row 2 - Wide left, 1 image right */}
            <div className="grid grid-cols-3 gap-4 h-[280px]">
              <div className="col-span-2 group relative rounded-[8px] overflow-hidden">
                <img src={campusGallery[3]} alt="Campus Life" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="col-span-1 row-span-2 group relative rounded-[8px] overflow-hidden">
                <img src={campusGallery[4]} alt="Campus Life" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </div>

            {/* Row 3 - three across */}
            <div className="grid grid-cols-3 gap-4 h-[280px]">
              <div className="group relative rounded-[8px] overflow-hidden">
                <img src={campusGallery[5]} alt="Campus Life" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="group relative rounded-[8px] overflow-hidden">
                <img src={campusGallery[6]} alt="Campus Life" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="group relative rounded-[8px] overflow-hidden">
                <img src={campusGallery[7]} alt="Campus Life" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Mobile Gallery - Clean 2-column grid */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {campusGallery.slice(0, 8).map((img, i) => (
              <div key={i} className="group relative rounded-[8px] overflow-hidden aspect-square">
                <img src={img} alt="Campus Life" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>


{/* ─── TRENDING UPDATES + INSTAGRAM (temporarily commented out) ─── */}
      {false && (
      <section className="bg-white pt-16 pb-12 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-64 bg-off-white" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">Latest at Cambridge</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink leading-tight">
                Trending <em className="font-semibold text-navy">Updates</em>.
              </h2>
            </div>
            <Link href="/blog" className="bg-[#133844] border border-navy/30 text-white px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 hover:bg-crimson hover:border-crimson inline-flex items-center gap-3 self-start md:self-auto">
              All Updates
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-stretch">
            <a href="https://www.instagram.com/p/Dac7NwvoH72/?img_index=1" target='_blank' className="group relative min-h-[430px] overflow-hidden rounded-[8px] bg-[#133844] shadow-editorial border border-sand/30">
              <img
                src="/assets/Home/challenge.png"
                alt="Cambridge Kaleidoscope Challenge"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#133844] via-[#133844]/45 to-transparent" />
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

            <div className="bg-red-100 rounded-[2.5rem] border border-red-200 p-5 md:p-7 flex flex-col justify-between">
              <div className="space-y-4">
                {[
                  { day: '16', month: 'MAY', title: 'IGCSE Results 2026', desc: 'Cambridge students shine again with 100%.',url: 'https://www.instagram.com/p/DYkBE_6k6I4/?img_index=1' },
                  { day: '10', month: 'May', title: "Mother's Day Celebration", desc: "This Mother's Day, our little learners expressed their love through beautiful paper crafts, celebrating the warmth, care, and magic. ",url:"https://www.instagram.com/p/DYJGy3BgX65/" },
                  { day: '26', month: 'APR', title: 'Earth Day Celebration', desc: 'This Earth Day, Seedling International School turned learning into action! From planting saplings to spreading awareness',url:"https://www.instagram.com/p/DXaz2W8CcOI/" },
                ].map(({ day, month, title, desc, url }, index) => (
                  <a key={title} href={url} target="_blank" rel="noopener noreferrer" className="group flex gap-5 items-start bg-blue-100 rounded-[1.75rem] p-5 border border-blue-200 transition-all duration-500 hover:border-crimson/30 hover:shadow-editorial">
                    <div className={`${index === 0 ? 'bg-crimson text-white' : 'bg-navy-light text-navy'} w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 transition-transform group-hover:-translate-y-1`}>
                      <strong className="block text-xl font-playfair leading-none">{day}</strong>
                      <span className="text-[9px] font-black tracking-widest uppercase mt-1">{month}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="text-ink text-xl font-bold mb-2 font-playfair group-hover:text-crimson transition-colors">{title}</h4>
                        <ArrowUpRight size={17} strokeWidth={2.5} className="text-crimson flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-text-light text-sm leading-relaxed font-light">{desc}</p>
                    </div>
                  </a>
                ))}
              </div>

              <a href="https://www.instagram.com/seedlinginternational/" target="_blank" rel="noopener noreferrer" className="mt-7 flex items-center justify-between gap-4 rounded-[1.5rem] bg-[#133844] text-white px-5 py-4 hover:bg-crimson transition-colors">
                <span className="inline-flex items-center gap-3 text-sm font-black tracking-widest uppercase">
                  <Camera size={18} strokeWidth={2.5} />
                  Follow Updates
                </span>
                <ArrowUpRight size={17} strokeWidth={2.5} />
              </a>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mt-2">
                {[
                  { src: '/assets/Home/TU1.png', url: 'https://www.instagram.com/p/Dac7NwvoH72/?img_index=6' },
                  { src: '/assets/Home/TU2.png', url: 'https://www.instagram.com/p/Dac7NwvoH72/?img_index=2' },
                  { src: '/assets/Home/TU3.png', url: 'https://www.instagram.com/p/Dac7NwvoH72/?img_index=3' },
                  { src: '/assets/Home/TU4.png', url: 'https://www.instagram.com/p/Dac7NwvoH72/?img_index=4' },
                  { src: '/assets/Home/TU5.png', url: 'https://www.instagram.com/p/Dac7NwvoH72/?img_index=5' },
                ].map(({ src, url }, i) => (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="block rounded-[8px] overflow-hidden aspect-[4/5] border border-sand/30 hover:border-crimson/30 transition-all duration-500 group bg-off-white">
                    <img src={src} alt={`Seedling International School update ${i + 1}`} className="w-full h-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
      {/* ─── WORLD-CLASS FACILITIES — restored, light system ─── */}
      <section className="bg-white pt-16 pb-20 md:pt-24 md:pb-24 relative overflow-hidden border-t border-hairline" id="campus">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">
            <div className="max-w-3xl">
              <span className="text-[0.7rem] font-semibold tracking-[0.4em] uppercase text-crimson mb-4 block">Infrastructure</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink leading-tight">
                World-Class <em className="font-semibold text-crimson">Facilities</em>
              </h2>
            </div>

            {/* Tab Bar */}
            <div className="flex flex-nowrap gap-1.5 overflow-x-auto rounded-[8px] bg-stone p-1.5 border border-hairline">
              {(['campus', 'sports', 'arts'] as TabKey[]).map((key) => (
                <button
                  key={key}
                  className={`relative min-w-28 rounded-[6px] px-5 py-3 text-xs font-bold tracking-widest uppercase cursor-pointer transition-colors ${activeTab === key ? 'text-white' : 'text-ink-soft hover:text-ink'}`}
                  onClick={() => setActiveTab(key)}
                >
                  {activeTab === key && (
                    <motion.span
                      layoutId="facility-active-tab"
                      className="absolute inset-0 rounded-[6px] bg-[#133844]"
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="group relative min-h-[430px] md:min-h-[540px] rounded-[8px] overflow-hidden shadow-xl shadow-navy/10">
                <img
                  src={infraData[activeTab][0].img}
                  alt={infraData[activeTab][0].alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#133844]/90 via-[#133844]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 text-white">
                  <span className="inline-block bg-white/15 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border border-white/25 backdrop-blur-md">
                    {infraData[activeTab][0].tag}
                  </span>
                  <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-white mb-3 leading-tight">
                    {infraData[activeTab][0].title}
                  </h3>
                  <p className="max-w-xl text-sm md:text-base leading-relaxed text-white/80 font-light">
                    {infraData[activeTab][0].desc}
                  </p>
                </div>
              </article>

              <div className="grid gap-6">
                {infraData[activeTab].slice(1).map(({ img, alt, tag, title, desc }, idx) => {
                  const infraPalette = [
                    { bg: "bg-purple-700", border: "border-purple-700", accent: "text-white", shadow: "shadow-2xl shadow-purple-700/60" },
                    { bg: "bg-blue-700", border: "border-blue-700", accent: "text-white", shadow: "shadow-2xl shadow-blue-700/60" },
                    { bg: "bg-orange-700", border: "border-orange-700", accent: "text-white", shadow: "shadow-2xl shadow-orange-700/60" },
                  ];
                  const c = infraPalette[idx % infraPalette.length];
                  return (
                  <article
                    key={title}
                    className={`group grid sm:grid-cols-[180px_1fr] ${c.bg} rounded-3xl overflow-hidden border-2 ${c.border} ${c.shadow} hover:shadow-lg hover:-translate-y-1 transition-all duration-500`}
                  >
                    <div className="h-52 sm:h-full min-h-[200px] overflow-hidden">
                      <img src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <span className="inline-block w-fit text-white text-[10px] font-bold tracking-widest uppercase mb-3 border-b border-white/30 pb-1">
                        {tag}
                      </span>
                      <h3 className="font-playfair text-xl font-semibold text-white mb-2 leading-tight">{title}</h3>
                      <p className="text-[13px] text-white/85 leading-relaxed font-light">{desc}</p>
                    </div>
                  </article>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── ADMISSION CTA ─── */}
      <section className="relative pt-16 pb-16 md:pb-24 px-4 overflow-hidden bg-white">
        <div className="absolute inset-0 mesh-gradient opacity-[0.04]" />
        <div className="max-w-7xl mx-auto  relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className='px-2'>
              <span className="text-[0.7rem] font-semibold tracking-[0.4em] uppercase text-camb-us mb-6 block">Join the Family</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink leading-tight mb-8">
                Enroll Your Child <em className="font-semibold text-crimson">Today</em>.
              </h2>
              <p className="text-xl text-text-light leading-relaxed mb-12 font-light">
                Admissions for 2026–27 are now open. Experience the difference of a school that truly cares about every child's growth and happiness.
              </p>
              <div className="space-y-4">
                {[
                  'Early Bird Benefits for Registrations',
                  'Scholarships for Meritorious Students',
                  'Counselling Available Online & Offline',
                  'Flexible curriculum tailored to individual needs',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-[#133844] font-bold text-sm uppercase tracking-widest">
                    <span className="w-6 h-6 rounded-full bg-camb-us text-white flex items-center justify-center text-[10px]">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-blue-100 border border-blue-200 p-10 md:p-12 rounded-[8px] relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
              <h3 className="font-playfair text-3xl font-semibold text-ink mb-8">Admission Enquiry 2026–27</h3>
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
