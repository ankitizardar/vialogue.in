"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { PlatformCapability } from "./data";

const SlidingCards: React.FC<{ capabilities: PlatformCapability[] }> = ({
  capabilities,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  /* AUTO SCROLL */
  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const auto = gsap.to(container, {
      scrollLeft: container.scrollWidth / 2,
      duration: 35,
      ease: "none",
      repeat: -1,
    });

    const pause = () => auto.pause();
    const resume = () => auto.play();

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    return () => {
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      auto.kill();
    };
  }, []);

  /* Scroll arrows */
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  /* Duplicate cards for infinite scroll */
  const cards = [...capabilities, ...capabilities];

  return (
    <div
      ref={ref}
      className={`px-6 sm:px-10 lg:px-40 py-16 bg-[#F9F9FA] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-2xl md:text-4xl font-medium heading-two">
          Platform Capabilities
        </h1>

        <p className="mt-4 text-xl subheading text-gray-600 max-w-3xl mx-auto">
          Vialogue’s advanced campaign engine helps you create, manage, and
          optimize messaging campaigns at scale with higher delivery,
          engagement, and complete control.
        </p>
      </div>

      {/* Arrow Controls */}
      {/* <div className="hidden md:flex justify-between items-center mb-4">
        <button
          onClick={scrollLeft}
          className="bg-white shadow-md rounded-full p-3 hover:bg-gray-100"
        >
          ←
        </button>

        <button
          onClick={scrollRight}
          className="bg-white shadow-md rounded-full p-3 hover:bg-gray-100"
        >
          →
        </button>
      </div> */}

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll overflow-y-hidden scrollbar-hide"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              min-w-full md:min-w-[500px]
              bg-[#6A47F221] rounded-xl p-6
              hover:shadow-xl transition-all duration-300
            "
          >
            <h1 className="text-xl font-semibold">{card.title}</h1>

            <p className="mt-2 text-gray-600 text-md">
              {card.description}
            </p>

            <Image
              src={card.img}
              alt={card.title}
              width={400}
              height={300}
              className="mt-10 w-full object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingCards;