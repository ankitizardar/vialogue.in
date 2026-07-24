import Link from "next/link";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  span: string;
  links: FooterLink[];
}

const footerData: FooterSection[] = [
  {
    title: "Channels",
    span: "",
    links: [
      { label: "SMS", href: "/sms" },
      { label: "WhatsApp", href: "/whatsapp" },
      { label: "Voice", href: "/voice" },
      { label: "RCS Business", href: "/rcs" },
    ],
  },
  {
    title: "Features",
    span: "",
    links: [
      { label: "Agent", href: "/agent" },
      { label: "Integration API", href: "/integrate-api" },
      { label: "Bots", href: "/bots" },
    ],
  },
  {
    title: "Company",
    span: "col-span-2 sm:col-span-1",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Industry", href: "/industry" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FDF6FF] border-t border-purple-100 text-slate-650 text-left sm:text-left relative z-10">
      <div className="px-4 sm:px-6 lg:px-40 py-12 lg:py-20">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">

          <div className="w-full lg:w-auto lg:min-w-[250px]">
            <Image 
              src="/imgs/logo2.svg" 
              alt="footer-logo" 
              className="mb-4 mx-auto sm:mx-0" 
              width={120} 
              height={40}
            />
            <div className="space-y-4 text-sm text-center sm:text-left">
              <div className="flex gap-3">
                <span className="text-slate-600 w-full leading-relaxed font-light">
                  1st Floor, Landmark Cyber Park,
                  <br />
                  Sector 67, Gurugram – 122101,
                  <br />
                  Haryana, India
                </span>
              </div>
              <div className="pt-3 flex justify-center sm:justify-start">
                <Image 
                  src="/imgs/meta-business-partner.svg" 
                  alt="Meta Business Partner" 
                  width={180} 
                  height={76} 
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 mt-10 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
            {footerData.map((section, index) => (
              <div key={index} className={section.span} >
                <h4 className="text-slate-900 text-left text-xs font-semibold tracking-wider uppercase mb-4 text-brand-purple">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link 
                        href={link.href} 
                        scroll={true}
                        className={"text-sm text-left hover:text-brand-purple transition-colors duration-200"}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-purple-100 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center sm:items-center text-sm gap-4">
          <div className="flex text-white gap-2 sm:gap-3 mt-8 sm:mt-0 justify-center w-fit sm:justify-left sm:max-w-[280px]">
            <Link href="https://www.instagram.com/vialoguemedia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 bg-slate-100 hover:bg-[#8141EF] border border-slate-200 hover:border-transparent rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group">
              <Instagram size={16} className="text-slate-500 group-hover:text-white transition-colors" />
            </Link>
            <Link href="https://x.com/VialogueM" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-8 h-8 bg-slate-100 hover:bg-[#8141EF] border border-slate-200 hover:border-transparent rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group">
              <Twitter size={16} className="text-slate-500 group-hover:text-white transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/company/vialogue-media/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 bg-slate-100 hover:bg-[#8141EF] border border-slate-200 hover:border-transparent rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group">
              <Linkedin size={16} className="text-slate-500 group-hover:text-white transition-colors" />
            </Link>
            <Link href="https://www.facebook.com/VialogueMedia/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 bg-slate-100 hover:bg-[#8141EF] border border-slate-200 hover:border-transparent rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group">
              <Facebook size={16} className="text-slate-500 group-hover:text-white transition-colors" />
            </Link>
          </div>
          <p className="text-center sm:text-left text-slate-500">© 2026 Vialogue. All Rights Reserved.</p>
          <div className="flex gap-4 sm:gap-6 text-slate-500">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/terms" className="hover:text-slate-900 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;