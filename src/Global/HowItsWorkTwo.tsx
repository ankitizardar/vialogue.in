import { LucideIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface HowItWorksProps {
  heading?: string;
  steps: Step[];
}

const HowItWorksTwo: React.FC<HowItWorksProps> = ({ heading, steps }) => {
  return (
    <section className="w-full sm:mb-0 mb-0 py-16 bg-gray-50">
      <div className="mx-auto px-4 sm:px-10 lg:px-40">
        {/* Heading */}
        <h2 className="text-center heading-two text-2xl md:text-4xl font-medium text-gray-800 mb-12">
          {heading}
        </h2>

        {/* Steps */}
        <div className="relative bg-[#931e1e]">
          {/* Dashed Line (Desktop Only) */}

          <div className="grid grid-cols-1 sm:grid-cols-5 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col bg-[#FFF3F3] items-center text-center relative z-8 py-16 sm:py-10 px-10 sm:px-4 ${index%2 === 1 && "bg-[#ffffff]"}`}
              >
                {/* Icon Circle */}
                <Image
                  width={100}
                  height={100}
                  src={step.icon}
                  className="w-16 h-16 flex items-center justify-center bg-gradient-to-br"
                  alt="null"
                ></Image>

                {/* Text */}
                <h4 className="mt-4 text-lg font-semibold sm:text-xl leading-tight mt-8 mb-2 text-gray-800">
                  {step.title}
                </h4>

                <p className="text-sm text-gray-800">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksTwo;
