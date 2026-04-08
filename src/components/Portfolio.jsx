import React from 'react';
import { motion } from 'framer-motion';
import { works } from '../data/constants';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  // Dynamically load all images dropped into the public/portfolio directory
  const imageModules = import.meta.glob('/public/portfolio/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}', { eager: true });
  
  const dynamicWorks = Object.keys(imageModules).map((filepath) => {
    // Extract filename and format as title
    const filename = filepath.split('/').pop();
    const title = filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    
    return {
      title,
      type: "Portfolio Project",
      // Remove '/public' prefix because static assets are served from the root
      image: filepath.replace('/public', '')
    };
  });

  // Combine any static works in constants with the dynamically found ones (avoiding duplicates)
  const existingTitles = new Set(works.map(w => w.title));
  const newDynamicWorks = dynamicWorks.filter(w => !existingTitles.has(w.title));
  
  const allWorks = [...works, ...newDynamicWorks];

  // How many placeholder slots to show after rendering specific works
  const totalSlots = 12;
  const placeholdersCount = Math.max(0, totalSlots - allWorks.length);
  const placeholderProjects = [...Array(placeholdersCount)];

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden bg-[#041b14]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400 mb-4 flex items-center gap-2"
            >
              <span className="h-px w-8 bg-yellow-400/50"></span>
              Work Excellence
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black md:text-5xl lg:text-6xl text-white"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">
                My Projects
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-white/60 text-base leading-relaxed"
            >
              A curated snapshot of our visual capabilities. Please note that a significant portion of our portfolio—including executive projects, unreleased campaign materials, and heavy motion graphics—remains strictly confidential out of respect for our clients' privacy and approval policies.
            </motion.p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Render Actual Projects */}
          {allWorks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a2b21]/60 shadow-2xl backdrop-blur-sm transition-all aspect-square relative"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-green-500/20', 'to-emerald-900/40');
                  }}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-900/40" />
              )}

              {/* Floating View Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 z-20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md shadow-lg border border-white/30 text-white">
                  <ArrowUpRight size={28} />
                </div>
              </div>

              {/* Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-xs font-bold uppercase tracking-wider text-green-400 mb-1">
                  {item.type}
                </p>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}

          {/* Render Placeholders */}
          {placeholderProjects.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-green-500/30 transition-all aspect-square flex flex-col items-center justify-center relative"
            >
              {/* Subtle pulsing background on hover */}
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-500" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/20 group-hover:bg-green-500/20 group-hover:text-green-400 transition-all mb-4">
                <ArrowUpRight size={24} />
              </div>
              <p className="text-sm font-semibold tracking-wide text-white/30 group-hover:text-yellow-400 transition-colors">
                Project Slot {index + 1}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 sm:mt-20 text-center border-t border-white/5 pt-10">
           <p className="text-sm font-medium text-white/40 max-w-2xl mx-auto">
             Looking for something specific? We hold hundreds of specialized designs in our offline archives. <a href="#contact" className="text-yellow-500 hover:text-yellow-400 underline decoration-white/20 underline-offset-4 transition-colors">Contact us</a> to request a tailored portfolio presentation.
           </p>
        </div>
      </div>
    </section>
  );
}
