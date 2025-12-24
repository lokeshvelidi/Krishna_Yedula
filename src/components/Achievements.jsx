// Achievements.jsx
import React, { useEffect, useState, useRef } from "react";
import bg from "../assets/Achievements.jpg"

const statsData = [
  { number: 20000, label: "PPE Kits distributed", suffix: "" },
  { number: 230, label: "Consultants", suffix: "+" },
  { number: 90, label: "Awards Won", suffix: "+" },
  { number: 100, label: "Satisfied Clients", suffix: "%" },
];

const Achievements = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  // Trigger animation when section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Count-up numbers
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((value, idx) =>
          value < statsData[idx].number
            ? Math.min(value + Math.ceil(statsData[idx].number / 50), statsData[idx].number)
            : statsData[idx].number
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 mb-20 text-white bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('" + bg + "')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-serif italic font-bold mb-5">Our Achievements</h2>
        <p className="text-lg md:text-xl mb-16">
          Delivering excellence across projects with proven results.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center bg-white bg-opacity-10 rounded-xl px-8 py-6 w-40 transform transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-3xl font-bold mb-2">
                {counts[index]}
                {stat.suffix}
              </span>
              <span className="text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
