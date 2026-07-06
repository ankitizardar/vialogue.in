'use client';

import { useEffect, useRef } from "react";
import { MessageCircle, Bell, Bot, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EngagementScaleSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        defaults: { ease: "power3.out" },
      });

      // Heading animation
      tl.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
      });

      // Cards stagger animation
      tl.from(
        cardsRef.current,
        {
          opacity: 0,
          y: 24,
          scale: 0.96,
          duration: 0.5,
          stagger: 0.15,
        },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-6 md:px-20 lg:px-40 py-14 sm:py-18 lg:py-16 bg-gray-100"
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2
          ref={headingRef}
          className="text-2xl sm:text-3xl lg:text-[36px] heading-two font-medium leading-tight text-gray-900"
        >
          Vialogue Customer Engagement at a Global Scale
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        
        {/* WhatsApp */}
        <div
          ref={(el) => { if(el) cardsRef.current[0] = el; }}
          className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-gray-50"
        >
          <div className="p-3 rounded-lg bg-green-100 text-green-600">
            <MessageCircle size={24} />
          </div>
          <div>
            <div className="text-2xl font-medium text-gray-900">
              200Mn+
            </div>
            <div className="text-sm text-gray-600 leading-snug">
              WhatsApp messages / month
            </div>
          </div>
        </div>

        {/* Push */}
        <div
          ref={(el) => { if(el) cardsRef.current[1] = el; }}
          className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-gray-50"
        >
          <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
            <Bell size={24} />
          </div>
          <div>
            <div className="text-2xl font-medium text-gray-900">
              5Bn+
            </div>
            <div className="text-sm text-gray-600 leading-snug">
              Push notifications / month
            </div>
          </div>
        </div>

        {/* AI */}
        <div
          ref={(el) => { if(el) cardsRef.current[2] = el; }}
          className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-gray-50"
        >
          <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
            <Bot size={24} />
          </div>
          <div>
            <div className="text-2xl font-medium text-gray-900">
              1Mn+
            </div>
            <div className="text-sm text-gray-600 leading-snug">
              AI-driven interactions / month
            </div>
          </div>
        </div>

        {/* Email */}
        <div
          ref={(el) => { if(el) cardsRef.current[3] = el; }}
          className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-gray-50"
        >
          <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
            <Mail size={24} />
          </div>
          <div>
            <div className="text-2xl font-medium text-gray-900">
              50Bn+
            </div>
            <div className="text-sm text-gray-600 leading-snug">
              Emails / month
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EngagementScaleSection;
