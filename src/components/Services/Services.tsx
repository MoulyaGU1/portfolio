import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Cpu, Server, Cloud } from 'lucide-react';

const servicesData = [
  {
    title: "Full Stack Web Development",
    description: "Building responsive, scalable, and modern web applications from frontend to backend.",
    icon: <Monitor size={60} className="text-[#00F0FF] mb-8" />
  },
  {
    title: "AI Application Development",
    description: "Integrating intelligence into applications using Machine Learning models and APIs like Gemini.",
    icon: <Cpu size={60} className="text-[#00F0FF] mb-8" />
  },
  {
    title: "Backend & APIs",
    description: "Robust REST API development using Flask, Express, and FastAPI, with efficient database design.",
    icon: <Server size={60} className="text-[#00F0FF] mb-8" />
  },
  {
    title: "Cloud Solutions",
    description: "Deploying applications on modern cloud platforms ensuring high availability and scalability.",
    icon: <Cloud size={60} className="text-[#00F0FF] mb-8" />
  }
];

export const Services: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-[10rem] px-[9%] bg-[var(--bg-primary)] border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[45px] font-bold text-[var(--text-primary)] text-outfit tracking-tight"
          >
            My <span className="text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card flex flex-col items-center text-center px-8 py-16"
            >
              {service.icon}
              <h3 className="text-[22px] font-bold text-white mb-6 text-outfit">
                {service.title}
              </h3>
              <p className="text-[#cccccc] text-[15px] leading-[1.6]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
