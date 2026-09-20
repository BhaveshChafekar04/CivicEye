import React, { useState } from 'react';
import { X, MapPin, ThumbsUp, Send, CheckCircle2, Clock, ShieldCheck, MessageSquare, AlertTriangle } from 'lucide-react';
import { CivicIssue } from '../../types';
import { Badge } from '../ui/Badge';

interface IssueDetailModalProps {
  issue: CivicIssue | null;
  onClose: () => void;
  onUpvote: (issueId: string) => void;
  onAddComment: (issueId: string, text: string) => void;
}

export const IssueDetailModal: React.FC<IssueDetailModalProps> = ({
  issue,
  onClose,
  onUpvote,
  onAddComment
}) => {
  const [commentText, setCommentText] = useState('');

  if (!issue) return null;

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(issue.id, commentText);
    setCommentText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              {issue.ticketNumber}
            </span>
            <Badge variant="severity" severity={issue.severity}>
              {issue.severity}
            </Badge>
            <Badge variant="status" status={issue.status}>
              {issue.status}
            </Badge>
          </div>

          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Title & Image */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">{issue.title}</h2>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-4">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{issue.locationName} ({issue.district})</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-800">
                <img src={issue.imageUrl} alt="Reported Hazard" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-cyan-300">
                  REPORTED HAZARD
                </span>
              </div>

              {issue.resolvedImageUrl ? (
                <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-800">
                  <img src={issue.resolvedImageUrl} alt="Resolved Proof" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-emerald-500/90 text-slate-950 font-bold px-2 py-1 rounded text-[10px] font-mono">
                    RESOLVED PROOF ✓
                  </span>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between text-xs">
                  <div>
                    <div className="text-xs font-bold text-cyan-400 uppercase font-mono mb-2">
                      AI TELEMETRY SUMMARY
                    </div>
                    <div className="space-y-2 text-slate-300">
                      <div><span className="text-slate-500">Priority Score:</span> <span className="font-mono font-bold text-white">{issue.priorityScore}/100</span></div>
                      <div><span className="text-slate-500">Department:</span> {issue.department}</div>
                      <div><span className="text-slate-500">Nearby Duplicates:</span> {issue.duplicateCount} merged reports</div>
                      <div><span className="text-slate-500">Affected Citizens:</span> ~{issue.affectedPeople} nearby</div>
                    </div>
                  </div>

                  <button
                    onClick={() => onUpvote(issue.id)}
                    className={`w-full py-2.5 rounded-xl border font-semibold flex items-center justify-center gap-2 transition-all ${
                      issue.hasUpvoted
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{issue.upvotes} Citizens Affected (+1 Me Too)</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Description & Timeline */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
            <div className="font-semibold text-slate-300 mb-1">Issue Description</div>
            <p className="text-slate-400 leading-relaxed mb-4">{issue.description}</p>

            <div className="font-semibold text-cyan-400 font-mono mb-3">PROGRESS TIMELINE</div>
            <div className="space-y-3">
              {issue.timeline.map((evt, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">{evt.title} <span className="text-[10px] text-slate-500 font-mono ml-2">{evt.date}</span></div>
                    <div className="text-slate-400 text-[11px]">{evt.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-3">
            <div className="font-semibold text-slate-300 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              Community Discussion ({issue.comments.length})
            </div>

            <div className="space-y-2 max-h-36 overflow-y-auto">
              {issue.comments.length === 0 ? (
                <p className="text-slate-500 italic">No comments yet. Be the first to post!</p>
              ) : (
                issue.comments.map((c) => (
                  <div key={c.id} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center justify-between font-semibold text-white mb-1">
                      <span>{c.user} <span className="text-[10px] text-cyan-400 font-mono">({c.role})</span></span>
                      <span className="text-[10px] text-slate-500">{c.time}</span>
                    </div>
                    <p className="text-slate-300 text-[11px]">{c.text}</p>
                  </div>
                ))
              )}
            </div>

            {/* Add Comment Input */}
            <form onSubmit={handleSendComment} className="flex gap-2 pt-2">
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="flex-1 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-cyan-400 text-slate-950 font-bold rounded-xl hover:bg-cyan-300"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
