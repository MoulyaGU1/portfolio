import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { portfolioData, type Certificate } from '../../data/portfolioData';

export const Certificates: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-4 md:px-8 bg-[var(--bg-primary)] border-b border-[var(--card-border)]"
    >
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-outfit tracking-tight"
          >
            Licenses & Certifications
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)] mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Certificates Grid — no images */}
        <div className="grid sm:grid-cols-2 gap-5">
          {portfolioData.certificates.map((cert: Certificate, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="rounded-2xl glass-card border border-[var(--card-border)] hover:border-[var(--accent-purple)]/40 glow-hover p-6 flex flex-col justify-between gap-4 transition-all duration-300 shadow-md"
            >
              <div>
                {/* Verified badge */}
                <div className="flex items-center gap-1.5 mb-3">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Verified</span>
                </div>

                <h3 className="text-sm font-bold text-[var(--text-primary)] text-outfit mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[var(--accent-purple)] mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                  <Calendar size={11} />
                  Issued: {cert.date}
                </div>
                {cert.credentialId && (
                  <p className="text-xs text-[var(--text-secondary)] font-mono mt-1">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2 rounded-lg border border-[var(--accent-purple)]/30 text-[var(--accent-purple)] hover:bg-[var(--accent-purple)]/10 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer"
              >
                Verify Credential
                <ExternalLink size={11} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
