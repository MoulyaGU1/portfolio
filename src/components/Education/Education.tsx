import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData, type EducationItem } from '../../data/portfolioData';

export const Education: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section 
      id="education"
      ref={containerRef}
      className="relative py-[10rem] px-[9%] bg-[var(--bg-primary)] border-b border-zinc-800"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[45px] font-bold text-[var(--text-primary)] text-outfit tracking-tight"
          >
            My <span className="text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Education</span>
          </motion.h2>
        </div>

        <div className="timeline-container">
          {portfolioData.education.map((edu: EducationItem, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <div className="timeline-content glass-card">
                <h3 className="text-[22px] font-bold text-[var(--text-primary)] text-outfit mb-2">
                  {edu.degree}
                </h3>
                <h4 className="text-[16px] text-zinc-400 font-light mb-4">
                  {edu.institution}
                </h4>
                <span className="inline-block px-6 py-2 bg-[#00F0FF]/10 text-[#00F0FF] rounded-full text-[12px] font-semibold border border-[#00F0FF]/20 mb-4">
                  {edu.duration}
                </span>
                <p className="text-[15px] text-[#cccccc] leading-[1.6]">
                  {edu.grade}
                </p>
                <p className="text-[15px] text-[#cccccc] leading-[1.6] mt-2">
                  Core subjects: {edu.coursework.join(', ')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
