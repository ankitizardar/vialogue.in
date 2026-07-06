import { useState, useEffect } from "react";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import CWC from "@/Global/CWC";
import VoiceAPI from "@/Sections/Services/Voice/VoiceAPI";
import VoiceHIW from "@/Sections/Services/Voice/VoiceHIW";
import VoiceDeveloper from "@/Sections/Services/Voice/VoiceDeveloper";
import VoiceCoreFeatures from "@/Sections/Services/Voice/VoiceCoreFeatures";
import ServiceHero from "@/Global/ServiceHero";
import AnimatedFeatureGrid from "@/Global/FeatureItem";
import { voice_list } from "@/Global/usecase_data";
import { voice_platform } from "@/Global/platform";
import FAQSection from "@/Global/FaqSection";
import { voiceFaq } from "@/Global/faqData";
import VoicePreviewUI from "@/Sections/Services/Voice/VoicePreviewUI";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { 
  Truck, 
  CreditCard, 
  Calendar, 
  AlertTriangle, 
  Megaphone,
  Phone,
  PhoneOff,
  Volume2,
  CheckCircle,
  RotateCcw,
  Sparkles,
  Wifi,
  Battery,
  Check
} from "lucide-react";

const overviewPoints = [
  {
    text: "Delivery confirmations",
    icon: Truck,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100 hover:border-emerald-200 hover:shadow-emerald-100/30",
    glowColor: "bg-emerald-500",
  },
  {
    text: "Payment reminders",
    icon: CreditCard,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100 hover:border-amber-200 hover:shadow-amber-100/30",
    glowColor: "bg-amber-500",
  },
  {
    text: "Appointment confirmations",
    icon: Calendar,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100 hover:border-blue-200 hover:shadow-blue-100/30",
    glowColor: "bg-blue-500",
  },
  {
    text: "Service outage alerts",
    icon: AlertTriangle,
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100 hover:border-rose-200 hover:shadow-rose-100/30",
    glowColor: "bg-rose-500",
  },
  {
    text: "Promotional voice broadcasts",
    icon: Megaphone,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100 hover:border-purple-200 hover:shadow-purple-100/30",
    glowColor: "bg-purple-500",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const VoiceCallSimulator: React.FC = () => {
  const [callState, setCallState] = useState<"ringing" | "talking" | "confirmed" | "declined">("ringing");
  const [timer, setTimer] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [clockTime, setClockTime] = useState("");

  const fullTranscript = "Hello! Your package is arriving in 15 minutes. Press 1 to confirm, or 2 to reschedule.";

  useEffect(() => {
    setClockTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callState === "talking") {
      setTimer(0);
      interval = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callState]);

  useEffect(() => {
    if (callState !== "talking") {
      setDisplayedText("");
      return;
    }
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullTranscript.length) {
        setDisplayedText(fullTranscript.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [callState]);

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative w-full max-w-[420px] bg-slate-900 rounded-[32px] p-4 shadow-2xl border-4 border-slate-800/80 overflow-hidden group select-none text-left">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none" />

      {/* Screen area */}
      <div className="relative bg-slate-950 rounded-[24px] overflow-hidden border border-slate-800/80 flex flex-col min-h-[380px]">
        {/* Device Status Bar */}
        <div className="flex justify-between items-center px-5 py-3 text-slate-400 text-xs font-semibold select-none border-b border-slate-900/50">
          <span>{clockTime}</span>
          <div className="w-16 h-4 bg-slate-900 rounded-full flex items-center justify-center border border-slate-850">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800 mr-1" />
            <span className="w-1 h-1 rounded-full bg-slate-800" />
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi size={12} className="text-slate-400" />
            <span className="text-[9px] uppercase font-extrabold tracking-widest text-slate-500">5G</span>
            <Battery size={14} className="text-slate-400 rotate-90" />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex flex-col justify-between p-6">
          <AnimatePresence mode="wait">
            {callState === "ringing" && (
              <motion.div
                key="ringing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex-1 flex flex-col justify-between items-center"
              >
                <div className="text-center mt-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-bold uppercase tracking-wider mb-3">
                    <Sparkles size={11} className="animate-pulse" />
                    Interactive Simulator
                  </div>
                  <h4 className="text-xl font-extrabold text-white">Vialogue Verification</h4>
                  <p className="text-slate-400 text-sm mt-1">Calling via Smart Route...</p>
                </div>

                {/* Call Icon / Pulsing Wave */}
                <div className="relative my-8 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute w-24 h-24 rounded-full bg-purple-500/10 border border-purple-500/20"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                    className="absolute w-18 h-18 rounded-full bg-purple-500/20 border border-purple-500/30"
                  />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg border border-purple-400/30">
                    <Phone className="text-white animate-bounce" size={24} />
                  </div>
                </div>

                {/* Call Action buttons */}
                <div className="flex gap-8 justify-center w-full mb-2">
                  <button
                    onClick={() => setCallState("declined")}
                    className="flex flex-col items-center gap-2 group/btn"
                  >
                    <div className="w-12 h-12 rounded-full bg-rose-500 hover:bg-rose-600 flex items-center justify-center text-white transition-all shadow-lg hover:scale-105 active:scale-95 duration-200">
                      <PhoneOff size={20} className="rotate-135" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 group-hover/btn:text-rose-400 transition-colors">Decline</span>
                  </button>

                  <button
                    onClick={() => setCallState("talking")}
                    className="flex flex-col items-center gap-2 group/btn"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white transition-all shadow-lg hover:scale-105 active:scale-95 duration-200 animate-pulse">
                      <Phone size={20} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 group-hover/btn:text-emerald-400 transition-colors">Answer</span>
                  </button>
                </div>
              </motion.div>
            )}

            {callState === "talking" && (
              <motion.div
                key="talking"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1 flex flex-col justify-between"
              >
                {/* Caller Information */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white">Vialogue Voice Portal</h4>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-semibold">{formatTimer(timer)}</span>
                  </div>
                </div>

                {/* Animated Waveform Equalizer */}
                <div className="flex items-end justify-center gap-1.5 h-16 my-4 select-none">
                  {[3, 6, 9, 14, 10, 7, 12, 16, 10, 5, 8, 14, 11, 6, 4].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ scaleY: [1, 1.8, 1] }}
                      transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.04, ease: "easeInOut" }}
                      style={{ height: `${h * 2}px`, transformOrigin: "bottom" }}
                      className={`w-[4px] rounded-full ${i % 3 === 0 ? "bg-purple-500" : i % 3 === 1 ? "bg-indigo-400" : "bg-purple-300"}`}
                    />
                  ))}
                </div>

                {/* Live Transcript Panel */}
                <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 min-h-[90px] mb-4 flex flex-col justify-center">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Volume2 size={11} className="text-purple-400" />
                    </div>
                    <p className="text-xs font-semibold text-slate-200 leading-relaxed text-left flex-1">
                      {displayedText}
                      {displayedText.length < fullTranscript.length && (
                        <span className="inline-block w-1.5 h-3 bg-purple-500 animate-pulse ml-0.5" />
                      )}
                    </p>
                  </div>
                </div>

                {/* Simulated Dialpad Choices */}
                <div className="flex flex-col gap-2.5">
                  <div className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-wider">Simulated Phone Response</div>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setCallState("talking")} // restart transcription
                      className="px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:text-white font-bold text-xs hover:bg-slate-900 hover:border-slate-700 transition-all flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw size={12} />
                      1: Repeat
                    </button>
                    <button
                      onClick={() => setCallState("confirmed")}
                      className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-1.5"
                    >
                      <Check size={12} />
                      2: Confirm
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {callState === "confirmed" && (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex-1 flex flex-col justify-between items-center text-center py-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 mt-2">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Call Completed</h4>
                  <p className="text-xs text-slate-400 mt-2 max-w-[240px] leading-relaxed">
                    User pressed <strong className="text-white">Option 2 (Confirmed)</strong>. Flow ended successfully.
                  </p>
                </div>

                {/* Meta data display */}
                <div className="w-full bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5 mt-4 text-left">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-2">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Call Status</span>
                    <span className="text-[11px] font-bold text-emerald-400">SUCCESS_VERIFIED</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Action Log</span>
                    <span className="text-[11px] font-mono font-bold text-slate-200">wf_otp_200_ok</span>
                  </div>
                </div>

                <button
                  onClick={() => setCallState("ringing")}
                  className="mt-6 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 shadow-md"
                >
                  <RotateCcw size={12} />
                  Simulate Again
                </button>
              </motion.div>
            )}

            {callState === "declined" && (
              <motion.div
                key="declined"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex-1 flex flex-col justify-between items-center text-center py-4"
              >
                <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 mt-2">
                  <PhoneOff size={28} className="text-rose-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Call Declined</h4>
                  <p className="text-xs text-rose-400/90 font-medium mt-1">Fallback Activated</p>
                  <p className="text-xs text-slate-400 mt-2 max-w-[240px] leading-relaxed">
                    User declined or was offline. Automated SMS backup pipeline triggered.
                  </p>
                </div>

                {/* Meta data display */}
                <div className="w-full bg-slate-900/60 border border-slate-800/80 rounded-xl p-3.5 mt-4 text-left">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-2">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Channel Status</span>
                    <span className="text-[11px] font-bold text-rose-400 animate-pulse">VOICE_FAILED</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Backup Action</span>
                    <span className="text-[11px] font-bold text-emerald-400">SMS_DELIVERED ✓</span>
                  </div>
                </div>

                <button
                  onClick={() => setCallState("ringing")}
                  className="mt-6 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 shadow-md"
                >
                  <RotateCcw size={12} />
                  Simulate Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function Voice() {
  return (
    <div className="bg-white sm:text-left text-center">
      <NavBar />

      {/* 1. HERO */}
      <ServiceHero
        title={
          <span className="text-3xl sm:text-5xl lg:text-[46px] leading-tight block">
            AUTOMATE CUSTOMER COMMUNICATION WITH{" "}
            <span className="text-gradient">SMART VOICE SOLUTIONS</span>
          </span>
        }
        description="Vialogue Voice enables businesses to communicate with customers at scale using a unified voice platform designed for <b>speed, reliability, personalization, and automation.</b>"
        customRightElement={<VoicePreviewUI />}

      />

      {/* 2. OVERVIEW — Voice Communication That Customers Actually Respond To */}
      <section id="overview"></section>
      <div className="bg-white overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="px-4 sm:px-10 lg:px-40 py-20 max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-purple-50 border border-purple-200 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">Overview</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 heading-two leading-tight mb-6"
            >
              Voice Communication That Customers{" "}
              <br />
              <span className="text-gradient">Actually Respond To</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-slate-600 subheading leading-relaxed max-w-3xl mx-auto text-justify font-light"
            >
              Voice is one of the most effective channels for urgent, high-importance customer
              communication because it reaches instantly and gets attention, works without internet
              or smartphone dependency, improves trust for transactional and security messages,
              and supports regional languages and accessibility.
            </motion.p>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12">
            {/* Left — Voice Call Simulator */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              className="lg:col-span-6 flex justify-center relative group w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#F9A8D4]/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 w-full flex justify-center">
                <VoiceCallSimulator />
              </div>
            </motion.div>

            {/* Right — Points */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-lg font-bold text-slate-800 mb-2 border-l-4 border-[#884CED] pl-3"
              >
                Trusted by businesses for:
              </motion.p>

              <motion.div
                variants={containerVariants}
                className="flex flex-col gap-4"
              >
                {overviewPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border ${point.borderColor} shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 group cursor-default`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${point.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                      <point.icon size={20} className={point.iconColor} />
                    </div>
                    <div className="flex-1">
                      <span className="text-slate-700 font-semibold text-[15px] group-hover:text-[#884CED] transition-colors duration-300 capitalize">
                        {point.text}
                      </span>
                    </div>
                    <span className={`w-2.5 h-2.5 rounded-full ${point.glowColor} opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-sm`} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. USE CASES */}
      <section id="use-cases"></section>
      <div className="bg-gray-50">
        <CWC heading="Use Cases" list={voice_list} />
      </div>

      {/* 4. PLATFORM CAPABILITIES (FEATURES) */}
      <section id="platform"></section>
      <div className="bg-[#FDF7FF]">
        <AnimatedFeatureGrid
          title="FEATURES"
          description="Powerful Voice Features That Improve Customer Outcomes"
          items={voice_platform}
        />
      </div>

      {/* 5. VOICE API */}
      <section id="api-infra"></section>
      <div className="bg-white">
        <VoiceAPI />
      </div>

      {/* 6. VOICE API HIGHLIGHTS */}
      <div className="bg-white">
        <VoiceHIW />
      </div>

      {/* 7. DEVELOPER INTEGRATION */}
      <div className="bg-white">
        <VoiceDeveloper />
      </div>

      {/* 8. CORE FEATURES */}
      {/* <div className="bg-white">
        <VoiceCoreFeatures />
      </div> */}

      {/* 9. FAQ */}
      <FAQSection title="SEO FAQs – Vialogue Voice" data={voiceFaq} />

      <hr className="border-gray-200 mb-0 block" />
      <ReadySection
        heading="Ready to Scale Your Customer Communication with Voice?"
        paragraph="Make customer updates instant, trusted and actionable with Vialogue Voice."
      />
      <Footer />
    </div>
  );
}
