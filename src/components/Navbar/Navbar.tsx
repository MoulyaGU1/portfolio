import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'timeline' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) setScrollProgress((window.scrollY / totalScroll) * 100);
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      let currentSection = 'hero';
      sections.forEach(sec => {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) currentSection = sec.id;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-[#000000]/95 border-b border-white/5 shadow-xl shadow-black/40' : 'bg-transparent'}`}>

      {/* Scroll Progress */}
      <div
        className="h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#00C8FF] to-[#39FF14] absolute top-0 left-0 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">

          {/* Brand / Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-[25px] font-bold tracking-wide cursor-pointer text-outfit text-white"
          >
            &lt;Moulya <span className="text-[#00F0FF]">G U</span> /&gt;
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer group ${
                  activeSection === item.id ? 'text-[#00F0FF]' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#00F0FF] transition-all duration-200 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/70 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#000000]">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-3 rounded-lg text-sm font-medium text-left transition-all cursor-pointer ${
                  activeSection === item.id ? 'text-[#00F0FF] bg-[#00F0FF]/5' : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
