"use client";

import React from "react";
import { Server, Zap, Cloud, Database, Lock, ArrowRightLeft, CheckCircle2 } from "lucide-react";

const RCSPlatform: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Custom UI: Unified Platform Infrastructure */}
        <div className="relative w-full h-[495px] sm:h-[450px] bg-slate-50 rounded-[32px] border border-slate-200 shadow-lg flex flex-col items-center justify-center p-6 sm:p-8 overflow-hidden group">
           <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-100/60 to-transparent"></div>
           
           <h3 className="absolute top-6 left-6 text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
             <Server size={16} /> API Infrastructure
           </h3>

           {/* Central Core */}
           <div className="relative z-10 w-36 h-36 bg-white rounded-full shadow-[0_0_50px_rgba(59,130,246,0.2)] border-4 border-blue-50 flex items-center justify-center mb-10 transform group-hover:scale-105 transition-transform duration-500">
             <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full flex flex-col items-center justify-center shadow-inner">
               <Zap size={32} className="text-white mb-1" />
               <span className="text-white text-[11px] font-bold tracking-wider">CORE</span>
             </div>
             
             {/* Orbital Rings */}
             <div className="absolute inset-[-45px] border-2 border-dashed border-blue-200 rounded-full animate-[spin_25s_linear_infinite]" />
             <div className="absolute inset-[-90px] border border-dashed border-slate-300 rounded-full animate-[spin_35s_linear_infinite_reverse]" />
             
             {/* Orbital Nodes */}
             <div className="absolute -top-[45px] left-1/2 -translate-x-1/2 w-12 h-12 bg-white shadow-lg rounded-full border border-slate-100 flex items-center justify-center">
               <Cloud size={20} className="text-blue-500" />
             </div>
             <div className="absolute top-1/2 -right-[45px] -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full border border-slate-100 flex items-center justify-center">
               <Database size={20} className="text-emerald-500" />
             </div>
             <div className="absolute -bottom-[45px] left-1/2 -translate-x-1/2 w-12 h-12 bg-white shadow-lg rounded-full border border-slate-100 flex items-center justify-center">
               <Lock size={20} className="text-rose-400" />
             </div>
             <div className="absolute top-1/2 -left-[45px] -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full border border-slate-100 flex items-center justify-center">
               <ArrowRightLeft size={20} className="text-amber-500" />
             </div>
           </div>

           {/* Metrics/Status */}
           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full relative z-10 mt-6 sm:mt-8">
              <div className="flex-1 bg-white p-3 sm:p-4 rounded-2xl border border-slate-100 shadow-md flex items-center gap-3 sm:gap-4 hover:-translate-y-1 transition-transform">
                 <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-emerald-500" />
                 </div>
                 <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wide">Uptime</div>
                    <div className="text-base sm:text-lg font-black text-slate-800">99.99%</div>
                 </div>
              </div>
              <div className="flex-1 bg-white p-3 sm:p-4 rounded-2xl border border-slate-100 shadow-md flex items-center gap-3 sm:gap-4 hover:-translate-y-1 transition-transform">
                 <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Zap size={20} className="text-blue-500" />
                 </div>
                 <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wide">Latency</div>
                    <div className="text-base sm:text-lg font-black text-slate-800">&lt;50ms</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
             <span className="text-[#884CED]">RCS Platform</span> Capabilities
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium mb-8">
            Vialogue is not just an API—it’s a <span className="font-bold text-blue-600">complete RCS engagement platform</span> that helps businesses manage next-generation messaging end-to-end.
          </p>
          
          <ul className="space-y-6">
            {[
              "Official RCS agent onboarding and verification.",
              "Rich media, carousels, and suggested actions.",
              "Advanced message automation and fallback to SMS.",
              "Detailed analytics, tracking, and role-based access."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 shrink-0">
                  <CheckCircle2 size={14} className="text-blue-600" />
                </div>
                <span className="text-[17px] font-semibold text-slate-800 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="text-lg font-bold text-slate-900 bg-blue-50 p-4 rounded-xl border border-blue-100">
              Everything you need to run high-performing RCS communication from one centralized hub.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RCSPlatform;
