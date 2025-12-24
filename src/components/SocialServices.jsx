// import React, { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useNavigate } from "react-router-dom"; // for redirect
// import foodD from "../assets/FoodD.jpg";
// import security from "../assets/cy-secur.png";
// import dogs2 from "../assets/dogs2.webp";

// function SocialServices() {
//   const containerRef = useRef(null);
//   const navigate = useNavigate();
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end end"],
//   });

//   // Horizontal movement
//   const x1 = useTransform(scrollYProgress, [0, 1  ], [0, -500]);
//   const x2 = useTransform(scrollYProgress, [0, 1], [0, 0]);
//   const x3 = useTransform(scrollYProgress, [0, 1], [0, 500]);

//   // Scale + opacity
//   const scale = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1, 1]);
//   const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

//   const handleRedirect = () => {
//     navigate("/career");
//   };

//   return (
//     <div ref={containerRef} className="relative bg-[#F2F3F5] py-8 sm:py-16 overflow-hidden">
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-16 text-[#4A70A9]">
//         Social Services
//       </h2>

//       <div className={`relative w-full -mt-8 sm:-mt-16 ${isMobile ? 'flex flex-col items-center justify-center space-y-8' : 'h-[600px] flex items-center justify-center'}`}>
//         {/* Image 1 - Food Distribution */}
//         <motion.div
//           className={`flex flex-col items-center cursor-pointer ${isMobile ? '' : 'absolute'}`}
//           style={isMobile ? { scale, opacity } : { x: x1, scale, opacity }}
//           onClick={handleRedirect}
//         >
//           <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-[#4A70A9]">
//             Food Distribution
//           </h3>
//           <div className="relative w-[250px] sm:w-[300px] md:w-[400px] h-[280px] sm:h-[340px] md:h-[450px] rounded-lg overflow-hidden shadow-xl group">
//             <img
//               src={foodD}
//               alt="Food Distribution"
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />

//             {/* Blue overlay sliding from top to bottom */}
//             <div className="absolute inset-0 bg-[#4A70A9] translate-y-[-100%] group-hover:translate-y-0 opacity-50 transition-all duration-700 ease-in-out"></div>
//           </div>
//         </motion.div>

//         {/* Image 2 - Security Services */}
//         <motion.div
//           className={`flex flex-col items-center cursor-pointer ${isMobile ? '' : 'absolute'}`}
//           style={isMobile ? { scale, opacity } : { x: x2, scale, opacity }}
//           onClick={handleRedirect}
//         >
//           <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-gray-800">
//             Security Services
//           </h3>
//           <div className="relative w-[250px] sm:w-[300px] md:w-[400px] h-[280px] sm:h-[340px] md:h-[450px] rounded-lg overflow-hidden shadow-xl group">
//             <img
//               src={security}
//               alt="Security Services"
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-[#4A70A9] translate-y-[-100%] group-hover:translate-y-0 opacity-50 transition-all duration-700 ease-in-out"></div>
//           </div>
//         </motion.div>

//         {/* Image 3 - Animal Welfare */}
//         <motion.div
//           className={`flex flex-col items-center cursor-pointer ${isMobile ? '' : 'absolute'}`}
//           style={isMobile ? { scale, opacity } : { x: x3, scale, opacity }}
//           onClick={handleRedirect}
//         >
//           <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-blue-600">
//             Animal Welfare
//           </h3>
//           <div className="relative w-[250px] sm:w-[300px] md:w-[400px] h-[280px] sm:h-[340px] md:h-[450px] rounded-lg overflow-hidden shadow-xl group">
//             <img
//               src={dogs2}
//               alt="Animal Welfare"
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-[#4A70A9] translate-y-[-100%] group-hover:translate-y-0 opacity-50 transition-all duration-700 ease-in-out"></div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default SocialServices;

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import foodD from "../assets/FoodD.jpg";
import security from "../assets/cy-secur.png";
import dogs2 from "../assets/dogs2.webp";

function SocialServices() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); 
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  // Horizontal animation for desktop only
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 350]);

  // Scale + fade animation (all screens)
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  const handleRedirect = () => navigate("/career");

  return (
    <div
      ref={containerRef}
      className="relative bg-[#F2F3F5] py-10 sm:py-16 overflow-hidden"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-16 text-[#4A70A9]">
        Social Services
      </h2>

      <div
        className={`relative w-full 
        ${isMobile
          ? "flex flex-wrap justify-center gap-10 px-4"
          : "h-[550px] flex items-center justify-center"
        }`}
      >
        {[
          { title: "Food Distribution", img: foodD },
          { title: "Security Services", img: security },
          { title: "Animal Welfare", img: dogs2 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`flex flex-col items-center cursor-pointer 
              ${isMobile ? "relative" : "absolute"}
            `}
            style={
              isMobile
                ? { scale, opacity }
                : i === 0
                ? { x: x1, scale, opacity }
                : i === 1
                ? { x: x2, scale, opacity }
                : { x: x3, scale, opacity }
            }
            onClick={handleRedirect}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-[#4A70A9]">
              {item.title}
            </h3>

            {/* Smaller responsive image container */}
            <div
              className="
                relative 
                w-[180px] sm:w-[220px] md:w-[250px] lg:w-[280px] xl:w-[300px]
                h-[200px] sm:h-[240px] md:h-[280px] lg:h-[310px] xl:h-[340px]
                rounded-xl overflow-hidden shadow-xl group
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#4A70A9] translate-y-[-100%] group-hover:translate-y-0 opacity-50 transition-all duration-700 ease-in-out"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SocialServices;
