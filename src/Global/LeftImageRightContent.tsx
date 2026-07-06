import React, { useEffect, useRef, useState } from "react";

interface API_OneProps {
    title?: string;
    description?: string;
    imageSrc?: string;
    top_title?: string;
    is_top_title?: boolean;
}

const LIRC: React.FC<API_OneProps> = ({ title, description, imageSrc, top_title, is_top_title }) => {
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
    <div
      ref={ref}
      className={`px-4 sm:px-10 lg:px-40 py-16 pt-4 sm:pt-16 sm:py-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Tag line */}
      {is_top_title && <div className="flex gap-2 text-md font-medium text-[#8C41F5] items-center mb-4 justify-center">
        <div className="h-[0.5px] w-10 bg-[#8C41F5]"></div>
        {top_title}
        <div className="h-[0.5px] w-10 bg-[#8C41F5]"></div>
      </div>}
      <h1 className="text-4xl text-center mt-10 sm:mt-0 heading-two font-medium mb-10">
            {title}
          </h1>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Image */}
        <div className="flex justify-space">
          <img
            src={imageSrc}
            alt="Image"
            width={1000}
            height={1000}
            className="w-full max-w-md h-auto object-contain rounded-lg transform transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="rounded-xl transition-all duration-300">
          <p
  className="text-gray-700 mt-10 sm:mt-0 text-2xl paragraph leading-relaxed text-justify"
  dangerouslySetInnerHTML={{ __html: description || "" }}
/>
        </div>
      </div>
    </div>
  );
};

export default LIRC;