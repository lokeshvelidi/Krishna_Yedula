// import React from "react";
// import { motion } from "framer-motion";
// import award1 from "../assets/award1.webp";
// import award from "../assets/doctorate_in_humanity.jpeg"
// import award2 from "../assets/award2.webp";

// function HeroSlider() {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//   };

//   return (
//     <div className="bg-gray-100">
//       {/* SECTION 1 */}
//       <section className="sticky top-0 h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 sm:px-10 md:px-16 lg:px-24 gap-10 lg:gap-20 bg-gray-100 text-center lg:text-left">
//         <motion.div
//           className="w-full lg:w-[55%] flex justify-center"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//         >
//           <img
//             src={award1}
//             alt="Award 1"
//             className="w-[95%] sm:w-[80%] md:w-[600px] lg:w-[700px] h-auto rounded-xl shadow-md"
//           />
//         </motion.div>
//         <motion.div
//           className="w-full lg:w-[45%]"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//             Krishna Yedula Receives India Responsible Leader Award 2023
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
//             Krishna Yedula, Vice President at Virtusa, was honored with the India Responsible Leader Award 2023 at the India ESG Summit in Raipur. Recognized for his leadership in sustainability and social initiatives during the COVID-19 pandemic, he embodies the spirit of Atmanirbhar Bharat.
//           </p>
//           <button className="px-5 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base">
//             Learn More
//           </button>
//         </motion.div>
//       </section>

//       {/* SECTION 2 */}
//       <section className="sticky top-0 h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 sm:px-10 md:px-16 lg:px-24 gap-10 lg:gap-20 bg-gray-100 text-center lg:text-left">
//         <motion.div
//           className="w-full lg:w-[55%] flex justify-center"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.4 }}
//         >
//           <img
//             src={award}
//             alt="Award 2"
//             className="w-[95%] sm:w-[80%] md:w-[600px] lg:w-[700px] h-[500px] rounded-xl shadow-md"
//           />
//         </motion.div>
//         <motion.div
//           className="w-full lg:w-[45%]"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.4 }}
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//             Honorary Doctorate (2024) – George Washington University of Peace
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
//             In 2024, Krishna Yedula was conferred an Honorary Doctorate by the George Washington University of Peace in recognition of his outstanding contributions to community development, sustainability, and corporate social responsibility.
//           </p>
//           <button className="px-5 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base">
//             Learn More
//           </button>
//         </motion.div>
//       </section>

//       {/* SECTION 3 */}
//       <section className="sticky top-0 h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 sm:px-10 md:px-16 lg:px-24 gap-10 lg:gap-20 bg-gray-100 text-center lg:text-left">
//         <motion.div
//           className="w-full lg:w-[55%] flex justify-center"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.4 }}
//         >
//           <img
//             src={award2}
//             alt="Award 3"
//             className="w-[95%] sm:w-[80%] md:w-[600px] lg:w-[700px] h-auto rounded-xl shadow-md"
//           />
//         </motion.div>
//         <motion.div
//           className="w-full lg:w-[45%]"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.4 }}
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//             Standing Ovation Award – Virtusa (for COVID Services)
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
//             Krishna Yedula was honored with the Standing Ovation Award by Virtusa for his remarkable contributions during the COVID-19 pandemic. His leadership in coordinating relief measures, ensuring employee safety, and driving community support initiatives showcased his compassion, resilience, and commitment to social responsibility.
//           </p>
//           <button className="px-5 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base">
//             Learn More
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// export default HeroSlider;

import React from "react";
import { motion } from "framer-motion";
import award1 from "../assets/award1.webp";
import award from "../assets/doctorate_in_humanity.jpeg";
import award2 from "../assets/award2.webp";

function HeroSlider() {
  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const sectionStyle =
    "sticky top-0 min-h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 sm:px-10 md:px-16 lg:px-24 gap-10 lg:gap-20 bg-gray-100 text-center lg:text-left py-10";

  const imgStyle =
    "w-[95%] sm:w-[80%] md:w-[550px] lg:w-[650px] xl:w-[750px] h-auto rounded-xl shadow-md";

  return (
    <div className="bg-gray-100">

      {/* SECTION 1 */}
      <section className={sectionStyle}>
        <motion.div
          className="w-full lg:w-[55%] flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={award1} alt="Award 1" className={imgStyle} />
        </motion.div>

        <motion.div
          className="w-full lg:w-[45%]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Krishna Yedula Receives India Responsible Leader Award 2023
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
            Krishna Yedula, Vice President at Virtusa, was honored with the India Responsible Leader Award 2023 at the India ESG Summit in Raipur.
          </p>

          {/* <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button> */}
        </motion.div>
      </section>

      {/* SECTION 2 */}
      <section className={sectionStyle}>
        <motion.div
          className="w-full lg:w-[55%] flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <img src={award} alt="Award" className={imgStyle} />
        </motion.div>

        <motion.div
          className="w-full lg:w-[45%]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Honorary Doctorate (2024) – George Washington University of Peace
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
            In 2024, Krishna Yedula was conferred an Honorary Doctorate for his
            outstanding contributions to community development & CSR.
          </p>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </motion.div>
      </section>

      {/* SECTION 3 */}
      <section className={sectionStyle}>
        <motion.div
          className="w-full lg:w-[55%] flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <img src={award2} alt="Award 3" className={imgStyle} />
        </motion.div>

        <motion.div
          className="w-full lg:w-[45%]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Standing Ovation Award – Virtusa (COVID Services)
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
            Krishna Yedula was honored for his remarkable contributions during
            the COVID-19 pandemic ensuring safety & community support.
          </p>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default HeroSlider;

