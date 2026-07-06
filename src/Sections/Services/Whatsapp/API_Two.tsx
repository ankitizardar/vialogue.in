import React, { useEffect, useRef, useState } from "react";

const API_One: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`pt-16 bg-gray-100 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Tag line */}
      {/* <div className="flex gap-2 text-md font-medium text-[#8C41F5] items-center mb-4 justify-center">
        <div className="h-[0.5px] w-10 bg-[#8C41F5]"></div>
        API INFRA
        <div className="h-[0.5px] w-10 bg-[#8C41F5]"></div>
      </div> */}

      <h1 className="text-4xl font-medium text-center heading-two">
            Harness the Power of WhatsApp Business API
          </h1>

      {/* Content Section */}
      <div className="grid px-0 sm:px-10 lg:px-40 py-16 grid-cols-1 md:grid-cols-2 items-center">
        {/* Image */}
        <div className="flex justify-space">
          <img
            src="/services/wapp/api_two.png"
            alt="API Infrastructure"
            className="w-full max-w-md h-[400px] sm:h-auto object-contain rounded-lg transform transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="rounded-xl transition-all duration-300">
          <p className="text-gray-700 paragraph p-10 text-xl sm:text-2xl leading-relaxed text-justify">
            Vialogue’s WhatsApp Business API allows enterprises to automate and
            manage customer communication at scale while staying compliant with
            WhatsApp guidelines.
            <br />
            <br />
            Integrate WhatsApp messaging into your
            applications using Vialogue’s secure, high-performance
            APIs—optimized for OTPs, notifications, AI chatbots, and two-way
            customer conversations in India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default API_One;
