import React from 'react';
import { Sparkles, ArrowRight, Building2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenReportModal: () => void;
  onOpenRequestDemoModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenReportModal, onOpenRequestDemoModal }) => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-16 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 shadow-2xl backdrop-blur-2xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOIN THE CIVIC INTELLIGENCE MOVEMENT</span>
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-sans">
            Let's build cities that listen.
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            One report can identify a single problem. <br />
            <span className="text-cyan-300 font-semibold">Millions of reports can help a city understand itself.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenReportModal}
              className="px-8 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:brightness-110 transition-all shadow-[0_0_30px_rgba(6,182,212,0.35)] flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              Report an Issue Now
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenRequestDemoModal}
              className="px-8 py-4 rounded-xl font-bold text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all flex items-center gap-2"
            >
              <Building2 className="w-4 h-4 text-cyan-400" />
              Talk to CivicEye Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
