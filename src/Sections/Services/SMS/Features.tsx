"use client";

import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

const list = [
  "OTP & authentication APIs with priority routing",
  "Template-based messaging for transactional and promotional use cases",
  "Intelligent routing engine with automatic retries",
  "Sender ID and route management",
  "High availability infrastructure with built-in redundancy",
  "Real-time analytics and delivery insights",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 25 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  },
};

const Features: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.25, once: true }}
      transition={{ duration: 0.6 }}
      className="px-5 sm:px-10 lg:px-40 py-12 md:py-16 bg-gray-100"
    >
      <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-4xl text-center font-medium heading-two mb-10"
          >
            Advanced API Capabilities
          </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* RIGHT CONTENT (mobile first) */}
        <div className="order-1 md:order-2">
          
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-2 md:space-y-4 text-gray-700 text-base md:text-lg sm:list-disc sm:pl-5"
          >
            {list.map((itemText, i) => (
              <motion.p
                key={i}
                variants={item}
                className="leading-tight p-4 sm:bg-none sm:p-2 sm:p-0"
              >
                {/* <ArrowRight className="inline-block w-5 h-5 text-purple-600" />  */}
                <ShieldCheck className="inline-block min-w-5 h-5 text-[#6a00ff]" /> {itemText}
              </motion.p>
            ))}
          </motion.ul>
        </div>

        {/* IMAGE */}
        <motion.img
          src="/services/sms/features.png"
          alt="Features"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="order-2 md:order-1 w-full max-w-[500px] mx-auto md:mx-0 object-contain rounded-lg"
        />
      </div>
    </motion.section>
  );
};

export default Features;
