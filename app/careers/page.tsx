"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { Briefcase, Heart, Sparkles, GraduationCap, ArrowRight, MapPin, Clock, Search } from "lucide-react";

const positions = [
  { title: "Primary Teacher (All Subjects)", type: "Full-time", location: "Jawahar Nagar Campus", category: "Academic" },
  { title: "PGT Mathematics (CBSE)", type: "Full-time", location: "Durgapura Campus", category: "Academic" },
  { title: "Admission Counselor", type: "Full-time", location: "Central Office", category: "Administrative" },
  { title: "Marketing Executive", type: "Full-time", location: "Central Office", category: "Administrative" },
  { title: "Activity Coordinator", type: "Part-time", location: "All Branches", category: "Co-curricular" },
  { title: "School Librarian", type: "Full-time", location: "SIA Campus", category: "Support Staff" },
];

export default function CareerPage() {
  return (
    <main className="bg-neutral-bg min-h-screen">
      <PageHero 
        title="Careers"
        subtitle="Shape the future with us. Join a community of visionary educators and professionals dedicated to excellence."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
      />

      {/* Philosophy Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-label mb-8 block uppercase tracking-[0.3em]">Work Culture</span>
            <h2 className="text-heading text-6xl md:text-8xl mb-12">More Than Just <br /> <span className="text-primary italic">A Job.</span></h2>
            <p className="text-xl text-neutral-600 font-medium leading-relaxed mb-12">
              At Seedling, we don't just hire employees; we welcome partners in our mission to nurture the next generation. We provide an environment where innovation is encouraged and excellence is celebrated.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Sparkles, title: "Growth Mindset", desc: "Continuous professional development and learning opportunities." },
                { icon: Heart, title: "Supportive Team", desc: "A collaborative environment where every voice matters." },
                { icon: GraduationCap, title: "Academic Freedom", desc: "Empowering educators to experiment with modern pedagogy." },
                { icon: Briefcase, title: "Global Network", desc: "Exposure to international standards and collaborative programs." }
              ].map((benefit, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-neutral-950 tracking-tight">{benefit.title}</h4>
                  <p className="text-sm text-neutral-500 font-medium leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[800px] rounded-[5rem] overflow-hidden shadow-editorial"
          >
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80" 
              alt="Seedling Faculty" 
              className="object-cover w-full h-full transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10" />
            <div className="absolute bottom-20 left-20 right-20 bg-white/10 backdrop-blur-2xl p-12 rounded-[3rem] border border-white/20 text-white">
              <p className="serif italic text-3xl font-light leading-tight mb-6">
                "Being a part of Seedling has allowed me to truly explore my potential as an educator."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-black">M</div>
                <div>
                  <p className="font-black tracking-tight">Maya Sharma</p>
                  <p className="text-xs font-medium text-white/60">Senior Mentor · 8 Years</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Job Listings */}
        <div className="text-center mb-24">
          <span className="text-label mb-8 block uppercase">Available Opportunities</span>
          <h2 className="text-heading text-6xl md:text-8xl">Join Our Team.</h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Search/Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search positions..." 
                className="w-full h-16 pl-16 pr-8 rounded-full bg-white border border-black/5 shadow-sm focus:ring-2 focus:ring-primary focus:outline-hidden transition-all font-medium"
              />
            </div>
            <select className="h-16 px-10 rounded-full bg-white border border-black/5 shadow-sm focus:outline-hidden font-black text-sm uppercase tracking-widest text-neutral-600 appearance-none cursor-pointer">
              <option>All Departments</option>
              <option>Academic</option>
              <option>Administrative</option>
            </select>
          </div>

          {positions.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white p-8 md:p-12 rounded-[3rem] border border-black/5 hover:border-primary/20 hover:shadow-editorial transition-all duration-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            >
              <div className="space-y-4">
                <span className="text-label text-neutral-300 text-[10px]">{job.category}</span>
                <h3 className="text-2xl md:text-3xl font-black text-neutral-950 tracking-tighter group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-sm font-black text-neutral-500">
                    <MapPin className="w-4 h-4 text-secondary" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-black text-neutral-500">
                    <Clock className="w-4 h-4 text-secondary" />
                    {job.type}
                  </div>
                </div>
              </div>
              
              <button className="h-16 px-10 bg-neutral-950 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary transition-all flex items-center gap-3">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 text-center bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-heading text-6xl md:text-[8rem] mb-12 leading-tight">
            Nothing Fits <br /> <span className="text-secondary italic font-serif tracking-tighter">Right Now?</span>
          </h2>
          <p className="text-xl text-neutral-500 font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
            Drop your CV in our talent pool, and we'll reach out when a position that matches your expertise opens up.
          </p>
          <button className="h-24 px-16 bg-neutral-950 text-white rounded-full font-black text-2xl shadow-editorial hover:bg-primary transition-all group">
            Upload CV to Talent Pool
            <ArrowRight className="ml-6 w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}
