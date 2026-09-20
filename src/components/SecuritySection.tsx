import React from 'react';
import { ShieldCheck, Lock, Eye, Server } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 p-8 rounded-3xl border border-slate-800">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SECURITY & PRIVACY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Enterprise-grade security for municipal data.
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              CivicEye incorporates strict location anonymization controls, role-based authority access (RBAC), and encrypted audit trails.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <Lock className="w-5 h-5 text-cyan-400 mb-2" />
              <div className="font-bold text-white mb-1">Anonymized PII</div>
              <div className="text-slate-400 text-[11px]">Citizen contact info masked from public feeds.</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <Eye className="w-5 h-5 text-cyan-400 mb-2" />
              <div className="font-bold text-white mb-1">Role Access</div>
              <div className="text-slate-400 text-[11px]">Departmental segregation for worker dispatch.</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <Server className="w-5 h-5 text-cyan-400 mb-2" />
              <div className="font-bold text-white mb-1">Immutable Logs</div>
              <div className="text-slate-400 text-[11px]">Tamper-proof audit trails for government compliance.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
