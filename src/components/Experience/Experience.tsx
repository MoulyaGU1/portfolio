import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { portfolioData, type TimelineItem } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section 
      id="experience"
      ref={containerRef}
      className="relative py-[10rem] px-[9%] bg-[var(--bg-primary)] border-b border-zinc-800"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[45px] font-bold text-[var(--text-primary)] text-outfit tracking-tight flex items-center justify-center gap-3"
          >
            Work <span className="text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Experience</span>
          </motion.h2>
        </div>

        <div className="timeline-container">
          {portfolioData.timeline.map((item: TimelineItem, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <div className="timeline-content glass-card">
                <h3 className="text-[22px] font-bold text-[var(--text-primary)] text-outfit mb-2">
                  {item.title}
                </h3>
                <h4 className="text-[16px] text-zinc-400 font-light mb-4">
                  {item.organization}
                </h4>
                <span className="inline-block px-6 py-2 bg-[#00F0FF]/10 text-[#00F0FF] rounded-full text-[12px] font-semibold border border-[#00F0FF]/20 mb-4">
                  {item.duration}
                </span>
                
                <p className="text-[15px] text-[#cccccc] leading-[1.6]">
                  {item.description}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 mt-8 px-8 py-3 bg-[#00F0FF] text-black rounded-[4rem] font-semibold text-[14px] border-2 border-[#00F0FF] hover:shadow-[0_0_20px_#00F0FF] hover:-translate-y-[3px] transition-all duration-500"
                  >
                    <ExternalLink size={18} /> View Offer Letter
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
