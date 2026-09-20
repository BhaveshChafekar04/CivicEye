import React from 'react';
import { BarChart3, TrendingUp, ShieldAlert, Award } from 'lucide-react';

export const AnalyticsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXECUTIVE CITY INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Turn civic activity into city intelligence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Identify recurring infrastructural decay spots, evaluate department SLAs, and optimize municipal budget allocation.
          </p>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-slate-400">HOTSPOT DENSITY</span>
              <TrendingUp className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono mb-2">Rajapeth & Badnera</div>
            <p className="text-xs text-slate-400">Account for 44% of monsoon road degradation reports.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-slate-400">AVG RESOLUTION TIME</span>
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-emerald-400 font-mono mb-2">14.2 Hours</div>
            <p className="text-xs text-slate-400">Down 38% compared to legacy paper-based reporting.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-slate-400">VERIFICATION RATE</span>
              <ShieldAlert className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono mb-2">99.2%</div>
            <p className="text-xs text-slate-400">Audit-backed photo proof submitted before ticket closure.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
