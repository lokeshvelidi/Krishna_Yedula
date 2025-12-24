// HeroSticky.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import krishna from "../assets/Krishna_Y.jpg";

export default function HeroSticky() {
  // Scroll progress for this section only
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // 0 → before enters, 1 → after leaves
  });

  // Dark overlay gets stronger while scrolling
  const overlay = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  // Big name scales up
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 3.6]);

  // Side texts + image fade a bit
  const fadeSide = useTransform(scrollYProgress, [0, 1], [1, 0.1]);

  // Image shrinks a little on scroll
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    // Outer wrapper provides scroll length
    <section ref={ref} className="relative h-[200vh]">
      {/* Sticky viewport stage */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Gradient background like the reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a3a] via-[#271e8a] to-[#5b25ff]" />

        {/* Darkening overlay */}
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlay }}
        />

        {/* Left label */}
        <motion.div
          className="absolute left-8 sm:left-14 top-40 text-white/90 text-xl sm:text-2xl font-semibold tracking-wide z-10"
          style={{ opacity: fadeSide }}
        >
          Design Agency®
        </motion.div>

        {/* Right list */}
        <motion.ul
          className="absolute right-8 sm:right-14 top-40 text-white/90 text-base sm:text-lg space-y-4 z-10"
          style={{ opacity: fadeSide }}
        >
          <li>UX/UI Design</li>
          <li>Development</li>
          <li>Management</li>
        </motion.ul>

        {/* Center Portrait */}
        <motion.img
          src={krishna}
          alt="Krishna Yedula"
          className="absolute z-10 select-none pointer-events-none
                     max-w-none object-contain
                     left-1/2 -translate-x-1/2
                     top-1/2 -translate-y-1/2
                     w-[55vw] min-w-[320px]"
          style={{ scale: imgScale, opacity: fadeSide }}
        />

        {/* Huge brand text */}
        <motion.h1
          className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     text-white font-[serif] font-semibold
                     leading-none tracking-tight text-[16vw]"
          style={{ scale: nameScale }}
        >
          KRISHNA&nbsp;YEDULA
        </motion.h1>

        {/* Optional top nav bubble like screenshot (dummy, remove if not needed) */}
        <div className="absolute top-6 left-6 text-white/90 font-medium">VeauIy</div>
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-white/10 backdrop-blur px-4 sm:px-6 py-2 text-white/90 text-sm flex gap-4">
            <button>Home</button>
            <button>About</button>
            <button>Works</button>
            <button className="bg-white/20 rounded-full px-3 py-1">Let’s Talk</button>
          </div>
        </div>
      </div>
    </section>
  );
}
