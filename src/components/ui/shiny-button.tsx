"use client";

import type React from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function ShinyButton({ children, onClick, className = "", href }: ShinyButtonProps) {
  const baseClasses = cn(
    "group relative inline-flex items-center justify-center",
    "px-8 py-4 rounded-full",
    "bg-[#85c65f] text-white font-semibold text-[18px]",
    "overflow-hidden",
    "transition-all duration-300 ease-out",
    "hover:shadow-[0_0_40px_8px_rgba(133,198,95,0.4)]",
    "hover:-translate-y-0.5",
    "active:translate-y-0",
    className
  );

  const buttonContent = (
    <>
      {/* Shimmer effect */}
      <span className="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
        <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </span>
      {/* Glow effect on hover */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at center, rgba(168, 224, 128, 0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {buttonContent}
    </button>
  );
}
