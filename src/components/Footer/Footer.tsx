import React, { useEffect, useState } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--bg-primary)] border-t border-zinc-800 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Brand */}
        <div className="text-center md:text-left">
          <span className="text-lg font-bold font-mono tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#39FF14]">
            &lt;Moulya G U /&gt;
          </span>
          <p className="text-zinc-500 text-xs mt-1.5 font-light text-inter">
            AI/ML Engineer & Full Stack Web Developer.
          </p>
        </div>

        {/* Social Link Badges */}
        <div className="flex gap-4">
          <a
            href={portfolioData.personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-zinc-800 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#00F0FF]/30 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={portfolioData.personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-zinc-800 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#00F0FF]/30 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href={portfolioData.personalInfo.socials.email}
            className="p-2.5 rounded-full bg-white/5 border border-zinc-800 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#00F0FF]/30 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-zinc-500 text-xs font-light text-inter">
          &copy; {currentYear} Moulya G U. All rights reserved. Built with React & Tailwind.
        </div>
      </div>

      {/* Floating Scroll Top Trigger */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#39FF14] text-[#000000] shadow-lg shadow-[#00F0FF]/30 z-40 transition-all duration-300 transform hover:scale-115 active:scale-95 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};
