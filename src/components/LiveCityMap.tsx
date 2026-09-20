import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CivicIssue, FilterState } from '../types';
import { CITY_DISTRICTS } from '../data/mockData';
import { MapPin, Filter, Search, Eye, ThumbsUp, AlertTriangle, CheckCircle, RefreshCw, Layers } from 'lucide-react';
import { Badge } from './ui/Badge';

interface LiveCityMapProps {
  issues: CivicIssue[];
  onSelectIssue: (issue: CivicIssue) => void;
  onUpvote: (issueId: string) => void;
}

export const LiveCityMap: React.FC<LiveCityMapProps> = ({ issues, onSelectIssue, onUpvote }) => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'All',
    priority: 'All',
    status: 'All',
    search: '',
    district: 'All Districts'
  });

  const [selectedPinIssue, setSelectedPinIssue] = useState<CivicIssue | null>(issues[0] || null);

  const categories = ['All', 'Roads', 'Garbage', 'Water', 'Lighting', 'Traffic'];
  const priorities = ['All', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];

  const filteredIssues = issues.filter((issue) => {
    if (filters.category !== 'All' && issue.category !== filters.category) return false;
    if (filters.priority !== 'All' && issue.severity !== filters.priority) return false;
    if (filters.district !== 'All Districts' && issue.district !== filters.district) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const matchTitle = issue.title.toLowerCase().includes(q);
      const matchLoc = issue.locationName.toLowerCase().includes(q);
      const matchCat = issue.category.toLowerCase().includes(q);
      if (!matchTitle && !matchLoc && !matchCat) return false;
    }
    return true;
  });

  return (
    <section id="live-map" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>GEOGRAPHIC INTELLIGENCE STREAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A live pulse of the city.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Real-time map visualization of civic issues across Amravati districts with AI severity tags and instant status tracking.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search area or issue..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-semibold flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              Filter Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilters({ ...filters, category: cat })}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filters.category === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs">
            <select
              value={filters.district}
              onChange={(e) => setFilters({ ...filters, district: e.target.value })}
              className="bg-slate-950 text-slate-300 border border-slate-800 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-500"
            >
              {CITY_DISTRICTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <select
              value={filters.priority}
              onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
              className="bg-slate-950 text-slate-300 border border-slate-800 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Priorities</option>
              <option value="CRITICAL">Critical Only</option>
              <option value="HIGH">High Priority</option>
              <option value="MEDIUM">Medium Priority</option>
            </select>
          </div>
        </div>

        {/* Map Container & Status Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Simulated Interactive Map Canvas */}
          <div className="lg:col-span-8 relative h-[520px] rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
            {/* Vector Map Background SVG Pattern */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="city-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#city-grid)" />

              {/* Major Transit Lines / Highways */}
              <path d="M 50 260 C 200 100, 350 400, 750 180" stroke="#0284c7" strokeWidth="4" fill="none" opacity="0.3" />
              <path d="M 320 20 L 320 500" stroke="#0369a1" strokeWidth="3" fill="none" strokeDasharray="4 4" opacity="0.2" />
              <path d="M 100 420 L 680 80" stroke="#334155" strokeWidth="3" fill="none" opacity="0.4" />
            </svg>

            {/* Amravati Zone Labels */}
            <div className="absolute top-6 left-6 text-[10px] font-mono text-slate-600 uppercase tracking-widest pointer-events-none">
              CAMP ZONE
            </div>
            <div className="absolute bottom-6 left-8 text-[10px] font-mono text-slate-600 uppercase tracking-widest pointer-events-none">
              BADNERA CORRIDOR
            </div>
            <div className="absolute top-12 right-12 text-[10px] font-mono text-slate-600 uppercase tracking-widest pointer-events-none">
              SAI NAGAR
            </div>
            <div className="absolute bottom-12 right-16 text-[10px] font-mono text-slate-600 uppercase tracking-widest pointer-events-none">
              RAJAPETH CIRCLE
            </div>

            {/* Map Pins */}
            {filteredIssues.map((issue, idx) => {
              // Convert lat/lng into relative percentages inside map container
              const minLat = 20.9000, maxLat = 20.9500;
              const minLng = 77.7300, maxLng = 77.7800;
              const topPercent = Math.min(90, Math.max(10, 100 - ((issue.lat - minLat) / (maxLat - minLat)) * 100));
              const leftPercent = Math.min(90, Math.max(10, ((issue.lng - minLng) / (maxLng - minLng)) * 100));

              const isSelected = selectedPinIssue?.id === issue.id;

              let pinColor = 'bg-amber-500 text-slate-950 ring-amber-500/40';
              if (issue.severity === 'CRITICAL') pinColor = 'bg-rose-500 text-white ring-rose-500/40';
              if (issue.status === 'Resolved') pinColor = 'bg-emerald-500 text-slate-950 ring-emerald-500/40';

              return (
                <div
                  key={issue.id}
                  style={{ top: `${topPercent}%`, left: `${leftPercent}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                  onClick={() => setSelectedPinIssue(issue)}
                >
                  <div className="relative flex items-center justify-center">
                    {isSelected && (
                      <span className="absolute w-10 h-10 rounded-full bg-cyan-400/30 animate-ping" />
                    )}
                    <div
                      className={`w-8 h-8 rounded-full border-2 border-slate-950 shadow-xl flex items-center justify-center font-extrabold text-xs transition-transform duration-300 ${
                        isSelected ? 'scale-125 ring-4' : 'hover:scale-110'
                      } ${pinColor}`}
                    >
                      {issue.category === 'Roads' ? 'R' : issue.category === 'Water' ? 'W' : issue.category === 'Garbage' ? 'G' : 'L'}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Selected Pin Issue Drawer Card Overlay */}
            {selectedPinIssue && (
              <div className="absolute bottom-4 left-4 right-4 z-30 max-w-md p-4 rounded-2xl bg-slate-900/95 border border-cyan-500/40 shadow-2xl backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <img
                    src={selectedPinIssue.imageUrl}
                    alt={selectedPinIssue.title}
                    className="w-20 h-20 rounded-xl object-cover border border-slate-800 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <Badge variant="severity" severity={selectedPinIssue.severity}>
                        {selectedPinIssue.severity}
                      </Badge>
                      <span className="text-[11px] font-mono text-cyan-400">
                        {selectedPinIssue.ticketNumber}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white truncate mb-1">
                      {selectedPinIssue.title}
                    </h4>

                    <p className="text-[11px] text-slate-400 flex items-center gap-1 mb-2 truncate">
                      <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{selectedPinIssue.locationName}</span>
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                      <button
                        onClick={() => onUpvote(selectedPinIssue.id)}
                        className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{selectedPinIssue.upvotes}</span>
                      </button>

                      <button
                        onClick={() => onSelectIssue(selectedPinIssue)}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 font-semibold text-[11px] transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Full Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live City Status Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  LIVE CITY STATUS (AMRAVATI)
                </span>
                <RefreshCw className="w-4 h-4 text-slate-500" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-2xl font-extrabold text-white font-mono">1,284</div>
                  <div className="text-xs text-slate-400 font-medium">Active Issues</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono">347</div>
                  <div className="text-xs text-slate-400 font-medium">Resolved This Month</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-2xl font-extrabold text-rose-400 font-mono">82</div>
                  <div className="text-xs text-slate-400 font-medium">High Priority</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-2xl font-extrabold text-cyan-400 font-mono">96%</div>
                  <div className="text-xs text-slate-400 font-medium">Response Coverage</div>
                </div>
              </div>

              {/* Active Category Distribution Progress */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-300">Category Density</div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Roads & Potholes</span>
                    <span>42%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-cyan-400 w-[42%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Water Leakage & Mains</span>
                    <span>28%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-sky-400 w-[28%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Sanitation & Waste</span>
                    <span>18%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-amber-400 w-[18%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
