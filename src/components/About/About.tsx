import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const CountUp: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const totalSteps = 50;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = end / totalSteps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.ceil(start));
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export const About: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Projects Completed', value: portfolioData.personalInfo.stats.projects, suffix: '+' },
    { label: 'Certifications Earned', value: portfolioData.personalInfo.stats.certifications, suffix: '' },
    { label: 'Internships', value: portfolioData.personalInfo.stats.internships, suffix: '' },
    { label: 'Hackathons', value: portfolioData.personalInfo.stats.hackathons, suffix: '+' },
  ];

  const highlights = [
    { label: 'Domain', value: 'AI/ML & Full Stack Development' },
    { label: 'Education', value: 'B.E. Computer Science & Engineering' },
    { label: 'Approach', value: 'Collaborative & Performance-driven' },
    { label: 'Location', value: portfolioData.personalInfo.socials.location },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 px-4 md:px-8 bg-[var(--bg-secondary)] border-b border-[var(--card-border)] overflow-hidden"
    >
      {/* Ambient blob */}
      <div className="absolute top-1/3 right-[4%] w-[350px] h-[350px] bg-[#00F0FF]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[45px] font-bold text-white mb-2 text-outfit"
          >
            About <span className="text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Me</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-14 items-start">

          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-[26px] font-bold text-white mb-6 text-outfit">
              Full Stack Developer & AI Enthusiast
            </h3>
            <p className="text-[16px] text-zinc-300 leading-[1.7] font-light">
              {portfolioData.about.bio}
            </p>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/3 border border-white/6">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#00F0FF] block mb-1">
                    {h.label}
                  </span>
                  <span className="text-sm text-white font-medium">{h.value}</span>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={portfolioData.personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-sm font-semibold text-[#00F0FF] hover:bg-[#00F0FF]/12 transition-all duration-200"
              >
                View Full Resume
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-sm font-semibold text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[var(--bg-primary)] border border-[var(--card-border)] hover:border-[#00F0FF]/30 text-center transition-all duration-300 shadow-md group hover:-translate-y-1"
              >
                <div className="text-4xl font-extrabold text-white mb-1.5 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                  <CountUp end={stat.value} />
                  <span className="text-[#00F0FF]">{stat.suffix}</span>
                </div>
                <div className="text-xs text-white/50 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
