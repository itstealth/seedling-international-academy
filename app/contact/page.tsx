"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import { Mail, Phone, MapPin, Clock, Send, Globe2, PhoneCall, ArrowRight } from "lucide-react";

const branches = [
  {
    name: "SPS & SIA",
    fullName: "Seedling Public School & International Academy",
    address: "Bank St, Sector 4, Jawahar Nagar, Jaipur, Rajasthan 302004",
    phone: ["+91 74130 12351", "+91 93140 60431"],
    email: "seedlingacademy@hotmail.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.851219661132!2d75.82361661504353!3d26.8447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db66432029759%3A0xc3f9821814e5b38a!2sSeedling%20Public%20School!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
  },
  {
    name: "SMHS & SMIA",
    fullName: "Seedling Modern High School & International Academy",
    address: "Ashok Marg, Mahaveer Nagar II, Durgapura, Jaipur, Rajasthan 302018",
    phone: ["+91 95877 72837", "+91 93512 88083"],
    email: "smhsjaipur@jnujaipur.ac.in",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.425829661132!2d75.79061661504353!3d26.8347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dc32029759%3A0xc3f9821814e5b38a!2sSeedling%20Modern%20High%20School!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
  }
];

export default function ContactUsPage() {
  return (
    <main className="bg-neutral-bg min-h-screen">
      <PageHero 
        title="Contact Us"
        subtitle="We're here to listen and help. Reach out to any of our campuses for inquiries, visits, or support."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80"
      />

      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          
          {/* Quick Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-neutral-950 p-12 md:p-16 rounded-[4rem] text-white space-y-12 shadow-editorial relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="relative z-10">
                <span className="text-label text-secondary mb-10 block uppercase tracking-[0.4em]">Get in touch</span>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 italic font-serif">Central Support.</h3>
                
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Call Us</p>
                      <p className="text-xl font-black tracking-tight">+91 74130 12351</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Email Us</p>
                      <p className="text-lg font-black tracking-tight leading-none">seedlingacademy@hotmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Office Hours</p>
                      <p className="text-xl font-black tracking-tight">8:30 AM - 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-black/5 shadow-sm space-y-8">
              <Globe2 className="text-primary w-12 h-12" />
              <h4 className="text-3xl font-black text-neutral-950 tracking-tighter">Global Reach.</h4>
              <p className="text-neutral-500 font-medium leading-relaxed">
                Connect with our international coordinator for Cambridge curriculum and student exchange inquiries.
              </p>
              <button className="flex items-center gap-3 font-black text-primary hover:text-secondary transition-colors text-sm uppercase tracking-widest">
                International Helpdesk <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-editorial border border-black/5 relative overflow-hidden">
              <div className="absolute inset-0 mesh-gradient opacity-5 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-4xl md:text-6xl font-black text-neutral-950 mb-12 tracking-tighter">Send a Message.</h3>
                
                <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-2">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full h-20 px-8 rounded-3xl bg-neutral-50 border-none focus:ring-2 focus:ring-primary transition-all font-medium text-lg" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-2">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full h-20 px-8 rounded-3xl bg-neutral-50 border-none focus:ring-2 focus:ring-primary transition-all font-medium text-lg" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-2">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full h-20 px-8 rounded-3xl bg-neutral-50 border-none focus:ring-2 focus:ring-primary transition-all font-medium text-lg" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-2">Inquiry Type</label>
                    <select className="w-full h-20 px-8 rounded-3xl bg-neutral-50 border-none focus:ring-2 focus:ring-primary transition-all font-black text-sm uppercase tracking-widest text-neutral-600 appearance-none">
                      <option>Admission Inquiry</option>
                      <option>General Feedback</option>
                      <option>Career Opportunity</option>
                      <option>Collaboration</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-2">Your Message</label>
                    <textarea rows={5} placeholder="How can we help you today?" className="w-full p-8 rounded-[2.5rem] bg-neutral-50 border-none focus:ring-2 focus:ring-primary transition-all font-medium text-lg"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-6">
                    <button className="h-24 px-16 bg-neutral-950 text-white rounded-full font-black text-2xl shadow-editorial hover:bg-primary transition-all group flex items-center gap-6">
                      Send Inquiry
                      <Send className="w-7 h-7 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="mt-48 space-y-32">
          <div className="text-center mb-24">
            <span className="text-label mb-8 block uppercase">Find Us in Jaipur</span>
            <h2 className="text-heading text-6xl md:text-9xl tracking-tighter">Our Campuses.</h2>
          </div>

          {branches.map((branch, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}
            >
              {/* Branch Details */}
              <div className="flex-1 space-y-12">
                <div>
                  <span className="text-label mb-6 block uppercase tracking-[0.3em]">{branch.fullName}</span>
                  <h3 className="text-4xl md:text-6xl font-black text-neutral-950 tracking-tighter leading-tight">{branch.name}</h3>
                </div>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg text-neutral-600 font-medium leading-relaxed pt-2">{branch.address}</p>
                  </div>
                  
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1 pt-2">
                      {branch.phone.map((p, pi) => (
                        <p key={pi} className="text-lg text-neutral-950 font-black tracking-tight">{p}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-black/5">
                   <button className="h-16 px-10 border-2 border-neutral-950 rounded-full font-black text-sm uppercase tracking-widest hover:bg-neutral-950 hover:text-white transition-all flex items-center gap-3">
                      Get Directions
                      <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              </div>

              {/* Map Embed */}
              <div className="flex-1 w-full h-[500px] rounded-[4rem] overflow-hidden shadow-editorial border border-black/5 grayscale group hover:grayscale-0 transition-all duration-1000">
                <iframe 
                  src={branch.map} 
                  className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-all duration-1000"
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
