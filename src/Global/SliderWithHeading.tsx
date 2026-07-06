import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { PlatformCapability } from "./data";

const SlidingWithHeading: React.FC<{ capabilities: PlatformCapability[] }> = ({
  capabilities,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState("1");

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

  // Scroll functions for desktop arrows
  const scrollLeft = () => {
    setActiveId("1");
    document.getElementById("1")?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };
  const scrollCenter = () => {
    setActiveId("2");
    document.getElementById("2")?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const scrollRight = () => {
    setActiveId("3");
    document.getElementById("3")?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <div
      ref={ref}
      className={`px-6 sm:px-10 lg:px-40 py-16 bg-[#FFF3F3] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-2xl md:text-4xl heading-two font-medium">
          The Problem: Support Teams Face 3 Major Challenges
        </h1>
      </div>

      {/* Arrow Controls (Desktop Only) */}
      <div className="hidden md:flex justify-center items-center mb-4 gap-4 mb-10">
        <button
          onClick={scrollLeft}
          className={`${activeId === "1" ? "bg-[#6A47F2] text-white" : "bg-white"} "bg-white cursor-pointer shadow-md rounded-full text-lg font-medium py-1 px-4 hover:bg-gray-100"`}
        >
          Inconsistent Communication
        </button>

        <button
          onClick={scrollCenter}
          className={`${activeId === "2" ? "bg-[#6A47F2] text-white" : "bg-white"}  "bg-white cursor-pointer shadow-md rounded-full text-lg font-medium py-1 px-4 hover:bg-gray-100"`}
        >
          Slow Responses
        </button>

        <button
          onClick={scrollRight}
          className={`${activeId === "3" ? "bg-[#6A47F2] text-white" : "bg-white"} "bg-white cursor-pointer shadow-md rounded-full text-lg font-medium py-1 px-4 hover:bg-gray-100"`}
        >
          Lack of Customer Context
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="
          flex gap-6 overflow-x-auto scrollbar-hide 
          snap-x snap-mandatory scroll-smooth
        "
      >
        {capabilities.map((card) => (
          <div
            id={card.id.toString()}
            key={card.id}
            className="
              min-w-full md:min-w-[600px] 
              snap-center 
              bg-[#6A47F221] rounded-xl p-6 
              hover:shadow-xl transition-all duration-300
            "
          >
            <h1 className="text-2xl font-medium">{card.title}</h1>
            <p className="mt-2 text-gray-600 text-lg leading-5">{card.description}</p>
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

export default SlidingWithHeading;