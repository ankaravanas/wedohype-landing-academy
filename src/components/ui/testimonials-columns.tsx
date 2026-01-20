"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 md:p-8 rounded-[23px] border border-[#d5e9c6] bg-white shadow-[0px_4px_91px_1px_rgba(135,135,135,0.1)] max-w-xs w-full"
                  key={i}
                >
                  <div className="text-[#15301f] text-[14px] md:text-[15px] leading-[22px]">{text}</div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-[#15301f] tracking-tight leading-5 text-[14px]">{name}</div>
                      <div className="leading-5 text-[#15301f]/60 tracking-tight text-[13px]">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
