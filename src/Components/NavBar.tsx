"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  MessageSquare,
  MessageCircle,
  Radio,
  Phone,
  Bot,
  Link,
  Megaphone,
  Zap,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import Router from "next/router";
import ButtonOne from "./InnerComponents/ButtonOne";
import { useRouter } from "next/router";

const NavBar = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement[]>([]);
  const linksRefTwo = useRef<HTMLDivElement[]>([]);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobilePlatform, setMobilePlatform] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const closeMenuInstant = () => {
    setOpen(false);
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    gsap.set(panelRef.current, { display: "none", opacity: 1 });
  };

  // Close menu on path change
  useEffect(() => {
    closeMenuInstant();
    setMobileMenu(false);
    setMobilePlatform(false);
  }, [router.asPath]);

  // Close menu on click outside
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      if (!open) return;
      const panel = panelRef.current;
      const trigger = document.getElementById("platform-menu-trigger");
      if (
        panel &&
        !panel.contains(event.target as Node) &&
        trigger &&
        !trigger.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, [open]);

  /* DESKTOP MEGA MENU */

  const openMenu = () => {
    setOpen(true);

    if (closeTimeout.current) clearTimeout(closeTimeout.current);

    gsap.set(panelRef.current, { display: "block" });

    gsap.fromTo(
      linksRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.4,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      linksRefTwo.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.4,
        ease: "power3.out",
      },
    );
  };

  const closeMenu = () => {
    setOpen(false);

    closeTimeout.current = setTimeout(() => {
      gsap.to(panelRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.set(panelRef.current, { display: "none", opacity: 1 });
        },
      });
    }, 150);
  };

  /* MOBILE MENU */

  const openMobileMenu = () => {
    setMobileMenu(true);

    setTimeout(() => {
      gsap.fromTo(
        mobilePanelRef.current,
        { y: "-100%" },
        {
          y: "0%",
          duration: 0.5,
          ease: "power3.out",
        },
      );
    }, 10);
  };

  const closeMobileMenu = () => {
    gsap.to(mobilePanelRef.current, {
      y: "-100%",
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        setMobileMenu(false);
        setMobilePlatform(false);
      },
    });
  };

  /* SERVICES */

  const services = [
    {
      label: "SMS",
      desc: "High deliverability SMS messaging platform",
      icon: MessageSquare,
      path: "/sms",
    },
    {
      label: "WhatsApp",
      desc: "Official WhatsApp Business messaging API",
      icon: MessageCircle,
      path: "/whatsapp",
    },
    {
      label: "RCS Messaging",
      desc: "Next-generation rich messaging channel",
      icon: Radio,
      path: "/rcs",
    },
    {
      label: "Voice API",
      desc: "Programmable voice calls and automation",
      icon: Phone,
      path: "/voice",
    },
  ];

  /* FEATURES */

  const features = [
    {
      label: "Agent Assist",
      desc: "AI suggestions during live conversations",
      icon: Bot,
      path: "/agent",
    },
    {
      label: "Integration API",
      desc: "Connect CRM and automation tools",
      icon: Link,
      path: "/integrate-api",
    },
    {
      label: "Bots",
      desc: "Create and automate messaging campaigns",
      icon: Megaphone,
      path: "/bots",
    },
  ];

  return (
    <>
      {/* NAVBAR */}

      <div className="fixed border-b border-slate-200/60 bg-white/75 backdrop-blur-md top-0 left-0 w-full px-0 lg:px-40 py-0 z-[10000] transition-all duration-300">
        <nav className="h-[90px] flex justify-between items-center px-4 lg:px-0">
          {/* LOGO */}

          <Image
            src="/imgs/logo2.svg"
            width={110}
            height={40}
            alt="logo"
            priority
            unoptimized
            className="cursor-pointer"
            onClick={() => {
              closeMenuInstant();
              router.push("/");
            }}
          />

          {/* DESKTOP MENU */}

          <div className="hidden lg:flex gap-10 items-center text-slate-600">
            <div
              id="platform-menu-trigger"
              className="relative flex items-center gap-1 cursor-pointer font-medium transition-colors py-2 group text-slate-600 hover:text-slate-950"
              onMouseEnter={openMenu}
              onClick={open ? closeMenu : openMenu}
            >
              Platform
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${open ? "rotate-180 text-brand-purple" : "text-slate-400"}`}
              />
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>

            <div
              className="relative cursor-pointer hover:text-slate-950 font-medium transition-colors py-2 group"
              onMouseEnter={closeMenu}
              onClick={() => {
                closeMenuInstant();
                router.push("/industry");
              }}
            >
              Industry
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>

            <div
              className="relative cursor-pointer hover:text-slate-950 font-medium transition-colors py-2 group"
              onMouseEnter={closeMenu}
              onClick={() => {
                closeMenuInstant();
                router.push("/about");
              }}
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>

            <div
              className="relative cursor-pointer hover:text-slate-950 font-medium transition-colors py-2 group"
              onMouseEnter={closeMenu}
              onClick={() => {
                closeMenuInstant();
                router.push("/contact");
              }}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </div>

          {/* BUTTON */}

          <div className="hidden lg:block">
            <ButtonOne text="Book a Demo" />
          </div>

          {/* MOBILE ICON */}

          <div
            className="lg:hidden cursor-pointer text-slate-800"
            onClick={() => {
              if (mobileMenu) closeMobileMenu();
              else openMobileMenu();
            }}
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </div>
        </nav>
      </div>

      {/* DESKTOP MEGA MENU */}

      <div
        ref={panelRef}
        style={{ display: "none" }}
        className="fixed rounded-3xl top-[85px] left-1/2 -translate-x-1/2 w-[820px] bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/80 z-[9999999]"
        onMouseLeave={closeMenu}
      >
        <div className="mx-auto p-8 grid grid-cols-12 gap-6">
          {/* CHANNELS */}

          <div className="col-span-5 border-r border-slate-100 pr-4">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
              CHANNELS
            </h3>

            <div className="flex flex-col gap-1.5">
              {services.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    ref={(el) => {
                      if (el) linksRef.current[i] = el;
                    }}
                    onClick={() => {
                      router.push(item.path);
                      closeMenu();
                    }}
                    className="group flex items-start gap-4 cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-all duration-200"
                  >
                    <div className="mt-0.5 text-brand-purple min-w-9 min-h-9 p-2 border-slate-200/60 rounded-xl border bg-slate-50 group-hover:bg-purple-50 group-hover:border-purple-200 group-hover:scale-105 transition-all duration-250 flex items-center justify-center shadow-sm">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <div className="min-w-0">
                      <div className="font-bold text-sm text-slate-800 group-hover:text-brand-purple transition-colors">
                        {item.label}
                      </div>

                      <div className="text-xs text-slate-500 mt-0.5 leading-normal">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FEATURES */}

          <div className="col-span-4 border-r border-slate-100 pr-4">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
              FEATURES
            </h3>

            <div className="flex flex-col gap-1.5">
              {features.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    ref={(el) => {
                      if (el) linksRefTwo.current[i] = el;
                    }}
                    onClick={() => {
                      router.push(item.path);
                      closeMenu();
                    }}
                    className="group flex items-start gap-4 cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-all duration-200"
                  >
                    <div className="mt-0.5 text-brand-purple min-w-9 min-h-9 p-2 border-slate-200/60 rounded-xl border bg-slate-50 group-hover:bg-purple-50 group-hover:border-purple-200 group-hover:scale-105 transition-all duration-250 flex items-center justify-center shadow-sm">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <div className="min-w-0">
                      <div className="font-bold text-sm text-slate-800 group-hover:text-brand-purple transition-colors">
                        {item.label}
                      </div>

                      <div className="text-xs text-slate-500 mt-0.5 leading-normal">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DEVELOPER SHOWCASE */}

          <div className="col-span-3 flex flex-col justify-between select-none">
            <div className="space-y-2">
              <span className="text-[9px] font-bold text-slate-450 uppercase tracking-widest block">Developer Hub</span>
              <h4 className="text-xs font-bold text-slate-850 leading-tight">API Platform Status</h4>
              <p className="text-[10px] text-slate-550 leading-normal font-light">
                Route OTP codes, campaigns, and conversational notifications globally with low-latency APIs.
              </p>
            </div>

            <div className="my-3 py-2 px-3 bg-slate-950 rounded-xl border border-slate-850 font-mono text-[9px] text-[#00E5FF] shadow-inner relative overflow-hidden group/console">
              <div className="absolute top-1 right-2 text-[8px] text-slate-600 uppercase font-sans">vialogue-cli</div>
              <div className="flex gap-1.5 items-center mb-1 text-slate-500 border-b border-slate-900 pb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-emerald-450">$</span> npm i @vialogue/sdk
              <div className="text-slate-500 mt-1 text-[7px] flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                API Connection Live
              </div>
            </div>

            <a
              href="/contact"
              onClick={() => closeMenu()}
              className="text-[10px] font-bold text-brand-purple hover:text-brand-purple/80 transition-colors flex items-center gap-1 cursor-pointer"
            >
              Integration Guides <ArrowRight size={10} className="mt-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}

      {mobileMenu && (
        <div
          ref={mobilePanelRef}
          className="fixed top-0 text-left left-0 w-full h-screen bg-white text-slate-850 z-[9999999] lg:hidden overflow-y-auto"
        >
          {/* MOBILE HEADER */}

          <div className="flex justify-between items-center px-4 py-6 border-b border-slate-100">
            <Image
              src="/imgs/logo2.svg"
              width={110}
              height={40}
              alt="logo"
              priority
              unoptimized
              className="cursor-pointer"
              onClick={() => {
                router.push("/");
                closeMobileMenu();
              }}
            />

            <X size={28} className="cursor-pointer text-slate-800" onClick={closeMobileMenu} />
          </div>

          <div className="px-6 py-10 flex flex-col gap-8">
            {/* PLATFORM ACCORDION */}

            <div>
              <div
                onClick={() => setMobilePlatform(!mobilePlatform)}
                className="flex items-center justify-between font-semibold text-lg cursor-pointer text-slate-800 hover:text-brand-purple transition-colors"
              >
                Platform
                {mobilePlatform ? (
                  <ChevronUp size={20} className="text-brand-purple" />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>

              {mobilePlatform && (
                <div className="mt-6 flex flex-col gap-8 pl-2 border-l border-slate-100">
                  {/* CHANNELS */}

                  <div>
                    <h3 className="text-xs text-brand-purple mb-4 font-semibold tracking-widest">
                      CHANNELS
                    </h3>

                    <div className="flex text-left flex-col gap-5">
                      {services.map((item, i) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={i}
                            onClick={() => {
                              router.push(item.path);
                              closeMobileMenu();
                            }}
                            className="flex items-start gap-3 cursor-pointer group"
                          >
                            <Icon size={20} className="text-brand-purple mt-0.5 group-hover:scale-110 transition-transform" />

                            <div>
                              <div className="font-semibold text-slate-800 group-hover:text-brand-purple transition-colors">
                                {item.label}
                              </div>

                              <div className="text-sm text-slate-500">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* FEATURES */}
                  <hr className="border-slate-100" />

                  <div>
                    <h3 className="text-xs text-left text-brand-purple mb-4 font-semibold tracking-widest">
                      FEATURES
                    </h3>

                    <div className="flex flex-col gap-5">
                      {features.map((item, i) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={i}
                            onClick={() => {
                              router.push(item.path);
                              closeMobileMenu();
                            }}
                            className="flex items-start gap-3 cursor-pointer group"
                          >
                            <Icon size={20} className="text-brand-purple mt-0.5 group-hover:scale-110 transition-transform" />

                            <div>
                              <div className="font-semibold text-slate-800 group-hover:text-brand-purple transition-colors">
                                {item.label}
                              </div>

                              <div className="text-sm text-slate-500">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* OTHER LINKS */}

            <div
              className="font-semibold text-lg cursor-pointer hover:text-brand-purple transition-colors text-slate-800"
              onClick={() => {
                router.push("/industry");
                closeMobileMenu();
              }}
            >
              Industry
            </div>

            <div
              onClick={() => {
                router.push("/about");
                closeMobileMenu();
              }}
              className="font-semibold text-lg cursor-pointer hover:text-brand-purple transition-colors text-slate-800"
            >
              About
            </div>

            <div
              onClick={() => {
                router.push("/contact");
                closeMobileMenu();
              }}
              className="font-semibold text-lg cursor-pointer hover:text-brand-purple transition-colors text-slate-800"
            >
              Contact
            </div>

            <div className="pt-4">
              <ButtonOne text="Book a Demo" />
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR SPACE */}

      <div className="h-[90px]" />
    </>
  );
};

export default NavBar;
