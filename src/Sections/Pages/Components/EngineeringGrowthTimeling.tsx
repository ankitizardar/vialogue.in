"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const steps = [
  {
    step: "1",
    year: "2020",
    title: "It started with a gap",
    desc:
      "We noticed how difficult it was for businesses to manage conversations across different channels and systems.",
    left: "0%",
    top: "89%",
  },
  {
    step: "2",
    year: "2022",
    title: "Turning an idea into a platform",
    desc:
      "Vialogue took shape as a platform, helping teams communicate more clearly and work more efficiently.",
    left: "40%",
    top: "25%",
  },
  {
    step: "3",
    year: "Today",
    title: "Still evolving",
    desc:
      "Vialogue continues to evolve, guided by how businesses communicate every day.",
    left: "78%",
    top: "-51%",
  },
];

export default function EngineeringGrowthAbsolute() {
  return (
    <section className="relative mb-0 bg-white py-16 px-4 sm:px-10 lg:px-40 h-auto lg:h-[680px]">
      <div className="max-w-7xl mx-auto relative">

        {/* ================= TOP CONTENT ================= */}
        <motion.div
          className="max-w-md relative z-9"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-medium tracking-widest text-[#7C3AED] uppercase">
            Stockie operation across the world
          </p>

          <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 mt-4 leading-tight">
            Engineering Growth, <br /> <span className="text-gradient">Step-by-Step</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Because good communication should never feel complicated.
          </p>

          <button className="mt-8 px-7 py-3 rounded-full bg-[#7C3AED] text-white font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </motion.div>

        {/* ================= TIMELINE WRAPPER ================= */}
        <div className="sm:absolute left-0 right-0 top-[240px] h-[220px] pointer-events-none hidden lg:block">

          {/* CURVE SVG */}
          <motion.svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="inset-0 w-[80%] h-[600px] sm:-top-[50%] absolute"
          >
            <motion.path
              d="M 0 53
                 C 20 40, 20 50, 52 30
                 C 70 20, 80 20, 100 0"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </motion.svg>

          {/* ================= STEPS ================= */}
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="sm:absolute"
              style={{ left: s.left, top: s.top }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6 + i * 0.3,
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            >
              {/* BIG NUMBER */}
              <span className="sm:absolute bottom-10 -right-0 text-[140px] font-medium text-gray-100 select-none">
                {s.step}
              </span>

              {/* NODE */}
              <div className="w-7 h-7 rounded-xl bg-white border-2 border-[#7C3AED] shadow-md">
                <Circle fill="#ffffff77" strokeWidth={0} />
                </div>

              {/* TEXT */}
              <div className="mt-10 w-64">
                <p className="text-sm font-medium text-gray-900">
                  {s.year}
                </p>
                <p className="text-sm font-medium text-gray-800 mt-1">
                  {s.title}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden mt-16 space-y-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-2 border-[#7C3AED]"
            >
              <span className="sm:absolute -left-4 top-0 text-6xl font-medium text-gray-100">
                {s.step}
              </span>
              <p className="text-sm font-medium text-gray-900">{s.year}</p>
              <p className="font-medium text-gray-800">{s.title}</p>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
