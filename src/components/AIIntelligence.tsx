import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DEMO_SAMPLE_PHOTOS } from '../data/mockData';
import { Cpu, CheckCircle2, AlertTriangle, Clock, Layers, Sparkles, RefreshCw } from 'lucide-react';

export const AIIntelligence: React.FC = () => {
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);

  const sample = DEMO_SAMPLE_PHOTOS[selectedSampleIndex];

  const handleSelectSample = (index: number) => {
    setAnalyzing(true);
    setSelectedSampleIndex(index);
    setTimeout(() => {
      setAnalyzing(false);
    }, 400);
  };

  return (
    <section id="ai-engine" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>MULTIMODAL VISION & INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            AI that understands your city.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Click any sample issue photo below to simulate live computer vision extraction, severity scoring, and duplicate clustering.
          </p>
        </div>

        {/* Sample Photo Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {DEMO_SAMPLE_PHOTOS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleSelectSample(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 border ${
                selectedSampleIndex === idx
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-lg shadow-cyan-500/10 scale-105'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Live Interactive Analysis Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
          {/* Left Column: Sample Image Preview */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 group h-80 lg:h-full min-h-[280px]">
              <img
                src={sample.url}
                alt={sample.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* Scanning laser beam effect when analyzing */}
              {analyzing && (
                <div className="absolute inset-x-0 h-1 bg-cyan-400 shadow-[0_0_15px_#06b6d4] animate-bounce top-1/2" />
              )}

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950/80 text-cyan-300 border border-slate-800 backdrop-blur-md">
                  SAMPLE PHOTO #{idxToLetter(selectedSampleIndex)}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-mono text-cyan-400 mb-1">IMAGE FEED</p>
                <p className="text-sm font-bold">{sample.name}</p>
              </div>
            </div>
          </div>

          {/* Right Column: AI Extraction Breakdown */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-bold text-white font-mono">
                    CIVICEYE VISION ENGINE OUTPUT
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${analyzing ? 'animate-spin' : ''}`} />
                  <span>{analyzing ? 'Scanning...' : 'Inference Complete'}</span>
                </div>
              </div>

              {/* Grid Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    Detected Defect
                  </p>
                  <p className="text-sm font-bold text-white truncate">
                    {sample.analysis.issueType}
                  </p>
                  <p className="text-[10px] text-cyan-400 font-mono mt-0.5">
                    {sample.analysis.confidence}% Confidence
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    Severity & Score
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-rose-400 font-mono">
                      {sample.analysis.severity}
                    </span>
                    <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                      {sample.analysis.priorityScore}/100
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 col-span-2 sm:col-span-1">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    Target Department
                  </p>
                  <p className="text-sm font-bold text-slate-200 truncate">
                    {sample.analysis.department}
                  </p>
                </div>
              </div>

              {/* Detected Key Features List */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 font-mono">
                  Extracted Geometric & Contextual Features
                </p>
                <div className="space-y-2">
                  {sample.analysis.detectedKeyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Duplicate Detection & Action Recommendation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center gap-2.5">
                  <Layers className="w-4 h-4 shrink-0" />
                  <div>
                    <span className="font-bold">Duplicate Clustering:</span> {sample.analysis.duplicatesNearby} matching reports nearby within 500m.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  <div>
                    <span className="font-bold">Target SLA Window:</span> Dispatch within {sample.analysis.recommendedSLAHours} hours.
                  </div>
                </div>
              </div>
            </div>

            {/* AI Summary Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 text-xs text-slate-300 flex items-center justify-between font-mono">
              <span className="text-cyan-300 font-bold">SUMMARY:</span>
              <span className="ml-2 text-slate-300 truncate">{sample.analysis.summary}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function idxToLetter(index: number) {
  return String.fromCharCode(65 + index);
}
