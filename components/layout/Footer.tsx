import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Instagram, Facebook, Twitter, Linkedin } from "@/components/icons/BrandIcons";

export default function Footer() {
  return (
    <footer className="bg-[#060e1c] border-t border-white/10 relative overflow-hidden">
      {/* Subtle mesh decoration */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] mesh-gradient opacity-[0.05] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-14 md:pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-8">

          {/* Column 1: Brand */}
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-center">
              <img
                src="/SPS_Logo.png"
                alt="Seedling Schools Logo"
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-xl leading-relaxed text-white/60 font-medium max-w-lg font-dm">
              Dedicated to academic excellence and holistic growth since 1993. We empower the next generation of global leaders with curiosity, character, and competence.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="w-14 h-14 rounded-2xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-navy-deeper hover:shadow-lg transition-all duration-500">
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Overview */}
          <div className="lg:col-span-2 space-y-10">
            <h3 className="text-crimson font-black text-xs tracking-[0.3em] uppercase block border-b border-white/10 pb-4">Quick Overview</h3>
            <ul className="space-y-6">
              {['Policies', 'Mandatory Disclosures', 'Brochure', 'ERP Login', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="group flex items-center text-sm font-black text-white/60 hover:text-white transition-colors font-dm">
                    <MoveRight className="w-5 h-5 mr-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500 text-sand" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutions */}
          <div className="lg:col-span-3 space-y-10">
            <h3 className="text-crimson font-black text-xs tracking-[0.3em] uppercase block border-b border-white/10 pb-4">Our Institutions</h3>
            <div className="space-y-6">
              {[
                { name: 'Seedling Public School', loc: 'Jawahar Nagar' },
                { name: 'Seedling International Academy', loc: 'Cambridge Pathway' },
                { name: 'The Kiderworld', loc: 'Pre-Primary' }
              ].map((school) => (
                <div key={school.name} className="group cursor-default">
                  <span className="block text-sm font-black text-white/80 group-hover:text-sand transition-colors">{school.name}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">{school.loc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-2 space-y-10">
            <h3 className="text-crimson font-black text-xs tracking-[0.3em] uppercase block border-b border-white/10 pb-4">Contact</h3>
            <div className="space-y-8">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">General Inquiry</span>
                <a href="mailto:info@seedlingschools.com" className="text-sm font-black text-white/80 hover:text-sand transition-colors">info@seedling.com</a>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">Admission Helpline</span>
                <a href="tel:+911412654395" className="text-sm font-black text-white/80 hover:text-sand transition-colors">+91 141 265 4395</a>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 block">Visit Us</span>
                <p className="text-sm font-black text-white/80 leading-snug">Jawahar Nagar, Jaipur</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="md:pt-6 pt-4 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center font-black text-sand">©</div>
            <p className="text-sm font-black text-white/40">
              {new Date().getFullYear()} Seedling Group of Schools. <br />
              <span className="text-[10px] uppercase tracking-widest">Architected for Future Leaders.</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            <Link href="/privacy-policy" className="text-xs font-black uppercase tracking-[0.2em] text-white/40 hover:text-sand transition-colors">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs font-black uppercase tracking-[0.2em] text-white/40 hover:text-sand transition-colors">
              Policies
            </Link>
            <Link href="/mandatory-disclosure" className="text-xs font-black uppercase tracking-[0.2em] text-white/40 hover:text-sand transition-colors">
              Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
