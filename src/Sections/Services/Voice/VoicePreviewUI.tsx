"use client";

import React from "react";
import {
  PhoneCall,
  CheckCircle2,
  Mic,
  Activity,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const VoicePreviewUI: React.FC = () => {
  return (
    <div className="relative w-full h-[250px] min-[360px]:h-[285px] min-[400px]:h-[315px] min-[480px]:h-[345px] sm:h-[380px] md:h-[400px] flex items-center justify-center font-sans select-none mt-0 lg:-mt-10">

      <div className="relative w-[480px] h-full flex items-center justify-center scale-[0.62] min-[360px]:scale-[0.7] min-[400px]:scale-[0.78] min-[480px]:scale-[0.85] sm:scale-[0.95] md:scale-100 origin-center flex-shrink-0 lg:translate-x-10">
        {/* ── Main Hero Image ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src="/services/voice/voice_hero.png"
            alt="Voice Platform"
            className="h-[380px] w-auto object-contain drop-shadow-2xl z-0"
          />
        </motion.div>

        {/* ── Top-right floating card: Live Call Stats ── */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="absolute top-[4%] right-[2%] w-[210px] bg-white/90 backdrop-blur-xl rounded-[20px] shadow-[0_8px_30px_rgba(124,58,237,0.12)] border border-purple-100 p-4 z-20"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7C3AED] to-purple-400 flex items-center justify-center">
              <PhoneCall size={14} className="text-white" />
            </div>
            <span className="text-[13px] font-bold text-slate-800">Live Calls</span>
            <span className="ml-auto flex items-center gap-1">
              <span className="block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-emerald-600 font-semibold">Live</span>
            </span>
          </div>
          <div className="flex items-end gap-1 mb-1">
            <span className="text-2xl font-extrabold text-[#884CED]">
              98.7%
            </span>
            <TrendingUp size={14} className="text-emerald-500 mb-1" />
          </div>
          <p className="text-[11px] text-slate-500 font-medium">Connect rate today</p>
        </motion.div>

        {/* ── Bottom-left floating card: Call Status ── */}
        <motion.div
          initial={{ opacity: 0, x: -40, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="absolute bottom-[4%] left-[2%] w-[260px] bg-white rounded-[20px] shadow-[0_20px_50px_rgba(124,58,237,0.15)] border border-purple-100 p-4 z-20"
        >
          <h4 className="text-[14px] font-bold text-slate-900 mb-3">Voice OTP Delivered</h4>

          {/* Waveform bars */}
          <div className="flex items-end gap-[3px] mb-3 h-8">
            {[3, 6, 9, 14, 10, 7, 12, 16, 10, 5, 8, 14, 11, 6, 4].map((h, i) => (
              <motion.div
                key={i}
                animate={{ scaleY: [1, 1.4, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
                style={{ height: `${h}px`, transformOrigin: "bottom" }}
                className={`w-[4px] rounded-full ${i % 3 === 0 ? "bg-[#7C3AED]" : i % 3 === 1 ? "bg-purple-300" : "bg-purple-200"}`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500 fill-emerald-100" />
              <span className="text-[12px] text-slate-500 font-medium">Connected</span>
            </div>
            <div className="flex items-center gap-2">
              <Mic size={13} className="text-[#7C3AED]" />
              <span className="text-[12px] font-bold text-[#7C3AED]">OTP Spoken</span>
            </div>
          </div>
        </motion.div>

        {/* ── Middle-right small badge: Delivery rate ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut", delay: 0.7 }}
          className="absolute top-[40%] right-[0%] bg-white rounded-[16px] shadow-[0_4px_20px_rgba(124,58,237,0.15)] border border-purple-100 px-3 py-2 z-20 flex items-center gap-2"
        >
          <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center">
            <Activity size={12} className="text-[#7C3AED]" />
          </div>
          <div>
            <p className="text-[11px] font-extrabold text-slate-900">99.9% Uptime</p>
            <p className="text-[9px] text-slate-400 font-medium">Infrastructure</p>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default VoicePreviewUI;
