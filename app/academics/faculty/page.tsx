"use client";

import { motion } from "framer-motion";
import HeroWrapper from "@/components/layout/HeroWrapper";
import {
  Users,
  Award,
  BookOpen,
  Star,
  Mail,
  Globe,
  ChevronRight,
  ShieldCheck,
  Zap,
  GraduationCap,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const leadership = [
  { 
    name: "Late Ms. Mohini Bakshi", 
    role: "Founder", 
    quote: "Education at Cambridge International School is about nurturing the unique spark within every child.",
    image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/leadership_md_portrait_professional_1776862565387.png",
    initials: "MB"
  },
  { 
    name: "Dr. Sandeep Bakshi", 
    role: "Director", 
    quote: "Our mission is to bridge the gap between traditional values and global innovative thinking.",
    image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/leadership_ceo_portrait_professional_1776862587847.png",
    initials: "SB"
  },
  { 
    name: "Dr. Preeti Bakshi", 
    role: "Executive Director", 
    quote: "We aim at wisdom and comprehension, nurturing excellence in every child.",
    image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/leadership_principal_portrait_1776862613820.png",
    initials: "PB"
  },
  { 
    name: "Ms. Akansha Bakshi", 
    role: "Director", 
    quote: "Innovation and creativity are at the heart of our educational approach.",
    image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/about_page_hero_1776857790049.png", 
    initials: "AB"
  }
];

const facultyStats = [
  { label: "Total Staff", value: "250+", icon: Users },
  { label: "Post Graduate (PGT)", value: "85+", icon: GraduationCap },
  { label: "Trained Graduate (TGT)", value: "110+", icon: Award },
  { label: "Primary (PRT)", value: "55+", icon: BookOpen }
];

const departments = [
  { 
    name: "Science & Innovation", 
    leads: ["Mrs. Shruti Rathore", "Mrs. Anita Sharma"], 
    image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/infrastructure_science_lab_modern_1776862645820.png"
  },
  { 
    name: "Mathematics", 
    leads: ["Mr. Rajesh Gupta", "Mrs. Neha Singh"],
    image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/homepage_seedling_world_1776857779231.png"
  },
  { 
    name: "Languages & Humanities", 
    leads: ["Mrs. Kavita Iyer", "Mr. Amit Verma"],
    image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/about_page_hero_1776857790049.png"
  },
  { 
    name: "Sports & Physical Ed", 
    leads: ["Mr. Vikram Singh", "Mrs. Sunita Devi"],
    image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/infrastructure_sports_complex_1776862675235.png"
  }
];

export default function FacultyPage() {
  return (
    <div className="bg-neutral-bg min-h-screen pt-32 overflow-x-hidden">
      <HeroWrapper
        backgroundImage="/assets/img/sps-banner.jpg"
        title="Faculty"
        badge="Our Educators"
        breadcrumbs={[{ label: "Faculty" }]}
      />

      {/* Leadership: Portrait Focused Section */}
      <section className="pt-16 pb-10 bg-white border-y border-black/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
             <span className="text-label mb-8 block uppercase">Visionaries</span>
             <h2 className="text-heading text-6xl md:text-9xl">School Governance.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {leadership.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-neutral-50 rounded-[4rem] overflow-hidden border border-black/5 transition-all duration-700 hover:shadow-editorial"
              >
                 <div className="flex flex-col md:flex-row h-full">
                    {/* Portrait */}
                    <div className="w-full md:w-[45%] h-[400px] md:h-full relative overflow-hidden">
                       <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-all" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-12 md:p-16 flex flex-col justify-between">
                       <div className="relative">
                          <div className="absolute top-0 right-0 p-4 text-7xl font-black text-black/[0.03] select-none pointer-events-none italic font-serif">
                             {member.initials}
                          </div>
                          <span className="text-label text-secondary mb-4 block uppercase font-black">{member.role}</span>
                          <h3 className="text-4xl font-black text-neutral-950 mb-8 tracking-tighter">{member.name}</h3>
                          <p className="text-xl text-neutral-500 font-serif italic leading-relaxed mb-10">
                             &quot;{member.quote}&quot;
                          </p>
                       </div>
                       <div className="flex gap-4 pt-10 border-t border-black/5">
                          <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                             <Globe className="w-5 h-5" />
                          </button>
                          <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                             <Mail className="w-5 h-5" />
                          </button>
                       </div>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Statistics: Modern Dashboard */}
      <section className="pt-16 pb-10 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facultyStats.map((stat, i) => (
               <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[3rem] border border-black/5 flex flex-col items-center text-center group hover:bg-primary transition-all duration-700 shadow-editorial"
               >
                  <div className="w-16 h-16 rounded-2xl bg-neutral-50 flex items-center justify-center text-primary mb-6 group-hover:bg-white/10 group-hover:text-white transition-all shadow-inner">
                     {(() => {
                       const Icon = stat.icon;
                       return <Icon className="w-8 h-8" />;
                     })()}
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-neutral-950 mb-2 tracking-tighter group-hover:text-white transition-all">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 group-hover:text-white/60 transition-all">{stat.label}</div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* Departments Gallery: Large Format Cards */}
      <section className="pt-16 pb-10 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
         <div className="text-center mb-32">
            <span className="text-label mb-8 block uppercase">Academic Excellence</span>
            <h2 className="text-heading text-6xl md:text-[10rem]">Department Leads.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {departments.map((dept, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[700px] rounded-[5rem] overflow-hidden shadow-editorial transition-all duration-700"
              >
                  <Image src={dept.image} alt={dept.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/60 transition-colors duration-700" />
                  
                  <div className="absolute inset-0 p-20 flex flex-col justify-end text-white">
                     <div className="flex justify-between items-start mb-10">
                        <div>
                           <span className="text-xs font-black tracking-[0.4em] uppercase text-secondary mb-4 block">Meet the experts</span>
                           <h4 className="text-5xl font-black tracking-tighter italic font-serif h-auto">{dept.name}</h4>
                        </div>
                        <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                           <BookOpen className="w-10 h-10 text-white" />
                        </div>
                     </div>
                     <div className="space-y-6">
                        {dept.leads.map((lead, j) => (
                          <div key={j} className="flex items-center justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-primary/40 hover:border-primary/50 transition-all cursor-default">
                             <div className="flex items-center gap-6">
                                <div className="w-3 h-3 rounded-full bg-secondary" />
                                <span className="text-2xl font-black text-white">{lead}</span>
                             </div>
                             <ChevronRight className="w-8 h-8 text-white/30" />
                          </div>
                        ))}
                     </div>
                  </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* CTA: Join the best */}
      <section className="py-64 bg-neutral-950 relative overflow-hidden rounded-[6rem] mx-4 md:mx-8">
         <div className="absolute inset-0 mesh-gradient opacity-10" />
         <div className="relative z-10 max-w-4xl mx-auto text-center px-10">
            <Sparkles className="w-20 h-20 text-secondary mx-auto mb-12 opacity-50" />
            <h2 className="text-heading text-white text-6xl md:text-[8rem] mb-16">
               Learn from <br /> <span className="text-primary tracking-tighter">The Best.</span>
            </h2>
            <p className="text-2xl text-white/50 font-medium mb-20 leading-relaxed max-w-2xl mx-auto">
               Our faculty consists of experienced educators who are passionate about nurturing the next generation of global citizens.
            </p>
            <Link 
               href="/contact-us"
               className="inline-flex h-24 px-16 bg-white text-neutral-950 rounded-full items-center justify-center font-black text-2xl shadow-editorial hover:bg-primary hover:text-white transition-all group"
            >
               Connect with Mentors
               <ArrowRight className="ml-6 w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
         </div>
      </section>

    </div>
  );
}
