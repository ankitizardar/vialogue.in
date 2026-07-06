"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, BarChart3, Calendar, Code2, Cpu, CheckCircle2, Bot } from "lucide-react";

export default function FeaturesBento() {
  const [toggleState, setToggleState] = useState(true);

  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
              Platform Features
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-950">
            Built for Advanced <span className="text-gradient">Communications</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-normal max-w-xl">
            Everything your team needs to deliver reliable, secure messaging at a global scale.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[240px]">
          
          {/* Card 1: Multi-channel Messaging (Span 2 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-1 rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="p-2.5 rounded-xl bg-blue-100 text-blue-800 border border-blue-200 shadow-sm inline-block mb-4">
                  <Layers size={20} />
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">Multi-channel Messaging</h3>
                <p className="text-sm text-slate-700 max-w-md font-normal leading-relaxed">
                  Route notifications via WhatsApp, RCS, and SMS to engage customer at each touch point
                </p>
              </div>

              {/* Visual Demo on Right */}
              <div className="hidden sm:flex flex-col gap-2 bg-slate-50 border border-slate-200 p-3 rounded-xl min-w-[200px] font-mono text-[10px] text-slate-600">
                <div className="flex items-center justify-between text-brand-purple pb-1 border-b border-slate-200 font-semibold">
                  <span>Routing Stream</span>
                  <span className="text-emerald-600">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>1. WhatsApp API</span>
                  <span className="text-emerald-600">Success</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>2. RCS Fallback</span>
                  <span>Skipped</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>3. SMS Failover</span>
                  <span>Standby</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Real-time Analytics (Span 1 Col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden relative group"
          >
            <div>
              <span className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-sm inline-block mb-4">
                <BarChart3 size={20} />
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Real-time Analytics</h3>
              <p className="text-sm text-slate-700 font-normal leading-relaxed">
                Monitor live delivery rates, read confirmations, latency spikes, and link click-through metrics instantly.
              </p>
            </div>
            
            {/* Visual graph mockup */}
            <div className="flex items-end gap-1.5 h-10 w-full pt-2">
              <div className="bg-brand-purple/20 h-[30%] w-full rounded-sm" />
              <div className="bg-brand-purple/40 h-[50%] w-full rounded-sm" />
              <div className="bg-brand-blue/30 h-[40%] w-full rounded-sm" />
              <div className="bg-brand-blue/60 h-[85%] w-full rounded-sm animate-pulse" />
              <div className="bg-brand-cyan/40 h-[65%] w-full rounded-sm" />
              <div className="bg-brand-cyan/60 h-[95%] w-full rounded-sm" />
            </div>
          </motion.div>

          {/* Card 3: Campaign Management (Span 1 Col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden relative group"
          >
            <div>
              <span className="p-2.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-200 shadow-sm inline-block mb-4">
                <Calendar size={20} />
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Campaign Manager</h3>
              <p className="text-sm text-slate-700 font-normal leading-relaxed">
                Orchestrate blast alerts, recurring notification pipelines, and custom event-based sequences with ease.
              </p>
            </div>

            {/* Campaign Toggle Visual */}
            <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 font-mono">
              <div className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${toggleState ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                <span>Blast Campaign</span>
              </div>
              <button 
                onClick={() => setToggleState(!toggleState)}
                className={`text-brand-purple cursor-pointer transition-transform hover:scale-105 font-bold`}
              >
                {toggleState ? "ENABLED" : "DISABLED"}
              </button>
            </div>
          </motion.div>

          {/* Card 4: API Integration (Span 2 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="p-2.5 rounded-xl bg-indigo-100 text-indigo-800 border border-indigo-200 shadow-sm inline-block mb-4">
                  <Code2 size={20} />
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">Robust Developer APIs</h3>
                <p className="text-sm text-slate-700 max-w-sm font-normal leading-relaxed">
                  Integrate your Node.js, Python, or Go systems in minutes. We support REST APIs, webhooks, and secure HMAC authentication.
                </p>
              </div>

              {/* Code snippet visualization */}
              <div className="hidden sm:block bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-[9px] text-slate-300 w-64 leading-normal">
                <span className="text-purple-400 font-bold">POST</span> /v1/messages<br />
                {"{"}<br />
                &nbsp;&nbsp;<span className="text-cyan-455">"channel"</span>: <span className="text-emerald-400">"whatsapp"</span>,<br />
                &nbsp;&nbsp;<span className="text-cyan-455">"body"</span>: <span className="text-emerald-400">"OTP is 4820"</span><br />
                {"}"}
              </div>
            </div>
          </motion.div>

          {/* Card 5: AI Automation (Span 1 Col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden relative group"
          >
            <div>
              <span className="p-2.5 rounded-xl bg-cyan-100 text-cyan-800 border border-cyan-200 shadow-sm inline-block mb-4">
                <Cpu size={20} />
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">AI Automation</h3>
              <p className="text-sm text-slate-700 font-normal leading-relaxed">
                Connect NLP models and automated agents to handle tier-1 FAQ answers and user requests without human touch.
              </p>
            </div>

            {/* AI Assist Typing Indicator Visual */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <Bot size={14} className="text-brand-purple animate-bounce" />
              <span>AI is generating reply...</span>
            </div>
          </motion.div>

          {/* Card 6: Delivery Tracking (Span 1 Col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden relative group"
          >
            <div>
              <span className="p-2.5 rounded-xl bg-rose-100 text-rose-800 border border-rose-200 shadow-sm inline-block mb-4">
                <CheckCircle2 size={20} />
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Delivery Tracking</h3>
              <p className="text-sm text-slate-700 font-normal leading-relaxed">
                Trace messages from pipeline to endpoint with explicit delivered/read timelines and carrier logs.
              </p>
            </div>

            {/* Visual Delivery ticks */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Sent</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Delivered</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                <span>Read</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
