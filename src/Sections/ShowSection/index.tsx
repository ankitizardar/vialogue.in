"use client";

import React from "react";
import Image from "next/image";
import { motion, MotionConfig, easeOut } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Heading from "@/Components/InnerComponents/Heading";
import Paragraph from "@/Components/InnerComponents/Paragraph";

import serv_img_1 from "../../../public/imgs/serv_img_1.png";
import serv_img_2 from "../../../public/imgs/serv_img_2.png";
import serv_img_3 from "../../../public/imgs/serv_img_3.png";
import serv_img_5 from "../../../public/imgs/serv_img_5.png";
import { useRouter } from "next/router";

const data = [
  {
    title: "SMS API",
    description: "Send instant text messages for OTPs, alerts, and promotions nationwide reliably.",
    image: serv_img_1,
    gradient: "from-blue-100 to-blue-50",
    button: "bg-blue-500 hover:bg-blue-600",
    link: "/sms"
  },
  {
    title: "WhatsApp API",
    description: "Automate customer messaging, support, and campaigns using verified WhatsApp APIs.",
    image: serv_img_2,
    gradient: "from-green-100 to-green-50",
    button: "bg-green-500 hover:bg-green-600",
    link: "/whatsapp"
  },
  {
    title: "RCS Messaging",
    description: "Deliver interactive messages with buttons, images, and rich customer engagement.",
    image: serv_img_5,
    gradient: "from-orange-100 to-orange-50",
    button: "bg-orange-500 hover:bg-orange-600",
    link: "/rcs"
  },
  {
    title: "Voice API",
    description: "Automate voice calls for alerts, reminders, and customer communication.",
    image: serv_img_3,
    gradient: "from-purple-100 to-purple-50",
    button: "bg-purple-500 hover:bg-purple-600",
    link: "/voice"
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const ShowSection: React.FC = () => {
  const router = useRouter();
  return (
    <MotionConfig reducedMotion="never">
      <section className="px-4 mt-0 sm:mt-0 bg-gray-100 sm:bg-gray-50 sm:px-6 md:px-20 lg:px-40 py-16 sm:py-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center mx-auto mb-14"
        >
          <div className="text-2xl sm:text-3xl lg:text-[36px] font-medium">
            <h2 className="heading-two">Show Up Exactly Where Your Customers Spend Their Time</h2>
          </div>
          <div className="mt-3">
            <h2 className="subheading">Reach high-intent users with precision messaging, smart placement, and perfect timing.</h2>
          </div>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-4 sm:px-0"
        >
          {data.map((e, i) => (
            <motion.div
              key={i}
              variants={card}
              onClick={() => router.push(e.link)}
              className={`rounded-3xl overflow-hidden bg-gradient-to-br ${e.gradient} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer`}
            >
              {/* FULL COVER IMAGE */}
              <div className="relative w-full h-90 sm:h-70">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 underline">{e.title}</h3>

                <ul className="space-y-2 text-sm leading-5 text-gray-500">
                  {e.description}
                </ul>

                {/* PUSH BUTTON TO BOTTOM */}
                <br />
                <button
                  className={`mt-auto w-full cursor-pointer py-2 text-white rounded-lg transition ${e.button}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    router.push(e.link);
                  }}
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  );
};

export default ShowSection;
