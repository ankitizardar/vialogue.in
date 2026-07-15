import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ButtonGlobalProps {
  text: string;
  onClick?: () => void;
  property: boolean;
}

const ButtonGlobal: React.FC<ButtonGlobalProps> = ({
  text,
  onClick,
  property,
}) => {
  if (property) {
    return (
      <Link href="/contact" className="w-full sm:w-auto flex">
      <button
        onClick={onClick}
        className="
          group relative overflow-hidden
          flex items-center justify-center gap-3
          px-5 py-3
          rounded-xl
          bg-gradient-to-r from-[#7C3AED] to-purple-400
          text-white font-medium
          transition-all duration-300 ease-out
          hover:-translate-y-0.5
          hover:shadow-lg hover:shadow-purple-500/20
          active:scale-[0.97]
          w-full cursor-pointer
        "
      >
        {/* SLIDING COLOR LAYER */}
        <span
          className="
            absolute inset-0
            bg-gradient-to-r from-purple-400 to-[#7C3AED]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500 ease-out
          "
        />

        {/* CONTENT */}
        <span className="relative z-10 flex items-center gap-3">
          <span>{text}</span>
          <ArrowRight
            size={16}
            className="
              transition-transform duration-300 ease-out
              group-hover:translate-x-1
            "
          />
        </span>
      </button>
      </Link>
    );
  }

  /* SECONDARY BUTTON */
  return (
    <Link href="/contact" className="w-full sm:w-auto flex">
    <button
      onClick={onClick}
      className="
        group relative overflow-hidden
        flex items-center justify-center
        px-5 py-3
        rounded-xl
        border border-slate-200 bg-slate-50
        text-slate-700 font-medium
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:shadow-lg hover:bg-slate-100 hover:border-slate-300
        active:scale-[0.97]
        w-full cursor-pointer
      "
    >
      <span className="relative z-10 transition-colors duration-300">
        {text}
      </span>
    </button>
    </Link>
  );
};

export default ButtonGlobal;
