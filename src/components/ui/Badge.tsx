import React from 'react';
import { IssueSeverity, IssueStatus } from '../../types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'severity' | 'status' | 'category' | 'cyan' | 'slate';
  severity?: IssueSeverity;
  status?: IssueStatus;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  severity,
  status,
  className = ''
}) => {
  let colorStyles = 'bg-slate-800/80 text-slate-300 border-slate-700/80';

  if (variant === 'severity' && severity) {
    switch (severity) {
      case 'CRITICAL':
        colorStyles = 'bg-rose-500/15 text-rose-400 border-rose-500/30';
        break;
      case 'HIGH':
        colorStyles = 'bg-amber-500/15 text-amber-400 border-amber-500/30';
        break;
      case 'MEDIUM':
        colorStyles = 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30';
        break;
      case 'LOW':
        colorStyles = 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
        break;
    }
  } else if (variant === 'status' && status) {
    switch (status) {
      case 'Reported':
        colorStyles = 'bg-slate-800 text-slate-300 border-slate-700';
        break;
      case 'Under Review':
        colorStyles = 'bg-sky-500/15 text-sky-400 border-sky-500/30';
        break;
      case 'In Progress':
        colorStyles = 'bg-amber-500/15 text-amber-400 border-amber-500/30';
        break;
      case 'Resolved':
        colorStyles = 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
        break;
      case 'Verified':
        colorStyles = 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
        break;
    }
  } else if (variant === 'cyan') {
    colorStyles = 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border backdrop-blur-sm whitespace-nowrap transition-colors ${colorStyles} ${className}`}
    >
      {children}
    </span>
  );
};
