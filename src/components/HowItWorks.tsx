import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Cpu, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Report',
      subtitle: 'Citizen Upload & Geo-Tag',
      icon: Camera,
      description: 'Citizen snaps a photo or video, adds a brief description, and auto-tags the exact GPS location in seconds.',
      details: [
        'Automatic GPS & timestamp verification',
        'Multi-format photo & video support',
        'Sub-meter accuracy location pin'
      ],
      previewSnippet: '📷 Photo Upload -> 📍 GPS Tagged -> ⚡ Submitted'
    },
    {
      step: '02',
      title: 'Understand',
      subtitle: 'Computer Vision & Duplicate Triage',
      icon: Cpu,
      description: 'CivicEye’s multimodal vision model analyzes the photo to identify defect types, measure size/severity, and merge duplicates.',
      details: [
        'Multimodal AI image classification',
        'Automatic deduplication within 500m radius',
        'Structural depth & hazard tagging'
      ],
      previewSnippet: '🧠 Pothole Detected (98% Conf) -> 🔄 3 Duplicates Merged'
    },
    {
      step: '03',
      title: 'Prioritize',
      subtitle: 'Dynamic Severity & SLA Scoring',
      icon: BarChart3,
      description: 'The AI calculates an objective priority score (0–100) based on traffic exposure, school zones, safety risks, and existing backlog.',
      details: [
        'Algorithmic priority score (1-100)',
        'SLA timer countdown generation',
        'Traffic & population exposure weighting'
      ],
      previewSnippet: '📊 Priority Score: 94/100 -> ⏱️ Target SLA: 24 Hours'
    },
    {
      step: '04',
      title: 'Resolve',
      subtitle: 'Automated Routing & Before/After Proof',
      icon: CheckCircle2,
      description: 'Auto-routed directly to the correct department team. Workers upload photo proof upon repair to verify resolution transparently.',
      details: [
        'Automated department dispatch',
        'Real-time status updates to citizen',
        'Mandatory before/after photo verification'
      ],
      previewSnippet: '👷 Worker Dispatched -> 🛠️ Repair Complete -> ✅ Verified'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FOUR-STEP INTELLIGENCE LOOP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How CivicEye Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Connecting citizens and municipal teams through an automated, objective AI pipeline.
          </p>
        </div>

        {/* Step Tabs Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                  isActive
                    ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-300" />
                )}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    STEP {item.step}
                  </span>
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className={`text-base font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 truncate">
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase mb-2 block">
                STEP {steps[activeStep].step} DETAIL
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {steps[activeStep].title}: <span className="text-slate-300 font-normal">{steps[activeStep].subtitle}</span>
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-6">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3 mb-8">
                {steps[activeStep].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300 flex items-center justify-between">
                <span>{steps[activeStep].previewSnippet}</span>
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </div>
            </div>

            {/* Visual Card Representation */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 shadow-2xl relative"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-semibold text-slate-400">CivicEye Engine State</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                    STAGE {steps[activeStep].step}
                  </span>
                </div>

                <div className="py-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    {React.createElement(steps[activeStep].icon, { className: 'w-8 h-8' })}
                  </div>
                  <div className="text-lg font-bold text-white mb-1">
                    {steps[activeStep].title} Engine
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    Latency: &lt;140ms
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Next Pipeline Stage</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
