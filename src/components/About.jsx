import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/constants';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400 mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-green-400/50"></span>
            About Us
          </p>
          <h3 className="text-4xl font-black md:text-5xl lg:text-6xl leading-[1.1] text-white">
            We build brands that are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
              modern and memorable.
            </span>
          </h3>
          <p className="mt-8 text-lg leading-relaxed text-white/75">
            Feza Creative Agency is a premium creative company focused on helping businesses, 
            brands, and personalities stand out through elite design, digital content, 
            branding, marketing execution, and bespoke web solutions.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            We combine high-end aesthetics with digital innovation to forge visual 
            identities and experiences that exude confidence, clarity, and uncompromising professionalism.
          </p>
        </motion.div>

        {/* Right Side Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-green-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative rounded-[2.5rem] border border-white/10 bg-[#0a2b21]/40 p-8 md:p-10 backdrop-blur-xl shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400 mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
              Why Partner With Us
            </p>
            
            <div className="grid gap-5">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                  className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:bg-white/[0.05] hover:border-white/10"
                >
                  <CheckCircle2 className="mt-0.5 text-green-400 shrink-0 transition-transform group-hover:scale-110 group-hover:text-yellow-400" size={24} />
                  <p className="text-base font-medium leading-relaxed text-white/90">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
