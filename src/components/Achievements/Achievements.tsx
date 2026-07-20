import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Star, Award, Code, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData, type Achievement } from '../../data/portfolioData';

export const Achievements: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const getIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'hackathon':
        return <Trophy className="text-amber-400" size={20} />;
      case 'contest':
        return <Code className="text-purple-400" size={20} />;
      case 'milestone':
        return <Star className="text-blue-400" size={20} />;
      case 'contribution':
        return <Award className="text-emerald-400" size={20} />;
    }
  };

  const handleCelebrate = (e: React.MouseEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7C3AED', '#3B82F6', '#10B981', '#F59E0B']
    });
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 bg-[var(--bg-secondary)] border-b border-zinc-200"
    >
      {/* Glow Blob */}
      <div className="absolute top-[20%] left-[5%] w-[250px] h-[250px] bg-purple-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-16">
          <div className="text-center sm:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-outfit tracking-tight"
            >
              Key Achievements
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={isInView ? { width: '80px' } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-3 rounded-full mx-auto sm:mx-0"
            />
          </div>

          {/* Interactive Celebration Engine Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCelebrate}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-[var(--text-primary)] font-semibold text-sm flex items-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 transition-all duration-300 cursor-pointer"
          >
            <Sparkles size={16} />
            Celebrate Milestones
          </motion.button>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {portfolioData.achievements.map((item: Achievement, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-zinc-200 hover:border-purple-500/20 shadow-md flex gap-4 items-start glow-hover"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-zinc-200 flex-shrink-0">
                {getIcon(item.category)}
              </div>

              <div>
                <div className="flex justify-between items-start gap-4 mb-1">
                  <h3 className="text-base font-bold text-[var(--text-primary)] text-outfit">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-zinc-500 font-medium whitespace-nowrap mt-0.5">
                    {item.date}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] text-xs md:text-sm leading-relaxed font-light text-inter">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
