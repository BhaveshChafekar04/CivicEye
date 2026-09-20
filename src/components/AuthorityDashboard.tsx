import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, AlertCircle, Clock, CheckCircle2, Users, ArrowUpRight, Filter, Zap, RefreshCw } from 'lucide-react';
import { Badge } from './ui/Badge';

interface AuthorityDashboardProps {
  onOpenRequestDemoModal: () => void;
}

export const AuthorityDashboard: React.FC<AuthorityDashboardProps> = ({ onOpenRequestDemoModal }) => {
  const [activeTab, setActiveTab] = useState<'queue' | 'departments' | 'sla'>('queue');

  const priorityQueue = [
    {
      id: '1',
      title: 'Pothole — Badnera Road Flyover Descent',
      dept: 'Roads & Infrastructure',
      score: 94,
      severity: 'CRITICAL' as const,
      slaRemaining: '18h remaining',
      status: 'In Progress',
      assigned: 'Patch Team 4'
    },
    {
      id: '2',
      title: 'Water Main Pipe Burst — Rajapeth Square',
      dept: 'Water Supply Board',
      score: 91,
      severity: 'CRITICAL' as const,
      slaRemaining: '6h remaining',
      status: 'In Progress',
      assigned: 'Rapid Hydro Unit B'
    },
    {
      id: '3',
      title: 'Solid Waste Dumping — Camp School Zone',
      dept: 'Sanitation & Waste',
      score: 82,
      severity: 'HIGH' as const,
      slaRemaining: '28h remaining',
      status: 'Under Review',
      assigned: 'Unassigned'
    },
    {
      id: '4',
      title: 'Streetlight Feeder Blackout — Sai Nagar',
      dept: 'Electrical & Lighting',
      score: 68,
      severity: 'MEDIUM' as const,
      slaRemaining: '36h remaining',
      status: 'In Progress',
      assigned: 'MSEDCL Unit 2'
    }
  ];

  return (
    <section id="authorities" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>MUNICIPAL ENTERPRISE SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            From thousands of complaints to one clear priority list.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            CivicEye equips city administrators, dispatchers, and field supervisors with algorithmic triage, SLA countdowns, and automated crew dispatching.
          </p>
        </div>

        {/* Enterprise Dashboard Box Preview */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Dashboard Header Bar */}
          <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-sm font-bold text-white">
                AMRAVATI MUNICIPAL COMMAND CENTER
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenRequestDemoModal}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold text-xs transition-colors shadow-md shadow-cyan-500/20"
              >
                Request Enterprise Demo
              </button>
            </div>
          </div>

          {/* Metric Overview Cards */}
          <div className="p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 border-b border-slate-800">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-xs text-slate-400 font-medium">Active City Issues</div>
              <div className="text-2xl font-extrabold text-white font-mono mt-1">1,284</div>
              <div className="text-[10px] text-cyan-400 font-mono mt-1">+12 in last hour</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-xs text-slate-400 font-medium">Critical / High Priority</div>
              <div className="text-2xl font-extrabold text-rose-400 font-mono mt-1">82</div>
              <div className="text-[10px] text-rose-400 font-mono mt-1">SLA Target &lt; 24h</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-xs text-slate-400 font-medium">Crews Dispatched</div>
              <div className="text-2xl font-extrabold text-amber-400 font-mono mt-1">341</div>
              <div className="text-[10px] text-amber-300 font-mono mt-1">Field Units Active</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <div className="text-xs text-slate-400 font-medium">Resolved This Month</div>
              <div className="text-2xl font-extrabold text-emerald-400 font-mono mt-1">861</div>
              <div className="text-[10px] text-emerald-400 font-mono mt-1">98.4% Proof Verified</div>
            </div>
          </div>

          {/* Priority Queue Table */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                AI Priority Queue (Top Dispatches)
              </h3>
              <span className="text-xs text-slate-400">Auto-Sorted by AI Risk Metric</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-y border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Rank</th>
                    <th className="py-3 px-4">Issue & Location</th>
                    <th className="py-3 px-4">Department</th>
                    <th className="py-3 px-4">AI Score</th>
                    <th className="py-3 px-4">Severity</th>
                    <th className="py-3 px-4">SLA Clock</th>
                    <th className="py-3 px-4">Dispatch Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {priorityQueue.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-cyan-400">
                        #{item.id}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-white max-w-xs truncate">
                        {item.title}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">{item.dept}</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-cyan-300">
                        {item.score}/100
                      </td>
                      <td className="py-3.5 px-4">
                        <Badge variant="severity" severity={item.severity}>
                          {item.severity}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-amber-300">
                        {item.slaRemaining}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-200">
                        {item.assigned}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
