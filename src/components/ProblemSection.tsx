import React from 'react';
import { motion } from 'motion/react';
import { Layers, Shuffle, AlertCircle, FileText, Clock, EyeOff, Check } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Layers,
      title: 'Duplicate Noise Overhead',
      description: 'One prominent pothole triggers 50+ individual calls and forms. Helpdesks spend hours manually deduplicating complaints.'
    },
    {
      icon: Shuffle,
      title: 'Misrouted Department Tickets',
      description: 'A water pipe burst gets misassigned to the road paving team, sitting dormant in the wrong queue for weeks.'
    },
    {
      icon: AlertCircle,
      title: 'Subjective & Blind Prioritization',
      description: 'Dangerous main-highway sinkholes get treated with the same urgency as cosmetic paint scratches, ignoring risk density.'
    },
    {
      icon: FileText,
      title: 'Lack of Objective Visual Evidence',
      description: 'Text descriptions like "big hole near corner" lack coordinates, photos, depth measurements, or structural context.'
    },
    {
      icon: Clock,
      title: 'Slow SLA Response Loops',
      description: 'Without real-time triage, critical issues take days to reach field personnel, escalating repair costs exponentially.'
    },
    {
      icon: EyeOff,
      title: 'The Black Hole Citizen Experience',
      description: 'Citizens submit complaints into a void, never knowing if their report was reviewed, dispatched, or resolved.'
    }
  ];

  return (
    <section id="platform" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>THE CIVIC BOTTLENECK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            Cities don't have a reporting problem. <br />
            <span className="text-slate-400 font-normal">They have an information problem.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Traditional municipal helpdesks are overwhelmed by raw data without structure. CivicEye filters noise, structures visual evidence, and creates automated clarity.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs text-cyan-400 font-medium">
                  <span>Solved by CivicEye AI</span>
                  <Check className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
