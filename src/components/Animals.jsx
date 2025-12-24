import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ppe from "../assets/Distribution.jpg";
import dogs2Img from "../assets/dogs2.webp";

const hero = {
  title: "Honoring the unsung heroes in our communities",
  description: "",
};

const points = [
  {
    title: "PPE Kits and Masks Distribution",
    description: "20,000 PPE kits and 1 million masks were distributed.",
    image: ppe,
  },
  {
    title: "Feeding Stray Dogs",
    description: "More than 1,500 stray dogs were fed.",
    image: dogs2Img,
  },
];

export default function Animals() {
  const [scrollY, setScrollY] = useState(0);
  const divRefs = useRef([]);

  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isVisible = (index) => {
    const divTop = divRefs.current[index]?.offsetTop || 0;
    const divHeight = divRefs.current[index]?.offsetHeight || 0;
    return (
      scrollY >= divTop - window.innerHeight / 2 &&
      scrollY <= divTop + divHeight
    );
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-b from-green-50 to-white">
      {/* Hero Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl italic font-serif font-semibold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center leading-snug">
        {hero.title}
      </h2>
      {hero.description && (
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-12 sm:mb-16">
          {hero.description}
        </p>
      )}

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20 lg:gap-28 mb-10 sm:mb-12 md:mb-16">
        {points.map((point, index) => (
          <motion.div
            key={index}
            ref={(el) => (divRefs.current[index] = el)}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isVisible(index) ? 1 : 0,
              y: isVisible(index) ? 0 : 50,
            }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.2 }}
            className="flex-1 p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-2xl"
          >
            {/* Image */}
            <div className="mb-4 sm:mb-6">
              <img
                src={point.image}
                alt={point.title}
                className="w-full h-48 sm:h-60 md:h-72 object-cover rounded-lg"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 text-center md:text-left">
              {point.title}
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 text-center md:text-left">
              {point.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
