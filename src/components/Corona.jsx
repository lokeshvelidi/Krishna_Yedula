import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import bg from "../assets/KrishnaGaru.jpeg";
import covidImg from "../assets/Welfare/o1.jpeg";
import volunteersImg from "../assets/Donation/d2.jpeg";
import foodImg from "../assets/FoodD.jpg";

const mainAchievement = {
  title: "Largest Public-Private Relief Effort",
  description:
    "During the COVID pandemic in 2020–21, the Cyberabad Security Council, led by Dr. Yedula, became one of the largest public-private relief efforts in India.",
  image: bg,
};

const groupedAchievements = [
  {
    title: "Coordination & Distribution",
    items: [
      "Coordinated 2,500 volunteers.",
      "15 lakh meals and 2 lakh grocery kits were distributed.",
      "18,000 plasma donors were recruited.",
      "40,000 movement passes were issued.",
    ],
    image: volunteersImg,
  },
  {
    title: "Enablement & Infrastructure",
    items: [
      "6.5 lakh employees in the IT sector have been enabled to work from home.",
      "A 200-bed isolation center (Project Ashray) has been set up in Gachibowli.",
      "Thousands of calls for oxygen, plasma, beds, and medicine were responded to through a 24x7 control room.",
    ],
    image: foodImg,
  },
  {
    title: "Support & Drives",
    items: [
      "A record drive of 38,000 vaccinations in a single day was organized in collaboration with Medicover Hospital.",
      "Medical infrastructure was provided to PHCs in 33 districts.",
      "Hundreds of Covid bodies were cremated in collaboration with Feed the Needy.",
    ],
    image: covidImg,
  },
];

export default function Corona() {
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
    <div className="min-h-screen py-12 px-4 sm:px-8 md:px-20 lg:px-40 bg-gradient-to-b from-blue-50 to-white">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif italic text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center">
        COVID-19 Relief Efforts
      </h2>

      {/* Main Achievement Section */}
      <motion.div
        ref={(el) => (divRefs.current[0] = el)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isVisible(0) ? 1 : 0,
          scale: isVisible(0) ? 1 : 0.8,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] bg-cover bg-center mb-12 sm:mb-16 rounded-3xl overflow-hidden shadow-2xl"
        style={{ backgroundImage: `url(${mainAchievement.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white xl:mt-72 sm:mt-56 px-4 sm:px-8 md:px-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              {mainAchievement.title}
            </h3>
            <p className="text-base sm:text-lg md:text-xl">
              {mainAchievement.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Grouped Achievements */}
      {groupedAchievements.map((group, groupIndex) => (
        <motion.div
          key={groupIndex}
          ref={(el) => (divRefs.current[groupIndex + 1] = el)}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isVisible(groupIndex + 1) ? 1 : 0,
            y: isVisible(groupIndex + 1) ? 0 : 50,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`flex flex-col md:flex-row items-center mb-10 sm:mb-12 md:mb-16 p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-2xl ${
            groupIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={group.image}
              alt={group.title}
              className="w-full h-48 sm:h-60 md:h-64 object-cover rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 md:px-8 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              {group.title}
            </h3>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-600 space-y-1 sm:space-y-2">
              {group.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
