"use client";

import React from "react";
import { ShieldCheck, AlertTriangle, CheckCircle2, ArrowRight, Radio } from "lucide-react";
import { motion } from "framer-motion";

const SMSPreviewUI: React.FC = () => {
  return (
    <div className="relative w-full h-[250px] min-[360px]:h-[285px] min-[400px]:h-[315px] min-[480px]:h-[345px] sm:h-[380px] md:h-[400px] flex items-center justify-center font-sans mt-0 lg:-mt-10">
      <div className="relative w-[580px] h-full flex items-center justify-center scale-[0.53] min-[360px]:scale-[0.6] min-[400px]:scale-[0.68] min-[480px]:scale-[0.75] sm:scale-[0.85] md:scale-95 lg:scale-100 origin-center translate-x-0 lg:translate-x-10">

      {/* Back Card: Secure & Scalable Messaging */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute right-[0%] lg:right-[5%] top-[5%] w-[320px] bg-white/80 backdrop-blur-xl rounded-[24px] shadow-[0_8px_30px_rgba(37,99,235,0.06)] border border-blue-100 p-5 pb-8 z-0"
      >
        <h4 className="font-bold text-slate-900 text-[18px] mb-6 text-center">Secure &amp; Scalable Messaging</h4>
        <div className="flex justify-between items-start px-2 gap-4">
          {/* API Integration */}
          <div className="flex flex-col items-center gap-3 flex-1">
            <div className="w-[100px] h-[100px] bg-blue-50/50 rounded-[20px] flex items-center justify-center relative overflow-hidden border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center border-4 border-white relative z-10 shadow-lg">
                <span className="text-white font-bold text-sm tracking-widest">API</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-blue-600">Integration</p>
          </div>
          {/* Security */}
          <div className="flex flex-col items-center gap-3 flex-1">
            <div className="w-[100px] h-[100px] bg-cyan-50/50 rounded-[20px] flex items-center justify-center relative overflow-hidden border border-cyan-100">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                <ShieldCheck size={28} className="text-white" strokeWidth={2.5} />
              </div>
            </div>
            <p className="text-sm font-semibold text-cyan-600">Security</p>
          </div>
        </div>

        {/* Decorative routing background block (bottom right of back card) */}
        <div className="absolute -right-[15%] bottom-[10%] w-[180px] h-[80px] bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-2xl z-[-1] flex items-center justify-end pr-4">
          <div className="flex flex-col gap-1.5 items-start pl-8">
            <div className="flex items-center gap-1 text-purple-400"><ArrowRight size={12} strokeWidth={3} /><Radio size={14} strokeWidth={3} /></div>
            <div className="flex items-center gap-1 text-blue-600"><ArrowRight size={12} strokeWidth={3} /><Radio size={14} strokeWidth={3} /></div>
            <div className="flex items-center gap-1 text-cyan-400"><ArrowRight size={12} strokeWidth={3} /><Radio size={14} strokeWidth={3} /></div>
          </div>
        </div>
      </motion.div>

      {/* Front Card: SMS API Messaging */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute left-[5%] lg:left-[5%] bottom-[5%] w-[380px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(37,99,235,0.12)] border border-blue-100 p-6 z-10"
      >
        <h3 className="font-extrabold text-slate-900 text-[20px] mb-6 text-center tracking-tight">SMS API Messaging</h3>

        {/* Message Bubble */}
        <div className="relative bg-slate-50 rounded-2xl p-4 mb-8 border border-slate-100 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-md mt-0.5">
              <span className="text-white font-bold text-lg leading-none mt-0.5">₹</span>
            </div>
            <p className="text-[15px] text-slate-700 font-medium leading-relaxed">
              Your OTP is 123456. Valid<br />for 5 mins. ₹0.50 charge.
            </p>
          </div>

          {/* Warning Popup */}
          <div className="absolute -bottom-5 right-[-10px] bg-white rounded-xl shadow-[0_8px_20px_rgba(244,63,94,0.15)] border border-rose-100 p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center">
              <AlertTriangle size={18} className="text-rose-500 fill-rose-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-slate-900 leading-tight">Warning:</span>
              <span className="text-[11px] text-slate-600 leading-tight">High volume detected</span>
            </div>
          </div>
        </div>

        {/* Delivery Status Row */}
        <div className="flex items-center justify-between mt-8 relative">
          <div className="flex flex-col gap-3">
            <p className="text-[15px] font-semibold text-slate-900">Delivery status</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full shadow-sm">
                <CheckCircle2 size={16} className="text-slate-400 fill-slate-200" />
                <span className="text-sm font-medium text-slate-500">Sent</span>
              </div>
              <div className="h-5 w-[1px] bg-slate-200"></div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full shadow-sm">
                <CheckCircle2 size={16} className="text-emerald-500 fill-emerald-100" />
                <span className="text-sm font-bold text-emerald-600">Delivered</span>
              </div>
            </div>
          </div>

          {/* Arrow Circle */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_4px_20px_rgba(37,99,235,0.4)] cursor-pointer"
          >
            <ArrowRight size={20} className="text-white" />
          </motion.div>
        </div>

      </motion.div>
      </div>
    </div>
  );
};

export default SMSPreviewUI;
