'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Users, Music, Medal, BookOpen, Award, Heart, Brain } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────
type TabKey = 'campus' | 'labs' | 'sports' | 'arts';

// ─── Main Page Component ─────────────────────────────────────────────────────
export default function SeedlingPage(): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabKey>('campus');
  const [navShadow, setNavShadow] = useState<string>('0 2px 20px rgba(23,81,144,0.10)');
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { avatar: '/assets/testimonial/deepak-gupta.jpg', name: 'Deepak Gupta & Renu Gupta', role: 'Parents · Jaipur', text: 'We are truly grateful for the support and leadership shown during our children\'s sports day. Your dedication made the event special.' },
    { avatar: '/assets/testimonial/Soniya-Yadav.jpg', name: 'Narendra Kumar Sharma & Soniya Yadav', role: 'Parents · Vaishali Nagar', text: 'The school provides holistic education, nurturing academic growth, creativity, and confidence. Teachers go beyond teaching and create a motivating environment for children.' },
    { avatar: '/assets/testimonial/Bhanupriya-Singh.jpg', name: 'Bhanupriya Singh', role: 'Parent · MI Road', text: 'The academic programme is well planned and balanced with co-curricular activities. Teachers and management are doing a great job in grooming children.' },
    { avatar: '/assets/testimonial/Anita-Gupta.jpg', name: 'Mrs. Anita Gupta', role: 'Parent · Raja Park', text: 'The curriculum and teaching methods are impressive. Worksheets and activities help children think beyond textbooks.' },
    { avatar: '/assets/testimonial/ibha-chadra.jpg', name: 'Ibha Chhabra', role: 'Parent · Jhotwara', text: 'We are grateful for the care, dedication, and guidance provided by the teachers and school management.' },
    { avatar: '/assets/testimonial/aditi-sharma.jpg', name: 'Aditi Sharma', role: 'Parent · Vaishali Nagar', text: "Aligned with NEP, the school provides modern and relevant education, giving us confidence in our child's future." },
    { avatar: '/assets/testimonial/Sweta-Shrivastava.jpg', name: 'Sweta Shrivastava', role: 'Parent · MI Road', text: 'Technology integration makes learning interactive and helps children build essential digital skills for the future.' },
    { avatar: '/assets/testimonial/Muskan-Rupani.jpg', name: 'Muskan Rupani', role: 'Parent · Jaipur', text: 'The school sets high standards in education with skilled teachers ensuring overall personality development.' },
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
      { img: '/assets/Home/smart-classroom.jpg', alt: 'Classrooms', tag: 'Classrooms', title: 'Smart Digital Classrooms', desc: 'Air-conditioned, tech-enabled classrooms with interactive boards fostering 21st-century learning for every student.' },
      { img: '/assets/Home/School2.webp', alt: 'School Campus', tag: 'Campus', title: 'Sprawling Green Campus', desc: 'Our 5-acre green campus provides a serene, distraction-free environment ideal for focused learning and outdoor activities.' },
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
      { img: '/assets/STELLAR SATURDAYS/3.webp', alt: 'Indoor Sports', tag: 'Indoor', title: 'Indoor Sports Complex', desc: 'Badminton, table tennis, chess, and yoga facilities in a fully air-conditioned indoor sports complex.' },
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
      <section className="relative h-[40vh] min-h-[400px] md:h-screen md:min-h-[640px] overflow-hidden flex items-center">
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

          <h1 className="serif text-[clamp(2rem,5vw,4rem)] text-white leading-[1] font-light max-w-3xl mb-8">
            Where Every Child Finds Their
            <em className="font-semibold text-sand italic ml-2">Wings</em>

          </h1>
          <p className="hidden md:block text-white/80 text-xl md:text-2xl max-w-xl leading-relaxed mb-12 font-light">
            Seedling Public School nurtures young minds with holistic education and a culture of excellence — shaping tomorrow's leaders since 1993.
          </p>
          {/* <div className="flex gap-4 flex-wrap">
            <a href="/admissions#enquire" className="bg-crimson hover:bg-crimson-dark text-white px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-500 shadow-xl hover:shadow-crimson/40 hover:-translate-y-1">
              Apply Now 2026
            </a>
            <a href="/about" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-500 hover:bg-white hover:text-navy-deeper">
              Explore School
            </a>
          </div> */}
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

      {/* ─── ABOUT SCHOOL ─── */}
      <section className="bg-off-white py-8 md:pt-16 md:pb-8" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">About Seedling</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper leading-tight mb-8">
                Nurturing <em className="font-semibold text-navy italic">Excellence</em> Since 1993.
              </h2>
              <p className="text-lg text-text-light leading-relaxed mb-10 font-light">
                Seedling Public School stands as one of Jaipur's most trusted educational institutions. Our approach blends rigorous academics with emotional intelligence, creativity, and leadership.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: BookOpen, title: 'CBSE Curriculum', desc: 'Comprehensive, future-aligned syllabus.' },
                  { icon: Award, title: 'Award-Winning', desc: "Rajasthan's top CBSE academic outcomes." },
                  { icon: Heart, title: 'Holistic Growth', desc: 'Arts and life skills integrated daily.' },
                  { icon: Brain, title: 'Mental Wellness', desc: 'Dedicated professional counsellors.' },
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
              <div className="flex gap-4 flex-wrap">
                <a href="/about" className="bg-navy-deeper hover:bg-navy-dark text-white px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 shadow-xl hover:shadow-navy-deeper/40">Our Story</a>
              {/* <a href="#admission" className="border-2 border-navy-deeper text-navy-deeper px-8 py-3.5 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-500 hover:bg-navy-deeper hover:text-white">Book a Tour</a> */}
              </div>
            </div>

            {/* Images */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 h-[400px]">
                <div className="row-span-2 overflow-hidden rounded-[2.5rem] shadow-editorial border-4 border-white">
                  <img src="/assets/Home/School1.webp" alt="School Building" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                </div>
                <div className="overflow-hidden rounded-[2rem] shadow-editorial border-4 border-white">
                  <img src="/assets/Home/junior.webp" alt="Classroom" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                </div>
                <div className="overflow-hidden rounded-[2rem] shadow-editorial border-4 border-white relative">
                  <img src="/assets/WHISPERS OF WELLNESS/2.webp" alt="Students" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-crimson text-white md:px-8 md:py-5 px-4 py-3 rounded-2xl shadow-2xl z-10">
                <span className="block text-xl md:text-3xl font-semibold font-playfair leading-none mb-1">CBSE</span>
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
      <section className="bg-navy-deeper pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-sand mb-4 block">Sports & Athletics</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-tight">
              Champions <em className="font-semibold text-sand italic">Everywhere</em>
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

      {/* ─── WHY SEEDLING ─── */}
      <section className="bg-off-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-24 items-center">
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">Why Choose Us</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper leading-tight mb-12">
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
          <div className="space-y-4">
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
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-off-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-crimson mb-4 block">Testimonials</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-navy-deeper leading-tight mb-6">
              Voices from the <em className="font-semibold text-navy italic">Family</em>.
            </h2>
          </div>

          {/* Cards Grid - showing 3 at a time with auto-scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.slice(currentTestimonial, currentTestimonial + 3).map(({ avatar, name, role, text }, i) => (
              <div key={currentTestimonial + i} className="group bg-white rounded-[2.5rem] p-10 shadow-sm border border-sand/30 hover:border-navy/20 hover:shadow-editorial transition-all duration-500 flex flex-col">
                <span className="block text-7xl leading-none text-sand font-playfair mb-4 group-hover:scale-110 transition-transform">"</span>
                <div className="overflow-y-auto max-h-48 flex-1">
                  <p className="text-lg text-text-light leading-relaxed mb-10 font-light italic">{text}</p>
                </div>
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

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {[0, 3].map((startIdx) => (
              <button
                key={startIdx}
                onClick={() => setCurrentTestimonial(startIdx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === startIdx ? 'bg-navy w-8' : 'bg-sand/40 hover:bg-sand'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRENDING UPDATES + INSTAGRAM ─── */}
      <section className="bg-navy-deeper pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-end justify-between mb-20">
            <div>
              <span className="text-[0.7rem] font-black tracking-[0.4em] uppercase text-sand mb-4 block">Latest at Seedling</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-tight">
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
              <a href="https://www.instagram.com/seedlingschoolsjaipur" target="_blank" rel="noopener noreferrer" className="text-white text-sm font-black tracking-widest uppercase mb-6 flex items-center gap-3 hover:text-sand transition-colors">
                <span className="w-8 h-[2px] bg-sand" />
                Follow @seedlingschoolsjaipur
              </a>
              <a href="https://www.instagram.com/seedlingschoolsjaipur" target="_blank" rel="noopener noreferrer" className="grid grid-cols-3 gap-4">
                {[
                  '/assets/Home/trending1.jpg',
                  '/assets/Home/trending2.jpg',
                  '/assets/Home/trending3.jpg',
                  '/assets/Home/trending4.jpg',
                  '/assets/Home/trending5.jpg',
                  '/assets/Home/trending6.jpg',
                ].map((src, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden aspect-[4/5] border border-white/5 hover:border-sand/30 transition-all duration-500 group">
                    <img src={src} alt={`IG ${i + 1}`} className="w-full h-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                ))}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADMISSION CTA ─── */}
      <section className="relative pt-16 pb-20 md:pb-24  overflow-hidden bg-navy-deeper">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
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

      {/* Floating Action Buttons — appear after scrolling past hero */}

      {/* LEFT: Call + WhatsApp */}
      <div
        className="fixed left-3 sm:left-6 bottom-5 sm:bottom-8 z-[99] flex flex-col items-start gap-2 sm:gap-3"
      >
        {/* Call */}
        <a
          href="tel:+917413012351"
          className="flex items-center justify-center gap-2 bg-navy-deeper hover:bg-navy text-white w-11 h-11 sm:w-auto sm:h-auto sm:px-5 sm:py-3 rounded-full font-black text-xs tracking-widest uppercase shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 border border-white/10"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="hidden sm:inline">Call Us</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917413012351"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white w-11 h-11 sm:w-auto sm:h-auto sm:px-5 sm:py-3 rounded-full font-black text-xs tracking-widest uppercase shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>

      {/* RIGHT: Enquire Now */}
      <div
        className="fixed right-3 sm:right-6 bottom-5 sm:bottom-8 z-[99]"
      >
        <a
          href="/admissions#enquire"
          className="flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white px-4 py-3 sm:px-6 sm:py-3.5 rounded-full font-black text-xs sm:text-sm tracking-widest uppercase shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Enquire Now
        </a>
      </div>
    </main>
  );
}