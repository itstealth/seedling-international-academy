import Link from "next/link";
import { Download, MoveRight, ArrowUp } from "lucide-react";
import { Instagram, Facebook, Linkedin, Youtube } from "@/components/icons/BrandIcons";

export default function Footer() {
  const brochureHref = "/assets/SPS%20(Cambridge)%20PROSPECTUS.pdf";

  return (
    <section className="bg-white font-dmSans">
      <div className="px-4 sm:px-6 lg:px-10 pt-8 sm:pt-10">
        {/* Main Black Footer Area */}
        <div className="bg-[#060e1c] rounded-t-3xl pt-20 pb-10 px-6 md:px-12 text-white relative overflow-hidden">
          {/* Subtle mesh decoration */}
          <div className="absolute top-0 right-0 w-[60%] h-[60%] mesh-gradient opacity-[0.05] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-6 gap-y-8 pb-4">
              {/* Column 1: Brand */}
              <div className="col-span-2 md:col-span-3 lg:col-span-3 space-y-5">
                <p className="text-sm leading-relaxed text-white/60 font-medium max-w-lg font-dm hidden md:block">
                  Dedicated to academic excellence and holistic growth since 1993. We empower the next generation of global leaders with curiosity, character, and competence.
                </p>
                <div className="flex gap-2.5">
                  <a
                    href="https://www.instagram.com/seedlinginternational/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                  >
                    <Instagram className="size-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/seedlinginternationalacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                  >
                    <Facebook className="size-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/@seedlinginternationalacade1802"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                  >
                    <Youtube className="size-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/seedling-international-academy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 rounded-xl border border-white/15 flex items-center justify-center text-white/50 hover:bg-white hover:text-[#060e1c] transition-all duration-500"
                  >
                    <Linkedin className="size-4" />
                  </a>
                </div>
              </div>

              {/* Column 2: Quick Overview */}
              <div className="lg:col-span-2 space-y-5 min-w-0">
                <h3 className="text-crimson font-black text-[10px] tracking-[0.3em] uppercase block border-b border-white/10 pb-3">Quick Overview</h3>
                <ul className="space-y-4">
                  {['Blog', 'Policies', 'Mandatory Disclosures', 'ERP Login', 'Terms & Conditions'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="group flex items-center text-xs font-black text-white/60 hover:text-white transition-colors font-dm">
                        <MoveRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500 text-sand flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href={brochureHref}
                      download
                      className="group flex items-center text-xs font-black text-white/60 hover:text-white transition-colors font-dm"
                    >
                      <Download className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500 text-sand flex-shrink-0" />
                      <span>Download Brochure</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Our Institutions */}
              <div className="lg:col-span-3 space-y-5 min-w-0">
                <h3 className="text-crimson font-black text-[10px] tracking-[0.3em] uppercase block border-b border-white/10 pb-3">Our Institutions</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Seedling Public School (SPS)', loc: 'Jawahar Nagar, Jaipur', link: 'https://sps.seedlingschools.com/' },
                    { name: 'Seedling Modern High School (SMHS)', loc: 'Jawahar Nagar, Jaipur', link: 'https://seedlingschools.com/smhs.php' },
                  ].map((school) => (
                    <div key={school.name} className="group cursor-default">
                      {school.link ? (
                        <a href={school.link} target={school.link.startsWith('http') ? '_blank' : '_self'} rel={school.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="block text-xs font-black text-white/80 hover:text-sand transition-colors break-words">{school.name}</a>
                      ) : (
                        <span className="block text-xs font-black text-white/80 group-hover:text-sand transition-colors break-words">{school.name}</span>
                      )}
                      <span className="text-[9px] uppercase font-bold tracking-widest text-white/40 block mt-1">{school.loc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 4: Location Maps */}
              <div className="lg:col-span-2 space-y-5 min-w-0">
                <h3 className="text-crimson font-black text-[10px] tracking-[0.3em] uppercase block border-b border-white/10 pb-3">Locations</h3>
                <div className="space-y-3">
                  <a
                    href="https://maps.google.com/?q=Seedling+International+Academy+Jawahar+Nagar+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-[172px] rounded-lg overflow-hidden border border-white/10 hover:border-sand/50 transition-colors cursor-pointer"
                  >
                    <iframe
                      src="https://www.google.com/maps?q=Seedling+International+Academy+Jawahar+Nagar+Jaipur&output=embed"
                      width="100%"
                      height="100"
                      className="h-full w-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Seedling International School Jawahar Nagar Jaipur"
                    />
                  </a>
                </div>
              </div>

              {/* Column 5: Contact */}
              <div className="lg:col-span-2 space-y-5 min-w-0">
                <h3 className="text-crimson font-black text-[10px] tracking-[0.3em] uppercase block border-b border-white/10 pb-3">Contact</h3>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40 block">General Inquiry</span>
                    <a href="mail to:seedlingacademy@hotmail.com" className="block text-xs font-black text-white/80 hover:text-sand transition-colors break-all">seedlingacademy@hotmail.com</a>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40 block mt-3">Admission Helpline</span>
                    <a href="tel:+917413012351" className="block text-xs font-black text-white/80 hover:text-sand transition-colors">+91 7413012351</a>
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40 block mt-2">Office Landline</span>
                    <a href="tel:01413623000" className="block text-xs font-black text-white/80 hover:text-sand transition-colors">0141 3623000</a>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40 block">Visit Us</span>
                    <p className="text-xs font-black text-white/80 leading-snug break-words">Jawahar Nagar, Jaipur</p>
                  </div>
                </div>
              </div>
            </div>

            <nav className="border-t border-white/10 py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-xs font-medium text-gray-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
              <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
              <Link href="/news-and-events" className="hover:text-white transition-colors">News & Events</Link>
              <Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link>
            </nav>

            <div className="py-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
              <span className="font-semibold text-sm">Seedling International School</span>
              <span className="text-gray-500 text-xs">
                © 2026 Seedling Group of Schools. All Rights Reserved.
              </span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
              >
                Back to top
                <div className="size-8 bg-white text-black rounded-full flex items-center justify-center">
                  <ArrowUp className="size-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
