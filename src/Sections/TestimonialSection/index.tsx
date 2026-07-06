"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import Heading from "@/Components/InnerComponents/Heading";
import AnimatedDivider from "@/Components/AnimatedDivider";

interface Testimonial {
  name: string;
  position: string;
  image: string;
  rating: number;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Mehta",
    position: "CTO, FinTech Corp",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    description:
      "Outstanding service with rock-solid reliability. The APIs scaled smoothly as our transaction volume grew, without performance issues or downtime. Integration was quick and developer-friendly, saving our team valuable time. Real-time delivery insights and strong security made this a core part of our infrastructure.",
  },
  {
    name: "Ananya Singh",
    position: "Product Manager, SaaSify",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 4,
    description:
      "Onboarding was smooth with clear documentation and a clean dashboard. Our team went live quickly without external support. The customer support team is responsive and knowledgeable, providing practical solutions. Overall, the platform helped us streamline communication and improve user experience across products.",
  },
  {
    name: "David Kumar",
    position: "Founder, StartupHub",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    description:
      "Delivery rates were consistently impressive, even during high-volume campaigns. Within weeks, we noticed better user engagement and faster responses. The flexible APIs allowed us to customize workflows easily. This platform has become a key growth driver for our customer communication strategy.",
  },
  {
    name: "Priya Verma",
    position: "Operations Head, LogiPro",
    image: "https://i.pravatar.cc/150?img=4",
    rating: 4,
    description:
      "Automation significantly reduced our manual workload. SMS, voice calls, and IVR features worked reliably across regions. Our operations team now spends less time on repetitive tasks and more time improving service quality. The system has become an essential part of our daily operations.",
  },
  {
    name: "Michael Brown",
    position: "VP Engineering, CloudNet",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    description:
      "Truly enterprise-grade performance with zero downtime during traffic spikes. The APIs integrate seamlessly with our cloud infrastructure and provide excellent monitoring visibility. Stability, scalability, and clean architecture make this platform ideal for long-term enterprise use.",
  },
  {
    name: "Sneha Patel",
    position: "Marketing Lead, GrowthX",
    image: "https://i.pravatar.cc/150?img=6",
    rating: 5,
    description:
      "Two-way messaging helped us connect with leads more effectively. Bots performance improved, and the analytics gave clear insights into engagement and Conversations. The platform is intuitive for marketers while still powerful enough for technical teams.",
  },
  {
    name: "Arjun Malhotra",
    position: "COO, RetailSmart",
    image: "https://i.pravatar.cc/150?img=7",
    rating: 4,
    description:
      "The APIs deliver consistent performance and were easy to integrate into our systems. Notifications and transactional messages are now sent reliably across all retail locations. This has improved coordination and customer communication without adding operational complexity.",
  },
  {
    name: "Emily Watson",
    position: "Customer Success Manager, HelpDesk",
    image: "https://i.pravatar.cc/150?img=8",
    rating: 5,
    description:
      "24/7 support is genuinely reliable. Whenever we needed assistance, the team responded quickly with clear solutions. The platform itself is stable and easy to use, helping us improve response times and maintain high customer satisfaction.",
  },
  {
    name: "Vikram Rao",
    position: "Tech Lead, ScaleUp",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    description:
      "Handles high traffic volumes effortlessly, even during major launches. Performance remains consistent with no delivery delays. The scalable architecture and smooth backend integration make it perfect for fast-growing, high-demand applications.",
  },
  {
    name: "Sophia Lee",
    position: "Head of Digital, MarketPro",
    image: "https://i.pravatar.cc/150?img=10",
    rating: 4,
    description:
      "A user-friendly dashboard combined with powerful features. Our teams adopted the platform quickly without extensive training. It supports collaboration across departments and scales well as business needs grow. Highly recommended for digital-first teams.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const TestimonialSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  /* ---------- MANUAL SCROLL (BUTTONS) ---------- */
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth, scrollLeft, scrollWidth } = scrollRef.current;

    const isAtEnd =
      scrollLeft + clientWidth >= scrollWidth - clientWidth / 2;

    if (direction === "right" && isAtEnd) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  /* ---------- AUTO SCROLL (LIKE BUTTON CLICK) ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 3000); // ⏱ auto scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  /* ---------- CHARACTER REVEAL ---------- */
  useEffect(() => {
    descRefs.current.forEach((el) => {
      if (!el) return;

      const split = new SplitType(el, { types: "words" });
      gsap.set(split.words, { opacity: 0, y: 16 });

      gsap.to(split.words, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.006,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section className="py-0 px-0 sm:px-10 lg:px-40 sm:py-0 sm:pt-16 py-16 sm:pb-16 bg-gray-50">
      {/* HEADING */}
      <div className="text-center mb-12 px-4">
        <div className="text-3xl sm:text-4xl md:text-5xl font-medium">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 tracking-tight">What Our Clients Say</h2>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden px-4 py-4 snap-x snap-mandatory scrollbar-hide"
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="w-[90vw] sm:w-[420px] lg:w-[470px] flex-shrink-0 bg-white rounded-3xl p-5 border border-gray-200 shadow-sm snap-center"
          >
            <div className="flex gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div>
                <div className="text-sm sm:text-base font-medium text-gray-700">
                  {item.name}
                </div>
                <div className="text-sm sm:text-base text-black">
                  {item.position}
                </div>

                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < item.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            <p
              ref={(el) => { if(el) descRefs.current[index] = el! }}
              className="text-gray-800 mt-6 text-sm sm:text-base leading-relaxed"
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CONTROLS */}
      <div className="mt-10 flex justify-center gap-6">
        <button
          onClick={() => scroll("left")}
          className="p-3 cursor-pointer rounded-lg bg-[#E5D4F9] active:scale-95 transition"
        >
          <ChevronLeft color="#9754E6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="p-3 cursor-pointer rounded-lg bg-[#E5D4F9] active:scale-95 transition"
        >
          <ChevronRight color="#9754E6" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
