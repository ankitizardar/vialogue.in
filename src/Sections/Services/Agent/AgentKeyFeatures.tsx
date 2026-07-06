"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, MessageSquare, Check, Sparkles, User, FileText, Send, UserCheck, Bolt } from "lucide-react";

const AgentKeyFeatures: React.FC = () => {
  // Card 1: Smart Reply Animation state
  const [smartStep, setSmartStep] = useState(0);
  const [smartMsg, setSmartMsg] = useState("");

  // Card 3: Checklist state
  const [checklist, setChecklist] = useState([false, false, false]);

  // Card 4: Tone state
  const [toneActive, setToneActive] = useState(false);

  // Smart Reply script loop
  useEffect(() => {
    const interval = setInterval(() => {
      setSmartStep((prev) => {
        const next = (prev + 1) % 4;
        if (next === 0) setSmartMsg("");
        if (next === 2) setSmartMsg("Refund processed successfully");
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Checklist loop
  useEffect(() => {
    const interval = setInterval(() => {
      setChecklist((prev) => {
        if (!prev[0]) return [true, false, false];
        if (!prev[1]) return [true, true, false];
        if (!prev[2]) return [true, true, true];
        return [false, false, false];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Tone Standardization loop
  useEffect(() => {
    const interval = setInterval(() => {
      setToneActive((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-40 bg-white text-left relative z-10 select-none">
      <div className="container mx-auto max-w-7xl">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">Core Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 heading-two">
            Comprehensive Agent Assist Features
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Smart Reply Suggestions (Double Height - Column 1) */}
          <div className="md:row-span-2 col-span-1 bg-gradient-to-br from-[#f3ebff] to-[#e4ccff] border border-purple-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[500px]">
            
            {/* Visual Simulator */}
            <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-purple-100 flex flex-col gap-3 min-h-[220px]">
              <div className="flex items-center justify-between border-b border-purple-50 pb-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-purple-700">
                  <Sparkles size={12} className="fill-purple-200" />
                  <span>Smart Replies</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              </div>

              {/* Message Thread */}
              <div className="flex flex-col gap-2.5 text-[10px]">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 max-w-[85%] self-start text-slate-700">
                  <span className="text-[8px] text-slate-400 block font-bold uppercase mb-0.5">Customer</span>
                  Hey, my order was canceled. How can I get a refund?
                </div>

                {smartStep >= 1 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="self-end max-w-[85%] w-full flex flex-col gap-1 text-right"
                  >
                    <span className="text-[8px] text-purple-500 font-bold uppercase block">AI Suggestions</span>
                    <div className="flex flex-col gap-1">
                      <button className={`p-2 rounded-lg border text-left font-bold transition-all text-[9px] ${
                        smartStep === 2 ? "border-purple-600 bg-purple-50 text-purple-800" : "border-slate-100 bg-white text-slate-500"
                      }`}>
                        • Refund processed successfully
                      </button>
                      <button className="p-2 rounded-lg border border-slate-100 bg-white text-slate-500 text-left font-bold text-[9px]">
                        • Please share your order ID
                      </button>
                    </div>
                  </motion.div>
                )}

                {smartStep >= 3 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-purple-600 text-white rounded-xl p-2.5 max-w-[85%] self-end shadow-sm"
                  >
                    {smartMsg}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Description Details */}
            <div className="mt-8 text-left space-y-3">
              <h3 className="text-xl font-extrabold text-purple-950">
                Smart Reply Suggestions
              </h3>
              <p className="text-purple-800/80 text-sm leading-relaxed font-medium">
                AI suggests quick, relevant replies based on customer query intent, conversation history, and pre-approved templates. This helps agents respond faster and avoid long response delays.
              </p>
            </div>

          </div>

          {/* Card 2: Customer Context (Middle Column - Row 1) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Customer Context in One View
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Agents can instantly view customer details, previous queries & tickets, conversation timelines, and preferred languages so they can respond in a personalized way.
                </p>
              </div>

              {/* Profile Card Mockup */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3.5 shadow-sm space-y-2 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <User size={12} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-slate-700">Sarah Connor</span>
                    <span className="text-[7px] text-emerald-500 font-bold">Active User</span>
                  </div>
                </div>
                <div className="space-y-1 text-[8px] font-mono text-slate-400">
                  <div className="flex justify-between">
                    <span>Ticket:</span>
                    <span className="text-slate-700 font-bold">#4903</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Order:</span>
                    <span className="text-slate-700 font-bold">#1024-X</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Guided Resolutions (Right Column - Row 1) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Guided Resolution Guidelines
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Provide agents with recommended next steps like troubleshooting checklists, best-practice resolution suggestions, and compliance reminders to ensure fewer escalations.
                </p>
              </div>

              {/* Checklist visual mockup */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3.5 shadow-sm space-y-2 flex-shrink-0 text-left font-sans text-[8px]">
                <span className="text-[7px] text-slate-400 uppercase font-extrabold tracking-wider">Guidelines</span>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${checklist[0] ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"}`}>
                      <Check size={8} strokeWidth={3} />
                    </div>
                    <span className={checklist[0] ? "text-slate-400 line-through" : "text-slate-600 font-semibold"}>Verify Email</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${checklist[1] ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"}`}>
                      <Check size={8} strokeWidth={3} />
                    </div>
                    <span className={checklist[1] ? "text-slate-400 line-through" : "text-slate-600 font-semibold"}>Find Order ID</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${checklist[2] ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"}`}>
                      <Check size={8} strokeWidth={3} />
                    </div>
                    <span className={checklist[2] ? "text-slate-400 line-through" : "text-slate-600 font-semibold"}>Apply Refund</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Tone Standardization (Middle Column - Row 2) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Template + Tone Standardization
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Maintain brand consistency with pre-approved responses, professional tone configurations, and compliance-ready messaging layouts across your teams.
                </p>
              </div>

              {/* Tone visual card */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3.5 shadow-sm space-y-2 flex-shrink-0 font-sans text-left">
                <div className="flex justify-between items-center text-[7px] text-slate-400 font-bold border-b pb-1 mb-1">
                  <span>TONE CONVERTER</span>
                  <span className="text-purple-600">Active</span>
                </div>
                <div className="bg-red-50 text-red-700 text-[8px] p-1.5 rounded font-mono">
                  "u item not here yet"
                </div>
                <div className="text-center text-slate-300">↓</div>
                <div className="min-h-[30px] relative">
                  <AnimatePresence mode="wait">
                    {toneActive ? (
                      <motion.div
                        key="active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-purple-50 text-purple-700 text-[8px] p-1.5 rounded font-medium leading-normal"
                      >
                        "We apologize for the delay. Your package is currently..."
                      </motion.div>
                    ) : (
                      <motion.div
                        key="typing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-[8px] text-slate-400 p-1.5 font-mono"
                      >
                        Typing suggestion...
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Quick Actions (Right Column - Row 2) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Quick Actions Console
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Enable agents to complete actions instantly: send billing invoices, share package tracking coordinates, resend credentials, or refresh ticket statuses.
                </p>
              </div>

              {/* Action buttons mockup */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3.5 shadow-sm space-y-2 flex-shrink-0 flex flex-col justify-center">
                <button className="w-full py-1.5 bg-slate-50 hover:bg-purple-50 border border-slate-150 hover:border-purple-200 text-slate-600 hover:text-purple-700 rounded-lg text-[8px] font-bold flex items-center justify-center gap-1 transition-all">
                  <FileText size={8} />
                  Send Invoice
                </button>
                <button className="w-full py-1.5 bg-slate-50 hover:bg-purple-50 border border-slate-150 hover:border-purple-200 text-slate-600 hover:text-purple-700 rounded-lg text-[8px] font-bold flex items-center justify-center gap-1 transition-all">
                  <UserCheck size={8} />
                  Verify User OTP
                </button>
                <button className="w-full py-1.5 bg-slate-50 hover:bg-purple-50 border border-slate-150 hover:border-purple-200 text-slate-600 hover:text-purple-700 rounded-lg text-[8px] font-bold flex items-center justify-center gap-1 transition-all">
                  <Bolt size={8} />
                  Update Status
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AgentKeyFeatures;
