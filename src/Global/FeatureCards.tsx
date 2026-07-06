"use client";

import React from "react";
import { motion, easeIn } from "framer-motion";
import { RcsFeatureCard } from "./data";

interface Props {
  title: string;
  data: RcsFeatureCard[];
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
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

const FeatureCards: React.FC<Props> = ({ title, data }) => {
  return (
    <section className="w-full text-left bg-white py-16 px-4 sm:px-10 lg:px-40 overflow-hidden">
      <div className="mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-center text-2xl heading-two md:text-5xl font-medium text-black leading-tight">
            {title}
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-7">
            Powerful communication infrastructure designed for automation,
            engagement, analytics, and enterprise-scale customer interactions.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              className={`
                ${item.bgColor}
                rounded-[30px]
                p-7 md:p-8
                hover:brightness-[0.98]
                hover:-translate-y-1
                transition-all duration-300
                flex flex-col justify-between
                overflow-hidden
                relative
                ${
                  item.size === "large"
                    ? "lg:row-span-2 min-h-[320px]"
                    : "min-h-[0px]"
                }
              `}
            >
              {/* TOP CONTENT */}
              <div
                className={`${
                  item.size === "large"
                    ? "flex flex-col gap-10"
                    : "flex items-start justify-between gap-6"
                }`}
              >
                {/* TEXT */}
                <div className="flex-1">
                  {item.size !== "large" && (
                    <h3 className="text-xl md:text-[22px] font-medium text-black leading-snug mb-3">
                      {item.title}
                    </h3>
                  )}

                  {item.size === "large" && (
                    <h3 className="text-2xl md:text-[28px] font-medium text-black leading-tight mb-4">
                      {item.title}
                    </h3>
                  )}

                  <p className="text-gray-700 text-sm md:text-[15px] leading-6">
                    {item.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div
                  className={`${
                    item.size === "large"
                      ? "flex justify-center items-center"
                      : "shrink-0"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`
                      object-contain
                      ${
                        item.size === "large"
                          ? "w-[55%] md:w-[65%] mx-auto mt-4"
                          : "w-16 h-16 md:w-20 md:h-20"
                      }
                    `}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeatureCards;