"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const ProductImageStatic = () => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <section className="w-full flex justify-center mt-[-140px] md:mt-[-200px] py-16 mx-[calc(4.5vw)] max-w-[calc(90vw)] sm:max-w-[calc(100%)] sm:mx-[calc(0)] md:py-20 px-4 sm:px-10 lg:px-40">
      <div
        ref={imgRef}
        className="max-w-[100vw] w-full shadow-xl rounded-lg overflow-hidden"
      >
        <div className="w-[100%] h-[50vw] sm:h-[55vw] md:h-[43vw] lg:h-[45vw] xl:h-[50vw] 2xl:h-[50vw] bg-cover bg-center" style={{backgroundImage: "url(/dashboard.gif)"}}>

        </div>
      </div>
    </section>
  );
};

export default ProductImageStatic;