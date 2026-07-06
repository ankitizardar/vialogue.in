"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  "/imgs/brand_5.png",
  "/imgs/brand_2.png",
  "/imgs/brand_3.png",
  "/imgs/brand_4.png",
  "/imgs/brand_1.png",
  "/imgs/brand_7.png",
  "/imgs/brand_8.png",
];

interface BrandsProps {
  color?: string;
}

export default function Brands({ color }: BrandsProps) {
  return (
    <section className="relative py-14 sm:py-16 bg-transparent">
      <div className="mx-auto px-4 sm:px-10 lg:px-40">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            Trusted by Leading Brands
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed subheading">
            Powering customer engagement and enterprise communication at scale.
          </p>
        </div>

        {/* Pyramid Layout */}
        <div className="flex flex-col items-center gap-10 mt-16">

          {/* First Row - 3 Logos */}
          <div className="flex flex-wrap justify-center gap-10">
            {brands.slice(0, 3).map((src, index) => (
              <LogoCard key={index} src={src} index={index} />
            ))}
          </div>

          {/* Second Row - 3 Logos */}
          <div className="flex flex-wrap justify-center gap-10">
            {brands.slice(3, 6).map((src, index) => (
              <LogoCard key={index} src={src} index={index + 3} />
            ))}
          </div>

          {/* Third Row - 2 Logos */}
          <div className="flex flex-wrap justify-center gap-10">
            {brands.slice(6, 8).map((src, index) => (
              <LogoCard key={index} src={src} index={index + 6} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function LogoCard({ src, index }: { src: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-[150px] h-[60px] sm:w-[250px] sm:h-[100px] 
                 flex items-center justify-center 
                 rounded-2xl bg-white/5
                 backdrop-blur-md
                 transition-all duration-300"
    >
      <Image
        src={src}
        width={600}
        height={200}
        alt={`Brand ${index + 1}`}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}