import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData, type GalleryItem } from '../../data/portfolioData';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const categories = ['All', 'work', 'events'];

  const filteredItems = portfolioData.gallery.filter((item: GalleryItem) => 
    filter === 'All' || item.category.toLowerCase() === filter.toLowerCase()
  );

  const openLightbox = (item: GalleryItem) => {
    // Find index of the item inside filtered list
    const idx = filteredItems.findIndex(f => f.id === item.id);
    setSelectedIdx(idx);
  };

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prevIdx) => (prevIdx! === 0 ? filteredItems.length - 1 : prevIdx! - 1));
  };

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prevIdx) => (prevIdx! === filteredItems.length - 1 ? 0 : prevIdx! + 1));
  };

  return (
    <section 
      id="gallery" 
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 bg-[var(--bg-primary)] border-b border-zinc-200"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-outfit tracking-tight"
          >
            Moments & Gallery
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Gallery Filters */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs font-semibold capitalize tracking-wide transition-all duration-300 cursor-pointer ${
                filter === cat 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-[var(--text-primary)] shadow-lg shadow-purple-600/25'
                  : 'glass-card border border-zinc-200 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-48 rounded-xl overflow-hidden glass-card border border-zinc-200 cursor-pointer shadow-md"
                onClick={() => openLightbox(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay hover details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 transition-opacity duration-300">
                  <div className="flex justify-end">
                    <div className="p-2 rounded-lg bg-white/10 text-[var(--text-primary)]">
                      <Maximize2 size={14} />
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-purple-400 uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] text-outfit">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal Slider */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedIdx(null)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/5 border border-zinc-200 text-[var(--text-primary)] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Prev Button */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 p-3 rounded-full bg-white/5 border border-zinc-200 text-[var(--text-primary)] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Slider image and description content */}
              <div className="max-w-3xl w-full flex flex-col items-center">
                <motion.img
                  key={selectedIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={filteredItems[selectedIdx].image}
                  alt={filteredItems[selectedIdx].title}
                  className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain border border-zinc-200 shadow-2xl"
                />
                
                <div className="text-center mt-6 max-w-lg">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest block mb-1">
                    {filteredItems[selectedIdx].category}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 text-outfit">
                    {filteredItems[selectedIdx].title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-xs md:text-sm font-light text-inter leading-relaxed">
                    {filteredItems[selectedIdx].description}
                  </p>
                </div>
              </div>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="absolute right-4 p-3 rounded-full bg-white/5 border border-zinc-200 text-[var(--text-primary)] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
