"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, GraduationCap, Users, Globe2, BookOpen, Star, Play, Sparkles, ShieldCheck, Zap, Heart, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-neutral-bg min-h-screen relative overflow-x-hidden">
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/homepage_hero_cinematic_1776862540599.png"
            alt="Seedling Schools Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-neutral-bg" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-white text-neutral-900 mb-10 border border-white/40">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em]">Admissions Open 2026-27</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.85] mb-10 drop-shadow-2xl">
              Excellence <br />
              <span className="text-secondary italic font-serif">by Design.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed mb-14 drop-shadow-lg">
              Empowering curious minds to navigate a complex world with wisdom, resilience, and global competence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link 
                href="/admissions"
                className="h-20 px-12 bg-white text-neutral-950 rounded-full font-black text-lg flex items-center hover:scale-105 transition-all shadow-editorial group"
              >
                Inquire Now
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="h-20 px-12 glass-white text-white rounded-full font-black text-lg flex items-center hover:bg-white hover:text-neutral-950 transition-all">
                <Play className="mr-3 w-5 h-5 fill-current" />
                Virtual Tour
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase font-black tracking-[0.4em]">Scroll</span>
          <div className="w-px h-16 bg-linear-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Excellence Dashboard - Stats Overlap */}
      <section className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="glass-white p-12 md:p-20 rounded-[4rem] border-white/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { label: 'Board Result', val: '100%', sub: 'Academic Legacy', icon: Star, color: 'secondary' },
              { label: 'Global Ranking', val: 'Top 10', sub: 'Education World', icon: Award, color: 'primary' },
              { label: 'Expert Mentors', val: '250+', sub: 'Specialized Staff', icon: GraduationCap, color: 'secondary' },
              { label: 'Global Alumni', val: '5,000+', sub: 'World Leaders', icon: Globe2, color: 'primary' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative inline-block mb-6">
                  <div className={`absolute inset-0 bg-${stat.color}/5 rounded-full blur-2xl group-hover:bg-${stat.color}/10 transition-colors`} />
                  {(() => {
                    const StatIcon = stat.icon;
                    return <StatIcon className={`w-10 h-10 text-${stat.color} relative z-10 mx-auto group-hover:scale-110 transition-transform`} />;
                  })()}
                </div>
                <div className="text-5xl font-black text-neutral-950 mb-3 tracking-tighter">{stat.val}</div>
                <div className="text-label mb-2">{stat.label}</div>
                <div className="text-sm text-neutral-400 font-medium">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio: Multi-branch Explorer */}
      <section className="py-48 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mesh-gradient">
         <div className="text-center mb-32">
            <span className="text-label mb-6 block">One Group. Four Worlds.</span>
            <h2 className="text-heading text-6xl md:text-8xl">The Educational Portfolio.</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
               { name: "SPS", fullName: "Seedling Public School", icon: "01", desc: "Co-educational day school focusing on CBSE academic rigor.", image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/about_hero_educational_abstract_1776852400303.png" },
               { name: "SMIA", fullName: "Seedling Modern Int. Academy", icon: "02", desc: "International standards with a focus on holistic development.", image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/homepage_seedling_world_1776857779231.png" },
               { name: "SIA", fullName: "Seedling International Academy", icon: "03", desc: "Cambridge (CAIE) curriculum for global-minded students.", image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/about_page_hero_1776857790049.png" },
               { name: "K-World", fullName: "The Kiderworld", icon: "04", desc: "Nurturing environment for the early developmental years.", image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/legacy_page_hero_1776857708437.png" }
            ].map((school, i) => (
               <motion.div 
                  key={i}
                  whileHover={{ y: -15 }}
                  className="group relative h-[600px] rounded-[3rem] overflow-hidden shadow-editorial transition-all duration-700"
               >
                  <Image src={school.image} alt={school.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-0 right-0 p-10 text-7xl font-black text-white/5 select-none font-serif italic">
                     {school.icon}
                  </div>

                  <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                     <span className="text-xs font-black tracking-[0.3em] uppercase opacity-70 mb-4">{school.fullName}</span>
                     <h3 className="text-4xl font-black tracking-tighter mb-6">{school.name}</h3>
                     <p className="text-white/70 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        {school.desc}
                     </p>
                     <Link href="/about" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
                        Discover More <ArrowRight className="w-4 h-4" />
                     </Link>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* World of Infrastructure - Masonry Grid */}
      <section className="py-48 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 mb-32 items-end">
           <div className="flex-1">
              <span className="text-label mb-8 block">World-Class Campuses</span>
              <h2 className="text-heading text-7xl md:text-9xl mb-12">The Seedling <br /> Infrastructure.</h2>
              <p className="text-xl text-neutral-600 font-medium leading-relaxed max-w-xl">
                 Step into a campus designed for the 21st century. High-tech labs, Olympic arenas, and digital libraries converge to create the ultimate growth environment.
              </p>
           </div>
           <div className="lg:w-[400px]">
              <button className="group flex items-center gap-6 p-8 bg-neutral-950 text-white rounded-[2.5rem] hover:bg-primary transition-all shadow-editorial w-full">
                 <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    <ArrowUpRight className="w-8 h-8" />
                 </div>
                 <div className="text-left">
                    <span className="text-[10px] uppercase font-black tracking-widest opacity-50 block mb-1">Architecture</span>
                    <span className="text-xl font-black">Virtual Tour &apos;26</span>
                 </div>
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[1000px]">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="md:col-span-8 relative rounded-[4rem] overflow-hidden group shadow-editorial"
           >
              <Image src="/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/infrastructure_science_lab_modern_1776862645820.png" alt="Science Lab" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors" />
              <div className="absolute bottom-12 left-12">
                 <span className="text-label text-white mb-2 block">Innovation</span>
                 <h4 className="text-4xl font-black text-white italic font-serif">Future Labs</h4>
              </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="md:col-span-4 relative rounded-[4rem] overflow-hidden group shadow-editorial"
           >
              <Image src="/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/infrastructure_sports_complex_1776862675235.png" alt="Sports Center" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors" />
              <div className="absolute bottom-12 left-12 px-6">
                 <span className="text-label text-white mb-2 block">Athletics</span>
                 <h4 className="text-4xl font-black text-white italic font-serif">Olympic Complex</h4>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Holistic Foundations - 8 Pillars Redesign */}
      <section className="py-48 bg-neutral-950 relative overflow-hidden rounded-[5rem] mx-4 md:mx-8">
         <div className="absolute inset-0 mesh-gradient opacity-10" />
         <div className="relative z-10 max-w-[1400px] mx-auto px-10">
            <div className="text-center mb-32">
               <span className="text-label text-secondary mb-8 block uppercase">The Core Ecosystem</span>
               <h2 className="text-heading text-white text-6xl md:text-8xl">Holistic Foundations.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               {[
                  { title: "Academic Rigor", desc: "Scientific methods of deep learning.", icon: BookOpen },
                  { title: "Physical Growth", desc: "Olympic standard sports infrastructure.", icon: Zap },
                  { title: "Mental Wellness", desc: "Dedicated psychological counseling wings.", icon: Heart },
                  { title: "Global Outlook", desc: "International exchange and partner programs.", icon: Global },
                  { title: "Tech Savvy", desc: "Advanced STEAM and collaborative innovation labs.", icon: Sparkles },
                  { title: "Arts & Culture", desc: "Professional performing arts and music studios.", icon: Star },
                  { title: "Ethical Values", desc: "Character building and value-based roots.", icon: ShieldCheck },
                  { title: "Social Impact", desc: "Extensive community outreach initiatives.", icon: Users }
               ].map((pillar, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    className="p-12 rounded-[3rem] border border-white/5 transition-all group"
                  >
                     <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all mb-10">
                        {(() => {
                          const PillarIcon = pillar.icon;
                          return <PillarIcon className="w-8 h-8" />;
                        })()}
                     </div>
                     <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{pillar.title}</h4>
                     <p className="text-sm font-medium text-white/50 leading-relaxed">{pillar.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA Section - High Impact */}
      <section className="py-64 bg-white text-center">
         <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
               <h2 className="text-heading text-7xl md:text-[10rem] tracking-tighter mb-16">
                  Join the <br /> <span className="text-primary tracking-[-0.05em]">Elite.</span>
               </h2>
               <p className="text-2xl text-neutral-600 font-medium mb-20 max-w-2xl mx-auto leading-relaxed">
                  Become a part of the academic legacy that has been shaping global leaders for over 30 years.
               </p>
               <Link 
                 href="/admissions"
                 className="inline-flex h-24 px-16 bg-neutral-950 text-white rounded-full items-center justify-center font-black text-2xl shadow-editorial hover:bg-primary transition-all group"
               >
                  Apply Now for &apos;26-27
                  <ArrowRight className="ml-6 w-8 h-8 group-hover:translate-x-2 transition-transform" />
               </Link>
            </motion.div>
         </div>
      </section>
    </div>
  );
}

// Custom Global Icon for Pillar
const Global = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
  </svg>
);