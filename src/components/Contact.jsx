import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Calendar, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative pb-24 md:pb-32 overflow-hidden bg-[#041b14]">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[1000px] h-[500px] bg-gradient-to-tr from-green-500/20 to-yellow-500/20 blur-[150px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="rounded-[3rem] border border-white/10 bg-[#0a2b21]/80 backdrop-blur-2xl p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
          
          {/* Glass light reflection */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4 inline-flex items-center gap-2">
                <span className="h-px w-8 bg-yellow-400/50"></span>
                Get In Touch
              </p>
              <h3 className="text-4xl font-black md:text-5xl lg:text-6xl text-white leading-tight">
                Let's build something <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-yellow-400">
                  powerful together.
                </span>
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Ready to elevate your brand to the premium tier? Reach out to 
                discuss your next visionary design, media, or digital project.
              </p>

              <a 
                href="mailto:hello@fezacreative.com"
                className="mt-10 group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black text-[#041b14] transition-all hover:bg-yellow-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]"
              >
                Start a Conversation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <div className="group rounded-[2rem] border border-white/5 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.08]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-green-400">
                  <Phone size={24} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Phone / WhatsApp</p>
                <p className="text-lg font-bold text-white">0762 560 175<br/>0758 270 985</p>
              </div>

              <div className="group rounded-[2rem] border border-white/5 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.08]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-400">
                  <Mail size={24} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Email</p>
                <p className="text-base sm:text-lg font-bold text-white break-all">fezacreativeagency@gmail.com</p>
              </div>

              <div className="group rounded-[2rem] border border-white/5 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.08]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-green-400">
                  <MapPin size={24} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Headquarters</p>
                <p className="text-lg font-bold text-white">Mbarara, Uganda</p>
              </div>

              <div className="group rounded-[2rem] border border-white/5 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.08]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-400">
                  <Calendar size={24} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Availability</p>
                <p className="text-sm font-semibold text-white leading-snug">Accepting new ambitious clients</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
