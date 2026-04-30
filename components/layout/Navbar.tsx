"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "School Life", href: "/school-life" },
  { name: "Campus", href: "/campus-highlights" },
  { name: "Admissions", href: "/admissions" },
  { name: "Career", href: "/career" },
  { name: "Alumni", href: "/alumni" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-linear-to-r from-navy via-crimson to-navy origin-left z-[60]"
        style={{ scaleX }}
      />

      <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5 transition-all duration-300`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <nav className="relative py-3">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center gap-4 group">
                  <Image 
                    src="/SPS_Logo.png" 
                    alt="Seedling Schools Logo" 
                    width={200} 
                    height={60} 
                    className="h-14 w-auto object-contain"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-2.5 py-2 text-[13px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${pathname === item.href ? "text-navy" : "text-text-base hover:text-navy"}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden xl:flex items-center gap-4">
                <Link
                  href="/admissions"
                  className="px-5 py-3 font-black text-[12px] rounded-full transition-all shadow-lg hover:shadow-crimson/30 active:scale-95 whitespace-nowrap flex-shrink-0 bg-crimson text-white hover:bg-crimson-dark uppercase tracking-widest"
                >
                  Apply Now &apos;26
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(true)}
                  className="p-2.5 rounded-xl bg-navy-light/50 text-navy-deeper transition-colors hover:bg-navy-light"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-navy-deeper/40 backdrop-blur-md xl:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-[400px] bg-white xl:hidden overflow-hidden flex flex-col rounded-l-[3.5rem] shadow-editorial"
            >
              <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
              
              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center justify-between p-8 border-b border-black/5">
                  <div className="flex items-center gap-4">
                    <Image 
                      src="/SPS_Logo.png" 
                      alt="Seedling Schools Logo" 
                      width={160} 
                      height={48} 
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-3 text-text-light hover:text-navy-deeper transition-colors bg-navy-light/50 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-10">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`py-5 text-xl font-black uppercase tracking-widest ${pathname === item.href ? "text-navy" : "text-navy-deeper"}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="p-10 bg-off-white border-t border-black/5 mt-auto">
                   <Link
                    href="/admissions"
                    onClick={() => setIsOpen(false)}
                    className="flex justify-center items-center gap-4 w-full h-20 bg-navy-deeper text-white font-black text-xl rounded-3xl shadow-editorial hover:bg-navy transition-all uppercase tracking-widest"
                  >
                    Apply Now 2026
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
