// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// import she1 from "../assets/images/SecureYouth.jpg";
// import she2 from "../assets/images/SheSafety.webp";
// import she3 from "../assets/images/ShuttleSafety.webp";
// import she4 from "../assets/images/Womens.webp";
// import she6 from "../assets/images/bus.webp";
// import she5 from "../assets/images/SHE5.webp";
// import she from "../assets/womenA1.jpeg"

// const plans = [
//   {
//     img: she,
//     title: "Secure Youth Initiative",
//     desc: "Empowering young women through digital safety awareness and leadership programs.",
//   },
//   {
//     img: she2,
//     title: "Leadership in Women Safety",
//     desc: "Actively involved in launching and expanding the SHE Shuttle for women’s safety in Hyderabad",
//   },
//   {
//     img: she3,
//     title: "Safety in Industrial Zones",
//     desc: "Led the launch of the 4th SHE Shuttle in Pharma & Manufacturing zones like Jeedimetla and Balanagar.",
//   },
//   {
//     img: she4,
//     title: "Building a Safe Ecosystem",
//     desc: "Encouraging women to take leadership roles in corporate and social sectors.",
//   },
//   {
//     img: she5,
//     title: "Corporate Collaboration",
//     desc: "Partnered with Vestro Solvents and local authorities to drive the SHE Shuttle initiative.",
//   },
//   {
//     img: she6,
//     title: "Women Empowerment Vision",
//     desc: "Strives to boost women’s confidence and workforce participation through safe transport.",
//   },
// ];

// const Womens = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="w-full bg-gradient-to-r from-[#0d1a3a] via-[#271e8a] to-[#5b25ff] py-10 flex flex-col items-center relative">
//       <div className="max-w-3xl text-center mb-0">
//         <h2 className="text-3xl md:text-5xl text-black text-[82px] leading-[85px] font-serif font-semibold text-white mb-3">
//           Women Empowerment Programs
//         </h2>
//         <p className="text-gray-100  text-base md:text-lg font-medium">
//           Explore impactful initiatives designed to promote women’s safety,
//           growth, and leadership.
//         </p>
//       </div>

//       <div className="relative w-full max-w-8xl h-[600vh] md:h-[600vh] lg:h-[700vh]">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className="sticky top-12 h-screen min-h-[620px] flex items-center justify-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 100, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               viewport={{ once: false, amount: 0.5 }}
//               className="absolute w-full flex justify-center px-4 sm:px-6 md:px-10"
//             >
//               <motion.div
//                 whileHover={{
//                   scale: 1.02,
//                   boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
//                 }}
//                 className="w-full max-w-4xl bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden border border-gray-200"
//               >
//                 <div className="w-full px-5 md:px-10 py-6 flex flex-col justify-center">
                  
//                   <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
//                     {plan.title}
//                   </h3>
//                   <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//                     {plan.desc}
//                   </p>
//                 </div>

//                 <div className="relative w-full flex items-center rounded-2xl justify-center p-4 sm:p-6 bg-white overflow-hidden group">
//                   {/* animated fill bg */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a3a] via-[#271e8a] to-[#5b25ff] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out rounded-2xl"></div>

//                   <div className="relative z-10 w-full max-w-3xl h-64 py-6 sm:h-80 md:h-96 rounded-xl overflow-hidden flex justify-center">
//                     <img
//                       src={plan.img}
//                       alt={plan.title}
//                       className="w-full h-full rounded-xl object-cover"
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Womens;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import she1 from "../assets/images/SecureYouth.jpg";
import she2 from "../assets/images/SheSafety.webp";
import she3 from "../assets/images/ShuttleSafety.webp";
import she4 from "../assets/images/Womens.webp";
import she6 from "../assets/images/bus.webp";
import she5 from "../assets/images/SHE5.webp";
import she from "../assets/womenA1.jpeg";

const plans = [
  {
    img: she,
    title: "Secure Youth Initiative",
    desc: "Empowering young women through digital safety awareness and leadership programs.",
  },
  {
    img: she2,
    title: "Leadership in Women Safety",
    desc: "Actively involved in launching and expanding the SHE Shuttle for women’s safety in Hyderabad.",
  },
  {
    img: she3,
    title: "Safety in Industrial Zones",
    desc: "Led the launch of the 4th SHE Shuttle in Pharma & Manufacturing zones like Jeedimetla and Balanagar.",
  },
  {
    img: she4,
    title: "Building a Safe Ecosystem",
    desc: "Encouraging women to take leadership roles in corporate and social sectors.",
  },
  {
    img: she5,
    title: "Corporate Collaboration",
    desc: "Partnered with Vestro Solvents and local authorities to drive the SHE Shuttle initiative.",
  },
  {
    img: she6,
    title: "Women Empowerment Vision",
    desc: "Boosting women’s confidence and workforce participation through safe transport solutions.",
  },
];

const Womens = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-r from-[#0d1a3a] via-[#271e8a] to-[#5b25ff] py-14 flex flex-col items-center relative">

      {/* --- Heading Section --- */}
      <div className="max-w-3xl px-4 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
          Women Empowerment Programs
        </h2>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg font-medium">
          Explore impactful initiatives designed to promote women’s safety, growth, and leadership.
        </p>
      </div>

      {/* --- Scroll Container --- */}
      <div className="relative w-full max-w-7xl" style={{ height: `${plans.length * 110}vh` }}>

        {plans.map((plan, index) => (
          <div
            key={index}
            className="sticky top-20 h-screen flex items-center justify-center px-4 sm:px-6 md:px-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.4 }}
              className="w-full max-w-4xl bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden border border-gray-200"
            >

              {/* --- Content Text --- */}
              <div className="w-full px-5 md:px-10 py-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                  {plan.title}
                </h3>

                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              {/* --- Image Section with Hover Effect --- */}
              <div className="relative w-full flex items-center justify-center p-4 sm:p-6 bg-white overflow-hidden group">

                {/* gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a3a] via-[#271e8a] to-[#5b25ff] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out rounded-2xl"></div>

                <div className="relative z-10 w-full max-w-3xl h-56 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                  <img
                    src={plan.img}
                    alt={plan.title}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
              </div>

            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Womens;

