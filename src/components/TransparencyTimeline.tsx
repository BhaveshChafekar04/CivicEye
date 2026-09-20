import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Clock, Camera, User, ArrowRight } from 'lucide-react';

export const TransparencyTimeline: React.FC = () => {
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');

  const beforeUrl = 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80';
  const afterUrl = 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80';

  const auditEvents = [
    { title: 'Citizen Report Logged', date: 'Yesterday, 08:15 AM', actor: 'Citizen #CVE-893', status: 'Completed' },
    { title: 'AI Computer Vision Verification', date: 'Yesterday, 08:16 AM', actor: 'CivicEye Neural Core', status: 'Completed' },
    { title: 'Priority Score 94 Assigned', date: 'Yesterday, 08:30 AM', actor: 'Auto SLA Engine', status: 'Completed' },
    { title: 'PWD Field Team Dispatched', date: 'Yesterday, 10:15 AM', actor: 'Supervisor Kulkarni', status: 'Completed' },
    { title: 'Cold-Mix Asphalt Patch Applied', date: 'Yesterday, 02:30 PM', actor: 'Repair Crew #4', status: 'Completed' },
    { title: 'Before/After Proof Verified', date: 'Yesterday, 03:00 PM', actor: 'Municipal AI Auditor', status: 'Verified' }
  ];

  return (
    <section className="py-24 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRANSPARENCY & AUDITABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Every report has a story. Every resolution has proof.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            CivicEye enforces photo evidence before and after repair. Complete tamper-proof transparency for citizens and audit committees.
          </p>
        </div>

        {/* Interactive Before/After Evidence & Audit Trail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Left Column: Interactive Before / After Image Switcher */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-300 font-mono">
                TICKET #CVE-9401 RESOLUTION EVIDENCE
              </span>

              {/* Toggle Buttons */}
              <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  onClick={() => setViewMode('before')}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    viewMode === 'before' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-slate-400'
                  }`}
                >
                  Reported (Before)
                </button>
                <button
                  onClick={() => setViewMode('after')}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    viewMode === 'after' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400'
                  }`}
                >
                  Resolved (After)
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-80 group">
              <img
                src={viewMode === 'after' ? afterUrl : beforeUrl}
                alt="Resolution Proof"
                className="w-full h-full object-cover transition-all duration-500"
              />

              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase font-mono ${
                  viewMode === 'after' ? 'bg-emerald-500/90 text-slate-950' : 'bg-rose-500/90 text-white'
                }`}>
                  {viewMode === 'after' ? 'VERIFIED AFTER REPAIR ✓' : 'BEFORE REPAIR HAZARD'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Audit Trail Timeline */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-bold text-cyan-400 uppercase font-mono tracking-wider mb-4">
              IMMUTABLE AUDIT TRAIL
            </h3>

            <div className="space-y-3 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-800">
              {auditEvents.map((evt, idx) => (
                <div key={idx} className="flex items-start gap-3 relative z-10 text-xs">
                  <div className="w-6 h-6 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center justify-between text-white font-semibold mb-0.5">
                      <span>{evt.title}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{evt.date}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      Actor: {evt.actor}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
