'use client';

import React, { useEffect, useRef } from "react";
import Heading from "@/Components/InnerComponents/Heading";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import SplitType from "split-type";
import AnimatedDivider from "@/Components/AnimatedDivider";

interface Data {
  value: string;
  label: string;
  c1: string;
  c2: string;
}

interface IndustrySectionProps {
  bgColor?: string;
}

const data: Data[] = [
  { value: "10B+", label: "Messages Delivered", c1: "#FFEEC0", c2: "#FFEEA9" },
  { value: "500+", label: "Enterprise Clients", c1: "#FFBEC1", c2: "#FFBEA9" },
  { value: "24x7", label: "Customer Support", c1: "#F5D6FD", c2: "#F5D6E4" },
  // { value: "5000+", label: "Voice Calls / Year", c1: "#DACAFF", c2: "#DACAE7" },
];

/* =======================
   CONTROLLED FONT SIZE
======================= */
const DIGIT_HEIGHT = 42;

/* =======================
   SINGLE DIGIT SCROLLER
======================= */
const DigitScroll: React.FC<{ digit: string; inView: boolean }> = ({
  digit,
  inView,
}) => {
  const numbers = Array.from({ length: 10 }, (_, i) => i.toString());
  const idx = parseInt(digit, 10) || 0;

  return (
    <div className="overflow-hidden" style={{ height: DIGIT_HEIGHT, width: "1ch" }}>
      <motion.div
        animate={{ y: inView ? -idx * DIGIT_HEIGHT : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {numbers.map((n) => (
          <div
            key={n}
            style={{ height: DIGIT_HEIGHT }}
            className="flex items-center justify-center font-bold text-2xl sm:text-4xl leading-none tabular-nums"
          >
            {n}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* =======================
   FULL NUMBER RENDER
======================= */
const AnimatedNumber: React.FC<{ value: string; inView: boolean }> = ({
  value,
  inView,
}) => (
  <div className="flex items-center justify-center font-light text-2xl sm:text-4xl leading-none tabular-nums">
    {value.split("").map((char, i) =>
      /\d/.test(char) ? (
        <DigitScroll key={i} digit={char} inView={inView} />
      ) : (
        <span key={i} className="mx-0.5 font-bold text-purple-600">
          {char}
        </span>
      )
    )}
  </div>
);

const IndustrySection: React.FC<IndustrySectionProps> = ({ bgColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!subRef.current || !sectionRef.current) return;

    const split = new SplitType(subRef.current, { types: "words" });

    gsap.set(split.words, { opacity: 0, y: 14 });

    gsap.to(split.words, {
      opacity: 1,
      y: 0,
      stagger: 0.01,
      duration: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    return () => split.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full px-4 sm:px-8 lg:px-40 py-16 ${bgColor || "bg-gray-100"}`}
    >
      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-col items-center gap-4 lg:gap-4 mb-16"
      >
        <div className="flex-1">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
            <Heading text="Trusted by industry leaders. Built for scale" />
          </div>
        </div>

        <p
          ref={subRef}
          className="flex-1 text-sm sm:text-base lg:text-lg text-gray-800 lg:mt-auto subheading"
        >
          The most innovative brands rely on Vialogue for mission-critical
          communication.
        </p>
      </motion.div>

      {/* ================= STATS GRID ================= */}
      <div
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {data.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="
              flex flex-col items-center justify-center
              text-center
              gap-2
              px-4 py-6 sm:px-6 sm:py-8
              rounded-2xl
              bg-gradient-to-br from-[#7C3AED]/5 to-[#F9A8D4]/5 
              border border-slate-200/60 shadow-sm
              backdrop-blur-md hover:border-[#7C3AED]/30 transition-all
            "
          >
            <AnimatedNumber value={e.value} inView={inView} />
            <div className="text-xs sm:text-sm lg:text-base text-gray-800">
              {e.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustrySection;
