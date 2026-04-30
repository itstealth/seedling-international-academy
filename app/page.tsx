'use client';

import React, { useState, useEffect } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────
type TabKey = 'campus' | 'labs' | 'sports' | 'arts';

// ─── Main Page Component ─────────────────────────────────────────────────────
export default function SeedlingPage(): React.JSX.Element {
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
    'Admissions Open for 2025–26 Academic Session',
    'Early Bird Benefits for Registrations Before March 31',
    'Scholarship Available for Meritorious Students in Academics & Sports',
    'Parent Counselling Available Online & Offline',
    'Results 2024: 100% Pass Rate · Multiple School Toppers',
    'Annual Sports Day – March 2025',
    'Admissions Open for 2025–26 Academic Session',
    'Early Bird Benefits for Registrations Before March 31',
    'Scholarship Available for Meritorious Students in Academics & Sports',
    'Parent Counselling Available Online & Offline',
    'Results 2024: 100% Pass Rate · Multiple School Toppers',
    'Annual Sports Day – March 2025',
  ];

  // Infrastructure tab data
  const infraData: Record<TabKey, Array<{ img: string; alt: string; tag: string; title: string; desc: string }>> = {
    campus: [
      { img: '/assets/ANNUAL FUNCTION/1.webp', alt: 'School Campus', tag: 'Campus', title: 'Sprawling Green Campus', desc: 'Our 5-acre green campus provides a serene, distraction-free environment ideal for focused learning and outdoor activities.' },
      { img: '/assets/STELLAR SATURDAYS/2.webp', alt: 'Classrooms', tag: 'Classrooms', title: 'Smart Digital Classrooms', desc: 'Air-conditioned, tech-enabled classrooms with interactive boards fostering 21st-century learning for every student.' },
      { img: '/assets/STELLAR SATURDAYS/3.webp', alt: 'Library', tag: 'Library', title: 'Resource-Rich Library', desc: 'A vast collection of books, e-resources, and periodicals encouraging a love of reading and independent research.' },
    ],
    labs: [
      { img: '/assets/BOOT CAMP/2.webp', alt: 'Science Lab', tag: 'Science', title: 'Advanced Science Labs', desc: 'Physics, Chemistry, and Biology labs equipped with latest apparatus enabling hands-on experimental learning.' },
      { img: '/assets/ANNUAL FUNCTION/3.webp', alt: 'Computer Lab', tag: 'Technology', title: 'AI & Robotics Lab', desc: 'State-of-the-art computer and robotics lab introducing students to coding, AI tools, and future technologies.' },
      { img: '/assets/STELLAR SATURDAYS/4.webp', alt: 'Auditorium', tag: 'Facilities', title: 'Modern Auditorium', desc: 'A fully equipped 800-seat auditorium for cultural events, seminars, and inter-school competitions.' },
    ],
    sports: [
      { img: '/assets/SPORTS DAY/1.webp', alt: 'Sports Ground', tag: 'Outdoor', title: 'Multi-Sport Ground', desc: 'Dedicated grounds for cricket, football, athletics, and kabaddi — built to national standards.' },
      { img: '/assets/SPORTS DAY/2.webp', alt: 'Swimming Pool', tag: 'Aquatics', title: 'Swimming Pool', desc: 'Olympic-standard swimming pool with qualified coaches for beginner and advanced swimmers from Grade 3 onwards.' },
      { img: '/assets/CRICKET FEVER/1.webp', alt: 'Indoor Sports', tag: 'Indoor', title: 'Indoor Sports Complex', desc: 'Badminton, table tennis, chess, and yoga facilities in a fully air-conditioned indoor sports complex.' },
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
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/Home/banner-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy-deeper/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[0.75rem] font-black tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-sand rounded-full animate-pulse" />
            CBSE Affiliated · Jaipur
          </div>
          <h1 className="font-playfair text-[clamp(2.5rem,7vw,5.5rem)] text-white leading-[1] font-light max-w-4xl mb-8">
            Where Every Child Finds Their <br />
            <em className="font-semibold text-sand italic">Wings</em>
          </h1>
          <p className="text-white/80 text-xl md:text-2xl max-w-xl leading-relaxed mb-12 font-light">
            Seedling Public School nurtures young minds with holistic education and a culture of excellence — shaping tomorrow's leaders since 1994.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/admissions" className="bg-crimson hover:bg-crimson-dark text-white px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-500 shadow-xl hover:shadow-crimson/40 hover:-translate-y-1">
              Apply Now 2026
            </a>
            <a href="/about" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-500 hover:bg-white hover:text-navy-deeper">
              Explore School
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
          {[
            { val: '30+', label: 'Years of Excellence' },
            { val: '5000+', label: 'Students' },
            { val: '150+', label: 'Faculty' },
            { val: '100%', label: 'Results' },
          ].map(({ val, label }) => (
            <div key={label} className="bg-navy-deeper/40 backdrop-blur-2xl border-l border-white/10 p-10 text-center text-white min-w-[180px]">
              <strong className="block text-4xl font-semibold font-playfair text-sand mb-2">{val}</strong>
              <span className="text-[10px] font-black tracking-widest uppercase opacity-60">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ANNOUNCEMENT MARQUEE ─── */}
      <div className="bg-navy-deeper py-4 overflow-hidden border-y border-white/10">
        <div className="marquee-track flex gap-16 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((text, i) => (
            <span
              key={i}
              className="text-sand text-sm font-black tracking-widest uppercase flex items-center gap-4"
            >
              <span className="w-2 h-2 bg-crimson rounded-full" />
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ─── ABOUT SCHOOL ─── */}
      <section className="bg-off-white py-32" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[560px]">
                <div className="row-span-2 overflow-hidden rounded-[2.5rem] shadow-editorial border-4 border-white">
                  <img src="/assets/ANNUAL FUNCTION/1.webp" alt="School Building" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                </div>
                <div className="overflow-hidden rounded-[2rem] shadow-editorial border-4 border-white">
                  <img src="/assets/STELLAR SATURDAYS/6.webp" alt="Classroom" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                </div>
                <div className="overflow-hidden rounded-[2rem] shadow-editorial border-4 border-white relative">
                  <img src="/assets/SPORTS DAY/3.webp" alt="Students" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-crimson text-white px-8 py-5 rounded-2xl shadow-2xl z-10">
                <span className="block text-3xl font-semibold font-playfair leading-none mb-1">CBSE</span>
                <span className="text-[10px] font-black tracking-widest uppercase opacity-70">Affiliated School</span>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">About Seedling</span>
              <h2 className="font-playfair text-5xl md:text-6xl font-light text-navy-deeper leading-tight mb-8">
                Nurturing <em className="font-semibold text-navy italic">Excellence</em> Since 1994.
              </h2>
              <p className="text-lg text-text-light leading-relaxed mb-10 font-light">
                Seedling Public School stands as one of Jaipur's most trusted educational institutions. Our approach blends rigorous academics with emotional intelligence, creativity, and leadership.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: '📚', title: 'CBSE Curriculum', desc: 'Comprehensive, future-aligned syllabus.' },
                  { icon: '🏆', title: 'Award-Winning', desc: "Rajasthan's top CBSE academic outcomes." },
                  { icon: '🤝', title: 'Holistic Growth', desc: 'Arts and life skills integrated daily.' },
                  { icon: '🧠', title: 'Mental Wellness', desc: 'Dedicated professional counsellors.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4 items-start p-6 bg-white rounded-3xl shadow-sm border border-sand/30 hover:border-navy/20 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-navy-light text-navy flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">{icon}</div>
                    <div>
                      <h4 className="text-sm font-black text-navy-deeper mb-1 uppercase tracking-tight">{title}</h4>
                      <p className="text-xs text-text-light leading-relaxed font-light">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                <a href="/about" className="bg-navy-deeper hover:bg-navy-dark text-white px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 shadow-xl hover:shadow-navy-deeper/40">Our Story</a>
                <a href="#admission" className="border-2 border-navy-deeper text-navy-deeper px-8 py-3.5 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 hover:bg-navy-deeper hover:text-white">Book a Tour</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFRASTRUCTURE / CAMPUS TABS ─── */}
      <section className="bg-white py-32" id="campus">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">Infrastructure</span>
            <h2 className="font-playfair text-5xl md:text-6xl font-light text-navy-deeper leading-tight">
              World-Class <em className="font-semibold text-navy">Facilities</em>
            </h2>
          </div>

          {/* Tab Bar */}
          <div className="flex flex-wrap gap-4 mb-16 border-b border-sand/40">
            {([
              { key: 'campus', label: '🏫 Campus' },
              { key: 'labs', label: '🔬 Labs & Tech' },
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
                  <img src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
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
      <section className="bg-navy-deeper py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-sand mb-4 block">Sports & Athletics</span>
            <h2 className="font-playfair text-5xl md:text-6xl font-light text-white leading-tight">
              Champions <em className="font-semibold text-sand italic">Everywhere</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { img: '/assets/CRICKET FEVER/1.webp', emoji: '🏏', name: 'Cricket', desc: 'BCCI-standard ground with pro coaching.' },
              { img: '/assets/SPORTS DAY/2.webp', emoji: '⚽', name: 'Football', desc: 'State-level pitch and certified training.' },
              { img: '/assets/SPORTS DAY/3.webp', emoji: '🏃', name: 'Athletics', desc: '400m track nurturing state champions.' },
              { img: '/assets/SPORTS DAY/1.webp', emoji: '🏸', name: 'Badminton', desc: 'Premium indoor courts for all levels.' },
            ].map(({ img, emoji, name, desc }) => (
              <div key={name} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:bg-white/10 hover:border-sand/30 transition-all duration-500 hover:-translate-y-2">
                <div className="h-44 overflow-hidden relative">
                  <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-navy-deeper/40 group-hover:opacity-0 transition-opacity" />
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">{emoji}</span>
                    {name}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SEEDLING ─── */}
      <section className="bg-off-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">Why Choose Us</span>
              <h2 className="font-playfair text-5xl md:text-6xl font-light text-navy-deeper leading-tight mb-12">
                Start Your Child's <em className="font-semibold text-navy italic">Joyride</em>.
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  { num: '01', title: 'Personalized Journeys', desc: "Tailored approaches for each child's strengths." },
                  { num: '02', title: 'Future-Ready Skills', desc: 'AI literacy and critical thinking integrated.' },
                  { num: '03', title: 'Global Mindset', desc: 'International exposure with Indian values.' },
                  { num: '04', title: 'Career Guidance', desc: 'Expert counselling from Grade 8 onwards.' },
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
                <strong className="block text-6xl font-playfair text-sand mb-2">30+</strong>
                <span className="text-xs font-black tracking-widest uppercase opacity-60">Years of Academic<br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STUDENT GALLERY ─── */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">Campus Life</span>
              <h2 className="font-playfair text-5xl md:text-6xl font-light text-navy-deeper leading-tight">
                Vibrant <em className="font-semibold text-navy italic">Memories</em>.
              </h2>
            </div>
            <a href="/campus-highlights" className="bg-navy-deeper hover:bg-navy-dark text-white px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 shadow-xl hover:shadow-navy-deeper/40">View Gallery</a>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            {[
              { src: '/assets/ANNUAL FUNCTION/6.webp', label: 'School Campus', className: 'col-span-2 row-span-2' },
              { src: '/assets/STELLAR SATURDAYS/3.webp', label: 'Smart Classrooms' },
              { src: '/assets/BOOT CAMP/4.webp', label: 'Activities', className: 'col-span-2' },
              { src: '/assets/SPORTS DAY/1.webp', label: 'Sports' },
            ].map(({ src, label, className = "" }) => (
              <div key={label} className={`group relative rounded-[2rem] overflow-hidden ${className}`}>
                <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white text-lg font-semibold font-playfair">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-off-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">Testimonials</span>
            <h2 className="font-playfair text-5xl md:text-6xl font-light text-navy-deeper leading-tight mb-6">
              Voices from the <em className="font-semibold text-navy italic">Family</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { avatar: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Sunita Sharma', role: 'Parent of Grade 8 student', text: "Seedling transformed my daughter's confidence completely. The teachers genuinely care — she went from being shy to performing on stage." },
              { avatar: 'https://randomuser.me/api/portraits/men/46.jpg', name: 'Rajesh Gupta', role: 'Parent of Grade 11 student', text: "My son has been at Seedling since Grade 1. Now in Grade 11, he's represented Rajasthan in cricket AND secured 94% in his boards." },
              { avatar: 'https://randomuser.me/api/portraits/women/68.jpg', name: 'Priya Mehta', role: 'Parent of Grade 4 student', text: "The parent-teacher communication is excellent. I always know how my child is progressing. The counselling sessions helped so much." },
            ].map(({ avatar, name, role, text }) => (
              <div key={name} className="group bg-white rounded-[2.5rem] p-10 shadow-sm border border-sand/30 hover:border-navy/20 hover:shadow-editorial transition-all duration-500">
                <span className="block text-7xl leading-none text-sand font-playfair mb-4 group-hover:scale-110 transition-transform">"</span>
                <p className="text-lg text-text-light leading-relaxed mb-10 font-light italic">{text}</p>
                <div className="flex items-center gap-4 border-t border-sand/40 pt-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-sand/50">
                    <img src={avatar} alt={name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-navy-deeper font-dm">{name}</div>
                    <div className="text-xs font-black tracking-widest uppercase text-text-light opacity-60">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRENDING UPDATES + INSTAGRAM ─── */}
      <section className="bg-navy-deeper py-32 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-end justify-between mb-20">
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-sand mb-4 block">Latest at Seedling</span>
              <h2 className="font-playfair text-5xl md:text-6xl font-light text-white leading-tight">
                Trending <em className="font-semibold text-sand italic">Updates</em>.
              </h2>
            </div>
            <a href="/blog" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 hover:bg-white hover:text-navy-deeper">All Updates</a>
          </div>
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              {[
                { day: '12', month: 'APR', title: 'Annual Sports Day 2025', desc: 'Over 2,000 students participated in team sports and the relay championship.' },
                { day: '05', month: 'APR', title: 'Board Results 2024', desc: 'Seedling students shine again with 14 students scoring above 95% in CBSE.' },
                { day: '28', month: 'MAR', title: 'Admissions Open – Early Bird Offer', desc: 'Register before April 30 and avail exclusive early bird fee concessions.' },
              ].map(({ day, month, title, desc }) => (
                <div key={title} className="flex gap-8 items-start pb-8 border-b border-white/10 group cursor-pointer">
                  <div className="bg-crimson text-white w-20 h-20 rounded-3xl flex flex-col items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <strong className="block text-2xl font-playfair leading-none">{day}</strong>
                    <span className="text-[10px] font-black tracking-widest uppercase mt-1">{month}</span>
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-bold mb-2 font-playfair group-hover:text-sand transition-colors">{title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed font-light">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-white text-sm font-black tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-sand" />
                Follow @seedlingschoolsjaipur
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  '/assets/ANNUAL FUNCTION/3.webp',
                  '/assets/STELLAR SATURDAYS/4.webp',
                  '/assets/BOOT CAMP/1.webp',
                  '/assets/SPORTS DAY/2.webp',
                  '/assets/ANNUAL FUNCTION/7.webp',
                  '/assets/STELLAR SATURDAYS/5.webp',
                ].map((src, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden aspect-square border border-white/5 hover:border-sand/30 transition-all duration-500 group">
                    <img src={src} alt={`IG ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADMISSION CTA ─── */}
      <section className="relative py-48 overflow-hidden bg-navy-deeper">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-sand mb-6 block">Join the Family</span>
              <h2 className="font-playfair text-5xl md:text-7xl font-light text-white leading-tight mb-8">
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
                  'Flexible Fee Payment Options',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-white font-bold text-sm uppercase tracking-widest">
                    <span className="w-6 h-6 rounded-full bg-crimson flex items-center justify-center text-[10px]">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-2xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
              <h3 className="font-playfair text-3xl font-semibold text-navy-deeper mb-8">Request a Callback</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Name of Child" className="w-full px-8 py-5 bg-off-white border border-sand/40 rounded-2xl text-sm font-bold tracking-tight focus:outline-none focus:border-navy transition-colors" />
                <select className="w-full px-8 py-5 bg-off-white border border-sand/40 rounded-2xl text-sm font-bold tracking-tight focus:outline-none focus:border-navy transition-colors appearance-none">
                  <option value="">Select Grade / Class</option>
                  <option>Nursery / LKG / UKG</option>
                  <option>Grade 1–5</option>
                  <option>Grade 6–8</option>
                  <option>Grade 9–12</option>
                </select>
                <input type="email" placeholder="Email Address" className="w-full px-8 py-5 bg-off-white border border-sand/40 rounded-2xl text-sm font-bold tracking-tight focus:outline-none focus:border-navy transition-colors" />
                <input type="tel" placeholder="Contact Number" className="w-full px-8 py-5 bg-off-white border border-sand/40 rounded-2xl text-sm font-bold tracking-tight focus:outline-none focus:border-navy transition-colors" />
                <button className="w-full bg-navy-deeper hover:bg-navy-dark text-white py-6 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-500 shadow-xl hover:shadow-navy-deeper/40">
                  Submit Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Button */}
      <a
        href="#admission"
        className="fixed right-8 bottom-8 z-[99] bg-crimson hover:bg-crimson-dark text-white px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-105"
      >
        ✉ Enquire Now
      </a>
    </main>
  );
}