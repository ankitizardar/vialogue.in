"use client";

import React, { useEffect, useRef } from "react";
import { OverviewData } from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  data: OverviewData;
  rev?: boolean;
}

const GlobalOverview: React.FC<Props> = ({ data, rev }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      /* IMAGE */
      tl.from(imageRef.current, {
        opacity: 0,
        x: rev ? 80 : -80,
        duration: 0.7,
        ease: "power3.out",
      });

      /* CONTENT */
      tl.from(
        contentRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );

      /* POINTS STAGGER */
      tl.from(
        pointsRef.current,
        {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, [rev]);

  return (
    <section ref={sectionRef} className="w-full py-16 px-4 sm:px-10 lg:px-40">
      <div className="mx-auto">

        {/* BADGE */}
        {/* {data.badge && (
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-14 h-[1px] bg-purple-300" />
            <span className="text-purple-600 text-sm font-medium tracking-wide">
              {data.badge}
            </span>
            <div className="w-14 h-[1px] bg-purple-300" />
          </div>
        )} */}

        <h2 className="text-3xl text-center md:text-5xl font-medium leading-tight text-black mb-10 heading-two">
              {data.title}
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div
            ref={imageRef}
            className={`flex justify-center ${rev ? "lg:order-2" : ""}`}
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full max-w-[520px] rounded-xl"
            />
          </div>

          {/* CONTENT */}
          <div ref={contentRef} className={`${rev ? "lg:order-1" : ""}`}>
            <p
              className="text-gray-700 text-lg leading-relaxed mb-5 paragraph text-justify"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />

            {data.bold !== "null" && (
              <p className="font-medium text-lg mb-5">{data.bold}</p>
            )}

            {/* POINTS */}
            <ul className="space-y-4 mt-10 sm:mt-16">
              {data.points.map((point, index) => (
                <li
                  key={index}
                  ref={(el) => {pointsRef.current[index] = el}}
                  className="text-lg flex gap-2 items-center sm:text-xl text-left font-medium leading-snug px-0 capitalize"
                >
                  {/* <ArrowRight className="min-w-5 min-h-5 text-purple-600" />  */}
                  <ShieldCheck className="inline-block min-w-5 h-5 text-[#6a00ff]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalOverview;