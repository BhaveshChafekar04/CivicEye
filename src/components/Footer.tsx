import React from 'react';
import { Eye, Github, Twitter, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenReportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReportModal }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Eye className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Civic<span className="text-cyan-400">Eye</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              CivicEye is an AI-powered civic intelligence platform that connects citizens with municipal authorities for automated problem triage, priority SLA routing, and transparent proof of resolution.
            </p>

            <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (Amravati Grid)</span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase font-mono text-[11px] tracking-wider">
              Platform
            </p>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenReportModal} className="hover:text-cyan-400 transition-colors">
                  Citizen Reporting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-engine')} className="hover:text-cyan-400 transition-colors">
                  AI Vision Triage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('live-map')} className="hover:text-cyan-400 transition-colors">
                  Live City Map
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('platform')} className="hover:text-cyan-400 transition-colors">
                  Analytics & Telemetry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase font-mono text-[11px] tracking-wider">
              Solutions
            </p>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('community')} className="hover:text-cyan-400 transition-colors">
                  For Citizens
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('authorities')} className="hover:text-cyan-400 transition-colors">
                  For Authorities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('platform')} className="hover:text-cyan-400 transition-colors">
                  Smart Cities Pilot
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('community')} className="hover:text-cyan-400 transition-colors">
                  Campus & Enterprise
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase font-mono text-[11px] tracking-wider">
              Company
            </p>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-cyan-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <a href="#privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-cyan-400 transition-colors">
                  Security Audit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 CivicEye Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Twitter / X</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">GitHub</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
