"use client";

import React from "react";
import { MessageSquare, CheckCircle, Smartphone, MoreVertical, ShieldCheck, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

const RCSPreviewUI: React.FC = () => {
  return (
    <div className="relative w-full h-[260px] min-[360px]:h-[290px] min-[400px]:h-[330px] min-[480px]:h-[360px] sm:h-[410px] md:h-[460px] flex items-center justify-center font-sans mt-0">
      <div className="relative w-[610px] h-full flex items-center justify-center scale-[0.5] min-[360px]:scale-[0.57] min-[400px]:scale-[0.65] min-[480px]:scale-[0.75] sm:scale-[0.85] md:scale-95 lg:scale-100 origin-center">

        {/* Back Card: API Infrastructure */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute right-[0px] top-[70px] w-[320px] bg-white/80 backdrop-blur-xl rounded-[24px] shadow-[0_8px_30px_rgba(124,58,237,0.08)] border border-purple-100 p-5 pb-8 z-0"
        >
          <h4 className="font-bold text-slate-900 text-[18px] mb-6 text-center">Verified Sender</h4>
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-white font-bold text-xl tracking-widest">V</span>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-slate-800 flex items-center justify-center gap-1">
                Vialogue
                <span className="w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle size={8} className="text-white" strokeWidth={3} />
                </span>
              </p>
              <p className="text-xs text-slate-500">Verified Business</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Industry</span>
              <span className="font-medium text-slate-800">Communications</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Security</span>
              <span className="font-medium flex items-center gap-1 text-emerald-500"><ShieldCheck size={12} /> Protected</span>
            </div>
          </div>
        </motion.div>

        {/* Front Card: RCS Chat */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute left-[0px] top-[20px] w-[350px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(124,58,237,0.15)] border border-purple-100 overflow-hidden z-10 flex flex-col"
        >
        {/* Chat Header */}
        <div className="bg-white border-b border-slate-100 p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <MessageSquare size={16} className="text-[#7C3AED]" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 flex items-center gap-1">
                Vialogue <CheckCircle size={12} className="text-[#7C3AED]" />
              </p>
            </div>
          </div>
          <MoreVertical size={18} className="text-slate-400" />
        </div>
 
        {/* Chat Body */}
        <div className="bg-slate-50 p-3 space-y-3 flex-1">
          {/* Message Bubble: Notification */}
          <div className="bg-white rounded-2xl rounded-tl-sm p-2.5 max-w-[85%] shadow-sm border border-slate-100">
            <p className="text-[12px] text-slate-700 leading-snug">
              Hi! Your flight to New York is confirmed. Check-in is now open. ✈️
            </p>
            <div className="text-[9px] text-slate-400 text-right mt-0.5">10:42 AM</div>
          </div>
 
          {/* Message Bubble: Rich Card */}
          <div className="bg-white rounded-2xl rounded-tl-sm p-0 max-w-[85%] shadow-sm border border-slate-100 overflow-hidden">
            <div className="w-full h-20 relative">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400" alt="Flight" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                <span className="text-white font-bold text-xs">Boarding Pass</span>
              </div>
            </div>
            <div className="p-2.5">
              <p className="text-[11px] font-bold text-slate-800 mb-0.5">Flight VL-402</p>
              <p className="text-[10px] text-slate-500 leading-snug">
                Gate closes at 08:30 AM. Tap below to view your boarding pass.
              </p>
              <div className="flex items-center justify-end gap-1 mt-0.5 text-[9px] text-slate-400">
                <span>10:45 AM</span>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="border-t border-slate-100 flex flex-col">
              <button className="w-full py-2 hover:bg-slate-50 text-[#7C3AED] text-[11px] font-bold transition-colors">
                View Boarding Pass
              </button>
            </div>
          </div>
        </div>
 
        {/* Input Area */}
        <div className="bg-white p-2 flex items-center gap-2 border-t border-slate-100">
          <div className="flex-1 bg-slate-100 rounded-full px-4 py-1.5 text-[11px] text-slate-400">
            Chat message
          </div>
        </div>

      </motion.div>
      </div>
    </div>
  );
};

export default RCSPreviewUI;
