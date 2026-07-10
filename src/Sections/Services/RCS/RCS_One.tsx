"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ImageIcon, PlayCircle, MousePointerClick, Zap, ShieldCheck } from "lucide-react";

const RCS_One: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 md:px-20 lg:px-40 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side Text Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Transform "Texting" into <br/>
              <span className="text-[#884CED]">
                "Connecting"
              </span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
              In a world where attention is scarce, standard text messages fall short. <strong>RCS (Rich Communication Services)</strong> is the next generation of business messaging—bridging the gap between SMS and modern chat apps.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 border border-purple-200 flex items-center justify-center shadow-sm">
                    <ImageIcon size={16} />
                 </div>
                 <span className="text-slate-700 font-semibold text-base">Rich Media & Visuals</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 border border-blue-200 flex items-center justify-center shadow-sm">
                    <MousePointerClick size={16} />
                 </div>
                 <span className="text-slate-700 font-semibold text-base">Interactive Buttons</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center justify-center shadow-sm">
                    <ShieldCheck size={16} />
                 </div>
                 <span className="text-slate-700 font-semibold text-base">Verified Sender Badges</span>
              </div>
            </div>
          </div>

          {/* Right Side UI Comparison */}
          <div className="relative w-full h-[300px] min-[360px]:h-[340px] min-[400px]:h-[385px] min-[480px]:h-[440px] sm:h-[495px] md:h-[550px] mx-auto flex items-center justify-center overflow-hidden">
            <div className="relative w-[550px] h-[550px] flex items-center justify-center scale-[0.54] min-[360px]:scale-[0.62] min-[400px]:scale-[0.7] min-[480px]:scale-[0.8] sm:scale-[0.9] md:scale-100 origin-center flex-shrink-0">
            
            {/* SVG Connection Arrow */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 550 550" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#7C3AED" />
                </marker>
              </defs>
              
              {/* Base path */}
              <path
                d="M 215 180 C 310 180, 210 330, 275 330"
                stroke="#e2e8f0"
                strokeWidth="2"
                fill="none"
              />
              
              {/* Animated overlay path */}
              <motion.path
                d="M 215 180 C 310 180, 210 330, 275 330"
                stroke="url(#curve-gradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8 6"
                animate={{ strokeDashoffset: [-28, 0] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
                markerEnd="url(#arrowhead)"
              />

              {/* Moving energy glowing particle */}
              <circle r="4" fill="#7C3AED">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 215 180 C 310 180, 210 330, 275 330" />
              </circle>
            </svg>

            {/* Old SMS (Background) */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="absolute left-2 top-8 w-[230px] bg-white rounded-[24px] shadow-lg border border-slate-200 overflow-hidden transform -rotate-6 grayscale opacity-80 z-10"
            >
               <div className="bg-slate-100 border-b border-slate-200 p-3 flex justify-between items-center">
                 <span className="text-xs font-bold text-slate-600 flex items-center gap-1"><MessageSquare size={12}/> Text Message</span>
               </div>
               <div className="p-4 bg-slate-50 min-h-[280px] flex flex-col gap-3">
                 <div className="bg-slate-200 text-slate-700 p-3 rounded-2xl rounded-tl-sm text-[13px] leading-relaxed w-[90%] shadow-sm">
                   Vialogue: Your order #9928 is out for delivery. Track here: http://track.ly/883
                 </div>
               </div>
            </motion.div>

            {/* New RCS (Foreground) */}
            <motion.div 
               initial={{ opacity: 0, x: 30, y: 30 }}
               whileInView={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               viewport={{ once: true }}
               className="absolute right-2 bottom-8 w-[270px] bg-white rounded-[24px] shadow-2xl border-4 border-white overflow-hidden z-20"
            >
               <div className="bg-white border-b border-slate-100 p-3 flex items-center gap-2">
                 <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center"><Zap size={12} className="text-[#7C3AED]"/></div>
                 <span className="text-xs font-bold text-slate-800">Vialogue Verified</span>
               </div>
               <div className="p-4 bg-slate-50 min-h-[350px] flex flex-col gap-3">
                 <div className="bg-white text-slate-800 p-0 rounded-2xl rounded-tl-sm text-[13px] leading-relaxed w-full shadow-md border border-slate-100 overflow-hidden">
                   <div className="h-32 bg-purple-100 relative">
                     <img src="/services/rcs/rcs_light_ad.png" className="w-full h-full object-cover"/>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
                        <span className="text-white font-bold text-sm">Order Out for Delivery! 📦</span>
                     </div>
                   </div>
                   <div className="p-3 pb-1 border-b border-slate-100">
                     <p className="text-[12px] text-slate-500 font-medium">Your package will arrive by 5 PM today.</p>
                   </div>
                   <div className="text-center text-[13px] font-bold text-[#7C3AED] py-3 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-100 flex justify-center items-center gap-1">
                     <MousePointerClick size={16}/> Track Order
                   </div>
                   <div className="text-center text-[13px] font-bold text-[#7C3AED] py-3 cursor-pointer hover:bg-slate-50 transition-colors">
                     Reschedule
                   </div>
                 </div>
               </div>
            </motion.div>

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-400/20 blur-[80px] rounded-full pointer-events-none -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RCS_One;
