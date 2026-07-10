"use client";

import React from "react";
import { MessageCircle, CheckCheck, Smartphone, MoreVertical, Paperclip, Send } from "lucide-react";
import { motion } from "framer-motion";

const WhatsappPreviewUI: React.FC = () => {
  return (
    <div className="relative w-full h-[260px] min-[360px]:h-[290px] min-[400px]:h-[330px] min-[480px]:h-[360px] sm:h-[410px] md:h-[460px] flex items-center justify-center font-sans mt-0">
      <div className="relative w-[580px] h-full flex items-center justify-center scale-[0.53] min-[360px]:scale-[0.6] min-[400px]:scale-[0.68] min-[480px]:scale-[0.75] sm:scale-[0.85] md:scale-95 lg:scale-100 origin-center">

        {/* Back Card: Business Profile */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute right-[0px] top-[70px] w-[320px] bg-white/80 backdrop-blur-xl rounded-[24px] shadow-[0_8px_30px_rgba(16,185,129,0.08)] border border-emerald-100 p-5 pb-8 z-0"
        >
          <h4 className="font-bold text-slate-900 text-[18px] mb-6 text-center">Business Profile</h4>
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00a884] to-emerald-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-white font-bold text-xl tracking-widest">V</span>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-slate-800 flex items-center justify-center gap-1">
                Vialogue Inc.
                <span className="w-3.5 h-3.5 bg-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCheck size={8} className="text-white" strokeWidth={3} />
                </span>
              </p>
              <p className="text-xs text-slate-500">Official Business Account</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Industry</span>
              <span className="font-medium text-slate-800">Technology</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Catalog</span>
              <span className="font-medium text-[#00a884] cursor-pointer">View Products</span>
            </div>
          </div>
        </motion.div>

        {/* Front Card: WhatsApp Chat */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute left-[0px] top-[20px] w-[320px] bg-[#efeae2] rounded-[24px] shadow-[0_20px_50px_rgba(16,185,129,0.15)] border border-emerald-100 overflow-hidden z-10 flex flex-col"
        >
        {/* Chat Header */}
        <div className="bg-[#075e54] text-white p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold">Vialogue Alerts</p>
              <p className="text-[10px] text-white/80">Active now</p>
            </div>
          </div>
          <MoreVertical size={18} className="text-white/80" />
        </div>
 
        {/* Chat Body */}
        <div className="p-3 space-y-3 flex-1">
          {/* Message Bubble: Notification */}
          <div className="bg-white rounded-lg rounded-tl-none p-2.5 max-w-[85%] shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-5 bg-emerald-50 rounded-md flex items-center justify-center">
                <Smartphone size={12} className="text-[#00a884]" />
              </span>
              <span className="text-xs font-bold text-slate-800">Login Alert</span>
            </div>
            <p className="text-[12px] text-slate-700 leading-snug">
              Your verification code is <span className="font-bold">849302</span>. Please do not share it.
            </p>
            <div className="text-[9px] text-slate-400 text-right mt-0.5">10:42 AM</div>
          </div>
 
          {/* Message Bubble: Promotional/Template */}
          <div className="bg-white rounded-lg rounded-tl-none p-2.5 max-w-[85%] shadow-sm border border-slate-100">
            <div className="w-full h-20 rounded-md mb-1.5 overflow-hidden relative border border-slate-100">
              <img src="/services/wapp/special_offer.png" className="w-full h-full object-cover" alt="Special Offer" />
              <span className="absolute top-1.5 left-1.5 text-white font-bold text-[8px] uppercase tracking-widest bg-black/45 px-1 py-0.5 rounded backdrop-blur-sm">Special Offer</span>
            </div>
            <p className="text-[12px] text-slate-700 leading-snug">
              Upgrade your plan today and get 50% off for the first 3 months! 🎉
            </p>
            <div className="flex items-center justify-end gap-1 mt-0.5 text-[9px] text-slate-400">
              <span>10:45 AM</span>
            </div>
            {/* Action Buttons */}
            <div className="mt-2 border-t border-slate-100 pt-2">
              <button className="w-full py-1 bg-slate-50 hover:bg-slate-100 text-[#00a884] text-[11px] font-bold rounded flex items-center justify-center gap-1 transition-colors">
                Claim Offer
              </button>
            </div>
          </div>
        </div>
 
        {/* Input Area */}
        <div className="bg-[#f0f0f0] p-1.5 flex items-center gap-2 border-t border-slate-200">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500">
            <Paperclip size={18} />
          </div>
          <div className="flex-1 bg-white rounded-full px-4 py-1.5 text-xs text-slate-400 border border-slate-200">
            Type a message...
          </div>
          <div className="w-8 h-8 bg-[#00a884] rounded-full flex items-center justify-center text-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
            <Send size={12} className="ml-0.5" />
          </div>
        </div>

      </motion.div>
      </div>
    </div>
  );
};

export default WhatsappPreviewUI;
