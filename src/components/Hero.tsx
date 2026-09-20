import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Activity, Zap, CheckCircle, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenReportModal: () => void;
  onNavigate: (sectionId: string) => void;
  onSelectSampleIssue?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReportModal, onNavigate }) => {
  return (
    <section id="hero" className="hero-stage relative pt-28 pb-16 lg:pt-36 lg:pb-28 bg-[#020617] overflow-hidden">
      {/* Background ambient radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.12),rgba(2,6,23,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Column (55% width): SaaS Landing Hero Copy */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-cyan-400">
                AI-Powered City Intelligence
              </span>
            </motion.div>

            {/* H1 Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title text-4xl sm:text-5xl lg:text-[64px] leading-[0.95] font-extrabold tracking-tight mb-6 bg-gradient-to-br from-white via-white to-slate-500 bg-clip-text text-transparent font-sans"
            >
              See the Problem.<br />
              Understand the City.<br />
              <span className="hero-accent text-cyan-400">Fix What Matters.</span>
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg max-w-lg mb-10 leading-relaxed font-normal"
            >
              CivicEye uses proprietary computer vision and neural routing to transform daily complaints into actionable city intelligence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={onOpenReportModal}
                className="px-8 py-4 bg-slate-100 text-slate-950 font-bold rounded-xl hover:bg-white transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                Report Issue
              </button>

              <button
                onClick={() => onNavigate('live-map')}
                className="px-8 py-4 bg-slate-900 border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Activity className="w-4 h-4 text-cyan-400" />
                Explore Live Map
              </button>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap gap-6 text-xs text-slate-400 max-w-lg"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero Manual Triage</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Real-Time SLA Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Audit-Proof Resolution</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (45% width): Live Analysis Glass Card */}
          <div className="w-full lg:w-[45%] p-2 sm:p-6 flex flex-col justify-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)] pointer-events-none" />

            {/* Main Glassmorphic Split Layout Card */}
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">
                    Live Analysis
                  </div>
                  <div className="text-lg font-bold text-white">
                    Incoming Report #0842
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-red-500/20 text-red-400 text-[10px] font-bold rounded border border-red-500/30 uppercase tracking-wider">
                  High Severity
                </div>
              </div>

              <div className="space-y-4">
                {/* Image Scanning Canvas */}
                <div className="h-40 rounded-xl bg-slate-950 overflow-hidden relative border border-slate-800 flex items-center justify-center group">
                  <img
                    src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80"
                    alt="Road Pothole Scanning"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="z-10 text-cyan-400 flex flex-col items-center">
                    <div className="w-20 h-20 border-2 border-dashed border-cyan-400/60 rounded-lg flex items-center justify-center animate-pulse bg-slate-950/70 backdrop-blur-sm shadow-xl">
                      <span className="text-xs font-mono font-bold tracking-widest text-cyan-300">
                        SCANNING
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI Classification & Priority Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-500 uppercase mb-1 font-bold">
                      Object Classification
                    </div>
                    <div className="text-sm font-bold text-cyan-400">
                      Road Pothole
                    </div>
                    <div className="text-[10px] text-slate-400">
                      97.4% Confidence
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="text-[10px] text-slate-500 uppercase mb-1 font-bold">
                      Priority Score
                    </div>
                    <div className="text-sm font-bold text-white font-mono">
                      94 / 100
                    </div>
                    <button
                      onClick={() => onNavigate('live-map')}
                      className="text-[10px] text-slate-400 underline decoration-cyan-500/50 underline-offset-2 hover:text-cyan-300 transition-colors block text-left"
                    >
                      View Analytics
                    </button>
                  </div>
                </div>

                {/* AI Routing Recommendation */}
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">
                        AI ROUTING RECOMMENDATION
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Dispatch: Road & Infrastructure (Zone 4)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                <div className="text-[10px] text-slate-500 font-mono">
                  📍 Badnera Road, Amravati
                </div>
                <button
                  onClick={onOpenReportModal}
                  className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Assign Authority →
                </button>
              </div>
            </div>

            {/* Floating Rotate Accent Badge Card */}
            <div className="absolute top-1/4 -right-2 sm:-right-6 w-48 p-4 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl transform rotate-3 z-30 hidden sm:block">
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-2">
                DUPLICATE DETECTION
              </div>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900 flex items-center justify-center text-[8px] font-bold text-slate-300">
                  P1
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-600 border border-slate-900 flex items-center justify-center text-[8px] font-bold text-slate-300">
                  P2
                </div>
                <div className="w-6 h-6 rounded-full bg-cyan-600 border border-slate-900 flex items-center justify-center text-[8px] font-bold text-white">
                  +3
                </div>
              </div>
              <div className="mt-2 text-[10px] font-semibold text-cyan-400">
                3 similar reports nearby
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
