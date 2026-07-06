"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, MessageSquare, Database, ArrowRight, Check, Heart, Smartphone, MessageCircle, Sparkles, Send } from "lucide-react";

const ConversationKeyFeatures: React.FC = () => {
  // Card 1: Flow node connector state
  const [nodeStep, setNodeStep] = useState(0);

  // Card 3: Lead typing variables
  const [leadStep, setLeadStep] = useState(0);
  const [leadFields, setLeadFields] = useState({ name: "", email: "", phone: "" });

  // Card 4: Intent routing selection
  const [routingStep, setRoutingStep] = useState(0);

  // Card 5: Channel icons fade index
  const [channelIdx, setChannelIdx] = useState(0);

  // Node simulator loop
  useEffect(() => {
    const interval = setInterval(() => {
      setNodeStep((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Lead typing simulator loop
  useEffect(() => {
    const interval = setInterval(() => {
      setLeadStep((prev) => {
        const next = (prev + 1) % 4;
        if (next === 0) setLeadFields({ name: "", email: "", phone: "" });
        if (next === 1) setLeadFields((f) => ({ ...f, name: "Aria" }));
        if (next === 2) setLeadFields((f) => ({ ...f, email: "aria@vialogue.io" }));
        if (next === 3) setLeadFields((f) => ({ ...f, phone: "+91 99000 12345" }));
        return next;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Intent routing simulator loop
  useEffect(() => {
    const interval = setInterval(() => {
      setRoutingStep((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Channel sync loop
  useEffect(() => {
    const interval = setInterval(() => {
      setChannelIdx((prev) => (prev + 1) % 3);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-40 bg-white text-left relative z-10 select-none">
      <div className="container mx-auto max-w-7xl">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 border border-indigo-200">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 heading-two">
            Key Flow Features
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Visual Flow Builder (Double Height - Column 1) */}
          <div className="md:row-span-2 col-span-1 bg-gradient-to-br from-[#fdf4ff] to-[#f3e8ff] border border-purple-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[500px]">
            
            {/* Logic Node Connector Visual */}
            <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-purple-100 flex flex-col gap-2 min-h-[220px] items-center justify-center text-left">
              
              {/* Trigger Node */}
              <div className="w-[180px] bg-slate-900 border border-slate-800 text-[10px] text-white p-2 rounded-xl flex items-center gap-2">
                <Play size={10} className="fill-emerald-400 text-emerald-400" />
                <div className="flex flex-col">
                  <span className="text-[7px] text-slate-500 uppercase font-extrabold">Trigger</span>
                  <strong>Incoming Message</strong>
                </div>
              </div>

              {/* Pulsing Connector Line */}
              <div className="w-0.5 h-6 bg-slate-100 relative">
                <motion.div 
                  className="absolute top-0 left-[-1px] w-[3px] bg-purple-500 rounded-full"
                  animate={{ height: nodeStep >= 1 ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Action Node */}
              {nodeStep >= 1 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-[180px] bg-slate-900 border border-slate-800 text-[10px] text-white p-2 rounded-xl flex items-center gap-2"
                >
                  <MessageSquare size={10} className="text-purple-400" />
                  <div className="flex flex-col">
                    <span className="text-[7px] text-slate-500 uppercase font-extrabold">Action</span>
                    <strong>Send Buttons Menu</strong>
                  </div>
                </motion.div>
              )}

              {nodeStep >= 2 && (
                <div className="flex flex-col items-center">
                  {/* Connector Line 2 */}
                  <div className="w-0.5 h-6 bg-slate-100 relative">
                    <motion.div 
                      className="absolute top-0 left-[-1px] w-[3px] bg-purple-500 rounded-full animate-pulse"
                      style={{ height: "100%" }}
                    />
                  </div>
                  {/* Connector target */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-[8px] bg-emerald-50 text-emerald-700 font-extrabold px-2 py-1 rounded border border-emerald-100"
                  >
                    ✔ Logic complete
                  </motion.div>
                </div>
              )}

            </div>

            {/* Details */}
            <div className="mt-8 text-left space-y-3">
              <h3 className="text-xl font-extrabold text-purple-950">
                Visual Flow Builder
              </h3>
              <p className="text-purple-800/80 text-sm leading-relaxed font-medium">
                Create complex conversation logic easily using visual nodes, custom routing conditions, branch paths, and auto fallback replies.
              </p>
            </div>

          </div>

          {/* Card 2: Rich Interactions (Middle Column - Row 1) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Rich Interactions
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Integrate quick-reply buttons, interactive swipeable product carousels, maps, media, PDFs, and links directly inside threads.
                </p>
              </div>

              {/* Product carousel visual mockup */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-2.5 shadow-sm flex-shrink-0 flex flex-col gap-1.5 text-left font-sans text-[8px]">
                <div className="aspect-[4/3] bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 font-bold border border-purple-100">
                  📷 Product Image
                </div>
                <div className="flex flex-col leading-tight">
                  <strong className="text-slate-700">Premium T-Shirt</strong>
                  <span className="text-slate-400">₹999</span>
                </div>
                <button className="w-full py-1 bg-purple-600 text-white font-bold text-[8px] rounded-lg text-center shadow shadow-purple-600/10">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Smart Lead Capture (Right Column - Row 1) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Smart Lead Capture
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Collect customer name, email address, phone contact, and custom requirements to auto-sync directly into your CRM platform.
                </p>
              </div>

              {/* Form typing visual card */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3 shadow-sm flex-shrink-0 flex flex-col gap-2 font-sans text-left text-[8px]">
                <span className="text-[7px] text-slate-400 uppercase font-extrabold tracking-wider">LEAD INFO</span>
                <div className="space-y-1.5">
                  <div className="flex flex-col bg-slate-50 p-1 rounded border border-slate-100 min-h-[20px] justify-center">
                    <span className="text-[6px] text-slate-400">Name</span>
                    <strong className="text-slate-700 font-bold">{leadFields.name || "Typing..."}</strong>
                  </div>
                  <div className="flex flex-col bg-slate-50 p-1 rounded border border-slate-100 min-h-[20px] justify-center">
                    <span className="text-[6px] text-slate-400">Email</span>
                    <strong className="text-slate-700 font-bold truncate">{leadFields.email || (leadStep >= 1 ? "Typing..." : "")}</strong>
                  </div>
                  <div className="flex flex-col bg-slate-50 p-1 rounded border border-slate-100 min-h-[20px] justify-center">
                    <span className="text-[6px] text-slate-400">Phone</span>
                    <strong className="text-slate-700 font-bold">{leadFields.phone || (leadStep >= 2 ? "Typing..." : "")}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Intent Routing (Middle Column - Row 2) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Intent-Based Routing
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Route tickets dynamically based on keywords, selected menu actions, and detected user intent, transferring to live agents.
                </p>
              </div>

              {/* Routing dashboard mockup */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3 shadow-sm flex-shrink-0 flex flex-col gap-2 font-sans text-left text-[8px]">
                <div className="flex justify-between items-center text-[7px] text-slate-400 font-bold border-b pb-1">
                  <span>ROUTER</span>
                  <span className="text-purple-600">Active</span>
                </div>
                <div className="space-y-1">
                  <div className="bg-slate-50 border p-1 rounded flex justify-between items-center text-slate-500 font-mono">
                    <span>Query:</span>
                    <strong className="text-slate-700">
                      {routingStep === 0 && "pricing"}
                      {routingStep === 1 && "api docs"}
                      {routingStep === 2 && "billing"}
                    </strong>
                  </div>
                  <div className="text-center text-slate-300 leading-none">↓</div>
                  <div className="bg-purple-50 border border-purple-100 p-1 rounded flex justify-between items-center text-purple-800 font-bold">
                    <span>Route To:</span>
                    <strong className="text-purple-700">
                      {routingStep === 0 && "Sales"}
                      {routingStep === 1 && "Dev Team"}
                      {routingStep === 2 && "Support"}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Multi-Channel (Right Column - Row 2) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Multi-Channel Deployment
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Design your interactive logic flows once and deploy seamlessly across WhatsApp, RCS, Webchat, and other SMS portals.
                </p>
              </div>

              {/* Deployment channel grid */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3 shadow-sm flex-shrink-0 flex flex-col gap-2 font-sans items-center justify-center min-h-[110px]">
                <div className="flex items-center gap-1.5 justify-center">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    channelIdx === 0 ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/10 scale-110" : "bg-slate-50 text-slate-400"
                  }`}>
                    <MessageCircle size={14} className={channelIdx === 0 ? "fill-white/10" : ""} />
                  </div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    channelIdx === 1 ? "bg-purple-500 text-white shadow-md shadow-purple-500/10 scale-110" : "bg-slate-50 text-slate-400"
                  }`}>
                    <Smartphone size={14} />
                  </div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    channelIdx === 2 ? "bg-blue-500 text-white shadow-md shadow-blue-500/10 scale-110" : "bg-slate-50 text-slate-400"
                  }`}>
                    <Database size={14} />
                  </div>
                </div>
                <span className="text-[7px] text-slate-400 font-bold uppercase tracking-wider text-center mt-1">
                  {channelIdx === 0 && "WhatsApp active"}
                  {channelIdx === 1 && "RCS active"}
                  {channelIdx === 2 && "Webchat active"}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ConversationKeyFeatures;
