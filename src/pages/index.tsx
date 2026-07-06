import React from "react";
import Head from "next/head";
import NavBar from "@/Components/NavBar";
import HeroSection from "@/Sections/HeroSection/HeroSection";
import ClientLogos from "@/Sections/ClientLogos/ClientLogos";
import ProductSolutions from "@/Sections/ProductSolutions/ProductSolutions";
import FeaturesBento from "@/Sections/FeaturesBento/FeaturesBento";
import IndustriesSection from "@/Sections/Industries/IndustriesSection";
import PlatformDemo from "@/Sections/PlatformDemo/PlatformDemo";
import WhyVialogue from "@/Sections/WhyVialogue/WhyVialogue";
import TestimonialsCarousel from "@/Sections/Testimonials/TestimonialsCarousel";
import FAQSection from "@/Sections/FAQSection";
import CTASection from "@/Sections/CTASection/CTASection";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vialogue | Enterprise Messaging Platform - SMS, WhatsApp & RCS</title>
        <meta 
          name="description" 
          content="Power your enterprise communication with Vialogue. Unified REST API for SMS, WhatsApp Business, RCS messaging, verification OTPs, and intelligent AI chatbots at scale." 
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="bg-[#FFFFFF] text-slate-800 min-h-screen relative overflow-x-hidden">
        {/* Navigation */}
        <NavBar />

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Client Logos Slider */}
        <ClientLogos />

        {/* 3. Product Solutions — WHITE */}
        <div className="bg-white">
          <ProductSolutions />
        </div>

        {/* 4. Features Bento Grid — #FAF3FE */}
        <div className="bg-[#FAF3FE]">
          <FeaturesBento />
        </div>

        {/* 5. Industries Section — WHITE */}
        <div className="bg-white">
          <IndustriesSection />
        </div>

        {/* 6. Platform Demo Section — #FAF3FE */}
        <div className="bg-[#FAF3FE]">
          <PlatformDemo />
        </div>

        {/* 7. Why Vialogue (Stats) — WHITE */}
        <div className="bg-white">
          <WhyVialogue />
        </div>

        {/* 8. Testimonials Carousel — #FAF3FE */}
        <div className="bg-[#FAF3FE]">
          <TestimonialsCarousel />
        </div>

        {/* FAQ Section */}
        <div className="bg-white">
          <FAQSection />
        </div>

        {/* 9. CTA Section */}
        <CTASection />

        {/* 10. Footer */}
        <Footer />
      </div>
    </>
  );
}
