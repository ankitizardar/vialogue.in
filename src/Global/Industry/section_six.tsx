"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  BellRing,
  BadgeCheck,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

export default function HealthcareSection() {
  const features = [
    "Enhance patient experience with timely communication",
    "Automated appointment reminders with two-way handling",
    "Personalized care journeys while maintaining compliance",
    "Smooth patient consultation at home",
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
          <p className="text-[#7C3AED] font-semibold tracking-[0.18em] uppercase text-[11px] sm:text-xs mb-3">
            HEALTHCARE
          </p>

          <h2 className="heading-two text-slate-900">
            Compliant Patient Communication at Scale
          </h2>

          <p className="mt-4 text-[#6b7280] text-sm sm:text-base md:text-lg subheading max-w-2xl mx-auto leading-relaxed">
            Secure and intelligent communication that improves patient trust,
            consultation flow, and healthcare responsiveness.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT UI */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center order-1"
          >
            <div className="relative w-full max-w-[560px]">
              {/* Main Container */}
              <div className="bg-[#eaf4ff] border border-[#cfe3f8] rounded-[34px] p-4 sm:p-5 shadow-[0_20px_50px_rgba(59,130,246,0.08)]">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Card 1 */}
                  <motion.div
                    {...cardAnimation}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[22px] p-5 border border-[#e5edf5] shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-5">
                      <CalendarCheck className="w-5 h-5 text-[#22c55e]" />

                      <h3 className="font-semibold text-[#111827] text-[15px] sm:text-base">
                        Appointment Booked
                      </h3>
                    </div>

                    <div className="bg-[#f5f7fb] rounded-2xl p-4 text-[12px] text-[#374151] leading-relaxed">
                      Consultation scheduled for tomorrow at 10:30 AM
                    </div>

                    <div className="mt-5 inline-flex items-center gap-2 bg-[#e8f9ef] px-3 py-1.5 rounded-full">
                      <BadgeCheck className="w-3 h-3 text-[#22c55e]" />

                      <span className="text-[12px] font-medium text-[#16a34a]">
                        Confirmed
                      </span>
                    </div>
                  </motion.div>

                  {/* Card 2 */}
                  <motion.div
                    {...cardAnimation}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[22px] p-5 border border-[#e5edf5] shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-5">
                      <HeartPulse className="w-5 h-5 text-[#3b82f6]" />

                      <h3 className="font-semibold text-[#111827] text-[15px] sm:text-base">
                        Patient Engagement
                      </h3>
                    </div>

                    {/* Analytics */}
                    <div className="flex items-end gap-3 mb-5 h-[72px]">
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-16 h-8 rounded-full bg-[#93c5fd]"
                      />

                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2.3, repeat: Infinity }}
                        className="w-16 h-16 rounded-full bg-[#60a5fa]"
                      />

                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2.1, repeat: Infinity }}
                        className="w-16 h-8 rounded-full bg-[#2563eb]"
                      />
                    </div>

                    <div className="flex items-end gap-2">
                      <span className="text-[34px] sm:text-[42px] font-bold text-[#2563eb] leading-none">
                        +87%
                      </span>

                      <span className="text-sm text-gray-500 mb-1">
                        Response Rate
                      </span>
                    </div>
                  </motion.div>

                  {/* Card 3 */}
                  <motion.div
                    {...cardAnimation}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[22px] p-5 border border-[#e5edf5] shadow-sm flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full border-[5px] border-[#22c55e] flex items-center justify-center mb-5">
                      <BellRing className="w-10 h-10 text-[#22c55e]" />
                    </div>

                    <h3 className="font-semibold text-[#111827] text-center text-[15px] sm:text-base">
                      Smart Reminders
                    </h3>

                    <p className="text-sm text-gray-500 mt-3 text-center">
                      Automated notifications
                    </p>
                  </motion.div>

                  {/* Card 4 */}
                  <motion.div
                    {...cardAnimation}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-[22px] p-5 border border-[#e5edf5] shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-5">
                      <Stethoscope className="w-5 h-5 text-[#7c3aed]" />

                      <h3 className="font-semibold text-[#111827] text-[15px] sm:text-base">
                        Care Journey
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                        className="bg-[#fff4e5] text-[#d97706] text-[12px] rounded-xl px-4 py-3 font-medium"
                      >
                        Medication Reminder Sent
                      </motion.div>

                      <motion.div
                        animate={{ x: [0, -3, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                        className="bg-[#fef2f2] text-[#dc2626] text-[12px] rounded-xl px-4 py-3 font-medium"
                      >
                        Follow-up Scheduled
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
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
                className="border-b border-[#ece6ff] pb-4 sm:pb-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-[2px] min-w-fit">
                    <div className="w-7 h-7 rounded-full border border-[#7C3AED]/15 bg-[#f5f0ff] flex items-center justify-center">
                      <ShieldCheck className="w-[15px] h-[15px] text-[#7C3AED]" />
                    </div>
                  </div>

                  <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.45] text-[#24324a] font-medium tracking-[-0.01em]">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Bottom Statement */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-5"
            >
              <div className="bg-[#f5f0ff] border border-[#eadcff] rounded-2xl px-5 py-4">
                <p className="text-[#7C3AED] text-sm sm:text-base font-semibold tracking-[-0.01em]">
                  IMPROVE EVERY PATIENT INTERACTION
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
