// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Link } from "react-router-dom";

// import image1 from "../assets/SCSC/s1.jpeg";
// import image2 from "../assets/cyber3.jpeg";
// import image3 from "../assets/Welfare/o2.jpeg";
// import image4 from "../assets/Csr/img2.jpeg";
// import image5 from "../assets/NCDE/n2.jpeg";

// export default function AnimatedCards() {
//   const scrollRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end end"],
//   });

//   const card1X = useTransform(scrollYProgress, [0.0, 0.10, 0.20], ["20vw", "0vw", "-35vw"]);
//   const card1Opacity = useTransform(scrollYProgress, [0.0, 0.00, 0.20, 0.23], [0, 1, 1, 0]);

//   const card2X = useTransform(scrollYProgress, [0.20, 0.30, 0.40], ["35vw", "0vw", "-35vw"]);
//   const card2Opacity = useTransform(scrollYProgress, [0.18, 0.21, 0.40, 0.43], [0, 1, 1, 0]);

//   const card3X = useTransform(scrollYProgress, [0.40, 0.50, 0.60], ["35vw", "0vw", "-35vw"]);
//   const card3Opacity = useTransform(scrollYProgress, [0.38, 0.41, 0.60, 0.63], [0, 1, 1, 0]);

//   const card4X = useTransform(scrollYProgress, [0.60, 0.70, 0.80], ["35vw", "0vw", "-35vw"]);
//   const card4Opacity = useTransform(scrollYProgress, [0.58, 0.61, 0.80, 0.83], [0, 1, 1, 0]);

//   const card5X = useTransform(scrollYProgress, [0.80, 0.90, 1.00], ["35vw", "0vw", "-15vw"]);
//   const card5Opacity = useTransform(scrollYProgress, [0.78, 0.81, 1.00, 1.05], [0, 1, 1, 0]);

//   const cards = [
//     {
//       title: "SCSC AGM",
//       subtitle: "SCSC AGM at Novotel Hyderabad",
//       desc: "Concluded another impactful year at SCSC, working with Cyberabad Police towards a safer and secure Hyderabad.",
//       img: image1,
//     },
//     {
//       title: "Cyber Safety",
//       subtitle: "National Security Event at ISB",
//       desc: "National Security event at ISB Hyderabad organized by MHA I4C, Telangana Police, T4C and SCSC.",
//       img: image2,
//     },
//     {
//       title: "Orphan Children",
//       subtitle: "Elite K9 Unit",
//       desc: "School fee aid extended to 17 Covid orphan children in Telangana.",
//       img: image3,
//     },
//     {
//       title: "CSR Activities",
//       subtitle: "Social Impact Through Collaboration",
//       desc: "Corporate partnership contributions improving health, safety & social development.",
//       img: image4,
//     },
//     {
//       title: "NCDE Program",
//       subtitle: "National Cyber Defence Education",
//       desc: "Attended NCDE launch at CRPF Shamirpet and discussed SCSC’s impact with dignitaries.",
//       img: image5,
//     },
//   ];

//   return (
//     <section ref={scrollRef} className="relative w-full h-[450vh] bg-[#edece8] px-4 sm:px-10">
//       <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
//         <div className="relative w-full max-w-6xl flex justify-center">
//           <Link to="/Career">
//             <motion.div
//               style={{ x: card1X, opacity: card1Opacity }}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <LargeCard {...cards[0]} z={50} />
//             </motion.div>
//           </Link>

//           <Link to="/">
//             <motion.div
//               style={{ x: card2X, opacity: card2Opacity }}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <LargeCard {...cards[1]} z={40} />
//             </motion.div>
//           </Link>

//           <motion.div
//             style={{ x: card3X, opacity: card3Opacity }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <LargeCard {...cards[2]} z={30} />
//           </motion.div>

//           <Link to="/Csr">
//             <motion.div
//               style={{ x: card4X, opacity: card4Opacity }}
//               className="absolute inset-0 flex items-center justify-center"
//             >
//               <LargeCard {...cards[3]} z={20} />
//             </motion.div>
//           </Link>

//           <motion.div
//             style={{ x: card5X, opacity: card5Opacity }}
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <LargeCard {...cards[4]} z={10} />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function LargeCard({ title, subtitle, desc, img, z = 10 }) {
//   return (
//     <div
//       className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-[90%] md:h-[80vh] h-auto gap-6 md:gap-12"
//       style={{ zIndex: z }}
//     >
//       {/* Image */}
//       <div className="w-full md:w-[45%] h-[40vh] md:h-[75vh] rounded-2xl overflow-hidden">
//         <img
//           src={img}
//           alt={title}
//           className="w-full h-full object-cover md:rotate-[-6deg]"
//           draggable={false}
//         />
//       </div>

//       {/* Text Content */}
//       <div className="w-full md:w-[50%] rounded-xl py-6 px-5 md:px-8 text-center md:text-left">
//         <p className="text-gray-600 text-sm uppercase tracking-wide">{subtitle}</p>

//         <h3 className="text-black text-3xl md:text-[72px] md:leading-[80px] font-serif font-semibold mt-2">
//           {title}
//         </h3>

//         <button className="mt-6 w-36 h-12 md:w-40 md:h-40 border border-black rounded-full flex items-center justify-center text-lg font-semibold transition duration-300 hover:bg-blue-700 hover:text-white mx-auto md:mx-0">
//           Explore
//         </button>

//         <p className="text-gray-700 text-base md:text-lg mt-6 md:mt-8 leading-6 md:leading-7 max-w-md mx-auto md:mx-0">
//           {desc}
//         </p>
//       </div>
//     </div>
//   );
// }


// Improved responsive version of AnimatedCards
// Fully optimized UI + mobile/tablet responsive improvements

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import image1 from "../assets/SCSC/s1.jpeg";
import image2 from "../assets/cyber3.jpeg";
import image3 from "../assets/Welfare/o2.jpeg";
import image4 from "../assets/Csr/img2.jpeg";
import image5 from "../assets/NCDE/n2.jpeg";

export default function AnimatedCards() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const card1X = useTransform(scrollYProgress, [0.0, 0.10, 0.20], ["20vw", "0vw", "-35vw"]);
  const card1Opacity = useTransform(scrollYProgress, [0.0, 0.00, 0.20, 0.23], [0, 1, 1, 0]);

  const card2X = useTransform(scrollYProgress, [0.20, 0.30, 0.40], ["35vw", "0vw", "-35vw"]);
  const card2Opacity = useTransform(scrollYProgress, [0.18, 0.21, 0.40, 0.43], [0, 1, 1, 0]);

  const card3X = useTransform(scrollYProgress, [0.40, 0.50, 0.60], ["35vw", "0vw", "-35vw"]);
  const card3Opacity = useTransform(scrollYProgress, [0.38, 0.41, 0.60, 0.63], [0, 1, 1, 0]);

  const card4X = useTransform(scrollYProgress, [0.60, 0.70, 0.80], ["35vw", "0vw", "-35vw"]);
  const card4Opacity = useTransform(scrollYProgress, [0.58, 0.61, 0.80, 0.83], [0, 1, 1, 0]);

  const card5X = useTransform(scrollYProgress, [0.80, 0.90, 1.00], ["35vw", "0vw", "-15vw"]);
  const card5Opacity = useTransform(scrollYProgress, [0.78, 0.81, 1.00, 1.05], [0, 1, 1, 0]);

  const cards = [
    {
      title: "SCSC AGM",
      subtitle: "SCSC AGM at Novotel Hyderabad",
      desc: "Concluded another impactful year at SCSC, working with Cyberabad Police towards a safer and secure Hyderabad.",
      img: image1,
    },
    {
      title: "Cyber Safety",
      subtitle: "National Security Event at ISB",
      desc: "National Security event at ISB Hyderabad organized by MHA I4C, Telangana Police, T4C and SCSC.",
      img: image2,
    },
    {
      title: "Orphan Children",
      subtitle: "Elite K9 Unit",
      desc: "School fee aid extended to 17 Covid orphan children in Telangana.",
      img: image3,
    },
    {
      title: "CSR Activities",
      subtitle: "Social Impact Through Collaboration",
      desc: "Corporate partnership contributions improving health, safety & social development.",
      img: image4,
    },
    {
      title: "NCDE Program",
      subtitle: "National Cyber Defence Education",
      desc: "Attended NCDE launch at CRPF Shamirpet and discussed SCSC’s impact with dignitaries.",
      img: image5,
    },
  ];

  return (
    <section ref={scrollRef} className="relative w-full h-[450vh] bg-[#edece8] px-2 sm:px-6 md:px-10">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl flex justify-center">

          <Link to="/Career">
            <motion.div style={{ x: card1X, opacity: card1Opacity }} className="absolute inset-0 flex items-center justify-center">
              <LargeCard {...cards[0]} z={50} />
            </motion.div>
          </Link>

          <Link to="/">
            <motion.div style={{ x: card2X, opacity: card2Opacity }} className="absolute inset-0 flex items-center justify-center">
              <LargeCard {...cards[1]} z={40} />
            </motion.div>
          </Link>

          <motion.div style={{ x: card3X, opacity: card3Opacity }} className="absolute inset-0 flex items-center justify-center">
            <LargeCard {...cards[2]} z={30} />
          </motion.div>

          <Link to="/Csr">
            <motion.div style={{ x: card4X, opacity: card4Opacity }} className="absolute inset-0 flex items-center justify-center">
              <LargeCard {...cards[3]} z={20} />
            </motion.div>
          </Link>

          <motion.div style={{ x: card5X, opacity: card5Opacity }} className="absolute inset-0 flex items-center justify-center">
            <LargeCard {...cards[4]} z={10} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LargeCard({ title, subtitle, desc, img, z = 10 }) {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-[95%] md:max-w-[90%] h-auto md:h-[80vh] gap-6 md:gap-12 p-4 md:p-0"
      style={{ zIndex: z }}
    >
      <div className="w-full md:w-[45%] h-[32vh] sm:h-[40vh] md:h-[75vh] rounded-2xl overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover md:rotate-[-6deg]" draggable={false} />
      </div>

      <div className="w-full md:w-[50%] rounded-xl py-4 px-3 sm:px-6 md:px-8 text-center md:text-left">
        <p className="text-gray-600 text-xs sm:text-sm uppercase tracking-wide">{subtitle}</p>

        <h3 className="text-black text-2xl sm:text-4xl md:text-[64px] md:leading-[70px] font-serif font-semibold mt-2">
          {title}
        </h3>
        
        <Link to="/Career">
          <button className="mt-6 w-32 sm:w-36 h-10 sm:h-12 border border-black rounded-full flex items-center justify-center text-base sm:text-lg font-semibold transition duration-300 hover:bg-blue-700 hover:text-white mx-auto md:mx-0 shadow-md">
            Explore
          </button>
        </Link>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-4 md:mt-8 leading-5 sm:leading-6 md:leading-7 max-w-md mx-auto md:mx-0">
          {desc}
        </p>
      </div>
    </div>
  );
}
