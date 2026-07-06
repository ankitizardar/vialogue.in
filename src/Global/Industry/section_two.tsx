"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  CalendarClock,
  CheckCircle2,
} from "lucide-react";

export default function BFSISection() {
  const features = [
    "Instant OTPs & Fraud Alerts with intelligent fallback",
    "Seamless Account activation and KYC",
    "Keep policyholders engaged and investors informed",
    "Build stronger relationships with your customer",
  ];

  const cardAnimation = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.55 },
    viewport: { once: true },
  };

  return (
    <section className="w-full bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-10 md:px-20 lg:px-40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[#6d28d9] font-semibold tracking-[0.18em] uppercase text-[11px] sm:text-xs mb-3">
            BFSI
          </p>

          <h2 className="heading-two text-slate-900">
            Banking, Financial Services & Insurance
          </h2>

          <p className="mt-4 text-[#6b7280] text-sm sm:text-base md:text-lg subheading max-w-2xl mx-auto leading-relaxed">
            Bank-grade messaging for financial institutions with
            zero-latency. Every second counts in financial services.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT SIDE IMAGE/UI */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center order-1"
          >
            <div className="relative w-full max-w-[520px]">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#bfdbfe]/40 blur-3xl rounded-full scale-105" />

              {/* Main Box */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative bg-[#e7f3ff] border border-[#cfe3f8] rounded-[30px] p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  {/* Card 1 */}
                  <motion.div
                    {...cardAnimation}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-4 border border-[#e5edf5] shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />

                      <h3 className="font-semibold text-[#111827] text-sm sm:text-base">
                        SMS Alert
                      </h3>
                    </div>

                    <div className="bg-[#f8fafc] rounded-xl p-3 text-[11px] sm:text-xs text-gray-700 leading-relaxed">
                      OTP: 482913 for secure login
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 bg-[#e8f9ef] px-3 py-1 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-green-500" />

                      <span className="text-[11px] sm:text-xs font-medium text-green-700">
                        Secure
                      </span>
                    </div>
                  </motion.div>

                  {/* Card 2 */}
                  <motion.div
                    {...cardAnimation}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-4 border border-[#e5edf5] shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-[#3b82f6]" />

                      <h3 className="font-semibold text-[#111827] text-sm sm:text-base">
                        WhatsApp Fraud Alert
                      </h3>
                    </div>

                    <div className="bg-[#f8fafc] rounded-xl p-3 text-[11px] sm:text-xs text-gray-700 leading-relaxed">
                      Unusual transaction detected ₹12,500
                    </div>

                    <div className="flex items-end gap-2 mt-4">
                      <span className="text-3xl sm:text-[36px] font-bold text-[#2563eb] leading-none">
                        Approve
                      </span>

                      <span className="text-xs sm:text-sm text-gray-500 mb-1">
                        Block
                      </span>
                    </div>
                  </motion.div>

                  {/* Card 3 */}
                  <motion.div
                    {...cardAnimation}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-4 border border-[#e5edf5] shadow-sm flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[5px] border-green-500 flex items-center justify-center mb-4">
                      <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                    </div>

                    <h3 className="font-semibold text-[#111827] text-center text-sm sm:text-base">
                      Account Activated
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 mt-2 text-center">
                      Welcome onboard ✓
                    </p>
                  </motion.div>

                  {/* Card 4 */}
                  <motion.div
                    {...cardAnimation}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-4 border border-[#e5edf5] shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-5">
                      <CalendarClock className="w-4 h-4 text-[#7c3aed]" />

                      <h3 className="font-semibold text-[#111827] text-sm sm:text-base">
                        Reminder
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                        className="bg-[#fff4e5] text-[#c06b00] text-[11px] sm:text-xs rounded-xl px-3 py-2 font-medium"
                      >
                        EMI due tomorrow ₹8,450
                      </motion.div>

                      <motion.div
                        animate={{ x: [0, -3, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                        className="bg-[#eaf3ff] text-[#2563eb] text-[11px] sm:text-xs rounded-xl px-3 py-2 font-medium"
                      >
                        KYC Process Active
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-2 sm:space-y-3 order-2"
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="border-b border-[#e7ebf3] pb-4 sm:pb-5"
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="mt-[2px] min-w-fit">
                    <div className="w-7 h-7 rounded-full border border-[#7c3aed]/15 bg-[#f5f0ff] flex items-center justify-center">
                      <ShieldCheck className="w-[15px] h-[15px] text-[#7c3aed]" />
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.45] text-[#24324a] font-medium tracking-[-0.01em]">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="bg-[#f5f0ff] mt-8 border border-[#eadcff] rounded-2xl px-5 py-4">
              <p className="text-[#7C3AED] text-sm sm:text-base font-semibold tracking-[-0.01em]">
                HIGH AVAILABILITY INFRASTRUCTURE WITH BUILT-IN REDUNDANCY
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}