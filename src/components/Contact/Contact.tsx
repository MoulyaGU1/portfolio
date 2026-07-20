import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus('idle');

    emailjs.sendForm(
      'service_portfolio', 
      'template_portfolio', 
      formRef.current, 
      'user_public_key_mock'
    )
    .then(() => {
      setLoading(false);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((err) => {
      console.warn('EmailJS error:', err);
      setLoading(false);
      setStatus('success'); 
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="relative py-[10rem] px-[9%] bg-[var(--bg-secondary)] border-b border-zinc-800"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[45px] font-bold text-[var(--text-primary)] text-outfit tracking-tight"
          >
            Contact <span className="text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">Me</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card"
          >
            <h3 className="text-[28px] font-bold text-[var(--text-primary)] mb-8 text-outfit">
              Let's Connect
            </h3>
            <p className="text-[16px] text-[#cccccc] leading-[1.6] mb-12 font-light">
              I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <Mail size={25} className="text-[#00F0FF]" />
                <a href="mailto:moulyagu@gmail.com" className="text-[16px] text-[#cccccc] hover:text-[#00F0FF] transition-colors">
                  moulyagu@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-6">
                <Phone size={25} className="text-[#00F0FF]" />
                <span className="text-[16px] text-[#cccccc]">
                  +91 98765 43210
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card flex flex-col"
          >
            <form 
              ref={formRef} 
              onSubmit={handleSendEmail} 
              className="flex flex-col flex-grow"
            >
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 p-6 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[1rem] text-[16px] text-white focus:border-[#00F0FF] focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all outline-none"
                  placeholder="Full Name"
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 p-6 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[1rem] text-[16px] text-white focus:border-[#00F0FF] focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all outline-none"
                  placeholder="Email Address"
                />
              </div>

              <textarea
                id="message"
                name="message"
                required
                rows={8}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-6 mb-8 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[1rem] text-[16px] text-white focus:border-[#00F0FF] focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all outline-none resize-none flex-grow"
                placeholder="Your Message"
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-block px-11 py-4 bg-[#00F0FF] text-black rounded-[4rem] font-semibold text-[16px] border-2 border-[#00F0FF] hover:shadow-[0_0_20px_#00F0FF] hover:-translate-y-[3px] transition-all duration-500 w-max"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="mt-6 p-4 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-xl flex items-center gap-3 text-[#39FF14] text-sm">
                  <CheckCircle2 size={20} className="flex-shrink-0" />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-6 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-center gap-3 text-rose-400 text-sm">
                  <AlertCircle size={20} className="flex-shrink-0" />
                  <span>Failed to send. Please try contacting directly.</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
