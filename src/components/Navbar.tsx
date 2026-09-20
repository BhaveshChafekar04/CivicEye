import React, { useState, useEffect } from 'react';
import { Eye, PlusCircle, Menu, X, ShieldCheck, UserCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenReportModal: () => void;
  onOpenRequestDemoModal: () => void;
  activeView: 'citizen' | 'authority';
  onToggleView: (view: 'citizen' | 'authority') => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReportModal,
  onOpenRequestDemoModal,
  activeView,
  onToggleView,
  onNavigate
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', id: 'platform' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'AI Engine', id: 'ai-engine' },
    { name: 'Live City Map', id: 'live-map' },
    { name: 'Community', id: 'community' },
    { name: 'For Authorities', id: 'authorities' },
    { name: 'About', id: 'about' }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`civic-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 shadow-2xl py-4'
          : 'bg-slate-950/50 backdrop-blur-md border-b border-slate-800/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:bg-cyan-400 transition-colors">
              <div className="w-4 h-4 border-2 border-slate-950 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-slate-950 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  Civic<span className="text-cyan-400">Eye</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-widest uppercase rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  AI
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* View Mode Toggle Switcher */}
            <div className="flex items-center bg-slate-900/90 p-1 rounded-full border border-slate-800 text-xs">
              <button
                onClick={() => onToggleView('citizen')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all ${
                  activeView === 'citizen'
                    ? 'bg-slate-800 text-cyan-400 shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                Citizen
              </button>
              <button
                onClick={() => onToggleView('authority')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all ${
                  activeView === 'authority'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Authority
              </button>
            </div>

            <button
              onClick={onOpenRequestDemoModal}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </button>

            <button
              onClick={onOpenReportModal}
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full text-sm font-bold shadow-lg shadow-cyan-500/20 transition-all active:scale-95 flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-slate-950" />
              Report an Issue
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenReportModal}
              className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-cyan-500 rounded-full flex items-center gap-1"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Report
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-xl border border-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/90 shadow-2xl p-6 transition-all animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {/* View Mode Switcher in Mobile */}
            <div className="p-3 bg-slate-900/90 rounded-2xl border border-slate-800">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Select View Perspective
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onToggleView('citizen');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-center gap-2 py-2 text-xs font-medium rounded-xl border ${
                    activeView === 'citizen'
                      ? 'bg-slate-800 text-cyan-400 border-slate-700'
                      : 'bg-slate-950/50 text-slate-400 border-slate-800'
                  }`}
                >
                  <UserCheck className="w-4 h-4" />
                  Citizen Portal
                </button>
                <button
                  onClick={() => {
                    onToggleView('authority');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-center gap-2 py-2 text-xs font-medium rounded-xl border ${
                    activeView === 'authority'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                      : 'bg-slate-950/50 text-slate-400 border-slate-800'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  Authority Suite
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1 py-2 border-y border-slate-800/60">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="flex items-center justify-between py-2.5 px-3 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-xl transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReportModal();
                }}
                className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-cyan-500 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                Report Civic Issue
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRequestDemoModal();
                }}
                className="w-full py-3 px-4 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors"
              >
                Request Enterprise Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
