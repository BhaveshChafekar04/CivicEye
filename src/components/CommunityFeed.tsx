import React from 'react';
import { motion } from 'motion/react';
import { CivicIssue } from '../types';
import { Users, ThumbsUp, MapPin, MessageSquare, ArrowUpRight, Eye } from 'lucide-react';
import { Badge } from './ui/Badge';

interface CommunityFeedProps {
  issues: CivicIssue[];
  onSelectIssue: (issue: CivicIssue) => void;
  onUpvote: (issueId: string) => void;
  onOpenReportModal: () => void;
}

export const CommunityFeed: React.FC<CommunityFeedProps> = ({
  issues,
  onSelectIssue,
  onUpvote,
  onOpenReportModal
}) => {
  return (
    <section id="community" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>COMMUNITY COLLABORATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Your city is everyone's responsibility.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Citizens can upvote existing reports to signal high-traffic impact, add context, and monitor progress together.
            </p>
          </div>

          <button
            onClick={onOpenReportModal}
            className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20 self-start md:self-auto"
          >
            Post New Community Report
          </button>
        </div>

        {/* Community Feed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.slice(0, 6).map((issue) => (
            <div
              key={issue.id}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-slate-800">
                  <img
                    src={issue.imageUrl}
                    alt={issue.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="severity" severity={issue.severity}>
                      {issue.severity}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-cyan-300 border border-slate-800">
                    {issue.status}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 mb-1 font-mono">
                  <span>{issue.ticketNumber}</span>
                  <span>{issue.reportedAt}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 line-clamp-1">
                  {issue.title}
                </h3>

                <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{issue.locationName}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => onUpvote(issue.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
                    issue.hasUpvoted
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                      : 'bg-slate-950 text-slate-400 hover:text-white border-slate-800'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span className="font-bold">{issue.upvotes}</span>
                  <span className="text-[10px] font-normal">Affected</span>
                </button>

                <button
                  onClick={() => onSelectIssue(issue)}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors font-medium"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
