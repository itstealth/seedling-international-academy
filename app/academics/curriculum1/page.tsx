"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Target,
  Globe,
  Lightbulb,
  Award,
  Users,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  BrainCircuit,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const curriculumTabs = [
  {
    id: "primary",
    label: "Joyride (Primary)",
    title: "Foundation of Wonder",
    description: "Our Primary curriculum is designed as a 'Joyride'—a period of discovery where emotional intelligence and curiosity are nurtured alongside core academic skills.",
    image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/about_page_hero_1776857790049.png",
    features: [
      { title: "Personalized Journeys", desc: "Tailored learning paths that respect each child's pace.", icon: Target },
      { title: "Happy School Initiative", desc: "Prioritizing well-being and emotional growth.", icon: Sparkles },
      { title: "Inquiry-Based Learning", desc: "Fostering 'The Why' before 'The What'.", icon: Lightbulb },
      { title: "Literacy & Numeracy", desc: "Strong foundations in core academic pillars.", icon: BookOpen }
    ],
    highlight: "Emphasizing the Joy of Discovery over the Pressure of Performance."
  },
  {
    id: "middle",
    label: "Middle School (CBSE)",
    title: "The Skill Forge",
    description: "As students move into Middle School, we introduce greater academic rigor integrated with future-ready skills like AI, Ethics, and Sustainability.",
    image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/infrastructure_science_lab_modern_1776862645820.png",
    features: [
      { title: "Critical Thinking", desc: "Moving from rote learning to analytical problem solving.", icon: BrainCircuit },
      { title: "Digital Citizenship", desc: "Integrating technology with ethical usage.", icon: ShieldCheck },
      { title: "Social Impact", desc: "Project-based learning focused on sustainability.", icon: Globe },
      { title: "Holistic Arts", desc: "Balance of sports, music, and creative expression.", icon: Users }
    ],
    highlight: "Preparing students for a complex, globalized world with strong ethical roots."
  },
  {
    id: "senior",
    label: "Global Pathway (SIA)",
    title: "Excellence Without Borders",
    description: "Our Cambridge (SIA) curriculum is designed for students seeking a global competitive edge, fostering the internationally recognized Cambridge Learner Profile.",
    image: "/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/infrastructure_sports_complex_1776862675235.png",
    features: [
      { title: "Cambridge Learner Profile", desc: "Fostering students who are Confident and Reflective.", icon: Award },
      { title: "International Standards", desc: "Globally recognized CAIE curriculum framework.", icon: Globe },
      { title: "University Readiness", desc: "Advanced placement preparatory skills and mentorship.", icon: GraduationCap },
      { title: "Innovative Research", desc: "Independent research projects and global perspectives.", icon: Lightbulb }
    ],
    highlight: "Building world-ready citizens with the confidence to lead across cultures."
  }
];

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState("primary");
  const activeContent = curriculumTabs.find(t => t.id === activeTab)!;

  return (
    <div className="bg-neutral-bg min-h-screen pt-32 overflow-x-hidden">

      {/* Editorial Hero */}
      <section className="py-48 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <span className="text-label mb-8 block">Academic Excellence</span>
          <h1 className="text-heading text-6xl md:text-[10rem] mb-20 tracking-tight">
            The Learning <br />
            <span className="text-primary italic">Framework.</span>
          </h1>
          <div className="relative h-[600px] rounded-[5rem] overflow-hidden shadow-editorial mx-auto max-w-6xl group">
            <Image
              src="/home/danish/.gemini/antigravity/brain/88d0f26c-c4e1-47fe-80fd-53d2a15a8882/academics_curriculum_hero_1776861119845.png"
              alt="Library and Learning"
              fill
              className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
          </div>
        </motion.div>
      </section>

      {/* Interactive Tabs Dashboard */}
      <section className="py-48 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">

          {/* Sidebar Tabs - Modernized */}
          <div className="w-full lg:w-[400px] space-y-6 lg:sticky lg:top-40">
            <span className="text-label opacity-40 mb-10 block pl-6">Core Pathways</span>
            {curriculumTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full group relative flex items-center justify-between p-8 rounded-[2.5rem] transition-all duration-700 text-left overflow-hidden ${activeTab === tab.id
                    ? "bg-neutral-950 text-white shadow- editorial"
                    : "bg-white text-neutral-600 hover:shadow-xl border border-black/5"
                  }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tabBackground"
                    className="absolute inset-0 bg-primary/20 backdrop-blur-xl"
                  />
                )}
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full transition-colors ${activeTab === tab.id ? 'bg-secondary' : 'bg-black/10'}`} />
                  <span className="text-xl font-black tracking-tight">{tab.label}</span>
                </div>
                <ChevronRight className={`relative z-10 w-6 h-6 transition-all duration-500 ${activeTab === tab.id ? "rotate-90 text-primary" : "opacity-30 group-hover:translate-x-1"}`} />
              </button>
            ))}
          </div>

          {/* Tab Content - Enhanced with Imagery */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="bg-white rounded-[5rem] border border-black/3 shadow-editorial relative overflow-hidden"
              >
                {/* Floating Big Index Text */}
                <div className="absolute top-0 right-0 p-20 text-[20rem] font-black text-black/[0.02] select-none pointer-events-none italic font-serif leading-none">
                  {activeContent.id[0]}
                </div>

                <div className="relative z-10">
                  {/* Feature Image Header */}
                  <div className="h-[400px] relative">
                    <Image src={activeContent.image} alt={activeContent.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-b from-white to-transparent h-32" />
                    <div className="absolute inset-0 bg-linear-to-t from-white to-transparent min-h-[100px] bottom-0" />
                  </div>

                  <div className="p-16 md:p-24 pt-0 -mt-20 relative z-20">
                    <span className="text-label mb-6 block">Educational Path</span>
                    <h3 className="text-heading text-4xl md:text-5xl mb-12">
                      {activeContent.title}
                    </h3>
                    <p className="text-2xl text-neutral-600 font-medium leading-relaxed mb-20 max-w-2xl">
                      {activeContent.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                      {activeContent.features.map((feature, i) => (
                        <div key={i} className="flex gap-8 group">
                          <div className="shrink-0 w-20 h-20 rounded-[1.5rem] bg-neutral-50 shadow-inner flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700">
                            {(() => {
                              const Icon = feature.icon;
                              return <Icon className="w-8 h-8" />;
                            })()}
                          </div>
                          <div>
                            <h4 className="text-xl font-black text-neutral-950 mb-3 tracking-tight">{feature.title}</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed font-medium">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="glass-primary p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-12 group">
                      <div className="space-y-4 max-w-md">
                        <div className="w-12 h-12 rounded-full glass-white flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-2xl font-serif italic text-white/90 leading-tight">
                          &quot;{activeContent.highlight}&quot;
                        </p>
                      </div>
                      <Link
                        href="/contact-us"
                        className="px-12 py-6 bg-white text-neutral-950 font-black rounded-3xl hover:scale-105 transition-all shadow-2xl whitespace-nowrap text-lg flex items-center gap-4"
                      >
                        Official Inquiry <ArrowRight className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Philosophical Balance Grid */}
      <section className="py-64 bg-neutral-950 relative overflow-hidden rounded-[6rem] mx-4 md:mx-8">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
            <div className="max-w-2xl">
              <span className="text-label text-secondary mb-8 block uppercase">The seed of wisdom</span>
              <h2 className="text-heading text-white text-6xl md:text-9xl tracking-tight">The Balanced <br /> Learning Tree.</h2>
            </div>
            <p className="text-xl text-white/50 max-w-md font-medium leading-relaxed pb-6 border-b border-white/10">
              We don&apos;t just teach subjects; we inspire students to live with purpose, integrity, and a lifelong thirst for knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Academic Rigor", desc: "Multi-disciplinary methods that ensure deep, cross-functional comprehension." },
              { title: "Physical Growth", desc: "World-class sports infrastructure that nurtures olympic-standard health." },
              { title: "Ethical Roots", desc: "Character building sessions from early years to senior secondary levels." }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -20, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="bg-white/5 backdrop-blur-3xl p-16 rounded-[4rem] border border-white/10 shadow-editorial group transition-all duration-700"
              >
                <div className="w-20 h-20 rounded-full bg-white/5 text-primary flex items-center justify-center mb-10 font-black text-3xl shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                  0{i + 1}
                </div>
                <h4 className="text-3xl font-black text-white mb-6 tracking-tight">{card.title}</h4>
                <p className="text-white/40 font-medium leading-relaxed uppercase text-[10px] tracking-[0.3em]">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-64 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading text-7xl md:text-[10rem] mb-16">
              Forge <br /> <span className="text-primary tracking-tighter">Your Path.</span>
            </h2>
            <Link
              href="/admissions"
              className="inline-flex h-24 px-16 bg-neutral-950 text-white rounded-full items-center justify-center font-black text-2xl shadow-editorial hover:bg-primary transition-all group"
            >
              Secure Placement 2026
              <ArrowRight className="ml-6 w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
