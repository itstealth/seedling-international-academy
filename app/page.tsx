'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Trophy, Users, Music, Medal, BookOpen, Award, Heart, Brain, ArrowUpRight, CalendarDays, Camera } from 'lucide-react';
import { submitEnquiryForm, validateEnquiryForm, type EnquiryFormData } from '@/lib/enquiry-form';

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
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Track desktop view
  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Auto-scroll testimonials (single on mobile, group on desktop)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isDesktop) {
        setCurrentTestimonial((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 3));
      } else {
        setCurrentTestimonial((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDesktop]);

  const testimonials = [
    
    { avatar: '/assets/testimonial/deepak-gupta.jpg', name: 'Deepak Gupta<br />& Renu Gupta', role: 'Parents · Jaipur', text: 'We are truly grateful for the support and leadership shown during our children\'s sports day. Your dedication made the event special.' },
    { avatar: '/assets/testimonial/Soniya-Yadav.jpg', name: 'Narendra Kumar Sharma<br />& Soniya Yadav', role: 'Parents · Vaishali Nagar', text: 'The school provides holistic education, nurturing academic growth, creativity, and confidence. Teachers go beyond teaching and create a motivating environment for children.' },
    { avatar: '/assets/testimonial/Bhanupriya-Singh.jpg', name: 'Bhanupriya<br />Singh', role: 'Parent · MI Road', text: 'The academic programme is well planned and balanced with co-curricular activities. Teachers and management are doing a great job in grooming children.' },
    { avatar: '/assets/testimonial/Anita-Gupta.jpg', name: 'Mrs. Anita<br />Gupta', role: 'Parent · Raja Park', text: 'The curriculum and teaching methods are impressive. Worksheets and activities help children think beyond textbooks.' },
    { avatar: '/assets/testimonial/ibha-chadra.jpg', name: 'Ibha<br />Chhabra', role: 'Parent · Jhotwara', text: 'We are grateful for the care, dedication, and guidance provided by the teachers and school management.' },
    { avatar: '/assets/testimonial/aditi-sharma.jpg', name: 'Aditi<br />Sharma', role: 'Parent · Vaishali Nagar', text: "Aligned with NEP, the school provides modern and relevant education, giving us confidence in our child's future." },
    { avatar: '/assets/testimonial/Sweta-Shrivastava.jpg', name: 'Sweta<br />Shrivastava', role: 'Parent · MI Road', text: 'Technology integration makes learning interactive and helps children build essential digital skills for the future.' },
    { avatar: '/assets/testimonial/Muskan-Rupani.jpg', name: 'Muskan<br />Rupani', role: 'Parent · Jaipur', text: 'The school sets high standards in education with skilled teachers ensuring overall personality development.' },
  ];

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
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/Home/building-from-top.jpg"
            className="w-full h-full object-cover"
            alt="Seedling International School"
          />
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
            Beyond education.
            <br />
            Into transformation.
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

      {/* ─── ABOUT SCHOOL ─── */}
      <section className="bg-off-white py-8 md:pt-16 md:pb-8" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">About Seedling International Academy</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper leading-tight mb-8">
                Nurturing <em className="font-semibold text-navy italic">Excellence</em> Since 1993.
              </h2>
              <p className="text-lg text-text-light leading-relaxed mb-10 font-light">
                Welcome to Seedling International Academy, your gateway to a holistic education under the esteemed Cambridge IGCSE Board. At Seedling, we believe in nurturing young minds to become confident, compassionate, and globally aware individuals.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6 md:mb-12">
                {[
                  { icon: BookOpen, title: 'Cambridge Curriculum', desc: 'Comprehensive, future-aligned syllabus.' },
                  { icon: Award, title: 'Award-Winning', desc: "Rajasthan's top Cambridge academic outcomes." },
                  { icon: Heart, title: 'Holistic Growth', desc: 'Arts and life skills integrated daily.' },
                  { icon: Brain, title: 'University Counseling', desc: 'Dedicated guidance for global higher-education pathways.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 items-start p-6 bg-white rounded-3xl shadow-sm border border-sand/30 hover:border-navy/20 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-navy-light text-navy flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-navy-deeper mb-1 uppercase tracking-tight">{title}</h4>
                      <p className="text-xs text-text-light leading-relaxed font-light">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap mb-5 md:mb-0">
                <a href="/about" className="bg-navy-deeper hover:bg-navy-dark text-white px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 shadow-xl hover:shadow-navy-deeper/40">Our Story</a>
              {/* <a href="#admission" className="border-2 border-navy-deeper text-navy-deeper px-8 py-3.5 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 hover:bg-navy-deeper hover:text-white">Book a Tour</a> */}
              </div>
            </div>

            {/* Images */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 h-[400px]">
                <div className="row-span-2 overflow-hidden rounded-[2.5rem] shadow-editorial border-4 border-white">
                  <img src="/assets/Home/MainCampus.webp" alt="School Building" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                </div>
                <div className="overflow-hidden rounded-[2rem] shadow-editorial border-4 border-white">
                  <img src="/assets/Home/junior.webp" alt="Classroom" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                </div>
                <div className="overflow-hidden rounded-[2rem] shadow-editorial border-4 border-white relative">
                  <img src="/assets/WHISPERS OF WELLNESS/2.webp" alt="Students" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-crimson text-white md:px-8 md:py-5 px-4 py-3 rounded-2xl shadow-2xl z-10">
                <span className="block text-xl md:text-3xl font-semibold font-playfair leading-none mb-1">Cambridge</span>
                <span className="text-[10px] font-black tracking-widest uppercase opacity-70">Affiliated School</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFRASTRUCTURE / CAMPUS TABS ─── */}
      <section className="bg-white pt-12 pb-8" id="campus">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">Infrastructure</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper leading-tight">
              World-Class <em className="font-semibold text-navy">Facilities</em>
            </h2>
          </div>

          {/* Tab Bar */}
          <div className="flex flex-nowrap gap-2 sm:gap-4 mb-16 overflow-x-auto border-b border-sand/40 pb-1">
            {([
              { key: 'campus', label: '🏫 Campus' },
              // { key: 'labs', label: '🔬 Labs & Tech' },
              { key: 'sports', label: '⚽ Sports' },
              { key: 'arts', label: '🎨 Arts' },
            ] as { key: TabKey; label: string }[]).map(({ key, label }) => (
              <button
                key={key}
                className={`pb-4 px-6 text-sm font-black tracking-widest uppercase cursor-pointer transition-all border-b-4 ${activeTab === key ? 'border-navy text-navy' : 'border-transparent text-text-light hover:text-navy'}`}
                onClick={() => handleTabSwitch(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {infraData[activeTab].map(({ img, alt, tag, title, desc }) => (
              <div key={title} className="group bg-off-white rounded-[2rem] overflow-hidden border border-sand/40 hover:border-navy/20 hover:shadow-editorial transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img src={img} alt={alt} className={`w-full h-full object-cover  transition-transform duration-1000 group-hover:scale-110`} />
                </div>
                <div className="p-8">
                  <span className="inline-block bg-navy-light text-navy text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-full mb-4 border border-navy/10">{tag}</span>
                  <h3 className="font-playfair text-2xl font-semibold text-navy-deeper mb-3">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPORTS ─── */}
      <section className="bg-navy-deeper pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12 md:mb-20">
            <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-sand mb-4 block">Sports & Athletics</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-tight">
              Sports
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { img: '/assets/CRICKET FEVER/1.webp', Icon: Medal, name: 'Cricket', desc: 'BCCI-standard ground with pro coaching.' },
              { img: '/assets/SPORTS DAY/2.webp', Icon: Trophy, name: 'Formation Drill', desc: 'Building discipline through synchronized physical routines.' },
              { img: '/assets/SUSTAINABLE FASHION SHOW/4.webp', Icon: Users, name: 'Performances', desc: 'Showcasing student creativity and eco-consciousness.' },
              { img: '/assets/DIWALI DANCE BEATS/1.webp', Icon: Music, name: 'Group Dance', desc: 'Vibrant choreography promoting fitness and cultural expression.' },
            ].map(({ img, Icon, name, desc }) => (
              <div key={name} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:bg-white/10 hover:border-sand/30 transition-all duration-500 hover:-translate-y-2">
                <div className="h-44 overflow-hidden relative">
                  <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Icon size={24} className="text-sand" />
                    {name}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-crimson pt-16 pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="h-px w-16 bg-white" />
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-white">Testimonials</span>
              <span className="h-px w-16 bg-white" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-tight mb-6">
              Voices from the <em className="font-semibold text-white italic">Family</em>.
            </h2>
          </div>

          {/* Cards Slider - single on mobile, 3 on desktop */}
          <div className="flex md:grid md:grid-cols-3 items-stretch gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory md:snap-none snap-center pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            {testimonials.slice(currentTestimonial, currentTestimonial + (isDesktop ? 3 : 1)).map(({ avatar, name, role, text }, i) => (
              <div key={currentTestimonial + i} className="group bg-white rounded-[2.5rem] p-8 md:p-10 shadow-md border-2 border-white/30 hover:border-navy/40 hover:shadow-xl transition-all duration-500 flex flex-col relative overflow-hidden snap-center shrink-0 w-[calc(100vw-3rem)] md:w-auto h-[380px] md:h-[450px]">
                {/* Colored accent top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-navy`} />
                <span className="block text-7xl leading-none text-crimson/30 font-playfair mb-4 group-hover:text-crimson/50 transition-transform">&ldquo;</span>
                <div className="overflow-y-auto min-h-0 flex-1 pr-2">
                  <p className="text-base md:text-lg text-text-light leading-relaxed font-light italic">{text}</p>
                </div>
                <div className="flex items-center gap-4 border-t border-sand/40 pt-6 md:pt-8 mt-6 md:mt-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-sand/50 flex-shrink-0">
                    <img src={avatar} alt={name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-base md:text-lg font-black text-navy-deeper font-dm leading-tight" dangerouslySetInnerHTML={{ __html: name }} />
                    <div className="text-xs font-black tracking-widest uppercase text-text-light opacity-60">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots - desktop shows group starts, mobile shows all */}
          <div className="flex justify-center gap-3 mt-10">
            {(isDesktop ? [0, 3, 6] : testimonials.map((_, idx) => idx)).map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === idx ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRENDING UPDATES + INSTAGRAM ─── */}
      <section className="bg-white pt-16 pb-12 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-64 bg-off-white" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">Latest at Seedling International School</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper leading-tight">
                Trending <em className="font-semibold text-navy italic">Updates</em>.
              </h2>
            </div>
            <Link href="/blog" className="bg-navy-deeper border border-navy/30 text-white px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 hover:bg-crimson hover:border-crimson inline-flex items-center gap-3 self-start md:self-auto">
              All Updates
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-stretch">
            <a href="https://www.instagram.com/p/DX8nfpKEyWC/?img_index=1" target='_blank' className="group relative min-h-[430px] overflow-hidden rounded-[2.5rem] bg-navy-deeper shadow-editorial border border-sand/30">
              <img
                src="/assets/Home/trending1.jpg"
                alt="Annual Sports Day 2025"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper via-navy-deeper/45 to-transparent" />
              <div className="absolute top-6 left-6 bg-white text-crimson w-20 h-20 rounded-3xl flex flex-col items-center justify-center shadow-xl">
                <strong className="block text-2xl font-playfair leading-none">4</strong>
                <span className="text-[10px] font-black tracking-widest uppercase mt-1">MAY</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                <div className="inline-flex items-center gap-2 text-white/80 text-[10px] font-black tracking-[0.25em] uppercase mb-4">
                  <CalendarDays size={15} strokeWidth={2.5} />
                  Campus Highlight
                </div>
                <h3 className="font-playfair text-3xl md:text-5xl font-light text-white leading-tight mb-4">
                 Investiture ceremony 
                 {/* <em className="font-semibold text-sand italic">2025</em> */}
                </h3>
                <p className="text-white/75 text-sm md:text-base leading-relaxed font-light max-w-xl">
                Students proudly participated in the Investiture Ceremony, taking leadership roles and pledging responsibility.
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
