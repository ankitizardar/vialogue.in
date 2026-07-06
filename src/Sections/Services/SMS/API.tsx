"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const API: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const rightHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* SPLIT TEXT */
      const headingSplit = new SplitType(headingRef.current!, {
        types: "words",
      });
      const descSplit = new SplitType(descRef.current!, { types: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse", // repeat animation
        },
      });

      /* TOP HEADING WORD REVEAL */
      tl.from(headingSplit.words, {
        opacity: 0,
        y: 30,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      });

      /* IMAGE SLIDE FROM LEFT */
      tl.from(
        imgRef.current,
        {
          x: -120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      );

      /* RIGHT HEADING POP */
      if (rightHeadingRef.current) {
        tl.from(
          rightHeadingRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        );
      }

      /* DESCRIPTION WORD REVEAL */
      tl.from(
        descSplit.words,
        {
          opacity: 0,
          y: 12,
          stagger: 0.02,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.3",
      );

      /* TABS STAGGER REVEAL */
      tl.fromTo(
        tabsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2",
      );

      return () => {
        headingSplit.revert();
        descSplit.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="px-6 sm:px-10 lg:px-40 py-24 bg-[#fafbfd]">
      
      {/* Top Heading */}
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
          <Layers size={16} className="text-[#7C3AED]" />
          <span className="text-sm font-semibold uppercase tracking-wider text-slate-700">Robust Architecture</span>
        </div>
        <h1
          ref={headingRef}
          className="text-3xl md:text-5xl font-extrabold text-slate-900 heading-two transition-all duration-300 hover:text-[#884CED] cursor-default"
        >
          Scalable SMS API Infrastructure For Businesses
        </h1>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#F9A8D4]/10 blur-[80px] rounded-full pointer-events-none"></div>
          <img
            ref={imgRef}
            src="/services/sms/api.png"
            alt="API Infrastructure"
            className="rounded-3xl h-[320px] sm:max-h-[500px] sm:h-[450px] m-auto object-contain relative z-10 filter drop-shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex sm:py-4 flex-col rounded-xl h-fit gap-8">
          
          <p
            ref={descRef}
            className="text-slate-600 paragraph text-lg md:text-[19px] leading-relaxed text-justify font-medium"
          >
            Vialogue offers robust SMS API infrastructure designed to help
            businesses send transactional alerts, OTPs, and promotional messages
            at scale. Built for high performance and reliability, our platform
            ensures fast message delivery, compliance-ready workflows, and
            seamless integration across applications.
          </p>

          {/* Tabs */}
          <div className="flex mt-6 justify-start flex-wrap gap-3">
            {[
              "Overview",
              "Core Features",
              "Architecture",
              "REST APIs",
              "Webhooks",
              "SDKs",
              "Scalability",
              "Security",
              "Performance",
              "Documentation",
            ].map((tab, index) => (
              <button
                key={index}
                ref={(el) => {
                  tabsRef.current[index] = el;
                }}
                className="px-4 py-2 text-sm md:text-sm font-bold rounded-lg
                bg-purple-50 border border-purple-100
                hover:border-purple-200 hover:shadow-sm
                transition-all duration-300 group"
              >
                <span className="text-brand-purple group-hover:text-[#884CED] transition-all duration-300">
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default API;
