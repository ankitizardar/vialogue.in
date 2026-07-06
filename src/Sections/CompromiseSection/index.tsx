"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Heading from "@/Components/InnerComponents/Heading";
import { ArrowRight, Dot } from "lucide-react";

import image1 from "../../../public/imgs/dash1.png";
import image2 from "../../../public/imgs/dash2.png";
import image3 from "../../../public/imgs/dash3.png";
import image4 from "../../../public/imgs/dash4.png";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Unified Customer Communication",
    image: image1,
    points: [
      "Manage voice, WhatsApp, SMS & APIs in one dashboard",
      "Centralized conversation tracking",
      "No silos, no multiple tools required",
    ],
  },
  {
    title: "Intelligent Agent Assist",
    image: image2,
    points: [
      "Real-time contextual customer insights",
      "AI-powered suggestions during calls & chats",
      "Reduced handle time and fewer errors",
    ],
  },
  {
    title: "Bots & Conversation Builder",
    image: image3,
    points: [
      "No-code journey and flow builder",
      "Event, time & behavior-based triggers",
      "Automated campaign orchestration",
    ],
  },
  {
    title: "Botss for Enterprises",
    image: image4,
    points: [
      "Secure APIs for OTPs, voice & notifications",
      "High-performance message delivery",
      "Built for reliability and compliance at scale",
    ],
  },
];

const CompromiseSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile */

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {

      /* Heading animation */

      const headingSplit = new SplitType(headingRef.current!, {
        types: "words",
      });

      const subSplit = new SplitType(subHeadingRef.current!, {
        types: "words",
      });

      gsap.set(subSplit.words, { opacity: 0, y: 20 });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })
      .from(headingSplit.words, {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(subSplit.words, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power3.out",
      }, "-=0.4");

      /* STACKED CARD ANIMATION */

      gsap.set(cardRefs.current, {
        yPercent: 120,
        scale: 1,
        opacity: 1,
        willChange: "transform",
      });

      const scrollDistance = isMobile
        ? cards.length * 45   // shorter scroll on mobile
        : cards.length * 70;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollDistance}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(cardRefs.current[0], {
        yPercent: 0,
        scale: 1,
      });

      cards.forEach((_, i) => {

        if (i === 0) return;

        tl.to(
          cardRefs.current[i],
          {
            yPercent: 0,
            scale: 1,
          },
          i
        ).to(
          cardRefs.current[i - 1],
          {
            scale: isMobile ? 0.92 : 0.9,
            yPercent: -12,
          },
          i
        );

      });

      return () => {
        headingSplit.revert();
        subSplit.revert();
      };

    }, sectionRef);

    return () => ctx.revert();

  }, [isMobile]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">

      <div className="mx-auto px-4 sm:px-6 md:px-20 lg:px-40 py-16">

        {/* Header */}

        <div className="flex flex-col lg:flex-row gap-10 items-end mb-20">

          <div ref={headingRef} className="flex-1 text-center lg:text-left">
            <Heading text="Created for Brands That Refuse to Compromise" />
          </div>

          <div className="flex-1">
            <p
              ref={subHeadingRef}
              className="text-lg md:text-xl text-gray-700 leading-relaxed text-center lg:text-left"
            >
              We go beyond transactions—helping brands create richer,
              more human interactions at scale.
            </p>
          </div>

        </div>

        {/* STACKED CARDS */}

        <div className="relative max-w-[90vw] md:max-w-[80vw] h-[70vh] flex items-center justify-center m-auto">

          {cards.map((card, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              className="absolute top-[-10vh] sm:top-0 inset-0 flex items-center justify-center"
            >
              <Card card={card} idx={idx} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CompromiseSection;

/* Card */

interface CardProps {
  card: (typeof cards)[number];
  idx: number;
}

const Card = ({ card, idx }: CardProps) => {

  return (
    <div className="w-full max-w-[520px] md:max-w-none bg-white rounded-3xl shadow-[0_0px_10px_rgba(0,0,0,0.2)] sm:shadow-[0_10px_10px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col md:grid md:grid-cols-8">

  {/* Title */}

  <h3 className="text-base sm:text-xl md:text-2xl text-center md:text-left font-medium p-5 md:px-8 md:col-span-8">
    {card.title}
  </h3>

  {/* Image */}

  <Image
    src={card.image}
    alt={card.title}
    priority={idx === 0}
    className="w-full h-[200px] sm:h-[220px] md:h-[90%] object-cover object-top md:col-span-5"
  />

  {/* Content */}

  <div className="flex flex-col gap-2 sm:gap-3 py-6 px-5 text-center md:text-left md:col-span-3">

    {card.points.map((point: string, i: number) => (

      <div
        key={i}
        className="flex items-start justify-center md:justify-start gap-2 text-base md:text-lg text-black"
      >

        <Dot size={20} className="hidden md:block" />

        <span className="leading-tight text-sm sm:text-lg font-normal sm:font-semibold md:font-normal">
          {point}
        </span>

      </div>

    ))}

    <Link
      href="/login"
      className="text-base border md:border-0 p-2 md:p-0 rounded-2xl font-bold text-orange-500 flex items-center justify-center md:justify-start gap-2 mt-6"
    >
      Explore More
      <ArrowRight size={18} />
    </Link>

  </div>

</div>
  );
};