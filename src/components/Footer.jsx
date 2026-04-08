import React from 'react';
import { navItems } from '../data/constants';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#02110c] pt-20 pb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          
          <div className="flex items-center gap-4">
            <div className="flex h-12 items-center justify-center rounded-xl bg-white px-3 py-1.5">
              <img
                src="/feza-logo.png"
                alt="Feza Logo"
                className="h-full w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-black font-black text-xl flex h-full items-center justify-center">F</span>';
                }}
              />
            </div>
            <div>
              <p className="text-xl font-bold tracking-wide text-white">
                FEZA <span className="text-yellow-400">Creative</span>
              </p>
              <p className="text-xs font-medium text-white/50 uppercase tracking-widest">
                Agency
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-semibold text-white/60">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-yellow-400"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/40 uppercase tracking-wider text-center md:text-left">
          <p>© {new Date().getFullYear()} Feza Creative Agency. All rights reserved.</p>
          <p>Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
