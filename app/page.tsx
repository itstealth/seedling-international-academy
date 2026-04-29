'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';

// ─── Types ───────────────────────────────────────────────────────────────────
type TabKey = 'campus' | 'labs' | 'sports' | 'arts';

// ─── Global Styles (injected via <style> tag in JSX) ────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  body { font-family: 'DM Sans', sans-serif; color: #2c2c2c; background: #fff; overflow-x: hidden; }
  .font-playfair { font-family: 'Playfair Display', serif; }
  .font-dm { font-family: 'DM Sans', sans-serif; }

  /* Hero slides */
  .hero-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 1.2s ease; background-size: cover; background-position: center; }
  .hero-slide.active { opacity: 1; }
  .hero-slide::after { content: ''; position: absolute; inset: 0; background: linear-gradient(120deg, rgba(23,81,144,0.82) 0%, rgba(23,81,144,0.3) 60%, rgba(164,21,70,0.25) 100%); }
  .hero-slide-1 { background-image: url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80'); }
  .hero-slide-2 { background-image: url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80'); }
  .hero-slide-3 { background-image: url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80'); }

  /* Dropdown */
  .nav-item:hover .dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
  .dropdown { opacity: 0; visibility: hidden; transform: translateY(-6px); transition: all 0.2s; }

  /* Gallery overlay */
  .gallery-item:hover .gallery-overlay { opacity: 1; }
  .gallery-overlay { opacity: 0; transition: opacity 0.3s; }

  /* Gallery grid */
  .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: 200px 200px; gap: 14px; }
  .gallery-item:first-child { grid-column: 1 / 3; grid-row: 1 / 3; }
  .gallery-item:nth-child(4) { grid-column: 3 / 5; }

  /* About images grid */
  .about-images { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 220px 220px; gap: 14px; position: relative; }
  .about-img:first-child { grid-row: 1 / 3; border-radius: 20px; }

  /* Instagram feed */
  .instagram-feed { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px; }

  /* Marquee */
  .marquee-track { display: flex; gap: 60px; animation: marquee 28s linear infinite; white-space: nowrap; }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* Hero dot */
  .hero-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.4); cursor: pointer; transition: all 0.3s; border: none; }
  .hero-dot.active { background: white; width: 24px; border-radius: 4px; }

  /* Sports section decorative */
  .sports-section::before { content: ''; position: absolute; top: -120px; right: -120px; width: 500px; height: 500px; border-radius: 50%; background: rgba(164,21,70,0.12); }
  .sports-section::after { content: ''; position: absolute; bottom: -80px; left: -80px; width: 300px; height: 300px; border-radius: 50%; background: rgba(137,107,133,0.15); }

  /* Admission section decorative */
  .admission-section::before { content: ''; position: absolute; top: -100px; right: -80px; width: 400px; height: 400px; border-radius: 50%; background: rgba(255,255,255,0.06); }

  /* Stat cards */
  .stat-card { background: rgba(255,255,255,0.12); backdrop-filter: blur(16px); border-top: 1px solid rgba(255,255,255,0.25); border-left: 1px solid rgba(255,255,255,0.15); padding: 20px 28px; text-align: center; color: white; }

  /* Updates grid */
  .updates-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-top: 40px; }

  /* Footer grid */
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }

  /* About features grid */
  .features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 28px; }

  /* Infra grid */
  .infra-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }

  /* Sports grid */
  .sports-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 40px; position: relative; z-index: 2; }

  /* Testi grid */
  .testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

  /* Why grid */
  .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }

  /* About grid */
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }

  /* Tab button active */
  .tab-btn.active { background: #175190 !important; color: white !important; }

  /* Hamburger hidden by default on desktop */
  .hamburger-btn { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 6px; background: none; border: none; }

  @media (max-width: 1024px) {
    .about-grid, .why-grid, .updates-grid { grid-template-columns: 1fr; }
    .sports-grid { grid-template-columns: repeat(2, 1fr); }
    .testi-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .infra-grid { grid-template-columns: repeat(2, 1fr); }
    .hero-stats { display: none; }
  }

  @media (max-width: 768px) {
    .nav-links-wrap { display: none; }
    .hamburger-btn { display: flex; }
    .about-images { grid-template-rows: 180px 180px; }
    .testi-grid, .sports-grid { grid-template-columns: 1fr; }
    .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; }
    .gallery-item:first-child { grid-column: 1 / 3; grid-row: auto; }
    .gallery-item:nth-child(4) { grid-column: auto; }
    .admission-content { flex-direction: column; }
    .footer-grid { grid-template-columns: 1fr; }
    .features-grid { grid-template-columns: 1fr; }
    .infra-grid { grid-template-columns: 1fr; }
    .updates-grid { grid-template-columns: 1fr; }
    .instagram-feed { grid-template-columns: repeat(3, 1fr); }
    .tab-bar { width: 100%; }
  }

  @media (max-width: 480px) {
    .hero-section { height: 100svh; }
  }
`;

// ─── Main Page Component ─────────────────────────────────────────────────────
export default function SeedlingPage(): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabKey>('campus');
  const [navShadow, setNavShadow] = useState<string>('0 2px 20px rgba(23,81,144,0.10)');

  const totalSlides = 3;

  const goToSlide = useCallback((n: number): void => {
    setCurrentSlide(n);
  }, []);

  // Auto-advance hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      { img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80', alt: 'School Campus', tag: 'Campus', title: 'Sprawling Green Campus', desc: 'Our 5-acre green campus provides a serene, distraction-free environment ideal for focused learning and outdoor activities.' },
      { img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', alt: 'Classrooms', tag: 'Classrooms', title: 'Smart Digital Classrooms', desc: 'Air-conditioned, tech-enabled classrooms with interactive boards fostering 21st-century learning for every student.' },
      { img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80', alt: 'Library', tag: 'Library', title: 'Resource-Rich Library', desc: 'A vast collection of books, e-resources, and periodicals encouraging a love of reading and independent research.' },
    ],
    labs: [
      { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', alt: 'Science Lab', tag: 'Science', title: 'Advanced Science Labs', desc: 'Physics, Chemistry, and Biology labs equipped with latest apparatus enabling hands-on experimental learning.' },
      { img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80', alt: 'Computer Lab', tag: 'Technology', title: 'AI & Robotics Lab', desc: 'State-of-the-art computer and robotics lab introducing students to coding, AI tools, and future technologies.' },
      { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', alt: 'Auditorium', tag: 'Facilities', title: 'Modern Auditorium', desc: 'A fully equipped 800-seat auditorium for cultural events, seminars, and inter-school competitions.' },
    ],
    sports: [
      { img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', alt: 'Sports Ground', tag: 'Outdoor', title: 'Multi-Sport Ground', desc: 'Dedicated grounds for cricket, football, athletics, and kabaddi — built to national standards.' },
      { img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', alt: 'Swimming Pool', tag: 'Aquatics', title: 'Swimming Pool', desc: 'Olympic-standard swimming pool with qualified coaches for beginner and advanced swimmers from Grade 3 onwards.' },
      { img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80', alt: 'Indoor Sports', tag: 'Indoor', title: 'Indoor Sports Complex', desc: 'Badminton, table tennis, chess, and yoga facilities in a fully air-conditioned indoor sports complex.' },
    ],
    arts: [
      { img: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&q=80', alt: 'Music Room', tag: 'Music', title: 'Music & Dance Studio', desc: 'Fully equipped studios for classical and contemporary music, dance, and performing arts for all grades.' },
      { img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80', alt: 'Art Studio', tag: 'Visual Arts', title: 'Art & Craft Studio', desc: 'Creative spaces where students explore painting, sculpture, pottery, and digital design under expert guidance.' },
      { img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80', alt: 'Drama', tag: 'Theatre', title: 'Drama & Theatre Club', desc: 'Annual theatre productions, inter-school drama contests, and storytelling workshops for confident self-expression.' },
    ],
  };

  return (
    <>
      <Head>
        <title>Seedling Public School – Best CBSE School in Jaipur</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Inject global styles */}
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      {/* ─── TOP BAR ─── */}
      <div className="bg-navy py-1.5">
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center flex-wrap gap-1.5">
          <div className="flex gap-5 flex-wrap">
            <a href="tel:+917413012351" className="text-[#cde0f7] text-[0.78rem] font-medium no-underline hover:text-sand transition-colors">📞 SPS: +91 74130 12351</a>
            <a href="tel:+918306991636" className="text-[#cde0f7] text-[0.78rem] font-medium no-underline hover:text-sand transition-colors">📞 SMHS: +91 8306991636</a>
          </div>
          <div className="hidden sm:flex gap-4">
            <a href="#" className="text-[#cde0f7] text-[0.78rem] font-medium no-underline hover:text-sand transition-colors">ERP Login</a>
            <a href="#" className="text-[#cde0f7] text-[0.78rem] font-medium no-underline hover:text-sand transition-colors">Alumni</a>
            <a href="#" className="text-[#cde0f7] text-[0.78rem] font-medium no-underline hover:text-sand transition-colors">Contact Us</a>
          </div>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="hero-section relative h-[94vh] min-h-[560px] overflow-hidden flex items-center">
        <div className="hero-slides absolute inset-0">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`hero-slide hero-slide-${n}${currentSlide === n - 1 ? ' active' : ''}`}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          <div className="inline-block bg-white/[0.18] backdrop-blur-md border border-white/35 text-white text-[0.75rem] font-semibold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-5">
            🎓 CBSE Affiliated · Jawahar Nagar, Jaipur
          </div>
          <h1 className="font-playfair text-[clamp(2.4rem,6vw,4.6rem)] text-white leading-[1.12] font-black max-w-[700px] mb-5">
            Where Every Child Finds Their <span className="text-[#ffcfde]">Wings</span>
          </h1>
          <p className="text-white/90 text-[clamp(1rem,1.5vw,1.15rem)] max-w-[520px] leading-[1.7] mb-9">
            Seedling Public School nurtures young minds with holistic education, world-class infrastructure, and a culture of excellence — shaping tomorrow&apos;s leaders since 1994.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a href="#admission" className="bg-crimson text-white px-7 py-3.5 rounded-full font-semibold text-[0.95rem] no-underline transition-all shadow-[0_4px_20px_rgba(164,21,70,0.4)] hover:bg-crimson-dark hover:-translate-y-0.5">Apply for Admission 2025–26</a>
            <a href="#about" className="bg-white/15 backdrop-blur-md border-2 border-white/50 text-white px-7 py-3 rounded-full font-semibold text-[0.95rem] no-underline transition-all hover:bg-white/25">Explore School →</a>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats absolute bottom-0 right-0 z-10 flex">
          {[
            { val: '30+', label: 'Years of Excellence' },
            { val: '5000+', label: 'Happy Students' },
            { val: '150+', label: 'Qualified Faculty' },
            { val: '100%', label: 'CBSE Results' },
          ].map(({ val, label }) => (
            <div key={label} className="stat-card">
              <strong className="block text-[1.9rem] font-bold font-playfair">{val}</strong>
              <span className="text-[0.75rem] font-medium opacity-80 tracking-[0.5px]">{label}</span>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {[0, 1, 2].map((n) => (
            <button
              key={n}
              className={`hero-dot${currentSlide === n ? ' active' : ''}`}
              onClick={() => goToSlide(n)}
              aria-label={`Slide ${n + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ─── ANNOUNCEMENT MARQUEE ─── */}
      <div className="bg-navy py-3 overflow-hidden">
        <div className="overflow-hidden">
          <div className="marquee-track">
            {marqueeItems.map((text, i) => (
              <span
                key={i}
                className="text-sand text-[0.85rem] font-medium flex items-center gap-2.5"
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <span style={{ color: '#A41546', fontSize: '0.5rem' }}>●</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── ABOUT SCHOOL ─── */}
      <section className="bg-off-white py-20" id="about">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="about-grid">
            {/* Images */}
            <div className="about-images">
              <div className="about-img overflow-hidden rounded-[20px]">
                <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80" alt="School Building" className="w-full h-full object-cover block" />
              </div>
              <div className="about-img overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80" alt="Classroom" className="w-full h-full object-cover block" />
              </div>
              <div className="about-img overflow-hidden rounded-2xl relative">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80" alt="Students" className="w-full h-full object-cover block" />
                <span className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 bg-crimson text-white px-[22px] py-3 rounded-full text-[0.82rem] font-bold whitespace-nowrap shadow-[0_4px_20px_rgba(164,21,70,0.35)] tracking-[0.5px]">
                  ✦ CBSE Affiliated School
                </span>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-[0.72rem] font-bold tracking-[3px] uppercase text-crimson mb-2.5 block">About Seedling Public School</span>
              <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-navy leading-[1.2] mb-3.5">Nurturing Excellence Since 1994 in Jaipur</h2>
              <p className="text-[1rem] text-text-light leading-[1.7] max-w-[600px]">
                Seedling Public School stands as one of Jaipur&apos;s most trusted CBSE-affiliated institutions. Our student-centric approach blends rigorous academics with emotional intelligence, creativity, and leadership — raising confident, compassionate, future-ready individuals.
              </p>
              <div className="features-grid">
                {[
                  { icon: '📚', title: 'CBSE Curriculum', desc: 'Comprehensive, future-aligned syllabus with critical thinking at core.' },
                  { icon: '🏆', title: 'Award-Winning', desc: "Recognized among Rajasthan's top CBSE schools for academic outcomes." },
                  { icon: '🤝', title: 'Holistic Growth', desc: 'Sports, arts, and life skills integrated alongside academics.' },
                  { icon: '🧠', title: 'Mental Wellness', desc: 'Dedicated counsellors ensuring a stress-free, happy learning space.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-3 items-start p-3.5 bg-white rounded-xl border-l-[3px] border-navy">
                    <div className="w-9 h-9 rounded-lg bg-navy-light flex items-center justify-center text-base flex-shrink-0">{icon}</div>
                    <div>
                      <h4 className="text-[0.82rem] font-semibold text-navy mb-0.5">{title}</h4>
                      <p className="text-[0.75rem] text-text-light leading-[1.5]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex gap-3.5 flex-wrap">
                <a href="#" className="bg-navy text-white px-6 py-3 rounded-full font-semibold text-[0.9rem] no-underline transition-all hover:bg-navy-dark hover:-translate-y-px">Our Story</a>
                <a href="#admission" className="border-2 border-navy text-navy px-6 py-[10px] rounded-full font-semibold text-[0.9rem] no-underline transition-all hover:bg-navy hover:text-white">Book a School Tour</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFRASTRUCTURE / CAMPUS TABS ─── */}
      <section className="bg-white py-20" id="campus">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-[50px]">
            <span className="text-[0.72rem] font-bold tracking-[3px] uppercase text-crimson mb-2.5 block">Our Infrastructure</span>
            <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-navy leading-[1.2] mb-3.5">World-Class Campus &amp; Facilities</h2>
            <p className="text-[1rem] text-text-light leading-[1.7] max-w-[600px]">Every space at Seedling is thoughtfully designed to inspire curiosity, collaboration, and growth.</p>
          </div>

          {/* Tab Bar */}
          <div className="tab-bar flex rounded-xl overflow-hidden border-2 border-sand mb-11 w-fit flex-wrap">
            {([
              { key: 'campus', label: '🏫 Campus' },
              { key: 'labs', label: '🔬 Labs & Tech' },
              { key: 'sports', label: '⚽ Sports Facilities' },
              { key: 'arts', label: '🎨 Arts & Culture' },
            ] as { key: TabKey; label: string }[]).map(({ key, label }) => (
              <button
                key={key}
                className={`tab-btn px-6 py-3 border-none bg-white text-text-light text-[0.88rem] font-semibold cursor-pointer transition-all font-dm hover:bg-navy-light hover:text-navy${activeTab === key ? ' active' : ''}`}
                onClick={() => handleTabSwitch(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={`tab-panel${activeTab === 'campus' ? ' active' : ''}`} id="tab-campus">
            <div className="infra-grid">
              {infraData.campus.map(({ img, alt, tag, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(23,81,144,0.14)]">
                  <div className="h-[200px] overflow-hidden"><img src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.06]" /></div>
                  <div className="p-[18px]">
                    <span className="inline-block bg-navy-light text-navy text-[0.7rem] font-bold tracking-[1px] px-2.5 py-0.5 rounded-full mb-2 uppercase">{tag}</span>
                    <h3 className="text-[1rem] font-bold text-navy mb-1.5">{title}</h3>
                    <p className="text-[0.82rem] text-text-light leading-[1.6]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`tab-panel${activeTab === 'labs' ? ' active' : ''}`} id="tab-labs">
            <div className="infra-grid">
              {infraData.labs.map(({ img, alt, tag, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(23,81,144,0.14)]">
                  <div className="h-[200px] overflow-hidden"><img src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.06]" /></div>
                  <div className="p-[18px]">
                    <span className="inline-block bg-navy-light text-navy text-[0.7rem] font-bold tracking-[1px] px-2.5 py-0.5 rounded-full mb-2 uppercase">{tag}</span>
                    <h3 className="text-[1rem] font-bold text-navy mb-1.5">{title}</h3>
                    <p className="text-[0.82rem] text-text-light leading-[1.6]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`tab-panel${activeTab === 'sports' ? ' active' : ''}`} id="tab-sports">
            <div className="infra-grid">
              {infraData.sports.map(({ img, alt, tag, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(23,81,144,0.14)]">
                  <div className="h-[200px] overflow-hidden"><img src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.06]" /></div>
                  <div className="p-[18px]">
                    <span className="inline-block bg-navy-light text-navy text-[0.7rem] font-bold tracking-[1px] px-2.5 py-0.5 rounded-full mb-2 uppercase">{tag}</span>
                    <h3 className="text-[1rem] font-bold text-navy mb-1.5">{title}</h3>
                    <p className="text-[0.82rem] text-text-light leading-[1.6]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`tab-panel${activeTab === 'arts' ? ' active' : ''}`} id="tab-arts">
            <div className="infra-grid">
              {infraData.arts.map(({ img, alt, tag, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(23,81,144,0.14)]">
                  <div className="h-[200px] overflow-hidden"><img src={img} alt={alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.06]" /></div>
                  <div className="p-[18px]">
                    <span className="inline-block bg-navy-light text-navy text-[0.7rem] font-bold tracking-[1px] px-2.5 py-0.5 rounded-full mb-2 uppercase">{tag}</span>
                    <h3 className="text-[1rem] font-bold text-navy mb-1.5">{title}</h3>
                    <p className="text-[0.82rem] text-text-light leading-[1.6]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPORTS ─── */}
      <section className="sports-section bg-navy py-20 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-[50px]">
            <span className="text-[0.72rem] font-bold tracking-[3px] uppercase text-[#ffcfde] mb-2.5 block">Sports &amp; Athletics</span>
            <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.2] mb-3.5">Champions On &amp; Off the Field</h2>
            <p className="text-[1rem] text-white/75 leading-[1.7] max-w-[600px]">At Seedling, sports are as important as academics. We train discipline, teamwork, and leadership through every game and competition.</p>
          </div>
          <div className="sports-grid">
            {[
              { img: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=400&q=80', alt: 'Cricket', emoji: '🏏', name: 'Cricket', desc: 'BCCI-standard cricket ground with professional coaching and inter-school tournament participation.' },
              { img: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80', alt: 'Football', emoji: '⚽', name: 'Football', desc: 'Full-size football pitch with certified coaches. Students represent Rajasthan at state-level tournaments.' },
              { img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80', alt: 'Athletics', emoji: '🏃', name: 'Athletics', desc: '400m track and field facility. Multiple district and state champions nurtured every year.' },
              { img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&q=80', alt: 'Badminton', emoji: '🏸', name: 'Badminton', desc: 'Indoor courts for both singles and doubles play. Regular coaching and interschool competitions.' },
            ].map(({ img, alt, emoji, name, desc }) => (
              <div key={name} className="bg-white/[0.08] border border-white/[0.14] rounded-2xl overflow-hidden transition-all hover:bg-white/15 hover:-translate-y-1 backdrop-blur-md">
                <div className="h-40 overflow-hidden"><img src={img} alt={alt} className="w-full h-full object-cover" /></div>
                <div className="p-4">
                  <h3 className="text-white text-[0.95rem] font-bold mb-1">{emoji} {name}</h3>
                  <p className="text-white/65 text-[0.78rem] leading-[1.5]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SEEDLING ─── */}
      <section className="bg-off-white py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="why-grid">
            <div>
              <span className="text-[0.72rem] font-bold tracking-[3px] uppercase text-crimson mb-2.5 block">Why Choose Us</span>
              <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-navy leading-[1.2] mb-3.5">Start Your Child&apos;s Joyride at Seedling</h2>
              <p className="text-[1rem] text-text-light leading-[1.7] max-w-[600px] mb-7">Every decision here is made with one goal — your child&apos;s brightest future.</p>
              <div className="flex flex-col gap-3.5">
                {[
                  { num: '01', title: 'Personalized Learning Journeys', desc: "Tailored teaching approaches catering to each child's learning pace, strengths, and aspirations." },
                  { num: '02', title: 'Future-Ready Skills', desc: 'AI literacy, sustainability education, critical thinking, and ethical leadership woven into the curriculum.' },
                  { num: '03', title: 'Global Mindset with Indian Values', desc: 'International exposure through exchange programs and competitions while staying rooted in cultural values.' },
                  { num: '04', title: 'Career Counselling from Grade 8', desc: 'Expert guidance for academic and career choices ensuring students are always prepared for tomorrow.' },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="flex gap-4 items-start p-[18px_20px] bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all hover:translate-x-1.5 hover:shadow-[0_4px_20px_rgba(23,81,144,0.10)]">
                    <div className="w-10 h-10 rounded-[10px] bg-navy text-white flex items-center justify-center font-extrabold text-[0.9rem] flex-shrink-0">{num}</div>
                    <div>
                      <h4 className="text-[0.95rem] font-bold text-navy mb-1">{title}</h4>
                      <p className="text-[0.82rem] text-text-light leading-[1.5]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-[420px]">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80" alt="Students Learning" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-[-20px] left-[-20px] bg-crimson text-white rounded-2xl p-[20px_24px] shadow-[0_8px_30px_rgba(164,21,70,0.35)]">
                <strong className="block text-[2rem] font-playfair">30+</strong>
                <span className="text-[0.78rem] font-medium opacity-90">Years of Academic<br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STUDENT GALLERY ─── */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-[50px]">
            <div>
              <span className="text-[0.72rem] font-bold tracking-[3px] uppercase text-crimson mb-2.5 block">Campus Life</span>
              <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-navy leading-[1.2]">Life at Seedling — Full of Colour</h2>
            </div>
            <a href="#" className="bg-navy text-white px-6 py-3 rounded-full font-semibold text-[0.9rem] no-underline transition-all hover:bg-navy-dark hover:-translate-y-px flex-shrink-0">View All Photos</a>
          </div>
          <div className="gallery-grid">
            {[
              { src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80', alt: 'School Life', label: 'School Campus' },
              { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80', alt: 'Classroom', label: 'Smart Classrooms' },
              { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', alt: 'Sports', label: 'Sports & Athletics' },
              { src: 'https://images.unsplash.com/photo-1545830790-b1804d18d5ff?w=800&q=80', alt: 'Group Activity', label: 'Group Activities' },
              { src: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=400&q=80', alt: 'Cultural Events', label: 'Cultural Events' },
            ].map(({ src, alt, label }) => (
              <div key={label} className="gallery-item rounded-xl overflow-hidden relative">
                <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.07]" />
                <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-3.5">
                  <span className="text-white text-[0.82rem] font-semibold">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-off-white py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-[50px]">
            <span className="text-[0.72rem] font-bold tracking-[3px] uppercase text-crimson mb-2.5 block">Parent Testimonials</span>
            <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-navy leading-[1.2] mb-3.5">Voices from the Seedling Family</h2>
            <p className="text-[1rem] text-text-light leading-[1.7] max-w-[600px] mx-auto">Real stories from parents and students who&apos;ve experienced the Seedling difference.</p>
          </div>
          <div className="testi-grid">
            {[
              { avatar: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Sunita Sharma', role: 'Parent of Grade 8 student', text: "Seedling transformed my daughter's confidence completely. The teachers genuinely care — she went from being shy to performing on stage at the Annual Day. The balance of studies and activities is remarkable." },
              { avatar: 'https://randomuser.me/api/portraits/men/46.jpg', name: 'Rajesh Gupta', role: 'Parent of Grade 11 student', text: "My son has been at Seedling since Grade 1. Now in Grade 11, he's represented Rajasthan in cricket AND secured 94% in his boards. The school walks the talk on holistic development." },
              { avatar: 'https://randomuser.me/api/portraits/women/68.jpg', name: 'Priya Mehta', role: 'Parent of Grade 4 student', text: "The parent-teacher communication is excellent. I always know how my child is progressing. The counselling sessions helped our family understand our child's learning style so much better." },
            ].map(({ avatar, name, role, text }) => (
              <div key={name} className="bg-white rounded-[18px] p-[30px] shadow-[0_2px_16px_rgba(0,0,0,0.06)] relative transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(23,81,144,0.12)]">
                <span className="block text-[3.5rem] leading-[0.6] text-sand font-playfair mb-3">&quot;</span>
                <div className="text-[#f5a623] text-[0.8rem] mb-0.5">★★★★★</div>
                <p className="text-[0.9rem] text-text-light leading-[1.7] mb-5">{text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-[46px] h-[46px] rounded-full overflow-hidden flex-shrink-0 border-2 border-sand">
                    <img src={avatar} alt={name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[0.88rem] font-bold text-navy">{name}</div>
                    <div className="text-[0.75rem] text-text-light">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRENDING UPDATES + INSTAGRAM ─── */}
      <section className="bg-navy py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-[0.72rem] font-bold tracking-[3px] uppercase text-[#ffcfde] mb-2.5 block">Latest at Seedling</span>
              <h2 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-white leading-[1.2]">Trending Updates &amp; News</h2>
            </div>
            <a href="#" className="bg-white/15 backdrop-blur-md border-2 border-white/50 text-white px-7 py-3 rounded-full font-semibold text-[0.95rem] no-underline transition-all hover:bg-white/25">All Updates →</a>
          </div>
          <div className="updates-grid">
            <div>
              {[
                { day: '12', month: 'APR', title: 'Annual Sports Day 2025 – A Grand Celebration', desc: 'Over 2,000 students participated in track & field events, team sports, and the marquee relay championship.' },
                { day: '05', month: 'APR', title: 'Board Results 2024 – 100% Pass, Multiple Merit Ranks', desc: 'Seedling students shine yet again with 14 students scoring above 95% in CBSE Class 12 examinations.' },
                { day: '28', month: 'MAR', title: 'Admissions Open – 2025-26 Early Bird Offer', desc: 'Register before April 30 and avail exclusive early bird benefits including fee concessions and priority class allocation.' },
                { day: '15', month: 'MAR', title: 'Science Fair Winners – District Level Recognition', desc: 'Three Seedling teams won gold at the District Science Exhibition for their projects on sustainable energy.' },
              ].map(({ day, month, title, desc }) => (
                <div key={title} className="flex gap-4 items-start pb-5 border-b border-white/10 mb-2">
                  <div className="bg-crimson text-white p-2 px-3 rounded-xl text-center flex-shrink-0 min-w-[52px]">
                    <strong className="block text-[1.2rem] font-playfair leading-none">{day}</strong>
                    <span className="text-[0.65rem] tracking-[1px] uppercase">{month}</span>
                  </div>
                  <div>
                    <h4 className="text-white text-[0.92rem] font-bold mb-1">{title}</h4>
                    <p className="text-white/65 text-[0.8rem] leading-[1.5]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-white text-[0.85rem] font-semibold mb-2.5 flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow us @seedlingschoolsjaipur
              </div>
              <div className="instagram-feed">
                {[
                  'https://images.unsplash.com/photo-1588072432836-e10032774350?w=300&q=80',
                  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&q=80',
                  'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=300&q=80',
                  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&q=80',
                  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&q=80',
                  'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=300&q=80',
                ].map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-square">
                    <img src={src} alt={`IG ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADMISSION CTA ─── */}
      <section
        className="admission-section py-20 relative overflow-hidden"
        id="admission"
        style={{ background: 'linear-gradient(135deg, #A41546 0%, #7a0f35 100%)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="admission-content flex items-center justify-between gap-10 flex-wrap">
            <div>
              <h2 className="font-playfair text-[clamp(1.6rem,3vw,2.4rem)] text-white font-bold mb-2.5">Join the Seedling Family — Enroll Your Child Today!</h2>
              <p className="text-white/85 text-[1rem] max-w-[500px] leading-[1.6]">Admissions for 2025–26 are now open. Experience the difference of a school that truly cares about every child&apos;s growth, happiness, and future.</p>
              <div className="mt-7 flex flex-col gap-3">
                {[
                  'Early Bird Benefits for Early Registrations',
                  'Scholarships for Meritorious Students',
                  'Parent Counselling Available Online & Offline',
                  'Flexible Fee Payment Options',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/90 text-[0.9rem]">
                    <span className="text-[1.2rem]">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl min-w-[320px] flex-shrink-0">
              <h3 className="text-navy text-[1.1rem] font-bold mb-5">Request a Callback</h3>
              <div className="mb-3.5">
                <input type="text" placeholder="Name of Child" className="w-full px-4 py-3 border-[1.5px] border-sand rounded-xl text-[0.88rem] font-dm text-text-base transition-colors focus:outline-none focus:border-navy bg-white" />
              </div>
              <div className="mb-3.5">
                <select className="w-full px-4 py-3 border-[1.5px] border-sand rounded-xl text-[0.88rem] font-dm text-text-base transition-colors focus:outline-none focus:border-navy bg-white">
                  <option value="">Select Grade / Class</option>
                  <option>Nursery / LKG / UKG</option>
                  <option>Grade 1–5</option>
                  <option>Grade 6–8</option>
                  <option>Grade 9–10</option>
                  <option>Grade 11–12</option>
                </select>
              </div>
              <div className="mb-3.5">
                <input type="email" placeholder="Parent's Email Address" className="w-full px-4 py-3 border-[1.5px] border-sand rounded-xl text-[0.88rem] font-dm text-text-base transition-colors focus:outline-none focus:border-navy bg-white" />
              </div>
              <div className="mb-3.5">
                <input type="tel" placeholder="Contact Number" className="w-full px-4 py-3 border-[1.5px] border-sand rounded-xl text-[0.88rem] font-dm text-text-base transition-colors focus:outline-none focus:border-navy bg-white" />
              </div>
              <button className="w-full bg-navy text-white border-none py-3.5 rounded-full text-[0.92rem] font-bold cursor-pointer transition-all font-dm tracking-[0.5px] hover:bg-navy-dark">Submit Enquiry →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: '#0a1f3a', color: 'rgba(255,255,255,0.75)' }}>
        <div className="max-w-[1280px] mx-auto px-6 pt-[60px] pb-10 border-b border-white/[0.08]">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <a href="#" className="flex items-center gap-3 no-underline mb-3.5">
                <div className="w-[52px] h-[52px] bg-crimson rounded-xl flex items-center justify-center font-playfair text-white text-2xl font-black tracking-tight flex-shrink-0">S</div>
                <div className="flex flex-col">
                  <span className="font-playfair text-[1.1rem] font-bold text-white leading-[1.1]">Seedling Public School</span>
                  <span className="text-[0.65rem] text-sand font-semibold tracking-[1.5px] uppercase">CBSE Affiliated</span>
                </div>
              </a>
              <p className="text-[0.85rem] leading-[1.7] mt-3.5 mb-5">Nurturing excellence, fostering creativity, and shaping tomorrow&apos;s leaders — one student at a time — since 1994.</p>
              <div className="flex gap-2.5">
                {[{ label: 'f', title: 'Facebook' }, { label: 'ig', title: 'Instagram' }, { label: '▶', title: 'YouTube' }, { label: '✕', title: 'Twitter' }].map(({ label, title }) => (
                  <a key={title} href="#" title={title} className="w-9 h-9 rounded-lg bg-white/[0.08] flex items-center justify-center text-white/70 no-underline text-[0.85rem] transition-all hover:bg-crimson hover:text-white">{label}</a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-[0.88rem] font-bold mb-4 tracking-[0.5px]">Quick Links</h4>
              <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
                {['About Us', 'Vision & Mission', 'Leadership', 'Media Gallery', 'Career', 'Blog', 'Alumni Network'].map((item) => (
                  <li key={item}><a href="#" className="text-white/65 no-underline text-[0.83rem] transition-colors hover:text-sand">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Our Schools */}
            <div>
              <h4 className="text-white text-[0.88rem] font-bold mb-4 tracking-[0.5px]">Our Schools</h4>
              <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
                {['Seedling Public School (SPS)', 'Seedling Modern High School', 'Seedling International Academy', 'SMIA', 'Seedling Wonderland Kids'].map((item) => (
                  <li key={item}><a href="#" className="text-white/65 no-underline text-[0.83rem] transition-colors hover:text-sand">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-[0.88rem] font-bold mb-4 tracking-[0.5px]">SPS &amp; SIA Campus</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-white/65 no-underline text-[0.83rem] transition-colors hover:text-sand flex items-start gap-2">📍 Bank St, Sector 4, Jawahar Nagar, Jaipur 302004</a>
                <a href="tel:01413623000" className="text-white/65 no-underline text-[0.83rem] transition-colors hover:text-sand flex items-start gap-2">📞 0141-3623000</a>
                <a href="tel:+917413012351" className="text-white/65 no-underline text-[0.83rem] transition-colors hover:text-sand flex items-start gap-2">📞 +91 74130 12351</a>
                <a href="mailto:seedlingacademy@hotmail.com" className="text-white/65 no-underline text-[0.83rem] transition-colors hover:text-sand flex items-start gap-2">✉ seedlingacademy@hotmail.com</a>
              </div>
              <div className="mt-4">
                <a href="#" className="bg-navy text-white no-underline text-[0.8rem] px-[18px] py-2 rounded-full font-semibold transition-all hover:bg-navy-dark">ERP Login</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex justify-between items-center flex-wrap gap-2.5 text-[0.78rem]">
          <span>© 2025 Seedling Public School, Jaipur. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="text-white/50 no-underline hover:text-sand">Privacy Policy</a>
            <a href="#" className="text-white/50 no-underline hover:text-sand">Terms &amp; Conditions</a>
            <a href="#" className="text-white/50 no-underline hover:text-sand">Mandatory Disclosure</a>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING ENQUIRE BUTTON ─── */}
      <a
        href="#admission"
        className="fixed right-5 bottom-[30px] z-[999] bg-crimson text-white px-[22px] py-3.5 rounded-full text-[0.88rem] font-bold no-underline shadow-[0_6px_30px_rgba(164,21,70,0.45)] transition-all flex items-center gap-2 hover:bg-crimson-dark hover:-translate-y-0.5"
      >
        ✉ Enquire Now
      </a>
    </>
  );
}
