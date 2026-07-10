import React, { useEffect, useRef, useState } from "react";
import { Server, Database, Cloud, Zap, CheckCircle2, Lock, ArrowRightLeft } from "lucide-react";
import { motion } from "framer-motion";

const API_One: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`py-12 md:pt-20 bg-white transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center heading-two px-4 text-slate-900">
        Unified WhatsApp Messaging Platform Built to Scale Businesses
      </h2>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Custom UI: Unified Platform Infrastructure */}
        <div className="relative w-full h-[495px] sm:h-[450px] bg-slate-50 rounded-[32px] border border-slate-200 shadow-lg flex flex-col items-center justify-center p-6 sm:p-8 overflow-hidden group">
           <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-purple-100/60 to-transparent"></div>
           
           <h3 className="absolute top-6 left-6 text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
             <Server size={16} /> API Infrastructure
           </h3>

           {/* Central Core */}
           <div className="relative z-10 w-36 h-36 bg-white rounded-full shadow-[0_0_50px_rgba(124,58,237,0.2)] border-4 border-purple-50 flex items-center justify-center mb-10 transform group-hover:scale-105 transition-transform duration-500">
             <div className="w-24 h-24 bg-gradient-to-tr from-[#7C3AED] to-purple-400 rounded-full flex flex-col items-center justify-center shadow-inner">
               <Zap size={32} className="text-white mb-1" />
               <span className="text-white text-[11px] font-bold tracking-wider">CORE</span>
             </div>
             
             {/* Orbital Rings */}
             <div className="absolute inset-[-45px] border-2 border-dashed border-purple-200 rounded-full animate-[spin_25s_linear_infinite]" />
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
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                     <Zap size={20} className="text-purple-500" />
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
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium mb-8">
            Vialogue is not just an API—it’s a <span className="font-bold text-brand-purple">complete WhatsApp engagement platform</span> that helps businesses manage messaging end-to-end.
          </p>
          
          <ul className="space-y-6">
            {[
              "Official WhatsApp onboarding and seamless setup.",
              "Rich template creation and instant approvals.",
              "Advanced message automation and broadcast flows.",
              "Detailed analytics, tracking, and role-based access."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1 shrink-0">
                  <CheckCircle2 size={14} className="text-brand-purple" />
                </div>
                <span className="text-[17px] font-semibold text-slate-800 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="text-lg font-bold text-slate-900 bg-purple-50 p-4 rounded-xl border border-purple-100">
              Everything you need to run high-performing WhatsApp communication from one centralized hub.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default API_One;