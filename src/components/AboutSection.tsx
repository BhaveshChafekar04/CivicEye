import React from 'react';
import { Sparkles, HeartHandshake, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-6">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>OUR MISSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans mb-8">
            Building cities that can see, understand, and respond.
          </h2>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative text-left backdrop-blur-xl">
            <blockquote className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed mb-6">
              "CivicEye exists to bridge the gap between the citizens who experience everyday civic problems and the municipal systems responsible for fixing them. By combining multimodal computer vision with automated priority dispatch, we turn raw complaints into city-wide intelligence."
            </blockquote>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold text-lg font-mono">
                CE
              </div>
              <div>
                <div className="text-base font-bold text-white">CivicEye Founders & Research Team</div>
                <div className="text-xs text-cyan-400">AI & Urban Mobility Lab</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
