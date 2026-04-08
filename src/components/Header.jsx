import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../data/constants';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#041b14]/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent py-2'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-[0_0_15px_rgba(255,255,255,0.2)] ring-1 ring-white/20">
              <img
                src="/feza-logo.png"
                alt="Feza Creative Agency Logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-black font-bold text-xl">F</span>';
                }}
              />
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-wide md:text-xl">
                FEZA <span className="text-yellow-400">CREATIVE</span>
              </h1>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-green-300/90 font-medium">
                Creative Agency
              </p>
            </div>
          </motion.div>

          <nav className="hidden gap-8 text-sm font-medium text-white/85 lg:flex">
            {navItems.map((item, i) => (
              <motion.a
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-yellow-300"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-2.5 text-sm font-bold text-[#041b14] shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]"
          >
            Get Started
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white/90 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#041b14]/95 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col justify-between lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-xl">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-white/90 transition-colors hover:text-yellow-400 border-b border-white/5 pb-4"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-2xl bg-yellow-400 px-6 py-4 text-base font-bold text-[#041b14]"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
