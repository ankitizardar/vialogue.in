'use client';

import React from "react";
import { easeOut, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/router";

const container = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const button = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

interface ReadySectionProps {
  heading?: string;
  paragraph?: string;
  btn1?: string;
  btn2?: string;
}

const ReadySection: React.FC<ReadySectionProps> = ({ heading = "Ready to Start a Better Conversation?", paragraph = "Your customers are waiting. Build, innovate, and grow with the CPaaS platform designed for results.", btn1 = "Book a Demo", btn2 = "Talk to Our Voice Expert" }) => {
  const route = useRouter();
  return (
    <section className="px-4 sm:px-10 lg:px-40 py-4 sm:py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-3xl px-4 py-14 sm:px-16 sm:py-16 text-center bg-gradient-to-br from-[#7C3AED] to-[#F9A8D4] relative overflow-hidden shadow-xl"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/20 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/20 blur-[80px] pointer-events-none" />

        <motion.div variants={item} className="mb-4 max-w-4xl mx-auto relative z-10">
          <h2 className="heading-two text-white">{heading}</h2>
        </motion.div>

        <motion.div variants={item} className="mb-16 max-w-4xl mx-auto">
          <h2 className="subheading text-white">
            {paragraph}
          </h2>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.button
            variants={button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="w-full cursor-pointer sm:w-auto px-8 py-3 rounded-xl text-[#7C3AED] font-medium bg-white hover:bg-white/90 transition-colors shadow-sm text-base sm:text-lg"
            onClick={()=>route.push("/contact")}
          >
            {btn1}
          </motion.button>

          <motion.button
            variants={button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="w-full cursor-pointer sm:w-auto px-8 py-3 rounded-xl text-white border border-white/40 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center gap-2 text-base sm:text-lg"
            onClick={()=>route.push("/contact")}
          >
            <Sparkles size={18} strokeWidth={1} />
            {btn2}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReadySection;
