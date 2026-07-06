"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Layers, Terminal, Cpu, Wifi, Smartphone, CheckCircle2, Play, RefreshCw, Music, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "1. API Trigger",
    desc: "Client initiates call request payload to Vialogue Server.",
    icon: Terminal,
    color: "from-blue-600 to-indigo-600",
    glow: "shadow-blue-500/20",
    code: `POST /v1/voice/calls
{
  "to": "+919876543210",
  "template": "voice_otp_numeric",
  "vars": { "otp": "7 3 8 2" },
  "callback_url": "https://client.com/voice-events"
}`,
    status: "STATUS: 200 OK | Request Accepted",
  },
  {
    title: "2. TTS Synthesis",
    desc: "AI Engine converts script text to natural human-like speech.",
    icon: Music,
    color: "from-purple-600 to-pink-600",
    glow: "shadow-purple-500/20",
    code: `// Processing TTS WaveNet Voice
{
  "status": "synthesizing",
  "language": "en-IN",
  "gender": "Female",
  "audio_duration": "4.2 seconds"
}`,
    status: "STATUS: Audio stream synthesized successfully",
  },
  {
    title: "3. Carrier Handshake",
    desc: "Gateway selects best active carrier line for instant delivery.",
    icon: Wifi,
    color: "from-emerald-600 to-teal-600",
    glow: "shadow-emerald-500/20",
    code: `// Gateway Carrier Optimization Path
{
  "carrier": "Airtel Telephony",
  "selected_route_id": "route_pri_airtel_in",
  "route_success_rate": "99.8%",
  "latency_ms": 18
}`,
    status: "STATUS: Carrier handshake established",
  },
  {
    title: "4. User Call",
    desc: "Customer handset receives incoming call and plays audio stream.",
    icon: Phone,
    color: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/20",
    code: `// Recipient Phone Telemetry
{
  "handset_status": "ringing",
  "event": "answered",
  "playback": "playing_tts_audio",
  "dtmf_keypress": "1" // Repost रिपीट करें
}`,
    status: "STATUS: Recipient answered & pressed Repeat Key",
  },
  {
    title: "5. Webhook Sent",
    desc: "Call status and DTMF keypress telemetry dispatched back to Client.",
    icon: CheckCircle2,
    color: "from-sky-500 to-blue-600",
    glow: "shadow-sky-500/20",
    code: `POST https://client.com/voice-events
{
  "call_id": "call_948a30d923",
  "status": "completed",
  "duration_sec": 14,
  "user_dtmf": "1",
  "cost_inr": 0.28
}`,
    status: "STATUS: Webhook dispatched & logged",
  },
];

const VoiceAPI: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const [simulationStep, setSimulationStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const startSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(0);
  };

  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setSimulationStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          setIsSimulating(false);
          return prev;
        }
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [isSimulating]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const headingSplit = new SplitType(headingRef.current!, { types: "words" });
      const descSplit = new SplitType(descRef.current!, { types: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(headingSplit.words, {
        opacity: 0,
        y: 30,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      });

      tl.from(
        descSplit.words,
        { opacity: 0, y: 12, stagger: 0.02, duration: 0.3, ease: "power2.out" },
        "-=0.3",
      );

      tl.fromTo(
        tabsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power3.out" },
        "-=0.2",
      );

      return () => {
        headingSplit.revert();
        descSplit.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeStepData = steps[simulationStep];

  return (
    <div ref={sectionRef} className="px-4 sm:px-10 lg:px-40 py-24 bg-[#fafbfd] overflow-hidden">

      {/* Top Heading */}
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
          <Layers size={16} className="text-[#7C3AED]" />
          <span className="text-sm font-semibold uppercase tracking-wider text-slate-700">API Infrastructure</span>
        </div>
        <h1
          ref={headingRef}
          className="text-3xl md:text-5xl font-extrabold text-slate-900 heading-two transition-all duration-300 hover:text-[#884CED] cursor-default"
        >
          Voice API for Fast &amp; Seamless Automation
        </h1>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT - Interactive API Simulation UI */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="bg-[#090D1A] rounded-3xl shadow-2xl border border-slate-800/80 overflow-hidden flex flex-col w-full max-w-[620px] mx-auto h-[550px] relative">
            
            {/* Console Header */}
            <div className="bg-[#101626] px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 bg-[#090D1A] px-3 py-1 rounded-md border border-slate-800/40">
                <Terminal size={12} className="text-blue-400" />
                <span>vialogue-voice-simulation</span>
              </div>
              <div className="w-14" />
            </div>

            {/* Simulated Nodes Diagram */}
            <div className="p-6 bg-[#0c1122]/40 border-b border-slate-800/60">
              <div className="flex items-center justify-between relative max-w-[480px] mx-auto">
                
                {/* Connecting Lines Behind Nodes */}
                <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-slate-800 -translate-y-1/2 z-0" />
                
                {/* Animated Pulsing Active Line */}
                {isSimulating && (
                  <motion.div 
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-cyan-400 blur-sm -translate-y-1/2 z-0"
                  />
                )}

                {/* Nodes list */}
                {[
                  { icon: Terminal, label: "Client" },
                  { icon: Cpu, label: "AI Gateway" },
                  { icon: Wifi, label: "Carriers" },
                  { icon: Smartphone, label: "Customer" },
                ].map((node, i) => {
                  const NodeIcon = node.icon;
                  const isActive = simulationStep >= i;
                  const isCurrent = simulationStep === i;
                  
                  return (
                    <div key={i} className="flex flex-col items-center gap-2 relative z-10">
                      <motion.div 
                        animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all duration-300 shadow-lg ${
                          isActive 
                            ? `bg-gradient-to-br ${steps[i % steps.length].color} border-white/20 text-white shadow-xl ${steps[i % steps.length].glow}`
                            : "bg-[#111827] border-slate-800 text-slate-500"
                        }`}
                      >
                        <NodeIcon size={18} />
                      </motion.div>
                      <span className={`text-[10px] font-bold tracking-wider uppercase transition-colors duration-300 ${
                        isActive ? "text-slate-200" : "text-slate-500"
                      }`}>
                        {node.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Simulation Tracker / Details Code Area */}
            <div className="flex-1 p-6 font-mono text-[12px] flex flex-col gap-4 overflow-auto bg-[#090D1A]">
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold text-white bg-gradient-to-r ${activeStepData.color}`}>
                  STEP {simulationStep + 1}
                </span>
                <span className="text-slate-200 font-bold">{activeStepData.title}</span>
              </div>
              
              <p className="text-slate-400 text-[11px] leading-relaxed">
                {activeStepData.desc}
              </p>

              {/* Code output */}
              <div className="bg-[#0e1424] rounded-xl border border-slate-800/80 p-4 relative overflow-hidden flex-1 flex flex-col justify-between">
                <pre className="text-slate-300 leading-relaxed overflow-x-auto whitespace-pre select-all text-[11px] [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-[#0e1424] [&::-webkit-scrollbar-thumb]:bg-slate-800 [&::-webkit-scrollbar-thumb]:rounded-full">
                  <code>{activeStepData.code}</code>
                </pre>
                
                {/* Simulated Waveform or Status banner */}
                <div className="border-t border-slate-800/80 mt-3 pt-3 flex items-center justify-between">
                  <span className={`text-[10px] font-bold ${simulationStep === 4 ? "text-emerald-400 animate-pulse" : "text-slate-400"}`}>
                    {activeStepData.status}
                  </span>
                  {simulationStep === 3 && (
                    <div className="flex items-center gap-[2px] h-3">
                      {[1, 2, 3, 2, 1, 2, 3, 4, 2, 1, 2].map((val, idx) => (
                        <div key={idx} className="w-[2px] bg-amber-400 rounded-full animate-bounce" style={{ height: `${val * 3}px`, animationDelay: `${idx * 0.1}s` }} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Control Bar */}
            <div className="bg-[#101626] px-6 py-4 flex items-center justify-between border-t border-slate-800">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                {isSimulating ? "SIMULATION RUNNING..." : "SIMULATOR READY"}
              </span>
              
              <button
                onClick={startSimulation}
                disabled={isSimulating}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-md ${
                  isSimulating
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#7C3AED] to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/10 hover:scale-[1.02]"
                }`}
              >
                {isSimulating ? (
                  <>
                    <RefreshCw size={12} className="animate-spin" />
                    <span>Dialing Call...</span>
                  </>
                ) : (
                  <>
                    <Play size={12} fill="currentColor" />
                    <span>Run Call Simulation</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT - Text Content & Tabs */}
        <div className="lg:col-span-5 flex sm:py-4 flex-col rounded-xl h-fit gap-8">
          <p
            ref={descRef}
            className="text-slate-600 paragraph text-lg md:text-[19px] leading-relaxed text-justify font-light"
          >
            Vialogue Voice API is built for developers, startups, and enterprise-scale communication systems.
            Trigger automated voice calls instantly, create smart IVR flows, and manage high-volume campaigns
            with reliable infrastructure and low-latency performance.
          </p>

          {/* Tabs */}
          <div className="flex mt-6 justify-start flex-wrap gap-3">
            {[
              "Smart Routing",
              "Bulk Voice Calls",
              "CRM Integration",
              "IVR Flows",
              "Webhooks",
              "Real-Time Logs",
              "Scalability",
              "Low Latency",
              "Voice OTP",
              "Analytics",
            ].map((tab, index) => (
              <button
                key={index}
                ref={(el) => { tabsRef.current[index] = el; }}
                className="px-4 py-2.5 text-xs md:text-xs font-bold rounded-xl
                bg-purple-50 border border-purple-100/80
                hover:border-purple-200 hover:shadow-md hover:shadow-purple-50/50
                transition-all duration-300 group cursor-default"
              >
                <span className="text-[#884CED] group-hover:text-brand-purple transition-all duration-300">
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VoiceAPI;
