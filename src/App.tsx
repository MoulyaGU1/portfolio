import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Base Components
import { LoadingScreen } from './components/LoadingScreen';
import { MouseGlow } from './components/MouseGlow';
import { Navbar } from './components/Navbar/Navbar';
import { ParticleBackground } from './components/ParticleBackground';

// Section Components
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Services } from './components/Services/Services';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Education/Education';
import { Certificates } from './components/Certificates/Certificates';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Synchronize darkMode class on HTML root element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Console Welcome Easter Egg
  useEffect(() => {
    console.log(
      '%cHey Developer! Welcome to Moulya\'s Portfolio Console 🚀',
      'color: #7C3AED; font-size: 16px; font-weight: bold;'
    );
    console.log(
      '%cBuilt using React, TypeScript, Tailwind CSS & Framer Motion.',
      'color: #3B82F6; font-size: 12px;'
    );
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen finishLoading={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">
          
          {/* Back cursor hover glowing backdrop overlay */}
          <MouseGlow />
          <ParticleBackground />

          {/* Interactive Header Navigation Bar */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Core App Layout Sections */}
          <main className="pt-16">
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Experience />
            <Education />
            <Certificates />
            <Contact />
          </main>

          {/* Footnotes copyright wrapper */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
