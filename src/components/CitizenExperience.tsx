import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Camera, MapPin, CheckCircle, ArrowRight, Shield, Bell } from 'lucide-react';

export const CitizenExperience: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const phoneScreens = [
    {
      title: 'Snap Photo',
      subtitle: 'Zero Forms Needed',
      content: (
        <div className="flex flex-col items-center text-center py-4">
          <div className="w-full h-40 rounded-xl bg-slate-800 relative overflow-hidden mb-3 border border-slate-700 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=400&q=80"
              alt="Pothole"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-2 border-dashed border-cyan-400/60 rounded-xl m-3 flex items-center justify-center pointer-events-none">
              <span className="bg-cyan-500/80 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded">
                ALIGN CAMERA
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-300 font-medium">Capture photo in app or upload gallery snapshot.</p>
        </div>
      )
    },
    {
      title: 'AI Scan',
      subtitle: 'Instant Detection',
      content: (
        <div className="py-2 space-y-2">
          <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs text-left">
            <div className="flex items-center justify-between text-cyan-400 font-mono text-[10px] mb-1">
              <span>VISION AI INFERENCE</span>
              <span>98% CONF</span>
            </div>
            <div className="font-bold text-white text-xs">Road Asphalt Pothole</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Estimated Depth: 12cm | Risk: High</div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[10px] text-slate-300 flex items-center justify-between">
            <span>Nearby Duplicate Check</span>
            <span className="text-amber-400 font-semibold">3 Clustered</span>
          </div>
        </div>
      )
    },
    {
      title: 'Auto-Location',
      subtitle: 'Sub-meter GPS',
      content: (
        <div className="py-2 text-left">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs mb-2">
            <div className="flex items-center gap-1.5 text-cyan-400 font-semibold mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Badnera Road, Near Flyover</span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              GPS: 20.9135° N, 77.7490° E (Accurate to 1.2m)
            </div>
          </div>
          <div className="w-full py-2 bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold text-xs rounded-xl text-center shadow-lg">
            Confirm & Submit
          </div>
        </div>
      )
    },
    {
      title: 'Track Live',
      subtitle: 'Transparent Status',
      content: (
        <div className="py-2 space-y-2 text-left text-xs">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center justify-between">
            <span className="font-bold">Status: Dispatch Complete</span>
            <CheckCircle className="w-4 h-4" />
          </div>

          <div className="text-[10px] text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>Ticket ID</span>
              <span className="font-mono text-cyan-400">#CVE-9401</span>
            </div>
            <div className="flex justify-between">
              <span>Assigned Unit</span>
              <span className="text-slate-200">PWD Patch Team 4</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated SLA</span>
              <span className="text-slate-200">Today 2:00 PM</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              <span>CITIZEN EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans mb-6">
              Reporting should take seconds, not paperwork.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              No long queues, confusing municipal forms, or phone transfers. Citizens take a picture, confirm the location, and let CivicEye handle the rest.
            </p>

            {/* Interactive Step Switchers */}
            <div className="space-y-4">
              {phoneScreens.map((screen, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    activeStep === idx
                      ? 'bg-slate-950 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                      activeStep === idx ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">{screen.title}</div>
                      <div className="text-xs text-slate-400">{screen.subtitle}</div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${activeStep === idx ? 'text-cyan-400' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[320px] rounded-[40px] bg-slate-950 p-4 border-[6px] border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
              {/* Top notch */}
              <div className="w-32 h-4 bg-slate-900 rounded-b-xl mx-auto mb-4 border-x border-b border-slate-800 flex items-center justify-center">
                <div className="w-10 h-1 rounded-full bg-slate-800" />
              </div>

              {/* Phone Content Screen */}
              <div className="bg-slate-900 rounded-3xl p-4 border border-slate-800 text-center relative overflow-hidden min-h-[380px] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-2">
                  <span className="font-bold text-cyan-400">CivicEye Mobile</span>
                  <span className="font-mono">9:41 AM</span>
                </div>

                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-xs font-bold text-white mt-2 mb-1">
                    {phoneScreens[activeStep].title}
                  </div>
                  {phoneScreens[activeStep].content}
                </motion.div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-cyan-400" />
                    Civic Network Verified
                  </span>
                  <Bell className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
