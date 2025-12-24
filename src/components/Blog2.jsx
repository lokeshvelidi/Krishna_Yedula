import React, { useState } from "react";
import { motion } from "framer-motion";

// replace these with your real image imports
import award1 from "../assets/award1.webp";
import award2 from "../assets/award2.webp";
import award3 from "../assets/doctorate_in_humanity.jpeg";

export default function Blog2() {
  const images = [award1, award2, award3];
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
          Legacy of Leadership: Award Journey of Krishna Yedula
        </h1>

        {/* Slider */}
        <div className="w-full relative flex justify-center items-center mb-10">
          <motion.img
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={images[index]}
            alt="Awards"
            className="w-full max-h-[450px] object-cover rounded-xl shadow-lg"
          />

          <button
            className="absolute left-0 bg-black/40 text-white px-3 py-2 rounded-lg"
            onClick={prevImage}
          >
            ‹
          </button>
          <button
            className="absolute right-0 bg-black/40 text-white px-3 py-2 rounded-lg"
            onClick={nextImage}
          >
            ›
          </button>
        </div>

        {/* Text Content */}
        <p className="text-lg leading-8 text-gray-700 mb-6">
          Krishna Yedula, the General Secretary of SCSC (Society for Cyberabad Security Council),
          is widely recognized for his impactful contribution towards public safety, cybersecurity
          culture building, road safety education, crime prevention awareness and community policing.
        </p>

        <p className="text-lg leading-8 text-gray-700 mb-8">
          His effective collaborations with law enforcement, IT stakeholders and citizens enabled
          Hyderabad Cyberabad to build one of the strongest safety ecosystems in India. Due to his
          proactive service mindset and consistent public contribution, Krishna Yedula has been
          honoured with multiple prestigious awards.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Awards & Recognitions</h2>

        <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
          <li>Doctorate in Humanity – Social Service Recognition</li>
          <li>Cyber Security Excellence Award – Digital Safety Contribution</li>
          <li>Lions Club Prestigious Service Award – Community Service</li>
          <li>Appreciation Award by Telangana Police – Community Policing Programs</li>
          <li>NCC / CSR / NGO Honors – Voluntary Service Impact</li>
        </ul>

        <p className="text-lg leading-8 text-gray-700 mt-10">
          These awards represent the respect built from ground level impact, crisis management,
          youth empowerment initiatives and strategic planning towards safer society vision. Krishna
          Yedula continues to inspire thousands through service-led leadership.
        </p>
      </div>
    </section>
  );
}
