"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ButtonGlobal from "@/Components/InnerComponents/ButtonGlobal";
import hero_img from "../../../public/imgs/hero_img.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import AnimatedDivider from "@/Components/AnimatedDivider";
import Brands from "@/Components/Brands";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const titleSplit = new SplitType(titleRef.current, { types: "words" });
    const subtitleSplit = new SplitType(subtitleRef.current, {
      types: "words",
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleSplit.words, {
      opacity: 0,
      y: 32,
      duration: 0.8,
      stagger: 0.06,
    })
      .from(
        subtitleSplit.words,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
        },
        "-=0.4",
      )
      .from(
        buttonRef.current,
        {
          opacity: 1,
          y: 20,
          duration: 0.3,
        },
        "-=0.2",
      );

    // badges animation
    if (badgesRef.current) {
      const badges = badgesRef.current.children;

      gsap.from(badges, {
        opacity: 0,
        x: (i) => (badges[i].classList.contains("badge-right") ? 40 : -40),
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          start: "top 70%",
        },
      });

      gsap.to(badges, {
        y: "-=8",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });
    }

    return () => {
      titleSplit.revert();
      subtitleSplit.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-fit sm:text-left text-center w-full pt-10 pb-16 sm:pt-16 px-4 sm:px-10 lg:px-40"
    >
      <div className="flex flex-col lg:flex-row gap-0 sm:gap-0 lg:gap-0 items-center">
        {/* LEFT */}
        <div className="flex-1 grid gap-3 sm:gap-6">
          <h1
            ref={titleRef}
            className="text-2xl sm:text-4xl uppercase text-white sm:leading-[1.5] font-semibold"
          >
            Enterprise communication that delivers results
          </h1>

          <AnimatedDivider />

          <p
            ref={subtitleRef}
            className="text-sm sm:text-base md:text-lg subheading text-white/80 sm:leading-relaxed max-w-xl"
          >
            Manage all customer conversations across SMS, WhatsApp, Voice, Chat,
            RCS, and Toll-Free using one unified API built for scale and speed.
          </p>

          <div ref={buttonRef} className="flex gap-2 sm:gap-2 flex-wrap mt-4 sm:mt-8">
            <ButtonGlobal text="Start Free Trial" property />
            <ButtonGlobal text="Book a Demo" property={false} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex items-center justify-end relative">
          <Image
            src={hero_img}
            alt="hero"
            priority
            placeholder="blur"
            className="w-[100%] sm:w-[80%] mt-14 sm:mt-0 select-none"
          />

          {/* FLOATING BADGES */}
          {/* <div ref={badgesRef}>
            
            <div className="flex gap-2 items-center badge badge-right top-[8%]">
              <Calendar className="p-2 bg-green-600 rounded-4xl text-white" size={30} /> <span className="font-medium">Appointments</span>
            </div>
            <div className="flex gap-2 items-center badge badge-right top-[38%]">
              <Timer className="p-2 bg-orange-600 rounded-4xl text-white" size={30} /> <span className="font-medium">Real-time insights</span>
            </div>
            <div className="flex gap-2 items-center badge badge-right bottom-[8%]">
              <MessageSquareWarning className="p-2 bg-purple-600 rounded-4xl text-white" size={30} /> <span className="font-medium">SMS notifications</span>
            </div>

            <div className="flex gap-2 items-center badge badge-left top-[30%]">
              <MessageCircleReply className="p-2 bg-blue-600 rounded-4xl text-white" size={30} /> <span className="font-medium">SMS-based survey</span>
            </div>
            <div className="flex gap-2 items-center badge badge-left bottom-[22%]">
              <MessageCirclePlus className="p-2 bg-yellow-600 rounded-4xl text-white" size={30} /> <span className="font-medium">Follow-up messages</span>
            </div>
          </div> */}
        </div>
      </div>
      <br />
    </section>
  );
};

export default HeroSection;
