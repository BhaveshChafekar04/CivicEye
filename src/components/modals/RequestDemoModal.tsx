import React, { useState } from 'react';
import { X, Building2, Send, CheckCircle2 } from 'lucide-react';

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (title: string, message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
}

export const RequestDemoModal: React.FC<RequestDemoModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Municipal Commissioner');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast(
      'Demo Request Received',
      `Thank you ${name || 'Administrator'}. A CivicEye Smart Cities specialist will contact ${email || 'your office'} shortly.`,
      'success'
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white font-sans">
              Request Enterprise Authority Demo
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Your Full Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Rajesh Kulkarni"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Organization / Municipal Body</label>
            <input
              type="text"
              required
              placeholder="e.g. Amravati Municipal Corporation"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Official Email Address</label>
            <input
              type="email"
              required
              placeholder="e.g. commissioner@amravaticorp.gov.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Official Designation</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="Municipal Commissioner">Municipal Commissioner / Mayor</option>
              <option value="Smart City Director">Smart City Program Director</option>
              <option value="Chief Engineer PWD">Chief Engineer (PWD / Water)</option>
              <option value="Urban Mobility Lead">Urban Infrastructure Planner</option>
              <option value="IT & Governance Officer">IT & Civic Tech Officer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 mt-2 rounded-xl font-bold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Schedule Live Authority Demo
          </button>
        </form>
      </div>
    </div>
  );
};
