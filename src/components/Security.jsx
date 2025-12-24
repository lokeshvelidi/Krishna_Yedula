// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import IT from "../assets/it compinies.jpg";
// import cyber1 from "../assets/cyberSecu.jpg";

// const works = [
// {
// title: "Corporate Leadership",
// img: IT,
// link: "/work/bronx",
// desc: "Leading with innovation and strategic thinking to build sustainable business practices.",
// },
// {
// title: "Sustainability Initiatives",
// link: "/work/movve",
// desc: "Driving environmental initiatives that balance growth with ecological responsibility.",
//  img:  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
     
// },
// {
// title: "Community Impact",
// img:  cyber1,
// link: "/work/minimalista",
// desc: "Empowering communities through outreach, education, and social responsibility projects.",


// }
// ];







// export default function Security() {
// const [page, setPage] = useState(0);

// const nextPage = () => setPage((p) => (p + 1) % works.length);
// const prevPage = () => setPage((p) => (p - 1 + works.length) % works.length);

// return (
// <div className="flex flex-col items-center justify-center w-full bg-[#f6f4ee] px-10 h-screen py-8 overflow-hidden">
// {/* Title */}
// <h2 className="text-5xl italic font-serif font-semibold text-gray-900 mb-12">
// <span className="text-style-italic">Physical and 
// </span> <span>Electronic Security</span>
// </h2>

//   {/* Landscape Book */}
//   <div className="relative w-[full] md:w-full lg:w-[full] aspect-[16/9] bg-white shadow-2xl border border-gray-200 rounded-2xl overflow-hidden perspective-[2000px]">
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={page}
//         initial={{ rotateY: -90, opacity: 0 }}
//         animate={{ rotateY: 0, opacity: 1 }}
//         exit={{ rotateY: 90, opacity: 0 }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//         className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center"
//         style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
//       >
//         {/* Left Page */}
//         <div className="w-full lg:w-[40%] h-full flex flex-col items-center justify-center bg-[#f9f7f2] border-r border-gray-300 p-6">
//           <h3 className="text-3xl font-serif italic mb-4 text-gray-800">
//             {works[page].title}
//           </h3>
//           <p className="text-gray-600 text-center px-4 leading-relaxed">
//             {works[page].desc}
//           </p>
//         </div>

//         {/* Right Page */}
//         <div className="w-full lg:w-[60%] h-full bg-white flex items-center justify-center overflow-hidden">
//           <img
//             src={works[page].img}
//             alt={works[page].title}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   </div>

//   {/* Controls */}
//   <div className="flex items-center gap-8 mt-10">
//     <button
//       onClick={prevPage}
//       className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-semibold text-gray-700 transition-all"
//     >
//       ‹ Prev
//     </button>
//     <button
//       onClick={nextPage}
//       className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-semibold text-gray-700 transition-all"
//     >
//       Next ›
//     </button>
//   </div>

//   {/* Page Indicator */}
//   <div className="mt-4 text-gray-500 text-sm">
//     Page {page + 1} / {works.length}
//   </div>
// </div>


// );
// }