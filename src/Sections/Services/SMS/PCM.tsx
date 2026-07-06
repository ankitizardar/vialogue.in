"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const campaignCards = [
  {
    id: 1,
    title: "One-to-Many & Many-to-Many Botss",
    description:
      "Run bulk campaigns easily across segments with flexible messaging and controlled delivery options.",
    img: "/services/sms/pcm/img1.jpg",
  },
  {
    id: 2,
    title: "Personalized Botss",
    description:
      "Send customized messages using customer data for stronger engagement and better response.",
    img: "/services/sms/pcm/img2.jpg",
  },
  {
    id: 3,
    title: "Smart Scheduling",
    description:
      "Plan campaigns ahead and deliver messages automatically at ideal customer times.",
    img: "/services/sms/pcm/img3.jpg",
  },
  {
    id: 4,
    title: "File Splitting & Throttling",
    description:
      "Manage heavy traffic smoothly using automatic splitting and smart delivery control.",
    img: "/services/sms/pcm/img4.jpg",
  },
  {
    id: 5,
    title: "Branded URL Shortening",
    description:
      "Shorten links using branded domains for trust, tracking, and stronger click performance.",
    img: "/services/sms/pcm/img5.jpg",
  },
  {
    id: 6,
    title: "Mobile-Wise Click Tracking",
    description:
      "Track campaign clicks with mobile-level insights and detailed engagement reporting.",
    img: "/services/sms/pcm/img6.jpg",
  },
];

const PCM: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);

  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Header animation */
  useEffect(() => {
    if (!titleRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const splitTitle = new SplitType(titleRef.current!, { types: "words" });
      const splitText = new SplitType(textRef.current!, { types: "words" });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })
        .from(splitTitle.words, {
          opacity: 1,
          y: 30,
          stagger: 0.05,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          splitText.words,
          {
            opacity: 1,
            y: 20,
            stagger: 0.02,
            duration: 0.4,
          },
          "-=0.4"
        );

      return () => {
        splitTitle.revert();
        splitText.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Card animation */
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const img = card.querySelector(".card-img");
      const title = card.querySelector(".card-title");
      const desc = card.querySelector(".card-desc");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "left 85%",
        },
      });

      tl.from(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          img,
          {
            opacity: 1,
            y: 0,
            scale: 0.95,
            duration: 0.5,
          },
          "-=0.4"
        )
        .from(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.3"
        )
        .from(
          desc,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.3"
        );
    });
  }, []);

  /* AUTO SCROLL */
  useEffect(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const autoScroll = gsap.to(container, {
      scrollLeft: container.scrollWidth / 2,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    const pause = () => autoScroll.pause();
    const resume = () => autoScroll.play();

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    return () => {
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      autoScroll.kill();
    };
  }, []);

  /* Scroll arrows */
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  const cards = [...campaignCards, ...campaignCards];

  return (
    <div
      ref={sectionRef}
      className={`px-4 sm:px-10 lg:px-40 py-16 bg-[#F9F9FA] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Header */}
      <div className="mb-0 text-center">
        <h1
          ref={titleRef}
          className="text-2xl md:text-2xl font-medium heading-two"
        >
          Powerful Bots Management
        </h1>

        <p
          ref={textRef}
          className="mt-4 text-xl subheading text-gray-600 mx-auto"
        >
          Vialogue’s advanced campaign engine helps you create, manage, and
          optimize messaging campaigns at scale with higher delivery,
          engagement, and complete control.
        </p>
      </div>

      {/* <div className="hidden md:flex justify-between items-center mb-4">
        <button
          onClick={scrollLeft}
          className="bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition"
        >
          ←
        </button>

        <button
          onClick={scrollRight}
          className="bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition"
        >
          →
        </button>
      </div> */}

      <div
  ref={scrollRef}
  className="flex gap-6 overflow-x-scroll overflow-y-hidden scrollbar-hide items-stretch"
>
  {cards.map((card, i) => (
    <div
      key={i}
      ref={(el) => {
        cardsRef.current[i] = el;
      }}
      className="min-w-full md:min-w-[620px] bg-[#6A47F221] rounded-xl p-6 
                 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 
                 flex flex-col mt-16"
    >
      <h1 className="card-title text-xl md:text-xl font-semibold">
        {card.title}
      </h1>

      <p className="card-desc mt-2 text-gray-600 text-md leading-5 min-h-[60px]">
        {card.description}
      </p>

      <Image
        src={card.img}
        alt={card.title}
        width={600}
        height={400}
        className="card-img mt-4 w-full mt-auto h-[300px] sm:h-[450px] object-cover rounded-lg"
      />
    </div>
  ))}
</div>
    </div>
  );
};

export default PCM;