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
  { name: "Campus Highlights", href: "/campus-highlights" },
  { name: "Admissions", href: "/admissions" },
  { name: "Career", href: "/career" },
  { name: "Alumni", href: "/alumni" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
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
        className="fixed top-0 left-0 right-0 h-[3px] bg-linear-to-r from-primary via-secondary to-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-black/5 transition-all">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <nav className="relative py-3">
            <div className="flex items-center justify-between h-14 md:h-16">
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
              <nav className="hidden xl:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2.5 text-[14px] font-bold transition-all whitespace-nowrap ${pathname === item.href ? "text-primary" : "text-neutral-700 hover:text-primary"}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden xl:flex items-center gap-4">
                <Link
                  href="/admissions"
                  className="px-6 py-3 font-bold text-sm rounded-md transition-all shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap flex-shrink-0 bg-primary text-white hover:bg-primary/90"
                >
                  Apply Now &apos;26
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(true)}
                  className="p-2 rounded-lg bg-neutral-100 text-neutral-900 transition-colors hover:bg-neutral-200"
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
              className="fixed inset-0 z-50 bg-neutral-950/40 backdrop-blur-md xl:hidden"
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
                    className="p-3 text-neutral-500 hover:text-neutral-950 transition-colors bg-neutral-100 rounded-full"
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
                        className={`py-5 text-xl font-black ${pathname === item.href ? "text-primary" : "text-neutral-950"}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="p-10 bg-neutral-50 border-t border-black/5 mt-auto">
                   <Link
                    href="/admissions"
                    onClick={() => setIsOpen(false)}
                    className="flex justify-center items-center gap-4 w-full h-20 bg-neutral-950 text-white font-black text-xl rounded-3xl shadow-editorial hover:bg-primary transition-all"
                  >
                    Apply for Admission 2026
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
