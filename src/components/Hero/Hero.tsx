import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const words = [
    'Full Stack Developer',
    'AI & ML Engineer',
    'Computer Science Student',
  ];

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      const timeout = setTimeout(() => {}, 1000);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setTypedText(words[index].substring(0, subIndex + (reverse ? -1 : 1)));
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 65 : 110);
    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-[8%] w-[380px] h-[380px] bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[8%] w-[420px] h-[420px] bg-[#39FF14]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center gap-16 py-24 w-full">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left order-2 md:order-1"
        >
          {/* Subheading */}
          <h3 className="text-[32px] font-bold text-white mb-2 text-outfit">
            Hello, It's Me
          </h3>

          {/* Main Name */}
          <h1 className="text-[56px] font-bold leading-[1.3] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00F0FF] my-4 text-outfit tracking-tight">
            {portfolioData.personalInfo.name}
          </h1>

          {/* Role / Typing */}
          <h3 className="text-[32px] font-bold text-white mb-8 text-outfit">
            And I'm a{' '}
            <span className="text-[#39FF14] drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
              {typedText}<span className="animate-pulse ml-0.5">|</span>
            </span>
          </h3>

          {/* Bio paragraph */}
          <p className="text-[16px] text-zinc-400 leading-[1.6] max-w-xl mx-auto md:mx-0 font-light mb-12">
            {portfolioData.personalInfo.introduction}
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 justify-center md:justify-start text-xs text-white/40 mb-8">
            <MapPin size={13} />
            {portfolioData.personalInfo.socials.location}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6 justify-center md:justify-start mb-12">
            <motion.a
              href={portfolioData.personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black hover:shadow-[0_0_20px_#00F0FF] transition-all duration-500"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href={portfolioData.personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black hover:shadow-[0_0_20px_#00F0FF] transition-all duration-500"
            >
              <FaLinkedinIn size={20} />
            </motion.a>
            <motion.a
              href={portfolioData.personalInfo.socials.email}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-[#39FF14] hover:border-[#39FF14]/30 hover:bg-[#39FF14]/5 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </motion.a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-8 justify-center md:justify-start mt-12">
            <a
              href="#contact"
              className="inline-block px-11 py-4 bg-[#00F0FF] text-black rounded-[4rem] font-semibold tracking-wider border-2 border-[#00F0FF] hover:shadow-[0_0_20px_#00F0FF] hover:-translate-y-[3px] transition-all duration-500 text-[16px]"
            >
              Hire Me
            </a>
            
            <a
              href={portfolioData.personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-11 py-4 bg-transparent text-[#00F0FF] rounded-[4rem] font-semibold tracking-wider border-2 border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black hover:-translate-y-[3px] transition-all duration-500 text-[16px]"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex-shrink-0 order-1 md:order-2"
        >
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-[#00F0FF]/50 via-[#39FF14]/20 to-transparent blur-xl opacity-50 group-hover:opacity-80 transition-all duration-700" />
            {/* Border ring */}
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-[#00F0FF]/60 to-[#39FF14]/30" />
            {/* Photo */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden bg-[#000000]">
              <img
                src={portfolioData.about.photo}
                alt={portfolioData.personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 cursor-pointer"
        onClick={() => handleScrollTo('about')}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#00F0FF]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
      </motion.div>
    </section>
  );
};
