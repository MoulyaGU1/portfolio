import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { portfolioData, type Project } from '../../data/portfolioData';
import { FaGithub } from 'react-icons/fa';

export const Projects: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="relative py-[10rem] px-[9%] bg-[var(--bg-secondary)] border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[45px] font-bold text-[var(--text-primary)] text-outfit tracking-tight"
          >
            Notable <span className="text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {portfolioData.projects.map((project: Project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card flex flex-col justify-between"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-[24px] font-bold text-white mb-6 text-outfit">
                  {project.title}
                </h3>
                
                <p className="text-[15px] text-[#cccccc] leading-[1.6] mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[12px] px-4 py-2 bg-[#00F0FF]/10 text-[#00F0FF] rounded-md border border-[#00F0FF]/30 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#00F0FF] text-black rounded-[4rem] font-semibold text-[14px] border-2 border-[#00F0FF] hover:shadow-[0_0_20px_#00F0FF] hover:-translate-y-[3px] transition-all duration-500"
                  >
                    <FaGithub size={16} /> Code
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent text-[#00F0FF] rounded-[4rem] font-semibold text-[14px] border-2 border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black hover:-translate-y-[3px] transition-all duration-500"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
