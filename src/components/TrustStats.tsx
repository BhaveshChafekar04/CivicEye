import React from 'react';
import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      value: '10K+',
      label: 'Issues Reported'
    },
    {
      value: '94%',
      label: 'AI Accuracy'
    },
    {
      value: '38%',
      label: 'Faster Resolution'
    },
    {
      value: '24/7',
      label: 'City Intelligence'
    }
  ];

  const partners = [
    { name: 'Amravati Municipal Corp', role: 'Smart City Pilot Zone' },
    { name: 'Urban Infrastructure Labs', role: 'AI Mobility Partner' },
    { name: 'Digital Civic Tech Council', role: 'Transparency Standards' },
    { name: 'National Smart Cities Alliance', role: 'Research Collaborator' }
  ];

  return (
    <section className="trust-band bg-slate-950 border-y border-slate-900 py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Side: Clean Stat Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-14 w-full lg:w-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Quote & Version Stamp */}
        <div className="text-left lg:text-right w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-slate-900 pt-4 lg:pt-0 lg:pl-8">
          <div className="text-slate-400 text-xs sm:text-sm mb-1 italic font-serif">
            "The future of civic engagement is here."
          </div>
          <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest font-mono">
            Powered by CivicEye Engine v4.0
          </div>
        </div>
      </div>

      {/* Partner Badges row */}
      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-900/80 flex flex-wrap items-center justify-center lg:justify-between gap-6 opacity-75 text-xs text-slate-400">
        {partners.map((partner, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-cyan-500/80" />
            <span className="font-semibold text-slate-300">{partner.name}</span>
            <span className="text-[10px] text-slate-500 font-mono">({partner.role})</span>
          </div>
        ))}
      </div>
    </section>
  );
};
