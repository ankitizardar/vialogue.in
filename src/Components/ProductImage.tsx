"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const desktopRows = 5;
const desktopCols = 9;

const mobileRows = 5;
const mobileCols = 9;

const ProductImage = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<HTMLDivElement[]>([]);

  const [isMobile, setIsMobile] = useState(false);

  /* Detect screen */
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  const rows = isMobile ? mobileRows : desktopRows;
  const cols = isMobile ? mobileCols : desktopCols;

  /* SCROLL WAVE */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        tilesRef.current,
        { opacity: 0.5 },
        {
          opacity: 1,
          stagger: {
            grid: [rows, cols],
            from: "start",
            amount: isMobile ? 0.5 : 0.8,
          },
          duration: isMobile ? 1.2 : 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isMobile]);

  /* CLICK RIPPLE (desktop only) */
  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) return;

    const rect = wrapperRef.current!.getBoundingClientRect();

    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    tilesRef.current.forEach((tile) => {
      const tRect = tile.getBoundingClientRect();

      const tx = tRect.left + tRect.width / 2 - rect.left;
      const ty = tRect.top + tRect.height / 2 - rect.top;

      const dx = clickX - tx;
      const dy = clickY - ty;

      const distance = Math.sqrt(dx * dx + dy * dy);

      gsap.fromTo(
        tile,
        { opacity: 0.5 },
        {
          opacity: 1,
          delay: distance / 4000,
          duration: 0.5,
          ease: "power1.out",
        }
      );
    });
  };

  const tiles: string[] = [];

  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      tiles.push(`/imgs/Matrix/row-${r}-column-${c}.png`);
    }
  }

  return (
    <section className="w-full z-10 relative flex justify-center mt-[-120px] md:mt-[-200px] py-16 md:py-20 px-4 sm:px-10 lg:px-40">

      <div
        ref={wrapperRef}
        onClick={handleClick}
        className={`grid gap-0 cursor-pointer max-w-[1200px] bg-black ${
          isMobile ? "grid-cols-9" : "grid-cols-9"
        }`}
      >
        {tiles.map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) tilesRef.current[i] = el;
            }}
          >
            <Image
              src={src}
              alt=""
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default ProductImage;