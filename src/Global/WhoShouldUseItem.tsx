"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface WhoShouldUseItem {
  id: number;
  title: string;
  image: string;
}

interface Props {
  heading?: string;
  items: WhoShouldUseItem[];
  bgColor?: string;
}

const WhoShouldUse: React.FC<Props> = ({
  heading = "Who Should Use Agent Assist?",
  items,
  bgColor = "white",
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`"w-full py-14 md:py-20 bg-white" ${bgColor}`}>
      <div className="mx-auto px-4 sm:px-10 lg:px-40">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-medium heading-two text-gray-900 mb-12 md:mb-16">
          {heading}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-0 text-center">
          {items.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={`flex flex-col items-center ${i%2===0 && "bg-gray-200 sm:bg-gray-100 py-8 sm:py-0"} ${bgColor==="white" && "sm:bg-white"}`}
            >
              {/* Icon Container */}
              <div className="w-50 md:w-full aspect-square rounded-full bg-gray-100 flex items-center justify-center hover:shadow-md transition">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-sm md:text-lg font-semibold text-gray-900 leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldUse;
