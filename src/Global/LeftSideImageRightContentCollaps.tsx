import React, { useState } from "react";
import { ShieldCheck, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { rcsUseCases } from "./rcsUserCase";

const LSIRCC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-10 lg:px-40">
      <h2 className="text-3xl heading-two md:text-4xl font-medium text-center mb-10">
        Use Cases That Perform Better on RCS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT STACKED IMAGE */}
        <div className="relative h-full flex items-center justify-center overflow-hidden">
          {rcsUseCases.map((item, index) => {
            const offset = index - active;

            return (
              <motion.div
                key={index}
                animate={{
                  x: offset * 180,
                  scale: offset === 0 ? 1 : 0.82,
                  opacity: offset === 0 ? 1 : 0.22,
                  filter: offset === 0 ? "blur(0px)" : "blur(6px)",
                  rotate: offset === 0 ? 0 : offset < 0 ? -5 : 5,
                  zIndex: offset === 0 ? 9 : 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                }}
                className="absolute"
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  animate={{
                    y: offset === 0 ? [0, -8, 0] : 0,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`rounded-2xl object-contain transition-all duration-700 ${
                    offset === 0 ? "h-[520px] w-[420px]" : "h-[260] w-[260px]"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT ACCORDION */}
        <div className="space-y-3">
          {rcsUseCases.map((item, index) => {
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
                {/* HEADER */}
                <button
                  onClick={() => setActive(index)}
                  className="w-full flex items-center cursor-pointer justify-between px-4 py-4 text-left"
                >
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 mt-1 h-5 text-purple-600" />
                    <span
                      className={`sm:text-lg text-lg ${
                        isOpen
                          ? "font-semibold text-[#6a00ff]"
                          : "font-medium"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isOpen ? "rotate-180 text-[#6a00ff]" : ""
                    }`}
                  />
                </button>

                {/* CONTENT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, x: -20, height: 0 }}
                      animate={{ opacity: 1, x: 0, height: "auto" }}
                      exit={{ opacity: 0, x: -20, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="px-5 py-4 sm:text-md text-sm text-gray-700 overflow-hidden"
                    >
                      <p
                        className="text-left"
                        dangerouslySetInnerHTML={{
                          __html: item.description || "",
                        }}
                      ></p>

                      <ul className="list-disc pl-5 space-y-1 mt-3">
                        {item.points.map((p, i) => (
                          <li
                            className="text-left"
                            key={i}
                            dangerouslySetInnerHTML={{ __html: p }}
                          ></li>
                        ))}
                      </ul>

                      {item.bestFor && (
                        <p className="text-left mt-3">
                          <span className="text-purple-600 font-medium">
                            Best for:
                          </span>{" "}
                          {item.bestFor}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LSIRCC;