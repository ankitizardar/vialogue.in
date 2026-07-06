import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Official Onboarding & Setup",
    desc: "Get guided onboarding with WhatsApp Business API approval support, number verification, Facebook Business Manager assistance, and template submission with full compliance checks.",
    img: "/services/wapp/img1.png",
  },
  {
    title: "Template Management",
    desc: "Create and manage utility templates (OTP, alerts, reminders) and marketing templates (offers, launches, campaigns) with real-time approval status tracking.",
    img: "/services/wapp/img2.png",
  },
  {
    title: "Broadcast & Bots Manager",
    desc: "Run policy-compliant WhatsApp campaigns with audience targeting, segmentation, promotional broadcasts, rich media messaging, CTA buttons, and detailed performance tracking.",
    img: "/services/wapp/img3.png",
  },
  {
    title: "Automation Journeys",
    desc: "Build automated customer journeys including welcome series, cart reminders, payment follow-ups, appointment reminders, and service updates.",
    img: "/services/wapp/img4.png",
  },
  {
    title: "Team Inbox (Two-Way Conversations)",
    desc: "Manage inbound conversations using a shared team inbox with chat assignment, tags, internal notes, customer history visibility, and faster resolution workflows.",
    img: "/services/wapp/img5.png",
  },
  {
    title: "AI Chatbot + Live Agent",
    desc: "Combine AI automation and human assistance with 24/7 chatbot support, smooth agent takeover for complex queries, seamless context transfer, and reduced support workload.",
    img: "/services/wapp/img6.png",
  },
  {
    title: "Reports & Analytics Dashboard",
    desc: "Track sent, delivered, read, and failed message stats along with campaign insights, agent productivity reports, and exportable performance data.",
    img: "/services/wapp/img7.png",
  },
  {
    title: "Enterprise Grade Security & Compliance",
    desc: "Ensure secure communication with end-to-end encrypted messaging, opt-in and consent management, WhatsApp policy compliance, and audit-ready secure workflows.",
    img: "/services/wapp/img8.png",
  },
];

const SMSPlatform: React.FC = () => {
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
              updated[index] = true; // reveal this card
              return updated;
            });
          }
        });
      },
      {
        threshold: 0.9, // 👉 90% visible = reveal (you can change this)
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-6 sm:px-10 lg:px-40 py-16 md:py-16">
      {/* Header */}
      <div className="mx-auto text-center mb-12">
        <h1 className="text-xl md:text-4xl font-medium heading-two">SMS Platform</h1>
        <p className="mt-4 text-xl text-gray-600 subheading">
          Vialogue enables businesses to reach customers instantly through fast, secure, and highly reliable SMS communication. Deliver transactional alerts, OTPs, and promotional messages with confidence and compliance.
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
            className={`bg-white rounded-xl shadow-lg transition-all duration-700 transform
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
              className="w-full h-fit rounded-xl"
              height={100}
              width={100}
            />

            <div className="p-6">
              <h2 className="md:text-2xl text-xl font-semibold mb-2">{item.title}</h2>
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

export default SMSPlatform;
