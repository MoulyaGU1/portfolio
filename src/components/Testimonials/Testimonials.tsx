import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const items = portfolioData.testimonials;

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [items.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 bg-[var(--bg-secondary)] border-b border-zinc-200 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-900/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-outfit tracking-tight"
          >
            Recommendations
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Carousel slide container */}
        <div className="relative p-8 md:p-12 rounded-3xl glass-card border border-zinc-200 shadow-2xl min-h-[250px] flex items-center justify-center">
          
          <div className="absolute top-6 left-6 text-purple-500/20">
            <Quote size={56} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center space-y-6 max-w-2xl relative z-10"
            >
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light text-inter italic">
                "{items[current].text}"
              </p>

              <div className="flex flex-col items-center gap-2">
                <img
                  src={items[current].avatar}
                  alt={items[current].name}
                  className="w-12 h-12 rounded-full border border-zinc-200 object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] text-outfit">
                    {items[current].name}
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-medium">
                    {items[current].role} @ <span className="text-purple-400">{items[current].organization}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators / Slider Nav */}
          <div className="absolute bottom-6 flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  current === idx ? 'bg-purple-500 w-6' : 'bg-white/10 hover:bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="hidden sm:flex absolute left-4 right-4 justify-between pointer-events-none">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white/5 border border-zinc-200 text-[var(--text-primary)] hover:bg-white/10 transition-colors pointer-events-auto cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-xl bg-white/5 border border-zinc-200 text-[var(--text-primary)] hover:bg-white/10 transition-colors pointer-events-auto cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
