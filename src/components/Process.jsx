import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into understanding your brand, target audience, and the exact message you need to communicate to succeed.",
    icon: <Search className="text-yellow-400" size={32} />
  },
  {
    number: "02",
    title: "Creative Direction",
    desc: "Our team develops a robust, premium visual and digital direction explicitly tailored to captivate your specific market.",
    icon: <PenTool className="text-green-400" size={32} />
  },
  {
    number: "03",
    title: "Execution & Delivery",
    desc: "We design, refine, and deliver highly polished, production-ready assets that elevate your brand's presence instantly.",
    icon: <CheckCircle className="text-blue-400" size={32} />
  }
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#041b14]">
      {/* Wave Separator */}
      <div className="absolute top-0 rotate-180 w-full h-24 bg-gradient-to-t from-transparent to-[#02110c] opacity-50" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-500 mb-4 inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-yellow-500/50"></span>
            Workflow
            <span className="h-px w-8 bg-yellow-500/50"></span>
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black md:text-5xl lg:text-6xl text-white max-w-3xl mx-auto leading-tight"
          >
            How we bring your <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-yellow-500">
              vision to life
            </span>
          </motion.h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-yellow-400/20 via-green-400/20 to-blue-400/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative rounded-[2rem] border border-white/5 bg-[#0a2b21] p-8 md:p-10 shadow-xl transition-transform hover:-translate-y-2 z-10"
            >
              <div className="absolute top-0 right-8 -translate-y-1/2 text-7xl font-black text-white/[0.04] select-none pointer-events-none">
                {step.number}
              </div>

              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[#02110c] border border-white/10 shadow-inner">
                {step.icon}
              </div>

              <h4 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h4>
              <p className="text-base leading-relaxed text-white/60">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
