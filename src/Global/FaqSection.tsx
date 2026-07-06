"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import Heading from "@/Components/InnerComponents/Heading";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  data: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  data,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const answerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.01 },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: easeOut },
    },
  };

  // auto split into 2 columns (reusable)
  const mid = Math.ceil(data.length / 2);
  const groupedFaqs = [data.slice(0, mid), data.slice(mid)];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16 px-4 sm:px-10 lg:px-40 bg-white"
    >
      {/* HEADING */}
      <div className="text-center mb-14">
        <h1 className="text-2xl sm:text-4xl lg:text-4xl text-center sm:text-center font-medium sm:leading-10 tracking-tight text-gray-900">Frequently Asked Questions </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        {groupedFaqs.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-4 mx-auto min-w-full">
            {group.map((faq, index) => {
              const currentIndex = groupIndex * 100 + index;
              const isOpen = openIndex === currentIndex;

              return (
                <div
                  key={currentIndex}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-violet-300 bg-white shadow-md"
                      : "border-gray-200 bg-[#FAFAFC]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(currentIndex)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-gray-900">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-violet-500"
                          : "text-gray-500"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <motion.div
                      variants={answerContainer}
                      initial="hidden"
                      animate="visible"
                      className="px-5 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed flex flex-wrap"
                    >
                      {faq.answer.split(" ").map((char, i) => (
                        <motion.span
                          key={i}
                          variants={charVariants}
                          className="whitespace-pre"
                        >
                          {char + " "}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQSection;