"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VerifiedMessagingData } from "./verifiedMessaging";

interface VerifiedBusinessMessagingProps {
  data: VerifiedMessagingData[];
}

const VerifiedBusinessMessaging = ({ data }: VerifiedBusinessMessagingProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <section className="w-full bg-[#f4f4f6] py-16 px-4 sm:px-10 lg:px-40 overflow-hidden">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="relative pl-12">

          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-[3px] bg-purple-200 rounded-full" />

          {/* Timeline dots */}
          {data.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`absolute left-2 w-5 h-5 rounded-full border-4 cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? "bg-purple-600 border-purple-600 scale-110"
                  : "bg-white border-purple-300"
              }`}
              style={{
                top: `${(index / (data.length - 1)) * 100}%`,
                transform: "translateY(-50%)",
              }}
            />
          ))}

          {/* CONTENT */}
          <div className="relative min-h-[320px]">

            {data.map((item, idx) => (
              <motion.div
                key={idx}
                animate={{
                  opacity: activeIndex === idx ? 1 : 0,
                  x: activeIndex === idx ? 0 : 20,
                  pointerEvents: activeIndex === idx ? "auto" : "none",
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <h2 className="text-4xl text-left heading-two md:text-5xl font-medium leading-tight text-gray-900 mb-4">
                  {item.title}
                </h2>

                <p className="text-gray-700 text-lg mb-8">
                  {item.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {item.points.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 p-2 rounded-xl bg-purple-100 flex items-center justify-center">
                        {point.icon && (
                          <point.icon className="w-6 h-6 text-purple-600" />
                        )}
                      </div>

                      <p className="text-gray-800 font-medium text-left">
                        {point.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="flex justify-center min-h-[360px] items-center relative overflow-hidden">

          {data.map((item, idx) => {
            const offset = idx - activeIndex;

            return (
              <motion.img
                key={idx}
                src={item.image}
                alt={item.title}
                animate={{
                  x: offset * 140,
                  scale: offset === 0 ? 1 : 0.82,
                  opacity: offset === 0 ? 1 : 0.22,
                  rotate: offset === 0 ? 0 : offset < 0 ? -8 : 8,
                  zIndex: offset === 0 ? 8 : 5,
                }}
                transition={{
                  duration: 0.55,
                  ease: "easeInOut",
                }}
                className={`absolute object-contain transition-all mt-16 sm:mt-0 duration-700 ${
                  offset === 0
                    ? "w-[260px] h-[300px] sm:h-[400px] sm:w-[320px]"
                    : "w-[200px] h-[300px] sm:h-[350px] sm:w-[240px]"
                }`}
              />
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default VerifiedBusinessMessaging;