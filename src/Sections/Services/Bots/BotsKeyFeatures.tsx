"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, Heart, GitPullRequest, ArrowRight, Check, Users, BarChart3, Bell } from "lucide-react";

const BotsKeyFeatures: React.FC = () => {
  // Card 1: Drag-and-drop block placement state
  const [dragStep, setDragStep] = useState(0);

  // Card 2: Segmentation filter loop
  const [segFilter, setSegFilter] = useState(0);

  // Card 3: Personalization variables loop
  const [persName, setPersName] = useState("Sarah");
  const [persCode, setPersCode] = useState("SUMMER10");

  // Card 6: Analytics counting states
  const [delivered, setDelivered] = useState(12000);
  const [opened, setOpened] = useState(8500);

  // Drag-and-Drop simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setDragStep((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Segmentation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setSegFilter((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Personalization loop
  useEffect(() => {
    const interval = setInterval(() => {
      const names = ["Sarah", "John", "David", "Emma"];
      const codes = ["SUMMER10", "FLASH15", "DEAL20", "SPECIAL5"];
      const idx = Math.floor(Math.random() * names.length);
      setPersName(names[idx]);
      setPersCode(codes[idx]);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Analytics increment simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setDelivered((prev) => {
        if (prev >= 12400) return 12000;
        return prev + 40;
      });
      setOpened((prev) => {
        if (prev >= 11500) return 8500;
        return prev + 60;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-40 bg-white text-left relative z-10 select-none">
      <div className="container mx-auto max-w-7xl">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-100 border border-purple-200">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 heading-two">
            Key Campaign Features
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Drag-and-Drop Creation (Double Height - Column 1) */}
          <div className="md:row-span-2 col-span-1 bg-gradient-to-br from-[#f5f3ff] to-[#ddd6fe] border border-purple-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[500px]">
            
            {/* Creator Visual Canvas */}
            <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-purple-100 flex flex-col gap-3 min-h-[220px] text-left">
              <div className="flex items-center justify-between border-b border-purple-50 pb-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-purple-700">
                  <GitPullRequest size={12} />
                  <span>Layout Builder</span>
                </div>
                <span className="text-[9px] text-slate-400">Drag Blocks</span>
              </div>

              {/* Layout Blocks Canvas */}
              <div className="space-y-2.5">
                <div className="p-2 bg-purple-50 rounded-xl border border-purple-100 text-[10px] text-purple-800 font-bold text-center">
                  Trigger: Audience Segment
                </div>

                {dragStep >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-2 bg-slate-50 border border-dashed border-slate-350 text-[10px] text-slate-700 font-bold text-center rounded-xl"
                  >
                    💬 Message Box Block
                  </motion.div>
                )}

                {dragStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-2 bg-emerald-50 border border-emerald-100 text-[10px] text-emerald-800 font-bold text-center rounded-xl"
                  >
                    🔗 Quick Action: "Shop Now" Link
                  </motion.div>
                )}
              </div>
            </div>

            {/* Content info */}
            <div className="mt-8 text-left space-y-3">
              <h3 className="text-xl font-extrabold text-purple-950">
                Drag-and-Drop Bots Creation
              </h3>
              <p className="text-purple-800/80 text-sm leading-relaxed font-medium">
                Launch campaigns quickly with an easy interface: drag templates, place pre-built layouts, and customize blocks. No developer required.
              </p>
            </div>

          </div>

          {/* Card 2: Audience Segmentation (Middle Column - Row 1) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Audience Segmentation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Target the right audience using filters like location, last purchase, spending range, engagement level, and customer lifecycle stage.
                </p>
              </div>

              {/* Segmentation filter mockup */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3 shadow-sm flex-shrink-0 flex flex-col gap-2 font-sans text-left">
                <div className="flex justify-between items-center text-[7px] text-slate-400 font-bold border-b pb-1">
                  <span>FILTERS SET</span>
                  <Users size={8} />
                </div>
                <div className="space-y-1.5 text-[8px]">
                  <div className="flex flex-col">
                    <span className="text-slate-400">Condition</span>
                    <strong className="text-slate-700">
                      {segFilter === 0 && "Location: Delhi"}
                      {segFilter === 1 && "Spends > ₹5,000"}
                      {segFilter === 2 && "Inactive > 30 Days"}
                    </strong>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span>Recipients</span>
                    <ArrowRight size={8} />
                    <span className="text-purple-600 font-extrabold">
                      {segFilter === 0 && "18,400"}
                      {segFilter === 1 && "5,200"}
                      {segFilter === 2 && "11,100"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Personalization at Scale (Right Column - Row 1) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Personalization at Scale
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Add customer details dynamically: name, product info, transaction details, and customized promotional discount codes.
                </p>
              </div>

              {/* Personalization variable cards */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3 shadow-sm flex-shrink-0 flex flex-col gap-2 font-sans text-left">
                <div className="flex justify-between items-center text-[7px] text-slate-400 font-bold border-b pb-1">
                  <span>DYNAMIC PREVIEW</span>
                  <Sparkles size={8} className="text-purple-600 fill-purple-100" />
                </div>
                <div className="text-[8px] bg-slate-50 p-2 rounded-xl text-slate-600 border border-slate-100 min-h-[45px] leading-relaxed">
                  Hi <strong className="text-purple-600 font-bold">{persName}</strong>, your exclusive coupon code is <strong className="text-purple-600 font-bold">{persCode}</strong>.
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Scheduling & Automation (Middle Column - Row 2) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Scheduling & Automation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Run scheduled campaigns automatically for birthdays, membership renewals, invoice reminders, and festival promotions.
                </p>
              </div>

              {/* Scheduler mockup card */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3.5 shadow-sm flex-shrink-0 flex flex-col gap-2 font-sans text-left">
                <div className="flex justify-between items-center text-[7px] text-slate-400 font-bold border-b pb-1">
                  <span>SCHEDULER</span>
                  <Calendar size={8} />
                </div>
                <div className="space-y-1 text-[8px] text-slate-500 font-medium">
                  <div className="flex justify-between">
                    <span>Trigger:</span>
                    <span className="text-slate-700 font-bold">Birthday</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="text-slate-700 font-bold">10:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span>Status:</span>
                    <span className="text-purple-600 font-extrabold flex items-center gap-0.5">
                      <Bell size={7} className="animate-bounce" /> Queue
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: A/B Testing Optimization (Right Column - Row 2) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  A/B Testing Optimization
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Test two message variants and choose the winner based on open rate, click rate, and custom conversion metrics.
                </p>
              </div>

              {/* AB testing split mockup */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3 shadow-sm flex-shrink-0 flex flex-col gap-1.5 font-sans text-left text-[8px]">
                <span className="text-[7px] text-slate-400 uppercase font-extrabold">A/B Testing</span>
                <div className="bg-slate-50 border p-1 rounded flex justify-between items-center text-slate-600">
                  <span>Variant A</span>
                  <span className="font-bold text-slate-800">22% CTR</span>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 p-1 rounded flex justify-between items-center text-emerald-800 font-bold relative">
                  <span>Variant B</span>
                  <span className="text-emerald-700">45% CTR</span>
                  <span className="absolute top-[-3px] right-[-3px] bg-emerald-500 text-white font-extrabold text-[5px] px-1 rounded-full uppercase scale-[0.8] leading-none py-0.5 border border-white">
                    Won
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Real-Time Analytics Dashboard (Spans Columns 2 & 3 - Row 3) */}
          <div className="col-span-1 md:col-span-2 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Real-Time Analytics Dashboard
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Track performance metrics like delivered, opened, clicked, failed, replied, and final conversion rates in real time.
                </p>
              </div>

              {/* Analytics metrics layout */}
              <div className="w-full sm:w-[160px] bg-white border border-slate-150 rounded-2xl p-3.5 shadow-sm flex-shrink-0 space-y-2 text-left font-sans text-[8px]">
                <div className="flex justify-between items-center text-[7px] text-slate-400 font-bold border-b pb-1">
                  <span>DISPATCH LOG</span>
                  <span className="text-emerald-500 font-extrabold">Active</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[9px] font-mono">
                  <div className="flex flex-col bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                    <span className="text-[7px] text-slate-400">Delivered</span>
                    <strong className="text-slate-800">{delivered.toLocaleString()}</strong>
                  </div>
                  <div className="flex flex-col bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                    <span className="text-[7px] text-slate-400">Opened</span>
                    <strong className="text-slate-800">{opened.toLocaleString()}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BotsKeyFeatures;
