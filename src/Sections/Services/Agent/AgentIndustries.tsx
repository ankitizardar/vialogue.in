"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const AgentIndustries: React.FC = () => {
  const industries = [
    {
      title: "E-commerce Support",
      description:
        "Autocomplete shipping updates, check return/refund statuses, and resolve basket questions instantly across chat channels to minimize customer drop-off.",
      image: "/imgs/etc/1/itb1.png",
      bg: "bg-gradient-to-br from-[#f3ebff] to-[#e4ccff]",
      span: "row-span-2 col-span-1 md:col-span-1",
      size: "w-[50%] sm:w-[60%] m-auto",
      mst: "flex flex-col gap-8",
    },
    {
      title: "Fintech & Payments",
      description:
        "Speed up KYC validations, verify real-time payment states, and route security block flags with immediate customer timeline logs.",
      image: "/imgs/etc/1/itb2.png",
      bg: "bg-slate-50",
      span: "col-span-1",
      size: "h-14 w-14",
      mst: "flex gap-6 items-center flex-row-reverse",
    },
    {
      title: "Telecom Services",
      description:
        "Resolve subscription detail queries, guide users through remote router debug checks, and update billing terms cleanly.",
      image: "/imgs/etc/1/itb3.png",
      bg: "bg-slate-50",
      span: "col-span-1",
      size: "h-14 w-14",
      mst: "flex gap-6 items-center flex-row-reverse",
    },
    {
      title: "Logistics & Delivery",
      description:
        "Instantly fetch live parcel routes, update rider instructions, and handle address change alerts in single clicks.",
      image: "/imgs/etc/1/itb4.png",
      bg: "bg-slate-50",
      span: "col-span-1",
      size: "h-14 w-14",
      mst: "flex gap-6 items-center flex-row-reverse",
    },
    {
      title: "Education & Services",
      description:
        "Answer course enrollment questions, organize student onboarding queries, and automate scheduled fee invoice triggers.",
      image: "/imgs/etc/1/itb5.png",
      bg: "bg-slate-50",
      span: "col-span-1",
      size: "h-14 w-14",
      mst: "flex gap-6 items-center flex-row-reverse",
    },
    {
      title: "Healthcare Support",
      description:
        "Coordinate medical appointment bookings, lookup clinical safety checklists, and process diagnostic report requests.",
      image: "/imgs/etc/1/itb6.png",
      bg: "bg-slate-50",
      span: "col-span-1",
      size: "h-14 w-14",
      mst: "flex gap-6 items-center flex-row-reverse",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-40 bg-white text-left relative z-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">Target Sectors</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 heading-two"
          >
            Industries That Benefit
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {industries.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`${item.bg} ${item.span} border border-slate-200 rounded-3xl py-8 px-8 sm:py-6 sm:px-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between`}
            >
              <div className="mb-6 sm:mb-4">
                <div className={item.mst}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`${item.size} object-contain group-hover:scale-105 transition-transform duration-500`}
                  />

                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AgentIndustries;
