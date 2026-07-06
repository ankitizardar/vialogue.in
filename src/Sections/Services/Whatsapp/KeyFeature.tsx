"use client";

import { wppKeyFeature } from "@/Global/data";
import React from "react";
import { motion, easeIn } from "framer-motion";

interface Props {
  title: string;
  data: wppKeyFeature[];
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
  hidden: { opacity: 0, y: 50, scale: 0.95 },
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

const KeyFeatures: React.FC<Props> = ({ title, data }) => {
  return (
    <section className="py-16 px-4 sm:px-10 lg:px-40 bg-white text-left">
      <div className="mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-xl heading-two md:text-4xl font-medium text-center sm:mb-16 mb-10"
        >
          {title}
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-2"
        >
          {data.map((feature, index) => {
            const isBox = feature.span === "box";
            const isWide = feature.span === "wide";

            return (
              <motion.div
                key={index}
                variants={card}
                className={`
                  ${feature.bgColor}
                  ${
                    isBox
                      ? "md:row-span-2"
                      : isWide
                      ? "md:col-span-2"
                      : ""
                  }
                  rounded-2xl
                  py-10 px-10
                  sm:py-4 sm:px-8
                  hover:brightness-90
                  transition duration-300
                `}
              >
                <div className="mb-10 sm:mb-4">

                  {/* LARGE BOX STYLE */}
                  {isBox ? (
                    <div className="flex flex-col gap-10">
                      <img
                        src={feature.img}
                        alt={feature.title}
                        className="w-[50%] sm:w-[70%] m-auto object-contain"
                      />

                      <h3 className="text-xl md:text-xl font-medium mb-3">
                        {feature.title}
                      </h3>
                    </div>
                  ) : (
                    /* NORMAL + WIDE STYLE */
                    <div className="flex gap-10 items-center flex-row-reverse">
                      <img
                        src={feature.img}
                        alt={feature.title}
                        className="h-16 w-16 object-contain"
                      />

                      <h3 className="text-xl md:text-xl font-medium mb-3">
                        {feature.title}
                      </h3>
                    </div>
                  )}
                </div>

                <p className="text-gray-700 col-span-2 text-sm leading-5">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default KeyFeatures;