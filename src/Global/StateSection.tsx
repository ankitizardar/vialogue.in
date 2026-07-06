import React from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
  bgColor: string;
  icon?: React.ElementType;
}

interface StatsSectionProps {
  data: StatItem[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ data }) => {
  return (
    <section className="w-full py-16 py-0 px-4 sm:px-10 lg:px-40 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`
                relative overflow-hidden rounded-3xl p-7 sm:min-h-[120px]
                flex flex-col justify-between
                border border-gray-200
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                transition-all duration-300
                ${item.bgColor}
              `}
            >
              {/* Top subtle glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/30 rounded-full blur-2xl"></div>

              <div className="flex justify-between">
                {/* Icon */}
                {Icon && (
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 relative z-7">
                    <Icon size={22} className="text-black" />
                  </div>
                )}

                {/* Value */}
                <h3 className="text-4xl font-semibold tracking-tight text-black relative z-7">
                  {item.value}
                </h3>
              </div>

              {/* Label */}
              <p className="text-gray-700 font-medium leading-6 mt-0 relative z-7 text-center text-xl bg-red sm:text-left">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
