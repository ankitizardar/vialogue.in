"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, TrendingUp, Users, Smartphone, Globe } from "lucide-react";

const AboutPreviewUI: React.FC = () => {
  return (
    <div className="relative w-full h-[250px] min-[360px]:h-[285px] min-[400px]:h-[315px] min-[480px]:h-[345px] sm:h-[380px] md:h-[400px] flex items-center justify-center font-sans mt-0 lg:-mt-6 lg:ml-8">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#F9A8D4]/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative w-[480px] h-full flex items-center justify-center scale-[0.62] min-[360px]:scale-[0.7] min-[400px]:scale-[0.78] min-[480px]:scale-[0.85] sm:scale-[0.95] md:scale-100 origin-center">
        {/* Main Growth Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute z-10 w-[300px] sm:w-[350px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(124,58,237,0.12)] border border-purple-50 p-6 flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-[#7C3AED] shadow-sm">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-[15px] font-extrabold text-slate-900">Engagement Growth</p>
                <p className="text-sm text-slate-500 font-medium">+142% this quarter</p>
              </div>
            </div>
          </div>

          {/* Mock Chart */}
          <div className="w-full h-28 flex items-end gap-3 justify-between mt-2 border-b border-slate-100 pb-2">
            {[35, 55, 45, 75, 60, 90, 110].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={`w-full rounded-t-md transition-all duration-350 ${i === 6
                    ? 'bg-gradient-to-t from-[#7C3AED] to-[#F9A8D4] shadow-md shadow-purple-200'
                    : 'bg-gradient-to-t from-[#7C3AED]/20 to-[#F9A8D4]/20 border border-purple-100/20 hover:from-[#7C3AED]/30 hover:to-[#F9A8D4]/30'
                  }`}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center text-xs text-slate-400 font-medium">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span className="text-[#7C3AED] font-bold">Now</span>
          </div>
        </motion.div>

        {/* Floating Omni-Channel Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute z-20 top-6 -right-6 sm:-right-10 w-[240px] bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F9A8D4] flex items-center justify-center text-white shadow-sm">
              <Globe size={18} />
            </div>
            <div>
              <p className="text-[13px] font-bold text-slate-900">Omnichannel Reach</p>
              <p className="text-[11px] text-slate-500 font-medium">Global Infrastructure</p>
            </div>
          </div>

          {/* Channels */}
          <div className="flex gap-2">
            <div className="flex-1 py-1.5 bg-blue-50 text-blue-600 rounded-md text-[10px] font-bold text-center">SMS</div>
            <div className="flex-1 py-1.5 bg-emerald-50 text-emerald-600 rounded-md text-[10px] font-bold text-center">WhatsApp</div>
            <div className="flex-1 py-1.5 bg-purple-50 text-purple-600 rounded-md text-[10px] font-bold text-center">RCS</div>
          </div>
        </motion.div>

        {/* Floating Notification Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute z-20 bottom-12 -left-4 sm:-left-12 w-[200px] bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-slate-100 p-4 flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500">
            <MessageSquare size={20} />
          </div>
          <div>
            <p className="text-[11px] text-slate-500 font-medium mb-0.5">Delivery Status</p>
            <p className="text-[15px] font-extrabold text-emerald-500">99.99% Delivered</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPreviewUI;
