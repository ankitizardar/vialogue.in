"use client";

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Globe,
} from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9+\s-()]{10,15}$/, "Please enter a valid phone number (10-15 digits)")
    .required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
  acceptedTerms: Yup.boolean()
    .oneOf([true], "You must accept the terms & conditions"),
  recaptchaToken: Yup.string()
    .required("Please complete the reCAPTCHA verification"),
});

export default function ContactUs() {
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      acceptedTerms: false,
      recaptchaToken: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus({ type: "loading", message: "" });
      try {
        const apiBase = (process.env.NEXT_PUBLIC_API_URL || "https://smsapi.vialogue.io").replace(/\/$/, "");
        const response = await fetch(`${apiBase}/contact-us`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            message: values.message,
            recaptchaToken: values.recaptchaToken,
          }),
        });

        let data: any = {};
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          try {
            data = await response.json();
          } catch {
            // keep data as empty object on parse error
          }
        }

        if (!response.ok) {
          throw new Error(data.message || "Failed to submit message");
        }

        setStatus({
          type: "success",
          message: data.message || "Thank you! Your message has been sent successfully.",
        });

        resetForm();
        recaptchaRef.current?.reset();
      } catch (err: any) {
        let displayMessage = err.message || "An unexpected error occurred. Please try again later.";
        if (
          displayMessage.includes("Cannot POST") ||
          displayMessage.includes("is not valid JSON") ||
          displayMessage.includes("Unexpected token")
        ) {
          displayMessage = "Unable to submit message. The server endpoint is temporarily unavailable. Please try again later.";
        }
        setStatus({
          type: "error",
          message: displayMessage,
        });
      }
    },
  });

  return (
    <section className="relative bg-[#FFFFFF] py-16 px-4 md:px-12 lg:px-20 overflow-hidden">
      {/* Visual background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-light">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.06)] overflow-hidden">
          <div className="grid md:grid-cols-5">

            {/* LEFT PANEL */}
            <div className="md:col-span-2 relative bg-[#7C3AED] p-6 sm:p-12 text-white h-full flex flex-col justify-between overflow-hidden">
              {/* Background elements */}
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/20 blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-3xl font-medium tracking-tight">Contact Information</h3>
                <p className="mt-2 text-lg text-white/80 font-light">
                  Say something to start a live chat!
                </p>

                <div className="space-y-6 text-base mt-12">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                      <Phone size={20} className="text-white" />
                    </div>
                    <span className="font-light tracking-wide">+91 84480 12300</span>
                  </div>

                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                      <Mail size={20} className="text-white" />
                    </div>
                    <span className="font-light tracking-wide">contact@vialogue.io</span>
                  </div>

                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                      <Globe size={20} className="text-white" />
                    </div>
                    <span className="font-light tracking-wide">vialogue.io</span>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm mt-1">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <span className="font-light leading-relaxed tracking-wide mt-1">
                      1st Floor, Landmark Cyber Park, <br />
                      Sector 67, Gurugram, 122101, Haryana
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-16 sm:mt-24 relative z-10">
                <a href="https://www.instagram.com/vialoguemedia/" target="_blank" rel="noopener noreferrer" className="p-2.5 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                  <Instagram size={20} className="text-white" />
                </a>
                <a href="https://x.com/VialogueM" target="_blank" rel="noopener noreferrer" className="p-2.5 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                  <Twitter size={20} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/company/vialogue-media/" target="_blank" rel="noopener noreferrer" className="p-2.5 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                  <Linkedin size={20} className="text-white" />
                </a>
                <a href="https://www.facebook.com/VialogueMedia/" target="_blank" rel="noopener noreferrer" className="p-2.5 w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
                  <Facebook size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="md:col-span-3 p-6 sm:p-12">
              <form onSubmit={formik.handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.firstName}
                    touched={formik.touched.firstName}
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.lastName}
                    touched={formik.touched.lastName}
                  />
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                    touched={formik.touched.email}
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.phoneNumber}
                    touched={formik.touched.phoneNumber}
                  />
                </div>

                {/* Message */}
                <div className="pt-2">
                  <label className={`block text-sm font-medium mb-2 transition-colors ${
                    formik.touched.message && formik.errors.message ? "text-red-500" : "text-slate-700"
                  }`}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message..."
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-b bg-transparent outline-none py-2 text-slate-800 placeholder-slate-400 transition-colors resize-none ${
                      formik.touched.message && formik.errors.message 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-slate-300 focus:border-[#7C3AED]"
                    }`}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <span className="text-xs text-red-500 mt-1 block font-light">
                      {formik.errors.message}
                    </span>
                  )}
                </div>

                {/* Terms & Conditions */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      id="acceptedTerms"
                      name="acceptedTerms"
                      checked={formik.values.acceptedTerms}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-1 w-4 h-4 accent-[#7C3AED] cursor-pointer"
                    />
                    <label
                      htmlFor="acceptedTerms"
                      className="cursor-pointer leading-relaxed font-light select-none"
                    >
                      I accept{" "}
                      <a
                        href="/terms"
                        className="text-[#7C3AED] font-medium hover:underline transition-all"
                      >
                        terms & Conditions
                      </a>{" "}
                      and authorize Vialogue to send promotional, transactional
                      notifications via SMS, RCS, Voice, Email and Whatsapp.
                    </label>
                  </div>
                  {formik.touched.acceptedTerms && formik.errors.acceptedTerms && (
                    <span className="text-xs text-red-500 mt-1 font-light">
                      {formik.errors.acceptedTerms}
                    </span>
                  )}
                </div>

                {/* Google reCAPTCHA */}
                <div className="pt-2 flex flex-col items-start w-full overflow-hidden">
                  <div className="origin-left scale-[0.8] min-[360px]:scale-[0.88] min-[400px]:scale-100">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                      onChange={(value) => {
                        formik.setFieldValue("recaptchaToken", value || "");
                      }}
                      onExpired={() => {
                        formik.setFieldValue("recaptchaToken", "");
                      }}
                    />
                  </div>
                  {formik.touched.recaptchaToken && formik.errors.recaptchaToken && (
                    <span className="text-xs text-red-500 mt-1 font-light">
                      {formik.errors.recaptchaToken}
                    </span>
                  )}
                </div>

                {/* Status Messages */}
                {status.type === "success" && (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-medium animate-fade-in">
                    {status.message}
                  </div>
                )}

                {status.type === "error" && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium animate-fade-in">
                    {status.message}
                  </div>
                )}

                {/* Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="relative overflow-hidden group w-full md:w-auto px-8 py-3.5 rounded-xl bg-[#7C3AED] text-white font-medium hover:bg-[#6D28D9] transition-all active:scale-[0.98] shadow-lg shadow-[#7C3AED]/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span className="relative z-10">
                      {status.type === "loading" ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  touched?: boolean;
}

function Input({
  label,
  type = "text",
  error,
  touched,
  ...props
}: InputProps) {
  return (
    <div className="relative group mt-4 flex flex-col w-full">
      <div className="relative">
        <input
          type={type}
          placeholder=" "
          className={`block w-full border-b bg-transparent py-2 text-slate-800 focus:border-[#7C3AED] outline-none transition-colors peer ${
            touched && error ? "border-red-500 focus:border-red-500" : "border-slate-300"
          }`}
          {...props}
        />
        <label className={`absolute left-0 top-2 text-sm cursor-text transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:font-medium peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-medium ${
          touched && error 
            ? "text-red-500 peer-focus:text-red-500 peer-not-placeholder-shown:text-red-500" 
            : "text-slate-500 peer-focus:text-[#7C3AED] peer-not-placeholder-shown:text-[#7C3AED]"
        }`}>
          {label}
        </label>
      </div>
      {touched && error && (
        <span className="text-xs text-red-500 mt-1 font-light">{error}</span>
      )}
    </div>
  );
}