import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/constants';
import { Layers, MonitorPlay, PenTool, Smartphone, Mic2, Briefcase, Zap, Globe, Palette, Presentation } from 'lucide-react';

const icons = [
  <Palette className="text-yellow-400" size={28} />,
  <PenTool className="text-green-400" size={28} />,
  <Layers className="text-yellow-400" size={28} />,
  <MonitorPlay className="text-green-400" size={28} />,
  <Zap className="text-yellow-400" size={28} />,
  <Smartphone className="text-green-400" size={28} />,
  <Briefcase className="text-yellow-400" size={28} />,
  <Globe className="text-green-400" size={28} />,
  <Mic2 className="text-yellow-400" size={28} />,
  <Presentation className="text-green-400" size={28} />
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#02110c] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-green-400 mb-4 flex items-center gap-2"
          >
            <span className="h-px w-8 bg-green-400/50"></span>
            Our Expertise
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black md:text-5xl lg:text-6xl text-white"
          >
            Services curated for <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
              ambitious modern brands
            </span>
          </motion.h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(34,197,94,0.15)]"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-yellow-500/5 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a2b21] border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {icons[index % icons.length]}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-yellow-300 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed text-white/60">
                  {service.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
