import React, { useEffect, useRef, useState } from "react";

const FeaturesHero: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`pt-16 sm:pt-0 bg-gradient-to-b from-white to-[#F3F5FF] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Top badge (same style as your image) */}
      {/* <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-[1px] w-16 bg-[#8C41F5]"></div>
        <span className="text-sm tracking-wider font-medium text-[#8C41F5]">
          FEATURES
        </span>
        <div className="h-[1px] w-16 bg-[#8C41F5]"></div>
      </div> */}

      {/* Two-column layout */}
      <div className="grid px-4 sm:px-10 lg:px-40 py-10 sm:py-30 grid-cols-1 md:grid-cols-2 gap-12 bg-[-1000%] bg-purple-100 items-center sm:bg-right bg-no-repeat bg-cover h-full" style={{backgroundImage: "url(/services/sms/sj.png)"}}>
        {/* Left text */}
        <div className="max-w-2xl backdrop-blur-md rounded-2xl">
          <h1 className="text-xl md:text-2xl heading-two md:text-4xl font-medium mx-auto mb-10 leading-tight">
        Comprehensive SMS Features
      </h1>
          <p className="md:text-2xl paragraph text-gray-700 leading-relaxed">
            The Vialogue SMS Platform delivers a complete set of features to
            manage, monitor, and optimize business messaging. From Unicode
            support to advanced analytics, everything is designed for
            performance, compliance, and ease of use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;