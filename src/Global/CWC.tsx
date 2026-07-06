"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";

export interface CWCListProp {
  title: string;
  description: string;
  img: string;
}

export interface CWCProp {
  heading: string;
  list: CWCListProp[];
}

const CWC: React.FC<CWCProp> = ({ heading, list }) => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % list.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [list.length]);

  return (
    <div
      ref={ref}
      className={`px-4 bg-gray-100 sm:bg-gray-50 sm:px-10 lg:px-40 py-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-2xl md:text-4xl heading-two font-medium mb-12 text-center">
        {heading}
      </h1>

      {/* DESKTOP */}
      <div className="hidden md:grid md:grid-cols-6 gap-10 items-start">
        {/* LEFT ACCORDION */}
        <div className="space-y-3 col-span-2">
          {list.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                className={`rounded-xl overflow-hidden border transition-all ${
                  isOpen
                    ? "bg-[#f3ebff] border-[#d4b5ff]"
                    : "bg-white border-gray-200"
                }`}
              >
                <button
                  onClick={() => setActive(index)}
                  className="w-full flex items-center cursor-pointer justify-between px-4 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    {/* <ArrowRight
                      size={18}
                      className={isOpen ? "text-[#6a00ff]" : ""}
                    /> */}
                    <ShieldCheck className="inline-block min-w-5 h-5 text-[#6a00ff]" />
                    <span
                      className={`text-lg ${
                        isOpen ? "font-semibold text-[#6a00ff]" : "font-medium"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180 text-[#6a00ff]" : ""
                    }`}
                    size={18}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="px-4 pb-4 text-gray-600 overflow-hidden"
                    >
                      <p className="leading-relaxed text-sm">
                        {item.description.split(" ").length > 10
                          ? item.description.split(" ").slice(0, 10).join(" ") +
                            "..."
                          : item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT IMAGE + TEXT */}
        <div className="col-span-4 rounded-3xl bg-[#f3ebff] p-8 min-h-[550px] overflow-hidden">
          <div className="mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.45 }}
              >
                <h2 className="text-2xl font-medium">{list[active].title}</h2>
                <p className="mt-2 text-lg text-gray-600 leading-relaxed">
                  {list[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* IMAGE STACK */}
          <div className="relative h-[320px] flex items-center justify-center overflow-hidden">
            {list.map((item, index) => {
              const offset = index - active;

              return (
                <motion.div
                  key={index}
                  animate={{
                    x: offset * 240,
                    scale: offset === 0 ? 1 : 0.82,
                    opacity: offset === 0 ? 1 : 0.28,
                    filter: offset === 0 ? "blur(0px)" : "blur(5px)",
                    rotate: offset === 0 ? 0 : offset < 0 ? -4 : 4,
                    zIndex: offset === 0 ? 10 : 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                  }}
                  className="absolute"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={350}
                    className={`rounded-2xl object-contain transition-all duration-700 ${
                      offset === 0 ? "w-[430px]" : "w-[280px]"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden space-y-5">
        {list.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="bg-[#f3ebff] rounded-2xl p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-black">{item.title}</h2>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-4">
               <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="w-full rounded-xl object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CWC;
