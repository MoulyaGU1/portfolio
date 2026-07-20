import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillsData = [
  {
    category: "Languages & Frameworks",
    items: ["Python", "JavaScript", "C/C++", "Java", "React.js", "Node.js", "Express.js", "Next.js", "Tailwind CSS", "Bootstrap", "HTML/CSS"]
  },
  {
    category: "AI & Machine Learning",
    items: ["Machine Learning", "Deep Learning", "Generative AI", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Git", "GitHub", "Docker", "AWS", "Firebase", "Postman", "Linux", "VS Code", "Figma"]
  }
];

export const Skills: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
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
            My <span className="text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Skills</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-card flex flex-col items-center"
            >
              <h3 className="text-[22px] font-bold text-[#00F0FF] mb-8 text-center text-outfit">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center justify-center px-4 py-2 bg-white/5 border border-white/10 rounded-full transition-all duration-300 hover:bg-[#00F0FF]/10 hover:border-[#00F0FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:scale-110 cursor-pointer text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Skills;
