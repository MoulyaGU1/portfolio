import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC<{ finishLoading: () => void }> = ({ finishLoading }) => {
  const [text, setText] = useState('');
  const fullText = '<Moulya G U />';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          finishLoading();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#090909] flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing glow background */}
        <div className="absolute w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        
        {/* Terminal bracket loader text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 mb-4"
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.div>

        {/* Outer glowing border ring */}
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
};
