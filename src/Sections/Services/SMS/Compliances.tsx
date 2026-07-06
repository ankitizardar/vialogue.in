import React, { useEffect, useRef, useState } from "react";

const Compliances: React.FC = () => {
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
      className={`px-4 sm:px-10 lg:px-40 py-24 bg-white transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="">
        
        {/* Top Heading */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">Trust & Safety</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold heading-two text-slate-900">
            Compliances
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto paragraph text-base sm:text-lg font-medium">
            Secure, regulation-ready messaging infrastructure designed for modern enterprise communication.
          </p>
        </div>

        {/* Main Two Section Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div className="flex justify-center">
            <div className="rounded-3xl">
              <img
                src="/services/sms/compliances.png"
                alt="Compliances"
                className="rounded-2xl h-[320px] max-h-[500px] sm:h-[500px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-white shadow-[0_20px_50px_rgba(124,58,237,0.06)] rounded-3xl p-8 sm:p-10 md:p-12 border border-purple-100">
            <ul className="space-y-8 text-slate-700">
              
              <li className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#F9A8D4] shrink-0"></div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    Spam Risk & Content Validation
                  </h3>
                  <p className="paragraph text-base sm:text-[17px] text-slate-600 leading-relaxed font-medium">
                    Pre-send checks identify spam keywords, content risks, and template mismatches before delivery.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#F9A8D4] shrink-0"></div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    Compliance-Ready Messaging
                  </h3>
                  <p className="paragraph text-base sm:text-[17px] text-slate-600 leading-relaxed font-medium">
                    Automatic DND filtering, template verification, and regulatory checks ensure worry-free campaigns.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#F9A8D4] shrink-0"></div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    Enterprise Security & Control
                  </h3>
                  <p className="paragraph text-base sm:text-[17px] text-slate-600 leading-relaxed font-medium">
                    Role-based access, audit trails, and advanced data protection for enterprise-grade operations.
                  </p>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Compliances;