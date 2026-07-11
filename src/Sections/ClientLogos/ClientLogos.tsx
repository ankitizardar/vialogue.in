"use client";

import React from "react";
import Image from "next/image";

const brands = [
  "brand_1.png",
  "brand_2.png",
  "brand_3.png",
  "brand_4.png",
  "brand_5.png",
  "brand_7.png",
  "brand_8.png",
];

export default function ClientLogos() {
  // Double the list to create seamless infinite scroll
  const scrollBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 bg-[#FFFFFF] overflow-hidden border-y border-slate-200/60 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center mb-6">
        <p className="text-xs font-semibold tracking-wider text-brand-purple uppercase">
          Trusted by Leading Brands
        </p>
      </div>

      <div className="relative flex overflow-x-hidden w-full">
        {/* Left and Right Fade overlays for premium mask effect */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex gap-8 animate-marquee whitespace-nowrap min-w-full w-max">
          {scrollBrands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-20 bg-slate-50 hover:bg-slate-100/50 border border-slate-200/60 hover:border-brand-purple/30 rounded-xl flex items-center justify-center p-4 transition-all duration-300 group cursor-pointer"
            >
              <Image
                src={`/imgs/${brand}`}
                alt={`Client Logo ${i}`}
                width={120}
                height={40}
                className="max-h-10 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation styles inside component */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
