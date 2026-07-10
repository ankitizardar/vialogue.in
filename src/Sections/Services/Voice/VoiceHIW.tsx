"use client";

import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { PlugZap, BellRing, Webhook, Server } from "lucide-react";

const steps = [
  {
    title: "Simple & Fast Integration",
    desc: "Integrate quickly with your website, mobile app, CRM, ERP, and internal systems without complex setup or long deployment cycles.",
    color: "bg-[#8C41F5]",
    icon: <PlugZap size={28} className="text-white" />,
  },
  {
    title: "Event-Based Triggering",
    desc: "Trigger voice calls instantly based on customer actions such as transaction success, OTP requests, delivery attempts, and booking confirmations.",
    color: "bg-[#FFB26B]",
    icon: <BellRing size={28} className="text-white" />,
  },
  {
    title: "Webhooks & Delivery Status",
    desc: "Receive real-time updates including call initiated, connected, completed, and failed status for full lifecycle visibility.",
    color: "bg-[#FFC0CB]",
    icon: <Webhook size={28} className="text-white" />,
  },
  {
    title: "Scalable Infrastructure",
    desc: "Deliver high-volume voice calls seamlessly without delays, ensuring reliable performance even during peak traffic.",
    color: "bg-[#7C3AED]",
    icon: <Server size={28} className="text-white" />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  },
};

const VoiceHIW: React.FC = () => {
  return (
    <div className="px-6 sm:px-10 lg:px-40 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-2xl heading-two md:text-4xl font-medium text-center mb-16"
      >
        Voice API Highlights
      </motion.h1>

      {/* DESKTOP */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.3 }}
        className="hidden md:flex items-start justify-between relative gap-10"
      >
        {/* Animated dashed progress line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "left" }}
          className="absolute top-8 left-0 right-0 h-[1px] border-t border-dashed border-gray-300"
        />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex flex-col items-center text-center w-1/4"
          >
            {/* Floating icon */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              className={`${step.color} w-16 h-16 rounded-xl mb-6 flex items-center justify-center`}
            >
              {step.icon}
            </motion.div>

            <h2 className="text-lg font-bold mb-2">{step.title}</h2>
            <p className="text-sm text-gray-600 leading-5">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4 px-5 py-5 shadow-sm"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className={`${step.color} w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center`}
            >
              {step.icon}
            </motion.div>

            <div>
              <h2 className="text-lg text-left font-bold text-slate-800">{step.title}</h2>
              <p className="text-sm text-left text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VoiceHIW;
