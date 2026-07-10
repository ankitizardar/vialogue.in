"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ShoppingCart, GraduationCap, Utensils, Heart, CheckCircle2, MessageSquare, TrendingUp } from "lucide-react";

const industries = [
  {
    label: "BFSI",
    icon: Building2,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    usecase: "OTP & Fraud Alerts",
    stat: "99.9% Delivery",
  },
  {
    label: "E-Commerce",
    icon: ShoppingCart,
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    usecase: "Order & Promo Updates",
    stat: "3x Engagement",
  },
  {
    label: "Education",
    icon: GraduationCap,
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
    usecase: "Alerts & Admissions",
    stat: "2x Open Rate",
  },
  {
    label: "Food & Bev",
    icon: Utensils,
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-100",
    usecase: "Loyalty & Offers",
    stat: "48% CTR",
  },
  {
    label: "Healthcare",
    icon: Heart,
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-100",
    usecase: "Reminders & Reports",
    stat: "70% No-Shows ↓",
  },
];

const IndustryPreviewUI: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % industries.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const current = industries[active];
  const Icon = current.icon;

  return (
    <div className="relative w-full h-[250px] min-[360px]:h-[285px] min-[400px]:h-[315px] min-[480px]:h-[345px] sm:h-[380px] md:h-[400px] flex items-center justify-center font-sans mt-0 lg:-mt-6 lg:translate-x-6">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#F9A8D4]/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative w-[480px] h-full flex items-center justify-center scale-[0.62] min-[360px]:scale-[0.7] min-[400px]:scale-[0.78] min-[480px]:scale-[0.85] sm:scale-[0.95] md:scale-100 origin-center flex-shrink-0">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute z-10 w-[300px] sm:w-[340px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(124,58,237,0.12)] border border-purple-50 p-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center text-white shadow-md`}
                >
                  <Icon size={22} />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`label-${active}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-[15px] font-extrabold text-slate-900">{current.label}</p>
                  <p className="text-xs text-slate-500 font-medium">{current.usecase}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-full px-3 py-1">
              <CheckCircle2 size={12} className="text-green-500" />
              <span className="text-[11px] font-bold text-green-600">Live</span>
            </div>
          </div>

          {/* Industry Pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all duration-300 cursor-pointer ${
                    i === active
                      ? `bg-gradient-to-r ${ind.color} text-white border-transparent shadow-md`
                      : `${ind.bg} ${ind.text} ${ind.border}`
                  }`}
                >
                  <IndIcon size={12} />
                  {ind.label}
                </button>
              );
            })}
          </div>

          {/* Stat Bar */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`stat-${active}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl p-4 ${current.bg} border ${current.border} flex items-center justify-between`}
            >
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className={current.text} />
                <span className={`text-sm font-bold ${current.text}`}>Key Result</span>
              </div>
              <span className={`text-sm font-extrabold ${current.text}`}>{current.stat}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Floating Messages Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute z-20 top-4 -right-4 sm:-right-10 w-[190px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={14} className="text-[#7C3AED]" />
            <span className="text-xs font-bold text-slate-700">Messages Sent</span>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">2.4B+</p>
          <p className="text-[11px] text-slate-400 font-medium mt-0.5">Across all industries</p>
          <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "85%" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-[#7C3AED] to-[#F9A8D4] rounded-full"
            />
          </div>
        </motion.div>

        {/* Floating Country Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute z-20 bottom-10 -left-4 sm:-left-10 w-[190px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F9A8D4] flex items-center justify-center text-white text-xl font-bold shadow-md shrink-0">
            🇮🇳
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Coverage</p>
            <p className="text-sm font-extrabold text-slate-900">Pan-India Ready</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryPreviewUI;
