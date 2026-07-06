import React from "react";

const values = [
  {
    id: 1,
    image: "./imgs/etc/1/pvs1.png",
    title: "Reduce handling time",
  },
  {
    id: 2,
    image: "./imgs/etc/1/pvs2.png",
    title: "Improve resolution accuracy",
  },
  {
    id: 3,
    image: "./imgs/etc/1/pvs3.png",
    title: "Deliver consistent brand communication",
  },
  {
    id: 4,
    image: "./imgs/etc/1/pvs4.png",
    title: "Increase customer satisfaction",
  },
];

const Flow: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto px-10 sm:px-10 lg:px-40">
        {/* Title */}
        <h2 className="text-center font-medium text-black mb-16 heading-two">
          Primary Value Statement
        </h2>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 text-center">
          {values.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center group"
            >
              {/* Image */}
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-full min-w-10 min-h-10 sm:min-w-70 sm:min-h-70"
                />
              </div>

              {/* Text */}
              <p className="mt-4 text-xl md:text-xl font-medium text-black-900 leading-snug max-w-[240px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;