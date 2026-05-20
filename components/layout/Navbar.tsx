"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About", href: "/about", dropdown: [
      { name: "About Seedling", href: "/about" },
      { name: "Leadership", href: "/about/leadership" },
    ]
  },
  {
    name: "Academics", href: "/academics", dropdown: [
      { name: "Curriculum", href: "/curriculum" },
      { name: "Result", href: "/result" },
      { name: "Learning Support", href: "/learning-support" },
    ]
  },
  { name: "School Life", href: "/school-life", dropdown: [{ name: "School Life", href: "/school-life" }, { name: "Sports", href: "/sports" },] },
  { name: "News & Events", href: "/news-and-events" },
  { name: "Admissions", href: "/admissions", dropdown: [{ name: "Admissions", href: "/admissions" }, { name: "Transport Facility", href: "/transport-facility" }] },
  { name: "Career", href: "/career" },
  { name: "Alumni", href: "/alumni" },
  { name: "Contact", href: "/contact-us" },
];

const announcements = [
  "Admissions open for 2026–27 Academic Session",
  "Scholarship available for meritorious students in Academics & Sports",
  "Parent counselling available online & offline",
  "Seedling wins State-level inter-school debate championship",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 bg-navy-deeper">
        {/* ── ANNOUNCEMENT TICKER ── */}
        <div className="overflow-hidden h-8 flex items-center border-b border-white/[0.06]">
          <div className="flex items-center gap-0 whitespace-nowrap animate-marquee">
            {[...announcements, ...announcements].map((a, i) => (
              <span key={i} className="inline-flex items-center gap-4 text-[10.5px] font-medium tracking-[0.12em] uppercase text-white/60 px-8">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0 inline-block" />
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* ── MAIN HEADER ── */}
        <header className="bg-navy-deeper">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between h-[68px] gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center gap-4 group">
                  <Image
                    src="/SPS_Logo.png"
                    alt="Seedling Schools Logo"
                    width={200}
                    height={60}
                    className="h-20 w-auto object-contain"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.dropdown ? (
                      <>
                        <button className={`flex items-center gap-1 px-2.5 py-2 text-[13px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${pathname.startsWith(item.href) ? "text-sand" : "text-white/80 hover:text-white"}`}>
                          {item.name}
                          <ChevronDown className="w-3 h-3" />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-navy-deeper/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block px-5 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${pathname === sub.href ? "text-sand" : "text-white/80 hover:text-white hover:bg-white/5"}`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-2.5 py-2 text-[13px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${pathname === item.href ? "text-sand" : "text-white/80 hover:text-white"}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Desktop CTA */}
              {/* <div className="hidden xl:flex items-center gap-4">
                <Link
                  href="/admissions#enquire"
                  className="px-5 py-3 font-black text-[12px] rounded-full transition-all shadow-lg hover:shadow-crimson/30 active:scale-95 whitespace-nowrap flex-shrink-0 bg-crimson text-white hover:bg-crimson-dark uppercase tracking-widest"
                >
                  Apply Now &apos;26
                </Link>
              </div> */}

              {/* Mobile Menu Button */}
              <div className="xl:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(true)}
                  className="p-2.5 rounded-xl bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ── MOBILE NAV EXPANDED ── */}
        <div className={`xl:hidden border-t border-white/[0.06] overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0"}`}>
          <div className="bg-navy-deeper px-6 py-4 space-y-1">
            <div className="flex items-center justify-between pb-2">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/40 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {navItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                    className={`flex-1 py-3 text-[12px] font-semibold tracking-[0.1em] uppercase transition-colors ${pathname === item.href ? "text-white" : "text-white/45"}`}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                      className="p-2 text-white/30"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                        className={`transition-transform ${mobileExpanded === item.name ? "rotate-180" : ""}`}>
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.dropdown && mobileExpanded === item.name && (
                  <div className="ml-4 mb-2 border-l border-white/[0.08] pl-4 space-y-1">
                    {item.dropdown.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                        className="block py-2 text-[11.5px] text-white/35 hover:text-white tracking-wide transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="/admissions"
                className="block w-full text-center py-3 bg-crimson text-white text-[11px] font-bold tracking-[0.15em] uppercase rounded-full"
              >
                Apply Now &apos;26
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}