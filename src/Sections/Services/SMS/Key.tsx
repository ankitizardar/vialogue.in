"use client";

import React from "react";
import { motion, easeIn } from "framer-motion";

const features = [
  {
    title: "Secure OTP & Authentication",
    description:
      "Fast and reliable OTP delivery with built-in abuse protection and rate limiting.",
    image: "/services/sms/features/img1.png",
    bg: "bg-gradient-to-br from-[#f3ebff] to-[#e4ccff]",
    span: "row-span-2 col-span-1 md:col-span-1",
    size: "w-[50%] sm:w-[60%] m-auto",
    mst: "flex flex-col gap-8",
  },
  {
    title: "High-Scale Messaging Infrastructure",
    description:
      "Designed to handle peak traffic and large volumes with consistent performance.",
    image: "/services/sms/features/img2.png",
    bg: "bg-slate-50",
    span: "col-span-1",
    size: "h-14 w-14",
    mst: "flex gap-6 items-center flex-row-reverse",
  },
  {
    title: "Reliable Message Continuity",
    description:
      "Automatic retries and failover ensure messages reach users even during network issues.",
    image: "/services/sms/features/img3.png",
    bg: "bg-slate-50",
    span: "col-span-1",
    size: "h-14 w-14",
    mst: "flex gap-6 items-center flex-row-reverse",
  },
  {
    title: "Unified SMS Visibility",
    description:
      "Single dashboard to monitor delivery status, engagement, and usage across all SMS traffic.",
    image: "/services/sms/features/img4.png",
    bg: "bg-slate-50",
    span: "col-span-1",
    size: "h-14 w-14",
    mst: "flex gap-6 items-center flex-row-reverse",
  },
  {
    title: "Developer-First Integration",
    description:
      "Simple REST APIs and SMPP connectivity for quick, secure application integration.",
    image: "/services/sms/features/img5.png",
    bg: "bg-slate-50",
    span: "col-span-1",
    size: "h-14 w-14",
    mst: "flex gap-6 items-center flex-row-reverse",
  },
  {
    title: "Automatic Failover Logic",
    description:
      "Retries failed SMS across alternate routes for maximum delivery assurance.",
    image: "/services/sms/features/img6.png",
    bg: "bg-slate-50",
    span: "col-span-1",
    size: "h-14 w-14",
    mst: "flex gap-6 items-center flex-row-reverse",
  },
  {
    title: "Click & Conversation Tracking",
    description:
      "Track clicks, response time, and engagement directly from SMS campaigns.",
    image: "/services/sms/features/img7.png",
    bg: "bg-slate-50",
    span: "col-span-1",
    size: "h-14 w-14",
    mst: "flex gap-6 items-center flex-row-reverse",
  },
  {
    title: "Real-Time Cost Analytics",
    description: "Monitor cost per SMS, route-wise spend, and campaign ROI.",
    image: "/services/sms/features/img8.png",
    bg: "bg-slate-50",
    span: "col-span-1",
    size: "h-14 w-14",
    mst: "flex gap-6 items-center flex-row-reverse",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeIn,
    },
  },
};

const KeyFeatures = () => {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-40 bg-white text-left relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">Core Features</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 heading-two"
          >
            Comprehensive SMS Features
          </motion.h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={card}
              className={`${feature.bg} ${feature.span} border border-slate-200 rounded-3xl py-8 px-8 sm:py-6 sm:px-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between`}
            >
              <div className="mb-6 sm:mb-4">
                <div className={feature.mst}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`${feature.size} object-contain group-hover:scale-105 transition-transform duration-500`}
                  />

                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex-1">
                    {feature.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;