"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

// WebEngage Custom SVG Logo
const WebEngageLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
    <defs>
      <linearGradient id="webengageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF7A00" />
        <stop offset="100%" stopColor="#FF3D00" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#webengageGrad)" />
    <path
      d="M25,38 L38,65 L50,45 L62,65 L75,38"
      stroke="white"
      strokeWidth="7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// MoEngage Custom SVG Logo
const MoEngageLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
    <defs>
      <linearGradient id="moengageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4E26E8" />
        <stop offset="100%" stopColor="#2E5BFF" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#moengageGrad)" />
    <path
      d="M28,60 L28,42 C28,31 38,31 43,38 C48,31 58,31 63,38 C68,31 78,31 78,42 L78,60"
      stroke="white"
      strokeWidth="7"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// LeadSquared Custom SVG Logo
const LeadSquaredLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="50" cy="50" r="45" fill="#0056B3" />
    <rect x="28" y="28" width="26" height="26" rx="4" fill="none" stroke="white" strokeWidth="6" />
    <rect x="46" y="46" width="26" height="26" rx="4" fill="#FF9900" stroke="#FF9900" strokeWidth="2" />
    <path d="M41,59 L59,41" stroke="white" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

// Zoho Custom SVG Logo (interlocking 4-box layout)
const ZohoLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="50" cy="50" r="45" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
    <svg x="15" y="38" width="70" height="24" viewBox="0 0 512 175">
      <g>
        <path d="M228.647779,174.914807 C224.74262,174.914807 220.786745,174.103345 216.983019,172.429706 L216.983019,172.429706 L135.836867,136.268952 C121.331992,129.827976 114.789583,112.736567 121.230559,98.2316926 L157.391314,17.0855401 C163.832289,2.58066529 180.923698,-3.96174325 195.428573,2.4792326 L276.574725,38.6399868 C291.0796,45.0809627 297.622008,62.172371 291.181032,76.6772458 L255.020278,157.823398 C250.202225,168.575264 239.653226,174.914807 228.647779,174.914807 Z M223.728293,157.214802 C229.864971,159.953485 237.066692,157.164086 239.805375,151.078124 L275.966129,69.9319719 C278.704812,63.7952941 275.915413,56.5935731 269.829451,53.8548904 L188.632582,17.6941362 C182.495904,14.9554536 175.294183,17.7448525 172.555501,23.830814 L136.394747,104.976966 C133.656064,111.113644 136.445463,118.315365 142.531424,121.054048 L223.728293,157.214802 Z" fill="#089949" />
        <path d="M483.193116,174.965523 L394.338079,174.965523 C378.463863,174.965523 365.531195,162.032855 365.531195,146.158639 L365.531195,57.3036019 C365.531195,41.4293858 378.463863,28.4967178 394.338079,28.4967178 L483.193116,28.4967178 C499.067332,28.4967178 512,41.4293858 512,57.3036019 L512,146.158639 C512,162.032855 499.067332,174.965523 483.193116,174.965523 Z M394.338079,45.131679 C387.643521,45.131679 382.166156,50.6090443 382.166156,57.3036019 L382.166156,146.158639 C382.166156,152.853196 387.643521,158.330562 394.338079,158.330562 L483.193116,158.330562 C489.887673,158.330562 495.365039,152.853196 495.365039,146.158639 L495.365039,57.3036019 C495.365039,50.6090443 489.887673,45.131679 483.193116,45.131679 L394.338079,45.131679 Z" fill="#F9B21D" />
        <path d="M150.443174,73.5835487 L138.474117,100.361779 C138.321968,100.666077 138.169819,100.919659 138.01767,101.173241 L142.683573,129.980125 C143.748617,136.623966 139.234862,142.862076 132.641737,143.92712 L44.9024596,158.127696 C41.7073299,158.63486 38.4614838,157.874115 35.8242338,155.99761 C33.1869839,154.121105 31.4626281,151.28099 30.9554647,148.08586 L16.754888,60.3465826 C16.2477245,57.1514529 17.0084697,53.9056068 18.8849745,51.2683568 C20.7614792,48.6311068 23.6015946,46.9067511 26.7967243,46.3995876 L114.536002,32.199011 C115.195314,32.0975783 115.854627,32.0468619 116.463223,32.0468619 C122.295603,32.0468619 127.519386,36.3070349 128.482997,42.2915637 L133.199617,71.3013132 L145.574405,43.5594723 L144.915093,39.6543137 C142.379275,23.982963 127.570102,13.2818142 111.898752,15.8176314 L24.1594744,30.0182081 C16.6027389,31.1846841 9.90818135,35.292708 5.44514296,41.5308185 C0.931388228,47.768929 -0.843683858,55.3763808 0.37350843,62.9838326 L14.5740851,150.72311 C15.7912774,158.330562 19.8993014,164.974403 26.1374119,169.488158 C31.0568973,173.089018 36.8892771,174.914807 42.9245222,174.914807 C44.4460125,174.914807 46.0182192,174.813374 47.5904259,174.559792 L135.329703,160.359216 C151.001054,157.823398 161.702203,143.014225 159.166386,127.342875 L150.443174,73.5835487 Z" fill="#E42527" />
        <g transform="translate(248.1171, 17.384)" fill="#226DB4">
          <path d="M7.56253458,98.091211 L20.4444863,69.2336105 L16.7929094,42.4046638 C16.3364623,39.2095341 17.1986402,36.0144043 19.1765777,33.4278707 C21.1545151,30.8413371 23.9946305,29.1676977 27.2404766,28.7619669 L115.284052,16.7929094 C115.841932,16.7421931 116.399812,16.6914767 116.957691,16.6914767 C119.594941,16.6914767 122.130759,17.5536546 124.311562,19.1765777 C124.717292,19.4808757 125.072307,19.8358901 125.427321,20.1401882 C129.33248,16.0321642 134.454831,13.0906162 140.185778,11.8227076 C138.562855,9.59118839 136.635633,7.61325093 134.353398,5.88889518 C128.21672,1.22299142 120.659985,-0.754946052 113.052533,0.259380854 L24.9075247,12.2284383 C17.3000729,13.2427653 10.5040826,17.1986402 5.88889518,23.335318 C1.22299142,29.4719958 -0.754946052,37.0287312 0.259380854,44.636183 L7.56253458,98.091211 Z" />
          <path d="M157.378619,112.9511 L145.815292,27.74764 C139.3236,27.9505054 134.099816,33.326438 134.099816,39.8688465 L134.099816,64.8720048 L140.946523,115.182619 C141.40297,118.377749 140.540792,121.572879 138.562855,124.159412 C136.584917,126.745946 133.744802,128.419585 130.498956,128.825316 L42.4553802,140.794374 C39.2602504,141.250821 36.0651206,140.388643 33.478587,138.410706 C30.8920534,136.432768 29.218414,133.592653 28.8126833,130.346807 L24.7553756,100.474879 L11.8734239,129.33248 L12.329871,132.578326 C13.3441979,140.185778 17.3000729,146.981768 23.4367507,151.596955 C28.5083852,155.451398 34.5436303,157.480051 40.8324571,157.480051 C42.1510821,157.480051 43.4697071,157.378619 44.788332,157.22647 L132.730475,145.358845 C140.337927,144.344518 147.133917,140.388643 151.749104,134.251965 C156.415008,128.115287 158.392946,120.558552 157.378619,112.9511 Z" />
        </g>
      </g>
    </svg>
  </svg>
);

// Zapier Custom SVG Logo (orange asterisk)
const ZapierLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="50" cy="50" r="45" fill="#FF4F00" />
    <g transform="translate(50, 50)" stroke="white" strokeWidth="9.5" strokeLinecap="round">
      <line x1="0" y1="0" x2="0" y2="-21" />
      <line x1="0" y1="0" x2="20" y2="-7" />
      <line x1="0" y1="0" x2="12" y2="17" />
      <line x1="0" y1="0" x2="-12" y2="17" />
      <line x1="0" y1="0" x2="-20" y2="-7" />
    </g>
  </svg>
);

const IntegrationsOverview: React.FC = () => {
  const [activeIntegration, setActiveIntegration] = useState<number>(0);

  const points = [
    "CRM integrations for automated communication",
    "Helpdesk tools for real-time support updates",
    "Payment systems for instant alerts & confirmations",
    "Database sync for personalized messaging flows",
    "Webhooks & APIs for flexible system automation",
  ];

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } },
  };

  const integrations = [
    {
      id: 0,
      name: "WebEngage",
      title: "WebEngage CRM & Journeys",
      desc: "Sync user segments dynamically and trigger transactional WhatsApp, SMS, and RCS notifications based on WebEngage user events.",
      status: "Active",
      syncRate: "Real-time (15ms)",
      color: "#FF4D00",
      coords: { x: 12, y: 20 },
      logo: WebEngageLogo,
    },
    {
      id: 1,
      name: "MoEngage",
      title: "MoEngage Customer Engagement",
      desc: "Send personalized alerts, OTP codes, and rich media RCS cards directly via MoEngage workflow campaigns.",
      status: "Active",
      syncRate: "Real-time (12ms)",
      color: "#4E26E8",
      coords: { x: 12, y: 70 },
      logo: MoEngageLogo,
    },
    {
      id: 2,
      name: "LeadSquared",
      title: "LeadSquared Sales CRM",
      desc: "Trigger instant lead alerts, follow-ups, and automated WhatsApp replies as soon as new leads are captured.",
      status: "Connected",
      syncRate: "On Lead Ingest",
      color: "#0056B3",
      coords: { x: 88, y: 15 },
      logo: LeadSquaredLogo,
    },
    {
      id: 3,
      name: "Zoho",
      title: "Zoho CRM & Suite",
      desc: "Pull customer profiles and run drip campaigns. Sync contact properties and response history back to Zoho in real-time.",
      status: "Connected",
      syncRate: "Bi-directional",
      color: "#007CC3",
      coords: { x: 88, y: 48 },
      logo: ZohoLogo,
    },
    {
      id: 4,
      name: "Zapier",
      title: "Zapier Integrations Hub",
      desc: "Connect Vialogue to over 5,000 apps. Create customized zaps to send messages from Google Sheets, Forms, and databases.",
      status: "Active",
      syncRate: "Instant trigger",
      color: "#FF4F00",
      coords: { x: 88, y: 80 },
      logo: ZapierLogo,
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-40 bg-white relative overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={leftVariants}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
            <Image 
              src="/imgs/logo2.svg" 
              alt="Vialogue Logo" 
              width={85} 
              height={20} 
              className="object-contain"
              priority
            />
            <span className="w-[1px] h-3 bg-slate-300" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-slate-600">Omni Integration</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight heading-two">
            Seamless Integrations That Connect Your <span className="text-gradient">Customer Communication</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed paragraph text-justify">
            Vialogue is built to work with your existing tools. With powerful integrations, you can connect your CRM, helpdesk, payment systems, analytics, and databases to automate messaging and deliver better customer experiences.
          </p>

          <ul className="space-y-3 pt-4">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[14px] md:text-[16px] text-slate-700 font-medium">
                <ShieldCheck className="text-cyan-500 flex-shrink-0" size={18} />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={rightVariants}
          className="flex-1 w-full max-w-[520px]"
        >
          <div className="bg-slate-50/50 rounded-[32px] p-6 border border-slate-100 relative overflow-hidden shadow-sm">
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 rounded-full bg-cyan-200/20 blur-2xl pointer-events-none" />
            <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 rounded-full bg-purple-200/20 blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">Connection Console</span>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50/50 border border-emerald-100 rounded-full px-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Real-time Sync</span>
                </div>
              </div>

              <div className="relative w-full aspect-[4/3] max-w-[440px] mx-auto select-none scale-[0.75] min-[360px]:scale-[0.82] min-[400px]:scale-[0.9] sm:scale-100 origin-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  {integrations.map((item) => {
                    const isActive = activeIntegration === item.id;
                    const path = item.id < 2
                      ? `M 50 45 C 32 45, 28 ${item.coords.y}, ${item.coords.x} ${item.coords.y}`
                      : `M 50 45 C 68 45, 72 ${item.coords.y}, ${item.coords.x} ${item.coords.y}`;

                    return (
                      <g key={item.id}>
                        <path
                          d={path}
                          fill="none"
                          stroke={isActive ? item.color : "#E2E8F0"}
                          strokeWidth={isActive ? 2.5 : 1.5}
                          className="transition-all duration-300"
                          opacity={isActive ? 0.75 : 0.4}
                          style={{ filter: isActive ? "url(#glow)" : "none" }}
                        />
                        <path
                          d={path}
                          fill="none"
                          stroke={isActive ? item.color : "#94A3B8"}
                          strokeWidth={isActive ? 3 : 2}
                          strokeLinecap="round"
                          className="animate-flow"
                          opacity={isActive ? 1 : 0.25}
                          style={{
                            animationDuration: isActive ? "0.8s" : "1.8s",
                          }}
                        />
                      </g>
                    );
                  })}
                </svg>

                <div 
                  className="absolute z-20 flex flex-col items-center justify-center transition-all duration-300"
                  style={{ left: "50%", top: "45%", transform: "translate(-50%, -50%)" }}
                >
                  <div className="w-28 h-12 bg-white rounded-2xl border border-slate-200 shadow-[0_8px_20px_rgba(124,58,237,0.08)] flex items-center justify-center px-4 py-2 hover:scale-105 transition-transform duration-300 cursor-default">
                    <Image 
                      src="/imgs/logo2.svg" 
                      alt="Vialogue" 
                      width={80} 
                      height={26} 
                      className="object-contain"
                      priority 
                    />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shadow-[0_0_8px_#6366F1] animate-ping" />
                </div>

                {integrations.map((item) => {
                  const isActive = activeIntegration === item.id;
                  const Logo = item.logo;
                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => setActiveIntegration(item.id)}
                      onFocus={() => setActiveIntegration(item.id)}
                      onClick={() => setActiveIntegration(item.id)}
                      className="absolute z-10 focus:outline-none transition-all duration-300 cursor-pointer"
                      style={{
                        left: `${item.coords.x}%`,
                        top: `${item.coords.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div 
                        className="relative p-1 rounded-full transition-all duration-300"
                        style={{
                          background: isActive ? "rgba(255, 255, 255, 0.9)" : "transparent",
                          boxShadow: isActive ? `0 0 16px ${item.color}60` : "none",
                          transform: isActive ? "scale(1.12)" : "scale(1)",
                        }}
                      >
                        <div className="bg-white rounded-full p-0.5 border border-slate-100 shadow-sm">
                          <Logo />
                        </div>
                      </div>
                      <span 
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 text-[9px] font-bold tracking-tight rounded-md px-1.5 py-0.5 border shadow-sm transition-all duration-300 select-none whitespace-nowrap ${
                          isActive 
                            ? "bg-slate-900 border-slate-950 text-white opacity-100" 
                            : "bg-white border-slate-200 text-slate-500 opacity-80"
                        }`}
                      >
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Fallback space-y block removed as the interactive dashboard is now enabled on mobile */}

              <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-sm relative min-h-[145px] flex flex-col justify-between transition-all duration-300">
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-[15px] text-slate-800 tracking-tight">
                      {integrations[activeIntegration].title}
                    </h4>
                    <span 
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: `${integrations[activeIntegration].color}25`,
                        color: integrations[activeIntegration].color,
                        backgroundColor: `${integrations[activeIntegration].color}10`,
                      }}
                    >
                      {integrations[activeIntegration].status}
                    </span>
                  </div>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-light">
                    {integrations[activeIntegration].desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 mt-3 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1 text-slate-400">
                    <span>Sync Rate:</span>
                    <span className="font-semibold text-slate-600">
                      {integrations[activeIntegration].syncRate}
                    </span>
                  </div>
                  <a 
                    href="/contact"
                    className="font-bold hover:underline transition-colors flex items-center gap-1"
                    style={{ color: integrations[activeIntegration].color }}
                  >
                    <span>Integrate Now</span>
                    <ArrowRight size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes flow {
          to {
            stroke-dashoffset: -32;
          }
        }
        .animate-flow {
          stroke-dasharray: 6, 12;
          animation: flow 1.5s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default IntegrationsOverview;
