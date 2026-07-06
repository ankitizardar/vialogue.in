'use client';

import React from "react";
import { motion, MotionConfig, easeOut } from "framer-motion";
import {
  MessageSquare,
  Zap,
  Network,
  ShieldCheck,
  Headphones,
  Plug,
} from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const card = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const iconAnim = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
};

/* ================= DATA ================= */

const smsFeatures = [
  {
    title: "Simplified Platform",
    description:
      "A smart, scalable, and easy-to-use messaging platform built for businesses of all sizes with reliable communication solutions.",
    icon: MessageSquare,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Lightning-Fast Delivery",
    description:
      "Industry-leading delivery speeds with support for 12,000+ TPS and real-time reporting dashboards for full message tracking.",
    icon: Zap,
    iconBg: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Reliable Telecom Connectivity",
    description:
      "Direct operator connections across global telecom networks ensuring consistent and timely delivery.",
    icon: Network,
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    title: "99.9% Platform Uptime",
    description:
      "Enterprise-grade infrastructure backed by 99.9% uptime SLA for uninterrupted messaging services.",
    icon: ShieldCheck,
    iconBg: "bg-green-100 text-green-600",
  },
  {
    title: "24×7 Dedicated Support",
    description:
      "Round-the-clock technical assistance to ensure smooth operations and immediate issue resolution.",
    icon: Headphones,
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    title: "Quick & Easy Integration",
    description:
      "Seamless API integration and rapid deployment to get your campaigns running within minutes.",
    icon: Plug,
    iconBg: "bg-purple-100 text-purple-600",
  },
];

/* ================= COMPONENT ================= */

const SMSPlatformSection: React.FC = () => {
  return (
    <MotionConfig reducedMotion="never">
      <section className="px-4 sm:px-6 md:px-20 lg:px-40 py-16 bg-gray-100">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* ===== HEADING ===== */}
          <motion.div
            variants={container}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-4xl font-semibold text-gray-900 tracking-tight"
            >
              Simplified Messaging Platform
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-2 text-lg text-gray-600 subheading"
            >
              Smart, scalable messaging infrastructure built for modern enterprises.
            </motion.p>
          </motion.div>

          {/* ===== CARDS ===== */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {smsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={card}
                  className="p-6 bg-white border border-gray-300 rounded-2xl"
                >
                  <motion.div
                    variants={iconAnim}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.iconBg}`}
                  >
                    <Icon size={24} />
                  </motion.div>

                  <motion.h3
                    variants={fadeUp}
                    className="text-lg font-medium text-gray-900 mb-2"
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    variants={fadeUp}
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
};

export default SMSPlatformSection;