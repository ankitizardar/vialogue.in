'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GetInTouch: React.FC = () => {
  return (
    <section className="sm:mb-0 py-16 sm:py-0 px-4 sm:px-0 mb-0 sm:text-left text-center bg-gradient-to-r from-[#7C3AED] to-purple-400">
      <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 items-center mx-auto">

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-30 hidden sm:block sm:h-full md:h-full lg:h-full min-h-[200px] lg:min-h-[300px] overflow-hidden order-2 lg:order-1"
        >
          <Image
            src="/imgs/bg_girl.png"
            alt="Get in touch"
            fill
            className="object-cover object-[-100px_0px]"
            blurDataURL="/imgs/low/bg_girl.png"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg order-1 lg:order-2 lg:mr-24 lg:mb-10 lg:m-10 max-w-[520px] flex flex-col justify-center items-center sm:items-start text-center sm:text-left gap-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient mb-1"
          >
            Get in touch
          </motion.h2>

          <p className="text-sm sm:text-base text-gray-650 leading-relaxed font-light">
            Have questions about our platform or want to explore how Vialogue can transform your communications? Reach out to our team of experts.
          </p>

          <Link
            href="/contact"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-6 py-3.5 mt-2 rounded-lg text-white font-medium text-sm
                       bg-gradient-to-r from-[#7C3AED] to-purple-400
                       shadow-[0_4px_20px_rgba(124,58,237,0.15)] hover:shadow-[0_4px_30px_rgba(124,58,237,0.3)]
                       transition-all duration-300 cursor-pointer w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              <span>Contact Us</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
