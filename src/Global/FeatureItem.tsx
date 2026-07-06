"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface FeatureItem {
  title: string;
  desc: string;
  img: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface Props {
  title: string;
  description?: string;
  items: FeatureItem[];
  columns?: number;
}

const iconColors = [
  { bg: "bg-blue-100", text: "text-blue-900", border: "border-blue-200" },
  { bg: "bg-emerald-100", text: "text-emerald-900", border: "border-emerald-200" },
  { bg: "bg-purple-100", text: "text-purple-900", border: "border-purple-200" },
  { bg: "bg-amber-100", text: "text-amber-900", border: "border-amber-200" },
  { bg: "bg-rose-100", text: "text-rose-900", border: "border-rose-200" },
  { bg: "bg-cyan-100", text: "text-cyan-900", border: "border-cyan-200" },
  { bg: "bg-indigo-100", text: "text-indigo-900", border: "border-indigo-200" },
  { bg: "bg-orange-100", text: "text-orange-900", border: "border-orange-200" },
  { bg: "bg-teal-100", text: "text-teal-900", border: "border-teal-200" },
];

const AnimatedFeatureGrid: React.FC<Props> = ({
  title,
  description,
  items,
  columns = 3,
}) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(card, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            delay: (index % columns) * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, [columns]);

  const gridCols =
    columns === 4
      ? "md:grid-cols-4"
      : columns === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-3";

  return (
    <section className="px-4 bg-[#FDF7FF] sm:px-10 lg:px-40 py-24 relative z-10">
      <div className="container mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">Platform Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 heading-two">{title}</h1>
          {description && (
            <p className="text-lg text-slate-600 subheading" dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>

        {/* GRID */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-6`}>
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="glass-card p-6 rounded-2xl border border-slate-200/60 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300 group bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.1)]"
            >
              <div className={`p-3 rounded-xl mb-5 border shadow-sm group-hover:scale-110 transition-transform ${iconColors[i % iconColors.length].bg} ${iconColors[i % iconColors.length].text} ${iconColors[i % iconColors.length].border}`}>
                {item.icon ? <item.icon size={20} /> : <Layers size={20} />}
              </div>
              <h3 className="card-title text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="card-desc text-sm text-slate-600 leading-relaxed flex-1 font-medium" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatureGrid;