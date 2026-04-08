import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-radial-gradient from-yellow-400/10 to-transparent blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-radial-gradient from-green-500/10 to-transparent blur-[100px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Text Content */}
          <div className="relative z-10 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-300 backdrop-blur-sm"
            >
              <Sparkles size={14} />
              Graphic Design • Digital Solutions
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
            >
              We turn bold ideas into{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                brands people remember.
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            >
              Feza Creative Agency helps businesses grow through premium branding,
              dynamic design, visual storytelling, and bespoke digital experiences that captivate out in the modern world.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#portfolio"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-yellow-400 px-8 py-3.5 text-base font-bold text-[#041b14] shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:-translate-y-1"
              >
                <span>View Our Work</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right Visual Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="relative z-10 mx-auto w-full max-w-md lg:max-w-full"
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-green-500/30 to-yellow-400/30 blur-2xl opacity-60 pointer-events-none" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a2b21]/80 p-8 shadow-2xl backdrop-blur-xl">
              
              <div className="mb-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="flex h-20 sm:h-24 shrink-0 items-center justify-center rounded-3xl bg-white px-6 py-3 shadow-xl ring-2 ring-white/10">
                  <img
                    src="/feza-logo.png"
                    alt="Feza Design"
                    className="h-full w-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span class="text-black font-black text-3xl">F</span>';
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-white">
                    FEZA <span className="text-yellow-400">Creative</span>
                  </h3>
                  <p className="mt-1 text-sm font-medium text-white/60 uppercase tracking-widest">
                    Ideas that bring brands to life.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10">
                  <p className="text-xs uppercase tracking-wider text-green-300/80 font-semibold">Track Record</p>
                  <p className="mt-2 text-3xl font-black text-yellow-400">Rapid</p>
                  <p className="text-sm text-white/50 mt-1">Growth & Delivery</p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10">
                  <p className="text-xs uppercase tracking-wider text-green-300/80 font-semibold">Core Focus</p>
                  <p className="mt-2 text-xl font-bold leading-tight text-white mb-1">
                    Design, Media & Digital Tech
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm sm:col-span-2 transition-colors hover:bg-white/10">
                  <p className="text-xs uppercase tracking-wider text-green-300/80 font-semibold mb-2">Our Signature</p>
                  <p className="text-base leading-relaxed text-white/80">
                    Premium visuals, modern strategy, and impeccable execution crafted for ambitious creators and businesses.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
