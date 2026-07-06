import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ServiceItem {
  title: string;
  desc: string;
  img: string;
}

interface SectionProps {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

const ServiceSection: React.FC<SectionProps> = ({
  title,
  subtitle,
  services,
}) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCards(new Array(services.length).fill(false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      {
        threshold: 0.9,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-6 sm:px-10 lg:px-40 py-16 md:pt-0 md:py-16">
      {/* Header */}
      <div className="mx-auto text-center mb-12">
        <h1 className="text-xl md:text-4xl font-medium heading-two">
          {title}
        </h1>

        <p className="mt-4 text-xl text-gray-600 subheading">
          {subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            data-index={i}
            className={`bg-white rounded-xl border shadow-lg transition-all duration-700 transform
              ${
                visibleCards[i]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
              hover:shadow-2xl hover:-translate-y-2`}
          >
            <Image
              src={item.img}
              alt={item.title}
              className="w-full h-fit rounded-4xl"
              height={100}
              width={100}
            />

            <div className="p-6">
              <h2 className="md:text-2xl text-xl font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 md:text-md leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;