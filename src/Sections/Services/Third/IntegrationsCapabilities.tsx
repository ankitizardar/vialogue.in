"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, ArrowRight, Check, Database, HelpCircle, Layers } from "lucide-react";

const IntegrationsCapabilities: React.FC = () => {
  // CRM sync status state
  const [crmStep, setCrmStep] = useState(0);

  // Webhook log steps
  const [webhooks, setWebhooks] = useState<string[]>([
    "GET /api/v1/user - 200 OK",
    "POST /webhooks/sync - Sent",
  ]);

  // Sync completion percentage
  const [syncProgress, setSyncProgress] = useState(0);

  // CRM loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCrmStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Webhooks terminal simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setWebhooks((prev) => {
        const list = [...prev];
        if (list.length >= 4) list.shift();
        const randEvent = ["lead.updated", "payment.success", "user.opt_in", "ticket.closed"][
          Math.floor(Math.random() * 4)
        ];
        list.push(`POST /hooks/${randEvent} - 200`);
        return list;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Sync progress simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setSyncProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 10;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-40 bg-white text-left relative z-10 select-none">
      <div className="container mx-auto max-w-7xl">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-100 border border-cyan-200">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 heading-two">
            Key Integration Capabilities
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: CRM Integrations (Double Height - Column 1) */}
          <div className="md:row-span-2 col-span-1 bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2] border border-cyan-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[500px]">
            
            {/* Visual CRM Sync Simulator */}
            <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-cyan-150 flex flex-col gap-3 min-h-[220px] text-left">
              <div className="flex items-center justify-between border-b border-cyan-50 pb-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-700">
                  <Database size={12} />
                  <span>CRM Sync Engine</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              </div>

              {/* Lead state changes */}
              <div className="space-y-3 font-sans">
                <div className="flex items-center justify-between text-[9px] border p-2 rounded-xl bg-slate-50 border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-slate-400 font-bold">Contact Name</span>
                    <strong className="text-slate-700">Alex Carter</strong>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-slate-400 font-bold">Lifecycle Stage</span>
                    <strong className="text-cyan-600">
                      {crmStep === 0 && "Subscriber"}
                      {crmStep === 1 && "Qualified Lead"}
                      {crmStep === 2 && "Customer Won"}
                    </strong>
                  </div>
                </div>

                <div className="text-[9px] border p-2.5 rounded-xl bg-white border-slate-100 flex flex-col gap-1.5">
                  <span className="text-[8px] text-slate-400 uppercase font-extrabold">Triggered Action</span>
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-slate-700">
                      {crmStep === 0 && "Send Lead Magnet"}
                      {crmStep === 1 && "Notify Account Manager"}
                      {crmStep === 2 && "Send Welcome WhatsApp"}
                    </span>
                    <span className="text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 text-[8px]">
                      Triggered
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Title & Description */}
            <div className="mt-8 text-left space-y-3">
              <h3 className="text-xl font-extrabold text-cyan-950">
                CRM Integrations
              </h3>
              <p className="text-cyan-800/80 text-sm leading-relaxed font-medium">
                Connect with CRM systems to sync contacts, manage sales pipeline stages, trigger automated messaging, and personalize marketing campaigns in real time based on user profile stages.
              </p>
            </div>

          </div>

          {/* Card 2: API & Webhooks Engine (Middle Column - Row 1) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  API & Webhooks Engine
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Enable seamless, low-latency system communication using simple REST APIs and real-time webhook delivery status callbacks across your workflow stacks.
                </p>
              </div>

              {/* Webhook terminal logger mockup */}
              <div className="w-full sm:w-[130px] bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-sm flex-shrink-0 flex flex-col gap-1 min-h-[110px]">
                <div className="flex items-center gap-1 text-[8px] text-slate-400 font-bold border-b border-slate-800 pb-1 mb-1 font-mono">
                  <Terminal size={9} />
                  <span>Webhook Log</span>
                </div>
                <div className="font-mono text-[7px] text-emerald-400 leading-normal space-y-1">
                  {webhooks.map((log, idx) => (
                    <div key={idx} className="truncate">
                      {log}
                    </div>
                  ))}
                  <div className="w-1.5 h-3 bg-emerald-400 animate-pulse inline-block" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Helpdesk Integration (Right Column - Row 1) */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Helpdesk Integration
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Link customer support tools so agents can access thread histories, sync ticket updates, resolve complex chats, and coordinate team queues effortlessly.
                </p>
              </div>

              {/* Helpdesk ticket mockup */}
              <div className="w-full sm:w-[130px] bg-white border border-slate-150 rounded-2xl p-3 shadow-sm flex-shrink-0 flex flex-col gap-2 font-sans text-left">
                <div className="flex justify-between items-center text-[7px] text-slate-400 font-bold border-b pb-1">
                  <span>HELPDESK LINK</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-0.5">
                    <Check size={8} /> Active
                  </span>
                </div>
                <div className="text-[8px] space-y-1.5">
                  <div className="flex flex-col">
                    <span className="text-slate-400">Support Ticket</span>
                    <strong className="text-slate-700">Zendesk ID: #4802</strong>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span>Sync Status</span>
                    <ArrowRight size={8} className="text-slate-300 animate-pulse" />
                    <span className="text-purple-600 font-bold">Vialogue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Data Sync (Spans Columns 2 & 3 - Row 2) */}
          <div className="col-span-1 md:col-span-2 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[240px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="space-y-3 flex-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Data Sync & Segmentation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Sync databases with Vialogue automatically to enable dynamic customer segmentation, lifecycle campaign automation, and personalized loyalty alerts.
                </p>
              </div>

              {/* Data sync progress mockup */}
              <div className="w-full sm:w-[160px] bg-white border border-slate-150 rounded-2xl p-3.5 shadow-sm flex-shrink-0 space-y-2.5 text-left font-sans">
                <div className="flex justify-between items-center text-[7px] text-slate-400 font-bold">
                  <span>DATABASE SYNC</span>
                  <span className="font-mono text-cyan-600">{syncProgress}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-cyan-500"
                    style={{ width: `${syncProgress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono">
                  <span className="text-slate-500">Segment: High LTV</span>
                  <span className="text-slate-400">1,240 records</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IntegrationsCapabilities;
