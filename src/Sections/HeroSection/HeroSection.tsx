"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, CheckCircle2, Sparkles, Phone, Video, Smile, Paperclip, Mic, MoreVertical, CheckCheck, MessageSquare, Send, MessageCircle, Check } from "lucide-react";
import Link from "next/link";

interface ChatMessage {
  id: string;
  sender: "user" | "system" | "status";
  text: string;
  time: string;
  isTemplate?: boolean;
  templateType?: "whatsapp" | "rcs" | "sms";
  templateData?: any;
  status?: "sent" | "delivered" | "read";
}

export default function HeroSection() {
  const [activeChannel, setActiveChannel] = useState<"whatsapp" | "rcs" | "sms">("whatsapp");
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  // Auto switch channels
  useEffect(() => {
    if (!isAutoSwitching) return;

    const channels: ("whatsapp" | "rcs" | "sms")[] = ["whatsapp", "rcs", "sms"];
    const interval = setInterval(() => {
      setActiveChannel((prev) => {
        const nextIndex = (channels.indexOf(prev) + 1) % channels.length;
        return channels[nextIndex];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoSwitching]);

  useEffect(() => {
    clearAllTimeouts();
    setMessages([]);
    setIsTyping(true);

    const formatTime = () => {
      return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    if (activeChannel === "whatsapp") {
      // Step 1: Initial Greeting
      const t1 = setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: "wa-1",
            sender: "system",
            text: "Hi John! Let me look up your order status.",
            time: formatTime(),
          },
        ]);
        setIsTyping(true);
      }, 1000);
      timeoutsRef.current.push(t1);

      // Step 2: Delivery template notification
      const t2 = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: "wa-2",
            sender: "system",
            text: "Package Out For Delivery 📦\n\nHi John, your order #89201 has been shipped. Track your delivery in real-time.",
            isTemplate: true,
            templateType: "whatsapp",
            templateData: {
              title: "Package Out For Delivery 📦",
              body: "Hi John, your order #89201 has been shipped. Track your delivery in real-time.",
              buttons: ["Track Live", "Call Courier"],
            },
            time: formatTime(),
          },
        ]);
      }, 2600);
      timeoutsRef.current.push(t2);
    } else if (activeChannel === "sms") {
      // Step 1: Verification SMS
      const t1 = setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: "sms-1",
            sender: "system",
            text: "Your Vialogue authentication code is 584930. Valid for 5 minutes. vialogue.io/verify?code=584930",
            time: formatTime(),
            status: "delivered",
          },
        ]);
      }, 1200);
      timeoutsRef.current.push(t1);

      // Step 2: Auto-verify animation status
      const t2 = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: "sms-2",
            sender: "status",
            text: "✓ OTP Auto-Verified",
            time: formatTime(),
          },
        ]);
      }, 3200);
      timeoutsRef.current.push(t2);
    } else if (activeChannel === "rcs") {
      // Step 1: Rich Card
      const t1 = setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: "rcs-1",
            sender: "system",
            text: "",
            isTemplate: true,
            templateType: "rcs",
            templateData: {
              badge: "PROMOTION",
              title: "Double Credits Reward 🎁",
              body: "Claim 2x credits on your next invoice. Priority routing is active.",
              buttons: ["Claim 2x Credits"],
            },
            time: formatTime(),
          },
        ]);
      }, 1000);
      timeoutsRef.current.push(t1);
    }

    return () => clearAllTimeouts();
  }, [activeChannel]);

  const handleTabClick = (channel: "whatsapp" | "rcs" | "sms") => {
    setIsAutoSwitching(false);
    setActiveChannel(channel);
  };

  const handleWhatsAppAction = (action: string) => {
    if (messages.some((m) => m.id === "wa-user-reply")) return;
    setIsAutoSwitching(false);

    const formatTime = () => {
      return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    setMessages((prev) => [
      ...prev,
      {
        id: "wa-user-reply",
        sender: "user",
        text: action,
        time: formatTime(),
      },
    ]);

    setIsTyping(true);

    const t = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: "wa-system-reply-2",
          sender: "system",
          text:
            action === "Track Live"
              ? "📍 Order #89201 is 1.2 km away. Estimated delivery: 4 mins by courier David."
              : "Calling courier David at +1 (555) 019-2831... 📞",
          time: formatTime(),
        },
      ]);
    }, 1500);
    timeoutsRef.current.push(t);
  };

  const handleRcsAction = (action: string) => {
    if (messages.some((m) => m.id === "rcs-user-reply")) return;
    setIsAutoSwitching(false);

    const formatTime = () => {
      return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    setMessages((prev) => [
      ...prev,
      {
        id: "rcs-user-reply",
        sender: "user",
        text: action,
        time: formatTime(),
      },
    ]);

    setIsTyping(true);

    const t = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: "rcs-system-reply-2",
          sender: "system",
          text: "🎉 Double credits successfully activated for your workspace (ID: wl_892b1). The reward will be applied to your next billing cycle.",
          time: formatTime(),
        },
      ]);
    }, 1500);
    timeoutsRef.current.push(t);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 pb-20 overflow-hidden bg-[#FDF7FF]">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Visual background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-[#9b51e0] uppercase">
                Next-Gen AI Messaging Infrastructure
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a1a1a] leading-[1.1] mb-6"
            >
              Powering Enterprise Messaging Across{" "}
              <span className="text-gradient">SMS, WhatsApp, RCS & Voice</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium mb-8"
            >
              Automate customer conversations, authenticate securely with low-latency OTP routing, and orchestrate campaigns globally via secure enterprise API built for high deliverability.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <Link href="/contact" className="group relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-purple-400 text-white font-medium shadow-[0_4px_20px_rgba(124,58,237,0.15)] hover:shadow-[0_4px_30px_rgba(0,229,255,0.25)] transition-all duration-300 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Book Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <Link href="/contact" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-350 hover:bg-slate-100 text-slate-700 font-medium transition-all active:scale-95">
                Start Free Trial
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-8 border-t border-slate-200 flex flex-wrap gap-y-4 gap-x-8 justify-center lg:justify-start text-slate-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-purple" />
                <span>ISO 27001 Certified Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-brand-purple" />
                <span>Real-time Fallback Routing</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE VISUAL (MESSAGE PREVIEW) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex lg:col-span-5 relative w-full max-w-[540px] mx-auto lg:ml-auto lg:mr-0 lg:translate-x-8 flex-col mt-10 lg:mt-0 h-[415px] min-[360px]:h-[460px] min-[400px]:h-[505px] sm:h-[570px] lg:h-auto"
          >
            <div className="relative w-full max-w-[380px] mx-auto flex flex-col scale-[0.72] min-[360px]:scale-[0.8] min-[400px]:scale-[0.88] sm:scale-100 origin-center">
              {/* Router Active Badge */}
              <div className="absolute top-[80px] -right-4 bg-white border border-slate-200/80 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.04)] z-20 select-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Router Active</span>
              </div>

              {/* Uptime Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200/80 px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold text-brand-purple shadow-[0_4px_12px_rgba(0,0,0,0.04)] z-20 select-none">
                <span>Uptime 99.9%</span>
              </div>

              {/* Floating pill Tab Switcher */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex bg-white/95 backdrop-blur border border-slate-200/60 p-1 rounded-2xl shadow-[0_10px_25px_-5px_rgba(15,23,42,0.05)] text-[11px] font-bold z-20 select-none">
                  <button
                    onClick={() => handleTabClick("whatsapp")}
                    className={`px-4 py-2 rounded-xl text-center transition-all cursor-pointer flex items-center gap-1.5 ${activeChannel === "whatsapp"
                      ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200/60"
                      : "text-slate-500 hover:text-slate-800"
                      }`}
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </button>
                  <button
                    onClick={() => handleTabClick("sms")}
                    className={`px-4 py-2 rounded-xl text-center transition-all cursor-pointer flex items-center gap-1.5 ${activeChannel === "sms"
                      ? "bg-purple-600 text-white shadow-sm shadow-purple-200/60"
                      : "text-slate-500 hover:text-slate-800"
                      }`}
                  >
                    <MessageSquare size={14} />
                    SMS
                  </button>
                  <button
                    onClick={() => handleTabClick("rcs")}
                    className={`px-4 py-2 rounded-xl text-center transition-all cursor-pointer flex items-center gap-1.5 ${activeChannel === "rcs"
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-200/60"
                      : "text-slate-500 hover:text-slate-800"
                      }`}
                  >
                    <Send size={14} />
                    RCS
                  </button>
                </div>
              </div>
              {/* Elegant Chat Window Card */}
              <div className="relative mx-auto w-full h-[500px] bg-white border border-slate-200/80 rounded-3xl shadow-[0_25px_60px_-15px_rgba(124,58,237,0.06)] overflow-hidden flex flex-col select-none">

              <div className="flex-1 flex flex-col relative overflow-hidden bg-slate-50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChannel}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="flex-1 flex flex-col h-full justify-between"
                  >
                    {activeChannel === "whatsapp" && (
                      <div className="flex-1 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="bg-[#f0f2f5] border-b border-slate-200/60 px-4 py-2.5 flex items-center justify-between select-none">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold font-mono">
                              V
                            </div>
                            <div>
                              <div className="flex items-center gap-1">
                                <span className="text-[11px] font-bold text-slate-800">Vialogue Support</span>
                                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-white p-0.5"><Check className="w-2 h-2 stroke-[3.5]" /></span>
                              </div>
                              <span className="text-[9px] text-emerald-600 font-medium flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                                online
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3.5 text-slate-400">
                            <Video size={14} className="hover:text-slate-700 cursor-pointer" />
                            <Phone size={13} className="hover:text-slate-700 cursor-pointer" />
                            <MoreVertical size={14} className="hover:text-slate-700 cursor-pointer" />
                          </div>
                        </div>

                        {/* Chat Area */}
                        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 flex flex-col scrollbar-hide bg-[#efeae2] relative min-h-0">
                          <div className="flex-1" />
                          <AnimatePresence initial={false}>
                            {messages.map((msg) => (
                              <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`flex flex-col mb-2 ${msg.sender === "user" ? "items-end" : "items-start"}`}
                              >
                                {msg.isTemplate ? (
                                  <div className="bg-white rounded-xl shadow-md border border-slate-200/40 overflow-hidden text-[10.5px] text-slate-700 w-full max-w-[260px] self-start">
                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] h-12 flex items-center justify-center text-white text-[9.5px] font-bold font-mono px-3 text-center select-none">
                                      VIALOGUE CONFIRMATION
                                    </div>
                                    {/* Header Image */}
                                    <div className="h-28 w-full overflow-hidden relative border-b border-slate-100">
                                      <img src="/services/wapp/delivery.png" className="w-full h-full object-cover" alt="Delivery" />
                                    </div>
                                    {/* Body */}
                                    <div className="p-3.5 space-y-1.5">
                                      <p className="font-bold text-slate-900 text-[11px]">{msg.templateData.title}</p>
                                      <p className="text-slate-500 leading-relaxed text-[9.5px]">{msg.templateData.body}</p>
                                    </div>
                                    {/* Actions */}
                                    <div className="border-t border-slate-100 divide-y divide-slate-100 text-center font-bold text-emerald-650 text-[10px] select-none">
                                      {msg.templateData.buttons.map((btn: string, idx: number) => (
                                        <div
                                          key={idx}
                                          onClick={() => handleWhatsAppAction(btn)}
                                          className="py-2.5 hover:bg-slate-50 cursor-pointer active:bg-slate-100 transition-colors"
                                        >
                                          {btn}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    className={`rounded-lg px-3 py-2 text-[10px] text-slate-750 max-w-[80%] shadow-[0_1px_1.5px_rgba(0,0,0,0.12)] relative leading-relaxed ${msg.sender === "user"
                                      ? "bg-[#d9fdd3] self-end rounded-tr-none text-slate-800"
                                      : "bg-white self-start rounded-tl-none"
                                      }`}
                                  >
                                    <p className="whitespace-pre-line">{msg.text}</p>
                                    <div className="flex items-center justify-end gap-0.5 mt-1 select-none">
                                      <span className="text-[7.5px] text-slate-400 block">{msg.time}</span>
                                      {msg.sender === "user" && <CheckCheck size={11} className="text-blue-500" />}
                                    </div>
                                  </div>
                                )}
                              </motion.div>
                            ))}
                            {isTyping && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="self-start mb-2"
                              >
                                <div className="flex items-center gap-1 bg-white border border-slate-200/60 rounded-xl px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.05)] w-[58px]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce inline-block" style={{ animationDelay: "0ms" }} />
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce inline-block" style={{ animationDelay: "150ms" }} />
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce inline-block" style={{ animationDelay: "300ms" }} />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Footer Input */}
                        <div className="bg-[#f0f2f5] px-3 py-2 flex items-center gap-2 border-t border-slate-200/50">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Smile size={16} className="cursor-pointer hover:text-slate-600" />
                            <Paperclip size={15} className="cursor-pointer hover:text-slate-600" />
                          </div>
                          <div className="flex-1 bg-white rounded-full px-3.5 py-1.5 flex items-center text-[10px] text-slate-450 border border-slate-200 select-none">
                            Type a message...
                          </div>
                          <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white cursor-pointer hover:bg-brand-purple/90 active:scale-95 transition-all">
                            <Send size={12} className="ml-[2px]" />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeChannel === "sms" && (
                      <div className="flex-1 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="bg-white border-b border-slate-200/60 px-4 py-3 flex items-center gap-3 select-none">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs select-none">
                            💬
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-800">Vialogue OTP</div>
                            <span className="text-[8px] text-slate-400 uppercase tracking-wider font-semibold">SMS Gateway (Priority)</span>
                          </div>
                        </div>

                        {/* Chat Area */}
                        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 flex flex-col scrollbar-hide bg-[#F8FAFC] relative min-h-0">
                          <div className="flex-1" />
                          <AnimatePresence initial={false}>
                            {messages.map((msg) => (
                              <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`flex flex-col mb-2 ${msg.sender === "status" ? "items-center" : "items-start"}`}
                              >
                                {msg.sender === "status" ? (
                                  <div className="bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[8.5px] px-3 py-1 rounded-full font-bold shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex items-center gap-1 mb-2 mt-1 select-none animate-pulse-glow">
                                    <CheckCircle2 size={10} className="text-emerald-600 animate-pulse" />
                                    <span>{msg.text}</span>
                                  </div>
                                ) : (
                                  <div className="bg-slate-100 border border-slate-200 rounded-2xl px-3.5 py-2.5 text-[10px] leading-relaxed shadow-[0_1px_1.5px_rgba(0,0,0,0.05)] text-slate-800 max-w-[80%] self-start rounded-tl-none">
                                    <div className="font-bold text-[7px] text-slate-400 uppercase mb-1 font-mono select-none">OTP Verification</div>
                                    <p className="whitespace-pre-line">{msg.text}</p>
                                    <div className="flex items-center justify-end gap-1 mt-1.5 select-none">
                                      <span className="text-[7px] text-slate-400">{msg.time}</span>
                                      <span className="text-[7.5px] text-emerald-600 font-semibold">• Delivered</span>
                                    </div>
                                  </div>
                                )}
                              </motion.div>
                            ))}
                            {isTyping && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="self-start mb-2"
                              >
                                <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 shadow-sm w-[58px]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce inline-block" style={{ animationDelay: "0ms" }} />
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce inline-block" style={{ animationDelay: "150ms" }} />
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce inline-block" style={{ animationDelay: "300ms" }} />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Footer Input */}
                        <div className="bg-white px-3 py-2 flex items-center gap-2 border-t border-slate-200/60">
                          <div className="flex-1 bg-slate-50 rounded-2xl px-3.5 py-1.5 text-[10px] text-slate-400 border border-slate-200 select-none">
                            Text Message (SMS)
                          </div>
                          <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white cursor-pointer hover:bg-brand-purple/90 active:scale-95 transition-all">
                            <Send size={12} className="ml-[2px]" />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeChannel === "rcs" && (
                      <div className="flex-1 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between select-none">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-blue-650 flex items-center justify-center text-white text-xs font-bold font-mono">
                              V
                            </div>
                            <div>
                              <div className="flex items-center gap-1">
                                <span className="text-[11px] font-bold text-slate-800">Vialogue Services</span>
                                <span className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-white p-0.5"><Check className="w-2.5 h-2.5 stroke-[3.5]" /></span>
                              </div>
                              <span className="text-[8px] text-blue-500 font-semibold uppercase tracking-wider">Verified RCS Sender</span>
                            </div>
                          </div>
                        </div>

                        {/* Chat Area */}
                        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 flex flex-col scrollbar-hide bg-[#F1F5F9] relative min-h-0">
                          <div className="flex-1" />
                          <AnimatePresence initial={false}>
                            {messages.map((msg) => (
                              <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`flex flex-col mb-2 ${msg.sender === "user" ? "items-end" : "items-start"}`}
                              >
                                {msg.isTemplate ? (
                                  <div className="bg-white rounded-xl shadow-md border border-slate-200/85 overflow-hidden w-full max-w-[260px] text-[10px] self-start">
                                    {/* Cover Image */}
                                    <div className="h-28 w-full overflow-hidden relative border-b border-slate-100">
                                      <img src="/services/rcs/rcs_promo.png" className="w-full h-full object-cover" alt="Promotion" />
                                      <span className="absolute top-2 left-2 text-[7.5px] font-bold text-brand-purple bg-purple-50 px-2 py-0.5 rounded border border-purple-100">PROMOTION</span>
                                    </div>
                                    <div className="p-3.5 space-y-1">
                                      <p className="font-bold text-slate-900 text-[10.5px]">{msg.templateData.title}</p>
                                      <p className="text-slate-500 leading-normal text-[9px]">{msg.templateData.body}</p>
                                    </div>
                                    <div className="p-3 pt-0 flex flex-col gap-1.5 select-none">
                                      {msg.templateData.buttons.map((btn: string, idx: number) => (
                                        <div
                                          key={idx}
                                          onClick={() => handleRcsAction(btn)}
                                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[9px] text-center py-2 rounded-lg cursor-pointer transition-all active:scale-98"
                                        >
                                          {btn}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    className={`rounded-2xl px-3.5 py-2 text-[10px] max-w-[80%] shadow-[0_1px_1.5px_rgba(0,0,0,0.08)] relative leading-relaxed ${msg.sender === "user"
                                      ? "bg-blue-650 text-white self-end rounded-tr-none"
                                      : "bg-white text-slate-700 self-start rounded-tl-none border border-slate-200"
                                      }`}
                                  >
                                    <p className="whitespace-pre-line">{msg.text}</p>
                                    <div className="flex items-center justify-end gap-0.5 mt-1 select-none">
                                      <span className={`text-[7.5px] block ${msg.sender === "user" ? "text-blue-250" : "text-slate-400"}`}>{msg.time}</span>
                                      {msg.sender === "user" && <CheckCheck size={11} className="text-blue-250" />}
                                    </div>
                                  </div>
                                )}
                              </motion.div>
                            ))}
                            {isTyping && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="self-start mb-2"
                              >
                                <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm w-[58px]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce inline-block" style={{ animationDelay: "0ms" }} />
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce inline-block" style={{ animationDelay: "150ms" }} />
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce inline-block" style={{ animationDelay: "300ms" }} />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Footer Input */}
                        <div className="bg-white px-3 py-2 flex items-center gap-2 border-t border-slate-200">
                          <div className="flex-1 bg-slate-100 rounded-full px-3.5 py-1.5 text-[10px] text-slate-400 border border-slate-200 select-none">
                            RCS Message
                          </div>
                          <div className="w-8 h-8 rounded-full bg-blue-650 flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 active:scale-95 transition-all">
                            <Send size={12} className="ml-[2px]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        </div>
      </div>
    </section>
  );
}
