"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Route, Network, Activity } from "lucide-react";

const capabilities = [
  {
    title: "REST-Based SMS API",
    description: "Secure REST APIs allow quick integration from any application or backend system.",
    icon: Cloud,
    color: "text-white",
    bgColor: "bg-[#8B5CF6]", // Purple
  },
  {
    title: "Smart SMS Gateway",
    description: "Automatically validates sender IDs, templates, and routes messages.",
    icon: Route,
    color: "text-white",
    bgColor: "bg-[#F97316]", // Orange
  },
  {
    title: "Optimized Delivery Network",
    description: "Messages are delivered through high-quality routes for maximum success.",
    icon: Network,
    color: "text-white",
    bgColor: "bg-[#FCA5A5]", // Pink/Red
  },
  {
    title: "Real-Time Status & Callbacks",
    description: "Delivery reports and callbacks provide complete visibility into message status.",
    icon: Activity,
    color: "text-white",
    bgColor: "bg-[#8B5CF6]", // Purple
  },
];

const WhatsappAPI: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-20 lg:px-40 bg-white relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800"
          >
            Advanced API Capabilities
          </motion.h2>
        </div>

        <div className="relative">
          {/* Dotted Line Behind Icons */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[1px] border-t border-dashed border-gray-300 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative z-10"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-sm`}>
                    <Icon size={28} className={item.color} />
                  </div>
                  <h3 className="text-[17px] font-bold text-slate-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[14px] leading-relaxed max-w-[250px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappAPI;
